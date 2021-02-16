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
        fallback: true,
    }
 }

 export async function getStaticProps(context) {
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