function enter(ele,id) {
    console.log(ele.value);
      if(ele.value.length==1)
      {
        document.getElementById(id).disabled = true;
      }
    }

function selectLetter(id)
{
   document.getElementById(id).style.backgroundColor="red";
}






