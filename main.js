const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    });
  
    win.loadFile('index.html');
}

// When app is ready creates window using function above
app.whenReady().then(() => {
  createWindow();

  // Checks if app is activated and then creates window (macos)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Closes the application if you exit all GUI windows 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }
  
  app.whenReady().then(() => {
    createWindow()
  })