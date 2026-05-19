# Polityka bezpieczeństwa

## Zakres

Projekt `casino-glossary-pl` to statyczna strona z plikiem danych JSON, bez backendu, autentykacji ani przetwarzania danych użytkowników. Powierzchnia ataku jest niewielka, ale doceniamy odpowiedzialne zgłoszenia podatności w:

* kodzie JavaScript (`assets/app.js`) - XSS, prototype pollution, niebezpieczne API,
* strukturze HTML (`index.html`) - mieszanie treści, niebezpieczne atrybuty,
* obsłudze danych z `glossary.json` - injection przy renderowaniu, walidacji.

## Wersje wspierane

Wsparcie otrzymuje zawsze najnowsza wersja na gałęzi `main`. Starsze wersje nie są łatane.

| Wersja  | Wsparcie |
| ------- | -------- |
| 0.1.x   | tak      |
| < 0.1.0 | nie      |

## Zgłaszanie podatności

**Nie otwieraj publicznego issue dla podatności.** Zamiast tego prześlij zgłoszenie prywatnym kanałem:

* przez funkcję "Report a vulnerability" w zakładce **Security** repozytorium na GitHub,
* lub mailem na adres redakcji Automaty.bet podany na stronie [https://automaty.bet](https://automaty.bet).

W zgłoszeniu opisz:

1. typ i lokalizację podatności (plik, linia),
2. kroki reprodukcji,
3. potencjalny wpływ,
4. ewentualny PoC.

## Czas reakcji

* Potwierdzenie odbioru: do 3 dni roboczych.
* Pierwsza analiza: do 7 dni roboczych.
* Patch lub mitygacja: w zależności od krytyczności, najpóźniej 30 dni.

## Atrybucja

Zgłaszający są wymieniani w `docs/changelog.md` przy odpowiednim wpisie, chyba że poproszą o anonimowość.
