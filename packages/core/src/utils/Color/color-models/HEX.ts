import Converter from "@/utils/Color/Converter";


class HEX {
  private readonly _color: string;

  constructor(
    color: string,
    private converter: Converter
  ) {
    this._color = color;
  }


  public toRGB(): string {
    const RGB = this.converter.HEXtoRGB(this._color);

    return `rgb(${RGB.join(", ")})`;
  }

  public toRGBA(percent: number): string {
    const RGB = this.converter.HEXtoRGB(this._color);

    return `rgba(${RGB.join(", ")}, ${percent}%)`
  }

  public toHSL() {
    const [H, S, L] = this.converter.HEXtoHSL(this._color);

    return `hsl(${H}, ${S}%, ${L}%)`
  }

  public toHSLA(percent: number) {
    const [H, S, L] = this.converter.HEXtoHSL(this._color);

    return `hsl(${H}, ${S}%, ${L}%, ${percent}%)`
  }

  public lightness(amount: number) {
    const [H, S] = this.converter.HEXtoHSL(this._color);

    return `hsl(${H}, ${S}%, ${amount}%)`
  }
}

export default HEX;
