const fs = require("fs");

exports.fetchErrorImageUrl = function (DOMAIN, input){
  const idx = input.logFile.replace(/[^0-9]/g, '');
  const range = input.colorRange;
  if(!input.modelFile.includes("3D")){
    return "https://via.placeholder.com/570x292/?text=Not%20Found";
  }

  if(idx && range && fs.existsSync(`./public/image/加工誤差_${idx}_${range}.png`)){
    return `http://${DOMAIN}:3000/image/加工誤差_${idx}_${range}.png`;
  } else {
    return "https://via.placeholder.com/570x292/?text=Not%20Found";
  }
}

exports.fetchParameterImageUrl = function (DOMAIN, input){
  const param = input.param;
  const axis = input.axis;
  const idx = input.logFile.replace(/[^0-9]/g, '');
  const range = input.colorRange;
  if(param && axis && idx && range && fs.existsSync(`./public/image/${param}_${axis}_${idx}_${range}.png`)){
    return `http://${DOMAIN}:3000/image/${param}_${axis}_${idx}_${range}.png`
  } else if (param && param === "軸反転位置" && idx && fs.existsSync(`./public/image/${param}_${axis}_${idx}.png`)){
    return `http://${DOMAIN}:3000/image/${param}_${axis}_${idx}.png`
  } else {
    return "https://via.placeholder.com/570x292/?text=Not%20Found";
  }
}



