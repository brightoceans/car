input.onButtonPressed(Button.A, function () {
    x = 1
})
function 前进 () {
    zmrobo.MotorRun(zmrobo.Motors.M1, 50)
    zmrobo.MotorRun(zmrobo.Motors.M2, -50)
}
input.onButtonPressed(Button.B, function () {
    x = 2
})
function 停止 () {
    zmrobo.MotorRun(zmrobo.Motors.M1, 0)
    zmrobo.MotorRun(zmrobo.Motors.M2, 0)
}
let x = 0
zmrobo.MotorRun(zmrobo.Motors.M1, 0)
zmrobo.MotorRun(zmrobo.Motors.M2, 0)
let 超声波测距 = zmrobo.ping(
DigitalPin.P15,
DigitalPin.P14,
PingUnit.Centimeters
)
basic.forever(function () {
    if (x == 1) {
        前进()
    } else if (x == 2) {
        停止()
    }
})
