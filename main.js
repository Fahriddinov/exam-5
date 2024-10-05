async function getPromise() {
  try {
    const body = document.querySelector('body');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Поиск продуктов...';
    inputField.style.width = '350px';
    inputField.style.padding = '10px';
    inputField.style.fontSize = '18px';
    inputField.style.marginLeft = '90px';
    inputField.style.marginTop = '50px';
    inputField.style.marginBottom = '50px';
    body.appendChild(inputField);

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';
    container.style.gap = '20px';
    body.appendChild(container);

inputField.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const boxes = container.children;
  for (const box of boxes) {
    const title = box.querySelector('p:nth-child(3)').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      box.style.display = 'flex';
    } else {
      box.style.display = 'none';
    }
  }
});

    const response = await fetch('https://raw.githubusercontent.com/diyor011/apibest/master/api.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    data.forEach((item, index) => {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = '300px';
      box.style.height = '500px';
      box.style.border = '1px solid #000';
      box.style.borderRadius = '10px';
      box.style.display = 'flex';
      box.style.flexDirection = 'column';
      box.style.alignItems = 'center';
      box.style.justifyContent = 'space-around';
      box.style.padding = '10px';
      box.style.boxSizing = 'border-box';
      box.style.textAlign = 'center';

      const name = document.createElement('p');
      name.textContent = `${item.id}`;
      name.style.fontSize = '15px';
      name.style.margin = '5px 0';
      box.appendChild(name);

      
      const image = document.createElement('img');
      image.src = item.pic;
      image.style.width = '150px';
      image.style.height = '150px';
      image.style.objectFit = 'contain';
      box.appendChild(image);

      const category = document.createElement('p');
      category.textContent = `${item.name}`;
      category.style.fontSize = '15px';
      category.style.margin = '5px 0';
      box.appendChild(category);

      const description = document.createElement('p');
      description.textContent = `${item.desc1}`;
      description.style.fontSize = '15px';
      description.style.margin = '5px 0';
      box.appendChild(description);

      const price = document.createElement('p');
      price.textContent = `${item.fulldesc}`;
      price.style.fontSize = '15px';
      price.style.margin = '5px 0';
      box.appendChild(price);

      const rate = document.createElement('p');
      rate.textContent = `Рейтинг: ${item.price}`;
      rate.style.fontSize = '15px';
      rate.style.margin = '5px 0';
      box.appendChild(rate);

      const count = document.createElement('p');
      count.textContent = `Количество: ${item.count}`;
      count.style.fontSize = '15px';
      count.style.margin = '5px 0';
      box.appendChild(count);

      container.appendChild(box);
    });
  } catch (error) {
    console.log('Ошибка:', error);
  }
}

getPromise();