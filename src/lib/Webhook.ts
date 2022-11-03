export function send(uri: string, data: object) {
    postData(uri, data)
    console.log('Posted data!')
}

async function postData(uri: string = '', data = {}) {
    const response = await fetch(uri, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })

    return response.json()
}