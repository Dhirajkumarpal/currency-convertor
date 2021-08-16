fetch('https://api.frankfurter.app/currencies').then((data) => data.json())
      .then((data) => {
        console.log(data);
        var elem1=document.getElementById('curr1')
        var elem2=document.getElementById('curr2')
        var innerhtml=""
        for (const property in data) {
        innerhtml=innerhtml+'<option value="'+property+'">'+data[property]+'</option>'
           
  }
  elem1.innerHTML=innerhtml
  elem2.innerHTML=innerhtml
       

      });







function getCurrencyValue(){
   var amt1=document.getElementById("amt1").value ;
   var amt1=amt1.toString();
   var amt2=document.getElementById('amt2');
  var curr1=document.getElementById("curr1").value;
  var curr2=document.getElementById("curr2").value;
  fetch('https://api.frankfurter.app/latest?amount='+amt1+'&from='+curr1+'&to='+curr2)
        .then((val) => val.json())
        .then((val) => {
          console.log(Object.values(val.rates)[0]);
          amt2.value = Object.values(val.rates)[0];
        });

  


}


