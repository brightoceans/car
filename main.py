def 前进2():
    pass
def 前进():
    zmrobo.motor_run(zmrobo.Motors.M1, 50)
    zmrobo.motor_run(zmrobo.Motors.M2, -50)
def 停止():
    zmrobo.motor_run(zmrobo.Motors.M1, 0)
    zmrobo.motor_run(zmrobo.Motors.M2, 0)
zmrobo.motor_run(zmrobo.Motors.M1, 0)
zmrobo.motor_run(zmrobo.Motors.M2, 0)
超声波测距 = zmrobo.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.CENTIMETERS)

def on_forever():
    pass
basic.forever(on_forever)
