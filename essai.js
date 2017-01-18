var selectElementsStartingWithA = function(array) {
	var tab = new Array;
	for(i=0; i<array.length; i++){
		if(array[i][0]=="a") {
			tab.push(array[i]);
		}
	}
    return tab ;