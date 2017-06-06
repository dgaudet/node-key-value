class AppInfo {

  displayAppInfo(){
    this.welcome();
    this.appInstructions();
  }

  welcome(){
    console.log('           /\\            ');
    console.log('          /  \\            ');
    console.log('         /    \\            ');
    console.log('        /      \\            ');
    console.log('       /        \\            ');
    console.log('      /    __    \\            ');
    console.log('     (    (  )    )            ');
    console.log('    (    (    )    )            ');
    console.log('    (   (      )   )            ');
    console.log('     (   (    )   )            ');
    console.log('      (   (__)   )            ');
    console.log('       (        )            ');
    console.log('        (______)            ');
    console.log('\r');
  }

  appInstructions(){
    console.log('Welcome to Key Value Store');
    console.log('Please note this is an in memory store.\nAs it is a very simple example.');
    console.log('You will loose your changes upon app exit.');
    console.log('- However it would be quite easy to replace\nthe Memory repo with a database or other storage mechanism');
    console.log('\r');
    console.log('Commands: ');
    console.log('store add key value');
    console.log('store list');
    console.log('store get key');
    console.log('store get value');
    console.log('exit will exit the application');
    console.log('Please enter your commands:');
    console.log('\r');
  }
}

module.exports = AppInfo
