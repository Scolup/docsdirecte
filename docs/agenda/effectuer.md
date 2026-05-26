---
sidebar_label: "✅ Effectuer"
description: Marquer un devoir comme fait ou non.
sidebar_position: 3
---

# ✅ Effectuer un devoir

C'est un à la fois !

```json title="POST /Eleves/{identifiant}/cahierdetexte.awp?verbe=put&v=7.12.1"
data={
    "idDevoirsEffectues": [
        11313 //ID du devoir effectué
    ],
    "idDevoirsNonEffectues": [
        11113 //ID du devoir non-effectué
    ]
}
```