
axios.get("http://localhost:3000/api/activites")
    .then(res => {
        let activites = res.data
        console.log(activites)
        dataAffichage(activites)
        filtrageBtnJeux(activites)
        validationForm(activites)

    })

    .catch(err => {
        console.log(err)
    })


//////////////AFFICHAGE////////////


const affichageAll = document.getElementById("affichageAll")
function dataAffichage(activites) {
    activites.forEach(activite => {
        affichageAll.innerHTML += ` <div class="border border-slate-500 bg-white text-black px-5 py-2 rounded-xl">

            <div class="flex justify-between justify-items px-5 py-2">
                <p class="border bg-[#F6E7A6] text-black px-5 py-2 rounded-full text-sm w-30">${activite.theme}</p>
                <p><i class="fa-regular fa-clock"></i> ${activite.duree} min</p>
            </div>

            <p class=" bg-white text-red-700 px-5 py-2 rounded-full font-medium text-l">${activite.titre}</p>
            <div>
                <p class=" bg-white text-black font-medium px-5 py-2 rounded-full text-sm ">Objectifs:</p>
                <p class=" bg-white text-black px-5 py-2 rounded-full text-sm ">${activite.objectifs}</p>
            </div>

            <div>
                <p class=" bg-white text-black px-5 py-2 font-medium rounded-full text-sm ">Description: </p>
                <p class=" bg-white text-black px-5 py-2 rounded-full text-sm ">${activite.description}</p>
            </div>




            <div class="flex justify-between gap-5 justify-items px-5 py-2">
                <div>
                    <p class=" bg-white text-green-700 border px-5 py-2 rounded-full text-sm ">${activite.auteur}</p>
                </div>

                <div class="flex justify-end gap-5 justify-items px-5 py-2">
                    <button class="border bg-teal-300 text-black px-3 py-2 rounded-full text-sm w-10"><i
                            class="fa-solid fa-pen"></i></button> 
                    <button class="border bg-red-300 text-black px-3 py-2 rounded-full text-sm w-10"><i
                            class="fa-solid fa-trash"></i></button>
                </div>
            </div>



        </div> `
    })


}




const formAjoute = document.getElementById("formAjoute");

document.getElementById("btnForm").addEventListener("click", () => {
    formAjoute.classList.remove("hidden");
});


document.getElementById("btnAnnuler").addEventListener("click", () => {
    formAjoute.classList.add("hidden");
});

/////////////// FORMILATION/////////////////////

const btnForm = document.getElementById("btnForm")
const formActivite = document.getElementById("formActivite")
function validationForm(activites) {
    
    const titre = document.getElementById("titre")
    const description = document.getElementById("description")
    const duree = document.getElementById("duree")
    const objectifs = document.getElementById("objectifs")
    const theme = document.getElementById("theme")
    
    
    formActivite.addEventListener("submit", (event) => {
        event.preventDefault()
        
        if (/^[a-zA-Z0-9\s]{5,100}$/.test(titre.value)) {
            
        } else {
            titre.value = ""
            alert("Veuillez vérifier les informations de titre, s'il vous plaît.")
            return
        }
        if (/^[0-9]{1,2}/.test(duree.value) && duree.value >= 10 && duree.value <= 20) {
            
        } else {
            duree.value = ""
            alert("Veuillez vérifier les informations de duree, s'il vous plaît.")
            return
        }
        if (/^[a-zA-Z0-9\s]{4,50}$/.test(objectifs.value)) {
            
        } else {
            objectifs.value = ""
            alert("Veuillez vérifier les informations d'objectif, s'il vous plaît.")
            return
        }
        
        if (/^[a-zA-Z0-9\s]{20,1000}$/.test(description.value)) {
            
        } else {
            description.value = ""
            alert("Veuillez vérifier les informations de descriotion, s'il vous plaît.")
            return
            
        }
        
        let newActivite = {
           
            titre: titre.value,
            theme: theme.value,
            objectifs: objectifs.value,
            duree: duree.value,
            description: description.value,
            auteur: "Youssef Alaoui",
        }
        
        activites.push(newActivite)
        
        formAjoute.classList.add("hidden")
        
        console.log(newActivite)
        
    })
    
}

/////////FILTRAGE/////////

const btnJeux = document.getElementById("btnJeux")
function filtrageBtnJeux(activites) {
    btnJeux.addEventListener("click", (event) => {
        event.preventDefault()
        affichageAll.innerHTML = ""
        let jeux = activites.filter(activite => activite.theme == "jeu")
        dataAffichage(jeux)
    })
}
