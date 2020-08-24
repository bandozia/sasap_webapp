import { Professional } from '../../../professionals/model/professional.model'

export interface Client {
	professional: Professional
	name: string
	birth: Date
	payer: Client
	data: ClientData
	sensitiveData: ClientSensitiveData
}

export interface ClientData {

}

export interface ClientSensitiveData {

}
