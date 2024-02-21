const mainheading=document.querySelector("#main-heading")
mainheading.style.textAlign="right"

const basket=document.querySelector("#basket-heading")
basket.style.color="brown"

const fruits=document.querySelector(".fruits")
fruits.style.backgroundColor="gray"
fruits.style.padding="30px"
fruits.style.margin="30px"
fruits.style.width="50%"
fruits.style.borderRadius="5px"
fruits.style.listStyleType="none"

const basketheading=document.querySelector("h2")
basketheading.style.marginLeft="30px"

//const fruitItems=document.querySelector(".fruit:nth-child(2)")
//fruitItems.style.backgroundColor="white"

const fruitItems=document.querySelectorAll(".fruit")
for (let i=0;i<fruitItems.length;i++)
  {
    fruitItems[i].style.backgroundColor="white"
    fruitItems[i].style.padding="10px"
    fruitItems[i].style.margin="10px"
    fruitItems[i].style.borderRadius="5px"
  }
const OddfruitItems=document.querySelectorAll(".fruit:nth-child(even)")
for(let i=0;i<OddfruitItems.length;i++)
{
  OddfruitItems[i].style.backgroundColor="brown"
  OddfruitItems[i].style.color="white"
}