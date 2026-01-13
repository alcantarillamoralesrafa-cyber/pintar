input.onPinPressed(TouchPin.P0, function () {
    turtle.turnLeft()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    turtle.setPosition(2, 2)
})
input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onButtonPressed(Button.B, function () {
    turtle.back(1)
})
input.onPinPressed(TouchPin.P1, function () {
    turtle.turnRight()
})
