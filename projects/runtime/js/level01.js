var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
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
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawblade(xvalue, yvalue) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = xvalue;
            sawBladeHitZone.y = yvalue;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            var danmaku = draw.circle(26, "LightYellow", "Yellow", 10);
            sawBladeHitZone.addChild(danmaku);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        }
        createSawblade(400, groundY - 50);
        createSawblade(600, groundY - 50);

        function createSpirit(xvalue, yvalue) {
        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "red");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = xvalue;
        enemy.y = groundY - yvalue;
        game.addGameItem(enemy);
        }
        createSpirit(500, 200);
        enemy.onPlayerCollision = function () {};
        game.increaseScore(100);
        enemy.fadeOut();


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
