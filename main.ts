let location = 0
basic.clearScreen()
basic.forever(function () {
    location = input.compassHeading()
    if (location < 45 || location > 314) {
        basic.showString("N")
    } else if (location < 135) {
        basic.showString("E")
    } else if (location < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
