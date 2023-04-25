import { choices } from './choices'

const {
  color: {
    brand,
    base
  },
  colorAlvi: {
    baseAlvi,
    brandAlvi,
    shabits
  },
  boxShadow,
  borderWidth,
  borderRadius,
  filter,
  fontFamily,
  fontSize,
  fontSizeTitles,
  fontWeight,
  lineHeight,
  letterSpacing,
  opacity,
  width,
  zIndex
} = choices

export const decisions = {
  color: {
    base: {
      black: base.mineShaft,
      white: base.white,
      transparent: base.transparent
    },
    loaders: {
      background: brand.backgroundLoader,
      foreGround: brand.foreGroundLoader
    },
    primary: {
      red: brand.alizarinCrimson,
      red2: brand.guardsmanRed,
      // blue: brand.blue,
      redDark: brand.tabasco,
      // blueHeader: brand.blueGradient,
      redHeader: brand.redGradient,
      redQtyButton: brand.redGradientButton,
      redListButton: brand.redGradientButtonFull,
      redBg: brand.chablis,
      disabled: brand.paleSlate,
      pinkLight: brand.pinkLight,
      redDarker: brand.darkerRed,
      orangeLight: brand.orangeLight,
      green: brand.green,
      greenLight: brand.greenLight
    },
    secondary: {
      blue: brand.deepCerulean,
      blue2: brand.blueLagoon,
      blueDark: brand.blueStone,
      blueBg: brand.foam,
      blueBg2: brand.aliceBlue
    },
    neutral: {
      black: brand.mineShaft,
      black2: brand.eclipse,
      grayDark: brand.doveGray,
      dustyGray: brand.dustyGray,
      gray: brand.mercury,
      grayLight: brand.wildSand,
      graySilver: brand.silver,
      grayWhite: brand.alabaster,
      antiFlash: brand.antiFlash,
      white: brand.white,
      blackOlive: brand.blackOlive
    },
    campaigns: {
      red: brand.lust,
      black: brand.heavyMetal,
      blue: brand.blueTag,
      orange: brand.orangeTag,
      yellow: brand.schoolBusYellow,
      turquoise: brand.turquoise
    },
    feedback: {
      successLight: brand.kellyGreen,
      successDark: brand.japaneseLaurel,
      errorLight: brand.red,
      errorDark: brand.kuCrimson,
      warningLight: brand.fuelYellow,
      warningDark: brand.meteor,
      warningGray: brand.ghost
    },
    text: {
      primary: brand.lust,
      secondary: brand.easternBlue,
      grayLight: brand.steel,
      inactive: brand.silver,
      black: brand.bokaraGray,
      white: brand.white,
      success: brand.japaneseLaurel,
      error: brand.kuCrimson,
      warning: brand.meteor,
      infoLight: brand.green
    },
    background: {
      primary: brand.lust,
      primaryLight: brand.chablis,
      secondary: brand.deepCerulean,
      secondaryLight: brand.foam,
      gray: brand.mercury,
      grayLight: brand.whiteSmoke,
      white: brand.white,
      pink: brand.sweetPink,
      sunkistPeach: brand.sunkistPeach,
      grayInfo: brand.azure,
      easternBlueTwo: brand.easternBlueTwo,
      greenLight: brand.aquaSpring,
      blueLight: brand.frenchPass,
      whiteOpacity: brand.whiteOpacity
    },
    icons: {
      primary: brand.alizarinCrimson,
      secondary: brand.deepCerulean,
      gray: brand.doveGray,
      grayLight: brand.silver,
      black: brand.mineShaft,
      white: brand.white,
      success: brand.kellyGreen,
      error: brand.red,
      warning: brand.fuelYellow
    }
  },
  colorAlvi: {
    base: {
      black: baseAlvi.mineShaft,
      white: baseAlvi.white,
      transparent: baseAlvi.transparent
    },
    loaders: {
      background: brand.backgroundLoader,
      foreGround: brand.foreGroundLoader
    },
    primary: {
      blue: brandAlvi.congressBlue,
      blue2: brandAlvi.catalinaBlue,
      blue3: brandAlvi.midnightBlue,
      backgroundBlue: brandAlvi.backgroundBlue,
      blueGradient: brandAlvi.blueGradient,
      blackOpacity: brandAlvi.blackOpacity,
      blueHeaderGradient: brandAlvi.blueGradientHeader,
      blueGradient2: brandAlvi.blueGradient2,
      yellowGradientButton: brandAlvi.yellowGradientButton
    },
    secondary: {
      yellow: brandAlvi.sunglow,
      yellow2: brandAlvi.butterCup,
      yellow3: brandAlvi.goldenGrass,
      yellow4: brandAlvi.creamBrulee
    },
    neutral: {
      black: brandAlvi.black,
      grayDark: brandAlvi.doveGray,
      graySilver: brandAlvi.silver,
      gray: brandAlvi.mercury,
      grayLight: brandAlvi.wildSand,
      grayWhite: brandAlvi.alabaster,
      white: brandAlvi.white
    },
    campaigns: {
      superMarca: brandAlvi.superMarca,
      superPrecio: brandAlvi.superPrecio,
      exclusivo: brandAlvi.exclusivo
    },
    feedback: {
      successDark: brandAlvi.successDark,
      errorDark: brandAlvi.errorDark,
      warningLight: brandAlvi.warningLight,
      warningDark: brandAlvi.warningDark
    },
    text: {
      primary: brandAlvi.primary,
      secondary: brandAlvi.secondary,
      grayLight: brandAlvi.grayLight,
      inactive: brandAlvi.inactive,
      success: brandAlvi.success,
      error: brandAlvi.error,
      warning: brandAlvi.warning
    },
    background: {
      selago: brandAlvi.selago,
      foam: brandAlvi.foam,
      wildSand: brandAlvi.wildSand,
      mercury: brandAlvi.mercury,
      white: brandAlvi.white,
      yellow: brandAlvi.secondary,
      blue: brandAlvi.congressBlue
    },
    icons: {
      primary: brandAlvi.congressBlue,
      secondary: brandAlvi.secondary,
      gray: brandAlvi.doveGray,
      grayLight: brandAlvi.silver,
      black: brandAlvi.black,
      white: brandAlvi.white,
      success: brandAlvi.kellyGreen,
      error: brandAlvi.red,
      warning: brandAlvi.warningLight,
      raisinBlack: brandAlvi.raisinBlack
    },
    shabits: {
      bronzeSolid: shabits.bronzeSolid,
      bronzeDark: shabits.bronzeDark,
      silverSolid: shabits.silverSolid,
      silverDark: shabits.silverDark,
      goldSolid: shabits.goldSolid,
      goldDark: shabits.goldDark,
      vipSolid: shabits.vipSolid
    }
  },
  fontFamily: {
    sans: fontFamily.sans,
    montserrat: fontFamily.montserrat
  },
  fontSize: {
    base: fontSize.base,
    '2xs': fontSize['2xs'],
    xs: fontSize.xs,
    sm: fontSize.sm,
    md: fontSize.md,
    lg: fontSize.lg,
    xl: fontSize.xl,
    '2xl': fontSize['2xl'],
    '3xl': fontSize['3xl'],
    '5xl': fontSize['5xl'],
    '6xl': fontSize['6xl'],
    '9xl': fontSize['9xl'],
    '10xl': fontSize['10xl']
  },
  spacing: {
    none: 0,
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '3rem',
    '5xl': '3.5rem'//64 - pendiente validar
  },
  fontSizeTitles: {
    base: fontSizeTitles.base,
    '2xs': fontSizeTitles['2xs'],
    '3xs': fontSizeTitles['3xs'],
    xs: fontSizeTitles.xs,
    sm: fontSizeTitles.sm,
    md: fontSizeTitles.md,
    'md2': fontSizeTitles['md2'],
    lg: fontSizeTitles.lg,
    xl: fontSizeTitles.xl,
    '2xl': fontSizeTitles['2xl']
  },
  fontWeight: {
    none: fontWeight.none,
    hairline: fontWeight.hairline,
    thin: fontWeight.thin,
    light: fontWeight.light,
    normal: fontWeight.normal,
    medium: fontWeight.medium,
    semibold: fontWeight.semibold,
    bold: fontWeight.bold,
    extrabold: fontWeight.extrabold,
    black: fontWeight.black
  },
  lineHeight: {
    none: lineHeight.none,
    '2xs': lineHeight['2xs'],
    xs: lineHeight.xs,
    sm: lineHeight.sm,
    md: lineHeight.md,
    lg: lineHeight.lg,
    xl: lineHeight.xl,
    '2xl': lineHeight['2xl'],
    '3xl': lineHeight['3xl'],
    '4xl': lineHeight['4xl'],
    '5xl': lineHeight['5xl'],
    '6xl': lineHeight['6xl'],
    '9xl': lineHeight['9xl'],
    '10xl': lineHeight['10xl']
  },
  letterSpacing: {
    tightest: letterSpacing.tightest,
    tighter: letterSpacing.tighter,
    tight: letterSpacing.tight,
    normal: letterSpacing.normal,
    wider: letterSpacing.wider,
    widest: letterSpacing.widest
  },
  boxShadow: {
    none: boxShadow.none,
    s: boxShadow.s,
    xs: boxShadow.xs,
    '2xs': boxShadow['2xs'],
    '3xs': boxShadow['3xs'],
    sm: boxShadow.sm,
    md: boxShadow.md,
    '2md': boxShadow['2md'],
    lg: boxShadow.lg,
    xl: boxShadow.xl
  },
  filter: {
    none: filter.none,
    xs: filter.xs
  },
  borderRadius: {
    none: borderRadius.none,
    '2xs': borderRadius['2xs'],
    xs: borderRadius.xs,
    '2sm': borderRadius['2sm'],
    sm: borderRadius.sm,
    md: borderRadius.md,
    lg: borderRadius.lg,
    xl: borderRadius.xl,
    full: borderRadius.full
  },
  borderWidth: {
    none: borderWidth.none,
    xs: borderWidth.xs,
    md: borderWidth.md,
    lg: borderWidth.lg,
    xl: borderWidth.xl
  },
  opacity: {
    0: opacity['0'],
    25: opacity['25'],
    40: opacity['40'],
    50: opacity['50'],
    75: opacity['75'],
    100: opacity['100']
  },
  width: {
    maxDesktop: width.maxDesktop,
    maxMobile: width.maxMobile
  },
  zIndex: {
    auto: zIndex.auto,
    ['-2']: zIndex['-2'],
    ['-1']: zIndex['-1'],
    0: zIndex['0'],
    1: zIndex['1'],
    5: zIndex['5'],
    10: zIndex['10'],
    20: zIndex['20'],
    30: zIndex['30'],
    40: zIndex['40'],
    50: zIndex['50'],
    999: zIndex['999'],
    9999: zIndex['9999'],
    99999: zIndex['99999']
  }
}

