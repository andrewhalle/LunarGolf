var canvasWidth = 1000;
var canvasHeight = 500;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);
var stage = new PIXI.Container();
document.body.appendChild(renderer.view);

var gameObject = {};
gameObject.time = 0;
gameObject.state = splash;
gameObject.images = ["images/blackhole.png", "images/moon.png", "images/planet.png", "images/rocket.png", "images/up.png", "images/over.png", "images/down.png"]  //replace this with function that gets all images in directory

PIXI.loader.add(gameObject.images).load(setup);

function setup() {
	gameObject.t = new Tink(PIXI, renderer.view);
	gameObject.sprites = {};
	for (var i = 0; i < gameObject.images.length; i++) {
		gameObject.sprites[gameObject.images[i]] = new PIXI.Sprite(PIXI.loader.resources[gameObject.images[i]].texture);
	}

	gameLoop();
}

function gameLoop() {
	requestAnimationFrame(gameLoop);
	gameObject.state();
	gameObject.time += 1/60;
	gameObject.t.update();
	renderer.render(stage);
}

function splash() {
	if (gameObject.time == 0) {
		var splashText = new PIXI.Text(
			"Two Nerds Games",
			{fontFamily: "Arial", fontSize: 32, fill: "white"}
		);
		splashText.alpha = 0;
		splashText.anchor.x = 0.5;
		splashText.anchor.y = 0.5;
		splashText.position.set(canvasWidth / 2, canvasHeight / 2);
		gameObject.sprites["splashText"] = splashText;
		stage.addChild(splashText);
	} else if (gameObject.time < 1) {
		gameObject.sprites["splashText"].alpha += 1 / 60;
		console.log("here");
	} else if (gameObject.time < 4) {
		gameObject.sprites["splashText"].alpha = 1;
	} else if (gameObject.time < 5) {
		gameObject.sprites["splashText"].alpha -= 1 / 60;
	} else {
		gameObject.state = mainMenu;
	}
}

function mainMenu() {
	stage.removeChild(gameObject.sprites["splashText"]);
	var title = new PIXI.Text(
		"Lunar Golf",
		{fontFamily: "Arial", fontSize: 32, fill: "white"}
	);
	title.anchor.x = 0.5;
	title.anchor.y = 0.5;
	title.position.set(canvasWidth / 2, canvasHeight / 4);
	gameObject.sprites["title"] = title;
	stage.addChild(title);
	var playButton = gameObject.t.button([PIXI.loader.resources["images/up.png"].texture, PIXI.loader.resources["images/over.png"].texture, PIXI.loader.resources["images/down.png"].texture], canvasWidth / 2, 0.6 * canvasHeight);
	playButton.anchor.x = 0.5;
	playButton.anchor.y = 0.5;
	gameObject.sprites["playButton"] = playButton;
	stage.addChild(playButton)
	//gameObject.state = play;       --> do this onclick
}