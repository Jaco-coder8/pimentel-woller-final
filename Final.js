var playerTurn = 0;
var NUM_COLS = 10;
var NUM_ROWS = 10;
var tiles = [];
var SYMBOLS = ["X","O"];
var max_l = 5;
var min_l = 2;
var numShips = 4;
var currentScene = 0;
var m = millis();

/* Layout of numbers on the board for array 
0   3   6
1   4   7
2   5   8
*/

var drawShirt=function(xPosition,yPosition,size){//shirt
    noStroke();
    fill(0, 0, 0);
    rect(xPosition+63*size/100,yPosition+150*size/100,75*size/100,75*size/100);
    quad(xPosition+130*size/100,yPosition+150*size/100,xPosition+130*size/100,yPosition+180*size/100,xPosition+170*size/100,yPosition+210*size/100,xPosition+170*size/100,yPosition+180*size/100);
    quad(xPosition+70*size/100,yPosition+150*size/100,xPosition+70*size/100,yPosition+180*size/100,xPosition+30*size/100,yPosition+210*size/100,xPosition+30*size/100,yPosition+180*size/100);
};
var drawHead=function(xPosition,yPosition,size){//head
    fill(250,220,196);
    stroke(0, 0, 0);
    arc(xPosition+100*size/100,yPosition+142*size/100,54*size/100,57*size/100,0,360);//neck
    noStroke();
    ellipse(xPosition+100*size/100,yPosition+100*size/100,100*size/100,115*size/100);
};
var drawEyes=function(xPosition,yPosition,size){//eyes
    fill(255, 255, 255);
    ellipse(xPosition+80*size/100,yPosition+80*size/100,25*size/100,15*size/100);
    ellipse(xPosition+120*size/100,yPosition+80*size/100,25*size/100,15*size/100);
    fill(153,77,0);
    ellipse(xPosition+80*size/100,yPosition+80*size/100,7*size/100,7*size/100);
    ellipse(xPosition+120*size/100,yPosition+80*size/100,7*size/100,7*size/100);
};
var drawMouth=function(xPosition,yPosition,size) {//mouth
    stroke(0, 0, 0);
    fill(235,181,184);
    arc(xPosition+100*size/100,yPosition+126*size/100,53*size/100,25*size/100,0,180);
    line(xPosition+75*size/100,yPosition+125*size/100,xPosition+125*size/100,yPosition+125*size/100);
    noStroke();
};
var drawEars=function(xPosition,yPosition,size){//ears
    stroke(0, 0, 0);
    fill(250, 220,196);
    arc(xPosition+150*size/100,yPosition+100*size/100,20*size/100,25*size/100,-100,100);
    arc(xPosition+50*size/100,yPosition+100*size/100,20*size/100,25*size/100,80,280);
};
var drawNose = function(xPosition,yPosition,size){//nose
    bezier(xPosition+100*size/100,yPosition+95*size/100,xPosition+121*size/100,yPosition+122*size/100,xPosition+92*size/100,yPosition+120*size/100,xPosition+96*size/100,yPosition+112*size/100);
    noStroke();
};
var drawHat=function(xPosition,yPosition,size){//hat
    fill(26, 0, 255);
    stroke(255, 0, 0);
    strokeWeight(2);
    arc(xPosition+100*size/100,yPosition+28*size/100,113*size/100,76*size/100,40,140);
    quad(xPosition+115*size/100,yPosition+15*size/100,xPosition+135*size/100,yPosition+45*size/100,xPosition+65*size/100,yPosition+45*size/100,xPosition+85*size/100,yPosition+15*size/100);
    fill(255, 255, 255);
};
var drawText=function(xPosition,yPosition,size){//text
    textSize(16*size/100);
    text("NY",xPosition+90*size/100,yPosition+35*size/100);
    textSize(28*size/100);
    text("JW",xPosition+80*size/100,yPosition+200*size/100);
};
var drawBitmojiW=function(xPosition,yPosition,size){ //draws the entire bitmoji
    xPosition -=50;
    yPosition -=50;
    drawShirt(xPosition,yPosition,size);
    drawHead(xPosition,yPosition,size);
    drawEyes(xPosition,yPosition,size);
    drawMouth(xPosition,yPosition,size);
    drawEars(xPosition,yPosition,size);
    drawNose(xPosition,yPosition,size);
    drawHat(xPosition,yPosition,size);
    drawText(xPosition+10,yPosition,size);
};

