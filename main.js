const {app, BrowserWindow} = require('electron')

function createWindow () {
    window = new BrowserWindow({width: 800, height: 600})
    window.loadFile('index.html')

var pyshell =  require('python-shell');

pyshell.run('hello.py',  function  (err, results)  {
 if  (err)  throw err;
 console.log('hello.py finished.');
 console.log('results', results);
});   	

var pyshell =  require('python-shell');
pyshell.run('engine.py',  function  (err, results)  {
 if  (err)  console.log(err);
}); 
    
}



app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

