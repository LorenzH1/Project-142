
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	canvas.parent('canvas');
	instializeInSetup(mario);
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotPoses);
}

function modalLoaded(){
	console.log("modalLoaded");
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(results);
	}
}

function draw() {
	game()
}






