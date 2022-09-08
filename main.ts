controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.y += -16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    game.over(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.y += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let car: Sprite = null
let ally: Sprite = null
let thePlayer: Sprite = null
tiles.setTilemap(tilemap`level2`)
thePlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . . . . . c c . . . . 
    . . . c b c . . . c b c c . . . 
    . . . c b b c . c b b b c . . . 
    . . c b 3 b b c b b 3 b c c . . 
    . c c b 3 3 b c b 3 3 b b c . . 
    . c b b b b b b b b b b b c . . 
    . c b b b c b b b b c b b c . . 
    . c b b b b b b b b b b b c . . 
    . c b b c c b 3 b c c b b c . . 
    . . c b b b c c c b b b c . . . 
    . . . c b b b b b b b c . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
thePlayer.setPosition(120, 328)
scene.setBackgroundColor(6)
scene.cameraFollowSprite(thePlayer)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(50)) {
        ally = sprites.create(img`
            ........................
            ........................
            ........................
            ...............77.......
            ..............7777......
            ..............7117......
            .........7.7.771f77777..
            ..7.7.7.77777777771.1...
            .777777777777777.1.1.1..
            7777777777777777777777..
            ........7777777777777...
            ........77...77.........
            ........777..777........
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        ally.setVelocity(50, 0)
        tiles.placeOnRandomTile(ally, assets.tile`tile1`)
        ally.x = 16
        ally.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(100)) {
        car = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 6 4 2 2 2 2 2 4 6 6 2 . . 
            . 2 6 6 4 2 2 2 2 2 4 6 6 6 2 . 
            2 6 6 2 4 2 2 2 2 2 4 6 6 6 6 2 
            4 2 2 2 4 2 2 2 2 2 4 2 2 2 2 2 
            4 2 2 2 4 2 2 2 2 2 4 2 2 2 2 5 
            2 2 f f 4 2 2 2 2 2 4 2 f f 2 2 
            2 f 1 1 f 2 2 2 2 2 4 f 1 1 f 2 
            . f 1 1 f . . . . . . f 1 1 f . 
            . . f f . . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        car.setVelocity(-50, 0)
        tiles.placeOnRandomTile(car, sprites.vehicle.roadHorizontal)
        car.x = 200
        car.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
