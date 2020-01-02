// Try edit message

function calc(){
    const ivs = [-1,-1,-1,-1,-1,-1],
          ivsMod8=[-1,-1,-1,-1,-1,-1],
          stat=["H","A","B","C","D","S"]
          vLock=[0,0,0,0,0,0];
    const ivsStr=document.getElementById("inputIvs").value.split(/[^\d]/);
    var ivCount=0;
    var skipCount=0;
    var nextLock=-1;
    // console.log(ivsStr);
    if(ivsStr.length!=6){
      document.getElementById("outputIvs").innerHTML="個体値の個数がおかしいです"
    }else{
      for(i=0;i<6;i++){
        ivs[i]=Number(ivsStr[i])
        if((ivs[i]<0)||(ivs[i]>31)){
          document.getElementById("outputIvs").innerHTML="個体値は0-31です　たぶん"
          return;
        }
        if(ivs[i]==31){
          vLock[i]=1;
          ivCount++;
        }else{
          ivsMod8[i]=ivs[i]%8;
        }
      }
      if(ivCount!=3){
        document.getElementById("outputIvs").innerHTML="3v以外はお取り扱いしておりません"
  
      }else{
        for(i=0;i<6;i++){
          if(ivsMod8[i]<0){
          }else{
            if(ivsMod8[i]>5){
              //check re-calc
              skipCount++;
            }else{
              //check is-locked
              if(vLock[ivsMod8[i]]==1){
                skipCount++;
              }else{
                nextLock=ivsMod8[i];
                break;
                
              } 
          
            }
          }
        }
        if(skipCount==2){
          document.getElementById("res").innerHTML="できる!<br>4vの固定は"+stat[nextLock]
        }else if(skipCount<2){
          document.getElementById("res").innerHTML="できない："+(skipCount+1)+"回目で固定終了<br>4vの固定は"+stat[nextLock]
        }else{
          document.getElementById("res").innerHTML="できない：4回以上固定に使うため途切れる"
  
        }
        document.getElementById("outputIvs").innerHTML=ivs
      }
    }
    
  }
  
  