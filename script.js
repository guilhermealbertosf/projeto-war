let ter = [
    // América do Norte
    "<em id = 'america_norte'>Alasca</em>",
    "<em id = 'america_norte'>Vancouver</em>",
    "<em id = 'america_norte'>Groenlândia</em>",
    "<em id = 'america_norte'>Califórnia</em>",
    "<em id = 'america_norte'>Ottawa</em>",
    "<em id = 'america_norte'>Nova York</em>",
    "<em id = 'america_norte'>México</em>",
    "<em id = 'america_norte'>labrador</em>",
    "<em id = 'america_norte'>Manckenzie</em>",

    // América do Sul
    "<em class='america_sul'>Venezuela</em>",
    "<em class='america_sul'>Peru</em>",
    "<em class='america_sul'>Brasil</em>",
    "<em class='america_sul'>Argentina</em>",

    // Europa
    "<em class='europa'>Islândia</em>",
    "<em class='europa'>Inglaterra</em>",
    "<em class='europa'>Suécia</em>",
    "<em class='europa'>Alemanha</em>",
    "<em class='europa'>Polônia</em>",
    "<em class='europa'>França</em>",
    "<em class='europa'>Moscou</em>",

    // África
    "<em class='africa'>Argélia</em>",
    "<em class='africa'>Congo</em>",
    "<em class='africa'>Sudão</em>",
    "<em class='africa'>Egito</em>",
    "<em class='africa'>África do Sul</em>",
    "<em class='africa'>Madagascar</em>",

    // Ásia
    "<em class='asia'>Oriente Médio</em>",
    "<em class='asia'>Índia</em>",
    "<em class='asia'>Sibéria</em>",
    "<em class='asia'>China</em>",
    "<em class='asia'>Mongólia</em>",
    "<em class='asia'>Japão</em>",
    "<em class='asia'>Vietnã</em>",
    "<em class='asia'>Vladivostok</em>",
    "<em class='asia'>Tchita</em>",
    "<em class='asia'>Aral</em>",
    "<em class='asia'>Omsk</em>",
    "<em class='asia'>Dudinka</em>",
    

    // Oceania
    "<em class='oceania'>Austrália</em>",
    "<em class='oceania'>Nova Guiné</em>",
    "<em class='oceania'>Sumatra</em>",
    "<em class='oceania'>Bornéu</em>"
    ]

    function sortear(){
        let res = document.getElementById('res')
        let jog = document.getElementById('txtj')
        if(jog.value.length == 0){
            alert('Por favor, insira a quantidade de jogadores!')
            res.innerHTML=''
        }else{
            ter.sort(() => Math.random()-0.5)  
            j = Number(jog.value)
            l = ter.length
            res.innerHTML=`<p><strong>Jogador 1:</strong></p> `
            if(j == 2){// 2 jogadores
                for(let c = 0; c <= (l/2)-1; c++ ){
                    res.innerHTML+=`${ter[c]} > `
                }
                res.innerHTML+=`<p><strong>Jogador 2:</strong></p> `
                for( c = l/2 ; c <= (l)-1 ; c++ ){
                    res.innerHTML+=`${ter[c]} > `
                }
                //Remoção dos 2 objetivos
                res.innerHTML+=`<p>Esta partida ocorre somente entre duas pessoas, Portanto, <em>remova<em> as duas cartas de objetivo que ordenam a conquista de 18 e 24 territórios.</p>`
            }else if(j == 3){// 3 jogadores
                for(let c = 0; c <= (l/3)-1; c++){
                    res.innerHTML+=`${ter[c]} > `
                }
                res.innerHTML+=`<p><strong>Jogador 2:</strong></p>  `
                for(c = l/3 ; c <= (l*2/3)-1; c++){
                    res.innerHTML+=`${ter[c]} > `
                }
                res.innerHTML+=`<p><strong>Jogador 3:</strong></p>  `
                for(c = l*2/3; c <= l-1; c++ ) {
                    res.innerHTML+=`${ter[c]} > `
                }
            }else if(j == 4){// 4 jogadores
                
                for(let c = 0; c <= 11-1; c++ ){
                    res.innerHTML+=`${ter[c]} > `// certo
                }
                res.innerHTML+=`<p><strong>Jogador 2:</strong></p> `
                for(c = 11; c <= 22-1; c++){
                    res.innerHTML+=`${ter[c]} >` //certo
                }
                res.innerHTML+=`<p><strong>Jogador 3:</strong></p>  `
                for(c = 22; c <= 32-1; c++){
                    res.innerHTML+=`${ter[c]} > ` //certo
                }
                res.innerHTML+=`<p><strong>Jogador 4:</strong></p>  `
                for(c = 32; c <= 42-1; c++){
                    res.innerHTML+=`${ter[c]} > `
                }
            }else{
                window.alert("[ERRO]! Quantidade de jogadores inválida! ")
                res.innerHTML=`Função indisponível, tente novamente: Os números disponíveis são de 2 à 4`
            }
        }
        
    }