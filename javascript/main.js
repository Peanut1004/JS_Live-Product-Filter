const products = document.querySelector('.products');
const filter = document.getElementById('filter'); 

let listItem = [];

async function getData() {
  products.innerHTML = '';

  const res = await fetch('https://fakestoreapi.com/products');

  const result = await res.json();

  result.forEach(product => {
    const div = document.createElement('div');
    div.setAttribute('class', 'product');

    div.innerHTML = `
      <img src="${product.image}" alt="image">
      <div class="product-detail">
        <h4>${product.title.slice(0, 30)}</h4>
        <p>$${product.price}</p>
      </div>
    `;

    listItem.push(div);

    products.appendChild(div)
  });
}
getData()

filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(search) {
  listItem.forEach(item => {
    if(item.innerText.toLowerCase().includes(search.toLowerCase())) item.classList.remove('hide')
    else item.classList.add('hide')
  })
}

