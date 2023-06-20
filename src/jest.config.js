const hq = require('alias-hq')

module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '\\.[jt]sx?$': 'esbuild-jest',
        //   /// This will resolve any tsconfig.compilerOptions.paths
        //   moduleNameMapper: hq.get('jest'),
        //   testPathIgnorePatterns: ['/node_modules/', '/dist/', '/types/' ],
        //   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
    },
}