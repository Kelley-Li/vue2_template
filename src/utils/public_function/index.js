const publicFunctionFiles = require.context('./modules', false, /.js$/)
let publicFunction = {}
publicFunctionFiles.keys().forEach(key => {
  let newKey = key.replace(/(\.\/|\.js)/g, '')
  publicFunction[newKey] = require(`./modules/${newKey}`).default;
})
export default publicFunction
