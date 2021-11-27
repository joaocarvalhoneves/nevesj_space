let space;                 // fonte
let being = [];            // projetos
let e = [];                // elementos GoL
let g;                     // GoL
let cursors = 0;           // variável para aumentar rato
let cursorsizeX = 3;       // tamanho x do rato (que expande com hover)
let cursorsizeY = 3;       // tamanho y do rato (que expande com hover)
let textProjectSize = 13;  // tamanho inicial do texto
let textAlfa1 = 0;         // alfa inicial do texto
let textalt = 78;          // altura dos retângulos de texto
let cols;                  // colunas GoL
let rows;                  // linhas GoL
let size = 15;             // tamanho para elementos GoL
let pborderx;              // dist dos projetos às margens em x
let pbordery;              // dist dos projetos às margens em y
let responsivedist;        // dist entre projetos
let interactiondist;       // dist para interação com projeto
let opened;                // boolean para verificar se há algum projeto aberto 
let drag;                  // boolean para verificar se há arrasto
let draggedi;              // projeto a ser arrastado

function preload() {
    space = loadFont('assets/space.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(LEFT);
    textFont(space, 24);
    cols = int(width / size);
    rows = int(height / size);
    pborderx = width * 0.2;
    pbordery = height * 0.1;


    // criação de projetos

    being[0] = new Being("about me", "Hi there. I’m João. \nI’m a jazz pianist and \ndesigner from Coimbra. \n\nI’m into people, books, \ncinema, videogames, the \nsea and, obviously, coffee. \n\nIn this page you’ll find \nexpressiveness, DIY \nattitude and innate \npassion for creating. \n\nHave a good one!", random(pborderx, width - pborderx), random(pbordery * 3.5, height - pbordery * 3.5),
        random(pborderx, width - pborderx), random(pbordery * 3.5, height - pbordery * 3.5),
        200, 200, 200,
        "a", 228, "");

    being[1] = new Being("space", "a p5.js videoclip.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        221, 74, 155,
        "!", 49, "https://www.behance.net/gallery/116813879/fera-space");

    being[2] = new Being("jazz visualizer", "a media player for jazz \nvisualization.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        252, 234, 0,
        ",", 64, "https://www.behance.net/gallery/117414095/Jazz-Visualizer");
    being[3] = new Being("ccdm", "the graphic identity for \na design event.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        59, 84, 165,
        "<", 64, "https://www.behance.net/gallery/92678889/CCDM");
    being[4] = new Being("live sessions", "a cover for a jazz album.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        232, 178, 135,
        ">", 49, "https://www.behance.net/gallery/116835505/Joao-Freitas-Live-Sessions");
    being[5] = new Being("expressive typography", "an interactive sketch \nbased on the word \ninquietação", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        240, 92, 115,
        "*", 78, "https://www.behance.net/gallery/91850603/Expressive-Typography");
    being[6] = new Being("photofolio", "an appropriation \ncollection.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        98, 204, 238,
        "-", 64, "https://www.behance.net/gallery/117423285/Photofolio");
    being[7] = new Being("after the quarantine", "a short animation based on \na circular narrative.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        234, 155, 189,
        "#", 64, "https://www.behance.net/gallery/112374325/The-first-day-after-the-quarantine");
    being[8] = new Being("o guarda-rios", "a short film based on the \ncolor Indigo.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        75, 113, 168,
        ";", 64, "https://www.behance.net/gallery/116787597/O-Guarda-Rios");
    being[9] = new Being("reactive led frame", "a led installation with \nreactive agents.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        246, 139, 33,
        ":", 64, "");
    being[10] = new Being("uma volta ao sol", "a game about the life of \na ladybug.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        219, 169, 39,
        "/", 64, "https://www.behance.net/gallery/117373303/Uma-volta-ao-sol");
    being[11] = new Being("crimes exemplares", "an editorial and digital \ninspired by a max aub's \nliterary work.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        239, 60, 58,
        "{", 78, "https://www.behance.net/gallery/116834667/Crimes-Exemplares");
    being[12] = new Being("dynamic poetry", "a short animation based on \na carl andre's concrete \npoem.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        167, 167, 168,
        "~", 78, "https://www.behance.net/gallery/91843615/Dynamic-Poetry");
    being[13] = new Being("behance", "my behance account.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        68, 107, 179,
        "b", 49, "https://www.behance.net/joaocarvalhoneves");
    being[14] = new Being("instagram", "my instagram account.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        231, 10, 121,
        "i", 49, "https://www.instagram.com/joaocarvalhoneves/");

    being[15] = new Being("tresa", "a sound, tactile and \nvisual interactive \nexperience.", random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        random(pborderx, width - pborderx), random(pbordery, height - pbordery),
        119, 200, 165,
        "\"", 78, "https://www.behance.net/gallery/123536829/Tresa");

    // criação do GoL
    g = new GoL();

    // condições para mobile
    if (mobile()) {
        responsivedist = 30;
        interactiondist = 15;
    } else {
        responsivedist = 70;
        interactiondist = 25;
    }
}


function draw() {
    background(40);
    g.next();
    g.show();
    g.willdiee();

    // interação de hover

    for (let i = 0; i < being.length; i++) {
        if (being[i].hover) cursors++;
        being[i].show();
        if (dist(mouseX, mouseY, being[i].curX, being[i].curY) > interactiondist) being[i].shake();
        for (let j = 0; j < being.length; j++) {
            if (i != j && dist(being[i].objX, being[i].objY, being[j].objX, being[j].objY) < responsivedist) {
                being[j].resizeReplace();
            }
        }
    }
    if (!mobile()) {
        stroke(255);
        noFill();
        strokeWeight(1);
        if (cursors == 0) {
            textAlfa1 = 0;
            rectMode(CENTER);
            if (cursorsizeX > 2) {
                cursorsizeX -= 6;
            }
            if (cursorsizeY > 2) {
                if (textalt > 200) cursorsizeY -= 12;
                else
                    cursorsizeY -= 4;
            }
            if (cursorsizeX < 2) cursorsizeX = 1;
            if (cursorsizeY < 2) cursorsizeY = 1;
            if (cursorsizeX == 1 && cursorsizeY == 1) rect(mouseX, mouseY, cursorsizeX + 1, cursorsizeY + 1);
            fill(40, 150);
            rect(mouseX, mouseY, cursorsizeX, cursorsizeY);
        } else {

            if (textAlfa1 < 255 && cursorsizeX >= 188 && textalt < 200) textAlfa1 += 5;
            if (textAlfa1 < 255 && cursorsizeY >= 200 && textalt > 200) textAlfa1 += 5;

            if (cursorsizeX < 188) {
                cursorsizeX += 6;
            }

            if (cursorsizeY < textalt) {
                if (textalt < 200)
                    cursorsizeY += 4;
                else cursorsizeY += 7;
            }

            if (cursorsizeY > textalt) cursorsizeY -= 4;

            strokeWeight(1);
            fill(40, 180);
            rect(mouseX, mouseY, cursorsizeX, cursorsizeY);
        }

        noStroke();
        cursors = 0;
    }

    opened = 0;
    for (let i = 0; i < being.length; i++) {
        being[i].tooltip();
    }


    if (mobile()) {
        noFill();
        stroke(255);
        rect(mouseX, mouseY, 1, 1);
        rect(mouseX, mouseY, 2, 2);
    }

    // interação de projetos com GoL
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < being.length; k++) {
                if (e[i][j].now == 1 && e[i][j].die < 254 && dist(e[i][j].position.x, e[i][j].position.y, being[k].curX, being[k].curY) < 12) {
                    being[k].animate = true;
                }
            }
        }
    }
}


