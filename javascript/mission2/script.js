function ajouterLigne() {
	let newLi = document.getElementById("modeleLigne").cloneNode(true);
	let lastLi = document.getElementById("lastLigne");
	let pere = document.getElementById("table_inv").firstChild.nextSibling;
	pere.insertBefore(newLi, lastLi);
}

function remplir() {
	let listePrix = document.getElementsByClassName("prix");
	let listeQte = document.getElementsByClassName("qte");
	let listeDesc = document.getElementsByClassName("desc");

	const tabDesc = new Array("Portable", "bureau", "ram 8go", "clef usb 16go", "souris", "ecran 17 pouces");

	for (let i=0; i < listeDesc.length; i++) {

		let idesc = Math.floor(tabDesc.length * Math.random());
		listeDesc[i].value = tabDesc[idesc];

		let qte = Math.floor(10 * Math.random() + 1);
		let prix = Math.floor(100 * Math.random() + 1);
		listeQte[i].value = qte;
		listePrix[i].value = prix;
	}
}

function calculer() {

	let total = 0;

	let listePrix = document.getElementsByClassName("prix");
	let listeQte = document.getElementsByClassName("qte");
	let listeTtl = document.getElementsByClassName("totalLigne");

	let sousTotal = document.getElementsByClassName("sousTotal");
	let remise = document.getElementsByClassName("remise");
	let totalMoinsRemise = document.getElementsByClassName("sousTotalAvecRemise");
	let impot = document.getElementsByClassName("imposition");
	let tax = document.getElementsByClassName("totalTaxe");
	let livraison = document.getElementsByClassName("prixLivraison");
	let soldeDu = document.getElementsByClassName("soldeDu");

	// Calcul du total de chaque article
	for (let i=0; i < listePrix.length; i++) {
		listeTtl[i].value = parseInt(listeQte[i].value)*parseInt(listePrix[i].value);
		total = total + parseInt(listeTtl[i].value);
	}

	// Calcul et affichage de solde dû
	sousTotal[0].value = total;
	totalMoinsRemise[0].value = (total - remise[0].value);
	taxe = impot[0].value / 100;
	tax[0].value = (totalMoinsRemise[0].value * taxe).toFixed(2);
	soldeDu[0].value = parseInt(totalMoinsRemise[0].value) + parseInt(tax[0].value) + parseInt(livraison[0].value);
}

function annuler() {

	let listePrix = document.getElementsByClassName("prix");
	let listeQte = document.getElementsByClassName("qte");
	let listeTtl = document.getElementsByClassName("totalLigne");
	let listeDesc = document.getElementsByClassName("desc");

	let sousTotal = document.getElementsByClassName("sousTotal");
	let remise = document.getElementsByClassName("remise");
	let totalMoinsRemise = document.getElementsByClassName("sousTotalAvecRemise");
	let impot = document.getElementsByClassName("imposition");
	let tax = document.getElementsByClassName("totalTaxe");
	let livraison = document.getElementsByClassName("prixLivraison");
	let soldeDu = document.getElementsByClassName("soldeDu");

	// Mise à 0 de toutes les valeurs
	for (let i=0; i < listePrix.length; i++) {
		listePrix[i].value = 0;
		listeQte[i].value = 0;
		listeTtl[i].value = 0;
		listeDesc[i].value = "desc";
	}
	sousTotal[0].value = 0;
	remise[0].value = 0;
	totalMoinsRemise[0].value = 0;
	impot[0].value = 0;
	tax[0].value = 0;
	livraison[0].value = 0;
	soldeDu[0].value = 0;

	window.location.reload();
}