function cubic(temp, curve) {
    var msg = {
        range: { max: 56, min: 42 },
        payload: temp,
        debug: {}
    };
    var step = 1 / (msg.range.max - msg.range.min);
    var temp_tmp = Number(msg.payload) - msg.range.min;
    msg.debug.temp_tmp = temp_tmp * step;
    msg.payload = Math.floor(curve(temp_tmp * step) / 10) * 10;
    return msg;
}
var curve_high = function (t) {
    var y = --t * t * t + 1;
    return y * 100;
};
var curve_low = function (t) {
    var y = t * (2 - t);
    return y * 100;
};
for (var i = 42; i <= 52; i += 0.5) {
    console.log(i, '  \t', cubic(i, curve_high).payload, '   \t', cubic(i, curve_low).payload);
}
