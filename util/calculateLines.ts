// Ref https://bl.ocks.org/tophtucker/62f93a4658387bb61e4510c37e2e97cf

/**
 * @param text : <string> - The text to be rendered.
 * @param containerWidth : <number> - Width of the container where dom will be rendered.
 * @param fontSize : <number> - Font size of DOM text
 **/

export default function calculateLines(
  text: string,
  containerWidth: number,
  fontSize = 16.1
) {
  let lines = 1; // Initiating number of lines with 1

  // widths & avg value based on `Helvetica` font.
  const widths = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0.278125, 0.278125, 0.35625, 0.55625, 0.55625,
    0.890625, 0.6671875, 0.1921875, 0.334375, 0.334375, 0.390625, 0.584375,
    0.278125, 0.334375, 0.278125, 0.303125, 0.55625, 0.55625, 0.55625, 0.55625,
    0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.278125, 0.278125,
    0.5859375, 0.584375, 0.5859375, 0.55625, 1.015625, 0.6671875, 0.6671875,
    0.7234375, 0.7234375, 0.6671875, 0.6109375, 0.778125, 0.7234375, 0.278125,
    0.5, 0.6671875, 0.55625, 0.834375, 0.7234375, 0.778125, 0.6671875, 0.778125,
    0.7234375, 0.6671875, 0.6109375, 0.7234375, 0.6671875, 0.9453125, 0.6671875,
    0.6671875, 0.6109375, 0.278125, 0.35625, 0.278125, 0.478125, 0.55625,
    0.334375, 0.55625, 0.55625, 0.5, 0.55625, 0.55625, 0.278125, 0.55625,
    0.55625, 0.2234375, 0.2421875, 0.5, 0.2234375, 0.834375, 0.55625, 0.55625,
    0.55625, 0.55625, 0.334375, 0.5, 0.278125, 0.55625, 0.5, 0.7234375, 0.5,
    0.5, 0.5, 0.35625, 0.2609375, 0.3546875, 0.590625
  ];
  const avg = 0.5293256578947368;

  text
    .split('')
    .map((c) =>
      c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg
    )
    .reduce((cur, acc) => {
      if ((acc + cur) * fontSize > containerWidth) {
        lines++;
        cur = acc;
      }
      return acc + cur;
    });

  return lines;
}
