
// postcss.config.js

module.exports = {
    plugins: [        
        //require('postcss-import'),
        require('tailwindcss'),
        //require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
        // require('@fullhuman/postcss-purgecss')({
        //     content: [
        //       './src/**/*.vue',
        //       './public/index.html',
        //     ],
        //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        //   }),

        
        
    ]
  }





  