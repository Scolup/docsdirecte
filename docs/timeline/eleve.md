---
sidebar_label: "🎓 Elève"
description: Timeline unique à l'élève.
sidebar_position: 1
---

# 📰 Timeline élève

La liste des derniers événements qu'on peut voir sur la page d'accueil (un peu inutile...)

```json title="POST /eleves/{identifiant}/timeline.awp?verbe=get&v=7.12.1"
{} //Objet vide obligatoire
```

```json title="Réponse"
{
  "date": "2026-08-26",
  "typeElement": "Note",
  "idElement": 0, //Semble être toujours 0
  "titre": "Nouvelle évaluation",
  "soustitre": "FRANCAIS", //Matière
  "contenu": "Dictée préparée : fantastique du 12/03/2026" //"Du <date>" semble être automatiquement ajouté
},
{
  "date": "2025-10-13",
  "typeElement": "Note",
  "idElement": 0,
  "titre": "Nouvelles évaluations", //Peuvent être plusieurs !
  "soustitre": "",                         //Dans les cas où plusieurs notes sont dans le même événement,
  "contenu": "TECHNOLOGIE / MATHEMATIQUES" //le sous-titre est vide et les matières sont dans le contenu.
},
{
  "date": "2026-08-26",
  "typeElement": "Messagerie",
  "idElement": 31013, //ID du message
  "titre": "Mme K. DUPONT", //Nom de l'envoyeur
  "soustitre": "", //Semble toujours être vide
  "contenu": "Problème hygiénique au self" //Objet du message
},
{
  "date": "2026-08-26",
  "typeElement": "VieScolaire",
  "idElement": 10550, //ID de l'absence/retard
  "titre": "Absence", //Type (absence, retard)
  "soustitre": "2 demi-journées", //Durée
  "contenu": "Non justifiée" //Justifié ou pas
},
{
  "date": "2025-10-13",
  "typeElement": "VieScolaire",
  "idElement": 2886,
  "titre": "Retard",
  "soustitre": "00:55",
  "contenu": "Justifiée"
},
```