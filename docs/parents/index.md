---
sidebar_label: "👨‍👩‍👧‍👦 Présentation"
description: Présentation de l'API pour les comptes parents.
sidebar_position: 1
---

# 👨‍👩‍👧‍👦 Comptes parents

Les comptes de type **famille** (`typeCompte: "F"`) permettent aux parents d'accéder aux données de leurs enfants liés. Cette section documente les endpoints accessibles depuis un compte parent.

:::info
Contrairement aux comptes élèves (`typeCompte: "E"`), les comptes famille utilisent un identifiant spécifique (`familyId`) pour certains endpoints et interagissent avec les données des élèves via leur `studentId`.
:::

## 🚀 Base de l'API

L'URL de base pour toutes les requêtes est :
`https://api.ecoledirecte.com/v3`

## 📋 Headers communs

Toutes les requêtes authentifiées incluent :

| Header | Valeur |
|---|---|
| `X-GTK` | GTK actuel |
| `X-Token` | Token de session actuel |
| `Cookie` | Cookies de session |
| `Content-Type` | `application/x-www-form-urlencoded` |

## 🔍 Obtenir le familyId

Le `familyId` (ou `idLogin`) se trouve dans l'objet `accounts` retourné lors de la connexion. C'est l'`id` du compte parent. Consultez la page [👤 Infos de l'utilisateur](/docs/account) pour plus de détails.

```json title="Extrait de l'objet accounts après login"
{
  "idLogin": 1234567,  // → C'est le familyId
  "id": 1234,           // → C'est l'ID d'un élève lié (studentId)
  "typeCompte": "F",    // Famille
  "identifiant": "parent-identifiant",
  "accounts": [
    {
      "id": 1234,       // Élève lié 1
      "prenom": "Marie",
      "nom": "DUPONT"
    },
    {
      "id": 5678,       // Élève lié 2
      "prenom": "Paul",
      "nom": "DUPONT"
    }
  ]
}
```

## 📖 Ce que vous trouverez dans cette section

| Page | Description |
|---|---|
| [📬 Messagerie](/docs/parents/messages) | Messages depuis le compte famille (`/familles/{familyId}/messages`) |
| [📄 Documents](/docs/parents/documents) | Documents familiaux et factures (`/familledocuments`, `/factures`) |
| [⬇️ Téléchargement](/docs/parents/telechargement) | Téléchargement de fichiers depuis un compte famille |

## 🔗 Données des élèves

Les endpoints suivants utilisent le même chemin que les comptes élèves, mais sont accessibles depuis un compte parent. Consultez les pages correspondantes pour la documentation détaillée :

| Donnée | Endpoint | Page associée |
|---|---|---|
| Notes | `/eleves/{studentId}/notes.awp` | [📈 Notes](/docs/notes) |
| Emploi du temps | `/E/{studentId}/emploidutemps.awp` | [🗓️ EDT](/docs/edt) |
| Absences & retards | `/eleves/{studentId}/viescolaire.awp` | [🪑 Absences](/docs/absences) |
| Cahier de textes | `/Eleves/{studentId}/cahierdetexte/...` | [🗒️ Cahier de textes](/docs/agenda/list) |
| Messagerie élève | `/eleves/{studentId}/messages.awp` | [✉️ Messagerie](/docs/messages/liste) |
| Documents élève | `/elevesDocuments.awp` | [📄 Documents](/docs/documents) |
