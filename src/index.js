module.exports = function check(str, bracketsConfig) {
	// your solution
// Code goes here

var ch=0;
var prv=0;


var len=str.length;
if(len %2 !==0){
  return false;
}

var dlina = bracketsConfig.length;

var keys = [];

for(var k=0;k<dlina;k++){
  keys[k]=0;
}

for (var i=0; i<str.length;i++){
  
  for(var j=0; j<dlina; j++){

    if(str[i]===bracketsConfig[j][0]){
      
      if(bracketsConfig[j][0]===bracketsConfig[j][1])
      break;
      
      keys[j]=keys[j]+1;
      break;
    }
    
    if(str[i]===bracketsConfig[j][1]){
      
       if(keys[j]==0){
      return false;
      }
      
      if(str[i-1]!==bracketsConfig[j][0]){
        for(var l=0; l<dlina;l++){
          if(str[i-1]===bracketsConfig[l][1]){
            prv=64;
          break;
          }
        }
        if(prv!==64)
       		return false;
      }
      
      keys[j]=keys[j]-1;
      break;
    }
  }
  
}

for(var k=0;k<dlina;k++){
  if(keys[k]!==0)
  ch++;
}

if (ch===0){
  return true;
}
else{
  return false;
}

}