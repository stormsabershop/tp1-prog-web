"use strict";

const NBMAXQUESTIONQUIZ = 5;

class Quiz {
    listeQuestions = [];


    constructor(tabAllQuestions) {
       this.remplirQuiz(tabAllQuestions);
    }
    remplirQuiz(tabAllQuestion) {
        for (let i = 0; i < NBMAXQUESTIONQUIZ; i++) {
            this.listeQuestions.push(tabAllQuestion[parseInt(Math.random() * 15)]);
        }
    }

    creerListeQuestion(question) {
        let listeQuestions = document.createElement("div");

        for (let i = 0; i < question.listeReponses.length; i++) {
            let paragraphe = document.createElement('p');
            let label = document.createElement('label');

            let radio = document.createElement("input");
            radio.type = "radio";
            label.innerText = question.getReponse(i)
            radio.id = label.innerText;
            radio.name = "quiz";
            paragraphe.append(radio);
            paragraphe.append(label);
            listeQuestions.append(paragraphe);
        }

        return listeQuestions;
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