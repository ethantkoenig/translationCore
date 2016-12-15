// install babel hooks in the main process
require('babel-register')({
  extensions: [".js", ".jsx"],
  presets: ["react"]
})
require('./main')
