import Link from 'next/link';


function Title(props) {
    return (
        <h1 style={ {color: props.color}}>{props.children}</h1>    
    )

}

export default function Sobre() {
    return (
      <div>
            <header>
            <Title color="blue">Página Sobre</Title>
            </header>

            <Link href="/">
            {/*Se colocar o o href n tag <a></a> ele dá um refresh, na tag <Link></Link> não */}
            <a>
                Link para Home!
            </a>      
            </Link>
      </div>
    )
  }
  