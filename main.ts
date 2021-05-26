input.onGesture(Gesture.Shake, function () {
    linkd = 0
    Linking = 1
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 30; index++) {
        if (linkd == 1) {
            basic.showIcon(IconNames.Heart)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            music.playMelody("C E G C5 C5 C5 - - ", 250)
            setup()
        } else {
            radio.sendString("PleseLink")
        }
        music.playTone(277, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PleseLink") {
        if (Linking == 1) {
            radio.sendString("setup")
            linkd = 1
        } else {
            radio.sendString("PleseLink")
        }
    } else if (receivedString == "ForceLink") {
        linkd = 1
        radio.sendString("setup")
    } else {
        serial.writeString("")
    }
})
function setup () {
    スプライト = game.createSprite(2, 4)
    スプライト = 0
}
let スプライト: game.LedSprite = null
let linkd = 0
let Linking = 0
Linking = 0
linkd = 0
radio.setGroup(100)
radio.sendString("a")
basic.forever(function () {
	
})
