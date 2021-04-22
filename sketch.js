var starImg,bgImg;
var star, starBody;
var fairy ,fairyImg;
var music;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png")
	music=loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
    fairy=createSprite(30,500,50,50)
    fairy.addImage(fairyImg);
	fairy.scale=0.3

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	music.play();


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(keyDown("right")){
	 fairy.x+=4 
  }
  if(keyDown("left")){
	fairy.x-=4 
 }
 if(star.y>430 && star.position.y>430){
	 Matter.Body.setStatic(starBody,true)
 }
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
