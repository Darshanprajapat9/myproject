 const path =  require("path");
  console.log(path.dirname('D:\nodejs\nodech\index.js'));
  console.log(path.basename('D:\nodejs\nodech\index.js'));
  console.log(path.extname('D:\nodejs\nodech\index.js'));
  console.log(path.parse('D:\nodejs\nodech\index.js'));

  const mypath = path.parse('D:\nodejs\nodech\index.js');
  console.log(mypath.name);
