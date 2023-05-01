import 'styled-components'

declare module 'styled-components'{

    export interface DefaultTheme {
        colors: {
            primaryWhite: string,
            primarySoft: string,
            primaryMedium: string,
            neutralDark: string,
            neutralMedium: string,
            neutralSoft: string
        },

        fonts: {
            outfitFont: string
        },

        wheight: {
            weight100: number,
            weight200: number,
            weight300: number,
            weight400: number,
            weight600: number
        }
    }
}