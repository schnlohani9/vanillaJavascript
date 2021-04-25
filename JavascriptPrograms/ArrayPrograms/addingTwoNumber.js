// [8,7,1,2,7,6]
// 19
// false
// single iteration.

function twoSum(num,target_sum){
    let map =[];
    let indexnum=[];
     for(let x=0;x<num.length;x++){
       if(map[num[x]]!=null){
         var index = map[nums[x]];
         indexnum[0]=index;
         indexnum[1]=x;
         break;
       }
       else{
         map[target_sum-num[x]]=x;
       }
     }
     return indexnum
    }
    