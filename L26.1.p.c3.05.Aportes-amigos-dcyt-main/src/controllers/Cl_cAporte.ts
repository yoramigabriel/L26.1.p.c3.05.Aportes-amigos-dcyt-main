import { I_vAporte } from "../interfaces/I_vAporte.js";
import Cl_mAporte from "../models/Cl_mAporte.js";

export default class Cl_cAporte {
  private vista: I_vAporte;
  private callback!: (aporte: Cl_mAporte | null) => void;

  constructor(vista: I_vAporte) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarAporte(callback: (aporte: Cl_mAporte | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(
      new Cl_mAporte({
        cedula: this.vista.cedula,
        billetes5: this.vista.billetes5,
        billetes10: this.vista.billetes10,
        billetes20: this.vista.billetes20,
      })
    );
    this.vista.ocultar();
  }
}