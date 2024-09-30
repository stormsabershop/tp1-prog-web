class Question {

    constructor(_enonce, _listeReponses, _indexBonneReponse) {
        this.enonce = _enonce;
        this.listeReponses = _listeReponses;
        this.indexBonneReponse = _indexBonneReponse;
        this.bonneReponse = this.trouverBonneReponse();
    }

    getRepPossible(index) {
        return this.listeReponses[index];
    }

    trouverBonneReponse() {
        return this.listeReponses[this.indexBonneReponse];
    }

}