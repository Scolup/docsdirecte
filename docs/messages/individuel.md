---
sidebar_label: "✉️ Individuel"
description: Message individuel (contenu).
sidebar_position: 2
---

# ✉️ Message individuel

Contenu d'un message individuel. La seule grande différence d'information avec la liste des messages c'est qu'on peut voir le contenu, je ne détaillerai donc pas les différents objets ici.

```json title="POST /eleves/{identifiant}/messages/{id du message}.awp?verbe=get&mode=destinataire&v=7.12.1"
data={
    "anneeMessages": "2025-2026"
}
```
```json title="Réponse"
"id": 12345,
"responseId": 0,
"forwardId": 0,
"mtype": "received",
"read": true,
"idDossier": -1,
"idClasseur": 0,
"transferred": false,
"answered": false,
"to_cc_cci": "to",
"brouillon": false,
"canAnswer": true,
"subject": "Problème d'hygiène au self",
"content": "PGgxPkFUVEVOVElPTiBUT1VUIExFIE1PTkRFPC9oMT4KPHA+UHImZWFjdXRlO3BhcmV6LXZvdXMgJmFncmF2ZTsgYXZvaXIgdG91dGVzIHNvcnRlcyBkZSBqb3lldXNlcyBtYWxhZGllcyAhPC9wPgo8cD5FbiBlZmZldCBkZXMgcmF0cyBzZSBzb250IGludHJvZHVpdHMgZGFucyBsYSBjdWlzaW5lIGR1IHNlbGYgISBKZSB2b3VzIGludml0ZSAmYWdyYXZlOyByZWdhcmRlciBsZXMgcGhvdG9zIGVuIHBpJmVncmF2ZTtjZSBqb2ludGUgcG91ciBwbHVzIGQnaW5mb3Mg8J+koTwvcD4=", //HTML encodé en base64
"date": "2026-03-17 16:08:27",
"to": [],
"files": [
  {
    "id": 8703, //ID du fichier
    "libelle": "photo_des_rats.jpeg",
    "date": "2026-03-09",
    "type": "PIECE_JOINTE", //Autres types ?
    "signatureDemandee": false,
    "etatSignatures": [],
    "signature": {}
  }
],
"from": {
  "nom": "DUPONT",
  "prenom": "K.",
  "particule": "",
  "civilite": "Mme",
  "role": "A",
  "listeRouge": false,
  "id": 152,
  "read": true,
  "fonctionPersonnel": ""
}
```