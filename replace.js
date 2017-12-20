function replacing(str){
  if(typeof str != "string"){
    return "error:this is didn`t string";
  }
  let std ="";
  for(let i = 0; i < str.length; ++i){
    if(str[i] === " "){
    std+="%20";
    }
    else {
      std+=str[i];
    }
  }
  console.log(str.length);
  return std;
}

function replacing1(str){
  return str.replace(/ /g, "%20");
}

var str = 'Mr John Smith'
replacing1(str);
