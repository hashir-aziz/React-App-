import React,{useState}  from 'react'

export default function TextForms(props) {
  const handleUpClick=() =>{
     console.log("uppercase was clicked" + text )
        let newText= text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=() =>{
    console.log("uppercase was clicked" + text )
       let newText= text.toLowerCase();
   setText(newText);
 }
  const handleOnChange = (e) => {
    console.log("onchange");
    setText(e.target.value);
  }
  const handleClearClick=()=>{
    let newText = ('')
    setText(newText)
  }
  
    const [text, setText] = useState('Enter text here');
  return (
     <> 
     <div className="form-group">
     <h1>{props.heading}</h1>
       <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
        
     </div>
     <button className="btn btn-primary mx-3 my-3" onClick={ handleUpClick} >convert to uppercase</button>
     <button className="btn btn-primary my-3 " onClick={ handleLoClick} >convert to Lowercase</button>
     <button className="btn btn-primary mx-3 my-3" onClick={ handleClearClick} >Clear Text</button>
      <h1>Your text Summary</h1>

      <p>{text.split(" ").length} words and {text.length} letters</p>
      <h2>Preview</h2>
      <p>
        {text}
      </p>
      
   </>
     
    
  )
}