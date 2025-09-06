export const getValueFromStorage = (key: string) => {
	return localStorage.getItem(key)
}

export const setValueFromStorage = (key: string, value: string) => {
	return localStorage.setItem(key, value)
}
