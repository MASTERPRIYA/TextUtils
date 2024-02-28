import React, { useState } from "react";

export default function TextField(props){

   const changetoUpCase = ()=>{
        console.log("Uppercase");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const changetoLoCase = () =>{
        console.log("LowerCase");
        let newText=text.toLowerCase();
        setText(newText);
    }

    const removeWhiteSpace = () =>{
        console.log("remove whitespace");
        let newText=text.replace(" ","");
        setText(newText);
    }

    const reverseText = () =>{
        console.log("reverse text");
        let newText=text.split(' ').reverse().join(' ');
        setText(newText);
    }

    const capitalizeText = () =>{
        console.log("capitalize Text");
        let lowerCase=text.toLowerCase();
        let words=lowerCase.split(" ");
        let newWords = words.map((words) =>{
            // let a=words.slice(1);
            // console.log(a);
            return words.charAt(0).toUpperCase()+words.slice(1) //The slice(1) method is used to extract a portion of a string, starting from a specified index
          
        });
        let newText = newWords.join(" ");
        setText(newText);
    }

    const clearText = () =>{
        console.log("clear text");
        setText("");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        const text = event.target.value;
        const words = text.split(' ');
        setCount(words.length);
    }


    const[text,setText]=useState("Type here");
    const[count,setCount]=useState(0);

    return(
        <>
            <div className=" container mt-5" >
                <h1>{props.heading}</h1><br/>
               <b><p>Count Words:{count}</p></b> 
                <textarea className="form-control py-5" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-warning m-4" onClick={changetoUpCase}>Convert into uppercase</button>
                <button className="btn btn-warning m-4" onClick={changetoLoCase}>Convert into lowerCase</button>
                <button className="btn btn-warning m-4" onClick={removeWhiteSpace}>Remove Whitespace</button>
                <button className="btn btn-warning m-4" onClick={reverseText}>Reverse Text</button>
                <button className="btn btn-warning m-4" onClick={capitalizeText}>Capitalize Text</button>
                <button className="btn btn-warning" onClick={clearText}>Clear Text</button>
            </div>
        </>
    )
}