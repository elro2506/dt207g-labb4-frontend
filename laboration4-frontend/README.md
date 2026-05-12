# DT207G - Laboration 4

Jag har skapat en webbapplikation som använder fetch API för att registrera användare som i sin tur har möjlighet att logga in med autentisering och JWT-token. I inloggad läge har man tillgång till en skyddad sida, protected.html.

Jag har använt mig av HTML, CSS och JavaScript i frontend och i backend använder jag Node.js, Express och MongoDB som databas.

## Funktioner
- Registrering av användare
- Inloggning av registrerad användare
- sessionStorage - här lagras JWT-token
- Skyddad sida som endast nås via inloggning
- Dynamisk navigeringsmeny som är baserad på om användaren är inloggad eller inte
- Möjlighet till utloggning och då nollas token

## Tekniker
- HTML
- CSS
- JavaScript
- Fetch API
- JWT
- Vite

### Sidor
index.html - Startsida
register.html - Sida för registrering av ny användare
login.hmtl - Inloggning för registrerad användare
protected.html - Skyddad sida som man endast når i inloggat läge. När man loggar in (vid lyckad inloggning) dirigeras man automatiskt till denna sida.

### Länkar
Min backend: https://dt207-labb4-backend.onrender.com/
Min frontend(webbapplikation): https://dt207g-labb4.netlify.app/index.html