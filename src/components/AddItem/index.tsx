import { ChangeEvent, FC, FormEvent, useRef, useState } from "react"

interface IAddNewItem {
	addItem: (text: string) => void
}

const AddItem: FC<IAddNewItem> = ({ addItem }) => {
	const [newElement, setNewElement] = useState<string>("")
	const inputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		setNewElement("")
		if (inputRef && inputRef.current) inputRef.current.focus()
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setNewElement(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				ref={inputRef}
				onChange={handleChange}
				type="text"
				value={newElement}
			/>
			<button onClick={() => addItem(newElement)}>добавить</button>
		</form>
	)
}
export default AddItem
