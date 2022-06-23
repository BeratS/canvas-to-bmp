export function convertCanvasToBmp(ctx: CanvasRenderingContext2D, width: number, height: number): number[] {
  // Main code
  let idata = ctx.getImageData(0, 0, width, height),
    buffer = idata.data,
    len = buffer.length,
    threshold = 127,
    i;

  let c = 0
  var newBuffer = [];
  var finalBuffer = [];
  let pow = 7;
  let sum = 0;
  for (i = 0; i < len; i += 4) {
    newBuffer[c] = buffer[i] < threshold ? 1 : 0;

    if (pow === 0) {
      finalBuffer.push(sum);
      sum = 0;
    }
    pow = 7 - (c % 8);
    sum += newBuffer[c] * 2 ** pow;

    c++;
  }

  finalBuffer.push(0);
  return finalBuffer;
}