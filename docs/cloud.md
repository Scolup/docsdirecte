---
description: Cloud (éléchargement, téléversement...).
sidebar_position: 11
---

# ☁️ Cloud

Comme à peu près tout le reste de l'API, le cloud est un bazar.

### Obtenir les fichiers

```json title="POST /cloud/E/{identifiant}.awp?verbe=get&v=7.12.1"
data={
    "profondeur": 3 //Profondeur des dossiers
}
```

```json title="Réponse"
[
  {
    "type": "folder",
    "libelle": "/",
    "date": "2023-08-10 09:52:00", //Les secondes sont toujours à 0
    "taille": 135369204, //octets
    "quota": 2147483648, //?
    "id": "\\{id de l'étab}\\E\\{identifiant de l'élève}", //chemin
    "isLoaded": true, //?
    "readonly": false,
    "hidden": false,
    "isTrash": false,
    "children": [
      {
        "type": "folder",
        "libelle": "Pièces Jointes",
        "date": "2026-03-23 16:24:00",
        "taille": 258529,
        "id": "\\{id de l'étab}\\E\\{identifiant de l'élève}\\Pièces Jointes",
        "isLoaded": true,
        "readonly": false,
        "hidden": false,
        "isTrash": false,
        "children": [
          {
            "type": "file",
            "libelle": "fichier.pdf",
            "date": "2026-03-23 16:24:00",
            "taille": 258529,
            "id": "\\\\CLOUD09\\cloud\\{id de l'étab}\\E\\{identifiant de l'élève}\\Pièces Jointes\\fichier.pdf",
            "readonly": false,
            "hidden": false,
            "isTrash": false,
            "proprietaire": {
              "id": 1234,
              "type": "E",
              "nom": "PORET",
              "prenom": "Eva",
              "particule": ""
            }
          }
        ]
      },
      {
        "type": "file",
        "libelle": "Vidéo.mp4",
        "date": "2026-01-30 14:42:00",
        "taille": 114715833,
        "id": "\\\\CLOUD09\\cloud\\{id de l'étab}\\E\\{identifiant de l'élève}\\Vidéo.mp4",
        "readonly": false,
        "hidden": false,
        "isTrash": false,
        "proprietaire": {
          "id": 1234,
          "type": "E",
          "nom": "PORET",
          "prenom": "Eva",
          "particule": ""
        }
      },
      {
        "type": "folder",
        "libelle": "CORBEILLE",
        "date": "2026-03-02 09:21:00",
        "taille": 0,
        "id": "\\{id de l'étab}\\E\\{identifiant de l'élève}\\TRASH_#ED",
        "isLoaded": true,
        "readonly": false,
        "hidden": false,
        "isTrash": true,
        "children": []
      }
    ]
  }
]
```

## Nouveau dossier

```json title="POST /cloud/E/{identifiant}.awp?verbe=post&v=7.12.1"
data={
    "parentNode": {
        "id": "\\{id étab.}\\E\\{identifiant}", //Chemin où ajouter le dossier
        "type": "folder",
        "libelle": "/",
        "date": "2023-08-10 09:52:00", //Date de création du dossier parent
        "taille": 114715833,
        "displayText": "Eva",
        "isLoaded": true,
        "isTrash": false,
        "quota": 2147483648,
        "children": [],
        "readonly": false,
        "hidden": false
    },
    "libelle": "Test", //Nom du nouveau dossier
    "typeRessource": "folder"
}
```

```json title="Réponse"
{
  "type": "folder",
  "libelle": "Test",
  "date": "2026-03-26 20:24:00",
  "taille": 0,
  "id": "\\{id etab.}\\E\\{identifiant}\\Test",
  "isLoaded": false,
  "readonly": false,
  "hidden": false,
  "isTrash": false,
  "children": []
}
```

## Copier

