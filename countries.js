let country_data = []
async function FetchData() {
    let response = await fetch("countries.json")
    let data = await response.json()
    country_data = data
    addcountriestoselectTag(data)
}
FetchData()

function addcountriestoselectTag(arrdata) {
    for (let index = 0; index < arrdata.length; index++) {
        document.getElementById("country").innerHTML += `
         <option value="${arrdata[index].name}">${arrdata[index].name}</option>       
        `
    }
}

function populatestate(event) {
    let CountryName = event.target.value
    let sel_state = country_data.filter((value) => {
        return value.name == CountryName
    })
    let statelist = sel_state[0].states
    document.getElementById("states").innerHTML = " "
    for (let index = 0; index < statelist.length; index++) {
        document.getElementById("states").innerHTML += `
           <option value="${statelist[index].name}">${statelist[index].name}</option>
             `
    }
}

let statesdata = []
async function states() {
    let response = await fetch('ngn.json')
    let info = await response.json()

    statesdata = info

    for (let index = 0; index < info.length; index++) {
        document.getElementById('states').innerHTML += `
            <option value=" ${info[index].state}"> ${info[index].state}</option>
`
    }
}
states()

function fetchLGA(event) {
    let state_name = event.target.value
    let arrreturned = statesdata.filter((value) => {
        return value.state == state_name
    })
    let localgvnt = arrreturned[0].lgas
    document.getElementById('lga').innerHTML = " "
    for (let index = 0; index < localgvnt.length; index++) {
        document.getElementById('lga').innerHTML += `
            <option value=" ${localgvnt[index]}"> ${localgvnt[index]}</option>
            `
    }
}