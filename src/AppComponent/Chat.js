import React, { useEffect, useState } from "react";
import SockJS from 'sockjs-client'

const Socket = new SockJS("http://127.0.0.1:8080/echo1");


const ClickE = () => {
    import("../Function/Common").then(func => {
        func.getdata("post", "/session", {}).then((result) => {
            console.log(result);
        })
    });
}

const Talk = (props) => {
    return (
        <>
            {props.name}
        </>
    );
}

function Chat(props) {
    
    const [count, setCount] = useState("1234");
    const ClickT = () => {

        setCount("2222");
    }
    return (
        <>
            <div>Chatting</div>
            <Talk name="tttt" />
            {count}
            <button onClick={ClickE}>ClickMe</button>
            <button onClick={ClickT}>ClickTwo</button>
        </>
    );
}

export default Chat;