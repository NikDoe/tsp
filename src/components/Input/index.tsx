import { ChangeEvent, FC } from "react"

interface IInput {
	type: string
	checked?: boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({ type, checked, onChange }) => {
	return (
		<input
			onChange={onChange}
			checked={checked}
			type={type}
		/>
	)
}

export default Input
