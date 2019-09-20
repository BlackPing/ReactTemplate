import React, { useEffect, useState } from "react";
import SockJS from 'sockjs-client'

const Socket = new SockJS("http://127.0.0.1:8080/echo1");

var test = 1234;

const Chat = () => {
    // handleData(data) {
    //     let result = JSON.parse(data);
    //     this.setState({count: this.state.count + result.movement});
    //   }
    const [count, setCount] = useState("");
    return (
        <>
            <div>Chatting</div>

        </>
    );
}

export default Chat;