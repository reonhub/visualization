exports.fetchErrorImageUrl = function (DOMAIN, input){
  const idx = input.logFile.replace(/[^0-9]/g, '');
  const range = input.colorRange;
  if(input.modelFile == "3D形状モデル" && idx && range){
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
  if(param && axis && idx && range){
    return `http://${DOMAIN}:3000/image/${param}_${axis}_${idx}_${range}.png`
  } else {
    return "https://via.placeholder.com/570x292/?text=Not%20Found";
  }
}



