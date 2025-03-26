async function onHtmlLoad() {
    await fetch('http://localhost:1609/teste', {
        method: 'get',
    })
    .then(res => { return res.json() })
    .then(api => {
        console.log(api)
    })
};