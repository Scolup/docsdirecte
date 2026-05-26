---
sidebar_label: "📜 Liste"
description: Liste des devoirs.
sidebar_position: 1
---

# 📜 Liste de devoirs

Récupérer la liste des devoirs à venir :

```json title="POST /Eleves/{identifiant}/cahierdetexte.awp?verbe=get&v=7.12.1"
data={} //Objet vide obligatoire
```

```json title="Réponse"
{
  "2026-03-24": [ //Date d'échéance des devoirs
    {
      "matiere": "ANGLAIS",
      "codeMatiere": "AGL",
      "aFaire": true, //?
      "idDevoir": 11243, //ID unique
      "documentsAFaire": false,
      "donneLe": "2026-03-20", //Devoir donné le
      "effectue": true, //Boolean, marqué comme effectué ou pas par l'élève
      "interrogation": true, //Boolean, tag "Contrôle"
      "rendreEnLigne": false, //Possibilité de rendre un fichier sur le devoir
      "tags": [] //?
    }
  ],
  "2026-03-25": [
    {
      "matiere": "SCIENCES VIE & TERRE",
      "codeMatiere": "SVT",
      "aFaire": true,
      "idDevoir": 11037,
      "documentsAFaire": false,
      "donneLe": "2026-03-18",
      "effectue": false,
      "interrogation": false,
      "rendreEnLigne": false,
      "tags": []
    }
  ],
}
```