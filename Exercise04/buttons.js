
function changeColor()
{
	let paragraph = document.getElementById("paragraph");
	paragraph.style.borderColor = document.getElementById('bColor').value;
	paragraph.style.backgroundColor = document.getElementById('bgColor').value;
	paragraph.style.borderWidth = document.getElementById('bWidth').value;
}
