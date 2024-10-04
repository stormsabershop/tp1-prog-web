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

function boutonDemarrer() {
    departButton.removeEventListener('click', boutonDemarrer);

    let quiz = new Quiz(tabQuestions);
    sectionQuiz.innerText += quiz.listeQuestions[0].enonce;
    sectionQuiz.append(quiz.creerListeQuestion(quiz.listeQuestions[0]));
    sectionQuiz.append(creerButton("Vérifier", boutonVerification, "verifierBouton"));
    //TODO rajouter les boutons continuer / abandonner / vérifier notre reponse

}
function boutonVerification() {

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
    sectionQuiz.append(creerButton("Commencer", boutonDemarrer, "departButton"));
}

main();