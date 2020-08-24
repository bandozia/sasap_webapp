import { Profession } from './profession.model'
import { Address } from '../../shared/model/address.model'

export interface Professional {
    id: string
    dependsOn: Professional
    profession: Profession
    crm: string
    crp: string
    name: string
    email: string
    birth: Date
    phone: number
    address: Address
    rg: number
    cpf: number
    cnpj: number
    bank: string
    agency: string
    account: string
    comments: string    
}