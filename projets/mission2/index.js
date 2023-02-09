class Website {

	function ajouterLigne() {
		//à faire
	}

	function remplir() {
		const tabDesc = new Array("Portable", "bureau", "ram 8go", "clef usb 16go", "souris", "ecran 17 pouces");

		for (var i=0; i < listeDesc.length; i++) {

			let idesc = Math.floor(tabDesc.length * Math.random());
			listeDesc[i].value = tabDesc[idesc];

			let qte = Math.floor(10 * Math.random() + 1);
			let prix = Math.floor(100 * Math.random() + 1);
			listeQte[i].value = qte;
			listePrix[i].value = prix;
		}
	}
}