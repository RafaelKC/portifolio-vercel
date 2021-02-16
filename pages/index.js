import { useState } from "react";
import Link from "next/link"

function Home() {
    return (
         <div>
            <h1>home 3</h1>
            <Contador />
            <h3>Teste</h3> 
            <Sobre />
         </div> 
        );
}

function Sobre() {
    return (
        <div>
            <Link href="/sobre">
            <button>
                Sobre
            </button>      
            </Link>
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