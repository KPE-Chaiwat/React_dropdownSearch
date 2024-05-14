function CustomSort(arrData,textCheck){
    var output =[]
  for(var i=0; i<arrData.length;i++){
       console.log(arrData[i])
        for(var j =0; j<arrData[i].length;j++){
              
            //   if(mokData[i][0]==stringcheck){
                   
            //       //form=to
            //     array_move(mokData,i,0)
            //   }
              for(var k=0; k<textCheck.length;k++){
                   if(arrData[i][k]==textCheck[k]){
                   
                   //form=to
                array_move(arrData,i,0)
               }
              }
       
        }
    

output.push(arrData[i]);
} 


  function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

output = arrData
return  output;
} 

export default CustomSort;