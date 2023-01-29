import { IApiRequest } from "../types"

export const apiRequest: IApiRequest = async (method, url = "", bodyObject, error = null) => {
	const optionsObj: RequestInit = {
		method,
		headers:
			method !== "DELETE"
				? {
						"Content-Type": "application/json",
				  }
				: undefined,
		body: method !== "DELETE" ? JSON.stringify(bodyObject) : null,
	}
	try {
		const response = await fetch(url, optionsObj)
		if (!response.ok) throw Error("error message")
	} catch (error) {
		if (error instanceof Error) error = error.message
	} finally {
		return error
	}
}
