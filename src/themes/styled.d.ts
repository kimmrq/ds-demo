import 'styled-components';

interface FontWeights {
    bold: string;
    medium: string;
    normal: string;
}

interface FontSize {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

interface LineHeight {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

interface Typography {
    fontFamilyBase: string;
    fontSize: FontSize;
    fontWeights: FontWeights;
    lineHeight: LineHeight;
}

interface IconButtonVariant {
    backgroundColor: string;
    backgroundColorActive: string;
    backgroundColorFocus: string;
    backgroundColorHover: string;
    boxShadowColorFocus: string;
    boxShadowSpreadRadiusFirst: string;
    boxShadowSpreadRadiusSecond: string;
    color: string;
    colorDisabled: string;
    colorFocus: string;
    colorHover: string;
}

interface IconButtonVariants {
    default: IconButtonVariant;
    filled: IconButtonVariant;
    ghost: IconButtonVariant;
    inverse: IconButtonVariant;
}

interface Colors {
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral50: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    success: string;
    warning: string;
}

type Breakpoints = Array;

type Space = Array;

declare module 'styled-components' {
    export interface DefaultTheme {
        alert: {
            danger: {
                backgroundColor: string;
                color: string;
                colorHover: string;
            };
            info: {
                backgroundColor: string;
                color: string;
                colorHover: string;
            };
            success: {
                backgroundColor: string;
                color: string;
                colorHover: string;
            };
        };
        authCode: {
            danger: {
                color: string;
            };
            default: {
                color: string;
            };
            success: {
                color: string;
            };
        };
        badge: {
            badgeColor: {
                blue: string;
                lime: string;
                magenta: string;
                neutral: string;
                orange: string;
                turquoise: string;
                yellow: string;
            };
            badgeSize: {
                large: string;
                medium: string;
                small: string;
            };
            color: {
                blue: string;
                lime: string;
                magenta: string;
                neutral: string;
                orange: string;
                turquoise: string;
                yellow: string;
            };
            fontFamily: string;
            fontSize: {
                large: string;
                medium: string;
                small: string;
            };
            fontWeight: string;
            lineHeight: string;
        };
        breakpoints: Breakpoints;
        button: {
            blue: {
                background: string;
                backgroundActive: string;
                border: string;
                boxShadowColor: string;
                color: string;
                colorOutline: string;
                colorOutlineActive: string;
                colorOutlineHover: string;
            };
            ghost: {
                backgroundDisabled: string;
                blue: {
                    boxShadowColor: string;
                    color: string;
                    colorActive: string;
                };
                borderDisabled: string;
                colorDisabled: string;
                magenta: {
                    boxShadowColor: string;
                    color: string;
                    colorActive: string;
                };
            };
            large: {
                borderRadius: string;
                fontSize: string;
                fontWeight: string;
                height: string;
                letterSpacing: string;
                lineHeight: string;
                paddingLeft: string;
                paddingRight: string;
            };
            magenta: {
                background: string;
                backgroundActive: string;
                border: string;
                boxShadowColor: string;
                color: string;
                colorOutline: string;
                colorOutlineActive: string;
                colorOutlineHover: string;
            };
            medium: {
                borderRadius: string;
                fontSize: string;
                fontWeight: string;
                height: string;
                letterSpacing: string;
                lineHeight: string;
                paddingLeft: string;
                paddingRight: string;
            };
            outline: {
                backgroundDisabled: string;
                borderDisabled: string;
                colorDisabled: string;
            };
            small: {
                borderRadius: string;
                fontSize: string;
                fontWeight: string;
                height: string;
                letterSpacing: string;
                lineHeight: string;
                paddingLeft: string;
                paddingRight: string;
            };
            solid: {
                backgroundDisabled: string;
                borderDisabled: string;
                colorDisabled: string;
            };
        };
        card: {
            boxShadowLevel1: string;
            boxShadowLevel2: string;
            boxShadowLevel3: string;
            boxShadowNone: string;
            paddingSpacing0: string;
            paddingSpacing1: string;
            paddingSpacing2: string;
            paddingSpacing3: string;
            paddingSpacing4: string;
        };
        checkbox: {
            accentColor: string;
            accentColorDisabled: string;
            backgroundColor: string;
            backgroundColorDisabled: string;
            borderColor: string;
            borderColorDisabled: string;
            borderColorHover: string;
            boxShadowColorFocus: string;
            labelColor: string;
            labelColorDisabled: string;
            labelFontSize: {
                large: string;
                medium: string;
            };
            labelLineHeight: {
                large: string;
                medium: string;
            };
            rippleColor: string;
        };
        collection: {
            icon: {
                color: string;
                easing: string;
                hoverColor: string;
            };
            link: {
                easing: string;
                hoverColor: string;
            };
        };
        colors: Colors;
        feedback: {
            backgroundColor: string;
            borderRadius: string;
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            space: string;
        };
        form: {
            boxShadow: string;
            margin: string;
            paddingSides: string;
            paddingTop: string;
        };
        formGroup: {
            breakpoints: {
                small: {
                    breakpoint: string;
                };
            };
            formgroupHeight: string;
            labelFontSize: string;
            labelLineheight: string;
            margin: string;
            read: {
                margin: string;
                padding: string;
            };
            small: {
                margin: string;
            };
            stacked: {
                margin: string;
            };
        };
        formHeader: {
            margin: string;
        };
        formLabel: {
            asterisk: {
                color: string;
                fontSize: string;
                fontWeight: string;
            };
            color: string;
            error: {
                color: string;
            };
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        formLayout: {
            columnSpacing: string;
            condensedSpacing: string;
        };
        formSection: {
            borderColor: string;
            formSectionHeader: {
                margin: string;
            };
            margin: string;
            padding: string;
        };
        iconButton: IconButtonVariants;
        iconCircle: {
            accent: { blue: string; magenta: string };
            backgroundColor: string;
            borderColor: string;
        };
        inputCheckmark: {
            blue: {
                backgroundColor: string;
            };
            borderColor: string;
            borderColorHover: string;
            boxShadow: string;
            color: string;
            colorDisabled: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            magenta: {
                backgroundColor: string;
            };
            multiLine: {
                bodyTextColor: string;
                color: string;
                labelFontWeight: string;
            };
        };
        link: {
            blue: {
                color: string;
            };
            fontFamily: string;
            grey: {
                color: string;
            };
            lightGrey: {
                color: string;
            };
            magenta: {
                color: string;
            };
        };
        list: {
            listItem: {
                color: string;
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                margin: string;
                marginCondensed: string;
                marginWide: string;
                selectedColor: string;
            };
            margin: string;
        };
        listRow: {
            margin: string;
            padding: {
                large: string;
                medium: string;
                small: string;
            };
        };
        mediaObject: {
            bodySpacing: string;
            borderColor: string;
            color: string;
            paragraphFontSize: string;
            stackedSpacing: string;
        };
        menu: {
            backgroundColorFocus: string;
            backgroundColorFocusDisabled: string;
            color: string;
            colorDisabled: string;
        };
        navDropdown: {
            accentColor: string;
            color: string;
            iconBackgroundColor: string;
            iconColor: string;
            toggleSubtitleColor: string;
            toggleTitleColor: string;
        };
        radio: {
            accentColor: string;
            backgroundColor: string;
            backgroundColorDisabled: string;
            borderColor: string;
            borderColorDisabled: string;
            borderColorHover: string;
            boxShadowColorFocus: string;
            labelColor: string;
            labelColorDisabled: string;
            labelFontSize: string;
            rippleColor: string;
        };
        radioButton: {
            accentColor: string;
            backgroundColor: string;
            backgroundColorDisabled: string;
            borderColor: string;
            borderColorDisabled: string;
            borderColorHover: string;
            boxShadowColorFocus: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorHover: string;
            fontSize: string;
        };
        space: Space;
        steps: {
            accentColor: string;
        };
        switch: {
            backgroundColor: string;
            backgroundColorCircle: string;
            backgroundColorCircleChecked: string;
            backgroundColorCircleDisabled: string;
            backgroundColorDisabled: string;
            borderColor: string;
            borderColorDisabled: string;
            boxShadowColorFocus: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            fontSize: string;
        };
        textField: {
            backgroundColor: string;
            borderColor: string;
            borderColorFocus: string;
            borderColorHover: string;
            borderColorTransparent: string;
            color: string;
            disabled: {
                borderColor: string;
                color: string;
            };
            error: {
                borderColor: string;
                borderColorFocus: string;
                borderColorHover: string;
                color: string;
            };
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            height: string;
            lineHeight: string;
            placeholder: {
                color: string;
                fontWeight: string;
            };
            readOnly: {
                borderColor: string;
            };
        };
        typography: Typography;
    }
}
