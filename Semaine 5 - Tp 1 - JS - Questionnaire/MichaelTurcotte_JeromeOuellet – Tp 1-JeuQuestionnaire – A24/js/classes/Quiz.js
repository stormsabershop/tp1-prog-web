"use strict";

class Quiz {
    listeQuestions = [];
    posListeQuestion = 0;
    totalPoints = 0;
    score = 0;
    nbBonnesReponses = 0;

    constructor(tabAllQuestions, _nbQuestions) {
        this.listeQuestions = this.remplirQuiz(tabAllQuestions);
        this.nbQuestions = _nbQuestions;
        this.totalPoints = this.calculerTotalPoints();
    }

    remplirQuiz(tabAllQuestion) {
        let listeQuestions = [];
        let tabIdQuestions = [];
        let id = 0;
        for (let i = 0; i < NBMAXQUESTIONSQUIZ; i++) {
            let estValide = false;

            while (!estValide) {
                id = parseInt(Math.random() * 15);

                if (!tabIdQuestions.includes(id)) {
                    tabIdQuestions.push(id);

                    estValide = true;
                    listeQuestions.push(tabAllQuestion[id]);
                }
            }
        }
        return listeQuestions;
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
    //TODO Erreur quand on pese sur demarrer defois
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
    doesQuizEstTermine() {
        return (this.nbQuestions === this.getIndexQuestionCourrante());
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