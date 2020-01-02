document.onkeydown = keydown;


function keydown(event) {
  var code = event.keyCode;
  // console.log(code);
  if (code == 13) {
    document.getElementsByTagName("button")[0].click();
  }
}


function whl(event) {
  event.preventDefault();
	document.getElementById("inputStat").value=Number(document.getElementById("inputStat").value)-event.deltaY/100;


}
document.getElementById("inputStat").onwheel=whl;
