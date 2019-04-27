# Zadanie rekrutacyjne

### Tryb developerski

1. Zainstaluj `yarn` (komenda: `npm install -g yarn`)
2. Zainstaluj zależności za pomocą komendy `yarn`
3. Uruchom komendę `yarn dev`
4. Odpal w przeglądarce <http://localhost:4000>

### Wymagania

Na podstawie danych zwracanych z API serwisu Recipe Puppy (<http://www.recipepuppy.com/about/api/>) napisz prostą aplikację, która będzie wyświetlała wyniki wyszukiwania. W aplikacji skorzystaj z końcówki `/api` (przykłady znajdziesz poniżej).

Aplikacja musi się składać z wyszukiwarki, listy wyników oraz stronnicowania.

**Wyszukiwarka**

- w polu wyszukiwarki wpisujemy nazwę składnika lub składników (po przecinku), przykład dla `onion`:  `/api/?q=onion&p=1`
- wyszukiwanie powinno się rozpoczynać na przycisk `enter` lub kliknięcie w przycisk `Search`

**Lista wyników**

- wyświelamy placeholder, gdy brak wyników wyszukiwania
- przepisy na liście muszą być posortowane po nazwie (rosnąco)
- każda pozycja na liście powinna zawierać: nazwę (link), listę składników oraz miniaturkę
- kliknięcie na składnik w widoku pojedynczego elementu na liście powinno uzupełnić pole wyszukiwarki i uruchomić wyszukiwanie z tym składnikiem

**Stronnicowanie**

- wyświetlamy maksymalnie 10 pozycji na liście wyników
- patrz parametry `p` w powyższym przykładzie `/api/?q=onion&p=1`

### Inne

Preferujemy zapis funkcyjny komponentów (patrz `components/Root`), lecz jeśli nie miałeś z tym do czynienia to napisz zadanie tak jak Ci wygodnie :) Nie sugerujemy również wyboru bibliotek do stylowania komponentów (skonfigurowany jest jedynie podstawowy PostCSS), jeśli preferujesz `styled-components`, `emotion` lub coś podobnego, wykorzystaj to! Również nie sugerujemy sposobu pisania komponentów, HOCs, render props, hooks? Wybór należy do Ciebie! :)

Przewidywany czas na wykonanie zadania 3-4h, lecz to nie wyścigi, nie siedzimy ze stoperem :P

Powodzenia!
