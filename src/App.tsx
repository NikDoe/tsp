import { useEffect, useState } from "react"
import AddItem from "./components/AddItem"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Searc from "./components/Search"
import { IProduct } from "./types"

function App() {
	const API_URL: string = "http://localhost:3500/items"

	const [items, setItems] = useState<IProduct[]>([])
	const [search, setSearch] = useState<string>("")
	const [fetchError, setFetchError] = useState<string | null>(null)
	const [isLoading, setIsloading] = useState<boolean>(true)

	useEffect(() => {
		const fetchItems = async (): Promise<void> => {
			try {
				const response = await fetch(API_URL)
				if (!response.ok) throw new Error("the data was not uploaded successfully")
				const products: IProduct[] = await response.json()
				setItems(products)
				setFetchError(null)
			} catch (error) {
				if (error instanceof Error) setFetchError(error.message)
			} finally {
				setIsloading(false)
			}
		}

		fetchItems()
	}, [])

	const handleChecked = (id: number): void => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		)
		setItems(listItems)
	}

	const addItem = (text: string): void => {
		if (!text) return
		const id = items.length ? items[items.length - 1].id + 1 : 1
		const myNewItem = { id, checked: false, text }
		const listItems = [...items, myNewItem]
		setItems(listItems)
	}

	const deleteItem = (id: number): void => {
		const listItems = items.filter(item => item.id !== id)
		setItems(listItems)
	}

	const searchItems: IProduct[] = search
		? items.filter(item => item.text.toLowerCase().includes(search.toLowerCase()))
		: items

	return (
		<div className="App">
			<Header title="shopping list" />
			<Searc
				search={search}
				setSearch={setSearch}
			/>
			<AddItem addItem={addItem} />
			<main>
				{isLoading && <p style={{ textAlign: "center" }}>product loading..........</p>}
				{fetchError && <p style={{ textAlign: "center", color: "red" }}>{fetchError}</p>}
				{!fetchError && !isLoading && (
					<Content
						items={searchItems}
						handleChecked={handleChecked}
						handleDelete={deleteItem}
					/>
				)}
			</main>
			<Footer length={items.length} />
		</div>
	)
}

export default App
