import { FC } from "react"

interface ISquare {
	background: string
	enambleBG: boolean
}

const Square: FC<ISquare> = ({ background, enambleBG }) => {
	const squareStyle = {
		background: enambleBG ? background : "yellow",
	}
	return (
		<div
			className="square"
			style={squareStyle}
		></div>
	)
}

export default Square
