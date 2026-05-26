---
description: Absences et retards de l'élève.
sidebar_position: 9
---

# 🪑 Absences et retards

Liste des absences et retards de l'élève.

```json title="POST /eleves/{identifiant}/viescolaire.awp?verbe=get&v=7.12.1"
data={} //Objet vide obligatoire
```

```json title="Réponse"
{
  "absencesRetards": [
    {
      "id": 3367, //ID de l'absence
      "idEleve": 1234, //ID de l'élève
      "nomEleve": "",
      "typeElement": "Absence",
      "date": "2025-11-04", //Date au format AAAA-MM-JJ
      "displayDate": "le mardi 04 novembre 2025 de 16:30 à 17:30", //Date et heure au format écrit
      "libelle": "2 cours", //Ou 1 demi-journée...
      "motif": "Consultation médicale", //Motif
      "justifie": true, //Justifié ou pas
      "par": "",
      "pointsPermis": 0,
      "commentaire": "Rendez-vous médical urgent", //Commentaire sur l'absence
      "typeJustification": "",
      "justifieEd": false, //Justifié via EcoleDirecte
      "dontNeedJustifiePrim": false,
      "aFaire": "",
      "dateDeroulement": "",
      "matiere": "",
      "presence": false,
      "jour": 0
    },
    {
      "id": 2876,
      "idEleve": 1234,
      "nomEleve": "",
      "typeElement": "Retard",
      "date": "2025-10-13",
      "displayDate": "le lundi 13 octobre 2025 de 09:00 à 09:55",
      "libelle": "00:55",
      "motif": "Panne de reveil ",
      "justifie": true,
      "par": "",
      "pointsPermis": 0,
      "commentaire": "Panne de réveil",
      "typeJustification": "Justifiée sur Internet",
      "justifieEd": true,
      "dontNeedJustifiePrim": false,
      "aFaire": "",
      "dateDeroulement": "",
      "matiere": "",
      "presence": false,
      "jour": 0
    }
  ],
  "dispenses": [],
  "sanctionsEncouragements": [],
  "permisPoint": { //Ne s'affiche pas dans ED
    "idPermis": 0,
    "libellePermis": "",
    "dateDebut": "",
    "dateFin": "",
    "totalPoints": 0,
    "evenements": []
  },
  "parametrage": { //Ces paramètres ne semblent rien faire
    "justificationEnLigne": true,
    "absenceCommentaire": true,
    "retardCommentaire": true,
    "sanctionsVisible": true,
    "sanctionParQui": true,
    "sanctionCommentaire": true,
    "encouragementsVisible": true,
    "encouragementParQui": true,
    "encouragementCommentaire": true,
    "afficherPermisPoint": true
  }
}
```
