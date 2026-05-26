---
description: Cours de l'utilisateur.
sidebar_position: 7
---

# 🗓️ Emploi du temps

Contrairement aux notes c'est simple :

```json title="/E/{identifiant}/emploidutemps.awp?verbe=get&v=7.12.1"
data={
    "dateDebut": "2026-03-16", //De quelle date...
    "dateFin": "2026-03-22",   //...A quelle date récupérer l'EDT
    "avecTrous": false //Boolean, inclure ou non les congés
}
```

:::danger
N'abusez pas avec les dates sinon votre activité sera analysée par Aplim.
:::

```json title="Réponse"
{
  "id": 106355, //ID du cours
  "text": "HISTOIRE-GEOGRAPHIE",
  "matiere": "HISTOIRE-GEOGRAPHIE",
  "codeMatiere": "HI-GE",
  "typeCours": "COURS", //Ou CONGE 
  "start_date": "2026-03-16 09:00", //Date et heure de début
  "end_date": "2026-03-16 09:55", //Date et heure de fin
  "color": "#fe1700", //Couleur du cours affiché
  "dispensable": false,
  "dispense": 0,
  "prof": "BICYCLETTE C.",
  "salle": "Salle 67",
  "classe": "",
  "classeId": 0,
  "classeCode": "",
  "evenementId": 0,
  "groupe": "TERMINALE 1 groupe classe",
  "groupeCode": "T1",
  "isFlexible": false,
  "groupeId": 1673,
  "icone": "",
  "isModifie": false, //Boolean, si le cours a subi des changements (salle, prof, matière...)
  "contenuDeSeance": false,
  "devoirAFaire": false,
  "isAnnule": false //Boolean, si le cours est annulé
}
```

Pour obtenir l'URL du fichier .ics :

```json title="/ical/E/{identifiant}/url.awp?verbe=get&v=7.12.1"
data={}
```

```json title="Réponse"
{
  "url": "ical/E/2852/4c327878516b744851324e43523235434e32677a566b354e533238784e4870785255316f4f47396e.ics" //Ajouter, au début de l'URL, "https://api.ecoledirecte.com/v3/"
}
```