const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3a85454212mshfe09c9b1b69ab49p1aa3e3jsn784737adc563",
      "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
    },
  };
  
  let api = `https://currency-converter-pro1.p.rapidapi.com/convert?`;
  
  fetch(
    "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD",
    options
  )
    .then((res) => res.json())
    .then((data) => {
      GetFormData(data.result);
      GetToData(data.result);
    });
  
  let form_select = document.getElementById("form_select");
  let to_select = document.getElementById("to_select");
  let from_img = document.getElementById("from-img");
  let to_img = document.getElementById("to-img");
  let error = document.getElementById("error");
  let btn = document.getElementById("btn");
  let input = document.getElementById("input");
  let result = document.getElementById("result");
  
  error.style.display = "none";
  
  btn.addEventListener("click", () => {
    if (input.value) {
        fetch(api + `from=${form_select.value}&to=${to_select.value}&amount=${input.value}`, options)
          .then(response => response.json())
          .then(money => {
            input.value = ''
            result.innerHTML = `${input.value} ${form_select.value} = ${money.result.toFixed(2)} ${to_select.value} `
          })
    } else {
      error.style.display = "block";
  
      setTimeout(() => {
        error.style.display = "none";
      }, 3000);
    }
  });
  
  function GetFormData(param) {
    for (const key in param) {
      let myOption = document.createElement("option");
      myOption.innerHTML = key;
      form_select.appendChild(myOption);
    }
  }
  function GetToData(param) {
    for (const key in param) {
      let myOption = document.createElement("option");
      myOption.innerHTML = key;
      to_select.appendChild(myOption);
    }
  }
  from_img.src = `https://flagcdn.com/24x18/${"ae"}.png`;
  
  form_select.addEventListener("change", () => {
    let my_flag = form_select.value.toLocaleLowerCase().slice(0, 2);
    from_img.src = `https://flagcdn.com/24x18/${my_flag}.png`;
  });
  
  to_img.src = `https://flagcdn.com/24x18/${"ae"}.png`;
  
  to_select.addEventListener("change", () => {
    let my_flag = to_select.value.toLocaleLowerCase().slice(0, 2);
    to_img.src = `https://flagcdn.com/24x18/${my_flag}.png`;
  });
  