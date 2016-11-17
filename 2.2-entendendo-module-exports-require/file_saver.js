function saveFile(withName, names){

	//this is the module to file save - i think that the "fs" means "file save"
	const fs = require("fs");

	//iterate throught the array of names, saving each element in the file
	for (var i in names)
		fs.appendFile(withName, names[i] + "\n");
	
	console.log("Arquivos " + withName +" salvo!");//a simple print, just to show informations to the user
}


//it was the simpliest - but elegant - way that I find to export it :P
module.exports = {
	fSave : saveFile
}