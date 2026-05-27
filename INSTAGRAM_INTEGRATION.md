# Instagram Feed Integratie - Van der Wafel

## 📱 Overzicht

Dit pakket bevat een professionele Instagram feed integratie voor vanderwafel.nl. Het toont je @meneervanderwafel posts op een modern, responsief design.

---

## 📋 Bestanden

- **instagram-feed.html** - Standalone HTML pagina met volledige integratie
- **instagram-feed.css** - Professional styling en animations
- **instagram-feed.js** - JavaScript functies en interacties
- **INSTAGRAM_INTEGRATION.md** - Dit bestand (instructies)

---

## 🚀 Installatie

### Optie 1: Standalone Pagina (Snelste)

Plaats `instagram-feed.html` direct op je server:
```
vanderwafel.nl/instagram
vanderwafel.nl/instagram-feed
```

Toegang via: `https://vanderwafel.nl/instagram-feed.html`

### Optie 2: Integratie in Bestaande Website

#### Stap 1: CSS toevoegen
Voeg deze link in je `<head>` sectie toe:
```html
<link rel="stylesheet" href="/path/to/instagram-feed.css">
```

#### Stap 2: HTML Section kopiëren
Voeg deze HTML in je pagina in waar je de Instagram feed wilt tonen:
```html
<section class="instagram-section">
    <div class="container">
        <div class="instagram-header">
            <div class="header-content">
                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.2c5.413 0 9.8 4.387 9.8 9.8s-4.387 9.8-9.8 9.8S2.2 17.413 2.2 12 6.587 2.2 12 2.2z"/>
                </svg>
                <div>
                    <h2>Volg ons op Instagram</h2>
                    <p class="handle">@meneervanderwafel</p>
                </div>
            </div>
            <a href="https://instagram.com/meneervanderwafel" target="_blank" class="follow-btn">
                Volgen
            </a>
        </div>

        <div class="feed-container">
            <iframe src="https://www.instagram.com/meneervanderwafel/embed" width="100%" height="600" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        </div>

        <div class="instagram-stats">
            <div class="stat">
                <span class="stat-value">Laden...</span>
                <span class="stat-label">Followers</span>
            </div>
            <div class="stat">
                <span class="stat-value">Stroopwafels</span>
                <span class="stat-label">Specialiteit</span>
            </div>
            <div class="stat">
                <span class="stat-value">Dagelijks</span>
                <span class="stat-label">Nieuwe Content</span>
            </div>
        </div>
    </div>
</section>
```

#### Stap 3: JavaScript toevoegen
Voeg voor je sluit `</body>` tag toe:
```html
<script src="/path/to/instagram-feed.js"></script>
```

---

## 🎨 Customization

### Kleuren aanpassen
In `instagram-feed.css`, zoek naar de kleur variabelen:
```css
/* Instagram roze */
color: #e0124f;

/* Gradient voor follow button */
background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
```

### Instagram Handle wijzigen
Als je Instagram account verandert, update dan:

**In HTML:**
```html
<!-- Verander dit -->
<p class="handle">@jouwhandle</p>
<a href="https://instagram.com/jouwhandle" target="_blank" class="follow-btn">
```

**In embed iframe:**
```html
<iframe src="https://www.instagram.com/jouwhandle/embed" ...></iframe>
```

**In JavaScript:**
```javascript
console.log('Instagram Feed integratie geladen voor @jouwhandle');
```

---

## 📊 Features

✅ **Responsive Design** - Werkt perfect op alle devices (mobiel, tablet, desktop)
✅ **Instagram Official Embed** - Gebruikt Instagram's officiële embed API
✅ **Professional Styling** - Modern, clean design met animations
✅ **Follow Button** - Direct link naar Instagram profiel
✅ **Stats Display** - Toont belangrijk informatie
✅ **Smooth Animations** - Professionele transitions en hover effects
✅ **Dark Mode Ready** - Gemakkelijk aan te passen voor dark mode

---

## 🔧 Troubleshooting

### Instagram feed wordt niet geladen
1. Controleer of je internet verbinding werkt
2. Zorg dat Instagram niet is geblokkeerd (firewall/proxy)
3. Wacht even en refresh de pagina

### Styling looks raar
1. Zorg dat `instagram-feed.css` correct geladen wordt
2. Check of er geen CSS conflicten zijn met je bestaande styles
3. Gebruik browser DevTools om te debuggen

### Follow button werkt niet
1. Controleer of JavaScript is ingeschakeld
2. Zorg dat `instagram-feed.js` correct geladen wordt
3. Check console voor JavaScript errors

---

## 📱 Mobile Optimization

De integratie is volledig responsive en werkt perfect op:
- ✅ iPhone (alle modellen)
- ✅ Android devices
- ✅ Tablets (iPad, Samsung, etc.)
- ✅ Desktop screens

---

## 🔐 Privacy & Security

- Geen persoonlijke data wordt verzameld
- Gebruikt officiële Instagram Embed API
- Geen tracking pixels of cookies
- GDPR compliant

---

## 📈 SEO Impact

De Instagram feed helpt met:
- Meer engagement op je website
- Sociale proof (toont dat je actief bent op Instagram)
- Längere tijd op pagina (users kijken Instagram posts)
- Fresh content (Instagram posts update automatisch)

---

## 🎯 Best Practices

1. **Post regelmatig op Instagram** - Minstens 3-4x per week
2. **Use relevant hashtags** - #stroopwafels #vanderwafels
3. **Engage met followers** - Antwoord op comments
4. **Call-to-action** - "Volg ons op Instagram" in je beschrijving
5. **Story updates** - Gebruik Stories voor real-time content
6. **Highlight reels** - Maak thema highlights op je profiel

---

## 📞 Support

Voor vragen over Instagram API of integratie:
- Instagram Developer Docs: https://developers.instagram.com/
- Instagram Business Help: https://help.instagram.com/

---

## ✅ Checklist

- [ ] Bestanden gedownload/geplaatst
- [ ] CSS en JS paden correct ingesteld
- [ ] Instagram account (@meneervanderwafel) klopt
- [ ] Feed test geladen in browser
- [ ] Mobile design getest
- [ ] Follow button werkt
- [ ] Geen CSS conflicten met bestaande site

---

**Versie:** 1.0  
**Datum:** Mei 2026  
**Status:** Ready to Deploy  
**Instagram Account:** @meneervanderwafel
