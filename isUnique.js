
//O(N^2)
function isUnique(str){
  for(let i = 1; i < str.length; ++i){
    for(let j = o; j < i; ++j){
      if(str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
}
//O(n)
function isUnique1(str) {
  let arr = [];
  for(let i =0 ; i < 256;i++ ){
    arr[i] = 0;
  }
  for(let i = 0; i < str.length; ++i){
    arr[str.charCodeAt(i)]++;
  }
  for(let i = 0; i < 256;i++){
    if(arr[i] > 1){
      return false;
    }
  }
  return true;
}
//O(n)
function isUnique2(str){
  let myset = new Set();
  let size = 0;
  for(let i = 0; i< str.length;++i){
    size = myset.size;
    myset.add(str[i]);
    if(myset.size !== size+1){
      return false;
    }
  }
  return true;
}

isUnique1('vahe');
