export var config = {
 "schema" : {
  "type" : "object",
  "title" : "Questionario",
  "description" : "Work in progress",
  "format" : "categories",
  "properties" : {
    "D" : {
     "type" : "object",
     "title" : "Sezione D",
     "format" : "grid",
     "properties": {
      "D1" : {
        "title" : "Domanda D1",
        "$ref" : "#/definitions/frequenza",
        "description" :  "Intestare la casa o altri beni importanti a sé, e non (anche) a Lei",
      },
      "D2" : {
        "title" : "Domanda D2",
        "$ref" : "#/definitions/frequenza",
        "description" : "FarLe firmare assegni in bianco, fideiussioni o altri documenti bancari"
      },
      "D3" : {
        "title" : "Domanda D3",
        "$ref" : "#/definitions/frequenza",
        "description" : "Vendere beni Suoi o della famiglia senza discuterne prima con Lei"
      },
      "D4" : {
        "title" : "Domanda D4",
        "$ref" : "#/definitions/frequenza_nonlavoro",
        "description" : "Fare pressione per farLe lasciare il lavoro"
      }
     }
    },
    "Z" : {
     "type" : "object",
     "title" : "Sezione Z",
     "format" : "grid",
     "properties": {
      "Z13" : {
        "title" : "Domanda Z13",
        "$ref" : "#/definitions/boolean",
        "description" : "Ha figli che non vivono con Lei/con voi?",
        "value" : { "Sì" : 0, "No" : 0 }
      }
     }
    }
  },
  "definitions" : {
    "frequenza" : {
      "type" : "string",
      "format" : "radio",
      "enum" : [ "Mai", "Raramente", "Qualche volta", "Spesso", "Molto spesso", "Non ricordo" ],
      "value" : { "Mai" : 0, "Raramente" : 1, "Qualche volta" : 2, "Spesso" : 3, "Molto spesso" : 4, "Non ricordo" : 1 }
    },
    "frequenza_nonlavoro" : {
      "type" : "radio",
      "format" : "checkbox",
      "enum" : [ "Mai", "Raramente", "Qualche volta", "Spesso", "Molto spesso", "Non ricordo", "Non avevo un lavoro" ],
      "value" : { "Mai" : 0, "Raramente" : 1, "Qualche volta" : 2, "Spesso" : 3, "Molto spesso" : 4, "Non ricordo" : 1, "Non avevo un lavoro": 4 }
    },
    "boolean" : {
      "type" : "radio",
      "format" : "checkbox",
      "enum" : [ "Sì", "No" ],
      "value" : { "Sì" : 3, "No" : 0 }
    }
  },
  "results" : {
    3 : "Testo di risposta per il caso con valori bassi, qui <3.",
    6 : "Testo di risposta per il caso con valori medi, qui >3 e <6.",
    "default" : "Testo di risposta per il caso con valori alti, qui >=6.",
  } 
 }
};

