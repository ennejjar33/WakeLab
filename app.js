
axios.get("http://localhost:3000/api/activites")
    .then(res => {
        let activites = res.data
        console.log(activites)
        dataAffichage(activites)
        validationForm(activites)
        filtrage(activites)
        rechercheActiv(activites)

    })

    .catch(err => {
        console.log(err)
    })


//////////////AFFICHAGE////////////


// const affichageAll = document.getElementById("affichageAll")
// function dataAffichage(activites) {
//     activites.forEach(activite => {
//         affichageAll.innerHTML += ` <div class="border border-slate-500 bg-white text-black px-5 py-2 rounded-xl">

//             <div class="flex justify-between justify-items px-5 py-2">
//                 <p class="border bg-[#F6E7A6] text-black px-5 py-2 rounded-full text-sm w-30">${activite.theme}</p>
//                 <p><i class="fa-regular fa-clock"></i> ${activite.duree} min</p>
//             </div>

//             <p class=" bg-white text-red-700 px-5 py-2 rounded-full font-medium text-l">${activite.titre}</p>
//             <div>
//                 <p class=" bg-white text-black font-medium px-5 py-2 rounded-full text-sm ">Objectifs:</p>
//                 <p class=" bg-white text-black px-5 py-2 rounded-full text-sm ">${activite.objectifs}</p>
//             </div>

//             <div>
//                 <p class=" bg-white text-black px-5 py-2 font-medium rounded-full text-sm ">Description: </p>
//                 <p class=" bg-white text-black px-5 py-2 rounded-full text-sm ">${activite.description}</p>
//             </div>




//             <div class="flex justify-between gap-5 justify-items px-5 py-2">
//                 <div>
//                     <p class=" bg-white text-green-700 border px-5 py-2 rounded-full text-sm ">${activite.auteur}</p>
//                 </div>

//                 <div class="flex justify-end gap-5 justify-items px-5 py-2">
//                     <button class="border bg-teal-300 text-black px-3 py-2 rounded-full text-sm w-10"><i
//                             class="fa-solid fa-pen"></i></button> 
//                     <button class="border bg-red-300 text-black px-3 py-2 rounded-full text-sm w-10"><i
//                             class="fa-solid fa-trash"></i></button>
//                 </div>
//             </div>



//         </div> `
//     })


