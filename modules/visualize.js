exports.fetchErrorImageUrl = function (input){
  idx = input.inputFile1.replace(/[^0-9]/g,"");
  
  return `./image/加工誤差_${idx}.png`;
}

exports.fetchParameterImageUrl = function (input){
  param = input.param;
  axis = input.axis;
  idx = input.inputFile1.replace(/[^0-9]/g,"");
  range = input.colorRange;
  if(param && axis && idx && range){
    url = `http://localhost:3000/image/${param}_${axis}_${idx}_${range}.png`
    return url;
  } else {
    return "https://via.placeholder.com/570x292/?text=Not%20Found";
  }
}



