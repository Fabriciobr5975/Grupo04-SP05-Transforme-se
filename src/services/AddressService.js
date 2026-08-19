
class ViaCepResponse {
    constructor(viaCepObject) {
        this.cep = viaCepObject.cep;
        this.logradouro = viaCepObject.logradouro;
        this.complemento = viaCepObject.complemento
        this.unidade = viaCepObject.unidade;
        this.bairro = viaCepObject.bairro;
        this.localidade = viaCepObject.localidade;
        this.uf = viaCepObject.uf;
        this.estado = viaCepObject.estado;
        this.regiao = viaCepObject.regiao;
        this.ibge = viaCepObject.ibge;
        this.gia = viaCepObject.gia;
        this.ddd = viaCepObject.ddd;
        this.siafi = viaCepObject.siafi;
    }
}

export async function getAddressFromViaCep(cep) {
    const VIACEP_URL_API = `https://viacep.com.br/ws/${cep}/json/`;
    
    try {
        const response = await fetch(VIACEP_URL_API);
        const data = await response.json();
        
        if (data.erro) {
            throw new Error(`O CEP ${cep} informado não foi encontrado, verifique se o CEP passado está correto`);
        }
        
        return new ViaCepResponse(data);
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}