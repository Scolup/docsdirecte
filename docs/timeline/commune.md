---
sidebar_label: "📌 Commune (post-its)"
description: Timeline de l'établissement (avec post-its).
sidebar_position: 2
---

# 📌 Post-its (timeline commune)

Timeline que tous les élèves de l'établisement voient, y compris post-its.

```json title="POST /E/{identifiant}/timelineAccueilCommun.awp?verbe=get&v=7.12.1"
{} //Objet vide obligatoire
```

```json title="Réponse"
"evenements": [], //Pas d'infos
"postits": [
  {
    "id": 412,
    "type": "couleur1", //Probablement un réglage de l'établissement
    "contenu": "RXNzYXlleiBldm9EaXJlY3RlICE=", //Contenu du post-it, HTML encodé en base64
    "dateCreation": "19/01/2026", //Les dates ne sont pas toujours au même format :)
    "dateDebut": "19/01/2026", //?
    "dateFin": "",
    "cible": [],
    "ciblesEtab": [],
    "auteur": {
      "civilite": "Mme",
      "prenom": "Karim",
      "particule": "",
      "nom": "DUPONT",
      "type": "A", //Pour Admin ?
      "id": "55" //ID de l'auteur
    }
  }
]
```
