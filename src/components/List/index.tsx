import { FC } from "react"
import { IProduct } from "../../types"
import Item from "../Item"

interface IList {
	items: IProduct[]
	handleChecked: (id: number) => void
	handleDelete: (id: number) => void
}

const List: FC<IList> = ({ items, handleChecked, handleDelete }) => {
	return (
		<ul>
			{items.map(item => (
				<Item
					key={item.id}
					item={item}
					handleChecked={handleChecked}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	)
}

export default List
