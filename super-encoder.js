// Importing the encryptors functions.
const encryptors = require('./encryptors.js');

const {caesarCipher, symbolCipher, reverseCipher} = require('./encryptors.js')

const encodeMessage = (str) => {
    // Using the encryptor functions.
    return reverseCipher(symbolCipher(caesarCipher(str, 5)));
  }
  
  const decodeMessage = (str) => {
    // Using the encryptor functions.
    return caesarCipher(symbolCipher(reverseCipher(str)), -5);
  }
  
  // User input / output.
    const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Runing the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);