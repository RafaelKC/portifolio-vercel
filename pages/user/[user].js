 export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                user: 'Rafael'
            }
        },{
            params: {
                user: 'Mylena'
            },
        },{
            params: {
                user: 'Felipe'
            },
        }],
        fallback: 'blocking',
    }
 }

 export async function getStaticProps(context) {
    await delay(5000);
    const user = context.params.user;

     return {
         props: {
             user: user,
         }
     }
 }

function Users(props) {

    return <div> Bem vindo ao perfil do(a) {props.user} </div>
}

export default Users;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}