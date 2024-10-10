class Question {
    listeReponses = [];

    constructor(_enonce, _listeReponses, _bonneReponse) {
        this.enonce = _enonce;
        this.listeReponses = _listeReponses;
        this.bonneReponse = _bonneReponse;
    }

    /**
     * Retourne une réponse dans la liste de reponses possible
     * de la question selon l'index decu en parametre
     * @param index de la reponse dans le tableau
     * @returns {*}
     */
    getReponse(index) {
        return this.listeReponses[index];
    }

    /**
     * Retourne la bonne réponse a la question
     * @returns {*}
     */
    getBonneReponse() {
        return this.bonneReponse;
    }
}