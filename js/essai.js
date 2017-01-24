/*déclaration des variables*/
var liste=[[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];
var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRé Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]]

/*Association des deux tableaux*/
var listeTotale = liste.concat(liste2);

//////////////////////////////////////Fonction qui affiche mon tableau////////////////////////////////////

function afficherUnTableau(monTableau){
	document.getElementById('classement').innerHTML="";

	//on fait partir de 0 pour parcourir le tableau
	for(var i=0; i<= monTableau.length -1; i++){
		var lignetab='<tr>';//ouverture de la ligne, declaration de ma nouvelle ligne
		
		for (j=0; j < monTableau[i].length; j++){
			lignetab+='<td>';//ajoute une colonne à ma ligne
			lignetab+=monTableau[i][j]; //ajoute dans la console la case correspondante.
			lignetab+='</td>';
			
			//document.getElementById('classement').inner.HTML+='<td>coucou</td>';
			//console.log(listeTotale[i][j]);
		}
		lignetab+='</tr>';
		//alert(listeTotale[i]); affichage ligne du tablaeu
		document.getElementById('classement').innerHTML+=lignetab;//document html qui va chercher l'element
																//qui a l'id classement 
	}
		//alert(listeTotale[0][1][0]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Fonction recherche par dossard///////////////////////////////////////

function search(recherche, listeTotale, type=2){ //type correspond 
	var resultat = new Array;

	if(type!=0&&type!=2&&type!=10&&type!=11){
		type='';
	}
	if (type==10){
		recherche = recherche.toUpperCase()+" ";//Affiche le nom en majuscule
		type=1;
	}
	if (type==11){
		recherche = " "+recherche.charAt(0).toUpperCase()+recherche.substring(1).toLowerCase();//recherche du prénom
		type=1;
	}
	
	for(var i=0; i<= listeTotale.length -1; i++){
		if(recherche == parseInt(recherche)){// vérifie si recherche est un entier
			if (recherche == listeTotale[i][type]){ ///recherche un entier
			resultat.push(listeTotale[i]);
		}
	}else {
		if(listeTotale[i][type].indexOf(recherche)!=-1){ ///recherche une chaine de caractere
			resultat.push(listeTotale[i]);
		}
	}
	}
	if (!resultat[0]){  //vide
		resultat = [["",'pas trouvé',""]];
	}
	afficherUnTableau(resultat);
}

//Fonction qui permet de rechercher un numéro de dossard et le num d'arrivée grace au classement ainsi que le nom et prénom///////
function clique(){
	var recherche = document.formulaireRecherche.recherche.value;
	var type = document.formulaireRecherche.choixdutype.value;
	// alert(recherche,+''+,type);
	if (type=='dossard'){
		search(recherche, listeTotale, 2);
	}else if (type=='nom'){
		search(recherche, listeTotale, 10);
	}else if (type=='prenom'){
		search(recherche, listeTotale, 11);
	}else {
		search(recherche, listeTotale, 0);
	}
}
afficherUnTableau(listeTotale);