export default class Cl_vAporte {
    vista;
    inCedula;
    inBilletes5;
    inBilletes10;
    inBilletes20;
    btCancelar;
    btAceptar;
    constructor() {
        this.vista = document.getElementById("aporte");
        this.inCedula = document.getElementById("aporte_inCedula");
        this.inBilletes5 = document.getElementById("aporte_inBilletes5");
        this.inBilletes10 = document.getElementById("aporte_inBilletes10");
        this.inBilletes20 = document.getElementById("aporte_inBilletes20");
        this.btCancelar = document.getElementById("aporte_btCancelar");
        this.btAceptar = document.getElementById("aporte_btAceptar");
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    get cedula() {
        return this.inCedula.value.trim();
    }
    get billetes5() {
        return parseInt(this.inBilletes5.value) || 0;
    }
    get billetes10() {
        return parseInt(this.inBilletes10.value) || 0;
    }
    get billetes20() {
        return parseInt(this.inBilletes20.value) || 0;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
        this.inCedula.value = "";
        this.inBilletes5.value = "";
        this.inBilletes10.value = "";
        this.inBilletes20.value = "";
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vAporte.js.map