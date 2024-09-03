let defaultEnv = {
  PORT: 3030,
  SOME_DATABASE_URL: "blah blah blah",
  SECURITY_TOKEN: "secret_token",
  SECRET_API_KEY: "secret api key",
  JWT_SECRET_KEY: "secret jwt token",
};

console.log(defaultEnv);

let contentToWrite = "";

// PORT=3030
// SOME_DATABASE_URL=blah blah blah

// ["PORT", "SOME_DATABASE_URL", "SECRUITY_TOKEN"....]
Object.keys(defaultEnv).forEach((envKey) => {
  // Add a line to contentToWrite with the keyname and key value
  contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
});

console.log(contentToWrite);

const fs = require("node:fs");
// fs.writeFileSync(".env", contentToWrite);
// console.log("File has been written!");

console.log("Before the fs callback");

// fs.writeFile(filePath, fileContents, callback);
fs.writeFile(".env", contentToWrite, (error) => {
  if (error) {
    console.log("File writing had errors!");
  } else {
    console.log("File has been written!");
  }
});

console.log("After the fs callback");
