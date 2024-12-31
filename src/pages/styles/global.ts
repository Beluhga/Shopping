import { globalCss } from ".";
import { Roboto } from 'next/font/google';

export const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
 });

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray900',
        color: '$gray100',
    },

    ':root': {
    '--font-roboto': 'Roboto', 
  },

    'body, input, textarea, button': {
        fontFamily: 'var(--font-roboto)',
        fontWeight: 400
    }
})