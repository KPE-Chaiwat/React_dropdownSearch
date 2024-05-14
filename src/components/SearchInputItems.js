import "./SearchInputItems.css"



function SearchInputItem(props){
    const {listItem,onTap}= props
    return   <div className="frameitems">
         
        {listItem.map((e,index)=>{
                 return   <div className="items" onClick={() => onTap(index,e)}>{e}</div>
        }
        )} 
      
           

    </div>
}


export default SearchInputItem;