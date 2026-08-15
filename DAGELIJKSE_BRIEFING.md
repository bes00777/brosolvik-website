# ☕ Dagelijkse Ochtendbriefing — Van der Wafel

Specificatie van de terugkerende ochtendbriefing die elke dag om **07:00 (NL/SE tijd)** wordt gegenereerd.

| | |
|---|---|
| **Routine-ID** | `trig_016y6aiYxRUiYP4PVibur38Z` |
| **Schema** | `0 5 * * *` (UTC) — dagelijks, komt neer op 07:00 zomertijd |
| **Bezorging** | Push-notificatie naar telefoon + e-mailsamenvatting |
| **Taal** | Nederlands |
| **Sessie** | Nieuwe sessie per keer (geen context van gisteren) |

> ⚠️ **Wintertijd:** het schema staat in UTC. Na de klokwissel (laatste zondag van oktober) valt 05:00 UTC op **06:00** lokale tijd. Zet het cron-schema dan om naar `0 6 * * *`, en in het voorjaar weer terug naar `0 5 * * *`.

---

## Inhoud van de briefing

### 1. Nieuws Ödeshög & Östergötland
Zweedstalige bronnen: Corren, SVT Nyheter Öst, Sveriges Radio Östergötland, Ödeshögs kommun, Motala/Vadstena Tidning. 3-6 items van de afgelopen 24-48 uur, samengevat in het Nederlands, met bronlink. Lokaal Ödeshög-nieuws bovenaan.

### 2. Olieprijzen & grondstoffen
- **Ruwe olie:** Brent en WTI in USD/vat, met dagmutatie en handelsdag.
- **Wafel-grondstoffen:** boter (EU-noteringen), tarwe (MATIF/Euronext), suiker, plantaardige/palmolie.
- Afsluitend één zin over de impact op de kostprijs.

### 3. Aanstaande markten & standplaatsen (komende ~4 weken)
- **Regio Den Haag:** Den Haag, Voorburg, Leidschendam, Rijswijk, Delft, Zoetermeer, Wassenaar — weekmarkten, braderieën, foodtruckfestivals, seizoensmarkten.
- **Regio Östergötland:** Ödeshög, Motala, Vadstena, Linköping, Norrköping, Mjölby, Gränna — *marknad, loppis, julmarknad, höstmarknad, matmarknad, torgdag*.
- Per event: naam, datum, plaats, en hoe je een standplaats aanvraagt. Naderende inschrijfdeadlines worden gemarkeerd.

### 4. Weer Voorburg
Min/max, neerslagkans, wind, omschrijving + 3-daagse vooruitblik. Plus één regel: is dit kraamweer?

### 5. Weer Ödeshög
Zelfde opzet.

### 6. Zakelijk relevant voor Van der Wafel
3-5 punten over NVWA/EFSA-regelgeving, etikettering, btw- en ondernemersregels, bezorgtarieven (PostNL/DHL), Shopify/Google/Meta-wijzigingen, trends in premium voeding, concurrentie in de wafelcategorie, energieprijzen en seizoenseffecten. Elk punt met één zin "waarom dit ertoe doet".

### Afsluiting: Actie vandaag
Maximaal 3 concrete aandachtspunten voor die dag.

---

## Kwaliteitsregels

- Alles wordt live opgezocht via websearch — **nooit** cijfers, koersen of nieuwsberichten verzinnen.
- Niets gevonden? Dan expliciet *"geen betrouwbare bron gevonden vandaag"* in plaats van gokken.
- Bronvermelding met link bij elk nieuwsitem en elke prijs.
- Scanbaar formaat: korte alinea's en bullets, leestijd 3-4 minuten.

---

## Aanpassen

- **Tijd of inhoud wijzigen:** vraag het in een Claude-sessie, of pas de routine aan via de Routines-pagina op claude.ai.
- **Tijdelijk uitzetten:** de routine kan gepauzeerd worden zonder hem te verwijderen.
- Wijzig je de inhoud, werk dan ook dit bestand bij zodat spec en routine gelijk blijven.

---

**Versie:** 1.0 · **Ingesteld:** 15 augustus 2026
