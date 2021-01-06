//Create variables here

var dog
var dogImage
var database
var position 
var dogHappy
var food,foodstock;
function preload()
{
  dogImage=loadImage("dogImg.png")
  dogHappy=loadImage("dogImg1.png")
	//load images here
}

function setup() {
  database=firebase.database()
  createCanvas(500,500);

	
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImage)
dog.scale=0.2


var petPosition=database.ref("Food")
petPosition.on("value",readPosition)

}


function draw() {  
  background(46,139,87)

if(keyWentDown(UP_ARROW)){
writePosition(position)
 dog.addImage(dogHappy)


}



  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+position,170,50);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",30,20);


}
function readPosition(data){
  position=data.val()
  
  
  }

function writePosition(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref("/").update({
    Food:x
  })
}



