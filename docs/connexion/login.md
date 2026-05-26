---
description: Première tentative de connexion à l'API
sidebar_position: 1
---

# 📥 Première connexion

Cette étape est cruciale pour obtenir votre premier token d'accès. Elle permet d'identifier l'utilisateur et de vérifier ses identifiants.

## Requête d'Authentification

Pour vous connecter, envoyez une requête POST à l'endpoint suivant :

```json title="POST /login.awp?v=7.12.1"
data={
  "identifiant": "VOTRE_IDENTIFIANT",
  "motdepasse": "VOTRE_MOT_DE_PASSE",
  "isRelogin": false, //Pour renouveler le token (voir renouvellement). Mettez à false.
  "uuid": "" //Laissez vide sauf si vous comptez renouveler le token plus tard
}
```

---

## 🚦 Réponses Possibles

L'API renvoie différents codes de statut selon le résultat de l'authentification :

| Code | Signification | Actions recommandées |
| :--- | :--- | :--- |
| **200** | **Succès** | Récupérez le `token` et les informations du compte dans `data.accounts`. |
| **250** | **Sécurité Requise** | Vous devez répondre à un QCM de sécurité. Consultez la section [2FA (QCM)](/docs/connexion/2fa). |
| **505** | **Échec** | Identifiants ou mot de passe incorrects. |

:::info Prochaines Étapes
Une fois authentifié (Code 200), vous recevez un objet `accounts` contenant les détails de l'utilisateur. Apprenez-en plus sur la structure de cet objet dans la section [👤 Objet accounts](/docs/account).
:::
