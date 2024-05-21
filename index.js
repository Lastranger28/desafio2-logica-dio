function determinarSaldo(vitorias, derrotas){
    saldo = vitorias - derrotas
    return saldo
}

function determinarRank(vitorias, derrotas){

    determinarSaldo(vitorias,derrotas)

    let nivel

    if(saldo >= 101){
        nivel = "Imortal"
    }else if(saldo >= 91) {
        nivel = "Lendário"
    }else if(saldo >= 81){
        nivel = "Diamante"
    }else if(saldo >= 51){
        nivel = "Ouro"
    }else if(saldo >=21){
        nivel = "Prata"
    }else if(saldo >= 11){
        nivel = "Broze"
    }else{
        nivel = "Ferro"
    }

    console.log("O Herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel)
}

determinarRank(110, 5)