```json title="POST /cloud/E/{identifiant}.awp?verbe=copy&v=7.12.1"
data={
    "parentNode": { //Le cloud de l'élève (et pas le dossier parent)
        "id": "\\{id étab.}\\E\\{identifiant}",
        "type": "folder",
        "libelle": "/",
        "date": "2023-08-10 09:52:00",
        "taille": 116877473,
        "displayText": "Eva",
        "isLoaded": true,
        "isTrash": false,
        "quota": 2147483648,
        "children": [],
        "readonly": false,
        "hidden": false
    },
    "clipboard": [
        {
            "id": "\\\\CLOUD09\\cloud\\{id étab.}\\E\\{identifiant}\\test.mp3", //Remplacer par le chemin du fichier à copier
            "type": "file", //Ou folder ?
            "libelle": "test.mp3",
            "date": "2026-03-27 21:15:00",
            "taille": 1827443,
            "displayText": "test.mp3",
            "isLoaded": true,
            "isTrash": false,
            "children": [],
            "proprietaire": {
                "nom": "PORET",
                "prenom": "Eva",
                "particule": "",
                "type": "E",
                "id": 1234
            },
            "readonly": false,
            "hidden": false
        }
    ]
}
```

La réponse n'est pas documentée puisque c'est la même que pour l'obtention des fichiers.

## Effacer

```json title="POST /cloud/E/{identifiant}/visibility.awp?verbe=delete&v=7.12.1"
data={
    "tabNodes": [ //Fichiers à retirer
        {
            "id": "\\{id de l'étab.}\\E\\{identifiant}\\Test", //chemin
            "type": "folder",
            "libelle": "Test",
            "date": "2026-03-07 14:54:00",
            "taille": 0, //0 toujours
            "displayText": "Test",
            "isLoaded": true,
            "isTrash": false,
            "children": [],
            "proprietaire": {
                "nom": "PORET",
                "prenom": "Eva",
                "particule": "",
                "type": "E",
                "id": 1234
            },
            "readonly": false,
            "hidden": false
        }
    ]
}
```

```json title="Réponse"
{
  "size": 135369744,
  "trashUpdated": {
        "type": "folder",
        "libelle": "Test",
        "date": "2026-03-26 08:02:00",
        "taille": 0,
        "id": "\\{id étab.}\\E\\{identifiant}\\TRASH_#ED\\Test",
        "isLoaded": true,
        "readonly": false,
        "hidden": false,
        "isTrash": true,
        "children": [
          {
            "type": "file",
            "libelle": "hihihi.mp3",
            "date": "2026-03-23 10:21:00",
            "taille": 258529,
            "id": "\\\\10.0.5.87\\CORBEILLE\\CLOUD09\\cloud\\{id étab.}\\E\\{identifiant}}\\Test\\hihihi.mp3",
            "readonly": false,
            "hidden": false,
            "isTrash": true,
            "proprietaire": {
              "id": 1234,
              "type": "E",
              "nom": "PORET",
              "prenom": "Eva",
              "particule": ""
            }
          }
        ],
      }
    ]
  }
}
```

## Restaurer

```json title="POST /cloud/E/{identifiant}/visibility.awp?verbe=post&v=7.12.1"
data={
    "tabNodes": [
        {
            "id": "\\\\10.0.5.87\\CORBEILLE\\CLOUD09\\cloud\\{id étab.}\\E\\{identifiant}\\Test\\hihihi.mp3",
            "type": "file",
            "libelle": "hihihi.mp3",
            "date": "2026-03-26 08:02:00",
            "taille": 114715833,
            "displayText": "hihihi.mp3",
            "isLoaded": true,
            "isTrash": true,
            "children": [],
            "proprietaire": {
                "nom": "PORET",
                "prenom": "Eva",
                "particule": "",
                "type": "E",
                "id": 1234
            },
            "readonly": false,
            "hidden": false
        }
    ]
}
```

