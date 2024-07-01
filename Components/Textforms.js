import React, { useState } from 'react'

export default function Textforms(props) {
   
    // Split the text into an array of words based on spaces
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert(`${newtext.length>0?"Uppercase converted":"enter text to conver"}`,"success")
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert(`${newtext.length>0?"LowerCase converted":"enter text to conver"}`,"success")

    }

   const handleSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showalert("Extra space removes","success")

   }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");//arrray destructure syntax//state it is hook (usestate)
    // text="abcd"//wrong way
    // setText("abcd")//correct way

    return (
        <>
        <div>
            <div class="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
                <textarea class="form-control" value={text} id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'#010428':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>COVERT TO UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>COVERT TO LOWERCASE</button>
            <button  disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>HANDLE SPACE</button>
        </div>
        <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
            <h1><b>Yor text summary</b></h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes taken to read</p>
            <h2>PREVIEW</h2>
            <p>{text.length>0?text:"Nothing to preview "}</p>
        </div>
        </>
    )
}
