import 'styled-components'
import { theme } from './Theme/theme'

type ThemeType = typeof theme;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}
