"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCanvasToBmp = void 0;
function convertCanvasToBmp(ctx, width, height) {
    // Main code
    var idata = ctx.getImageData(0, 0, width, height), buffer = idata.data, len = buffer.length, threshold = 127, i;
    var c = 0;
    var newBuffer = [];
    var finalBuffer = [];
    var pow = 7;
    var sum = 0;
    for (i = 0; i < len; i += 4) {
        newBuffer[c] = buffer[i] < threshold ? 1 : 0;
        if (pow === 0) {
            finalBuffer.push(sum);
            sum = 0;
        }
        pow = 7 - (c % 8);
        sum += newBuffer[c] * Math.pow(2, pow);
        c++;
    }
    finalBuffer.push(0);
    return finalBuffer;
}
exports.convertCanvasToBmp = convertCanvasToBmp;
