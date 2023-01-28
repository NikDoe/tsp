import { FormEvent, useEffect, useState } from "react"
import AddItem from "./components/AddItem"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { IProduct } from "./types"

function App() {
	const [items, setItems] = useState<IProduct[]>(() => {
		const value = window.localStorage.getItem("list")
		if (value) {
			return JSON.parse(value)
		} else {
			return []
		}
	})

	useEffect(() => {
		if (localStorage.getItem("list") === null) {
			localStorage.setItem("list", JSON.stringify([]))
		}
	}, [])

	const setAndSaveItems = (arr: IProduct[]): void => {
		setItems(arr)
		localStorage.setItem("list", JSON.stringify(arr))
	}

	const handleChecked = (id: number): void => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		)
		setAndSaveItems(listItems)
	}

	const addItem = (text: string): void => {
		if (!text) return
		const id = items.length ? items[items.length - 1].id + 1 : 1
		const myNewItem = { id, checked: false, text }
		const listItems = [...items, myNewItem]
		setAndSaveItems(listItems)
	}

	return (
		<div className="App">
			<Header title="shopping list" />
			<AddItem addItem={addItem} />
			<Content
				items={items}
				handleChecked={handleChecked}
			/>
			<Footer />
		</div>
	)
}

export default App
