import { useRouter } from 'next/router';

function getCep() {
    const router = useRouter();
    const cep    = router.query.viaCep;

    return <div>{cep}</div>
} 


export default getCep;