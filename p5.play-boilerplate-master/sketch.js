var movingrectangle
var fixedrectangle
var object1,object2,object3,object4

function setup() {
  createCanvas(800,400);
movingrectangle=createSprite(250,324,109,54,);
movingrectangle.shapeColor="blue";
fixedrectangle=createSprite(135,210,56,46);
fixedrectangle.shapeColor="blue";
object1=createSprite(123,349,57,15)
object2=createSprite(223,349,57,15)
object3=createSprite(356,376,65,21)
object4=createSprite(524,132,32,25)
}

function draw() {
  background(0); 
  
  movingrectangle.x=mouseX
movingrectangle.y=mouseY

if (isTouching(movingrectangle,object3)){
  movingrectangle.shapeColor=" purple";
  fixedrectangle.shapeColor="purple";




}
 else{
  movingrectangle.shapeColor="blue"
   fixedrectangle.shapeColor="blue"



 }








  drawSprites();
}

function isTouching(obj1,obj2){

  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    && obj1.y-obj2.y<obj2.height/2+obj1.height/2
    && obj2.y-obj1.y<obj2.height/2+obj1.height/2
    &&obj2.x-obj1.x<obj2.width/2+obj1.width/2
     ){
     return true
   }
   else{
 return false
   }






}










