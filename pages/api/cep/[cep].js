export default async function dynamicGetCep(request, response) {
    const { 
        query: { cep },
    } = request;
    
    const cepResponse     = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const cepResponseJson = await cepResponse.json();
    const cepLogradouro   = cepResponseJson.logradouro; 
    const cepBairro       = cepResponseJson.bairro;
    const cepLocalidade   = cepResponseJson.localidade;
    const cepUf           = cepResponseJson.uf;
    const cepDdd          = cepResponseJson.ddd;

    response.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate');

    response.json({
        cep: cep,
        logradouro: cepLogradouro,
        bairro: cepBairro,
        localidade: cepLocalidade,
        uf: cepUf,
        ddd: cepDdd
    })
}