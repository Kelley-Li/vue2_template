const publicFunctions = require.context('./modules', true, /\*.js$/)
console.log(publicFunctions)
// let publicFunctions = {}
// modulesFiles.keys().forEach(item => {
//   publicFunctions = Object.assign({}, modules, modulesFiles(item).default)
// })
//
// export default publicFunctions
