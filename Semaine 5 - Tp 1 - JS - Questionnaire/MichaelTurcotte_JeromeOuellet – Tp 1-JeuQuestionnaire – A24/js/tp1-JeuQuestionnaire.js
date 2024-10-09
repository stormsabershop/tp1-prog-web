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

let questionCourante;



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

    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    alert(selectedOption.id);
    if(selectedOption){
        let reponseUser = selectedOption.id;
        //let questionActuelle = quizCourant.getQuestionsCourante();
        let questionActuelle = questionCourante;
        let bonneReponse = questionActuelle.getReponse(questionActuelle.indexBonneReponse);
        alert(bonneReponse);

        let resultSpan = document.createElement("span");
        if (reponseUser === bonneReponse){
            bonneReponse++;
            resultSpan.innerText = "Bonne Réponse !";
        } else{
            resultSpan.innerText = "Mauvaise Réponse !";
        }
        sectionQuiz.append(resultSpan);
        sectionQuiz.append(continuerBouton);

        quizCourant.incrementPosQuestion();
    } else{
        alert("Veuillez sélectionner une réponse !");
    }



}

function nouvelleQuestion() {
    affPosQuestion.innerHTML = "Question " + (quizCourant.getIndexQuestionCourrante() + 1) + "/" + quizCourant.getNBMAXQUESTIONS();

    if (quizCourant.getNBMAXQUESTIONS() == quizCourant.getIndexQuestionCourrante()) {
        /*sectionQuiz = finDeQuiz();*/
        sectionQuiz.innerHTML = "";
        sectionQuiz.append(finDeQuiz());
    } else {

        let listeQuestions = document.createElement("div");
        listeQuestions.id = "questionCourante";
        questionCourante = quizCourant.getQuestionsCourante();

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

        sectionQuiz.innerHTML = "";
        sectionQuiz.append(affPosQuestion);
        sectionQuiz.append(listeQuestions);
        sectionQuiz.append(getNbBonnesReponses());
        sectionQuiz.append(verifierBouton);
        //quizCourant.incrementPosQuestion();
    }
}

function boutonAbandonner() {

}

function boutonRecommencer() {
    nbBonnesReponses = 0;
    sectionQuiz.innerHTML = "";
    boutonDemarrer();
}

function finDeQuiz() {
    let contenant = document.createElement("div");
    continuerBouton.remove();
    continuerBouton.removeEventListener('click', nouvelleQuestion);
    contenant.innerText = "Fin du quiz!!!";

    recommencerBouton.addEventListener('click', boutonRecommencer);
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