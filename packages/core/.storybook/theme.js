import {create} from '@storybook/theming';
import palette from '../src/accets/palettes.json'

export default create({
  brandUrl: '/',
  brandTitle: 'Harmony UI',
  brandImage: null,
  base: 'light',
  appBg: palette.Tone["300"],
  barBg: palette.Tone["100"],
  appContentBg: palette.Tone["100"],
  textColor: palette.Text["700"],
  textMutedColor: palette.Text["500"],
  appBorderColor: palette.Tone["100"],
  inputBg: palette.Tone["200"],
  inputBorder: palette.Tone["200"],
  colorPrimary: palette.Blue["500"],
  colorSecondary: palette.Blue["500"],
  fontBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
  appBorderRadius: "8px",
  inputBorderRadius: "8px",
});
