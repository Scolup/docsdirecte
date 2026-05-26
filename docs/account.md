---
description: Objet accounts.
sidebar_position: 11
---

# 👤 Infos de l'utilisateur

Ceci est l'objet `accounts` obtenu auprès du `token` au login. Il contient infos d l'utilisateurs, notifications, infos de l'établissement et fonctionnalités activées.

:::warning
L'objet `accounts` se trouve dans `{data}` mais `token` est directement dans la réponse.
:::

```json title="Objet accounts obtenu après login"
{
  "changementMDP": false,
  "nbJourMdpExire": 0,
  "accounts": [
    {
      "idLogin": 1234567, //ID qui semble unique et vu uniquement dans les settings (plus bas)
      "id": 1234, //ID de l'élève, mentionné sous {identifiant} plus tard dans la doc
      "uid": "aa324ec860b84970b4f8c44b7769c2cd",
      "identifiant": "adouche-adouche", //L'identifiant de connexion
      "typeCompte": "E", //E, P (prof), A (admin) ou F (famille) j'imagine
      "codeOgec": "0123456A", //OGEC de l'établissement (étab. catholiques)
      "main": true,
      "lastConnexion": "2026-03-24 18:22", //Dernière connexion
      "civilite": "", //A trouver plus loin
      "prenom": "Joe", //Prénom
      "particule": "",
      "nom": "DESPONTS", //Nom de famille
      "email": "evo@directe.qzz.io", //E-mail renseigné par l'élève
      "isPrimaire": false,
      "nomEtablissement": "EcoleDirecte", //LOL
      "logoEtablissement": "",
      "couleurAgendaEtablissement": "#80cc33", //Couleur de l'agenda général
      "dicoEnLigneLeRobert": true, //Afficher ou pas un lien vers le dictionnaire en ligne le robert
      "socketToken": "",
      "modules": [ //Fonctionnalités activées et désactivées et leurs paramètres
        {
          "code": "CANTINE_BARCODE",
          "enable": false, //Activé ou pas
          "ordre": 1, //?
          "badge": 0, //Nombre de notifs
          "params": {} //Paramètres
        },
        {
          "code": "VIE_SCOLAIRE",
          "enable": true,
          "ordre": 10,
          "badge": 0,
          "params": {}
        },
        {
          "code": "VIE_DE_LA_CLASSE",
          "enable": true,
          "ordre": 20,
          "badge": 0,
          "params": {}
        },
        {
          "code": "JOURNAL_DE_CLASSE",
          "enable": false,
          "ordre": 22,
          "badge": 0,
          "params": {}
        },
        {
          "code": "NOTES",
          "enable": true,
          "ordre": 30,
          "badge": 0,
          "params": {}
        },
        {
          "code": "CLOUD",
          "enable": true,
          "ordre": 90,
          "badge": 0,
          "params": {
            "nbBadgePostits": "0",
            "isActifPostitsEspacesTravail": "0",
            "nbBadgeAgendaEvenements": "0",
            "isActifAgendaEvenementsEspacesTravail": "0",
            "padsActif": "0",
            "visiosActif": "0",
            "collaboraActif": "1",
            "collaboraEdit": "1",
            "collaboraFormat": "openXML",
            "collaboraFormatChoixLibre": "0",
            "streamingActif": "0"
          }
        },
        {
          "code": "MESSAGERIE",
          "enable": true,
          "ordre": 40,
          "badge": 3, //3 notifications
          "params": {
            "isActif": "1",
            "canParentsLireMessagesEnfants": "1", //🥲
            "destAdmin": "1", //Peut envoyer à...
            "destEleve": "0",
            "destFamille": "0",
            "destProf": "1",
            "destEspTravail": "0",
            "destEntreprise": "1",
            "disabledNotification": "0",
            "notificationEmailEtablissement": "1",
            "choixMailNotification": "0",
            "autreMailNotification": "",
            "mailPro": "",
            "mailPerso": "",
            "messagerieApiVersion": "v3",
            "blackListProfActive": "0",
            "estEnBlackList": "0",
            "afficherToutesLesClasses": "0"
          }
        },
        {
          "code": "EDT",
          "enable": true,
          "ordre": 50,
          "badge": 0,
          "params": {
            "displayTrous": "0" //Montrer week-ends ?
          }
        },
        {
          "code": "DOCUMENTS_ELEVE",
          "enable": true,
          "ordre": 77,
          "badge": 0,
          "params": {
            "DocumentsNotesActif": "1",
            "DocumentsVSActif": "1", //Docs vie scolaire
            "DocumentsAdministratifActif": "1",
            "DocumentsEntrepriseActif": "1",
            "AnneeArchive": "2020-2021,2021-2022,2022-2023,2023-2024,2024-2025" //Années sélectibles
          }
        },
        {
          "code": "CAHIER_DE_TEXTES",
          "enable": true,
          "ordre": 60,
          "badge": 0,
          "params": {
            "compteRenduSeance": "1", //Contenu de séance
            "compteRenduSeancePrevisionnel": "0",
            "isCDTPrimaire": "0"
          }
        },
        {
          "code": "MANUELS_SCOLAIRES",
          "enable": true,
          "ordre": 62,
          "badge": 0,
          "params": {}
        },
        {
          "code": "QCM",
          "enable": true,
          "ordre": 65,
          "badge": 0,
          "params": {}
        },
        {
          "code": "EDFORMS",
          "enable": true,
          "ordre": 70,
          "badge": 0,
          "params": {}
        },
        {
          "code": "RESERVATIONS",
          "enable": false,
          "ordre": 80,
          "badge": 0,
          "params": {
            "regime": "Demi pensionnaire 4 jours", //Régime
            "repasmidi_1": "1", //Repas midi lundi
            "repassoir_1": "0", //Repas soir lundi
            "repasmidi_2": "1", //Repas midi mardi
            "repassoir_2": "0", //Repas soir mardi
            "repasmidi_3": "0", //Repas midi mercredi
            "repassoir_3": "0", //Repas soir mercredi
            "repasmidi_4": "1", //Repas midi jeudi
            "repassoir_4": "0", //Repas soir jeudi
            "repasmidi_5": "1", //Repas midi vendredi
            "repassoir_5": "0", //Repas soir vendredi
            "repasmidi_6": "0", //Repas midi samedi
            "repassoir_6": "0", //Repas soir samedi
            "repasmidi_7": "0", //Repas midi dimanche
            "repassoir_7": "0" //Repas soir dimanche
          }
        },
        {
          "code": "COMMANDE_PASSAGE",
          "enable": false,
          "ordre": 81,
          "badge": 0,
          "params": {
            "affichageMenuSeul": "1"
          }
        },
        {
          "code": "CARNET_CORRESPONDANCE",
          "enable": false,
          "ordre": 70,
          "badge": 0,
          "params": {}
        },
        {
          "code": "SUIVI_STAGE",
          "enable": false,
          "ordre": 75,
          "badge": 0,
          "params": {}
        },
        {
          "code": "LIVRET_APPRENTISSAGE",
          "enable": false,
          "ordre": 76,
          "badge": 0,
          "params": {}
        },
        {
          "code": "EMARGEMENT_CFA",
          "enable": false,
          "ordre": 77,
          "badge": 0,
          "params": {}
        },
        {
          "code": "SITUATION_FINANCIERE",
          "enable": false,
          "ordre": 92,
          "badge": 0,
          "params": {}
        },
        {
          "code": "RDVPP",
          "enable": false,
          "ordre": 90,
          "badge": 0,
          "params": {}
        },
        {
          "code": "HUB",
          "enable": true,
          "ordre": 95,
          "badge": 0,
          "params": {}
        }
      ],
      "parametresIndividuels": {
        "lsuPoilDansLaMainBorne1": "", //LSU
        "lsuPoilDansLaMainBorne2": "",
        "lsuPoilDansLaMainBorne3": "",
        "modeCalculLSU": "",
        "isQrcode": true, //je suis un qr code
        "accessibiliteVisuelle": false, //Si le paramètre d'accessibilité a été activé dans les paramètres
        "zoomPage": false,
        "checkAuthentificationSecure": true,
        "typeSaisieNotesDefaut": "",
        "nbJoursMaxRenduDevoirCDT": "",
        "typeViewCDTDefaut": "",
        "blocPMAccueil": false,
        "blocActuAccueil": false,
        "is2FATOTPActivable": false,
        "is2FATOTPActif": false,
        "conversionVideosAutoCDT": false
      },
      "profile": {
        "sexe": "M", //Ou F j'imagine
        "infoEDT": "",
        "nomEtablissement": "EcoleDirecte", //Comme vous pouvez le voir cette donnée n'est pas de confiance
        "idEtablissement": "2", //?
        "rneEtablissement": "0123456A", //Code RNE, semble pareil que l'OGEC pour les étab. catholiques
        "telPortable": "",
        "idReelEtab": "2", //??
        "photo": "//doc1.ecoledirecte.com/PhotoEleves/LIEN/PHOTO.jpg", //Ajouter https:
        "estApprenant": false,
        "classe": {
          "id": 17, //ID de la classe
          "code": "T1", //Code court de la classe
          "libelle": "TERMINALE 1", //Nom de la classe
          "estNote": 1
        }
      }
    }
  ]
}
```

