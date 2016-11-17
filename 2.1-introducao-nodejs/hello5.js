
const readline = require("readline");
const fileSaver = require("./file_saver");

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

var nomes = [];

function leiaNome(count){
	if(count --){
		rl.question("Digite um nome de país: ", function(line){
			nomes.push(line);
			leiaNome(count);		
		});
	}

	else{
 		gravaArquivo();
	}
}

function gravaArquivo(){

	var nomeArquivo = "file_default_name";

	rl.question("Informe um nome para o arquivo (sem .txt): ", (cNomeArquivo) => {
		nomeArquivo = cNomeArquivo + ".txt";
		rl.close();

		fileSaver.fSave(nomeArquivo, nomes);
	});
	
	

	
}

leiaNome(3);


