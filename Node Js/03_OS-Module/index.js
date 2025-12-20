const os = require("node:os");

//type() => return os name
console.log(os.type());

//platform() => return os plaform
if (os.platform() === "win32") {
  console.log("Hello window user");
} else if (os.platform() === "darwin") {
  console.log("Hello mac user");
}

//arch() => return os architecture
console.log(os.arch());

//hostname() => return hostname of os
console.log(os.hostname());

//release() => return the os version
console.log(os.release());

//uptime() => return system uptime in second
console.log(os.uptime());

//totalmem() => return total memory in bytes
console.log(os.totalmem() / 1024 / 1024 / 1024);

//freemem() =>  return free memory in bytes
console.log(os.freemem() / 1024 / 1024 / 1024);

//cpus() => return array with CPU info
console.log(os.cpus());
