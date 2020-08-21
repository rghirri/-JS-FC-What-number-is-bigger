document.getElementById("CompareButton").onclick = function(){
    let NumberOne = Number(document.getElementById('Number_One').value);
    let NumberTwo = Number(document.getElementById('Number_Two').value);
    document.getElementById("demo").innerHTML = Compare_Numbers(NumberOne,NumberTwo);
    } 

function Compare_Numbers(a,b) {
        if (a > b){
            return a +' is the largest number';
        }
        else{
             return b +' is the largest number';           
        }        
  }
