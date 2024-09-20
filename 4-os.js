const os =require("os");

const userInfo={
    user:os.userInfo(),
    hostname:os.hostname(),
    uptime:os.uptime()
}
const operatingSystem={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(userInfo);
console.log(operatingSystem);

// OS is a built in module that comes with nodeJS
// Built in modules are modules that not require to be install separately
// The list of built in modules of node JS can be view here https://nodejs.org/api/

// OS module provides the information about the Operating System we are working on 
// Run the program to get more info
