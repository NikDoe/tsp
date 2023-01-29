import { ChangeEvent, FC, FormEvent } from "react"

interface ISearch {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Searc: FC<ISearch> = ({ search, setSearch }) => {
	const handleSearchSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
	}

	const handleSeatchChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value)
	}

	return (
		<form onSubmit={handleSearchSubmit}>
			<input
				type="text"
				placeholder="search"
				value={search}
				onChange={handleSeatchChange}
			/>
		</form>
	)
}

export default Searc
