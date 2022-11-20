//Variables
animaux_data = [
    {
        "name": "chèvre",
        "photo": "./media/img/chevre.jpg",
        "description": "Bète d'animal de ferme, ça broute sec !!",
        "pays": "France",
        "link": "link"
    },
    {
        "name": "Chab",
        "photo": "./media/img/chab.jpg",
        "description": "Un véritable animal des plaines françaises et australiennes",
        "pays": "Australie",
        "link": "link"
    },
    {
        "name": "Serpent",
        "photo": "./media/img/serpent.jpg",
        "description": "il n'a pas els pieds sur terre",
        "pays": "Amériques",
        "link": "link"
    },
    {
        "name": "Ours du Bengal",
        "photo": "./media/img/ours_bengale.jpg",
        "description": "Parfait croisement entre un tigre et un ours au Bengal",
        "pays": "Bengal",
        "link": "link"
    }
];

//navigation bar
var boutonAcceuil = document.getElementById("linkAcceuil");
var boutonAnimaux = document.getElementById("linkAnimaux");
var boutonPerso = document.getElementById("linkPerso");
var boutonAudio = document.getElementById("linkAudio");
var boutonVideo = document.getElementById("linkVideo");
var boutonContact = document.getElementById("linkContact");

//content divs
var divAcceuil = document.getElementById("pageAcceuil");
var divAnimaux = document.getElementById("pageAnimaux");
var divPerso = document.getElementById("pagePerso");
var divAudio = document.getElementById("pageAudio");
var divVideo = document.getElementById("pageVideo");
var divContact = document.getElementById("pageContact");

//set Onclick for each nav button
boutonAcceuil.setAttribute('onclick', 'navigationBarClick(divAcceuil)');
boutonAnimaux.setAttribute('onclick', 'navigationBarClick(divAnimaux)');
boutonPerso.setAttribute('onclick', 'navigationBarClick(divPerso)');
boutonAudio.setAttribute('onclick', 'navigationBarClick(divAudio)');
boutonVideo.setAttribute('onclick', 'navigationBarClick(divVideo)');
boutonContact.setAttribute('onclick', 'navigationBarClick(divContact)');

//champs form ajout animal
var inputNomAnimal = document.getElementById("nom_animal");
var inputDescAnimal = document.getElementById("desc_animal");
var inputImageAnimal = document.getElementById("image_animal")
var inputPaysAnimal = document.getElementById("pays_animal");
var inputLienAnimal = document.getElementById("lien_animal");

//Functions
function generateTable() {
    animaux_data.forEach(animal => {
        document.getElementById("table_animaux").innerHTML +=
            '<tr>' +
            '<td>' + animal.name + '</td>' +
            '<td><img src="' + animal.photo + '" alt=""></td>' +
            '<td>' + animal.description + '</td>' +
            '<td>' + animal.pays + '</td>' +
            '<td>' + animal.link + '</td>' +
            '<td> <button>Modifier</button> <br> <button onclick="supprimerAnimal(this)">Supprimer</button> </td>' +
            '</tr>';
    });
}


function navigationBarClick(clickedDiv) {

    var displayedElement = document.getElementsByClassName("displayedDiv")

    displayedElement[0].setAttribute("class", "hiddenDiv");
    clickedDiv.setAttribute("class", "displayedDiv")

    dynamicHeader(clickedDiv);
}

function dynamicHeader(clickedDiv) {

    headerTitle = document.getElementById("headerTitle");
    switch (clickedDiv.getAttribute("id")) {
        case "pageAcceuil":
            headerTitle.innerHTML = "Bienvenue au ZOO des Zanimos";
            break;
        case "pageAnimaux":
            headerTitle.innerHTML = "Les Zanimos du Zoo";
            break;
        case "pagePerso":
            headerTitle.innerHTML = "Mon espace perso";
            break;
        case "pageAudio":
            headerTitle.innerHTML = "Audio du Zoo";
            break;
        case "pageVideo":
            headerTitle.innerHTML = "Video du Zoo";
            break;
        case "pageContact":
            headerTitle.innerHTML = "Contact du ZOO";
            break;
    }


}

function ajoutAnimal() {
    //values ajout animal form
    nouvelAnimal = { name: inputNomAnimal.value, photo: "", desc: inputDescAnimal.value, pays: inputPaysAnimal.value, link: inputLienAnimal.value }

    if (nouvelAnimal.name != "" && nouvelAnimal.desc != "" && nouvelAnimal.pays != "" && nouvelAnimal.link != "") {
        document.getElementById("table_animaux").innerHTML +=
            '<tr>' +
            '<td>' + nouvelAnimal.name + '</td>' +
            '<td><img src="' +'" alt=""></td>' +
            '<td>' + nouvelAnimal.desc + '</td>' +
            '<td>' + nouvelAnimal.pays + '</td>' +
            '<td>'+ nouvelAnimal.link+'</td>' +
            '<td> <button>Modifier</button> <br> <button onclick="supprimerAnimal(this)">Supprimer</button> </td>' +
            '</tr>';

        animaux_data.push(nouvelAnimal);

        //reset champs formulaires
        inputNomAnimal.value = "";
        inputDescAnimal.value = "";
        inputPaysAnimal.value = "";
        inputLienAnimal.value = "";
    } else {
        alert("Il faut remplir l'ensemble des champs pour ajouter un animal dans la table !");
    }
}

function supprimerAnimal(row) {
    console.log(row.parentNode.parentNode);
    row.parentNode.parentNode.remove();
}


//Script
generateTable();