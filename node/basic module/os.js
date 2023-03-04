 const os= require('os');

   console.log(os.arch());
   console.log(os.hostname());
   console.log(os.platform());
  console.log(os.tmpdir());
  console.log(os.uptime());
  console.log(os.type());
   const memory = os.freemem();

   console.log(memory /1024 /1024);

   const memory1 = os.totalmem();

   console.log(memory1 /1024 /1024);
