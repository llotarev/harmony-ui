import Converter from "@/utils/Color/Converter";
import HEX from "@/utils/Color/color-models/HEX";
import RGB from "@/utils/Color/color-models/RGB";

class Color {

  public converter(): Converter {
    return new Converter();
  }

  public HEX(color: string): HEX {
    return new HEX(color, this.converter());
  }

  public RGB(R: number, G: number, B: number): RGB {
    return new RGB([R, G, B], this.converter());
  }
}

export default Color;
