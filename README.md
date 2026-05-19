# Polski Słownik Kasynowy (Casino Glossary PL)

> Open source zbiór 150 terminów branży kasyn online w języku polskim, z definicjami i odnośnikami źródłowymi.

![status](https://img.shields.io/badge/status-szkielet-orange) ![license-code](https://img.shields.io/badge/license%20(kod)-MIT-blue) ![license-content](https://img.shields.io/badge/license%20(tre%C5%9B%C4%87)-CC--BY%204.0-green) ![language](https://img.shields.io/badge/j%C4%99zyk-PL-red)

## O projekcie

`casino-glossary-pl` to wolny, open source słownik 150 najważniejszych pojęć branży kasyn online, utrzymywany przez redakcję [Automaty.bet](https://automaty.bet). Projekt udostępnia:

* gotowy do osadzenia plik danych `data/glossary.json` (z walidującym JSON Schema),
* lekką, statyczną stronę demo (`index.html`) zbudowaną na Tailwind CSS i Vanilla JS,
* gotowe szablony GitHub do zgłaszania nowych terminów i poprawek.

Słownik jest skierowany do dziennikarzy, twórców treści afiliacyjnych, deweloperów porównywarek oraz osób uczących się o branży iGaming.

## Stack

* HTML5 + Tailwind CSS (CDN)
* Vanilla JS (ES6+), bez frameworków i bibliotek
* Dane w pojedynczym pliku JSON (UTF-8)
* Działa offline po otwarciu `index.html` w przeglądarce

## Struktura repozytorium

```
casino-glossary-pl/
├── index.html                # strona demo (single-page, 150 sekcji)
├── data/
│   ├── glossary.json         # zbiór terminów + metadane
│   └── schema.json           # JSON Schema (Draft 2020-12)
├── assets/
│   ├── app.js                # logika strony, render, filtry, JSON-LD
│   └── style.css             # dodatki ponad Tailwind (focus, print, motion)
├── widget/                   # planowany widget do osadzania (TODO)
├── examples/                 # planowane przykłady integracji (TODO)
├── docs/
│   ├── api.md                # opis kontraktu glossary.json
│   └── changelog.md          # historia wersji
└── .github/                  # szablony issue i PR
```

## Szybki start

```bash
git clone https://github.com/automaty-bet/casino-glossary-pl.git
cd casino-glossary-pl
# Otwórz index.html w przeglądarce
```

Do uruchomienia nie jest potrzebny żaden build step ani Node.js.

## Status

Projekt jest w fazie **0.1.0 (szkielet)**. Tablica `terms` w `data/glossary.json` jest na razie pusta i zostanie wypełniona 150 entrami w fazie redakcyjnej. Strona w pełni działa, ale wyświetla komunikat o przygotowywanych definicjach.

## Licencje

* **Kod** (HTML/JS/CSS/JSON Schema) - [MIT](./LICENSE)
* **Treść** (definicje, opisy, JSON danych) - [CC-BY 4.0](./LICENSE-CONTENT)

Korzystając z definicji wymagana jest atrybucja do "Automaty.bet" z linkiem do źródła.

## Wkład

Zobacz [CONTRIBUTING.md](./CONTRIBUTING.md). Nowe terminy zgłaszamy przez issue z szablonem `new-term`, poprawki przez `correction`.

## Bezpieczeństwo

Zgłoszenia w `SECURITY.md`.

---

## English summary

`casino-glossary-pl` is an open source dictionary of 150 Polish online-casino industry terms, maintained by the editorial team at [Automaty.bet](https://automaty.bet). The project ships a `glossary.json` dataset (with JSON Schema), a static single-page demo built on Tailwind CSS and Vanilla JS, and GitHub templates for community contributions.

* Code: MIT
* Content: CC-BY 4.0 (attribution to Automaty.bet required)
* Status: 0.1.0 skeleton (terms array empty pending editorial phase)
