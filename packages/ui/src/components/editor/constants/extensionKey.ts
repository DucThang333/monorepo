export enum ExtensionFormatTextKey{
    PARAGRAPH="paragraph",
    H1="h1",
    H2="h2",
    H3="h3",
    H4="h4",
    H5="h5",
    H6="h6",
    CODE="code",
    QUOTE="quote",
}

export enum ExtensionFontFamilyKey{
    ANTON="anton",
    CAVEAT_BRUSH="caveat-brush",
    EB_GARAMOND="eg-garamond",
    JET_BRAINS_MONO="jet-brains-mono",
    LOBSTER="lobster",
    MONTSERRAT="montserrat",
    NUNITO="nunito",
    OSWALD="oswald",
    POPPINS="poppins",
    SANS_SERIF="sans-serif",
    MONO="mono"
}

export enum ExtensionTextStyleKey{
    BOLD="bold",
    ITALIC="italic",
    STRIKE="strike",
    UNDERLINE="underline"
}

export enum ExtensionCommonKey{
    NUMBERED_LIST="numbered-list",
    BULLETED_LIST="bulleted-list",
    CHECK_LIST="check-list",
    HISTORY="history",
    FONT_SIZE="font-size",
    COLOR="color"
}


export type ExtensionKey={
    formatTexts:ExtensionFormatTextKey[],
    fontFamilies:ExtensionFontFamilyKey[],
    commons:ExtensionCommonKey[],
    textStyle:ExtensionTextStyleKey[]
}