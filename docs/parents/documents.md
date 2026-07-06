---
sidebar_label: "📄 Documents & factures"
description: Documents familiaux et factures.
sidebar_position: 3
---

# 📄 Documents & factures

Documents et factures accessibles depuis un compte famille.

---

## Documents famille

```json title="GET /familledocuments.awp?archive={archive}&verbe=get&v=4.96.3"
data={}
```

### Paramètres de requête

| Param | Défaut | Description |
|---|---|---|
| `archive` | `""` | Année d'archive (vide = année courante) |

```json title="Réponse"
{
  "factures": [
    { "id": 1, "libelle": "Facture octobre", "date": "2024-10-01", "signatureDemandee": false }
  ],
  "notes": [ //Bulletins et livrets de compétences
    {
      "id": 2,
      "libelle": "Bulletin Semestre 1",
      "date": "2024-10-01",
      "type": "Note",
      "signatureDemandee": false,
      "etatSignatures": [],
      "signature": {}
    }
  ],
  "viescolaire": [ //Documents vie scolaire
    {
      "id": 3,
      "libelle": "Document vie scolaire",
      "date": "2024-10-01",
      "type": "VieScolaire",
      "signatureDemandee": false
    }
  ],
  "administratifs": [ //Documents administratifs
    {
      "id": 4,
      "libelle": "Certificat de scolarité",
      "date": "2024-09-26",
      "type": "",
      "signatureDemandee": false
    }
  ],
  "inscriptions": [ //Documents d'inscription à signer
    {
      "id": 5,
      "libelle": "Autorisation sortie",
      "type": "INSCR_DOC_A_SIGNER",
      "signatureDemandee": true
    }
  ],
  "entreprises": [],
  "listesPiecesAVerser": []
}
```

---

## Factures

```json title="GET /factures.awp?verbe=get&v=4.96.3"
data={}
```

```json title="Réponse"
{
  "invoices": [
    {
      "id": 1,
      "libelle": "Facture octobre 2024",
      "date": "2024-10-01",
      "type": "Facture",
      "signatureDemandee": false
    }
  ]
}
```
