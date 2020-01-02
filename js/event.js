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
	event.target.value=Number(event.target.value)-event.deltaY/100;


}
document.getElementById("statA").onwheel=whl;
