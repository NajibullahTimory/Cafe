const inputs = {
    name: document.querySelector('input[name=name]'),
    price: document.querySelector('input[name=price]'),
    Photo: document.querySelector('input[name=Photo]'),
    textarea: document.querySelector('textarea'),
    newButton: document.querySelector('fieldset>button')
}

const container = document.querySelector('.menu-container')

let items = [
    {
        name: 'Espreso',
        price: '70',
        description: 'Tastfull and Energetic',
        image: './asset/img/2.jpg'
    },
    {
        name: 'Amaricano',
        price: '100',
        description: 'Ice cold and warm drink',
        image: './asset/img/3.jpg'
    },
    {
        name: 'Latte',
        price: '90',
        description: 'Warm coffe, Tastful',
        image: './asset/img/1.jpg'
    },
]


const displayItems = () => {
    let itemsToDisplay = items.map((item, i) => {
        return `
        <article class="card">
                <img src=${item.image} />
                <div>
                    <h3>${item.name}</h3>
                    <h4>${item.price} AFN</h4>
                </div>
                <p>${item.textarea}</p>
                <button data-index${i}>🗑</button>
            </article>
        `
    }).join('')
    container.innerHTML = itemsToDisplay



    let deleteButtons = document.querySelectorAll('.card>button')

    deleteButtons.forEach((element) => {
        let thisElmenetIndex = element.getAttribute('data-index')
        element.addEventListener('click', () => {
            deleteItem(thisElmenetIndex)

        })
    })
}
displayItems()
// End of Phase One


// Phase 2: Add a new card


const newItemtHandaler = () => {
    const newItem = {
        name: inputs.name.value,
        price: inputs.price.value,
        textarea: inputs.textarea.value,
        image: inputs.Photo.value
    }
    if (inputs.name.value != '') {
        items.push(newItem)
        displayItems()
        reset()
    }
}
const reset = () => {
    inputs.name.value = null
    inputs.price.value = null
    inputs.textarea.value = null
    inputs.Photo.value = null

}
inputs.newButton.addEventListener('click', () => {
    newItemtHandaler()
})

// Phase 3: Delete iteme

const deleteItem = (index) => {
    items.splice(index, 1)
    displayItems()
}