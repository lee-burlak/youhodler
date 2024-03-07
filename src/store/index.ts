import { useContext, createContext } from 'react'
import { CoinsStore } from './coins.ts'
import axios from 'axios'

import { Api } from '../services/api.ts'

const client = axios.create({
	baseURL: `${import.meta.env.VITE_APP_API}`,
})

const api = new Api( { provider: client })

const coinsStore = new CoinsStore({ api })

const stores = {
	coinsStore
}

const StoresContext = createContext(stores)

export function useStore() {
	const stores = useContext(StoresContext)
	return stores
}
