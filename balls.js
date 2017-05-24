canvas = document.getElementById("game");
ctx = canvas.getContext("2d");

function drawCircle(x, y, c) {
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2 * Math.PI);
	ctx.fillStyle = c;
	ctx.fill();
	ctx.stroke();
}

function clearScreen() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var particles = [];
for (i = 0; i < 100; i++) {
	particles.push([500, 250, (Math.random() * 10) - 5, (Math.random() * 10) - 5]);
}
var colors = ["red", "green", "yellow", "blue", "white", "orange"];

function loop(timestep) {
	clearScreen();
	for (i = 0; i < 100; i++) {
		drawCircle(particles[i][0], particles[i][1], colors[i % 6]);
		if (particles[i][0] + particles[i][2] > canvas.width - 20 || particles[i][0] + particles[i][2] < 20) {
			particles[i][2] = particles[i][2] * -1;
		}
		if (particles[i][1] + particles[i][3] > canvas.height - 20 || particles[i][1] + particles[i][3] < 20) {
			particles[i][3] = particles[i][3] * -1;
		}
		particles[i][0] = particles[i][0] + particles[i][2];
		particles[i][1] = particles[i][1] + particles[i][3];
	}
	return window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);