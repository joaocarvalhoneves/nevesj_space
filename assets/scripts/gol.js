// classe para game of life

class GoL {

    constructor() {
        this.createGol();
    }

    createGol() {
        this.willdie = false;
        e = new Array(cols);
        for (let i = 0; i < e.length; i++) {
            e[i] = Array(rows);
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                e[i][j] = new Element(i * size, j * size, size, 0);
            }
        }
    }

    show() {
        noStroke();
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                e[i][j].show();
            }
        }
    }

    // diferentes tipos de agentes GoL (gliders e spaceshifts)

    glider1(a, b) {
        e[a][b] = new Element((a - 1) * size, b * size, size, 1);
        e[a - 1][b] = new Element((a - 1) * size, b * size, size, 1);
        e[a][b - 1] = new Element(a * size, (b - 1) * size, size, 1);
        e[a][b] = new Element(a * size, b * size, size, 1);
        e[a + 1][b - 1] = new Element((a + 1) * size, (b - 1) * size, size, 1);
        e[a + 1][b + 1] = new Element((a + 1) * size, (b + 1) * size, size, 1);
    }

    glider2(a, b) {
        e[a][b - 1] = new Element(a * size, (b - 1) * size, size, 1);
        e[a + 1][b] = new Element((a + 1) * size, b * size, size, 1);
        e[a - 1][b + 1] = new Element((a - 1) * size, (b + 1) * size, size, 1);
        e[a][b + 1] = new Element(a * size, (b + 1) * size, size, 1);
        e[a + 1][b + 1] = new Element((a + 1) * size, (b + 1) * size, size, 1);
    }

    glider3(a, b) {
        e[a - 1][b - 1] = new Element((a - 1) * size, (b - 1) * size, size, 1);
        e[a - 1][b + 1] = new Element((a - 1) * size, (b + 1) * size, size, 1);
        e[a][b - 1] = new Element(a * size, (b - 1) * size, size, 1);
        e[a][b] = new Element(a * size, b * size, size, 1);
        e[a + 1][b] = new Element((a + 1) * size, b * size, size, 1);
    }

    glider4(a, b) {
        e[a - 1][b + 1] = new Element((a - 1) * size, (b + 1) * size, size, 1);
        e[a][b + 1] = new Element(a * size, (b + 1) * size, size, 1);
        e[a + 1][b + 1] = new Element((a + 1) * size, (b + 1) * size, size, 1);
        e[a - 1][b] = new Element((a - 1) * size, b * size, size, 1);
        e[a][b - 1] = new Element(a * size, (b - 1) * size, size, 1);
    }

    spaceship1(a, b) {
        e[a - 2][b - 2] = new Element((a - 2) * size, (b - 2) * size, size, 1);
        e[a - 2][b] = new Element((a - 2) * size, b * size, size, 1);
        e[a - 1][b + 1] = new Element((a - 1) * size, (b + 1) * size, size, 1);
        e[a][b + 1] = new Element(a * size, (b + 1) * size, size, 1);
        e[a + 1][b - 2] = new Element((a + 1) * size, (b - 2) * size, size, 1);
        e[a + 1][b + 1] = new Element((a + 1) * size, (b + 1) * size, size, 1);
        e[a + 2][b - 1] = new Element((a + 2) * size, (b - 1) * size, size, 1);
        e[a + 2][b] = new Element((a + 2) * size, b * size, size, 1);
        e[a + 2][b + 1] = new Element((a + 2) * size, (b + 1) * size, size, 1);
    }

    spaceship2(a, b) {
        e[a + 2][b - 2] = new Element((a + 2) * size, (b - 2) * size, size, 1);
        e[a + 2][b] = new Element((a + 2) * size, b * size, size, 1);
        e[a + 1][b + 1] = new Element((a + 1) * size, (b + 1) * size, size, 1);
        e[a][b + 1] = new Element(a * size, (b + 1) * size, size, 1);
        e[a - 1][b - 2] = new Element((a - 1) * size, (b - 2) * size, size, 1);
        e[a - 1][b + 1] = new Element((a - 1) * size, (b + 1) * size, size, 1);
        e[a - 2][b - 1] = new Element((a - 2) * size, (b - 1) * size, size, 1);
        e[a - 2][b] = new Element((a - 2) * size, b * size, size, 1);
        e[a - 2][b + 1] = new Element((a - 2) * size, (b + 1) * size, size, 1);
    }


    // refresh da grelha para e regras do game of life

    next() {
        if (frameCount % 4 == 0) {
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    e[x][y].update();
                }
            }
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    let nb = 0;
                    if (x == 0 || y == 0 || x == cols - 1 || y == rows - 1) {
                        e[x][y].now = 0;
                    } else {
                        for (let i = -1; i <= 1; i++) {
                            for (let j = -1; j <= 1; j++) {
                                nb += e[(x + i + cols) % cols][(y + j + rows) % rows].before;
                            }
                        }
                        nb -= e[x][y].before;

                        if (this.willdie) {
                            if ((e[x][y].now == 1) && (nb < 2)) e[x][y].newstate(0);
                            else if ((e[x][y].now == 1) && (nb > 3)) e[x][y].newstate(0);
                            else if ((e[x][y].now == 0) && (nb == 3)) e[x][y].newstate(1);
                        } else e[x][y].newstate(0);
                    }
                }
            }
        }
    }

    // começo do desaparecimento do elemento

    willdiee() {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                e[i][j].diee();
            }
        }
    }

    // alfa do elemento ativo

    refresh() {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                e[i][j].die = 254;
            }
        }
    }
}