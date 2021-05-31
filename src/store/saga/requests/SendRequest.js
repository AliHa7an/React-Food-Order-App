
const sendRequest = async (requestConfig) => {

    const { url, method, headers, body } = requestConfig

    const response = await fetch(url, {
        method: method || undefined,
        headers: headers || undefined,
        body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const responseData = await response.json();
    return responseData
}
export default sendRequest