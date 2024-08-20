import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Text(props) {
    const [text, setText] = useState("")
    const upp = () => {
        let txt = text.toUpperCase();
        setText(txt)
    }

    const change = (event) => {
        setText(event.target.value)
    }

    const low =()=>{
        let txt=text.toLowerCase();
        setText(txt)
    }

    const clear =()=>{
        setText('')
    }

    const copy=()=>{
        let txt=document.getElementById('myBox')
        txt.select()
       navigator.clipboard.writeText(txt.value)
    }
    const rmSpace =()=>{
      let txt=text.split(/[ ]+/)
     setText(txt.join(" "))
    }
    let textColor = props.mode === 'dark' ? 'light' : 'dark';
    return (
        <>

            <div className={` container text-${props.mode==='light'?'dark':'light'} `}>
                <label  for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode=== 'light'?'black':'white'}} className="form-control" id="myBox" rows="11" value={text} onChange={change}></textarea>
                <button className="btn btn-primary my-3" onClick={upp}>Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={low}>Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick=  {clear}>Clear</button>
                <button className="btn btn-primary my-3 mx-2" onClick={copy}>Copy</button>
                <button className="btn btn-primary my-3 mx-2" onClick={rmSpace}>Remove Extra Spaces</button>

            </div>      

            <div className={` container text-${props.mode==='light'?'dark':'light'} `}>
                <h2 >Text Summary</h2>
                <p >{text.split(' ').length-1 }words and {text.length}characters</p>
                <h2 className="my-2">Summary</h2>
                <p>{text}</p>
                <h2 className="my-2">Preview</h2>
                <p className="my-2">{text.length>0?text:"Please enter something to preview"}</p>
            </div>
        </>
    )
}