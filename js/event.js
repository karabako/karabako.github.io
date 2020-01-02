document.onkeydown = keydown;


function keydown(e) {
  var code = e.keyCode;
  // console.log(code);
  if (code == 13) {
    document.getElementsByTagName("button")[0].click();
  }
}


function whl(e) {
  e.preDefault();
	e.target.value=Number(e.target.value)-e.deltaY/100;
}
document.getElementById("statA").onwheel=whl;

function changeP(e){
  console.log(base[e.target.value])
  const stat=statCalc(base[e.target.value]);
  document.getElementById("statH")=stat[0][31];
  document.getElementById("statA")=stat[1][31];
  document.getElementById("statB")=stat[2][31];
  document.getElementById("statC")=stat[3][31];
  document.getElementById("statD")=stat[4][31];
  document.getElementById("statS")=stat[5][31];
}
document.getElementById("poke").onchange=changeP;
console.log(base[e.target.value])