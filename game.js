var renderer = PIXI.autoDetectRenderer(1000, 500);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

PIXI.loader.add("bunny.png").load(setup);

var sprite;
function setup() {
	sprite = new PIXI.Sprite(PIXI.loader.resources["bunny.png"].texture);
	stage.addChild(sprite);
}

function gameLoop() {
	requestAnimationFrame(gameLoop);
	sprite.rotation += 0.1;
	renderer.render(stage);
}

gameLoop();