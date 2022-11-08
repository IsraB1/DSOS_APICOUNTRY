
const API_COUNTRY ='https://restcountries.com/v3.1/all';

    fetch(API_COUNTRY)
    .then(response=>response.json() )
    .then(data => {
        let element = document.getElementById('pais')
        element.innerHTML= "";
       
        for(var i = 0 ; i<data.length; i++){
             if(data[i].name.common=="Mexico"){
                element.innerHTML+=`<option selected value="${data[i].cca2}" >${data[i].name.common}</option>`
                
            }

             else{
                element.innerHTML+=`<option value="${data[i].cca2}">${data[i].name.common}</option>`
             }
             
        
        }

        console.log("data")

    })
    .catch(err=>console.log(err))
   







