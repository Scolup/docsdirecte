---
description: Liste et passage des QCMs.
sidebar_position: 6
---

# 📝 QCM

Gestion des QCMs (Questionnaires à Choix Multiples).

## Liste des QCMs

Récupère la liste des QCMs disponibles pour l'élève.

```json title="POST /v3/eleves/{identifiant}/qcms/0/associations.awp?verbe=get&v=7.12.1"
data={}
```

```json title="Réponse"
"data": [
    {
        "idQCM": 149,
        "titre": " Le tourisme et ses espaces 4A",
        "idAssociation": 237
    }
]
```

## Détails d'un QCM

Récupère les questions et les informations détaillées d'un QCM.

```json title="POST /v3/eleves/{identifiant}/qcms/{idQCM}/associations/{idAssociation}.awp?verbe=get&v=7.12.1"
data={
    "anneeQCMs": "2025-2026"
}
```

```json title="Réponse (simplifiée)"
"data": {
    "questions": [
        {
            "id": 2819,
            "question": "UTkgLSBRdWVscyBzb250IGxlcyBlZmZldHMgbsOpZ2F0aWZzIGR1IHRvdXJpc21lIMOgIFB1bnRhIENhbmEgPw==", // Question en Base64
            "enonce": "PHA+MiByw6lwb25zZXMgYXR0ZW5kdWVzPC9wPg==", // Énoncé en HTML Base64
            "titreSon": "",
            "srcSon": "",
            "typeQ": "checkbox", // "radio" ou "checkbox"
            "propositions": [
                {
                    "id": 12922,
                    "enonce": "TGVzIGZvbmRzIG1hcmlucyAoY29yYXV4KSBzb250IGZyYWdpbGlzw6lzIHBhciBsZXMgcmVqZXRzIGQnZWF1eCB1c8OpZXM=" // Proposition en Base64
                }
            ]
        }
    ],
    "reponses": [
        {
            "id": 91943,
            "idQuestion": 2819,
            "idParticipant": 5904,
            "choix": []
        }
    ],
    "solutions": [],
    "qcm": {
        "id": 149,
        "titre": " Le tourisme et ses espaces 4A",
        "introduction": "...",
        "conclusion": "...",
        "baremeBR": 1,
        "baremeAR": 0,
        "baremeMR": 0,
        "idAuteur": 8,
        "qAleatoire": true,
        "bloquerRejeuFormatif": true,
        "masquerCorrectifFormatif": true
    },
    "association": {
        "id": 237,
        "disponible": true
    },
    "participant": {
        "idParticipant": 5904,
        "peutVoirSolutions": false
    }
}
```

## Démarrer un QCM

Indique au serveur que l'élève commence le QCM.

```json title="POST /v3/eleves/{identifiant}/qcms/{idQCM}/associations/{idAssociation}/participants/{idParticipant}.awp?verbe=patch&v=7.12.1"
data={
    "action": "updateStartDate"
}
```

```json title="Réponse"
"data": {
    "debute": "2026-05-26 16:55:26"
}
```

## Envoyer une réponse

Enregistre la réponse de l'élève pour une question spécifique.

```json title="POST /v3/eleves/{identifiant}/qcms/{idQCM}/associations/{idAssociation}/participants/{idParticipant}/reponse/{idReponse}.awp?verbe=patch&v=7.12.1"
data={
    "reponse": {
        "id": 91943,
        "idQuestion": 2819,
        "idParticipant": 5904,
        "choix": [12922, 12923] // Array pour checkbox, ID unique pour radio
    }
}
```

```json title="Réponse"
"data": {
    "repondu": "2026-05-26 16:55:49",
    "resultat": "",
    "points": 0
}
```

## Terminer un QCM

Indique au serveur que l'élève a terminé le QCM.

```json title="POST /v3/eleves/{identifiant}/qcms/{idQCM}/associations/{idAssociation}/participants/{idParticipant}.awp?verbe=patch&v=7.12.1"
data={
    "action": "updateEndDate"
}
```

```json title="Réponse"
"data": {
    "fini": "2026-05-26 17:00:02"
}
```
