"use strict";

const NBMAXQUESTIONQUIZ = 5;

class Quiz {
    listeQuestions = [];


    constructor(tabAllQuestions) {
       this.remplirQuiz(tabAllQuestions);
    }
    remplirQuiz(tabAllQuestion) {
        for (let i = 0; i < NBMAXQUESTIONQUIZ; i++) {
            this.listeQuestions.push(tabAllQuestion[i]);
        }
    }

    creerListeQuestionRadio(question) {
        let listeRadio = [];
        for (let i = 0; i < question.listeReponses.length; i++) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.id = question.getRepPossible(i);
            radio.name = "quiz";
            listeRadio.push(radio);
        }
        return listeRadio;
    }


    /**
     * Retourne la question selon l'index recu en parametre
     * @param index
     * @returns {*}
     */
    getQuestion(index) {
        return this.listeQuestions[index];
    }
}