class Question {

    constructor(tabAssQuestion) {
        this._contenu = "";
        this._reponses = [];
        this._tabAssQuestion = tabAssQuestion;
    }
    get contenu() {
        return this._contenu;
    }

    set contenu(value) {
        this._contenu = value;
    }

    get reponses() {
        return this._reponses;
    }

    set reponses(value) {
        this._reponses = value;
    }
    

    parcourirTab(){
        for (let i = 0; i < tabAssQuestions; i++) {
            
        }
    }
    
}