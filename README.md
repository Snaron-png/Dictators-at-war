# Dictators-at-war

Név: Somogyi Náron Örs
Projekt címe: Dictators at War
GitHub Pages URL: https://snaron-png.github.io/Dictators-at-war/html/Fooldal.html

Leírás:
Ez egy interaktív webes minijáték, ahol (fiktív vagy történelmi) karakterek statisztikái alapján harcolhatnak egymással.
A felhasználó saját karaktert is létrehozhat (név, leírás, nem, 10 darab stat slider), majd megmérettetheti a ringben.

Oldalak (HTML):
- html/Fooldal.html — Kezdőlap, karakterválasztás, harc indítása és winner popup.
- html/Sajat.html — Saját karakter létrehozása.
- html/Aladeen.html — Karakterprofil.
- html/Hitler.html — Karakterprofil.
- html/Mao.html — Karakterprofil.
- html/Sztalin.html — Karakterprofil.
- html/Caesar.html — Karakterprofil.

Stílus (CSS):
- css/style.css — Globális stílusok, Grid/Flex, media query-k, gombok, ring és popup kinézet.

Funkcionalitás (JavaScript):
- js/fooldal.js — Harcrendszer (turn-based): életpontok frissítése, HP sávok szélessége, támadás animáció (translateX), winner popup megjelenítése/bezárása, karakterek betöltése és UI események.
- js/sajat_karakter.js — Saját karakter készítése: képválasztás, slider értékek élő frissítése, nem (radio) kezelése, mentés localStorage-be, visszairányítás a főoldalra.

Használt betűtípus:
- Google Fonts: Jersey 25 — @import URL: https://fonts.googleapis.com/css2?family=Jersey+25&display=swap

Könyvtárstruktúra:
- /html — HTML fájlok
- /css — style.css
- /js — fooldal.js, sajat_karakter.js
- /kepek — karakterképek és logó
- /sounds — opcionális hangeffektek (hurt/victory)

Saját interaktív program leírása:
A turn-based harcrendszer natív JavaScriptben készült. A felhasználó kiválaszt két karaktert, majd a rendszer körönként csökkenti az ellenfél életét (statok alapján számolt sebzés), frissíti a vizuális HP sávokat, és rövid támadás-animációt játszik le (CSS transition + JS). A győztes megjelenik egy modal jellegű popupban.

Űrlap és validálás:
A Saját karakter oldalon 10 slider és további mezők találhatók (név, leírás, nem). A mezőkhez JS ellenőrzést tervezünk: név kötelező, leírás min. 20 karakter, nem kiválasztása kötelező, legalább öt slider ≥1 és ≤10; hibák esetén felhasználóbarát üzenet (popup/toast).

Elérhetőség és bemutatás:
A projekt GitHub Pages-en fut a fenti URL-en. Beadás: SomogyiNaronOrs.zip, a gyökérben ez az olvasd.txt fájl szerepel.

Megjegyzés/etikai nyilatkozat:
Az oldalon szereplő történelmi személyekről szóló anyagok oktatási/kritikai céllal készültek, nem dicsőítjük tetteiket. Egyes témák érzékenyek lehetnek.
