/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        //to define our media querie
        screens: {
            sm: '500px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                'colorprimary': '#2196f3',
                firstcolor_alt: 'rgb(44,36,53)',
                firstcolor_third: 'rgb(106,212,255)',
                firstcolor_second: 'rgb(53,106,133)',
                'firstcolor': 'rgb(57,111,180)',
                'textcolor': 'hsl(230,8%,15%)',
                'titlecolor': 'hsl(230,8%,15%)',
            },
        },
    },
    plugins: [],
};
