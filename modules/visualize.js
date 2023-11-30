exports.fetchErrorImageUrl = function (input){
  return "./image/C軸加速度1.png";
}

exports.fetchParameterImageUrl = function (input){
  param = input.param;
  axis = input.axis;
  idx = input.inputFile1.replace(/[^0-9]/g,"");
  range = input.colorRange;
  if(param && axis && idx && range){
    url = `./image/${param}_${axis}_${idx}_${range}.png`
    return url;
  } else {
    return "https://via.placeholder.com/570x292/?text=Select\ correct\ parameter";
  }
}



