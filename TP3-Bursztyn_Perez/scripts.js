

const traerProductos = (url) => {
  axios.get(url)
    .then(res => {
      const productosUl = document.getElementById("productos");
      const textoIngresado = document.getElementById("textoIngresado")
      productosUl.innerHTML = "";

      res.data.products.forEach(element => {
        const unLi = document.createElement("li");

        unLi.innerHTML = `<b> ${element.title} </b> <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="traerInformacion(${element.id})">Ver Detalle </a>`;

        productosUl.appendChild(unLi); //agrega un valor al final de una lista
      });

      document.getElementById("buscar").onclick = () => traerProductos("https://dummyjson.com/products/search?q=" + textoIngresado.value);

      console.log(res);
    });
}

traerProductos("https://dummyjson.com/products");


const traerInformacion = (id) => {
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  console.log(id)
  axios.get("https://dummyjson.com/products/" + id)
    .then(res => {
      const tituloModal = document.getElementById("tituloProdModal");
      const textoInfo = document.getElementById("modalInfo");
      tituloModal.innerHTML = res.data.title;
      textoInfo.innerHTML = `<b> ${res.data.brand} </b><p> ${res.data.category} </p> <p> ${res.data.description} </p>`;
      console.log(res);
      myModal.show();
    });
}

