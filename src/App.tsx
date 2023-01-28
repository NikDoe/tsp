import { ChangeEvent, useState } from "react"
import Input from "./components/Input"
import Square from "./components/Square"

function App() {
	const [bg, setBg] = useState<string>("")
	const [checked, setChecked] = useState<boolean>(true)

	const changeBackGroundHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setBg(e.target.value)
	}

	const enableBGHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(!checked)
	}

	return (
		<div className="App">
			<Square
				background={bg}
				enambleBG={checked}
			/>
			<Input
				type="text"
				onChange={changeBackGroundHandler}
			/>
			<div>
				<label>залить фон этим цветом</label>
				<Input
					type="checkbox"
					checked={checked}
					onChange={enableBGHandler}
				/>
			</div>
		</div>
	)
}

export default App
