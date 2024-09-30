"use strict"

const sectionQuiz = document.getElementById("zoneDeDonnees");
const tabQuestions = remplirTableauQuestions();
const NBMAXQUESTIONSTAB = 15;


/**
 *
 * @param texte qui va etre dans le bouton
 * @param functionAExec function qui va etre executé lorsqu'on clique sur le bouton
 * @param id du bouton
 * @returns {HTMLButtonElement} le bouton créé
 */
function creerButton(texte, functionAExec, id) {
    let button = document.createElement("button");
    button.innerHTML = texte;
    button.addEventListener('click', functionAExec);
    button.id = id;
    return button;
}

function messageDepart() {
    return "Bonjour! Bienvenu au quiz!!!! Cliquez sur le bouton de départ pour commencer 🙂🙂🙂🙂<br><br>";
}

function demarrer() {
    let quiz = new Quiz(tabQuestions);

    for (let i = 0; i < quiz.listeQuestions.length; i++) {
        let listeRadio = quiz.creerListeQuestionRadio(quiz.listeQuestions[i]);
        for (let j = 0; j < listeRadio.length; j++) {
            sectionQuiz.append(listeRadio[i]);
        }
    }
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

function main() {

    sectionQuiz.innerHTML += messageDepart();
    sectionQuiz.append(creerButton("Commencer", demarrer, "departButton"));

}

main();