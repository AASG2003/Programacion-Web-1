{/* <div class="producto col-12 col-md-6 col-lg-4">
    <div class="card ">
        <img src="images/CIDLI2003.jpg" class="card-img-top" alt="Imagen taladro">
            <div class="card-body">
                <h5 class="card-title">CIDLI2003</h5>
                <p class="card-text">Taladro Atornillador a bateria 20V ION-Litio c/2 bateria c/Maleta</p>
            </div>
            <ul class="list-group list-group-flush text-start">
                <li class="list-group-item">Voltage: 20V</li>
                <li class="list-group-item">No-load speed: 0-450/0-1900min-1</li>
                <li class="list-group-item">Max. Torque: 55NM</li>
                <li class="list-group-item">Chuck capacity: 2.0 - 13mm</li>
            </ul>
            <div class="card-body">
                <button onclick="anyadirProductoAlCarrito(event)" class="btn btn-primary" marcador="1">Agregar al carrito</a>
            </div>
    </div>
</div> */}
const DOMPrimeraCategoria = document.querySelector("#PrimeraCategoria");
function renderizarProductos(){
    const producto = document.createElement('div');
    producto.classList.add('producto', 'col-12', 'col-md-6', 'col-lg-4');
    const card = document.createElement('div');
    card.classList.add('card');
    
}

function renderizarCarritoTabla() {
    DOMcarritoTabla.textContent = '';
    const carritoSinDuplicados = [...new Set(carritoTabla)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carritoTabla.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const fila = document.createElement('tr');
        const colDatos = document.createElement('td');
        const colBoton = document.createElement('td');
        colBoton.style.textAlign = 'right';
        colDatos.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        const miBotont = document.createElement('button');
        miBotont.classList.add('btn', 'btn-primary');
        miBotont.textContent = 'X';
        miBotont.dataset.item = item;
        miBotont.addEventListener('click', borrarItemCarrito);
        colBoton.appendChild(miBotont);
        fila.appendChild(colDatos);
        fila.appendChild(colBoton);
        DOMcarritoTabla.appendChild(fila);

    });
    DOMtotal.textContent = calcularTotal();
}