const urls = {
    base: 'https://front-test.beta.aviasales.ru',
    search: '/search'
}

export async function getSearchId() {
    const response = await fetch(`${urls.base}${urls.search}`);
    if(response.ok) {
        const json = await response.json;
        return json.searchId;
    } else {
        throw new Error('Error with getting search id');
    }
}