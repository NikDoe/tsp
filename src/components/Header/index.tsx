import { FC } from "react"

interface IHeader {
	title?: string
}

const Header: FC<IHeader> = ({ title = "list" }) => {
	return (
		<header className="header">
			<h2>{title}</h2>
		</header>
	)
}

export default Header
