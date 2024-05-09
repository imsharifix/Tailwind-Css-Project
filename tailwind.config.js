/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/styles/index.html',
    "./public/**/*.{html,js}",
  ],
  darkMode : 'class',
  theme: {
    
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
 

    extend: {
      container : {
        
      },
      colors: {
        "brown" :{
          100 : "#ECE0D1",
          300 : "#DBC1AC",
          600 : "#967259",
          900 : "#634832",
        }
      },
      boxShadow :{
        "shadow-normal" : "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        '4xl' : '2rem'
      },
      fontFamily :{
        "vazir" : "vazir",
        "vazirMedium" : "vazir Medium",
        "vazirBold"  : "vazir Bold",      
      },
      letterSpacing: {
        tightest: '-.065em',
      },
      spacing : {
        "25" : "6.25rem",
        "30" : "7.5rem",
        "50" : "12.5rem",
      },
      backgroundImage : {
        "home-mobile": "url(../images/headerBgMobile.webp)",
        "home-desktop": "url(../images/headerBgDesktop.webp)",
      },
      productsBg : {
        "products-bg" : "url(../images/body-bg.png)",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  },
  function ({ addComponents }) {
    addComponents({
      '.container': {
        width: '100%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // paddingLeft: '2rem',
        // paddingRight: '2rem',
        '@screen sm': {
          maxWidth: '640px',
        },
        '@screen md': {
          maxWidth: '768px',
        },
        '@screen lg': {
          maxWidth: '1024px',
        },
        '@screen xl': {
          maxWidth: '1280px',
        },
      }
    })
  }
  ],
}

