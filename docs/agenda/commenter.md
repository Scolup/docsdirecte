---
sidebar_label: "💬 Commenter"
description: Ajouter un commentaire sur un devoir.
sidebar_position: 4
---

# 💬 Commenter un devoir

:::note
Vous pouvez envoyer des commentaires avec des tailles et couleurs, mais ils seront invisibles sur le site et l'app.
:::

```json title=" POST/eleves/{identifiant}/afaire/commentaires.awp?verbe=post&v=7.12.1"
data={
    "message": "Qydlc3QgdW5lIMOpdmFsdWF0aW9uID8=", //HTML en B64
    "idContenu": 11313 //ID du devoir où on ajoute le commentaire
}
```

``` json title="Réponse"
{
  "id": 1166 //ID du commentaire posté
}
```