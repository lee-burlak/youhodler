import { Axios } from 'axios'
import { Coins } from '../store/coins.ts'

export class Api {

	provider

	constructor({ provider }: { provider: Axios }) {
		this.provider = provider
	}

	// COINS DOMAIN

	async getCoins(): Promise<Coins> {
		try {
			const result = await this.provider.get<Coins>('/rates/extended')
			return result.data
		}
		catch(e) {
			return {}
		}
	}

}