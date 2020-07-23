let symb;
let symbolSize = 60;


function setup(){
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );

    background(0);

    symb = new Symb(
        width / 2,
        0,
        random(5, 10)

    );
    symb.setRandomSymbol();
    textSize(symbolSize);
}

function draw(){
    background(0);
    symb.render();
}

class Symb{
    constructor(x, y, speed){

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

    render() {
        fill(0, 255, 70);
        text(this.value, this.x, this.y);
        this.rain();
        this.setRandomSymbol();
    }

    rain(){
        // if(this.y >= height){
        //     this.y = 0;
        // } else{
        //     this.y += this.speed;
        // }
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }

}








function stream(){

}