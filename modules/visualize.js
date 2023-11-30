exports.fetchErrorImageUrl = function (input){
  return "./image/C軸加速度1.png";
}

exports.fetchParameterImageUrl = function (input){
  param = input.param;
  axis = input.axis;
  index = input.inputFile1.match(/\d*/);
  range = input.colorRange;
  url = `./image/${param}_${axis}_${index}_${range}.png`
  return "./image/C軸加速度1.png";
}



