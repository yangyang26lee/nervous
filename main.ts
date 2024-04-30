let score = 10
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        score += -1
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
})
basic.forever(function () {
    basic.showNumber(score)
})
