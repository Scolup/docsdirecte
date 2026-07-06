---
sidebar_label: "📬 Messagerie"
description: Messagerie du compte famille.
sidebar_position: 2
---

# 📬 Messagerie famille

Les endpoints de messagerie pour un compte parent utilisent le préfixe `/familles/{familyId}` au lieu de `/eleves/{studentId}`. La structure des messages reste identique à celle des [messages élèves](/docs/messages/liste).

---

## Liste des messages

```json title="GET /familles/{familyId}/messages.awp?force=false&typeRecuperation={mailbox}&idClasseur={folderId}&orderBy=date&order=desc&query={query}&onlyRead=&page={page}&itemsPerPage={itemsPerPage}&getAll=0&verbe=get&v=4.96.3"
data={}
```

### Paramètres de chemin

| Param | Description |
|---|---|
| `familyId` | ID du compte famille (`idLogin`) |

### Paramètres de requête

| Param | Défaut | Description |
|---|---|---|
| `typeRecuperation` | `received` | Boîte : `received`, `sent`, `archived` ou `draft` |
| `idClasseur` | `0` | ID du dossier (0 = tous) |
| `query` | `""` | Recherche |
| `page` | `0` | Numéro de page (0-based) |
| `itemsPerPage` | `100` | Messages par page |
| `force` | `false` | Forcer le rafraîchissement |
| `orderBy` | `date` | Champ de tri |
| `order` | `desc` | Sens du tri |
| `onlyRead` | `""` | Filtrer par statut de lecture |
| `getAll` | `0` | Tout récupérer |

```json title="Réponse"
{
  "folders": [ //Dossiers
    { "id": -1, "label": "Boîte de réception", "isCustom": false },
    { "id": 1, "label": "Mon classeur", "isCustom": true }
  ],
  "messages": [
    {
      "id": 123456,
      "mailbox": "received",
      "read": true, //Utilisateur a lu ou non
      "subject": "Objet du message",
      "date": "2024-01-15T10:30:00+01:00",
      "draft": false,
      "transferred": false, //Transféré
      "answered": false, //Répondu
      "folderId": -1,
      "dossierId": 0,
      "from": { "id": 789, "role": "teacher", "name": "M. Dupont" }, //Expéditeur
      "to": [
        { "id": 456, "name": "Mme Martin", "deliveryType": "to" }
      ],
      "attachmentCount": 2, //Nombre de pièces jointes
      "attachments": [
        { "id": 1, "name": "document.pdf", "type": "PDF" }
      ],
      "hasContent": true
    }
  ],
  "pagination": {
    "messagesReceivedCount": 50, //Nombre de messages reçus
    "messagesUnreadCount": 3, //Nombre de messages non lus
    "messagesSentCount": 12 //Nombre de messages envoyés
  },
  "settings": {
    "active": true,
    "canParentsReadStudentMessages": false, //Les parents peuvent lire les messages des enfants
    "recipients": {
      "admin": true, //Peut recevoir des messages de l'administration
      "students": true, //Peut recevoir des messages des élèves
      "families": true, //Peut recevoir des messages des familles
      "teachers": true //Peut recevoir des messages des professeurs
    }
  }
}
```

---

## Détail d'un message

```json title="GET /familles/{familyId}/messages/{messageId}.awp?verbe=get&mode={mode}&v=4.96.3"
data={
    "anneeMessages": "2024-2025"
}
```

### Paramètres de chemin

| Param | Description |
|---|---|
| `familyId` | ID du compte famille |
| `messageId` | ID du message |

### Paramètres de requête

| Param | Défaut | Description |
|---|---|---|
| `mode` | `destinataire` | `destinataire` ou `expediteur` |

### Body (`data=`)

| Champ | Description |
|---|---|
| `anneeMessages` | Année scolaire au format `YYYY-YYYY` |

```json title="Réponse"
{
  "id": 123456,
  "read": true,
  "subject": "Objet du message",
  "contentHtml": "<p>Contenu du message...</p>", //Contenu HTML
  "date": "2024-01-15T10:30:00+01:00",
  "draft": false,
  "transferred": false,
  "answered": false,
  "canAnswer": true, //Si on peut répondre
  "folderId": -1,
  "dossierId": 0,
  "from": { "name": "M. Dupont" },
  "to": [],
  "attachmentCount": 1,
  "attachments": [
    { "name": "piece-jointe.pdf" }
  ]
}
```

---

## Messages des élèves

Les parents peuvent également lire les messages de leurs enfants via les endpoints élèves classiques :

```json title="GET /eleves/{studentId}/messages.awp?..."
data={}
```

```json title="GET /eleves/{studentId}/messages/{messageId}.awp?..."
data={
    "anneeMessages": "2024-2025"
}
```

Consultez la page [✉️ Messagerie](/docs/messages/liste) pour la documentation détaillée de ces endpoints.
