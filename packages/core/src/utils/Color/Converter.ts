class Converter {

  public RGBToHEX(RGB: Array<number>): string {
    let R = RGB[0].toString(16);
    let G = RGB[0].toString(16);
    let B = RGB[0].toString(16);

    if (R.length === 1) { R = "0" + R; }
    if (G.length === 1) { G = "0" + G; }
    if (B.length === 1) { B = "0" + B; }

    return ["#", R, G, B].join('');
  }

  public RGBToHSL(RGB: Array<number>): Array<number> {
    let R = RGB[0];
    let G = RGB[1];
    let B = RGB[2];

    R = R / 255;
    G = G / 255;
    B = B / 255;

    const L = Math.max(R, G, B);
    const S = L - Math.min(R, G, B);
    const H = S
      ? L === R
        ? (G - B) / S
        : L === G
          ? 2 + (B - R) / S
          : 4 + (R - G) / S
      : 0;
    return [
      Math.floor(60 * H < 0 ? 60 * H + 360 : 60 * H),
      Math.floor(100 * (S ? (L <= 0.5 ? S / (2 * L - S) : S / (2 - (2 * L - S))) : 0)),
      Math.floor((100 * (2 * L - S)) / 2),
    ];
  }

  public HEXtoRGB(color: string): Array<number> {
    let R = '0';
    let G = '0';
    let B = '0';

    if (color.length === 4) {
      R = "0x" + color[1] + color[1];
      G = "0x" + color[2] + color[2];
      B = "0x" + color[3] + color[3];

    } else if (color.length === 7) {
      R = "0x" + color[1] + color[2];
      G = "0x" + color[3] + color[4];
      B = "0x" + color[5] + color[6];
    }

    return [Number(R), Number(G), Number(B)]
  }

  public HEXtoHSL(color: string): Array<number> {
    const RGB = this.HEXtoRGB(color);
    return this.RGBToHSL(RGB);
  }

}

export default Converter;
