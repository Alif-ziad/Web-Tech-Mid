const fname=document.getElementById("fname");
const lname=document.getElementById("lname");


function formValidate(){
   if(fname.value.trim()===""||lname.value.trim()==="")
   { 
    alert("Both fields must be field!");
    return false;
   }
   if(fname.value.length<2||lname.value.length<2)
   {
    alert("Each field must have at least 2 characters!")
    return false;
   }
   return true;
}