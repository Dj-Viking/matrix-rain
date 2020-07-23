// let symb;
let symbolSize = 60;
let stream;


function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );

    background(0);
    stream = new Stream();
    stream.generateSymbols();

    // symb = new Symb(
    //     width / 2,
    //     0,
    //     random(5, 10)

    // );
    // symb.setRandomSymbol();
    textSize(symbolSize);
}

function draw() {
    background(0);
    stream.render();
}

class Symb {
    constructor(x, y, speed) {

        this.x = x;
        this.y = y;
        this.value;
        this.speed = speed;
        this.charSwitch = round(random(2, 20));
    }
    
    setRandomSymbol() {
        //frameCount how many frames have passed?
        //set symbol after every nth frame
        if (frameCount % this.charSwitch == 0){
            this.value = String.fromCharCode(
                0x30A0 + round(random(0, 96))
            );
        }
    }

    rain() {
        // if(this.y >= height){
        //     this.y = 0;
        // } else{
        //     this.y += this.speed;
        // }
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }

}


class Stream {
    constructor() {
        this.symbols = [];
        this.totalSymbols = round(random(5, 30));
        this.speed = random(5, 20);
    }

    generateSymbols() {
        let y = 0;
        let x = width / 2;

        for (let i = 0; i <= this.totalSymbols; i++) {
            let symbol = new Symb(x, y, this.speed);
            symbol.setRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize
        }
    }

    render() {
        this.symbols.forEach(function(symbol){
            fill(0, 255, 70);
            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setRandomSymbol();
        });
    }
}