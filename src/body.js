import { useState } from "react";
import "./body.css";
import SearchInput from "./components/SearchInput";
import SearchInputItem from "./components/SearchInputItems";


function Body() {
  const [input, setInput] = useState("");

  const [itemSearch ,setitemSearch] = useState([])
  
  let mokData=["moolThreesree","Marcel Proust","James Joyce","Miguel de Cervantes","Herman Melville","William Shakespeare"];


  const onchangeInputText=(e)=>{
  //  console.log("====onchangeInputText==" + e.target.value)
   setInput(e.target.value)


   var datashowinput = filterDataItem(mokData,e.target.value)



    setitemSearch(datashowinput)

  }
  const addItemListToTextfield= (index,value)=> {

    setInput(value)
}


const filterDataItem =(arr, query)=> {

    if(query===""){
        return []
    }else{
         var datafillter =arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
       var buf_dataout = datafillter.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(),{sensitivity: 'base'}));
        return  CustomSort(buf_dataout,query);
    }
  }

  function CustomSort(listdata,searchTerm){
    var output =[];
    function swapItemList(listData ,formINdex,toIndex){
      var output =[];
     if(listData[formINdex]!=undefined&&listData[toIndex]!=undefined){
     const temp = listData[formINdex];
     listData[formINdex] = listData[toIndex];
     listData[toIndex] = temp;
      output =listData;
      return output;
     }else{
            return output;
     }
 }
 
  for (var i =0; i<listdata.length;i++){
    for (var j =i+1; j<listdata.length;j++){
      let check =listdata[i].toLowerCase().indexOf(searchTerm.toLowerCase())>listdata[j].toLowerCase().indexOf(searchTerm.toLowerCase())
        if(check){
           output =  swapItemList(listdata,i,j);    
        }
   }
} 
console.log(listdata)
  return listdata;
  }





  return (
    <div className="Body">
      <div >
        <SearchInput onChange= {onchangeInputText} inputValue={input}/>
        <SearchInputItem listItem = {itemSearch} onTap={addItemListToTextfield}/>
      </div>
    </div>
  );
}

export default Body;
