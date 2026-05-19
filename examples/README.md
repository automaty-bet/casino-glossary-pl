# Przykłady integracji

> Status: **TODO** (planowane w fazie 2)

W tym katalogu znajdą się gotowe, skopiowalne przykłady wykorzystania `glossary.json` w popularnych stackach i scenariuszach.

## Planowane przykłady

* **`vanilla-fetch/`** - minimalna strona HTML pobierająca `glossary.json` i renderująca listę.
* **`nextjs-static/`** - integracja z Next.js (Static Site Generation, `getStaticProps`).
* **`astro-collection/`** - definicja kolekcji w Astro Content Collections.
* **`wordpress-shortcode/`** - shortcode `[glossary-term id="wagering"]` w WP.
* **`mkdocs-plugin/`** - generowanie stron MkDocs z `glossary.json`.
* **`graphql-server/`** - serwer Apollo wystawiający schema na bazie `schema.json`.

## Zasady

Każdy podkatalog zawiera:

* własny `README.md` z instrukcją "skopiuj-i-uruchom",
* minimalne dependencies,
* zrzut ekranu / GIF wyniku (gdzie ma to sens),
* atrybucję do Automaty.bet (zgodnie z CC-BY 4.0).

## Wkład

Masz pomysł na przykład w innym stacku? Otwórz issue z propozycją lub od razu PR.
