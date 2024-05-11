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