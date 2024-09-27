"use strict"

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
    let contenu = "<p>Bonjour! Bienvenu au quiz!!!! Cliquez sur le bouton de départ pour commencer 🙂🙂🙂🙂🎇🌲</p>";
    return contenu;
}

function boutonDepart() {
    alert("prout");
}


function main() {
    let quiz = document.getElementById("zoneDeDonnees");
    let tabQuestion = tabAssQuestions;

    quiz.innerHTML += messageDepart();
    quiz.append(creerButton("Commencer", boutonDepart, "departButton"));
    quiz.innerHTML += tabQuestion;
}


main();