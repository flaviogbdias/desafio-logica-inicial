
dadosDoHeroi("Hulk" , 124, 25)

 function dadosDoHeroi(heroi, nVitorias, nDerrotas){
    let saldoRank = (nVitorias - nDerrotas)
    let nivel = nivelDoHeroi(saldoRank)
  console.log("\nO "+ heroi + " tem de saldo de " + saldoRank + " está no nível de " + nivel + "\n")
 }  
 
 
 function nivelDoHeroi(saldoRank){
       if(saldoRank <= 10){
       return "Ferro"
     }else if(saldoRank <= 20){
       return "Bronze"
     }else if(saldoRank <= 50){
       return "Prata"
     }else if(saldoRank <= 80){
       return "Ouro"
     }else if(saldoRank <= 90){
       return "Diamante"
     }else if(saldoRank <= 100){
       return "Léndario"
     }else{
       return "Imortal"
     }
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 []