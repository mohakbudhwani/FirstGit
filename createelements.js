
const para =document.createElement("h3");
const htext=document.createTextNode("Buy high quality organic fruits online");
para.appendChild(htext);

const divs=document.getElementsByTagName("div")
const firstdiv=divs[0]
firstdiv.appendChild(para)
para.style.fontStyle="italic"

const seconddiv=divs[1]
const secondpara=document.createElement("p")
const paratext=document.createTextNode("Total fruits: 4")
secondpara.appendChild(paratext)
console.log(secondpara)

const fruits=document.querySelector(".fruits")
seconddiv.insertBefore(secondpara,fruits)
secondpara.id="fruits-total"

