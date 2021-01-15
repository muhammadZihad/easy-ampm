function easyAmPm(object) {
    if (typeof object === 'undefined')
        throw new Error("Object {format: '12H', time: 1212} required");
    if (typeof object.time === 'undefined')
        throw new Error("Time(in Seconds) required");
    let spaced = "";
    if (typeof object.spaced !== 'undefined' && object.spaced)
        spaced = " ";
    if (typeof object.format !== 'undefined' && object.format === "24H")
        return h24convert(object.time);
    else
        return h12convert(object.time, spaced);
}

function h12convert(time, spaced) {
    let hour = parseInt(time / 3600);
    let minute = parseInt((time % 3600) / 60);
    let ext = "AM";
    if (hour > 12) {
        ext = "PM";
        hour = hour - 12;
    }
    return `${doubledigit(hour)}:${doubledigit(minute)}${spaced}${ext}`;
}

function h24convert(time) {
    let hour = parseInt(time / 3600);
    let minute = parseInt((time % 3600) / 60);
    return `${doubledigit(hour)}:${doubledigit(minute)}`;
}

function doubledigit(digit) {
    if (digit <= 9) {
        return `0${digit}`;
    }
    return digit.toString();
}

module.exports.easyAmPm = easyAmPm;
