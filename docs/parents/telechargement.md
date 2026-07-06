---
sidebar_label: "⬇️ Téléchargement"
description: Téléchargement de fichiers depuis un compte famille.
sidebar_position: 4
---

# ⬇️ Téléchargement

Téléchargement de fichiers (pièces jointes, documents, factures, etc.) depuis un compte famille.

:::warning
Contrairement aux autres endpoints, le téléchargement utilise des paramètres dans l'URL ET dans le body en `application/x-www-form-urlencoded`. Le token peut être passé en paramètre plutôt qu'en header `X-Token`.
:::

```json title="GET /telechargement.awp?verbe=get&fichierId={fileId}&leTypeDeFichier={fileType}&v=4.96.3"
// Paramètres URL uniquement
```

### Paramètres de requête

| Param | Description |
|---|---|
| `fichierId` | ID du fichier/document |
| `leTypeDeFichier` | Catégorie du fichier (voir mapping ci-dessous) |
| `cToken` | Token de contenu optionnel pour certains fichiers |
| `forceDownload` | Forcer le téléchargement |
| `archive` | Année d'archive |
| `anneeArchive` | Année d'archive (alternative) |

### Mapping des types de fichiers

| Catégorie de document | Valeur de `leTypeDeFichier` |
|---|---|
| Notes / bulletins | `Note` |
| Factures | `Facture` |
| Vie scolaire | `VieScolaire` |
| Administratif | `""` (vide) |
| Inscriptions | Le champ `type` de l'entrée (ex. `INSCR_DOC_A_SIGNER`) |
| Entreprises | `""` (vide) |

### Réponse

La réponse est le contenu binaire du fichier avec les headers `Content-Type` et `Content-Disposition` appropriés.

---

## Exemples par type

### Document (bulletin, administratif)

```http title="Exemple de requête"
GET /telechargement.awp?verbe=get&fichierId=1234&leTypeDeFichier=Note&archive=false&anneeArchive=&v=4.96.3
```

### Facture

```http title="Exemple de requête"
GET /telechargement.awp?verbe=get&fichierId=5678&leTypeDeFichier=Facture&v=4.96.3
```

### Document d'inscription

```http title="Exemple de requête"
GET /telechargement.awp?verbe=get&fichierId=9012&leTypeDeFichier=INSCR_DOC_A_SIGNER&v=4.96.3
```
