let symb;


function setup(){
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );

    background(0);

    symb = new Symb(
        width / 2,
        height / 2

    );
    symb.setRandomSymbol();
}

function draw(){
    symb.render();
}

class Symb{
    constructor(x, y){

        this.x = x;
        this.y = y;
        this.value;
    }
    
    setRandomSymbol() {
        this.value = String.fromCharCode(
            0x30A0 + round(random(0, 96))
        );
    }

    render() {
        fill(0, 255, 70);
        text(this.value, this.x, this.y);
    }

}








function stream(){

}