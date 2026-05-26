---
description: Répondre au QCM de sécurité après un code 250.
sidebar_position: 3
---

# 🔑 QCM de sécurité (2FA)

Si vous recevez le code `250`, mettez le `token` temporaire fourni dans le header `X-Token` et suivez ces étapes.

### Étape A : Récupérer la question

```json title="POST /v3/connexion/doubleauth.awp?verbe=get&v=7.12.1"
data={} //Objet vide obligatoire
```

L'API renvoie la question et les propositions encodées en **Base64**.

### Étape B : Répondre au QCM

```json title="POST /v3/connexion/doubleauth.awp?verbe=post&v=7.12.1"
    {
        "choix": "d3JhcERpcmVjdGU=" // Réponse encodée en Base64
    }
```

:::danger[**ATTENTION** à ne pas bloquer votre compte]
Si vous ne renvoyez pas la réponse en Base64, votre compte sera bloqué et vous pourrez le débloquer dans un message envoyé à votre adresse mail.
:::

### Étape C : Validation finale

Une fois le QCM réussi, l'API renvoie des objets `cn` et `cv`. Vous devez refaire une requête de Login en incluant ces paramètres :

```json title="POST /login.awp?v=7.12.1"
data={
    "identifiant": "",
    "motdepasse": "",
    "isReLogin": "false",
    "uuid": "",
    "fa": [
        {
           "cn": "<cn>",
           "cv": "<cv>",
           "uniq": "false" //Rendre les objets cn et cv à usage unique
        }
    ]
}
```

::::info[Utile]
Les objets `cn` et `cv` sont réutilisables, vous pouvez les stocker pour ne pas avoir à redemander de QCM. C'est un moyen, avec le renouvellement de token, de se connecter sans QCM, mais préférez le renouvellement de token puisqu'elle vous permet de ne pas stocker de mot de passe.
:::tip[Aussi...]
Si vous utilisez cette technique, vous pouvez gagner du temps en envoyant directement la requête avec `cn` et `cv`.
:::
::::

Si la réponse est bonne, vous devriez récupérer les objets `token` et `accounts`.
