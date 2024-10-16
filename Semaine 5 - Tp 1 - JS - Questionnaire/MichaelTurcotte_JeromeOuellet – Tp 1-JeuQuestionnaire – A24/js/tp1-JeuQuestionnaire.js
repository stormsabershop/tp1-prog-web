"use strict";

const utility = new Utility();
const tabQuestions = remplirTableauQuestions();
const NBMAXQUESTIONSQUIZ = 5;
let sectionQuiz = document;
let quizCourant;
let continuerBouton = utility.creerButton("Passer à la prochaine question", nouvelleQuestion);
const departBouton = utility.creerButton("Jouer", boutonDemarrer);
const verifierBouton = utility.creerButton("Vérifier réponse", boutonVerification);
const abandonnerBouton = utility.creerButton("Abandonner le questionnaire", boutonAbandonner);
const recommencerBouton = utility.creerButton("Rejouer", boutonRecommencer);
const terminerQuizBouton = utility.creerButton("C'est terminé, voir vos résultats", finDeQuiz);
let infoQuestion = document.createElement("p");
let msgDepart = document.createElement("p");
let legende = document.createElement("legend");
let strBonnesReponses = document.createElement("p");

let affichage = document;

let questionCourante;

/**
 * Crée un nouveau quiz et démarre le programme
 */
function boutonDemarrer() {
    quizCourant = new Quiz(tabQuestions, NBMAXQUESTIONSQUIZ);
    msgDepart.innerHTML = "";

    departBouton.removeEventListener('click', boutonDemarrer);
    departBouton.remove();

    nouvelleQuestion();
}

/**
 * Vérifier la réponse sélectionnée (s'il y en a une de sélectionnée)
 */
function boutonVerification() {
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.disabled = true;
        }) //Désactive tous les radios

        let selectedOptionLabel = selectedOption.parentNode;
        verifierBouton.remove();
        affichage.append(continuerBouton);

        let reponseUser = selectedOption.id;
        let bonneReponse = questionCourante.getBonneReponse();
        let resultSpan = document.createElement("span");

        if (reponseUser === bonneReponse) {
            selectedOptionLabel.classList.add("bonneReponse");
            quizCourant.addScore(questionCourante.getPoidsPoints());
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
        strBonnesReponses.innerText = "Bonnes réponses : " + quizCourant.getNbBonnesReponses() + "/" + quizCourant.getNbQuestions();
        sectionQuiz.append(resultSpan);
        affichage.insertBefore(continuerBouton, abandonnerBouton);

        quizCourant.incrementPosQuestion();
    } else {
        alert("Veuillez sélectionner une réponse ou bien abandonner le quiz!");
    }

    if (quizCourant.doesQuizEstTermine()) {
        continuerBouton.remove();
        abandonnerBouton.remove();
        affichage.append(terminerQuizBouton);
    }
}

/**
 * Crée une nouvelle question
 */
function nouvelleQuestion() {
    questionCourante = quizCourant.getQuestionsCourante();

    legende.innerText = "Questionnaire";
    infoQuestion.innerHTML = "Question " + (quizCourant.getIndexQuestionCourrante() + 1) + "/" + quizCourant.getNbQuestions();
    infoQuestion.innerHTML += " pour " + utility.rajoutMotPlurielApresNb("point", questionCourante.getPoidsPoints());

    let listeQuestions = document.createElement("div");
    listeQuestions.id = "questionCourante";
    listeQuestions.innerText = questionCourante.enonce;

    for (let i = 0; i < questionCourante.listeReponses.length; i++) {
        let label = document.createElement('label');
        let reponseQuestion = questionCourante.getReponse(i);

        let radio = document.createElement("input");
        radio.type = "radio";
        label.setAttribute('for', reponseQuestion);
        radio.id = reponseQuestion;
        radio.name = "quiz";
        label.append(radio);
        label.innerHTML += " " + reponseQuestion;
        listeQuestions.append(label);
    }
    strBonnesReponses.innerText = "Bonnes réponses : " + quizCourant.getNbBonnesReponses() + "/" + quizCourant.getNbQuestions();

    sectionQuiz.innerHTML = "";
    continuerBouton.remove();
    sectionQuiz.append(infoQuestion);
    sectionQuiz.append(listeQuestions);
    sectionQuiz.append(strBonnesReponses);
    affichage.append(verifierBouton);
    affichage.append(abandonnerBouton);

}

function boutonAbandonner() {
    verifierBouton.remove();
    abandonnerBouton.remove();
    continuerBouton.remove();

    finDeQuiz(true);
}

function boutonRecommencer() {
    recommencerBouton.remove()
    quizCourant.resetScore();
    sectionQuiz.innerHTML = "";
    boutonDemarrer();
}

function finDeQuiz(abandon) {
    sectionQuiz.innerHTML = "";
    legende.innerHTML = "Resultat";
    affichage.append(legende);
    terminerQuizBouton.remove();
    let noteSurCent = quizCourant.getScorePourcentage();

    sectionQuiz.innerText = "Vous avez eu " + utility.rajoutMotPlurielApresNb("point", quizCourant.getScore()) +
        " sur " + quizCourant.getTotalPoints() + ", ce qui vous fait une note de " + noteSurCent + "%. ";

    sectionQuiz.innerText += quizCourant.resultatsEchelons(abandon);
    affichage.append(recommencerBouton);
}


function remplirTableauQuestions() {
    let tableauQuestions = [];

    for (let i = 0; i < tabAssQuestions.length; i++) {
        let j = tabAssQuestions[i];
        let question = new Question(j.enonce, j.listeReponses, j.bonneReponse, j.points);

        tableauQuestions.push(question);
    }
    return tableauQuestions;
}

function main() {

    affichage = document.createElement("fieldset");
    affichage.id = "affichage";

    document.getElementById("zoneDeDonnees").append(affichage);
    affichage.append(legende);
    sectionQuiz = document.createElement("fieldset");
    affichage.append(sectionQuiz);


    legende.innerText = "Intro";
    legende.id = "legende";

    msgDepart.innerText = "Bonjour et bienvenue au quiz!!! veuillez cliquer sur Jouer pour commencer le quiz🙂🙂🙂" +
        " Vous allez devoir répondre à " + NBMAXQUESTIONSQUIZ + " questions qui vaudront tous pour un pointage différent. Vous aurez votre note finale à la fin du quiz";
    infoQuestion.id = "positionQuestion";

    sectionQuiz.append(msgDepart);
    sectionQuiz.append(departBouton);
}

main();