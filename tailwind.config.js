/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    letterSpacing: {
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      wide: '.025em',
       wider: '.05em',
      widest: '.1em',
      widest: '.35em',
    },

    extend: {
      colors: {
        // THEME 1

        // Backgrounds
        veryDarkDesaturatedBlueMbg: 'hsl(222, 26%, 31%)', /* main background */
        veryDarkDesaturatedBlueTbgKpBg: 'hsl(223, 31%, 20%)', /* toggle background, keypad background */
        veryDarkDesaturatedBlueScrBg: 'hsl(224, 36%, 15%)', /* screen background */

        // Keys
        desaturatedDarkBlueKeyBg: 'hsl(225, 21%, 49%)', /* key background */
        desaturatedDarkBlueKeyS: 'hsl(224, 28%, 35%)', /* key shadow */

        redKeyBg: 'hsl(6, 63%, 50%)', /* key background, toggle */
        darkRedKeyS: 'hsl(6, 70%, 34%)', /* key shadow */

        lightGrayishOrangeKeyBg: 'hsl(30, 25%, 89%)', /* key background */
        grayishOrangeKeyS: 'hsl(28, 16%, 65%)', /* key shadow */

        // Text
        veryDarkGrayishBlue: 'hsl(221, 14%, 31%)',
        white: 'hsl(0, 0%, 100%)',

        // THEME 2

        // Backgrounds
        lightGrayMainBg: 'hsl(0, 0%, 90%)', /* main background */
        grayishRedToggleBgKeypadBg: 'hsl(0, 5%, 81%)', /* toggle background, keypad background */
        veryLightGrayScreenBg: 'hsl(0, 0%, 93%)', /* screen background */

        // Keys
        darkModerateCyanKeyBg: 'hsl(185, 42%, 37%)', /* key background */
        veryDarkCyanKeyS: 'hsl(185, 58%, 25%)', /* key shadow */

        orangeKeyBgToggle: 'hsl(25, 98%, 40%)', /* key background, toggle */
        darkOrangeKeyS: 'hsl(25, 99%, 27%)', /* key shadow */

        lightGrayishYellowKeyBg: 'hsl(45, 7%, 89%)', /* key background */
        darkGrayishOrangeKeyS: 'hsl(35, 11%, 61%)', /* key shadow */

        // Text
        veryDarkGrayishYellow: 'hsl(60, 10%, 19%)',
        white: 'hsl(0, 0%, 100%)',

        // THEME 3

        // Backgrounds
        veryDarkVioletMainBg: 'hsl(268, 75%, 9%)', /* main background */
        veryDarkVioletToggleKeypadScreenBg: 'hsl(268, 71%, 12%)', /* toggle background, keypad background, screen background */

        // Keys
        darkVioletKeyBg: 'hsl(281, 89%, 26%)', /* key background */
        vividMagentaKeyS: 'hsl(285, 91%, 52%)', /* key shadow */

        pureCyanKeyBgToggle: 'hsl(176, 100%, 44%)', /* key background, toggle */
        softCyanKeyS: 'hsl(177, 92%, 70%)', /* key shadow */

        veryDarkVioletKeyBg: 'hsl(268, 47%, 21%)', /* key background */
        darkMagentaKeyS: 'hsl(290, 70%, 36%)', /* key shadow */

        // Text
        lightYellow: 'hsl(52, 100%, 62%)',
        veryDarkBlue: 'hsl(198, 20%, 13%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

 