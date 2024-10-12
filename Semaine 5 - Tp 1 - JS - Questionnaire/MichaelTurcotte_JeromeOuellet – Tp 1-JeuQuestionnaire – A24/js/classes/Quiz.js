"use strict";


class Quiz {
    listeQuestions = [];
    posListeQuestion = 0;
    totalPoints = 0;
    score = 0;
    nbBonnesReponses = 0;


    constructor(tabAllQuestions, _nbQuestions) {
        this.remplirQuiz(tabAllQuestions);
        this.totalPoints = this.calculerTotalPoints();
        this.nbQuestions = _nbQuestions;
    }

    remplirQuiz(tabAllQuestion) {
        let tabIdQuestions = [];
        let id = 0;
        for (let i = 0; i < NBMAXQUESTIONSQUIZ; i++) {
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

    getNbQuestions() {
        return this.nbQuestions;
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

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }

    addScore(_score) {
        this.nbBonnesReponses++;
        this.score += _score;
    }

    getNbBonnesReponses() {
        return this.nbBonnesReponses;
    }
}