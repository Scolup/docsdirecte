---
sidebar_label: "📬 Liste"
description: Liste des messages, dossiers et paramètres messagerie.
sidebar_position: 1
---

# 📬 Liste des messages

Liste des messages et des dossiers, ainsi que les paramètres de la messagerie.

```json title="POST /eleves/{identifiant}/messages.awp?getAll=1&verbe=get&v=4.97.0"
data={
    "anneeMessages": "2050-2051"
}
```

```json title="Réponse"
"classeurs": [ //Dossiers
  {
    "id": 285,
    "libelle": "Travail"
  },
  {
    "id": 276,
    "libelle": "Inutile"
  }
],
"messages": {
  "received": [
    {
      "id": 12345,
      "responseId": 0,
      "forwardId": 0,
      "mtype": "received",
      "read": false, //Utilisateur a lu ou non (boolean)
      "idDossier": -1, //??
      "idClasseur": 0, //ID du dossier (probablement)
      "transferred": false,
      "answered": false,
      "to_cc_cci": "to", //Envoi direct, cc ou cci
      "brouillon": false,
      "canAnswer": false, //Je peux pourtant bien y répondre
      "subject": "Problème hygiénique dans la cuisine du self", //Objet
      "content": "", //Semble être toujours vide
      "date": "2026-03-16 18:59:05",
      "to": [], //Probablement autres destinataires, sûrement désactivé pour moi
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
        "role": "A", //A pour personnel admin et P pour professeur
        "listeRouge": false,
        "id": 152,
        "read": true, //Si l'envoyeur a lu le message ?
        "fonctionPersonnel": ""
      }
    },
  ],
  "sent": [],
  "draft": [],
  "archived": []
},
"parametrage": {
  "isActif": true,
  "canParentsLireMessagesEnfants": true,
  "destAdmin": true, //Peut recevoir des messages de...
  "destEleve": false,
  "destFamille": false,
  "destProf": true,
  "destEspTravail": false,
  "destEntreprise": true,
  "disabledNotification": false,
  "notificationEmailEtablissement": true,
  "choixMailNotification": 0,
  "autreMailNotification": "",
  "mailPro": "",
  "mailPerso": "",
  "messagerieApiVersion": "v3",
  "blackListProfActive": false,
  "estEnBlackList": false,
  "afficherToutesLesClasses": false
},
"pagination": {
  "messagesRecusCount": 67, //Nombres de messages reçus
  "messagesEnvoyesCount": 10, //Nombres de messages envoyés
  "messagesArchivesCount": 0, //Nombre de messages archivés (ne semble pas correct)
  "messagesRecusNotReadCount": 1, //Nombre de messages reçus non lus
  "messagesDraftCount": 0 //Nombre de brouillons
}
```

Pour obtenir la liste de messages d'un dossier faites `POST /eleves/{identifiant}/messages.awp?force=false&typeRecuperation=classeur&idClasseur={id du classeur}&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get&v=4.97.0`

### Marquer comme non lu
```json title=POST /eleves/{identifiant}/messages.awp?verbe=put&v=7.12.1
data={
    "action": "marquerCommeNonLu",
    "ids": [
        39354 // Identifiants des messages à marquer comme non lus
    ],
    "anneeMessages": "2025-2026" // Année scolaire des messages
}
```

### Archiver/désarchiver
```json title=POST /eleves/{identifiant}/messages.awp?verbe=put&v=7.12.1
data={
    "action": "archiver", // Ou alors desarchiver pour désarchiver
    "ids": [
        39354 // Identifiants des messages à archiver
    ],
    "anneeMessages": "2025-2026" //année des messages à archiver
}
```

### Déplacer
```json title=POST /eleves/{identifiant}/messages.awp?verbe=put&v=7.12.1
data={
    "action": "deplacer",
    "idClasseur": 275, //ID du nouveau dossier, 0 pour boîte de réception
    "ids": [
        "33553:-1" //ID des messages suivis d'un :-1
    ]
}
```

### Supprimer dossier
```json title=POST /messagerie/classeur/{id du classeur}.awp?verbe=delete&v=7.12.1
data={}
```

### Créer dossier
```json title= POST /messagerie/classeurs.awp?verbe=post&v=7.12.1
data={
    "libelle": "Test" //NOM DU DOSSIER
}
```
