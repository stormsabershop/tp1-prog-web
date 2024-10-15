"use strict";

class Quiz {
    listeQuestions = [];
    posListeQuestion = 0;
    totalPoints = 0;
    score = 0;
    nbBonnesReponses = 0;

    constructor(tabAllQuestions, _nbQuestions) {
        this.nbQuestions = _nbQuestions;
        this.listeQuestions = this.remplirQuiz(tabAllQuestions);
    }

    /**
     * Remplis le tableau de liste de questions dépendamment du nombre de questions maximum
     * dans le quiz et sans qu'il y aye de doublon et mets à jour le total de points du quiz
     * @param tabAllQuestion un tableau contenant plusieurs questions
     * @returns {*[]} la liste des questions en tableau
     */
    remplirQuiz(tabAllQuestion) {
        let listeQuestions = [];
        let tabIdQuestions = [];
        let id = 0;
        let estValide = false;

        for (let i = 0; i < this.nbQuestions; i++) {
            estValide = false;
            do {
                id = Math.floor(Math.random() * 15);

                if (!tabIdQuestions.includes(id)) {
                    estValide = true;
                    tabIdQuestions.push(id);
                    listeQuestions.push(tabAllQuestion[id]);
                    this.totalPoints += tabAllQuestion[id].getPoidsPoints();
                }
            } while (!estValide)
        }
        return listeQuestions;
    }

    /**
     * Retourne le score de l'utilisateur en pourcentage
     * @returns {string}
     */
    getScorePourcentage() {
        return ((this.score / this.totalPoints) * 100).toFixed(2);
    }

    /**
     * Crée un message d'encouragement selon la note et si le quiz a été abandonné
     * @param abandon si le quiz a ete abandonné
     * @returns {string} le message d'encouragement
     */
    resultatsEchelons(abandon) {
        let message;
        let scorePourcentage = this.getScorePourcentage();

        if (scorePourcentage > 95) {
            message = "Mais quel beau score, ça parait que vous vous pratiquez !!!"
        } else if (scorePourcentage > 85) {
            message = "Wow vous êtes presqu'un champion!!"
        } else if (scorePourcentage > 70) {
            message = "Vous vous approchez du 100%!!"
        } else if (scorePourcentage > 60) {
            message = "C'est une bonne note mais ca pourrait être encore mieux!"
        } else if (scorePourcentage > 30) {
            message = "Vous allez y arriver!"
        } else {
            message = "Il peut toujours y avoir amélioration..."
        }
        if (abandon === true) {
            message += " Si seulement vous n'aviez pas abandonné..."
        }

        return message;
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

    /**
     * Incrémente le compteur de questions qui correspond à la question actuelle
     */
    incrementPosQuestion() {
        this.posListeQuestion++;
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