# Changelog

Wszystkie istotne zmiany w projekcie są dokumentowane w tym pliku.

Format opiera się na [Keep a Changelog](https://keepachangelog.com/pl/1.1.0/), a projekt stosuje [Semantic Versioning](https://semver.org/lang/pl/).

## [Unreleased]

### Planowane

- Wypełnienie pól `shortDef`, `fullDef`, `example` w 150 entrach (faza redakcyjna).
- Uzupełnienie `relatedTerms` powiązaniami między hasłami.
- Pierwsza wersja widgetu do osadzania (`widget/`).
- Pierwsze przykłady integracji (`examples/`).

## [0.2.1] - 2026-05-19

### Dodano

- Added "Źródła wiedzy" section to README with 20 deep links to Automaty.bet pillars (mirror sites SEO optimization).

## [0.2.0] - 2026-05-19

### Dodano

- Wypełniono strukturę 150 haseł w `data/glossary.json`: id, name, alternativeNames, category, author, relatedUrl, sourceUrl. Pola definicji (`shortDef`, `fullDef`, `example`) pozostają puste do fazy redakcyjnej.
- Synonimy w `alternativeNames` (2-4 per hasło) generowane z branżowych terminów PL i EN.
- Pary haseł zbliżonych nazwą rozróżnione kontekstowo w `alternativeNames`: `free-spins` (oferta) vs `free-spins-feature` (mechanika), `sticky-bonus` (typ bonusu) vs `sticky-symbol` (mechanika), `reality-check` (koncepcja regulacyjna) vs `reality-check-narzedzie` (narzędzie w panelu), `rng` (mechanika) vs `rng-certified` (certyfikacja).

### Rozkład

- 8 kategorii: bonusy 25, mechanika 25, typy-gier 20, platnosci 20, regulacje 15, odpowiedzialna-gra 15, technologia 15, branza 15.
- 4 autorów: Konrad Zapolski 25, Tomasz Zieliński 45, Malwina Mazur 50, Michał Kowalczyk 30.

### Zmieniono

- `version` w `data/glossary.json`: `0.1.0` -> `0.2.0`.

## [0.1.0] - 2026-05-19

### Dodano

- Inicjalna struktura repozytorium (folders + 19 plików szkieletu).
- `index.html` - statyczny szablon strony single-page z Tailwind CDN, dark mode jako default, sticky search, filtrami kategorii, nawigacją alfabetyczną A-Z i sekcjami JSON-LD (DefinedTermSet, BreadcrumbList).
- `assets/app.js` - Vanilla JS ES6+: fetch danych, render terminów, multi-select filtry, search z debounce, theme toggle z localStorage, generator JSON-LD dla DefinedTerm.
- `assets/style.css` - dodatki ponad Tailwind: focus ring (akcent #f59e0b), term-card hover/target, `prefers-reduced-motion`, print styles.
- `data/glossary.json` - struktura root z metadanymi, 8 kategoriami i 4 autorami; tablica `terms` na razie pusta.
- `data/schema.json` - JSON Schema (Draft 2020-12) walidujący root i pojedynczy term entry (wymagane: id, name, category, author, sourceUrl).
- `README.md` - opis projektu w PL z sekcją English summary.
- `LICENSE` (MIT) i `LICENSE.content.md` (CC-BY 4.0) - rozdzielona licencja kodu i treści.
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` (Contributor Covenant 2.1, PL), `SECURITY.md`.
- Szablony GitHub: `new-term`, `correction`, `PULL_REQUEST_TEMPLATE`.
- Placeholdery `widget/README.md` i `examples/README.md` z roadmapą.
- `docs/api.md` - dokumentacja kontraktu `glossary.json`.

[Unreleased]: https://github.com/automaty-bet/casino-glossary-pl/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/automaty-bet/casino-glossary-pl/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/automaty-bet/casino-glossary-pl/releases/tag/v0.1.0
