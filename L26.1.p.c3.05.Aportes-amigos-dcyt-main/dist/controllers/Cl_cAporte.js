import Cl_mAporte from "../models/Cl_mAporte.js";
export default class Cl_cAporte {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarAporte(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mAporte({
            cedula: this.vista.cedula,
            billetes5: this.vista.billetes5,
            billetes10: this.vista.billetes10,
            billetes20: this.vista.billetes20,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cAporte.js.map