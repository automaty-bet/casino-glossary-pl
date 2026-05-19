# Wkład w projekt Casino Glossary PL

Dziękujemy za zainteresowanie współtworzeniem polskiego słownika kasynowego. Ten dokument opisuje, jak zgłaszać nowe terminy, poprawki i ulepszenia.

## Kodeks postępowania

Projekt przyjmuje [Code of Conduct](./CODE_OF_CONDUCT.md) (Contributor Covenant 2.1). Udział oznacza akceptację jego warunków.

## Sposoby udziału

### 1. Zgłoszenie nowego terminu

Otwórz issue z szablonem `Nowy termin` i wypełnij wszystkie pola wymagane:

* nazwa terminu (PL),
* alternatywne nazwy / synonimy,
* kategoria (jedna z 8 zdefiniowanych w `data/glossary.json`),
* propozycja krótkiej i pełnej definicji,
* przykład użycia,
* źródło (link do publikacji branżowej, dokumentu regulatora itp.).

### 2. Zgłoszenie poprawki

Otwórz issue z szablonem `Poprawka` jeśli zauważyłeś:

* błąd merytoryczny w definicji,
* literówkę lub błąd językowy,
* nieaktualną informację (np. zmiana w regulacjach),
* zepsuty link.

### 3. Pull Request

Pull requesty z poprawkami treści lub kodu są mile widziane. Wypełnij szablon PR (`.github/PULL_REQUEST_TEMPLATE.md`) i podlinkuj odpowiedni issue.

## Standardy treści

* **Język:** poprawna polszczyzna, zgodna z normami PWN.
* **Styl:** rzeczowy, neutralny, bez marketingu i języka reklamowego.
* **Definicje:** najpierw 1-zdaniowa esencja (`shortDef`), potem rozwinięcie (`fullDef`) na 2-4 akapity.
* **Przykład:** konkretny, oparty na realnej mechanice / produkcie / regulacji.
* **Źródła:** preferujemy regulatory (Ministerstwo Finansów, MGA, UKGC), publikacje branżowe i dokumentację dostawców software.
* **Bez em-dash:** w treści używamy zwykłego myślnika (`-`) lub półpauzy (`–`), nie pauzy (`—`).

## Standardy techniczne

* Walidacja: każda zmiana w `data/glossary.json` musi przechodzić walidację względem `data/schema.json`.
* Slug: `id` w kebab-case bez polskich znaków (`wagering`, `gra-na-prawdziwe-pieniadze`).
* Spójność: pola `category` i `author` muszą odpowiadać wpisom w tablicach `categories` i `authors`.
* Bez bibliotek JS: kod strony to czyste ES6+, nie dodajemy frameworków.

## Proces przeglądu

1. Issue lub PR jest triażowany w ciągu 7 dni roboczych.
2. Redaktor naczelny lub specjalista przypisany do kategorii dokonuje merytorycznego przeglądu.
3. Po akceptacji zmiana jest mergowana i odnotowana w `docs/changelog.md`.

## Licencja Twojego wkładu

Składając pull request lub treść w issue, godzisz się, aby kod był objęty licencją MIT, a treść (definicje, opisy) licencją CC-BY 4.0, zgodnie z `LICENSE` i `LICENSE-CONTENT`.

## Kontakt

W razie pytań pisz na issue lub kontaktuj się z redakcją Automaty.bet przez stronę [https://automaty.bet](https://automaty.bet).