var drawBitmojiHead = function(BitmojiX,BitmojiY,BitmojiHeight)   {
    

noStroke();

//face of the Bitmoji
fill(235, 218, 162);

ellipse(BitmojiX,BitmojiY,BitmojiHeight/150*94,BitmojiHeight/150*95);
fill(255, 255, 255);


arc(BitmojiX+(BitmojiHeight/150*-46),BitmojiY+(BitmojiHeight/150*24),BitmojiHeight/150*25,BitmojiHeight/150*43,0,361);

arc(BitmojiX+(BitmojiHeight/150*48),BitmojiY+(BitmojiHeight/150*23),BitmojiHeight/150*28,BitmojiHeight/150*43,0,361);



//hair of the Bitmoji

fill(74, 69, 39);
ellipse(BitmojiX+(BitmojiHeight/150*-24),BitmojiY-(BitmojiHeight/150*49),BitmojiHeight/150*22,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*-22),BitmojiY-(BitmojiHeight/150*45),BitmojiHeight/150*22,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*-36),BitmojiY-(BitmojiHeight/150*38),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*-26),BitmojiY-(BitmojiHeight/150*38),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*-14),BitmojiY-(BitmojiHeight/150*39),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*-3),BitmojiY-(BitmojiHeight/150*37),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*6),BitmojiY-(BitmojiHeight/150*37),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*15),BitmojiY-(BitmojiHeight/150*36),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*26),BitmojiY-(BitmojiHeight/150*35),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*5),BitmojiY-(BitmojiHeight/150*37),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*39),BitmojiY-(BitmojiHeight/150*33),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*31),BitmojiY-(BitmojiHeight/150*42),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*31),BitmojiY-(BitmojiHeight/150*47),BitmojiHeight/150*17,BitmojiHeight/150*22);

ellipse(BitmojiX+(BitmojiHeight/150*4),BitmojiY-(BitmojiHeight/150*47),BitmojiHeight/150*50,BitmojiHeight/150*36);

noFill();

stroke(0, 0, 0,20);

//The nose of the Bitmoji
noFill();
stroke(0, 0, 0);
arc(BitmojiX+(BitmojiHeight/150*-2),BitmojiY-(BitmojiHeight/150*4),BitmojiHeight/150*16,BitmojiHeight/150*24,-63,116);
noStroke();

//The eyes of the Bitmoji
fill(0, 0, 0);

ellipse(BitmojiX+(BitmojiHeight/150*-19),BitmojiY-(BitmojiHeight/150*12),BitmojiHeight/150*20,BitmojiHeight/150*16);

ellipse(BitmojiX+(BitmojiHeight/150*21),BitmojiY-(BitmojiHeight/150*12),BitmojiHeight/150*19,BitmojiHeight/150*16);

fill(255, 255, 255);

ellipse(BitmojiX+(BitmojiHeight/150*21),BitmojiY-(BitmojiHeight/150*12),BitmojiHeight/150*12,BitmojiHeight/150*11);

ellipse(BitmojiX+(BitmojiHeight/150*-19),BitmojiY-(BitmojiHeight/150*12),BitmojiHeight/150*12,BitmojiHeight/150*11);

fill(156, 98, 50);


ellipse(BitmojiX+(BitmojiHeight/150*-19),BitmojiY-(BitmojiHeight/150*12),BitmojiHeight/150*6,BitmojiHeight/150*11);

ellipse(BitmojiX+(BitmojiHeight/150*21),BitmojiY-(BitmojiHeight/150*12),BitmojiHeight/150*6,BitmojiHeight/150*11);



//The mouth of the Bitmoji
noFill();

stroke(0, 0, 0);

line(BitmojiX+(BitmojiHeight/150*22),BitmojiY+(BitmojiHeight/150*14),BitmojiX+(BitmojiHeight/150*-23),BitmojiY+(BitmojiHeight/150*15));

fill(255, 255, 255);

