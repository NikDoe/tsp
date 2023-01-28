import { FC } from "react"
import { IProduct } from "../../types"
import Item from "../Item"

interface IList {
	items: IProduct[]
	handleChecked: (id: number) => void
}

const List: FC<IList> = ({ items, handleChecked }) => {
	return (
		<ul>
			{items.map(item => (
				<Item
					key={item.id}
					item={item}
					handleChecked={handleChecked}
				/>
			))}
		</ul>
	)
}

export default List
