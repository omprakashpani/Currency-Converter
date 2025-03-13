const url =
  "https://v6.exchangerate-api.com/v6/3886ae02969e202b4c90def1/latest/USD";

  const drop=document.querySelectorAll(".drp select")
  const btn=document.querySelector(".btn")
  const fromc=document.querySelector(".frm select")
  const toc=document.querySelector(".to select")
  let msg=document.querySelector(".fm")

  for (let select of drop) {
    for (cc in cl) {
      let newOption = document.createElement("option");
      newOption.innerText = cc;
      newOption.value = cc;
      if (select.name === "frm" && cc === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && cc === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }
  
    select.addEventListener("change", (evt) => {
      uf(evt.target);
    });
  }


  const uf = (element) => {
    let cc = element.value;
    let con= cl[cc];
    let source = `https://flagsapi.com/${con}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = source;
  };

  btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let at = document.querySelector(".amt input");
    let av = at.value;
  
    if (av === "" || av < 1) {
      av = 1;
      at.value = "1";
    }
  

      let response = await fetch(url); 
      
      let data = await response.json();
      let rate = data.conversion_rates[toc.value.toUpperCase()];
      console.log(rate);
    
        console.log(`Exchange rate from ${fromc.value.toUpperCase()} to ${toc.value.toUpperCase()} is ${rate}`);
        let fa=av*rate;
    msg.innerText=`${av} ${fromc.value} = ${fa} ${toc.value}`;
     
       
    
    
  });