---
sidebar_position: 1
description: Récupération du cookie GTK nécessaire pour la connexion
---

# 🍪 Initialisation (GTK)

Il est obligatoire de récupérer un cookie de session nommé `GTK` avant de tenter un login. Sans ce cookie, l'API renverra systématiquement une erreur d'identifiants.

`GET /login.awp?gtk=1&v=7.12.1`

:::info[À savoir]
Dans la réponse, vous trouverez 2 `set-cookie`. Le premier est dans un format `GTK=<valeur>` et l'autre est dans un format `<suite de caractères random>=<valeur du GTK>`.
:::

:::warning[Crucial]
Vous devez extraire la valeur du cookie `GTK` de la réponse et la transmettre dans toutes les requêtes **de login** suivantes via le header `X-Gtk`.
:::
