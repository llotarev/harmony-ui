import {create} from '@storybook/theming';
import palette from '../src/accets/palettes.json'

export default create({
  brandUrl: '/',
  brandTitle: 'Harmony UI',
  brandImage: null,
  base: 'light',
  appBg: palette.Tone["500"],
  barBg: palette.Tone["200"],
  appContentBg: palette.Tone["200"],
  textColor: palette.Text["700"],
  textMutedColor: palette.Text["700"],
  appBorderColor: palette.Tone["200"],
  inputBg: palette.Tone["400"],
  inputBorder: palette.Tone["400"],
  colorPrimary: palette.Blue["500"],
  colorSecondary: palette.Blue["500"],
  fontBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
  appBorderRadius: "12px",
  inputBorderRadius: "12px",
});
