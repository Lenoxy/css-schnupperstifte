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
        console.log("Dein Name:", person.name);
        console.log("Deine Haarfarbe:", person.haare.farbe);
        console.log("Deine Haarlaenge:", Haarlaenge[person.haare.laenge].toLowerCase());
        console.log("Deine Shirtfarbe:", person.tshirt.farbe);
        console.log("Dein Shirttyp:", ShirtTyp[person.tshirt.typ].toLowerCase());
        console.log("Deine Schuhfarbe:", person.schuhe.farbe);
        console.log("Deine Schuhmarke:", SchuhMarke[person.schuhe.marke].toLowerCase());



    }
}

class Person{
    name: string;
    haare = new Haare();
    tshirt = new Shirt();
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
