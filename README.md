# EMMA – statyczna strona (HTML/CSS/JS)

## Co jest w paczce
- `index.html` – strona główna (z placeholderami na screeny)
- `styles.css` – minimalistyczny styl w palecie medycznej (granat/niebieski/cyan)
- `script.js` – małe JS do menu mobilnego + mailto z formularza
- `screens/` – folder na screeny (wstaw swoje PNG/JPG i podepnij w HTML)

## Jak wrzucić na serwer
1. Skopiuj całą zawartość folderu na serwer (np. przez FTP / SCP):
   - index.html
   - styles.css
   - script.js
2. Otwórz domenę – strona działa bez backendu.

## Podmiana e-maila w kontakcie
W plikach:
- `index.html` (link mailto w sekcji kontakt)
- `script.js` (zmienna `to`)
Podmień `kontakt@twojadomena.pl` na właściwy.

## Screeny systemu
W HTML są placeholdery. Najprościej:
- wrzuć pliki do `screens/`
- podmień w miejscach placeholderów elementy `.shot__placeholder` na `<img ...>`

Przykład:
```html
<div class="shot__body">
  <img src="screens/dashboard.png" alt="Dashboard EMMA" class="shot__img" />
</div>
```

Możesz też zachować placeholdery do czasu zebrania screenów.
