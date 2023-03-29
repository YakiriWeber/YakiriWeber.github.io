var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = 400;
sawBladeHitZone.y = 100;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
function myFunctionName(parameter1Name, parameter2Name) {
    // your code to be reused goes here
  }
  var average1 = (20 + 40) / 2;
console.log("the average of " + 20 + " and " + 40 + " is " + average1); //==> The average of 20 and 40 is 30

var average2 = (5 + 10) / 2;
console.log("the average of " + 5 + " and " + 10 + " is " + average2); //==> The average of 5 and 10 is 7.5
function average(x, y) {
    var average = (x + y) / 2;
    console.log("the average of " + x + " and " + y + " is " + average);
  }
  average(20, 40); //==> The average of 20 and 40 is 30
average(5, 10); //==> The average of 5 and 10 is 7.5
function createMyObstacle(x, y) {
    createMyObstacle(100, 200);dsz
    // code for creating myObstacle
  }
  var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = 400;
enemy.y = groundY - 50;
game.addGameItem(enemy);
enemy.onPlayerCollision = function () {};
game.increaseScore(100);
enemy.fadeOut();

        
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
