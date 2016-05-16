function extend(destination) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        for (var p in source) {
            destination[p] = source[p];
        }
    });
    return destination;
}
exports.extend = extend;
function smartExtend(destination) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        for (var p in source) {
            if (source[p] !== null && source[p] !== undefined) {
                destination[p] = source[p];
            }
        }
    });
    return destination;
}
exports.smartExtend = smartExtend;
