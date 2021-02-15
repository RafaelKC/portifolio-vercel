import { useState } from "react";

function Home() {
    return (
         <div>
            <h1>home 3</h1>
            <Contador />
            <h3>Teste</h3> 
         </div> 
        );
}

function Contador() {
    const [contador, setContador] = useState(1);


    function adicionaContador() {
        setContador(contador + 1);  
    } 

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}>Adicionar</button>
        </div>
    );
}

export default Home