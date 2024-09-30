class Question {


    constructor(enonce, listeReponses, indexBonneReponse) {
        this._enonce = enonce;
        this._listeReponses = listeReponses;
        this._indexBonneReponse = indexBonneReponse;
        this._bonneReponse = this.trouverBonneReponse();
    }

    trouverBonneReponse() {
        return this._listeReponses[this._indexBonneReponse];
    }




}