---
sidebar_label: "📦 Envoi"
description: Envoi d'un message.
sidebar_position: 3
---

# 📦 Envoi de message

Pour envoyer un message, il faut un destinataire ! Récupérez-les ainsi :

```json title="POST /messagerie/contacts/{type de contact entre professeurs, personnels, entreprises}.awp?nom=&idClasse={id classe}&verbe=get&v=7.12.1"
data={} //Objet vide obligatoire
```
```json title="Réponse"
{
  "contacts": [ //Normalement, il ne peut pas y avoir professeurs+admin dans 1 requête mais bon...
    {
      "civilite": "Mme",
      "prenom": "Anna",
      "particule": "",
      "nom": "BURO",
      "sexe": "",
      "id": 28, //ID du personnel
      "idRegime": 0,
      "type": "A", //Ou P our professeur
      "matiere": "",
      "photo": "",
      "telephone": "",
      "email": "",
      "estBlackList": false,
      "badge": "",
      "messagerieActive": true,
      "isPP": false,
      "etablissements": [],
      "classe": {
        "id": 0,
        "code": "",
        "libelle": ""
      },
      "responsable": {
        "id": 0,
        "versQui": "",
        "typeResp": "",
        "contacts": []
      },
      "fonction": {
        "id": 14,
        "libelle": "Pion" //Nom de la fonction (admin only)
      }
    },
	{
      "civilite": "M.",
      "prenom": "Eric",
      "particule": "",
      "nom": "ZANNEUR",
      "sexe": "",
      "id": 233,
      "idRegime": 0,
      "type": "P",
      "matiere": "",
      "photo": "",
      "telephone": "",
      "email": "",
      "estBlackList": false,
      "badge": "",
      "messagerieActive": true,
      "isPP": false,
      "etablissements": [],
      "classes": [
        {
          "id": 17, //ID de la classe
          "code": "",
          "libelle": "TERMINALE 1", //Classe du prof
          "isPP": false, //Prof principal (boolean)
          "matiere": "MATHEMATIQUES" //Nom entier de la matière
        }
      ],
      "classe": {
        "id": 0,
        "code": "",
        "libelle": ""
      },
      "responsable": {
        "id": 0,
        "versQui": "",
        "typeResp": "",
        "contacts": []
      },
      "fonction": {
        "id": 0,
        "libelle": ""
      }
    }
  ]
}
```

Ensuite, vous pouvez envoyer le message :

```json title="POST /eleves/{identifiant}/messages.awp?verbe=post&v=7.12.1"
data={
    "message": {
        "subject": "Message important", //Objet (pas en B64 !)
        "content": "PHA+Qm9uam91ciBtYWRhbWUsIGVzc2F5ZXogPGEgaHJlZj0iaHR0cHM6Ly9ldm9kaXJlY3RlLnF6ei5pbyI+IGV2b0RpcmVjdGU8L2E+ICE8L3A+", //Contenu HTML en B64
        "groupesDestinataires": [
            {
                "destinataires": [
                    {
                        "civilite": "Mme",
                        "nom": "PICHON",
                        "prenom": "Korin",
                        "particule": "",
                        "type": "P", //pour prof, ou A pour admin
                        "id": 231,
                        "sexe": "",
                        "matiere": "ANGLAIS LV1", //JSP pour les admins
                        "classe": {
                            "id": 0,
                            "libelle": "",
                            "code": ""
                        },
                        "photo": "",
                        "badge": "",
                        "etablissements": [],
                        "responsable": {
                            "id": 0,
                            "typeResp": "",
                            "versQui": "",
                            "contacts": []
                        },
                        "fonction": {
                            "id": 0,
                            "libelle": ""
                        },
                        "isPP": false,
                        "classes": [
                            {
                                "id": 17,
                                "libelle": "CM2 A",
                                "code": "",
                                "isPP": false,
                                "matiere": "ANGLAIS LV1"
                            }
                        ],
                        "isSelected": true,
                        "uniqID": "231_P_0_0_anglais-lv1",
                        "idRegime": 0,
                        "to_cc_cci": "to"
                    }
                ],
                "selection": {
                    "type": "P"
                }
            }
        ],
        "transfertFiles": [],
        "files": [ //Objet vide si pas de fichiers à envoyer
            {
                "id": "0", //?
                "libelle": "fichier.pdf", //Nom du fichier
                "displayText": "fichier.pdf", //aussi nom du fichier
                "unc": "\\\\CLOUD09\\cloud\\{id de l'étab}\\E\\{identifiant de l'élève}\\fichier.pdf" //Chemin cloud du fichier (Cloud)
            }
        ],
        "date": "2026-03-20 14:52:11",
        "read": true,
        "from": {
            "role": "E",
            "id": 1234, //ID de l'élève
            "read": true
        },
        "brouillon": false
    },
    "anneeMessages": ""
}
```

La réponse contient le message "Votre message a bien été envoyé." et ce truc (sûrement l'ID du message) : `{"id":32953}`