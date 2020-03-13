const palette = {
    barelyBlue: "#dfdfdf",
    black: "#000000",
    black30: "rgba(0,0,0,0.3)",
    black70: "rgba(0,0,0,0.7)",
    brownGrey: "#999999",
    concrete: "#f3f3f3",
    green: "#20ca8a",
    greenMen: "#00ff00",
    highlightBlue: "#1f00fc",
    lightGrey: "rgb(242,242,242)",
    lightestGrey: "rgb(248,248,248)",
    mediumGrey: "rgb(223,223,223)",
    primaryGrey: "#666666",
    red: "#FC0000",
    veryLightPink: "#f2f2f2",
    warmGrey: "rgba(153, 153, 153, 1)",
    white: "#ffffff"
}

export const color = {
    backgroundOverlay: palette.black70, // Modal background
    defaultBackground: palette.white, // Screen background
    error: palette.red, // Error messages
    line: palette.barelyBlue, // Borders and lines
    lineLighter: palette.veryLightPink,
    palette, // Palette is available to use, but prefer using the name
    primary: palette.black, // The main tinting color
    primaryLighter: palette.brownGrey,
    secondary: palette.mediumGrey,
    secondaryBackground: palette.veryLightPink, // off-white for backgrounds (e.g. monetate banner)
    secondaryLighter: palette.lightGrey, // E.g background of a selected row in table
    success: palette.green, // Success messages
    textAccent: palette.red, // Emphasized Text (e.g. sales price)
    textPrimary: palette.black, // Primary text (e.g. title)
    textSecondary: palette.brownGrey, // Secondary text (e.g. description)
    transparent: "rgba(0, 0, 0, 0)"
}

export type PaletteType = keyof typeof color
