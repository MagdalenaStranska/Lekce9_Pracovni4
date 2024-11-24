document.querySelector("#reg_form").addEventListener("submit", (e) => {
    e.preventDefault()
    
    const jmeno = document.querySelector("#jmeno").value
    const vek = Number(document.querySelector("#vek").value)
    const heslo = document.querySelector("#heslo").value
    const bydliste = document.querySelector("#bydliste").value


    if(heslo.length > 12) {
        document.body.innerHTML = "Uspesne registrovan"
    } else {
        document.body.innerHTML = "Heslo je kratke"
    }
    

    console.log(`${jmeno} ${vek} ${heslo} ${bydliste}`)
})

document.querySelector("#heslo").addEventListener("input", (e) => {
    console.log(e.target.value)

    const pocetZnaku = e.target.value.length

    if(pocetZnaku < 8) {
        console.log(`Heslo je kratke, aktualne ma pouze ${pocetZnaku}`)
    } else {
        console.log(`Heslo je dostatecne dlouhe, aktualne ma ${pocetZnaku}`)
    }
})

document.querySelector("#jmeno").addEventListener("change", (e) => {
    console.log(e.target.value)
   
})