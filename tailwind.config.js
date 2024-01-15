
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./resources/scripts/**/*.{js,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
	    colors: {
                black: '#131a20',
                slate: colors.slate,
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                // "neutral" is used for text colors!!! (has to be tailwind variable)
                neutral: {
		            // '50' modifies footer text color before being hovered over
   		            50: '#ffffff',
		            // '100' modifies header text color before being hovered over
                    100: '#ffffff',
		            // '200' modifies text and box highlight
                    200: '#ffffff',
                    // '300' modifies header apps colors and footer highlight
                    300: '#ffffff',
		            // '400' modifies hover highlight of boxes and statistic color of servers
                    400: '#ffffff',
                    // '500' modifies highlight of boxes before being hovered over
                    500: '#ffffff',
                    // '600' modifies text of login footer, bottom of statistics and input boxes for user network input / api
		            600: '#b03838',
                    // '700' modifies account boxes
                    700: '#403030',
	  	            // '800' modifies text of user in login page
                    800: '#ffffff',
 		            // '900' modifies login page background
                    900: '#312121',
      		        // '950' TESTING BLUE
                    950: '#0000ff',
                    },
                cyan: colors.cyan,            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
