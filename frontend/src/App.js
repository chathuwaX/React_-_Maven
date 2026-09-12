import React,{ useState } from 'react';

function App(){

const [message, setMessage] = useState("Hello,Assingnment one");

const buttonClick = () => {
          setMessage("React goda damu");
};

return (
   <div style={{textAlign: 'center',marginTop:'50px'}}>
        <h1>{message}</h1>
        <button onClick={buttonClick} style={{padding: '10px',frontSize:'16px'}}>
           Click Me
        </button>
   </div>
   );
}

export default App;