const AEM = require('./index');

/**
 * Tests, we will get round to unit tests at some point :D
 */

const aem = new AEM('http://localhost', 4502, 'admin', 'admin');
aem
//.createNode('/etc/designs/clientlibs/sites/foxybingocom/img', 'nt:folder')
//.then(_ => aem.createFile('/etc/designs/clientlibs/sites/foxybingocom/img/test.png', './L_C24E.tmp.PNG'))
//.then(_ => aem.createFile('/etc/designs/clientlibs/sites/foxybingocom/img/test.jpg', './baby octopus.jpg'))
//.createFile('/etc/designs/clientlibs/sites/foxybingocom/test2.js', fs.readFileSync('./index.js'))
//.updateFile('/etc/designs/clientlibs/sites/foxybingocom/test2.js', './aem.js')
//.removeFile('/etc/designs/clientlibs/sites/foxybingocom/test2.js')
//.createFile('/etc/designs/clientlibs/sites/foxybingocom/img/test.png', './L_C24E.tmp.PNG')
//  .updateFile('/etc/designs/clientlibs/sites/foxybingocom/img/aem.js', './test.js')
  .moveFile('/etc/designs/clientlibs/sites/bwining2.jpg', '/etc/designs/clientlibs/sites/bwining.jpg')
  .then(_ => console.log('Awesome success'))
  .catch(e => console.error(e));