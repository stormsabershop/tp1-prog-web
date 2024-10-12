"use strict";
class Utility {
    constructor(_cool) {
        this._cool = _cool;
        this._textLabel = "";
    }

    /**
     * Crée un bouton de type "click"
     * @param texte qui va etre dans le bouton
     * @param functionAExec function qui va etre executé lorsqu'on clique sur le bouton
     * @returns {HTMLButtonElement} le bouton créé
     */
    creerButton(texte, functionAExec) {
        let button = document.createElement("button");
        this._textLabel = texte;
        button.innerHTML = this._textLabel;
        button.addEventListener('click', functionAExec);

        return button;
    }

    rajoutMotPlurielApresNb(string, nombre) {
        return nombre == 1 || nombre == 0? nombre + " "+ string : nombre + " " + string + "s";
    }

}
