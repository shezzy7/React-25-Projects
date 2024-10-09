import { useState } from "react";
import "./Style.css"
import data from "./data";

// single 
//multiple
function Index() {
    let [selected, setSelected] = useState(null);
    let [enableMulti,setEnableMulti] = useState(false);
    let [multiple,setMultiple] = useState([]);

    let handleSingleSelect = (itemId) => {

        setSelected(selected === itemId ? null : itemId);
    }

    let handleMultiSelected = (itemId)=>{
        setSelected(null);
        let copyArr = [...multiple];
        if(copyArr.indexOf(itemId)===-1){
            copyArr.push(itemId);
        }
        else{
            copyArr.splice(copyArr.indexOf(itemId),1);
        }
        setMultiple(copyArr);
    }
    return (
        <div className="wrapper">
            <h2>Accordion</h2>
            <button onClick={()=>{setEnableMulti(!enableMulti);}}>Enable Multiple Selection</button>
            <div className="accordian">

                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className="item"  key={dataItem.id}>
                            <div className="title" onClick={() =>enableMulti?handleMultiSelected(dataItem.id): handleSingleSelect(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                              (enableMulti && multiple.indexOf(dataItem.id)!=-1)  || selected===dataItem.id  ? (<div className="content">{dataItem.answer} </div>)  :null  
                            }
                        </div>
                        ) : <div>No data found </div>
                }
            </div>
        </div>
    )
}
export default Index;