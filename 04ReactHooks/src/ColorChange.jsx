import React from "react";

function ColorChange({ colors,changecolor,setChangecolor }) {

  return (
    <div>
      <h1 className="" style={{color:"white"}}>Bg ColorChange : {changecolor} </h1>
      <div className="btn-box">
        {colors.map((color,i) => (
          <button className="btn" onClick={()=>setChangecolor(color)} >{color}</button>
        ))}
      </div>
    </div>
  );
}

export default ColorChange;
