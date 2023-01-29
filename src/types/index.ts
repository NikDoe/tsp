export interface IProduct {
	id: number
	checked: boolean
	text: string
}

export interface IApiRequest {
	(
		method: string,
		url: string,
		bodyObject?: Partial<IProduct> | IProduct | IProduct[],
		error?: null | string
	): Promise<string | null>
}
