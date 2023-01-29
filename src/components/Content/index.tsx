import { FC } from "react"
import { IProduct } from "../../types"
import List from "../List"

interface IContent {
	items: IProduct[]
	handleChecked: (id: number) => void
	handleDelete: (id: number) => void
}

const Content: FC<IContent> = ({ items, handleChecked, handleDelete }) => {
	return (
		<>
			{items.length !== 0 ? (
				<List
					items={items}
					handleChecked={handleChecked}
					handleDelete={handleDelete}
				/>
			) : (
				<p>list is empty</p>
			)}
		</>
	)
}

export default Content
