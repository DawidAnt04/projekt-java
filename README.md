# Projekt Java



Projekt Java.



## Struktura

- `src/main/java` – kod źródłowy

- `src/test/java` – testy jednostkowe



## Uruchamianie

Kompilacja:

javac src/main/java/Main.java



Uruchomienie:

java -cp src/main/java Main

# Projekt Java



Projekt w języku Java.



---



## Spis treści

- [Opis](#opis)

- [Funkcjonalności](#funkcjonalności)

- [Instalacja](#instalacja)

- [Użycie](#użycie)

- [Struktura projektu](#struktura-projektu)

- [Wymagania](#wymagania)

- [Autor](#autor)

- [Licencja](#licencja)



---



## Opis



Podstawowe struktury aplikacji Java oraz podstawowe operacje w systemie kontroli wersji Git i GitHub.



---



## Funkcjonalności



- Prosty program wypisujący powitanie w konsoli.



## Funkcje kalkulatora



### Dodawanie



Funkcja `add(a, b)` przyjmuje dwie liczby i zwraca ich sumę.



# Deployment



# wdrażanie (CD Pipeline)


 Uruchomienie testów :
   - Po pushu  wykonywane są  testy (`npm test`) oraz sprawdzanie jakości kodu (`npm run lint`).

Kopiowanie plików na serwer
   - Po pomyślnym zakończeniu testów repozytorium jest kopiowane na serwer EC2.

   - Na serwerze:
     - Tworzony jest backup aktualnej wersji aplikacji,
     - Instalowane są zależności (`npm install`),
     - Aplikacja jest restartowana przy pomocy `pm2`,
     - Wykonywany jest health check





# Konfiguracja środowiska



- Na AWS EC2 powinien być zainstalowany Node.js oraz Docker.

-  `/health` jest używany do monitoringu stanu aplikacji.



# Workflow CI/CD


CI:

- Uruchamiany na push i pull request na gałęzie master/feature

- kroki: Checkout kodu, Instalacja Node. zależności, testy (npm test), sprawdzenie kodu (npm run lint), budowa obrazu docker,

CD:

- Uruchamiany na push do gałęzi master

Po testach następuje deployment na serwer

Deployment zawiera poprzednią wersję, restart aplikacji i health check z rollbackiem,



#### Przykład użycia:



```js

const calculator = require('./newCalculator');



console.log(calculator.add(2, 3)); // wynik: 5




---



## Instalacja



1. Sklonuj repozytorium:

   ```bash

   git clone https://github.com/DawidAnt04/projekt-java.git


## Dodatkowa sekcja


<nav>

  <a href="index.html">Strona główna</a>

  <a href="contact.html">Kontakt</a>

</nav>





 Dodatkowa informacja w pliku README.






