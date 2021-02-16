async function tempo(request, response) {
    const cepSecret = process.env.VIACEP_API_SECRET; 
    const dynamicDate = new Date();

    const cepResponse = await fetch(`http://viacep.com.br/ws/${cepSecret}/json/`);
    const cepResponseJson = await cepResponse.json();
    const bairro = cepResponseJson.bairro;
 
     response.json({
         date: dynamicDate.toGMTString(),
        bairro: bairro,
        });
}

export default tempo;