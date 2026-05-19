'use strict';

const THEME_KEY = 'casino-glossary-theme';
const DATA_URL = './data/glossary.json';

const state = {
  data: null,
  activeCategories: new Set(),
  searchQuery: ''
};

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const theme = stored === 'light' ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getCategoryName(catId) {
  if (!state.data) return catId;
  const found = state.data.categories.find(c => c.id === catId);
  return found ? found.name : catId;
}

function getCategoryIcon(catId) {
  if (!state.data) return '';
  const found = state.data.categories.find(c => c.id === catId);
  return found && found.icon ? found.icon : '';
}

function renderMetrics() {
  if (!state.data) return;
  const termsEl = document.getElementById('metric-terms');
  const catsEl = document.getElementById('metric-categories');
  if (termsEl) termsEl.textContent = String(state.data.terms.length);
  if (catsEl) catsEl.textContent = String(state.data.categories.length);
}

function renderCategoryChips() {
  const container = document.getElementById('category-filters');
  if (!container || !state.data) return;

  state.data.categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.category = cat.id;
    btn.className = 'category-chip px-3 py-1.5 rounded-full text-sm border border-slate-300 dark:border-slate-700 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent';
    btn.innerHTML = (cat.icon ? `<span aria-hidden="true">${escapeHtml(cat.icon)}</span> ` : '') + escapeHtml(cat.name);
    btn.addEventListener('click', () => toggleCategory(cat.id));
    container.appendChild(btn);
  });

  const allBtn = container.querySelector('[data-category="all"]');
  if (allBtn) {
    allBtn.addEventListener('click', () => {
      state.activeCategories.clear();
      updateCategoryChipsUI();
      combineFilters();
    });
  }
}

function toggleCategory(catId) {
  if (state.activeCategories.has(catId)) {
    state.activeCategories.delete(catId);
  } else {
    state.activeCategories.add(catId);
  }
  updateCategoryChipsUI();
  combineFilters();
}

function updateCategoryChipsUI() {
  const chips = document.querySelectorAll('.category-chip');
  const noneActive = state.activeCategories.size === 0;
  chips.forEach(chip => {
    const cat = chip.dataset.category;
    const isActive = cat === 'all' ? noneActive : state.activeCategories.has(cat);
    chip.classList.toggle('is-active', isActive);
    chip.classList.toggle('bg-accent', isActive);
    chip.classList.toggle('text-slate-900', isActive);
    chip.classList.toggle('border-accent', isActive);
  });
}

function renderAlphabetNav() {
  if (!state.data) return;
  const letters = new Set();
  state.data.terms.forEach(t => {
    if (t.name) letters.add(t.name.charAt(0).toLocaleUpperCase('pl'));
  });
  const sorted = Array.from(letters).sort((a, b) => a.localeCompare(b, 'pl'));

  const navList = document.getElementById('alphabet-nav');
  const select = document.getElementById('alphabet-select');

  if (navList) {
    sorted.forEach(letter => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#letter-${letter}`;
      a.textContent = letter;
      a.className = 'inline-flex items-center justify-center w-8 h-8 rounded border border-slate-300 dark:border-slate-700 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent';
      a.addEventListener('click', e => {
        e.preventDefault();
        scrollToLetter(letter);
      });
      li.appendChild(a);
      navList.appendChild(li);
    });
  }

  if (select) {
    sorted.forEach(letter => {
      const opt = document.createElement('option');
      opt.value = letter;
      opt.textContent = letter;
      select.appendChild(opt);
    });
    select.addEventListener('change', e => {
      if (e.target.value) scrollToLetter(e.target.value);
    });
  }
}

