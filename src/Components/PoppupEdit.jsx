import { useState } from "react"
import "./Popup.css"

export default function Popup(props) {

    const [newValueP,setNewValueP] = useState('')

    const closePopup=()=>{
        props.closeX(false)
    }

    const updateValueP=()=>{
        if(newValueP.length <= 5){
            return alert("Digite algum novo valor com 5 caracteres no minimo!")
        }else{
            props.altereValueP(newValueP)
            props.closeX(false)
        }
    }

    return <div className="PopupBackground">
              <div className="PopupContent">
                  <section className="PopupHeader">
                      <h2>Editar o texto?</h2>
                      <button onClick={()=>{closePopup()}}>X</button>
                  </section>
                  <section className="PopupContentField">
                      <p>Digite a nova tarefa para ele!(O valor <br/> inicial sempre e reescrito!)</p>
                      <input name="input-disabled" type="text" className="disabled" value={props.valueP} disabled/>
                      <input name="input-newValue" type="text" onChange={(e)=>{setNewValueP(e.target.value)}}/>
                      <button onClick={()=>updateValueP()}>Alterar</button>
                  </section>
              </div>
          </div>
}