const selectedHexColor = document.getElementById('favcolor')
const colorContainer = document.getElementsByClassName('color-scheme')
const hexString = document.getElementsByClassName('hex-string')
const modeColor = document.getElementById('mode-color')
const btnGetColor = document.getElementById('btn-getschemecolor')


function fillColor() {
  // remove # from string 
  let color = selectedHexColor.value.substring(1)
  fetch("https://www.thecolorapi.com/scheme?hex=" + color + "&mode=" + modeColor.value)
  .then(response => response.json())
  .then(data => {
    for (let i=0; i < colorContainer.length; i++ ) {
      colorContainer[i].style.backgroundColor = data.colors[i].hex.value
      hexString[i].textContent = data.colors[i].hex.value
    }
  })
}

function selfCopy(e) {
  const elem = document.createElement('textarea');
  elem.value = e;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
 alert(e + " copied to clipboard")
}

btnGetColor.addEventListener("click", fillColor)

fillColor() // call function on start