function scrollToLetter(letter) {
  const article = document.querySelector(`[data-letter="${letter}"]`);
  if (article) article.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTerm(slug) {
  const article = document.getElementById(slug);
  if (article) {
    article.scrollIntoView({ behavior: 'smooth', block: 'start' });
    article.focus({ preventScroll: true });
  }
}

function renderTerms(terms) {
  const main = document.getElementById('glossary');
  const status = document.getElementById('glossary-status');
  if (!main) return;

  main.querySelectorAll('article.term-card').forEach(a => a.remove());

  if (!terms || terms.length === 0) {
    if (status) {
      status.textContent = state.data && state.data.terms.length === 0
        ? 'Słownik w fazie szkieletu - definicje w przygotowaniu.'
        : 'Brak wyników dla wybranych filtrów.';
    }
    main.setAttribute('aria-busy', 'false');
    return;
  }

  if (status) status.remove();

  let currentLetter = '';
  terms.forEach(term => {
    const letter = term.name ? term.name.charAt(0).toLocaleUpperCase('pl') : '';
    const article = document.createElement('article');
    article.id = term.id;
    article.className = 'term-card mb-6 p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900';
    article.dataset.category = term.category || '';
    article.tabIndex = -1;
    if (letter !== currentLetter) {
      article.dataset.letter = letter;
      currentLetter = letter;
    }

    const altNames = Array.isArray(term.alternativeNames) && term.alternativeNames.length
      ? `<p class="text-sm text-slate-500 mt-1">Synonimy: ${term.alternativeNames.map(escapeHtml).join(', ')}</p>`
      : '';

    const shortDef = term.shortDef
      ? `<p class="mt-3 text-base">${escapeHtml(term.shortDef)}</p>`
      : '<p class="mt-3 text-sm italic text-slate-500">Definicja w przygotowaniu (faza redakcyjna).</p>';

    const fullDef = term.fullDef
      ? `<div class="mt-3 prose-sm text-slate-700 dark:text-slate-300">${escapeHtml(term.fullDef)}</div>`
      : '';

    const example = term.example
      ? `<div class="mt-3 p-3 rounded bg-slate-50 dark:bg-slate-800 text-sm"><strong>Przykład:</strong> ${escapeHtml(term.example)}</div>`
      : '';

    const related = Array.isArray(term.relatedTerms) && term.relatedTerms.length
      ? `<p class="mt-3 text-sm">Powiązane: ${term.relatedTerms.map(r => `<a href="#${escapeHtml(r)}" class="text-accent hover:underline" data-related="${escapeHtml(r)}">${escapeHtml(r)}</a>`).join(', ')}</p>`
      : '';

    const sourceLink = term.sourceUrl
      ? `<a href="${escapeHtml(term.sourceUrl)}" class="text-accent hover:underline" rel="noopener">źródło</a>`
      : '';

    article.innerHTML = `
      <header class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 class="text-xl font-bold">
          <a href="#${escapeHtml(term.id)}" class="hover:text-accent">${escapeHtml(term.name)}</a>
        </h2>
        <span class="text-xs uppercase tracking-wider text-slate-500" data-cat-label>
          ${escapeHtml(getCategoryIcon(term.category))} ${escapeHtml(getCategoryName(term.category))}
        </span>
      </header>
      ${altNames}
      ${shortDef}
      ${fullDef}
      ${example}
      ${related}
      <footer class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex flex-wrap gap-3">
        <span>Autor: ${escapeHtml(term.author || 'redakcja')}</span>
        ${sourceLink}
      </footer>
    `;

    article.querySelectorAll('[data-related]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        scrollToTerm(a.dataset.related);
      });
    });

    main.appendChild(article);
  });

  main.setAttribute('aria-busy', 'false');
}

function filterBySearch(query) {
  if (!state.data) return [];
  const q = (query || '').trim().toLocaleLowerCase('pl');
  if (!q) return state.data.terms.slice();

  return state.data.terms.filter(term => {
    if (term.name && term.name.toLocaleLowerCase('pl').includes(q)) return true;
    if (Array.isArray(term.alternativeNames)) {
      if (term.alternativeNames.some(n => n.toLocaleLowerCase('pl').includes(q))) return true;
    }
    if (term.fullDef && term.fullDef.toLocaleLowerCase('pl').includes(q)) return true;
    if (term.shortDef && term.shortDef.toLocaleLowerCase('pl').includes(q)) return true;
    return false;
  });
}

function filterByCategories(terms, categories) {
  if (!categories || categories.size === 0) return terms;
  return terms.filter(t => categories.has(t.category));
}

function combineFilters() {
  let result = filterBySearch(state.searchQuery);
  result = filterByCategories(result, state.activeCategories);
  result.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'pl'));
  renderTerms(result);
}

function renderJSONLD(terms) {
  if (!state.data) return;
  const items = (terms || []).map(t => ({
    '@type': 'DefinedTerm',
    '@id': `https://automaty.bet/slownik-kasynowy/#${t.id}`,
    name: t.name,
    description: t.shortDef || t.fullDef || '',
    inDefinedTermSet: 'https://automaty.bet/slownik-kasynowy/',
    termCode: t.id,
    url: t.sourceUrl || `https://automaty.bet/slownik-kasynowy/#${t.id}`
  }));

  const payload = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Polski Słownik Kasynowy',
    inLanguage: 'pl',
    url: 'https://automaty.bet/slownik-kasynowy/',
    hasDefinedTerm: items
  };

  const node = document.getElementById('jsonld-terms');
  if (node) node.textContent = JSON.stringify(payload);
}

function initSearch() {
  const input = document.getElementById('search');
  if (!input) return;
  let timer = null;
  input.addEventListener('input', e => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      state.searchQuery = e.target.value;
      combineFilters();
    }, 120);
  });
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
}

async function loadData() {
  try {
    const res = await fetch(DATA_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    state.data = await res.json();
  } catch (err) {
    console.error('Failed to load glossary data:', err);
    const status = document.getElementById('glossary-status');
    if (status) status.textContent = 'Nie udało się załadować danych słownika.';
    return;
  }

  renderMetrics();
  renderCategoryChips();
  updateCategoryChipsUI();
  renderAlphabetNav();
  combineFilters();
  renderJSONLD(state.data.terms);

  if (window.location.hash) {
    const slug = window.location.hash.slice(1);
    setTimeout(() => scrollToTerm(slug), 50);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initThemeToggle();
  initSearch();
  loadData();
});
