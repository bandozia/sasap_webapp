//https://viacep.com.br/ws/[cep]/json/
export interface AddressReturn {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    unidade: string
    ibge: string
    gia: string
}