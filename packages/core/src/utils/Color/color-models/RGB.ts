import Converter from "@/utils/Color/Converter";


class RGB {
  private readonly _RGB: [number, number, number];

  constructor(
    RGB: [number, number, number],
    private converter: Converter
  ) {
    this._RGB = RGB;
  }

  public toRGBA(percent: number): string {
    let RGB = this._RGB;

    return `rgba(${RGB.join(", ")}, ${percent}%)`;
  }

  public toHEX(): string {
    return this.converter.RGBToHEX(this._RGB)
  }

  public toHSL(): string {
    const [H, S, L] = this.converter.RGBToHSL(this._RGB);

    return `hsl(${H}, ${S}%, ${L}%)`;
  }

  public toHSLA(percent: number): string {
    const [H, S, L] = this.converter.RGBToHSL(this._RGB);

    return `hsla(${H}, ${S}%, ${L}%, ${percent}%)`;
  }
}

export default RGB;
