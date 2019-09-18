import React, { useEffect, useState } from "react";
import loadable from '@loadable/component'

const App = () => {

    const [count, setCount] = useState("");
    return (
        <>
            <div>Chatting</div>
            <script src="./lib/sockjs.min.js"></script>
        </>
    );
}

export default App;