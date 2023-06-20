const hq = require('alias-hq')

module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.tsx?$": [ 
            "esbuild-jest", 
            { 
              sourcemap: true,
              loaders: {
                '.spec.ts': 'tsx'
              }
            } 
          ]
    },
}