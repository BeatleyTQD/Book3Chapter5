import businesses from "./businessData.js"

//LIGHTNING EXERCISE ONE
//Targets the DOM and displays entire array
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>${business.addressFullStreet}</section>
    <section>${business.addressCity}</section>
    <section>${business["addressStateCode"]}</section>
    <section>${business.addressZipCode}</section>
  `
  outEl.innerHTML += "<hr/>"
});
///////////////////////////////////////////////



//LIGHTNING EXERCISE TWO
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }
    return inNewYork
})
console.log("New York Businesses", newYorkBusinesses)

// Array to contain all the manufacturin businesses
const manufacturingBusinesses = businesses.filter(business => {
    let manufacturingIndustry = false
    if (business.companyIndustry === "Manufacturing") {
        manufacturingIndustry = true;
    }
    return manufacturingIndustry
})

//Displays filtered businesses to the dom
const outL2 = document.querySelector("#lightning2")
outL2.innerHTML = "<h1>Manufacturing Businesses</h1>"
manufacturingBusinesses.forEach(business => {
    outL2.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>${business.addressFullStreet}</section>
    <section>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</section>
    `
})

/////////////////////////////////////////////////


//LIGHTNING EXERCISE THREE
outEl.innerHTML += "<h1>Purchasing Agents</h1>";
/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    const  agent = {
        fullName: business.purchasingAgent,
        company: business.companyName,
        phoneNumber: business.phoneWork
    }
    return agent
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.fullName.nameFirst} ${agent.fullName.nameLast}</h2>`;
  outEl.innerHTML += `<h2>${agent.company}</h2>`;
  outEl.innerHTML += `<h3>${agent.phoneNumber}</h3>`; 
  outEl.innerHTML += "<hr/>";
});