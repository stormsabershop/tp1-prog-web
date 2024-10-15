"use strict";

//IMPORTANT : Pour la syntaxe JSON voir ce lien : https://www.json.org/json-fr.html

//Mettre vos questions au format JSON ici. Un seul objet principal pour toutes les questions

//Faites quelque chose de simple comme on a vu ensemble.
let tabAssQuestions = [

    {
        "enonce": "Quel mot-clé est utilisé pour déclarer une variable en JavaScript?",
        "listeReponses": ["const", "var", "let", "* toutes les réponses"],
        "bonneReponse": "* toutes les réponses",
        "points": 1
    },
    {
        "enonce": "Comment convertir une chaîne en nombre entier en JavaScript?",
        "listeReponses": ["* parseInt()", "Number()", "toString()", "parseFloat()"],
        "bonneReponse": "* parseInt()",
        "points": 3
    },
    {
        "enonce": "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau?",
        "listeReponses": ["* push()", "pop()", "shift()", "unshift()"],
        "bonneReponse": "* push()",
        "points": 3
    },
    {
        "enonce": "Que retourne 'null == undefined' en JavaScript?",
        "listeReponses": ["* true", "false", "undefined", "null"],
        "bonneReponse": "* true",
        "points": 4
    },

    {
        "enonce": "Quel est le résultat de l'expression: '2' + 2 en JavaScript?",
        "listeReponses": ["* 22", "4", "NaN", "undefined"],
        "bonneReponse": "* 22",
        "points": 3
    },
    {
        "enonce": "Quelle fonction est utilisée pour retarder l'exécution d'une fonction en JavaScript?",
        "listeReponses": ["* setTimeout()", "setInterval()", "clearTimeout()", "delay()"],
        "bonneReponse": "* setTimeout()",
        "points": 3
    },
    {
        "enonce": "Comment déclarer une fonction en JavaScript?",
        "listeReponses": ["function = myFunction()", "* function myFunction()", "let myFunction()", "const myFunction()"],
        "bonneReponse": "* function myFunction()",
        "points": 2
    },
    {
        "enonce": "Quel est le résultat de: typeof [] en JavaScript?",
        "listeReponses": ["int", "array", "* object", "undefined"],
        "bonneReponse": "* object",
        "points": 4
    },
    {
        "enonce": "Quelle est la sortie de: console.log(1 == '1')?",
        "listeReponses": ["null", "* true", "false", "undefined"],
        "bonneReponse": "* true",
        "points": 1
    },
    {
        "enonce": "Comment créer un objet en JavaScript?",
        "listeReponses": ["let obj = ()", "let obj = createObject", "* let obj = {}", "let obj = []"],
        "bonneReponse": "* let obj = {}",
        "points": 3
    },
    {
        "enonce": "Comment vérifier si une variable 'x' est 'undefined'?",
        "listeReponses": ["if(x == null)", "if(x === false)", "if(x === null)", "* if(typeof x === 'undefined')"],
        "bonneReponse": "* if(typeof x === 'undefined')",
        "points": 3
    },
    {
        "enonce": "Comment pouvez-vous obtenir la longueur d'une chaîne en JavaScript?",
        "listeReponses": ["string.size", "string.count", "* string.length", "string.len"],
        "bonneReponse": "* string.length",
        "points": 1
    },
    {
        "enonce": "Quelle méthode est utilisée pour joindre tous les éléments d'un tableau en une chaîne?",
        "listeReponses": ["concat()", "* join()", "slice()", "push()"],
        "bonneReponse": "* join()",
        "points": 4
    },
    {
        "enonce": "Comment arrondir un nombre à l'entier le plus proche en JavaScript?",
        "listeReponses": ["Math.ceil()", "Math.floor()", "* Math.round()", "Math.trunc()"],
        "bonneReponse": "* Math.round()",
        "points": 3
    },
    {
        "enonce": "Quelle méthode permet de transformer un tableau en une chaîne de caractères?",
        "listeReponses": ["join()", "* toString()", "slice()", "map()"],
        "bonneReponse": "* toString()",
        "points": 4
    }
];