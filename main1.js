
let cp = document.getElementById('cp');
let API ='https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-postal-code%40public&q=';


cp.addEventListener('keyup', (event) => {
    
    tecla_enter = event.keyCode;

    if(tecla_enter==13){
    let code = event.target.value;
    console.log(code);
    let pais = document.getElementById('pais').value;
    let API_URL = "";
    API_URL = API + pais + "+" + code;
    getData(API_URL);
    }
  
});

function getData(API_URL){
    
    fetch(API_URL)
    .then(response=>response.json() )
    .then(data => {
        
        let element = document.getElementById("col")
        element.innerHTML= "";
        for(var i = 0 ; i<data.nhits; i++){
             element.innerHTML+=`<option value="${data.records[i].fields.place_name},${data.records[i].fields.admin_name2},${data.records[i].fields.admin_name1},${data.records[i].geometry.coordinates[0]},${data.records[i].geometry.coordinates[1]}"
             selected>${data.records[i].fields.place_name},
             ${data.records[i].fields.admin_name2}, ${data.records[i].fields.admin_name1}</option>`
        
        }
        console.log(data)

    })
    .catch(err=>console.log(err))
   
    setTimeout(() => {
        mifuncion();
      }, "1500")
}

function mifuncion(){
    let col = document.getElementById('col').value
    var coma = ",";
    var arr = col.split(coma);
    document.getElementById("loc").value = arr[1];
    document.getElementById("mun").value = arr[2];
    document.getElementById("ref").value = arr[4] + ", " + arr[3];
}