arc(BitmojiX+(BitmojiHeight/150*0),BitmojiY+(BitmojiHeight/150*14),BitmojiHeight/150*47,BitmojiHeight/150*14,16,166);


};
//This variable draws the body of the Bitmoji
var drawBitmojiBody = function(BitmojiX,BitmojiY,BitmojiHeight)    {

//The torso of the Bitmoji
fill(44, 49, 201);

rect(BitmojiX+(BitmojiHeight/150*-36),BitmojiY+(BitmojiHeight/150*30),(BitmojiHeight/150*71),(BitmojiHeight/150*115),BitmojiHeight/150*88);

//The arms of the Bitmoji
noStroke();

fill(27, 55, 194);

rect(BitmojiX+(BitmojiHeight/150*-52),BitmojiY+(BitmojiHeight/150*46),BitmojiHeight/150*24,BitmojiHeight/150*56,BitmojiHeight/150*10);

rect(BitmojiX+(BitmojiHeight/150*29),BitmojiY+(BitmojiHeight/150*45),BitmojiHeight/150*24,BitmojiHeight/150*56,BitmojiHeight/150*10);

fill(235, 218, 162);
ellipse(BitmojiX+(BitmojiHeight/150*-44),BitmojiY+(BitmojiHeight/150*112),BitmojiHeight/150*22,BitmojiHeight/150*37);

ellipse(BitmojiX+(BitmojiHeight/150*44),BitmojiY+(BitmojiHeight/150*112),BitmojiHeight/150*22,BitmojiHeight/150*37);


//My initials to indicate the Bitmoji is mine
fill(255, 255, 255);

rect(BitmojiX+(BitmojiHeight/150*-19),BitmojiY+(BitmojiHeight/150*54),BitmojiHeight/150*3,BitmojiHeight/150*38);

rect(BitmojiX+(BitmojiHeight/150*-41),BitmojiY+(BitmojiHeight/150*54),BitmojiHeight/150*39,BitmojiHeight/150*4);

rect(BitmojiX+(BitmojiHeight/150*-37),BitmojiY+(BitmojiHeight/150*89),BitmojiHeight/150*20,BitmojiHeight/150*3);

rect(BitmojiX+(BitmojiHeight/150*10),BitmojiY+(BitmojiHeight/150*54),BitmojiHeight/150*3,BitmojiHeight/150*42);

rect(BitmojiX+(BitmojiHeight/150*8),BitmojiY+(BitmojiHeight/150*53),BitmojiHeight/150*25,BitmojiHeight/150*4);

rect(BitmojiX+(BitmojiHeight/150*30),BitmojiY+(BitmojiHeight/150*53),BitmojiHeight/150*3,BitmojiHeight/150*20);

rect(BitmojiX+(BitmojiHeight/150*12),BitmojiY+(BitmojiHeight/150*71),BitmojiHeight/150*20,BitmojiHeight/150*3);


    };
////This variable draws the Bitmoji as a whole
var drawBitmojiP = function(BitmojiX,BitmojiY,BitmojiHeight)   {
    
    drawBitmojiBody(BitmojiX,BitmojiY,BitmojiHeight);
    
    drawBitmojiHead(BitmojiX,BitmojiY,BitmojiHeight);
    
};

//Code borrowed from Khan Academys Tutorials
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};  //constructor button function

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
}; //prototype draw for button

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};  //prototype ismouseinside for button

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
}; //prototype handlemouseinside for button

var startButton = new Button({
    x: 121,
    y: 315,
    label: "        Start",
    onClick: function() {
        currentScene = 1;
    }
});  // start button that changes scene to playable game

var Battleship = function(x,y){
    this.x = x;
    this.y = y;
};

Battleship.prototype.position = function(){
    var orientation = round(random(1,2)); // 1 for horizonal 2 for verticle
    var battle_len = round(random(min_l, max_l)); //len of ship itself
};

var battleships = [];
for(var i = 0;i<numShips;i++){
    battleships.push(new Battleship(round(random(0,9)),round(random(0,9))));
}

//constructor for class Tile
var Tile = function(x, y) {      
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};

//method for tile to draw itself
Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(25);
    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    text(this.label, this.x+this.size/2, this.y+this.size/2);
};

//method to check if box is empty
Tile.prototype.empty = function() {
    return this.label === "";
};

//method to do something on click
Tile.prototype.onClick = function() {
    // If the tile is not empty, exit the function
    if(!this.empty()){
        return;
    }
    // Put the player's symbol on the tile
    this.label = SYMBOLS[playerTurn];
    // Change the turn
    playerTurn++;
    if(playerTurn >= SYMBOLS.length){
        playerTurn = 0;
    }
};

Tile.prototype.handleMouseClick = function(x, y) {
    // Check for mouse clicks inside the tile
    if(x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size){this.onClick();}
};

for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}

var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};

var splashScreen = function(){
    background(250, 42, 229);
    textAlign(CENTER,CENTER);
    textSize(24);
    text("Jordan's and Jacob's Battleship game!",100,102,200,200);
    drawBitmojiW(45,50,63);
    drawBitmojiP(341,54,100);
    startButton.draw();
};

mouseReleased = function() {
    if(currentScene===0){
        startButton.handleMouseClick();
    }
    
    if(currentScene===2){
    for (var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
    }
};

draw = function() {
    if(currentScene === 0){splashScreen();}
    
    if(currentScene === 1){
        textSize(20);
        background(0, 0, 0);
        fill(255, 255, 255);
        text("Loading...",150,200);
        if(round((millis()-m)/1000)>=5){
            currentScene=2;
        }
    }
    
    if(currentScene === 2){
        background(143, 143, 143);
        drawTiles();
    }
};
