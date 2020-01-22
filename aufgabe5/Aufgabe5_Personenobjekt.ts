class App {
    constructor(){
        //Mache Hier eine neue Person, die deinen Name trägt. Falls Ihr mehrere Personen seid, macht mehrere Objekte.

        let lisa = new Person();        

        this.personenAusgeben(lisa);
      }


    
    personenAusgeben(person1?: Person, person2?: Person, person3?: Person): void {
        if(person1){
            this.personAusgeben(person1);
        }
        if(person2){
            this.personAusgeben(person2);
        }
        if(person3){
            this.personAusgeben(person3);
        }

    }

    personAusgeben(person: Person){
        person.name ? console.log("Name:", person.name) : null;
        person.haare.farbe ? console.log("Haarfarbe:", person.haare.farbe) : null;
        person.haare.laenge ? console.log("Haarlaenge:", Haarlaenge[person.haare.laenge].toLowerCase()) : null;
        person.shirt.farbe ? console.log("Shirtfarbe:", person.shirt.farbe) : null;
        person.shirt.typ ? console.log("Shirttyp:", ShirtTyp[person.shirt.typ].toLowerCase()) : null;
        person.schuhe.farbe ? console.log("Schuhfarbe:", person.schuhe.farbe) : null;
        person.schuhe.marke ? console.log("Schuhmarke:", SchuhMarke[person.schuhe.marke].toLowerCase()) : null;



    }
}

class Person{
    name: string;
    haare = new Haare();
    shirt = new Shirt();
    schuhe = new Schuhe();

}

class Haare {
    farbe: string;
    laenge: Haarlaenge;

}

class Shirt {
    farbe: string;
    typ: ShirtTyp

}

class Schuhe {
    farbe: string;
    marke: SchuhMarke
}

enum Haarlaenge {
    SEHR_KURZ = 1,
    KURZ = 2,
    SCHULTERLANG = 3,
    LANG = 4
}

enum ShirtTyp {
    T_SHIRT = 1,
    PULLOVER = 2,
    JACKE = 3,
    POLOSHIRT = 4
}

enum SchuhMarke {
    ADIDAS = 1,
    NIKE = 2,
    PUMA = 3,
    ASICS = 4,
    UNDERARMOUR = 5,
    VANS = 6
}

let app = new App();
