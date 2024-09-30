"use strict";

class Quiz {
    /**
     * Créé un objet Quiz contenant une liste de Question
     * @param listeQuestions
     */
    constructor(listeQuestions) {
        this._listeQuestions = listeQuestions;
    }

    /**
     * Retourne la question selon l'index envoyé en parametre
     * @param index
     */
    questionParIndex(index) {
        let stringConstructeur = "";
        stringConstructeur += this._listeQuestions.enonce;
        return stringConstructeur;
    }
}