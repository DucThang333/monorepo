import { ExtensionFormatTextKey, ExtensionFontFamilyKey, ExtensionKey, ExtensionCommonKey, ExtensionTextStyleKey } from "@/components/editor/constants/extensionKey";

export const fullExtension:ExtensionKey = {
    fontFamilies: [
        // ExtensionFontFamilyKey.ANTON,
        // ExtensionFontFamilyKey.CAVEAT_BRUSH,
        // ExtensionFontFamilyKey.EB_GARAMOND,
        // ExtensionFontFamilyKey.JET_BRAINS_MONO,
        // ExtensionFontFamilyKey.LOBSTER,
        // ExtensionFontFamilyKey.MONTSERRAT,
        // ExtensionFontFamilyKey.NUNITO,
        // ExtensionFontFamilyKey.OSWALD,
        // ExtensionFontFamilyKey.POPPINS,
        // ExtensionFontFamilyKey.SANS_SERIF,
        // ExtensionFontFamilyKey.MONO,
      ],
      formatTexts: [
        ExtensionFormatTextKey.CODE,
        ExtensionFormatTextKey.H1,
        ExtensionFormatTextKey.H2,
        ExtensionFormatTextKey.H3,
        ExtensionFormatTextKey.H4,
        ExtensionFormatTextKey.H5,
        ExtensionFormatTextKey.H6,
        ExtensionFormatTextKey.PARAGRAPH,
        ExtensionFormatTextKey.QUOTE,
      ],
      commons: [
        ExtensionCommonKey.HISTORY,
        ExtensionCommonKey.CHECK_LIST,
        ExtensionCommonKey.BULLETED_LIST,
        ExtensionCommonKey.NUMBERED_LIST,
        ExtensionCommonKey.FONT_SIZE,
      ],
      textStyle: [
        ExtensionTextStyleKey.BOLD,
        ExtensionTextStyleKey.ITALIC,
        ExtensionTextStyleKey.STRIKE,
        ExtensionTextStyleKey.UNDERLINE,
      ],
}