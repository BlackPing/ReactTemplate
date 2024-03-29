import React, { useEffect, useState } from "react";
import SockJS from 'sockjs-client'

const Socket = new SockJS("http://112.154.178.73:8080/echo1?userId=yomile");
Socket.onopen = function() {
    console.log("open");
    Socket.send("이거나 먹어라");
}

Socket.onmessage = function(msg) {
    console.log(msg.data);
}

const ClickE = () => {
    console.log("trst");
    import("../Function/Common").then(func => { // Code Spliting Function JS File
        func.getdata("get", "/test", {}).then((result) => { // async axios data request respons
            console.log(result);
        })
    });
    // Socket.send("야스");
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
        console.log("session ON");
        window.sessionStorage.setItem("Man",  JSON.stringify({name: "test"}));
        console.log(JSON.parse(window.sessionStorage.getItem("Man")));
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