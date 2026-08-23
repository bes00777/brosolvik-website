# Ochtendbriefing Van der Wafel

Specificatie van de terugkerende ochtendbriefing die elke dag om **07:00 (NL/SE tijd)** wordt gegenereerd.

| | |
|---|---|
| **Routine-ID** | `trig_016y6aiYxRUiYP4PVibur38Z` |
| **Naam** | Ochtendbriefing 07:00 – Van der Wafel |
| **Schema** | `0 5 * * *` (UTC), dagelijks, komt neer op 07:00 zomertijd |
| **Bezorging** | Push naar telefoon plus e-mailsamenvatting |
| **Vorm** | Opgemaakte HTML-pagina via de `/morning` skill, met actieknoppen |
| **Taal** | Nederlands |
| **Sessie** | Nieuwe sessie per keer, geen context van gisteren |

> **Wintertijd:** het schema staat in UTC. Na de klokwissel (laatste zondag van oktober) valt 05:00 UTC op **06:00** lokale tijd. Zet het schema dan op `0 6 * * *` en in het voorjaar weer terug op `0 5 * * *`.

## Ontstaan

Er liepen een tijd twee routines naast elkaar: deze inhoudelijke briefing om 07:00 en een aparte `Morning brief` om 08:00 op werkdagen. Die zijn op 23 augustus 2026 samengevoegd tot deze ene routine. De opmaak en de actieknoppen komen van `/morning`, de inhoud van de zes onderwerpen hieronder hangt eronder via het `Sections:` mechanisme van die skill.

## Opbouw van de pagina

Bovenaan de dagopening van `/morning`: de dag als getekend landschap, een headline en de drie dagdelen, gevolgd door de lijsten *Needs attention* en *Resolved*. Daaronder de vaste secties.

Draait de routine zonder verbonden agenda, mail of chat, dan vervalt die bovenkant en begint de pagina direct bij de secties, in dezelfde stijl.

### Vaste secties

1. **Nieuws Ödeshög en Östergötland** — 3 tot 6 items van de afgelopen 24 tot 48 uur uit Corren, SVT Nyheter Öst, Sveriges Radio Östergötland, Ödeshögs kommun en Östgöta Tidningen. Lokaal eerst, regionaal daarna.
2. **Olieprijzen en grondstoffen** — Brent en WTI met dagmutatie, plus boter (EU), tarwe (MATIF), suiker en palm- of plantaardige olie. Afsluitend één zin over de kostprijs van een wafel.
3. **Markten en standplaatsen** — komende vier weken in regio Den Haag en regio Östergötland, met datum, plaats en hoe je een standplaats aanvraagt. Naderende inschrijfdeadlines bovenaan.
4. **Weer Voorburg en Ödeshög** — per plaats temperatuur, neerslag, wind en drie dagen vooruit, met een oordeel over het kraamweer in Voorburg.
5. **Zakelijk voor Van der Wafel** — 3 tot 5 punten over NVWA en EFSA, etikettering, btw, bezorgtarieven, Shopify, Google en Meta, trends in premium voeding, concurrentie, energie en seizoen. Elk punt met één zin waarom het ertoe doet.
6. **Actie vandaag** — maximaal 3 concrete dingen, elk met een actieknop.

## Kwaliteitsregels

- Alles wordt live opgezocht. Nooit cijfers, koersen of nieuwsberichten verzinnen.
- Niets gevonden betekent dat er expliciet staat dat er geen betrouwbare bron was, niet dat er gegokt wordt.
- Bronvermelding als link in de zin, volgens de itemopmaak van de skill.

## Geblokkeerde bronnen

De netwerkproxy van de uitvoeromgeving blokkeert onder meer `tradingeconomics.com`, `yr.no`, `foreca.se`, `vackertvader.se`, `marknadsdagar.se`, `marktenmarkten.nl` en `evenementen.denhaag.nl`. De routine weet dat en wijkt uit naar bereikbare bronnen zoals weeronline.nl, weerplaza.nl, knmi.nl, svt.se, corren.se, odeshog.se, ljungsbromarknad.se, visitlinkoping.se, hantverk.nu, minmarknad.nu en dagjeweg.nl.

## Aanpassen

Vraag het in een Claude-sessie, of pas de routine aan via de Routines-pagina op claude.ai. Wijzig je de inhoud, werk dan ook dit bestand bij zodat spec en routine gelijk blijven.

---

**Versie:** 2.0 · **Samengevoegd:** 23 augustus 2026
