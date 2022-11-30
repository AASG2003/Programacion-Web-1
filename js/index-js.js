const baseDeDatos = [
    {
        id: 1,
        nombre: 'CIDLI2003 PRO',
        precio: 300
    },
    {
        id: 2,
        nombre: 'Rivet 100PZ',
        precio: 37
    },
    {
        id: 3,
        nombre: 'Desarmador de presicion',
        precio: 85
    }

];

let carrito = [];
let carritoTabla = [];
const divisa = 'Bs.';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMcarritoTabla = document.querySelector("#carritoTabla");
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function anyadirProductoAlCarrito(evento) {
    carritoTabla.push(evento.target.getAttribute('marcador'));
    renderizarCarritoTabla();

}

// Crear carrito con tables
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

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carritoTabla = carritoTabla.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarritoTabla();
}

function calcularTotal() {
    return carritoTabla.reduce((total, item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {
    carritoTabla = [];
    renderizarCarritoTabla();
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);
renderizarCarritoTabla();