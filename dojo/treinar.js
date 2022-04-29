// 1 - Crie uma classe para representar um jogador de futebol, com os atributos nome, posição, data de nascimento, nacionalidade, altura e peso. Crie um método para imprimir todos os dados do jogador, um método para calcular a idade do jogador e outro método para mostrar quanto tempo falta para o jogador se aposentar. Para isso, considere que os jogadores da posição de defesa se aposentam em média aos 40 anos, os jogadores de meio-campo aos 38 e os atacantes aos 35.

class Jogador{
    constructor(nome, posicao, dataNasc, nacionalidade, altura, peso){
        this.nome = nome;
        this.posicao = posicao;
        this.dataNasc = dataNasc;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
    }

    imprimirDados(){
        return (`Nome: ${this.nome}
        Posição: ${this.posicao}
        Data de nascimento: ${this.dataNasc}
        Nacionalidade: ${this.nacionalidade}
        Altura: ${this.altura}
        Peso: ${this.peso}`)
    }

    calcularIdade(ano){
        let idade = ano - this.dataNasc
        return(`Idade: ${idade}`)
    }

    aposentadoria(ano){
        let idadeAposentadoria = 0
        let idade = ano - this.dataNasc
        if (this.posicao == "defesa"){
            idadeAposentadoria = 40 - idade
            return (`O jogador se aposentará com 40 anos, faltam ${idadeAposentadoria} anos`)
        } else if (this.posicao == "meio-campo"){
            idadeAposentadoria = 38 - idade
            return (`O jogador se aposentará com 38 anos, faltam ${idadeAposentadoria} anos`)
        } else {
            idadeAposentadoria = 35 - idade
            return (`O jogador se aposentará com 35 anos, faltam ${idadeAposentadoria} anos`)
        }
    }
}

const jogador = new Jogador("Amanda", "meio-campo", "1996", "Brasil", "1.77", "83kg")
console.log(jogador.imprimirDados())
console.log(jogador.calcularIdade(2022))
console.log(jogador.aposentadoria(2022))