// }
const affichageAll = document.getElementById("affichageAll")
function dataAffichage(activites) {
    activites.forEach(activite => {
        let carte = document.createElement("div")
        carte.setAttribute("class", "border border-slate-500 bg-white text-black px-5 py-2 rounded-xl")

        let lineTheme = document.createElement("div")
        lineTheme.setAttribute("class", "flex justify-between justify-items px-5 py-2")
        let theme = document.createElement("p")
        theme.setAttribute("class", "border bg-[#F6E7A6] text-black px-5 py-2 rounded-full text-sm w-30")
        theme.textContent = activite.theme

        let lineDuree = document.createElement("p")
        let lineIcone = document.createElement("i")
        lineIcone.setAttribute("class", "fa-regular fa-clock")
        let texteDuree = document.createElement("span")
        texteDuree.textContent = " " + activite.duree + " min"

        lineDuree.appendChild(lineIcone)
        lineDuree.appendChild(texteDuree)

        lineTheme.appendChild(theme)
        lineTheme.appendChild(lineDuree)

        let titre = document.createElement("p")
        titre.setAttribute("class", "bg-white text-red-700 px-5 py-2 rounded-full font-medium text-l")
        titre.textContent = activite.titre

        let lineObjectifs = document.createElement("div")
        let childOneObjectifs = document.createElement("p")
        childOneObjectifs.setAttribute("class", "bg-white text-black font-medium px-5 py-2 rounded-full text-sm")
        childOneObjectifs.textContent = "Objectifs:"
        let childDeuxObjectifs = document.createElement("p")
        childDeuxObjectifs.setAttribute("class", "bg-white text-black px-5 py-2 rounded-full text-sm")
        childDeuxObjectifs.textContent = activite.objectifs
        lineObjectifs.appendChild(childOneObjectifs)
        lineObjectifs.appendChild(childDeuxObjectifs)

        let lineDescription = document.createElement("div")
        let childOneDescription = document.createElement("p")
        childOneDescription.setAttribute("class", "bg-white text-black font-medium px-5 py-2 rounded-full text-sm")
        childOneDescription.textContent = "Description:"
        let childDeuxDescription = document.createElement("p")
        childDeuxDescription.setAttribute("class", "bg-white text-black px-5 py-2 rounded-full text-sm")
        childDeuxDescription.textContent = activite.description
        lineDescription.appendChild(childOneDescription)
        lineDescription.appendChild(childDeuxDescription)

        let globale = document.createElement("div")
        globale.setAttribute("class", "flex justify-between gap-5 justify-items px-5 py-2")

        let lineAuteur = document.createElement("div")
        let Auteur = document.createElement("p")
        Auteur.setAttribute("class", "bg-white text-green-700 border px-5 py-2 rounded-full text-sm")
        Auteur.textContent = activite.auteur
        lineAuteur.appendChild(Auteur)

        let lineButton = document.createElement("div")
        lineButton.setAttribute("class", "flex justify-end gap-5 justify-items px-5 py-2")

        let btnModifier = document.createElement("button")
        btnModifier.setAttribute("class", "border bg-teal-300 text-black px-3 py-2 rounded-full text-sm w-10")
        let iconModifier = document.createElement("i")
        iconModifier.setAttribute("class", "fa-solid fa-pen")
        btnModifier.appendChild(iconModifier)

        let btnSuprimer = document.createElement("button")
        btnSuprimer.setAttribute("class", "border bg-red-300 text-black px-3 py-2 rounded-full text-sm w-10")
        let iconSuprimer = document.createElement("i")
        iconSuprimer.setAttribute("class", "fa-solid fa-trash")
        btnSuprimer.appendChild(iconSuprimer)

        lineButton.appendChild(btnModifier)
        lineButton.appendChild(btnSuprimer)

        globale.appendChild(lineAuteur)
        globale.appendChild(lineButton)

        carte.appendChild(lineTheme)
        carte.appendChild(titre)
        carte.appendChild(lineObjectifs)
        carte.appendChild(lineDescription)
        carte.appendChild(globale)

        affichageAll.appendChild(carte)
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
        if ( duree.value >= 10 && duree.value <= 20) {

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
            duree: Number(duree.value),
            description: description.value,
            auteur: "Youssef Alaoui",
        }


        formAjoute.classList.add("hidden")

        console.log(newActivite)
        try {
            axios.post("http://localhost:3000/api/activites", newActivite)
                .then(res => { console.log(res) })

            console.log(activites)
        } catch (err) {
            console.log(err.response);

        }
    })

}

/////////FILTRAGE/////////




let tous = document.querySelectorAll(".tous")

function filtrage(activites) {
    
    tous.forEach(btn=>{
        
        btn.addEventListener("click", (e)=>{
               
                let filt = activites.filter(activite => activite.theme.toLowerCase() === e.target.dataset.type.toLowerCase())

                if(e.target.dataset.type.toLowerCase() ==="tous"){
                     affichageAll.innerHTML = ""
                     dataAffichage(activites)
                }
                else if (filt.length == 0){
                    affichageAll.innerHTML = `<div class="flex flex-col gap-3 justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-20">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                      </svg>
                      <p class="">no result found </p>  
                       </div>`
                    
                }
                else{
                     affichageAll.innerHTML = ""
                     dataAffichage(filt)  
                }            
        })

    })
    
}


//////////////RECHERCHE//////////////

function rechercheActiv(activites){
    const btnRecherche = document.getElementById("btnRecherche")
    btnRecherche.addEventListener("keydown", ()=>{
        affichageAll.innerHTML=""
        let recherche = activites.filter(activite => activite.titre.toLowerCase().includes(btnRecherche.value.toLowerCase()))
        if(recherche.length != 0){
            dataAffichage(recherche)
        }else{
            affichageAll.innerHTML = `<div class="flex flex-col gap-3 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
            <p class="">no result found </p>  
            </div>`

        }
    })
}











