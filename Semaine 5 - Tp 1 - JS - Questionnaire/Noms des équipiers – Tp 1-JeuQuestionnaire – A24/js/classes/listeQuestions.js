class ListeQuestions {



    constructor() {
        this._contenu = "";
        this._reponses = [];
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

    premiereQuestion() {
        return _tabAssQuestions[0].question;
    }

    set reponses(value) {
        this._reponses = value;
    }
    

    parcourirTab(){
        for (let i = 0; i < tabAssQuestions.length; i++) {
            
        }
    }
    
}