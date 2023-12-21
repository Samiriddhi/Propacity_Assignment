import React,{useState} from 'react'

function CreateNote(props) {
      const [note, setNote] = useState(
        {
            title:"",
            content:"",
        }
      )

      const InputEvent=(event) => {

        const value=event.target.value;
        const name=event.target.name;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            };
        });
      };


      const addEvent = () =>{
        props.passNote(note);
         setNote({
            title:"",
            content:"",
         })
      }


  return (
    <div className="main-box">
        <form> 
            <input type="text"
            name="title"
             value={note.title} 
              onChange={InputEvent}
               placeholder='Title'
                autoComplete='off'/>
            <textarea 
            rows=""
             column=""
             name="content"
              value={note.content
              } onChange={InputEvent} 
              placeholder='Write Your Important Notes Here' >
              </textarea>
           <button onClick={addEvent} >+</button>
        </form>
    </div>
  )
}

export default CreateNote