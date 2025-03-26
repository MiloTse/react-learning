import {useDeferredValue, useState} from "react";

function Todos ({text}){
    const items = [];
    for (let i = 0; i < 100; i++) {
        items.push(<div key={i}>{text}</div>)
    }

    const startime = (new Date()).getTime();

    while((new Date()).getTime() - startime < 60){
    }
    return <div>{items}</div>

}

function App() {
    const[inputValue,setInputValue]= useState('');
    //defer inputValue
    const deferredInputValue = useDeferredValue(inputValue);
    return (
        <>
            <input
                value={inputValue || ''}
                onChange={(e)=>{setInputValue(e.target.value)}}
            />
            <Todos text={deferredInputValue}/>
        </>
    );
}

export default App;



































