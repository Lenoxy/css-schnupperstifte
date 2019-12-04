class App {
    public main(): void{
        //Mache Hier eine neue Person, die deinen Name trägt. Falls Ihr mehrere Personen seid, macht drei Personen.



        //
        this.personenAusgeben();
    }

    personenAusgeben(person1:Person, person2?: Person, person3?: Person): void {

    }
}

class Person{
    haare = new Haare();
    tshirt = new Shirt();
    schuhe = new Schuhe();

}

class Haare {
    farbe: string;
    haarlaenge: Haarlaenge;

}

class Shirt {
    farbe: string;
    typ: ShirtTyp

}

class Schuhe {
    farbe: string;
    marke: MarkenTyp
}

enum Haarlaenge {
    SEHR_KURZ = 1,
    KURZ = 2,
    SCHULTERLANG = 3,
    LANG = 4,
}

enum ShirtTyp {
    t_shirt = 1,
    pullover = 2,
    jacke = 3,
    poloshirt = 4,
}

enum MarkenTyp {
    adidas = 1,
    nike = 2,
    puma = 3,
    asics = 4,
    underArmour = 5,
    vans = 6
}