const fs = require("fs");//um modulo fs do node, para escrever arquivos
const readline = require("readline");
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

var nomes = [];

function leiaNome(count){
	if(count --){
		rl.question("Digite um nome \n", function(line){
			nomes.push(line);
			leiaNome(count);		
		});
	}

	else{
 		gravaArquivo();
		rl.close();
	}
}

function gravaArquivo(){
	for (var i in nomes)
		fs.appendFile("nomes.txt", nomes[i] + "\n");
	
	console.log("Arquivos nomes.txt salvo!");
}

leiaNome(3);
