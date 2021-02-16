async function tempo(request, response) {
    const cepSecret = process.env.VIACEP_API_SECRET; 
    const dynamicDate = new Date();

    const cepResponse = await fetch(`http://viacep.com.br/ws/${cepSecret}/json/`);
    const cepResponseJson = await cepResponse.json();
    const bairro = cepResponseJson.bairro;
 
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

    response.json({
         date: dynamicDate.toGMTString(),
        bairro: bairro,
        });
}

export default tempo;