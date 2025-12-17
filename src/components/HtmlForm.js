import React,{useState} from 'react'

export default function HtmlForm(props) {
  // usestate hook
  let [text, setText] = useState("Enter the text!");
  // text="new text"  //wrong
  // setText("Enter Text") //right
  let handleUpcase=()=>{
console.log("uppercase is clicked")
// setText("Uppercase words is Clicked")
let newText=text.toUpperCase();
setText(newText);
props.showAlert("Uppercase is Converted!","success")

  }
  let handleOnchange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  let handleLocase=()=>{
let newText=text.toLowerCase()
setText(newText);
props.showAlert("Lovercase is converted", "success")
  }
  let handleReset=()=>{
    let newText=''
    setText(newText)
  }
let handleCopy=()=>{
let newText=document.getElementById("myBox")
newText.select()
navigator.clipboard.writeText(text)
// alert("Text Copied!")
props.showAlert("Copied!","success")
}

// 
let handleExtraSpaces = () => {
  setText(text.replace(/\s+/g," ").trim())
  props.showAlert("Spaces removed","success ")
};


  return (
    <>
    <div className="container" style={{color:props.mode==="#0A1A2F"?"white":"black"}}>
 <h1>{props.heading}   </h1>
<div className="mb-3">
  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
  <textarea className="form-control resize-none" id="myBox" rows="9" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==="#0A1A2F"?"#0A1A2F":"white",color:props.mode==="light"?"black":"white"}} ></textarea>
</div>
  <button className="btn btn-primary m-1" onClick={handleUpcase}>Uppercase</button>
  <button className='btn btn-success x-1' onClick={handleLocase}>Lowercase</button>
  <button className='btn btn-warning m-1 text-white'onClick={handleReset} >Reset</button>
  <button className='btn btn-danger m-1' onClick={handleCopy}>Copy</button>
  <button className='btn btn-info m-1 ' onClick={handleExtraSpaces}>Extra Spaces</button>

    </div>
    

    <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
      <h2>Here is the text summary</h2>
      <p>{text.split(" ").length} words  {text.length} Characters</p>
      <p> {0.008* text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text to preview!"}</p>
    </div>
    </>
  )
}
