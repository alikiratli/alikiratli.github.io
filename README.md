# Website – Ali Kiratli

Statische Website (HTML/CSS/JS, ohne Build-Schritt). Zum Ansehen `index.html` im Browser öffnen.

## Sprachen
- Deutsch: `index.html`
- Englisch: `en/index.html`
- Türkisch: `tr/index.html`

Alle drei Seiten nutzen dieselben Bilder/CSS/JS in `assets/`. **Änderungen (Links, neue Bücher, App-Releases)
immer in allen drei Dateien vornehmen.** Impressum und Datenschutz gibt es nur auf Deutsch (rechtlich ausreichend).

## Vor dem Veröffentlichen
1. **Amazon-Links**: Erledigt – alle Links zeigen direkt auf die Produktseiten (`amazon.de/dp/ASIN`). Autorenseite: https://www.amazon.de/stores/author/B0HNXRCQNM/allbooks
2. **Impressum**: Erledigt – Anschrift wie im Denkwerk-Buch (Heckinghauser Str. 202, 42289 Wuppertal).
3. **Datenschutz**: Erledigt – Hosting über GitHub Pages eingetragen.

## Wenn Denkwerk / PrüfPilot erscheinen
Im Abschnitt „Apps“ ist der fertige Google-Play-Button jeweils als Kommentar vorbereitet:
Badge auf `badge-live` / „Bei Google Play“ ändern, `<span class="btn btn-disabled">` löschen, Kommentar entfernen.
- Denkwerk: `https://play.google.com/store/apps/details?id=de.denkwerk.app`
- PrüfPilot: `https://play.google.com/store/apps/details?id=de.pruefpilot.pruefpilot`

## Wenn Bücher erscheinen
Ein `<div class="cover soon">…</div>` in `<a class="cover" href="AMAZON-LINK" target="_blank" rel="noopener">…</a>`
umwandeln und `<em>BALD</em>` durch `<em>AMAZON ›</em>` ersetzen.

## Bilder
`assets/img/` – aus den Projektordnern verkleinert (WebP). Neue Cover einfach als WebP (Breite ca. 600 px) ablegen.

## Hosting
GitHub Pages: Repository `alikiratli/alikiratli.github.io`, Adresse https://alikiratli.github.io
Änderungen veröffentlichen: `git add -A && git commit -m "..." && git push` – nach 1–2 Minuten online.

## Blick ins Buch (Leseprobe)
- Je 6 ausgewählte Seiten pro Ole-Buch liegen als WebP unter `assets/img/preview/<buch>/1.webp … 6.webp` (820 px breit, Wasserzeichen „LESEPROBE“).
- Der Button `<button class="peek" data-book="rs-5" …>` unter jedem Cover öffnet die Ansicht (Code am Ende von `assets/js/main.js`). Kein Download-Button, Druckansicht blendet sie aus, Rechtsklick gesperrt.
- Neues Buch: 6 Seiten rendern (gleiche Benennung) und den Button im Cover-Block in allen 3 Sprachen ergänzen.

## Logo „AK Books“
- Verlagskarte oben im Abschnitt „Lernbücher“ (Klasse `publisher-card`), verlinkt auf die Amazon-Autorenseite.
- Datei: `assets/img/books/ak-books-logo.webp` (320 px, aus `Zarif AK Kitap Yayıncılık Logosu.png` verkleinert).
