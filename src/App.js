import React, {useState} from 'react'
import Header from "./Header.js";
import Footer from "./Footer.js";
import CreateNote from './CreateNote.js';
import Note from './Note.js';
import './App.css';

function App() {
  

  const [addItem, setAddItem] = useState([])

  const addNote =(note) => {
     //alert("clickedd")
     setAddItem((prevData)=>{
         return [...prevData, note];
     })
     console.log(note)
  };


   const onDelete = (id)=>{
    setAddItem((olddata)=>
       olddata.filter((currdata,indx)=>{
        return indx !== id;
       })
    )
   }
     
  return (
    <div className="App">
        <Header/>
        <CreateNote 
            passNote={ addNote}
           />
       {
        addItem.map((val, index)=>{
          return(
            <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            />
          )
        })
       }
        
    </div>
  );
}

export default App;
