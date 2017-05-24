canvasHeight = 500;
canvasWidth = 1000;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

PIXI.loader.add("planet.png").add("rocket.png").load(setup);

var planet;
var rocket;
function setup() {
	planet = new PIXI.Sprite(PIXI.loader.resources["planet.png"].texture);
	planet.scale.x = .2;
	planet.scale.y = .2;
	planet.x = canvasWidth/2 - planet.width/2;
	planet.y = canvasHeight/2 - planet.height/2;
	
	rocket = new PIXI.Sprite(PIXI.loader.resources["rocket.png"].texture);
	rocket.scale.x = .2;
	rocket.scale.y = .2;
	rocket.rotation = 1.5707;
	rocket.x = canvasWidth/2 + rocket.height/2 + planet.width/2;
	rocket.y = canvasHeight/2 - rocket.width/2;
	/*rocket.anchor.x = .5;
	rocket.anchor.y = .5;*/
	
	stage.addChild(planet);
	stage.addChild(rocket);
}

function gameLoop() {
	requestAnimationFrame(gameLoop);
	renderer.render(stage);
}

gameLoop();