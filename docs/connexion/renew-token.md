---
description: Après expiration, il est possible de renouveler un token, voici comment.
sidebar_position: 4
---

# 🔄 Renouvellement de token

Technique utilisée par l'application EcoleDirecte pour maintenir la session sans redemander le 2FA. C'est un des 2 moyens (avec la sauvegarde des `cn` et `cv`) de bypass le QCM.

Pour utiliser cette technique, vous devrez changer le body du premier login :

```json title="POST /login.awp?v=7.12.1"
data={
  "identifiant": "",
  "motdepasse": "",
  "sesouvenirdemoi": true,
  "isRelogin": false, //Servira plus tard à renouveler le token
  "uuid": "" //UUIDv4 généré soi-même (doit rester le même tout le temps)
}
```
**Récupérez l'`access_token`** dans l'objet utilisateur.

## Renouvellement

Quand le token expire, envoyez :

```json title="POST /login.awp?v=7.12.1"
data={
  "identifiant": "", //Votre identifiant EcoleDirecte
  "uuid": "", //L'UUID envoyé au premier login
  "isReLogin": true,
  "typeCompte": "E",
  "accesstoken": "" //Votre access token dans l'objet utilisateur
}
```
