# API słownika: `data/glossary.json`

Projekt nie wystawia REST API. "API" w tym kontekście oznacza **kontrakt pliku** `data/glossary.json`, który możesz pobrać przez HTTP (z gałęzi `main`, GitHub Pages lub CDN) i wykorzystać w swojej aplikacji.

## Endpoint

Statyczny URL pliku po publikacji:

```
https://automaty.bet/slownik-kasynowy/data/glossary.json
```

Lub bezpośrednio z repozytorium GitHub (raw):

```
https://raw.githubusercontent.com/automaty-bet/casino-glossary-pl/main/data/glossary.json
```

## Schemat

Pełny opis schematu znajduje się w pliku [`data/schema.json`](../data/schema.json) (JSON Schema Draft 2020-12).

### Root

| Pole            | Typ      | Wymagane | Opis                                                     |
| --------------- | -------- | -------- | -------------------------------------------------------- |
| `version`       | string   | tak      | Semantic version datasetu (np. `0.1.0`).                 |
| `language`      | string   | tak      | Kod ISO 639-1. Aktualnie tylko `pl`.                     |
| `source`        | string   | nie      | URL strony kanonicznej.                                  |
| `maintainer`    | string   | nie      | Nazwa zespołu utrzymującego.                             |
| `maintainerUrl` | string   | nie      | URL maintainera.                                         |
| `license`       | string   | nie      | Opis licencji.                                           |
| `lastUpdate`    | string   | nie      | Data ostatniej aktualizacji (YYYY-MM-DD).                |
| `categories`    | array    | tak      | Lista kategorii (min. 1).                                |
| `authors`       | array    | nie      | Lista autorów dla pól `term.author`.                     |
| `terms`         | array    | tak      | Lista terminów (w fazie szkieletu pusta).                |

### Category

| Pole   | Typ    | Wymagane | Opis                              |
| ------ | ------ | -------- | --------------------------------- |
| `id`   | string | tak      | kebab-case slug, np. `bonusy`.    |
| `name` | string | tak      | Pełna nazwa polska.               |
| `icon` | string | nie      | Emoji ilustrujący kategorię.      |

### Author

| Pole         | Typ    | Wymagane | Opis                       |
| ------------ | ------ | -------- | -------------------------- |
| `name`       | string | tak      | Imię i nazwisko.           |
| `role`       | string | nie      | Rola w redakcji.           |
| `profileUrl` | string | nie      | URL profilu autora.        |

### Term

| Pole               | Typ            | Wymagane | Opis                                                     |
| ------------------ | -------------- | -------- | -------------------------------------------------------- |
| `id`               | string         | tak      | kebab-case slug, unikalny w obrębie datasetu.            |
| `name`             | string         | tak      | Wyświetlana nazwa po polsku.                             |
| `alternativeNames` | string[]       | nie      | Synonimy / nazwy alternatywne (przeszukiwane).           |
| `category`         | string         | tak      | Musi pasować do `id` z `categories`.                     |
| `author`           | string         | tak      | Musi pasować do `name` z `authors`.                      |
| `shortDef`         | string         | nie      | 1-zdaniowa esencja.                                      |
| `fullDef`          | string         | nie      | 2-4 akapity rozwinięcia.                                 |
| `example`          | string         | nie      | Konkretny przykład.                                      |
| `relatedTerms`     | string[]       | nie      | Lista `id` powiązanych terminów.                         |
| `relatedUrl`       | string         | nie      | URL pogłębionego artykułu.                               |
| `sourceUrl`        | string         | tak      | Kanoniczny URL do tej definicji.                         |
| `lastUpdate`       | string \| null | nie      | Data ostatniej zmiany hasła (YYYY-MM-DD) lub `null`.     |

## Wersjonowanie

* SemVer (MAJOR.MINOR.PATCH).
* **MAJOR** - zmiany łamiące kontrakt (zmiana typu pola, usunięcie wymaganego pola).
* **MINOR** - dodanie nowych pól opcjonalnych lub nowych terminów / kategorii.
* **PATCH** - poprawki istniejących definicji, literówki, aktualizacje linków.

## Przykład użycia (Vanilla JS)

```javascript
const res = await fetch('https://automaty.bet/slownik-kasynowy/data/glossary.json');
const glossary = await res.json();

const wagering = glossary.terms.find(t => t.id === 'wagering');
console.log(wagering.shortDef);
```

## Walidacja lokalna

Używając `ajv` (lub dowolnego walidatora JSON Schema Draft 2020-12):

```bash
npx ajv-cli validate -s data/schema.json -d data/glossary.json --spec=draft2020
```

## Atrybucja

Korzystając z `glossary.json` zobowiązujesz się do atrybucji zgodnie z CC-BY 4.0:

> "Polski Słownik Kasynowy" by Automaty.bet, licensed under CC BY 4.0.
> Source: https://automaty.bet/slownik-kasynowy/
