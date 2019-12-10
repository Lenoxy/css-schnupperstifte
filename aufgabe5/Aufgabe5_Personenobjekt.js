var App = /** @class */ (function () {
    function App() {
        //Mache Hier eine neue Person, die deinen Name trägt. Falls Ihr mehrere Personen seid, macht mehrere Objekte.
        var lisa = new Person();
        //  lisa.haare.farbe = 'rot';
        //
        this.personenAusgeben(lisa);
    }
    App.prototype.personenAusgeben = function (person1, person2, person3) {
        if (person1) {
            this.personAusgeben(person1);
        }
        if (person2) {
            this.personAusgeben(person2);
        }
        if (person3) {
            this.personAusgeben(person3);
        }
    };
    App.prototype.personAusgeben = function (person) {
        console.log("Dein Name:", person.name);
        console.log("Deine Haarfarbe:", person.haare.farbe);
        console.log("Deine Haarlaenge:", Haarlaenge[person.haare.laenge].toLowerCase());
        console.log("Deine Shirtfarbe:", person.tshirt.farbe);
        console.log("Dein Shirttyp:", ShirtTyp[person.tshirt.typ].toLowerCase());
        console.log("Deine Schuhfarbe:", person.schuhe.farbe);
        console.log("Deine Schuhmarke:", SchuhMarke[person.schuhe.marke].toLowerCase());
    };
    return App;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.haare = new Haare();
        this.tshirt = new Shirt();
        this.schuhe = new Schuhe();
    }
    return Person;
}());
var Haare = /** @class */ (function () {
    function Haare() {
    }
    return Haare;
}());
var Shirt = /** @class */ (function () {
    function Shirt() {
    }
    return Shirt;
}());
var Schuhe = /** @class */ (function () {
    function Schuhe() {
    }
    return Schuhe;
}());
var Haarlaenge;
(function (Haarlaenge) {
    Haarlaenge[Haarlaenge["SEHR_KURZ"] = 1] = "SEHR_KURZ";
    Haarlaenge[Haarlaenge["KURZ"] = 2] = "KURZ";
    Haarlaenge[Haarlaenge["SCHULTERLANG"] = 3] = "SCHULTERLANG";
    Haarlaenge[Haarlaenge["LANG"] = 4] = "LANG";
})(Haarlaenge || (Haarlaenge = {}));
var ShirtTyp;
(function (ShirtTyp) {
    ShirtTyp[ShirtTyp["T_SHIRT"] = 0] = "T_SHIRT";
    ShirtTyp[ShirtTyp["PULLOVER"] = 1] = "PULLOVER";
    ShirtTyp[ShirtTyp["JACKE"] = 2] = "JACKE";
    ShirtTyp[ShirtTyp["POLOSHIRT"] = 3] = "POLOSHIRT";
})(ShirtTyp || (ShirtTyp = {}));
var SchuhMarke;
(function (SchuhMarke) {
    SchuhMarke[SchuhMarke["ADIDAS"] = 1] = "ADIDAS";
    SchuhMarke[SchuhMarke["NIKE"] = 2] = "NIKE";
    SchuhMarke[SchuhMarke["PUMA"] = 3] = "PUMA";
    SchuhMarke[SchuhMarke["ASICS"] = 4] = "ASICS";
    SchuhMarke[SchuhMarke["UNDERARMOUR"] = 5] = "UNDERARMOUR";
    SchuhMarke[SchuhMarke["VANS"] = 6] = "VANS";
})(SchuhMarke || (SchuhMarke = {}));
var app = new App();
