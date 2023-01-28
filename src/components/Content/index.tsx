import { FC } from "react"
import { IProduct } from "../../types"
import List from "../List"

interface IContent {
	items: IProduct[]
	handleChecked: (id: number) => void
}

const Content: FC<IContent> = ({ items, handleChecked }) => {
	return (
		<main className="main">
			{items.length !== 0 ? (
				<List
					items={items}
					handleChecked={handleChecked}
				/>
			) : (
				<p>list is empty</p>
			)}
		</main>
	)
}

export default Content
