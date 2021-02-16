function Tempo(props) {
    console.log('> Here is the Front End!')
    const dynamicDate = new Date();
    const dynamicDateString =dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} : (Dinâmico)</div>
            <div>{props.staticDataString} : (Estático)</div>
        </div>
    );
}

export function getStaticProps() {
    console.log('> Passando pelo getStaticProps();')
    const staticData = new Date();
    const staticDataString = staticData.toGMTString();

    return {
        props: {
            staticDataString
        },
        revalidate: 1,
    }
}

export default Tempo