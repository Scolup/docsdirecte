---
description: Notes, périodes et compétences de l'utilisateur.
sidebar_position: 5
---

# 📈 Notes

Mais **QUEL ENFER**
Récupération des notes, périodes, matières, paramétrages notes, compétences et LSUN.

```json title="POST /eleves/{identifiant}/notes.awp?verbe=get&v=7.12.1"
data={
    "anneeScolaire": "" //Laisser vide pour l'année en cours
}
```

```json title="Réponse"
"foStat": "21150010001", //?
"periodes": [
  {
    "idPeriode": "A001",
    "codePeriode": "A001",
    "periode": "Semestre 1",
    "annuel": false, //S'il s'agit d'une période concernant l'année entière
    "dateDebut": "2025-09-04",
    "dateFin": "2026-01-14",
    "examenBlanc": false, //Si c'est un examen blanc
    "cloture": true, //Si les notes sont impossibles à rentrer
    "dateConseil": "2026-01-15", //Date et heure conseil de classe
    "heureConseil": "17:50",
    "moyNbreJoursApresConseil": -1, //?
    "ensembleMatieres": {
      "dateCalcul": "",
      "nomPP": "M. PICHON C.", //Nom du professeur principal
      "nomCE": "",
      "decisionDuConseil": "",
      "disciplines": [
        {
          "id": 4,
          "codeMatiere": "",
          "codeSousMatiere": "",
          "discipline": "ENSEIGNEMENTS OBLIGATOIRES",
          "coef": 0,
          "effectif": 27,
          "rang": 19,
          "groupeMatiere": true, //ça veut dire que ce n'est pas une vraie matière mais une catégorie
          "idGroupeMatiere": 0,
          "option": 0,
          "sousMatiere": false,
          "saisieAppreciationSSMat": false,
          "professeurs": []
        },
        {
          "id": 769,
          "codeMatiere": "FRANC",
          "codeSousMatiere": "",
          "discipline": "FRANCAIS",
          "coef": 1,
          "effectif": 0,
          "rang": 0,
          "groupeMatiere": false,
          "idGroupeMatiere": 4,
          "option": 0,
          "sousMatiere": false,
          "saisieAppreciationSSMat": false,
          "professeurs": [
            {
              "id": 131,
              "nom": "Mme CHARLES M."
            }
          ]
        },
        {
          "id": 763,
          "codeMatiere": "HI-GE",
          "codeSousMatiere": "",
          "discipline": "HISTOIRE-GEOGRAPHIE",
          "coef": 1,
          "effectif": 0,
          "rang": 0,
          "groupeMatiere": false,
          "idGroupeMatiere": 4,
          "option": 0,
          "sousMatiere": false,
          "saisieAppreciationSSMat": false,
          "professeurs": [
            {
              "id": 8,
              "nom": "M. ALEX C."
            }
          ]
        },
        {
          "id": 5,
          "codeMatiere": "",
          "codeSousMatiere": "",
          "discipline": "ENSEIGNEMENTS FACULTATIFS",
          "coef": 0,
          "effectif": 27,
          "rang": 23,
          "groupeMatiere": true,
          "idGroupeMatiere": 0,
          "option": 0,
          "sousMatiere": false,
          "saisieAppreciationSSMat": false,
          "professeurs": []
        },
        {
          "id": 1587,
          "codeMatiere": "LCALA",
          "codeSousMatiere": "",
          "discipline": "LCA LATIN",
          "coef": 1,
          "effectif": 0,
          "rang": 0,
          "groupeMatiere": false,
          "idGroupeMatiere": 5,
          "option": 0,
          "sousMatiere": false,
          "saisieAppreciationSSMat": false,
          "professeurs": [
            {
              "id": 49,
              "nom": "Mme MAMAMAMA N."
            }
          ]
        }
      ],
      "disciplinesSimulation": []
    }
  },
  {
    "idPeriode": "A002",
    "codePeriode": "A002",
    "periode": "Semestre 2",
    "annuel": false,
    "dateDebut": "2026-01-15",
    "dateFin": "2026-07-04",
    "examenBlanc": false,
    "cloture": false,
    "dateConseil": "2026-06-03",
    "heureConseil": "17:50",
    "moyNbreJoursApresConseil": -1,
    "ensembleMatieres": {
      "dateCalcul": "",
      "nomPP": "M. PICHON C.",
      "nomCE": "",
      "decisionDuConseil": "",
      "disciplines": [], //Disciplines de la période
      "disciplinesSimulation": []
    }
  }
],
"notes": [
  {
    "id": 16777343,
    "devoir": "Conjugaison",
    "codePeriode": "A001",
    "codeMatiere": "ALL2",
    "libelleMatiere": "ALLEMAND LV2",
    "codeSousMatiere": "",
    "typeDevoir": "",
    "enLettre": false,
    "commentaire": "",
    "uncSujet": "",
    "uncCorrige": "",
    "date": "2025-09-15",
    "dateSaisie": "2025-09-30",
    "coef": 0,
    "noteSur": "10",
    "valeur": "6",
    "valeurisee": false,
    "nonSignificatif": false,
    "elementsProgramme": [
      {
        "descriptif": "Resituer les connaissances lexicales, grammaticales, phonologiques et culturelles.",
        "idElemProg": 1119,
        "valeur": "2",
        "cdt": false,
        "idCompetence": 336,
        "idConnaissance": 0,
        "libelleCompetence": "Restituer les connaissances",
        "afc": 0 //Attendu de fin de cycle
      }
    ]
  },
  {
    "id": 16778194,
    "devoir": "Evaluation finale sur lesaires urbaines",
    "codePeriode": "A002",
    "codeMatiere": "HI-GE",
    "libelleMatiere": "HISTOIRE-GEOGRAPHIE",
    "codeSousMatiere": "",
    "typeDevoir": "",
    "enLettre": false,
    "commentaire": "",
    "uncSujet": "",
    "uncCorrige": "",
    "date": "2025-11-30",
    "dateSaisie": "2025-11-30",
    "coef": 0,
    "noteSur": "20",
    "valeur": "16,5",
    "valeurisee": false,
    "nonSignificatif": false,
    "elementsProgramme": [
      {
        "descriptif": "Nommer et localiser les grands repères géographiques",
        "idElemProg": 2375,
        "valeur": "4",
        "cdt": false,
        "idCompetence": 642,
        "idConnaissance": 0,
        "libelleCompetence": "Se repérer dans l’espace : construire des repères géographiques",
        "afc": 0
      },
      {
        "descriptif": "Identifier le document et son point de vue particulier",
        "idElemProg": 1520,
        "valeur": "4",
        "cdt": false,
        "idCompetence": 439,
        "idConnaissance": 0,
        "libelleCompetence": "Analyser et comprendre un document ",
        "afc": 0
      }
    ]
  },
],
"parametrage": {
  "couleurEval1": "#ff0000", //Valeurs hex des couleurs des compétences
  "couleurEval2": "#ffc000",
  "couleurEval3": "#1e8910",
  "couleurEval4": "#005bb0",
  "libelleEval1": "TWHDrnRyaXNlIGluc3VmZmlzYW50ZQ==", //Titres des compétences en base64
  "libelleEval2": "TWHDrnRyaXNlIGZyYWdpbGU=",
  "libelleEval3": "TWHDrnRyaXNlIHNhdGlzZmFpc2FudGU=",
  "libelleEval4": "VHLDqHMgYm9ubmUgbWHDr3RyaXNl",
  "affichageMoyenne": false,
  "affichageMoyenneDevoir": true, //Probablement le graphique d'évolution des notes ?
  "affichagePositionMatiere": false,
  "affichageOngletCompetence": 1,
  "affichageNote": true,
  "affichageCompetence": true,
  "affichageEvaluationsComposantes": false,
  "affichageGraphiquesComposantes": false,
  "modeCalculGraphiquesComposantes": "eval",
  "affichageCompNum": false,
  "libelleEvalCompNum1": "Tm9uIGF0dGVpbnQ=", //?? Base64
  "libelleEvalCompNum2": "UGFydGllbGxlbWVudCBhdHRlaW50",
  "libelleEvalCompNum3": "QXR0ZWludA==",
  "affichageAppreciation": false,
  "coefficientNote": false,
  "colonneCoefficientMatiere": false,
  "noteGrasSousMoyenne": false,
  "noteGrasAudessusMoyenne": false,
  "libelleDevoir": true,
  "dateDevoir": true,
  "typeDevoir": true,
  "noteUniquementPeriodeCloture": false,
  "notePeriodeReleve": false,
  "notePeriodeAnnuelle": false,
  "notePeriodeHorsP": false,
  "libellesAppreciations": [
    "Appréciation générale"
  ],
  "appreciationsParametrage": [
    {
      "code": "APP1",
      "id": 1,
      "nbMaxCaractere": 300,
      "libelle": "Appréciation générale"
    }
  ]
},
"LSUN": {
  "A001": [
    {
      "cdt": false, //Cahier de texte ????
      "codeMatiere": "FRANC",
      "libelleMatiere": "FRANCAIS",
      "isFirstOfMatiere": false,
      "nbElemProgMatiere": 12,
      "codeSousMatiere": "",
      "libelleSousMatiere": "",
      "isFirstOfSousMatiere": false,
      "nbElemProgSousMatiere": 0,
      "libelleElementProgramme": "Élaborer et prononcer une intervention orale continue de cinq à dix minutes (présentation d’une œuvre littéraire ou artistique, exposé des résultats d'une recherche, défense argumentée d’un point de vue)",
      "idElemProg": 1478,
      "valeur": "4",
      "afc": 1, //Attendu de fin de cycle
      "professeurs": [
        {
          "id": 131,
          "nom": "M. CHARLES M."
        }
      ]
    },
    {
      "cdt": false,
      "codeMatiere": "HI-GE",
      "libelleMatiere": "HISTOIRE-GEOGRAPHIE",
      "isFirstOfMatiere": false,
      "nbElemProgMatiere": 12,
      "codeSousMatiere": "",
      "libelleSousMatiere": "",
      "isFirstOfSousMatiere": false,
      "nbElemProgSousMatiere": 0,
      "libelleElementProgramme": "Écrire pour construire sa pensée et son savoir, pour argumenter et écrire pour communiquer et échanger",
      "idElemProg": 1528,
      "valeur": "3",
      "afc": 0,
      "professeurs": [
        {
          "id": 8,
          "nom": "Mme MAMAMAMA C."
        }
      ]
    }
  ]
}
```