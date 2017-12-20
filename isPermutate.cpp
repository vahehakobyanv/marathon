#include <iostream>
#include <stdio.h>
#include <string.h>

bool isPermutate1(std::string str,std::string st1){
  for(int i = 0;i <= str.length()-st1.length();++i){
    int count = 0;
    for(int j = 0;j < st1.length();++j){
      if(st1[j] == str[i+j]){
        count++;
      }
      else {
        break;
      }
    }
    if(count == st1.length()){
      return true;
    }
  }
  return false;
}

bool isPermutate2(std::string str,std::string str1){
if(str.find(str1) != std::string::npos){
  return true;
}  
return false;
}

bool isPermutate(char*  st1,const char* st2){
  if(strstr(st1,st2) != NULL){
    return true;
  }
  return false;
}

int main() {
  std::cout<< isPermutate1("vahe rtrtrt","hakobyan");
  return 0;
}
