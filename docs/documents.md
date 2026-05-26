---
description: Documents de l'utilisateur.
sidebar_position: 11
---

# 📄 Documents

Documents de l'utilisateur. Pour télécharger, rendez-vous à Téléchargement.

```json title="POST /elevesDocuments.awp?archive=&verbe=get&v=7.12.1"
data={} //Objet vide obligatoire
```
```json title="Réponse"
{
  "factures": [],
  "notes": [ //Documents type bulletin et livret de comp.
    {
      "id": 17893, //ID du document
      "libelle": "Livret de compétences Semestre 1", //Titre du document
      "idEleve": 1234, //ID de l'élève
      "date": "2026-01-27", //Date au format AAAA-MM-JJ
      "type": "Note",
      "signatureDemandee": false,
      "etatSignatures": [],
      "signature": {}
    },
    {
      "id": 11475,
      "libelle": "Bulletin Semestre 1",
      "idEleve": 1234,
      "date": "2026-01-27",
      "type": "Note",
      "signatureDemandee": false,
      "etatSignatures": [],
      "signature": {}
    }
  ],
  "viescolaire": [],
  "administratifs": [
    {
      "id": 2326,
      "libelle": "Certificat de scolarité - 1 par page",
      "idEleve": 1234,
      "date": "2025-09-26",
      "type": "",
      "signatureDemandee": false,
      "etatSignatures": [],
      "signature": {}
    }
  ],
  "inscriptions": [],
  "entreprises": [],
  "listesPiecesAVerser": {
    "listesPieces": [],
    "personnes": [
      {
        "id": 1234,
        "nom": "MASSE",
        "prenom": "Lara",
        "type": "E"
      }
    ],
    "pieces": [],
    "televersements": []
  }
}
```