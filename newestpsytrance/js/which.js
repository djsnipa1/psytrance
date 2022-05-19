let exec = require('child_process').exec;
let cmd = 'which chromium';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log(stdout)
  return stdout
});


// EXAMPLE

/*const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = async () => {
  const a = await address;
  console.log(a);
};

printAddress();

// EXAMPLE

const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = async () => {
  const a = await address;
  console.log(a);
};

printAddress();


/*
const { exec } = require('child_process');
exec('cat *.js | wc', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
 // console.log('test: ' + stdout[1])
});
*/
