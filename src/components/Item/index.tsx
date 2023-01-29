import { FC } from "react"
import { IProduct } from "../../types"

interface IItem {
	item: IProduct
	handleChecked: (id: number) => void
	handleDelete: (id: number) => void
}

const Item: FC<IItem> = ({ item, handleChecked, handleDelete }) => {
	return (
		<li>
			<input
				type="checkbox"
				checked={item.checked}
				onChange={() => handleChecked(item.id)}
			/>
			{item.text}
			<button onClick={() => handleDelete(item.id)}>delete</button>
		</li>
	)
}

export default Item
