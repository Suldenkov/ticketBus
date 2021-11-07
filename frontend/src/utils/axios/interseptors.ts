const lsTokenKey = 'access'

const setToken = (req: any) => {
	return req
}

const setTokenOnLogin = (res: any) => {
	const isLoginUrl = res.config.url.includes('login/')

	if (isLoginUrl)
		localStorage.setItem(lsTokenKey,  res.data.access)
	return res
}

export const interceptors = (axios: any) => {
	axios.interceptors.request.use(setToken)
	axios.interceptors.response.use(setTokenOnLogin)
}