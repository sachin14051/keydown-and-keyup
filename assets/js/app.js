const cl=console.log;

const info = document.getElementById("info");

const onKeydownhandler =(eve)=>{
cl(eve.target.value);
info.style.backgroundColor = `green`
  
}
const onkeyUp = (e) => {
    e.target.value
    info.style.backgroundColor = `red`
}

info.addEventListener("keyup", onkeyUp)
info.addEventListener("keydown", onKeydownhandler)