input.onButtonPressed(Button.A, function () {
    RTC_DS1307.DateTime(
    2026,
    5,
    3,
    18,
    57,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE))
})
basic.showIcon(IconNames.House)
