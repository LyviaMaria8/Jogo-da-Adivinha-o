function jogarAdivinhacao() {
    let jogarNovamente = true;
   
    while (jogarNovamente) {
      const numeroSecreto = Math.floor(Math.random() * 100) + 1;
      const maxTentativas = 5;
      let tentativas = 0;
      let acertou = false;
   
      console.log(" Jogo de Adivinhação");
      console.log("Tente adivinhar o número entre 1 e 100");
      console.log(`Você tem ${maxTentativas} tentativas.`);
   
   
      while (tentativas < maxTentativas) {
        let entrada = prompt(`Tentativa ${tentativas + 1}: Digite seu palpite (1 a 100):`);
   
        let palpite = Number(entrada);
   
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
          alert("Entrada inválida! Digite um número entre 1 e 100.");
          continue;
        }
   
        tentativas++;
   
        if (palpite === numeroSecreto) {
          alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s).`);
          acertou = true;
          break;
        } else if (palpite < numeroSecreto) {
          alert("O número secreto é MAIOR.");
        } else {
          alert("O número secreto é MENOR.");
        }
      }
   
      if (!acertou) {
        alert(`Você usou todas as tentativas. O número secreto era ${numeroSecreto}.`);
      }
   
      let resposta = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
      if (resposta !== 's') {
        jogarNovamente = false;
        alert("Obrigado por jogar!");
      }
    }
   }

   window.onload = jogarAdivinhacao;
   