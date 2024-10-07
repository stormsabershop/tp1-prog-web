"use strict";
class Utility {
    constructor(_cool) {
        this.cool = _cool
    }

    /**
     * Crée un bouton de type "click"
     * @param texte qui va etre dans le bouton
     * @param functionAExec function qui va etre executé lorsqu'on clique sur le bouton
     * @returns {HTMLButtonElement} le bouton créé
     */
    creerButton(texte, functionAExec) {
        let button = document.createElement("button");
        button.innerHTML = texte;
        button.addEventListener('click', functionAExec);

        return button;
    }
}
