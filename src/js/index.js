async function getToDos() {
    const url = '/.netlify/functions/todos';
    const res = await fetch(url);
    const data = await res.json();
    document.querySelector('#tagline').textContent = data.path;
}

getToDos();