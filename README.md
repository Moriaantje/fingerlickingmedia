# Bestand aanmaken
Om een bestand aan te maken navigeer je naar de folder waar je hem wilt hebben en druk je op **Create new file**

Geef het bestand bovenin een naam en voeg je inhoud toe. Om te zien hoe je markdown er uit ziet kun je het **Preview** tabje gebruiken.

Het toevoegen van een bestand is een wijziging. Een wijziging noemen we een commit. Elke commit heeft een schrijver en een omschrijving. Vul  deze in en kies `master` of **new branch**. Als je een commit op `master` maakt is het zichtbaar voor iedereen. Als je voor **new branch** kiest, dan kunnen ander eet.nu mensen met toegang het bekijken zonder dat bezoekers het zien.

# Voeg een blog toe
Blogs staan in de `_posts` directoy. Een nieuwe blog maak je door een bestand aan te maken met de naam `JJJJ-MM-DD-titel.md` met de juiste datum in de naam.

Begin elk blog-bestand met in ieder geval
```
---
title: <De titel van de blog>
---
```

Overige variabelen die je hier in kunt zetten zijn
- `author` naam van schrijver die wordt getoond in het overzicht en bovenaan de blog zelf
- `header-image` indien je een andere afbeeling groot op de achtergrond wilt dan het standaard blog plaatje
- `featured-image` afbeeling die in het overzicht wordt getoond
- `featured-image-alt` alt-tekst voor featured plaatje. Zorgt dat deze omschrijft wat je ziet
- `intro` tonen in het overzicht en bovenaan de blog zelf

Voorbeeld:
```
---
title: Hello world, dit is onze eerste blog!
author: Pietje Puk
header-image: blog/burning.jpg
featured-image: blog/burning.jpg
featured-image-alt: Vuurbal
intro: Ik ben Pietje de junior blog-schrijver.
```

Zodra je het bestand opslaat op de `master` is het zichtbaar voor iedereen.