import React, { useState } from 'react';

const ButtonComponent = function() {
    return (
        <>
            <button>이거도 버튼임 ㄹㅇㅋㅋ</button>
        </>
    );
}

const success = (response) => {
    console.log(response);
  };
   
const failure = (error) => {
console.log(error);
};

class Home extends React.Component {
    render() {
        return(
            <>
                <div>Home</div>
                <ButtonComponent />
                <form action="http://127.0.0.1:8080/login" method="post">
                    <input type="submit" value="로그인테스트" />
                </form>
            </>
        )
    }
}

export default Home;