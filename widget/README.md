# Widget do osadzania

> Status: **TODO** (planowane w fazie 2)

W tym katalogu znajdzie się lekki, samodzielny widget do osadzania pojedynczego hasła słownika lub mini-wyszukiwarki na zewnętrznych stronach (blogi, portale afiliacyjne, dokumentacja).

## Planowany zakres

* `widget.js` - skrypt do dołączenia tagiem `<script>`, bez zależności.
* `widget.css` - opcjonalny arkusz stylów; widget będzie też działać z domyślnymi.
* Snippet do osadzenia w postaci:

  ```html
  <div data-casino-glossary="wagering"></div>
  <script src="https://automaty.bet/slownik-kasynowy/widget/widget.js" async></script>
  ```

* Tryby:
  * pojedyncze hasło po slug (`data-casino-glossary="wagering"`),
  * tooltip / dymek po najechaniu na zaznaczone słowo,
  * mini-wyszukiwarka z autouzupełnianiem.

## Wymagania

* Vanilla JS ES6+, bez frameworków
* Zerowy konflikt z CSS hosta (Shadow DOM lub prefiks klas)
* Lazy load danych z `glossary.json` przez CORS / CDN
* Atrybucja "Powered by Automaty.bet" w stopce widgetu (zgodnie z CC-BY 4.0)

## Roadmap

- [ ] specyfikacja API widgetu
- [ ] implementacja v1 (pojedyncze hasło)
- [ ] implementacja tooltip
- [ ] implementacja mini-search
- [ ] publikacja na CDN
- [ ] przykładowe integracje w katalogu `examples/`
