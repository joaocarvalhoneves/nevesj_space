// classe para projeto

class Being {
    constructor(nome, descricao, curX, curY, objX, objY, red, green, blue, string, textalt, link) {
        this.nome = nome;
        this.descricao = descricao;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.string = string;
        this.curX = curX;
        this.curY = curY;
        this.objX = objX;
        this.objY = objY;
        this.alfa = 0;
        this.amount = 0.2;
        this.lerpx;
        this.lerpy;
        this.hide = 0;
        this.arrive = false;
        this.floatx = 0;
        this.floaty = 0;
        this.hover = false;
        this.incx = random(-0.007, random(0.007));
        this.incy = random(-0.007, random(0.007));
        this.textalt = textalt;
        this.textalfa = 0;
        this.link = link;
        this.timer = 0;
        this.animate = false;
        this.toggle1 = false;
        this.toggle2 = false;
        this.largx = 0;
        this.largy = 0;
    }


    show() {
        textSize(24);

        if (this.animate) {
            this.timer++;
            if (this.timer > 130) {
                this.timer = 0;
                this.animate = false;
            }

            // animação para choque com elementos do GoL

            if ((this.timer >= 10 && this.timer < 20) ||
                (this.timer >= 30 && this.timer < 40) ||
                (this.timer >= 50 && this.timer < 60) ||
                (this.timer >= 70 && this.timer < 80) ||
                (this.timer >= 90 && this.timer < 100) ||
                (this.timer >= 110 && this.timer < 120)) {
                fill(this.red, this.green, this.blue, this.alfa);

            } else fill(255 - this.red, 255 - this.green, 255 - this.blue, this.alfa);
        } else fill(this.red, this.green, this.blue, this.alfa);


        // comportamento dos planetas antes e após a viagem inicial

        if (this.hide > 0) {
            this.hide--;
        } else {
            if (this.alfa < 255) this.alfa += 2;
            if (!this.arrive) {
                this.lerpx = lerp(this.curX, this.objX, this.amount);
                this.lerpy = lerp(this.curY, this.objY, this.amount);
                textAlign(CENTER, CENTER);
                text(this.string, this.lerpx, this.lerpy);
                textAlign(LEFT, TOP);
                this.amount += 1 / (this.amount * 300);
                if (!this.arrive && dist(this.lerpx, this.lerpy, this.objX, this.objY) < 1) {
                    this.amount = 0;
                    this.curX = this.objX;
                    this.curY = this.objY;
                    this.arrive = true;
                }
            } else {
                textAlign(CENTER, CENTER);
                text(this.string, this.curX, this.curY);
                textAlign(LEFT, TOP);

                textSize(18);
            }
        }
    }


    // função para criar alguma movimentação dos projetos

    shake() {
        this.curX += this.floatx;
        this.curY += this.floaty;
        this.floatx += this.incx;
        this.floaty += this.incy;
        if (!mobile()) {
            if (this.floatx >= 0.15) this.incx = -0.005;
            if (this.floatx <= -0.15) this.incx = 0.005;
            if (this.floaty >= 0.15) this.incy = -0.005;
            if (this.floaty <= -0.15) this.incy = 0.005;
        } else {
            if (this.floatx >= 0.08) this.incx = -0.005;
            if (this.floatx <= -0.08) this.incx = 0.005;
            if (this.floaty >= 0.08) this.incy = -0.005;
            if (this.floaty <= -0.08) this.incy = 0.005;
        }
        if (this.curX <= pborderx) this.incx = +0.005;
        if (this.curX >= width - pborderx) this.incx = -0.005;
        if (this.curY <= pbordery) this.incy = +0.005;
        if (this.curY >= height - pbordery) this.incy = -0.005;
    }


    // função para expandir o rato e apresentar o texto respetivo de cada projeto após verificar se ele está a ser arrastado e se chegou ao seu destino

    tooltip() {
        if (!mobile()) {
            if (this.arrive && dist(mouseX, mouseY, this.curX, this.curY) < interactiondist && opened == 0) {
                opened++;
                textSize(textProjectSize);
                textAlign(LEFT, TOP);
                textalt = this.textalt;
                fill(this.red, this.green, this.blue, textAlfa1);
                text(this.nome, mouseX - cursorsizeX / 2 + 10, mouseY - cursorsizeY / 2 + 6);
                textSize(textProjectSize - 2);
                fill(255, textAlfa1);
                text(this.descricao, mouseX - cursorsizeX / 2 + 10, mouseY - cursorsizeY / 2 + 26);
                this.hover = true;

            } else {
                this.hover = false;
            }
        } else {
            if (this.arrive) {
                if (this.toggle1)
                    strokeWeight(1);
                stroke(255);
                fill(40, 180);
                if (this.largx != 0)
                    rect(this.curX, this.curY, this.largx, this.largy);
                if (this.toggle1 && this.toggle2) {
                    if (this.textalfa < 255 && this.largx >= 188) this.textalfa += 7;
                    if (this.largx < 188) {
                        this.largx += 6;
                    }
                    if (this.largy < this.textalt) {
                        if (this.textalt < 200)
                            this.largy += 4;
                        else this.largy += 7;
                    }
                    if (this.largy > this.textalt) this.largy -= 4;
                    rectMode(CENTER);
                    fill(255);
                    noStroke();
                    textSize(textProjectSize);
                    textAlign(LEFT, TOP);
                    fill(this.red, this.green, this.blue, this.textalfa);
                    text(this.nome, this.curX - this.largx / 2 + 10, this.curY - this.largy / 2 + 6);
                    textSize(textProjectSize - 2);
                    fill(255, this.textalfa);
                    text(this.descricao, this.curX - this.largx / 2 + 10, this.curY - this.largy / 2 + 26);
                    noFill();

                }
                if (!this.toggle2) {
                    this.textalfa = 0;

                    if (this.largx > 2) {
                        this.largx -= 6;
                    }
                    if (this.largy > 2) {
                        if (this.textalt > 200) this.largy -= 7;
                        else this.largy -= 4;
                    }
                    if (this.largx <= 1) this.largx = 0;
                    if (this.largy <= 1) this.largy = 0;
                    if (this.largx == 0 && this.largy == 0) {
                        this.toggle1 = false;
                    }
                }
            }
        }
    }

// função para dar refresh em valores consoante a mudança do tamanho do ecrã

    resizeReplace() {
        this.hide = random(50);
        this.alfa = 0;
        this.curX = random(pborderx, width - pborderx);
        this.curY = random(pbordery, height - pbordery);
        this.objX = random(pborderx, width - pborderx);
        this.objY = random(pbordery, height - pbordery);
        if (this.name == "about me") {
            this.curY = random(pbordery * 3.5, height - pbordery * 3.5);
            this.objY = random(pbordery * 3.5, height - pbordery * 3.5);
        }
        this.amount = 0.2;
        this.arrive = false;
    }
}