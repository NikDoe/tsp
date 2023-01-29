import { FC } from "react"

interface IFooter {
	length: number
}

const Footer: FC<IFooter> = ({ length }) => {
	return (
		<footer className="footer">
			<p>
				{length} {length === 1 ? "product" : "products"} in cart{" "}
			</p>
		</footer>
	)
}

export default Footer
