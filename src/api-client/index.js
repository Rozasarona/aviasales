const urls = {
    base: 'https://front-test.beta.aviasales.ru',
    search: '/search',
    tickets: '/tickets'
}

export async function getSearchId() {
    const response = await fetch(`${urls.base}${urls.search}`);
    if(response.ok) {
        const json = await response.json();
        return json.searchId;
    } else {
        throw new Error('Error with getting search id');
    }
}

export async function getTicketsChunk(searchId) {
    const response = await fetch(`${urls.base}${urls.tickets}?searchId=${searchId}`);
    if(response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw new Error('Error occured while getting tickets');
    }
}