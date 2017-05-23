var grid = document.getElementById('content-area');

for (i = 0; i < 20; i++) {
	var box = document.createElement('div');
	box.className = "box"
	grid.appendChild(box);
	box.innerHTML = '<p>Hello</p>'
}