// função que devolve se o ecrã é pequeno

function mobile() {
    return (width < 650 && height < 650);
}


// reset em valores face ao tamanho do ecrã

function windowResized() {
    pborderx = width * 0.2;
    pbordery = height * 0.1;
    for (let i = 0; i < being.length; i++) {
        being[i].resizeReplace();
    }

    g.createGol();

    if (mobile()) {
        responsivedist = 30;
        interactiondist = 15;
    } else {
        responsivedist = 70;
        interactiondist = 25;
    }
    resizeCanvas(windowWidth, windowHeight);
}

// função para desativar variáveis de arrasto de projeto

function mouseReleased() {
    drag = false;
    draggedi = -1;
}

// função que possibilita arrasto de projeto

function mouseDragged() {
    if (drag) {
        for (let i = 0; i < being.length; i++) {
            being[i].toggle1 = false;
            being[i].toggle2 = false;
        }
        being[draggedi].curX = mouseX;
        being[draggedi].curY = mouseY;
        
    }
}

// cliques para ativar arrasto de projeto ou abrir projeto em novo separador

function mousePressed() {
    let hyperlink = "";
    let trigger = true;
    for (let i = 0; i < being.length; i++) {
        if (!mobile()) {
            if (dist(mouseX, mouseY, being[i].curX, being[i].curY) < interactiondist) {
                trigger = false;
                if (being[i].arrive) {
                    hyperlink = being[i].link;
                    if (this.link != "") window.open(hyperlink, '_blank');
                    break;
                }
            }
        } else {

            
            if (being[i].toggle1 && abs(mouseX - being[i].curX) < being[i].largx / 2 && abs(mouseY - being[i].curY) < being[i].largy / 2) {
                hyperlink = being[i].link;
                if (this.link != "") window.open(hyperlink, "_blank");
                trigger = false;
                break;
            }
            being[i].toggle2 = false;
            if (dist(mouseX, mouseY, being[i].curX, being[i].curY) < interactiondist) {
                draggedi = i;
                trigger = false;
                being[i].toggle1 = true;
                being[i].toggle2 = true;
            }
            drag = true;
        }
    }

 // criação de agente GoL

    if (trigger) {
        g.willdie = true;
        let golagent = random(6);
        let agentposx = int(mouseX / size);
        let agentposy = int(mouseY / size);
        g.refresh();
        if (golagent < 1) {
            g.spaceship2(agentposx, agentposy);
        } else {
            if (golagent < 2) {
                g.spaceship1(agentposx, agentposy);
            } else {
                if (golagent < 3) {
                    g.glider1(agentposx, agentposy);
                } else {
                    if (golagent < 4) {
                        g.glider2(agentposx, agentposy);
                    } else {
                        if (golagent < 5) {
                            g.glider3(agentposx, agentposy);
                        } else {
                            g.glider4(agentposx, agentposy);
                        }
                    }
                }
            }
        }
    }
}