# Paramètres

## Obtenir paramètres

```json title="POST /logins/{idLogin}.awp?verbe=get&v=7.12.1"
data={}
```

```json title="Réponse"
{
  "id": 1234567, //idLogin
  "identifiant": "adouche-adouche", //Identifiant de connexion
  "email": "evo@directe.qzz.io", //Adresse mail
  "portable": "+33612345678", //N° de téléphone
  "autreQuestionSecrete": "", //?
  "questionSecrete": "Quel est le nom de la première école où vous êtes allé ?", //Question secrète de backup
  "reponse": "hehehehehehehe", //Réponse à cette question
  "niveauMDPAutorise": 2, //?
  "accessToken": "", //?
  "questionsPossibles": [ //Liste de toutes les questions secrètes possibles
    "Quel est le nom de naissance de votre mère  ?",
    "Quel est le nom de votre professeur préféré ?",
    "Quel est le titre du livre qui vous a le plus marqué ?",
    "Quel est le titre du film qui vous a le plus marqué ?",
    "Quelle est la marque de votre première voiture ?",
    "Quel est le nom de la première école où vous êtes allé ?",
    "Autre"
  ]
}
```

## Paramètre d'accessibilité

`accessibiliteVisuelle` dans l'objet accounts.

```json title="POST /parametreIndividuel.awp?verbe=put&v=7.12.1"
data={
    "path": "Préférences/Elèves/accessibiliteVisuelle/{identifiant}",
    "value": "1" //0 pour désactiver
}
```

## Modifier paramètres

```json title="POST /logins/{idLogin}.awp?verbe=put&v=7.12.1"
data={
    "identifiant": "adouche-adouche-adouche", //Nouvel identifiant (ou actuel si inchangé)
    "nouveauMotDePasse": "MO2PAC", //Nouveau mdp (ou actuel si inchangé)
    "confirmationMotDePasse": "MO2PAC", //(encore) nouveau mdp (ou actuel si inchangé)
    "email": "docs@directe.qzz.io", //Nouvel e-mail (ou actuel si inchangé)
    "portable": "%2B33612345678", //Nouveau num de téléphone (avec le + encodé) (ou actuel si inchangé)
    "questionSecrete": "Quel est le nom de la première école où vous êtes allé ?", //Nouvelle question (ou actuel si inchangé)
    "reponse": "Flora Tristan", Nouvelle réponse (ou actuel si inchangé)
    "uuid": "" //?
}
```

La réponse est le même effet que si vous faisiez obtenir réglages.