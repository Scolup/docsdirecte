---
sidebar_label: "📏 Individuel et contenu de séance"
description: Devoir individuel + contenu de séance.
sidebar_position: 2
---

# 📏 Devoir individuel + contenu de séance

Récupérer la liste des devoirs à venir :

```json title="POST /Eleves/{identifiant}/cahierdetexte/{date au format AAAA-MM-JJ}.awp?verbe=get&v=7.12.1"
data={} //Objet vide obligatoire
```

```json title="Réponse"
{
  "date": "2026-03-23",
  "matieres": [
    {
      "entityCode": "T1", //ID de la classe
      "entityLibelle": "TERMINALE 1",
      "entityType": "G", //Type de classe (groupe ici)
      "matiere": "PHYSIQUE-CHIMIE",
      "codeMatiere": "PH-CH",
      "nomProf": "M. EINSTEIN A.",
      "id": 10330,
      "interrogation": false,
      "blogActif": true,
      "nbJourMaxRenduDevoir": 0,
      "aFaire": {
        "idDevoir": 10330,
        "contenu": "PHVsIGNsYXNzPSJ0b2RvLWxpc3QiPjxsaSBkYXRhLWxpc3QtaXRlbS1pZD0iZTE3N2FkOWEyMDE5NDJiY2FhNTE1MzMxMjVlZTVhMWFjIj48bGFiZWwgY2xhc3M9InRvZG8tbGlzdF9fbGFiZWwiPjxpbnB1dCB0eXBlPSJjaGVja2JveCIgZGlzYWJsZWQ9ImRpc2FibGVkIj48c3BhbiBjbGFzcz0idG9kby1saXN0X19sYWJlbF9fZGVzY3JpcHRpb24iQWpvdXRlciBsZSBjYWhpZXIgZGUgdGV4dGVzIGRhbnMgd3JhcERpcmVjdGUiLjwvc3Bhbj48L2xhYmVsPjwvbGk+PC91bD4=", //HTML en Base64
        "rendreEnLigne": false,
        "donneLe": "2026-03-09",
        "effectue": false,
        "ressource": "",
        "documentsRendusDeposes": false,
        "ressourceDocuments": [],
        "documents": [
          {
            "id": 8651,
            "libelle": "README.md",
            "date": "2026-03-16",
            "taille": 57365, //En octets
            "type": "FICHIER_CDT",
            "signatureDemandee": false,
            "etatSignatures": [],
            "signature": {}
          }
        ],
        "commentaires": [
          {
            "id": 1166,
            "idAuteur": 2852,
            "profilAuteur": "E", //Elève
            "auteur": "Marie CURIE",
            "date": "2026-03-22",
            "message": "Qydlc3QgdW5lIMOpdmFsdWF0aW9uID8=",
            "supprime": false
          },
          {
            "id": 1167,
            "idAuteur": 2742,
            "profilAuteur": "P", //Professeur
            "auteur": "Antonin LEGENIE",
            "date": "2026-03-23",
            "message": "T3VpIGplIHBlbnNlJm5ic3A7",
            "supprime": false
          }
        ],
        "elementsProg": [],
        "liensManuel": [],
        "documentsRendus": [],
        "tags": [],
        "cdtPersonnalises": [],
        "contenuDeSeance": {
          "contenu": "UEFTIExFIFZSQUkgQ09OVEVOVSBERSBTRUFOQ0Ug4p2M", //PAS LE VRAI (peut-être le contenu prévisionnel)
          "documents": [],
          "commentaires": []
        }
      },
      "contenuDeSeance": {
        "idDevoir": 10330,
        "contenu": "TMOgIGMnZXN0IGxlIHZyYWk=", //c'est lui le vrai
        "documents": [
          {
            "id": 8652,
            "libelle": "README.md",
            "date": "2026-03-16",
            "taille": 57365,
            "type": "FICHIER_CDT",
            "signatureDemandee": false,
            "etatSignatures": [],
            "signature": {}
          }
        ],
        "commentaires": [],
        "elementsProg": [],
        "liensManuel": []
      }
    },
  ]
}
```