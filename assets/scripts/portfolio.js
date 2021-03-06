let space; // fonte
let being = []; // projetos
let e = []; // elementos GoL
let g; // GoL
let cursors = 0; // variável para aumentar rato
let cursorsizeX = 3; // tamanho x do rato (que expande com hover)
let cursorsizeY = 3; // tamanho y do rato (que expande com hover)
let textProjectSize = 13; // tamanho inicial do texto
let textAlfa1 = 0; // alfa inicial do texto
let textalt = 78; // altura dos retângulos de texto
let cols; // colunas GoL
let rows; // linhas GoL
let size = 15; // tamanho para elementos GoL
let pborderx; // dist dos projetos às margens em x
let pbordery; // dist dos projetos às margens em y
let responsivedist; // dist entre projetos
let interactiondist; // dist para interação com projeto
let opened; // boolean para verificar se há algum projeto aberto 
let drag; // boolean para verificar se há arrasto
let draggedi = -1; // projeto a ser arrastado

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

     // cursor para ecrãs pequenos mas desktop
     if (!mobileCheck()) {
        stroke(255);
        fill(255);
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


// função que devolve se estamos num ecrã touch

function mobileCheck() {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


// função que devolve se o ecrã é pequeno

function mobile() {
    return (width < 650 && height < 800);
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
    if (draggedi != -1) {
        being[draggedi].curX = mouseX;
        being[draggedi].curY = mouseY;
    }
    if (drag) {
        for (let i = 0; i < being.length; i++) {
            being[i].toggle1 = false;
            being[i].toggle2 = false;
        }
    }
}


// cliques para ativar arrasto de projeto ou abrir projeto em novo separador

function mousePressed() {

    let trigger = true;
    for (let i = 0; i < being.length; i++) {
        if (!mobile()) {
            if (dist(mouseX, mouseY, being[i].curX, being[i].curY) < interactiondist) {
                trigger = false;
                if (being[i].arrive) {

                    if (being[i].link != "") window.open(being[i].link, '_blank');
                    break;
                }
            }
        } else {
            if (being[i].toggle1 && being[i].largx > 100 && abs(mouseX - being[i].curX) < being[i].largx / 2 && abs(mouseY - being[i].curY) < being[i].largy / 2 && being[i].arrive) {
                hyperlink = being[i].link;
                if (being[i].link != "") window.open(being[i].link, "_self");
                trigger = false;
                break;
            }
            being[i].toggle2 = false;
            if (dist(mouseX, mouseY, being[i].curX, being[i].curY) < interactiondist && being[i].arrive) {
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