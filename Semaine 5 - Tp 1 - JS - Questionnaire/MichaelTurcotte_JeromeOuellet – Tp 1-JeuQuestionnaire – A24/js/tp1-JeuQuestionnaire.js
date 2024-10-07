"use strict";

const utility = new Utility(20);
const tabQuestions = remplirTableauQuestions();
let sectionQuiz = document;
let quizCourant;
const continuerBouton = utility.creerButton("Continuer", nouvelleQuestion);
const verifierBouton = utility.creerButton("Vérifier", boutonVerification);
const departBouton = utility.creerButton("Commencer", boutonDemarrer);
const abandonnerBouton = utility.creerButton("Abandonner", boutonAbandonner);
const recommencerBouton = utility.creerButton("Recommencer", boutonRecommencer);
let affPosQuestion = document.createElement("p");
let msgDepart = document.createElement("p");
let nbBonnesReponses = 0;


//TODO probleme de label qui a pas de "for"

function getNbBonnesReponses() {
    return document.createElement("span").innerText = "Bonnes Réponses : " + nbBonnesReponses + "/" + quizCourant.getNBMAXQUESTIONS();
}

function boutonDemarrer() {
   quizCourant = new Quiz(tabQuestions);

    msgDepart.innerHTML = "";


    departBouton.removeEventListener('click', boutonDemarrer);
    departBouton.remove();

    nouvelleQuestion();

    zoneDeDonnees.append(continuerBouton);
    //TODO rajouter les boutons continuer / abandonner / vérifier notre reponse

}

//TODO faire la verification des reponses
function boutonVerification() {
    verifierBouton.removeEventListener('click', boutonDemarrer);
    verifierBouton.remove();
    sectionQuiz.append(continuerBouton);

}

function nouvelleQuestion() {
    affPosQuestion.innerHTML = "Question " + (quizCourant.getIndexQuestionCourrante() + 1) + "/" + quizCourant.getNBMAXQUESTIONS();

    if (quizCourant.getNBMAXQUESTIONS() == quizCourant.getIndexQuestionCourrante()) {
        sectionQuiz = finDeQuiz();
    } else {

        let listeQuestions = document.createElement("div");
        listeQuestions.id = "questionCourante";
        let questionCourante = quizCourant.getQuestionsCourante();

        listeQuestions.innerText = questionCourante.enonce;

        for (let i = 0; i < questionCourante.listeReponses.length; i++) {
            let paragraphe = document.createElement('p');
            let label = document.createElement('label');

            let radio = document.createElement("input");
            radio.type = "radio";
            label.innerText = questionCourante.getReponse(i)
            radio.id = label.innerText;
            radio.name = "quiz";
            paragraphe.append(radio);
            paragraphe.append(label);
            listeQuestions.append(paragraphe);
        }
        quizCourant.incrementPosQuestion();
        sectionQuiz.innerHTML = "";
        sectionQuiz.append(affPosQuestion);
        sectionQuiz.append(listeQuestions);
        sectionQuiz.append(getNbBonnesReponses());

    }
}

function boutonAbandonner() {

}

function boutonRecommencer() {
    boutonDemarrer();
}

function finDeQuiz() {
    let contenant = document.createElement("div");
    continuerBouton.remove();
    continuerBouton.removeEventListener('click', nouvelleQuestion);
    contenant.innerText = "Fin du quiz!!!";
    contenant.append(recommencerBouton);

    return contenant;
}


function remplirTableauQuestions() {
    let tableauQuestions = [];

    for (let i = 1; i < tabAssQuestions.length; i++) {
        let j = tabAssQuestions[i];
        let question = new Question(j.enonce, j.listeReponses, j.indexBonneReponse);

        tableauQuestions.push(question);
    }
    return tableauQuestions;
}

//TODO toute mettre dans le fieldset
function main() {
    zoneDeDonnees.append(document.createElement("fieldset"));
    sectionQuiz = document.querySelector("#zoneDeDonnees > fieldset");

    msgDepart.innerText = "Bonjour et bienvenue au quiz!!! veuillez cliquer sur Commencer pour commencer le quiz🙂🙂🙂";
    affPosQuestion.id = "positionQuestion";

    sectionQuiz.append(msgDepart);
    sectionQuiz.append(departBouton);

}

main();