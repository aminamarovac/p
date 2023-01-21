import React, { UseState } from "react";
import "./StyledInput.css";

const StyledInput=(props)=>{
    return <input onChange={props.onChangeHandler} value={props.value}/>;
};

export default StyledInput;