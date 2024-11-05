function homefunction(){
  const home = document.getElementById("home");
  home.scrollIntoView();
}
function calculatefunction(){
  const cal = document.getElementById("calculate-div");
  cal.scrollIntoView();
}
function searchfunction(){
  const input = document.getElementsByClassName("input")[0]; 
  
  if (!input || input.value.trim() === ""){ 
    alert("Enter something");
  }
  else{
    alert("Nothing is available right now");
  }
}

