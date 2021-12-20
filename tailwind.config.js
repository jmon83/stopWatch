module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
      './build/static/*.css'
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: ['synthwave'],
  plugins: [
    require('daisyui'),
  ],

}
