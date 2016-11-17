
const fileSaver = require("./file_saver");

//creating a readline interface
const rl = require("readline").createInterface({
	input:process.stdin,
	output:process.stdout
});

//we'll fill and save this list of names
var names = [];

//a recursive method to 
function readNewName(timesToRead){
	
	//we'll still calling this method and performing this action while the const value isnt 0 - false
	if( timesToRead-- ){

		//here is the question and also a closure - callback - where we'll call the read new name again or save the file.
		rl.question("Type the name of a country: ", function(line){
			names.push(line);
			readNewName(timesToRead);		
		});
	}//if timesToRead --

	//if all our process is ended, we'll save it in a file
	else{
		askANameToSaveInAFile();
	}
}


//this method will call
function askANameToSaveInAFile(){

	//the default file name
	var fileName = "file_default_name";

	rl.question("Put here a file name - without .txt: ", (userNameFile) => {
		fileName = userNameFile + ".txt";
		rl.close();

		fileSaver.fSave(fileName, names);
	});
	
	

	
}

readNewName(3);


