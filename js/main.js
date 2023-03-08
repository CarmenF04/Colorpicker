// Class = blauwdruk
class ColorsCard { // De colorcard bevat de volgende dingen
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    constructor(newId, newColor, addToList) {
        // maak properties
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;  

        // maak een li element
        this.htmlElement = document.createElement("li");
        // geef het een naam
        this.htmlElement.classList = "colors__color";

        // maak een figure en geef deze een class
        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;

        // maak een p element
        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";

        // als je op de functie klikt voert hij uit
        this.htmlElement.onclick = this.onHTMLElementClicked;

         // render
        this.render();
    }

    onHTMLElementClicked = () => {
        // class toevoegn aan circle
        this.circle.classList.add("colors__circle--selected");
        // titel veranderen
        document.title = this.color;
        // kopie de kleur
        window.navigator.clipboard.writeText(this.color);
    }

    render() {
        // hier voegen we een ul, figure, p aan li
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
        this.addToList.appendChild(this.htmlElement);
    }
}

// Class = blauw druk
class ColorList {
    id;
    htmlElement;

    constructor(newId) {
        this.id = newId;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");
        this.render();
    }

    render() {
        document.querySelector("body").appendChild(this.htmlElement);
    }
}

// Class = blauw druk
class HSLGenerator {
    randomHue;
    randomSaturation;
    randomLightness;
    hsl;

    constructor() {
        this.generateHSL();
    }
    
    generateHue = function () {
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    }

    generateSaturation = function () {
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    }

    generateLightness = function () {
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
    }

    generateHSL = function () {
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`;
    }
}

// Class = blauw druk
class App { 
    id;
    colorList;
    hslGenerator;

    constructor(newId) {
        this.id = newId;
        // nieuwe object maken met app id
        this.colorList = new ColorList(this.id);
        this.hslGenerator = new HSLGenerator();
        this.generateColorCards();
    }

    generateColorCards = function () {
        // begint bij 1 en eindigt bij 100
        for (let i = 1; i <= 100; i++) {
            this.hslGenerator.generateHSL();
            // new object maken
            new ColorsCard(i, this.hslGenerator.hsl, document.getElementById(this.colorList.id));
        }
    }
}

const app = new App("js--app");