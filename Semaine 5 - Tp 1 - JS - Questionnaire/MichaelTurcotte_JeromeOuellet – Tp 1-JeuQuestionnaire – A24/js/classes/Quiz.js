"use strict";

const NBMAXQUESTIONQUIZ = 5;

class Quiz {
    listeQuestions = [];
    posListeQuestion = 0;
    totalPoints = 0;


    constructor(tabAllQuestions) {
        this.remplirQuiz(tabAllQuestions);
        this.melangerQuestions();
        this.totalPoints = this.calculerTotalPoints();
    }

    remplirQuiz(tabAllQuestion) {
        let tabIdQuestions = [];
        let id = 0;
        for (let i = 0; i < NBMAXQUESTIONQUIZ; i++) {
            let estValide = false;

            while (!estValide) {
                id = parseInt(Math.random() * 15);

                if (!tabIdQuestions.includes(id)) {
                    tabIdQuestions.push(id);

                    estValide = true;
                    this.listeQuestions.push(tabAllQuestion[id]);

                }
            }
        }
    }

    getIndexQuestionCourrante() {
        return this.posListeQuestion;
    }

    getNBMAXQUESTIONS() {
        return NBMAXQUESTIONQUIZ;
    }

    getQuestionsCourante() {
        return this.listeQuestions[this.posListeQuestion];
    }

    incrementPosQuestion() {
        this.posListeQuestion++;
    }

    calculerTotalPoints() {
        let total = 0;
        for (let i = 0; i < this.listeQuestions.length; i++) {
            total += this.listeQuestions[i].poidsPoints;
        }
        return total;
    }

    getTotalPoints() {
        return this.totalPoints;
    }

    melangerQuestions() {

    }
}