```json title="Réponse"
{
  "size": 114715833,
  "nodesUpdated": [
    {
      "type": "folder",
      "libelle": "/",
      "date": "2023-08-10 09:52:00",
      "taille": 114715833,
      "quota": 2147483648,
      "id": "\\{id de l'étab.}\\E\\{identifiant}",
      "isLoaded": true,
      "readonly": false,
      "hidden": false,
      "isTrash": false,
      "children": [
        {
          "type": "file",
          "libelle": "Vidéo anglais.mp4",
          "date": "2026-03-26 08:14:00",
          "taille": 114715833,
          "id": "\\\\CLOUD09\\cloud\\{étab.}\\E\\{identifiant}\\hihihi.mp3",
          "readonly": false,
          "hidden": false,
          "isTrash": false,
          "proprietaire": {
            "id": 2852,
            "type": "E",
            "nom": "PORET",
            "prenom": "Eva",
            "particule": ""
          }
        }
      ]
    }
  ],
  "trashUpdated": {
    "type": "folder",
    "libelle": "CORBEILLE",
    "date": "2026-03-26 08:14:00",
    "taille": 20653744,
    "id": "\\{étab}\\E\\{identifiant}\\TRASH_#ED",
    "isLoaded": true,
    "readonly": false,
    "hidden": false,
    "isTrash": true,
    "children": [éléments de la corbeille...]
  }
}
```

## Exporter au Cloud

Enregistrer des pièces jointes dans le dossier Pièces jointes du cloud

### Agenda

```json title="POST /exportToCloud.awp?idFichier={id du fichier}&typeModule=CAHIER_DE_TEXTES&isArchive=false&isEternel=false&idVisiteStage=&verbe=post&v=7.12.1"
data={}
```

```json title="Réponse"
{
  "type": "file",
  "libelle": "VE1 2024.pdf",
  "date": "2026-03-26 17:36:00",
  "taille": 885008,
  "id": "\\\\CLOUD09\\cloud\\{id étab.}\\E\\{identifiant}\\Pièces Jointes\\VE1 2024.pdf",
  "readonly": false,
  "hidden": false,
  "isTrash": false,
  "proprietaire": {
    "id": 1234,
    "type": "E",
    "nom": "PORET",
    "prenom": "Eva",
    "particule": ""
  }
}
```

### Messages

```json title="POST /exportToCloud.awp?idFichier=9349&typeModule=MESSAGERIE&isArchive=false&isEternel=false&idVisiteStage=&verbe=post&v=7.12.1"
data={}
```

La réponse est la même que pour l'agenda.

## Téléverser

`POST /televersement.awp?verbe=post&mode=CLOUD&dest=\{id de l'étab}\E\{identifiant} (remplacer dest par le chemin destination)`

Envoyer le fichier au format multipart/form-data.

## Télécharger

:::warning
Cette requête, pour une raison inconnue, est assez différente des autres. Une des différences majeures: on envoie le token dans un paramètre application/x-www-form-urlencoded.
Ne mettez pas d'header X-Token ici.
:::

### Cloud

```json title="POST /telechargement.awp?verbe=get"
leTypeDeFichier=CLOUD
fichierId=\\CLOUD09\cloud\{id étab.}\E\{identifiant}\test.mp3 //Chemin du fichier
tabFichiersIds= //Vide ?
token={token} //Token de session
data={"idEntity":{identifiant},"typeEntity":"E"}
```

### Agenda

```json title="POST /telechargement.awp?verbe=get"
leTypeDeFichier=FICHIER_CDT
fichierId=8651 //ID du fichier trouvé dans devoir individuel
tabFichiersIds= //Vide ?
token={token}
```

### Message

```json title="POST /telechargement.awp?verbe=get"
leTypeDeFichier=PIECE_JOINTE
fichierId=9349 //ID du fichier trouvé dans la liste des documents
tabFichiersIds= //Vide ?
token={token}
anneeMessages=2025-2026 //Année scolaire du message
```

### Document

```json title="POST /telechargement.awp?verbe=get"
leTypeDeFichier= //Vide...
fichierId=1234 //ID du fichier trouvé dans la liste des documents
tabFichiersIds= //Vide ?
token={token}
archive=false
anneeArchive=
```

