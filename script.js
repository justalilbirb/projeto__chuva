let gotasCriadas = [];
let numeroGotas = 500;
/*let camadaBlur;  // comentado para teste
let numeroBlur  = 5;
let janelaRaio = 100;
let janelaLimpa = [];*/

//cria canva
function setup() {
    let larguraCanva = windowWidth;
    let alturaCanva = windowHeight;
    createCanvas(larguraCanva, alturaCanva);
    desenharGota();

    /*camadaBlur = createGraphics(width, height); // comentado para teste
    camadaBlur.noStroke();*/
}

//desenhos 
function draw() {
    background(126, 166, 230);
    desenhoChuva();


  /*  limparJanela();
    aplicarDesfoque(); */ // comentado para teste
}

//array gota
function desenharGota() {
    for (let i = 0; i < numeroGotas; i++) {
        let gotaItem = {
            posicaoX: random(width),
            posicaoY: random(height),
            tamanhoGota: random(5, 15),
            cor: color(0, random(150,200), random(200,255)),
            velocidade: random(0.2,3),
        }
        gotasCriadas.push(gotaItem);
    }
}

//desenha a chuva usando as gotas
function desenhoChuva() {
    for (let i = 0; i < gotasCriadas.length; i++) {
        const gotaItem = gotasCriadas[i];
        fill(gotaItem.cor);
        noStroke();
        ellipse(gotaItem.posicaoX, gotaItem.posicaoY, gotaItem.tamanhoGota, gotaItem.tamanhoGota);
        gotaItem.posicaoY += gotaItem.velocidade;
     
         // Reset das gotas quando atingem o fundo
        if (gotaItem.posicaoY > height) {
            gotaItem.posicaoY = 0;
            gotaItem.posicaoX = random(width); // nova posição x aleatória
        }
    }
}

//abaixo seriam as funcoes para efeito de janela embacada, porem ainda em desenvolvimento

 // comentado para teste
 /* function aplicarDesfoque() {
    // Limpa a camada de desfoque
    camadaBlur.clear();
    
    camadaBlur.fill(255, 255, 255, 150);
    camadaBlur.rect(0, 0, width, height);
    // Aplica o desfoque em toda a camada de chuva
    camadaBlur.filter(BLUR, numeroBlur);

    // Desenha o camadaBlur sobre a tela
    image(camadaBlur, 0, 0, width, height);
  }

  function limparJanela() {
    if (mouseX !== pmouseX || mouseY  !== pmouseY){
        janelaLimpa.push({
            x: mouseX,
            y: mouseY,
            opacidade: 255,
            //tempoDeVida: 255
        });
        console.log("Área limpa adicionada:", { x: mouseX, y: mouseY }); // Debug
    }
    console.log("Limpando janelas. Total de áreas:", janelaLimpa.length); // Debug
    for (let i = janelaLimpa.length -1; i >= 0; i--) {
        
        const area = janelaLimpa[i];
        
        camadaBlur.erase();
        //camadaBlur.fill(0, 0, 0, 255);
        camadaBlur.ellipse(area.x, area.y, janelaRaio * 2);
        camadaBlur.noErase();
        //fill(0, 0, 0, area.opacidade); // Cor azul
        //ellipse(area.x, area.y, janelaRaio * 2);
        
        area.opacidade -= 1;
        
        
        if (area.opacidade <= 0) {
            janelaLimpa.splice(i,1);     
            console.log("Área limpa removida:", area);       
        }
    }

    camadaBlur.filter(BLUR, numeroBlur);
  }*/ // comentado para teste