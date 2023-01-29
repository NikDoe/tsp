import { FormEvent, useEffect, useState } from "react"
import AddItem from "./components/AddItem"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Searc from "./components/Search"
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

	const [search, setSearch] = useState<string>("")

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(items))
	}, [items])

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
			<Content
				items={searchItems}
				handleChecked={handleChecked}
				handleDelete={deleteItem}
			/>
			<Footer length={items.length} />
		</div>
	)
}

export default App
