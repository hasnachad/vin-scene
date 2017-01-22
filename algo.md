Algo recherche
{recherche toutes les infos nom, prénom, dossard, numéro d'arrivée}

Variables	recherche : chaîne de caractere
			résultat : chaîne de caractere

Début 
	Afficher ("Num de dossard ?")
	Saisir (recherche)
	{boucle}
	Pour i allant de à à longueur de tableau -1 au pas de 1
		Faire 	Si recherche==tableau[i][2]
					Alors resultat[] = tableau[i]
				Fsi
	FinPour
	Si resultat[0] existe
		resultat[0]="pas trouvé"
	Fsi

	Afficher resultat
Fin


