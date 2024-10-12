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
const recommencerBouton = utility.creerButton("Recommencer", boutonRecommencer);
let infoQuestion = document.createElement("p");
let msgDepart = document.createElement("p");
let legende = document.createElement("legend");
let strBonnesReponses = document.createElement("p");

let affichage = document;

let questionCourante;

function boutonDemarrer() {
    quizCourant = new Quiz(tabQuestions, NBMAXQUESTIONSQUIZ);
    msgDepart.innerHTML = "";

    departBouton.removeEventListener('click', boutonDemarrer);
    departBouton.remove();

    nouvelleQuestion();
}

function boutonVerification() {
    let selectedOption = document.querySelector('input[name="quiz"]:checked');


    if (selectedOption) {
        let selectedOptionLabel = selectedOption.parentNode.querySelector("label");
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
        sectionQuiz.append(continuerBouton);

        quizCourant.incrementPosQuestion();
    } else {
        alert("Veuillez sélectionner une réponse ou bien abandonner le quiz!");
    }

}

function nouvelleQuestion() {
    if (!(quizCourant.getNbQuestions() === quizCourant.getIndexQuestionCourrante())) {
        questionCourante = quizCourant.getQuestionsCourante();

        legende.innerText = "Questionnaire";
        infoQuestion.innerHTML = "Question " + (quizCourant.getIndexQuestionCourrante() + 1) + "/" + quizCourant.getNbQuestions();
        infoQuestion.innerHTML += " Pour " + utility.rajoutMotPlurielApresNb("point", questionCourante.getPoidsPoints());

        let listeQuestions = document.createElement("div");
        listeQuestions.id = "questionCourante";
        listeQuestions.innerText = questionCourante.enonce;
//TODO Faire en sorte que les Radios soit greyed out quand on fait la verification
//TODO Faire pour qu'on puisse cliquer sur le texte du Label pour selectionner une Radio

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
        strBonnesReponses.innerText = "Bonnes réponses : " + quizCourant.getNbBonnesReponses() + "/" + quizCourant.getNbQuestions();

        sectionQuiz.innerHTML = "";
        sectionQuiz.append(infoQuestion);
        sectionQuiz.append(listeQuestions);
        sectionQuiz.append(strBonnesReponses);
        sectionQuiz.append(verifierBouton);

        //TODO Enlever le bouton d'abandon si c'est la derniere question
        //TODO Placer le bouton a coté de verifier reponse (c'est pck yer dans affichage fak yer en bas mais si yer dans sectionQuiz ca le met avant verifier pis ca gosse en tabarouette
        if (!(quizCourant.getNbQuestions() === quizCourant.getIndexQuestionCourrante() + 1)) {
            affichage.append(abandonnerBouton);
        } else {
            continuerBouton.innerText = "C'est terminé, voir vos résultats"
            abandonnerBouton.remove();

        }
    } else {

        legende.innerHTML = "resultat";
        affichage.append(legende);
        finDeQuiz();
    }

}

function boutonAbandonner() {
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
    abandonnerBouton.remove();
    let noteSurCent = Math.round(quizCourant.getScore() / quizCourant.getTotalPoints() * 100);

    sectionQuiz.innerText = "Vous avez eu " + utility.rajoutMotPlurielApresNb("point", quizCourant.getScore()) +
        " sur " + quizCourant.getTotalPoints() + ", ce qui vous fait une note de " + noteSurCent + "%. ";

    if (noteSurCent === 100) {
        sectionQuiz.innerText += "Excellent, vous avez eu la note parfaite"
    } else if (noteSurCent >= 80) {
        sectionQuiz.innerText += "C'est bien, vous avez une très bonne note"
    } else if (noteSurCent >= 60) {
        sectionQuiz.innerText += "C'est bien, vous avez la note de passage, avec un peu d'effort vous allez être très bon!"
    } else {
        sectionQuiz.innerText += "Désolé vous n'avez pas eu la note de passage, faites un peu plus d'effort !"
    }
    if (abandon) {
        sectionQuiz.innerText += ", C'est dommage d'avoir abandonné..."
    }

    recommencerBouton.addEventListener('click', boutonRecommencer);
    affichage.append(recommencerBouton);
}


function remplirTableauQuestions() {
    let tableauQuestions = [];

    for (let i = 1; i < tabAssQuestions.length; i++) {
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

    msgDepart.innerText = "Bonjour et bienvenue au quiz!!! veuillez cliquer sur Jouer pour commencer le quiz🙂🙂🙂";
    infoQuestion.id = "positionQuestion";

    sectionQuiz.append(msgDepart);
    sectionQuiz.append(departBouton);
}

main();