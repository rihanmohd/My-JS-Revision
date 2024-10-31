const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropDown select");
console.log(dropdowns)
const button = document.querySelector("form button");

let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");


// console.log(countryList)


for(select of dropdowns){
    for(currencCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currencCode;
        newOption.value = currencCode;
        if(select.name === "from" && currencCode === "USD"){
            newOption.selected = "selected";

        } else if(select.name === "to" && currencCode === "INR"){
            newOption.selected = "selected"
        }
        select.append(newOption);
    }
    select.addEventListener("change", (e) =>{
        updateFlag(e.target);
    })
}

const updateFlag  = (elm)=>{
     let currCode = elm.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
     let img = elm.parentElement.querySelector("img");
      img.src = newSrc;

};



button.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "";
    }

    //  console.log(fromCurr.value);
    //  console.log(toCurr);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);

    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);
    console.log(amount);

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value} `
})


