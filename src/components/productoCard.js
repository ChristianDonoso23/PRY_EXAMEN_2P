import { LitElement, html, css} from "lit";

export class ProductoCard extends LitElement {

    static properties = {
        nombreProducto: { type: String },
        precioUnitario: { type: Number },
        cantidadProducto: { type: Number },
        precioTotal: { type: Number }
    };
    constructor() {
        super();
        this.nombreProducto = " ";
        this.precioUnitario = 0;
        this.cantidadProducto = 1;
        this.precioTotal = 0;
    }




    calcularPrecioTotal() {
        this.precioTotal = this.precioUnitario * this.cantidadProducto;
        
    }


    aumentar() {
        this.cantidadProducto += 1;
        this.precioTotal = this.precioUnitario * this.cantidadProducto;
    }
    
    disminuir() {
        if (this.cantidadProducto > 0) {
            this.cantidadProducto -= 1;
            this.precioTotal = this.precioUnitario * this.cantidadProducto;
        }
    }


    render() {
        return html`
            <link rel="stylesheet" href="./src/vendor/bootstrap/css/bootstrap.min.css">

            <div class="container mt-5 bg-light p-4 rounded">
            <div class="mb-3">
                <h1> Ingreso Datos Producto </h1>
                <label for="prod_nombre" class="form-label">Nombre del Producto:</label>
                <input type="text" class="form-control" id="prod_nombre" @input="${(e) => { this.prod_nombre = e.target.value; }}">
                <label for="prod_precio_unit" class="form-label">Precio Unitario:</label>
                <input type="number" class="form-control" id="prod_precio_unit" @input="${(e) => { this.prod_precio_unit = parseFloat(e.target.value); this.calcular_total(); }}">
                
            </div>
            </div>
            <div class="container mt-5">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Producto: ${this.nombreProducto}</h5>
                    <p class="card-text">Precio Unitario: $${this.precioUnitario}</p>
                    <p class="card-text">Cantidad: ${this.cantidadProducto}</p>
                    <p class="card-text">Total: $${this.precioTotal}</p>
                </div>
            </div>
            <button class="btn btn-success" @click="${this.aumentar}">  Aumentar </button>
            <button class="btn btn-danger" @click="${this.disminuir}">  Disminuir </button>

            </div>
        `;
    }
}




customElements.define("producto-card", ProductoCard);