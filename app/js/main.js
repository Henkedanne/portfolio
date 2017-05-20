var grid = document.getElementById('content-area');

for (i = 0; i < 12; i++) {
	var box = document.createElement('div');
	box.className = "box"
	grid.appendChild(box);
	box.innerHTML = '<p>Hello</p>'
}