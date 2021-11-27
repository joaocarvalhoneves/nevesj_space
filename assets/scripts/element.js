// classe para elementos do GoL

class Element {
    constructor(x, y, size, now) {
        this.position = createVector(x, y);
        this.size = size;
        this.now = now;
        this.before = now;
        this.die = 255;
    }


    // atualização da grelha

    update() {
        this.before = this.now;
    }

    // atualização do estado do elemento

    newstate(s) {
        this.now = s;
    }

    show() {
        if (this.now == 1 && this.die < 254)
            fill(0, 200, 0, this.die);
        else
            noFill();

        if (this.die < 254 && this.die > 0)
            textSize(18);
        text("+", this.position.x, this.position.y);

    }


    // comportamento do elemento depois de ativo

    diee() {
        if (g.willdie) {
            this.green == 255;
            if (this.die >= 0 && this.die > 15) this.die -= 1;
            if (this.die <= 15) this.die -= 3;
        } else {
            this.die = 255;
        }
        if (this.die <= 0) {
            g.willdie = false;
        }

    }
}