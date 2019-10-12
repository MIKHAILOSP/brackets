module.exports = function check(str, bracketsConfig) {
  // your solution
  let arrayofstr=str.split("");
  let coutleft=[];
  let coutright=[];
  let q=false;
  let q1=0;
  let indexfist=[];
  let fls=0;
  let count1=0;
  bracketsConfig.forEach(function(e,i) {
      // select options
      for (let j = 0; j < arrayofstr.length; j++){
        if (e[0] == arrayofstr[j]){
            if (e[0]!=e[1]) { 
             indexfist.push(j);
               // if (arrayofstr.length==0){
               // break;}
                }
            continue;
            }
            else {
            if((e[1] == arrayofstr[j])&& (e[0]!=e[1])) {
                for (let i = j; i < arrayofstr.length; i++){
                  if (e[1] == arrayofstr[i]) {
                        if ((i-indexfist[indexfist.length-1])%2 != 0) {
                         q=true;
                        arrayofstr.splice(i,1);
                        arrayofstr.splice((indexfist[indexfist.length-1]),1);
                        indexfist.pop();
                        i-=2;
                        j-=1;
                        if (indexfist.length==0){
                            break;
                            }
                        continue;
                        } else {
                            q=false;
                            fls+=1;
                            arrayofstr.splice(i,1);
                            arrayofstr.splice((indexfist[indexfist.length-1]),1);
                            indexfist.pop();
                            break;
                        }
                        }
                    }
                }else {
                    if (e[0] == e[1]){
                        count1+=1; 
                        }     
                }
        
            // else закрываем
            }
                // for закрываем
            }
        
        if (count1 % 2 !=0) {
             q=false;
            } 
            // else {
            //     if (indexfist.length >0) {
            //         q=false;
            //        }
            
            // }
                if (indexfist.length> 0 ) {
                    if (arrayofstr[0]!="|"){
                        q=false;
                    }
                }

        indexfist=[];
    });
        if (arrayofstr.length==1){
            q=false;
        }
        if (fls>0) {
          return false;
            } else {
               if ((arrayofstr[0]==["|"])&&(arrayofstr[1]==["|"])){
                return true; 
               } else {
               return q;
               }
            }
}
