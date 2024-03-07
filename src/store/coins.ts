import { makeAutoObservable, runInAction } from 'mobx'

import { Api } from '../services/api.ts'

// types can be extracted to separate files

export interface Coin {
	usd: {
		rate: number | string,
		ask: number | string,
		bid: number | string,
		diff24h: number | string,
	}
}

export type Coins = Record<string, Coin>


export class CoinsStore {

	api: Api
	_loading: string[] = []

	// TODO 4: errors can be extracted to separate "root" or "error" store with Toast lib
	error: string | null = null

	get loading() {
		return this._loading.length > 0
	}

	constructor({ api }: { api: Api }) {
		this.api = api

		makeAutoObservable(this, { api: false })

		// TODO 2: fetch coins
		// if we want to fetch data on application load, we can do it here
		this.fetchCoins()
	}

	// @observable
	_coins: Coins = {}

	// @action
	fetchCoins() {
		runInAction(async () => {
			this._loading.push('fetchCoins')
			try {
				const data = await this.api.getCoins()
				this._coins = data
				this.error = null
			}
			catch(e) {
				this.error = e as unknown as string
			}
			// TODO 3: serializing - here we can serialize data for safe future use e.g. no "usd" property in "Coin"
			this._loading.pop()
		})
	}

	// @observable
	filter = {
		name: ''
	}

	// @action
	search = ({  name }: { name: string }) => {
		this.filter.name = name
	}

	// this is place for filtering and sorting for "_coins"
	// @computed
	get coins() {
		const { name } = this.filter
		return Object.entries(this._coins).filter(([key]) => key.includes(name))
	}

	getCoin = (name: string | undefined): Coin => {
		// Here we can implement default behavior for safe data extraction OR see // TODO 3
		if (!name) return {
			usd: 
			{
				rate: ',',
				ask: '',
				bid: '',
				diff24h: '',
			}
	}
		return this._coins[name] || {}
	}

}