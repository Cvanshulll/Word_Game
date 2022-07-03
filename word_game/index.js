

function enter(ele,id) {
    // console.log(ele.value);
    // console.log(id);
    var eleValue=ele.value;
      if(ele.value.length==1)
      {
        document.getElementById(id).disabled = true;
      }
      document.getElementById(id).innerHTML = eleValue;
    }

// function selectLetter(id)
// {
//    document.getElementById(id).style.backgroundColor="red";
// }

function myFunction(d) {
  // console.log(d);
  document.getElementById(d).style.background="red";
}


let arr =[];
let val =[];
function getRedSelected()
{
  var table = document.getElementsByTagName("table");
  var row = table[0].rows;
  // console.log(row);
  var r =0;
  while(row=table[0].rows[r++])
  {
    // console.log(row);
    var c=0;
    while(cell=row.cells[c++])
    {
      var id=cell.id;
      console.log(id);
      var ele=document.getElementById(id);
      // console.log(ele.innerHTML);
      if(ele.style.background=="red")
      {
        console.log("found");
        var r = document.getElementsByTagName(ele.innerHTML);
        console.log(r);
        arr.push(id);
        for(let i=0; i<arr.length; i++)
        {
          var td = document.getElementById(arr[i]);
          var input = td.innerHTML;
          val.push(input.id);
          console.log(val);
        }
      }
    }
  }
}

function print()
{
 
  
}









