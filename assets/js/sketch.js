
const symbolSize = 20;
const streamsJap =  [];
const streamsSlav = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    background(0);
    let x = 0;
    
    for (let i = 0; i <= width / symbolSize; i++) {
        let streams1 = new Stream ();
        streams1.generateSymbolsJap(x, random(-500, 0));
        streamsJap.push(streams1);
        x += symbolSize;
        let streams2 = new Stream ();
        streams2.generateSymbolsSlav(x, random(-500, 0));
        streamsSlav.push(streams2);
        x += symbolSize;
        
    }

    // for (let i = 0; i <= width / symbolSize; i++) {
        // let streams2 = new Stream ();
        // streams2.generateSymbolsSlav(x, random(-500, 0));
        // streamsSlav.push(streams2);
        // x += symbolSize;
    // }
        
    textSize(symbolSize);
}

function draw() {
    background(0, 150);
    streamsJap.forEach(function(stream){
        stream.renderJap();
    });
    streamsSlav.forEach(function(streams2){
        streams2.renderSlav();
    });
}

class Symb {
    constructor(x, y, speed, first) {

        this.x = x;
        this.y = y;
        this.value;
        this.speed = speed;
        this.charSwitch = round(random(2, 20));
        this.first = first;
    }
    
    setRandomSymbolJap() {
        //frameCount how many frames have passed?
        //set symbol after every nth frame
        if (frameCount % this.charSwitch == 0){
            this.value = String.fromCharCode(
            0x30A0 + round(random(0, 96))
            );
        }
    }
    
    setRandomSymbolSlav() {
        //frameCount how many frames have passed?
        //set symbol after every nth frame
        if (frameCount % this.charSwitch == 0){
            this.value = String.fromCharCode(
            0x21E + round(random(0, 200))
            );
        }
    }

    rainJap() {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }
    rainSlav() {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }

}


class Stream {
    constructor() {
        this.symbols = [];
        this.totalSymbols = round(random(5, 10));
        this.speed = random(1, 7);
    }

    generateSymbolsJap(x, y) {
        let first = round(random(0, 4)) == 1;
        for (let i = 0; i <= this.totalSymbols; i++) {
            let symbol = new Symb(x, y, this.speed, first);
            symbol.setRandomSymbolJap();
            this.symbols.push(symbol);
            y -= symbolSize
            first = false;
        }
    }

    generateSymbolsSlav(x, y) {
        let first = round(random(0, 2)) == 1;
        for (let i = 0; i <= this.totalSymbols; i++) {
            let symbol = new Symb(x, y, this.speed, first);
            symbol.setRandomSymbolSlav();
            this.symbols.push(symbol);
            y -= symbolSize
            first = false;
        }
    }

    renderJap() {
        this.symbols.forEach(function(symbol){
            if(symbol.first){
                fill('rgba(180, 255, 180, 1');
            } else {
                fill('rgba(0, 255, 70, 1)');
            }
            text(symbol.value, symbol.x, symbol.y);
            symbol.rainJap();
            symbol.setRandomSymbolJap();
            
        });
    }

    renderSlav() {
        this.symbols.forEach(function(symbol){
            if(symbol.first){
                fill('rgba(180, 255, 180, 1');
            } else {
                fill('rgba(0, 255, 70, 1)');
            }
            text(symbol.value, symbol.x, symbol.y);
            symbol.rainSlav();
            symbol.setRandomSymbolSlav();
            
        });
    }
}