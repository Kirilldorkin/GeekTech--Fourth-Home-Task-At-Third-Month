const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data,
    });

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    return await response.json();
}



const sendInfo = () => {
    const form = document.querySelector(".form")

    form.addEventListener("submit", e => {
        e.preventDefault()

        const formData = new FormData(form)

        sendData("https://jsonplaceholder.typicode.com/users", formData)
            .then(() => {
                form.reset()
            })
            .catch((err) => console.log(err))
    })
}

sendInfo()