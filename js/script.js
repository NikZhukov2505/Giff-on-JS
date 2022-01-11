//===========================Promice=========================

// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         status: 'Work',
//         server: 'ITCBootcamp',
//         port: 2000
//     }

//     setTimeout(() => {
//         console.log('Data received', backendData);
//     }, 1000);

// }, 3000);


// console.log('Request data...');

// const prm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');

//         const backendData = {
//             status: 'Work',
//             server: 'ITCBootcamp',
//             port: 2000
//         }
//         // resolve(backendData)
//         reject(backendData)
//     }, 2000)
// })

// // prm.then((response) => {
// //     console.log('Promise resolved', response);
// // })
// // prm.catch((err) => {
// //     console.error('Error', err);
// // })

// prm.then(response => {
//     console.log('Promise resolved', response);
// }).catch(err => {
//     console.error('Error', err);
// }).finally(() => {
//     alert('Finall!!!')
// })


//=====================Fetch/Asinc/Await===========================

// AJAX - запрос(Asinhronus Javascript and Xml)
// Fetch - объект для работы с запросами.(Работает на Промисах)

// const search = async () => {
//     let url = 'https://samurai.com/users'
//     let request = await fetch(url);
//     let response = await request.json();
//     console.log(response);
// }
//=================================================================


// let API = 'https://jsonplaceholder.typicode.com/users'

// const getUsers = async () => {
//     let request = await fetch(API)
//     let response = await request.json()
//     renderUsers(response)
// }
// getUsers()

// const renderUsers = (data) => {
//     data.forEach(user => {
//         console.log(user);
//         const name = document.createElement('h2')
//         name.textContent = user.name
//         document.body.append(name)

//         const email = document.createElement('h2')
//         email.textContent = user.email
//         document.body.append(email)

//         const address = document.createElement('p')
//         address.textContent = user.address.city + ', ' + user.address.street
//         document.body.append(address)

//         const compName = document.createElement('p')
//         compName.textContent = user.company.name
//         document.body.append(compName)
//     });
// }

const API = 'https://api.giphy.com/v1/gifs/search?';
const key = 'api_key=PKeZfjLF5GFgpZXFeNaFoc305iT96dNy';
const limit = '&limit=';
const params = '&q='
const select = document.getElementById('count')
const btn = document.getElementById('search')
const form = document.querySelector('form')
const output = document.querySelector('.output')

const searchGiphy = async () => {
    let input = document.getElementById('input');
    let count = select.value
    let url = API + key + limit + count + params + input.value;
    let request = await fetch(url);
    let response = await request.json();
    console.log(response.data);
    render(response.data);
    input.value = ''
}



const render = (gif) => {
    output.innerHTML = ''
    gif.forEach(e => {
        const card = document.createElement('div')
        card.classList.add('card')
        const title = document.createElement('h3')
        const giphy = document.createElement('iframe');
        title.textContent = e.title.length > 15 ? e.title.slice(0, 15) + '...' : el.title
        title.title = e.title
        giphy.src = e.embed_url;
        card.append(title, giphy)
        output.append(card)
    });

}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    searchGiphy()
});