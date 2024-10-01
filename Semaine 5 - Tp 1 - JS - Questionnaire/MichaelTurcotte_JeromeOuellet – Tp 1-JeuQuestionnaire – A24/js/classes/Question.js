class Question {
    listeReponses = [];

    constructor(_enonce, _listeReponses, _indexBonneReponse) {
        this.enonce = _enonce;
        this.listeReponses = _listeReponses;
        this.indexBonneReponse = _indexBonneReponse;
        this.bonneReponse = this.trouverBonneReponse();
    }

    /**
     * Retourne une réponse dans la liste de reponses possible
     * de la question selon l'index decu en parametre
     * @param index
     * @returns {*}
     */
    getReponse(index) {
        return this.listeReponses[index];
    }

    trouverBonneReponse() {
        return this.listeReponses[this.indexBonneReponse];
    }

}