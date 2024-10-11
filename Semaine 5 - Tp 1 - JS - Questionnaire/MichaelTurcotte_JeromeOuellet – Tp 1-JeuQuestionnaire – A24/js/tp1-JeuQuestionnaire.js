"use strict";

const utility = new Utility();
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
let affichage = document;

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
}

function boutonVerification() {
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    let selectedOptionLabel = selectedOption.parentNode.querySelector("label");


    if (selectedOption) {
        verifierBouton.remove();
        affichage.append(continuerBouton);

        let reponseUser = selectedOption.id;
        let bonneReponse = questionCourante.getBonneReponse();
        let resultSpan = document.createElement("span");

        if (reponseUser === bonneReponse) {
            selectedOptionLabel.classList.add("bonneReponse");
            nbBonnesReponses++;
        } else {
            selectedOption.style.color = "Red";
            selectedOptionLabel.classList.add("mauvaiseReponse");

            const listLabels = sectionQuiz.querySelectorAll("label");
            listLabels.forEach(label => {
                if (label.innerText === questionCourante.getBonneReponse()) {
                    label.classList.add("bonneReponse");
                }
            })

        }
        sectionQuiz.append(resultSpan);
        sectionQuiz.append(continuerBouton);

        quizCourant.incrementPosQuestion();
    } else {
        alert("Veuillez sélectionner une réponse !");
    }

}

function nouvelleQuestion() {
    if (!(quizCourant.getNBMAXQUESTIONS()  === quizCourant.getIndexQuestionCourrante())) {

        let derniereQuestion = false;
        affPosQuestion.innerHTML = "Question " + (quizCourant.getIndexQuestionCourrante() + 1) + "/" + quizCourant.getNBMAXQUESTIONS();

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
        //TODO Modifier le texte du bouton continuer si c'est la derniere question
        //TODO Enlever le bouton d'abandon si c'est la derniere question
        if (!(quizCourant.getNBMAXQUESTIONS() - 1 === quizCourant.getIndexQuestionCourrante() + 1)) {
            affichage.append(abandonnerBouton);
        }
    } else {
        finDeQuiz();
    }

}

function boutonAbandonner() {
    finDeQuiz(true);
}

function boutonRecommencer() {
    nbBonnesReponses = 0;
    sectionQuiz.innerHTML = "";
    boutonDemarrer();
}

//TODO Faire le truc d'echelons selon le pourcentage de reussite
function finDeQuiz(abandon) {
    sectionQuiz.innerHTML = "";
    abandonnerBouton.remove();

    sectionQuiz.innerText = getNbBonnesReponses();

    if (abandon) {
        sectionQuiz.innerText += ", C'est dommage d'avoir abandonné..."
    }

    recommencerBouton.addEventListener('click', boutonRecommencer);
    sectionQuiz.append(recommencerBouton);
}


function remplirTableauQuestions() {
    let tableauQuestions = [];

    for (let i = 1; i < tabAssQuestions.length; i++) {
        let j = tabAssQuestions[i];
        let question = new Question(j.enonce, j.listeReponses, j.bonneReponse);

        tableauQuestions.push(question);
    }
    return tableauQuestions;
}

function main() {
    affichage = document.createElement("div");
    document.getElementById("zoneDeDonnees").append(affichage);
    sectionQuiz = document.createElement("fieldset");
    affichage.append(sectionQuiz);

    msgDepart.innerText = "Bonjour et bienvenue au quiz!!! veuillez cliquer sur Commencer pour commencer le quiz🙂🙂🙂";
    affPosQuestion.id = "positionQuestion";

    sectionQuiz.append(msgDepart);
    sectionQuiz.append(departBouton);
}

main();