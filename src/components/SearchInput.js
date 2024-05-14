
import "./SearchInput.css"
function SearchInput(props){
    const{inputValue,onChange}= props;
    return    <div className="boxTextfield">
    <input
      className="textfield"
      placeholder="พิมพ์ที่นี่ ...."
    //   onChange={(e) => {
    //     console.log("onchange: " + e.target.value);
    //   }}
    value={inputValue}
      onChange={(value)=>onChange(value)}
      //   type="number"
    />
  </div>

}


export default  SearchInput;