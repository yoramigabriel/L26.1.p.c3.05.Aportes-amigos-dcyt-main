export default class Cl_mAporte {
    _cedula = "";
    _billetes5 = 0;
    _billetes10 = 0;
    _billetes20 = 0;
    constructor({ cedula, billetes5, billetes10, billetes20, }) {
        this.cedula = cedula;
        this.billetes5 = billetes5;
        this.billetes10 = billetes10;
        this.billetes20 = billetes20;
    }
    set cedula(value) {
        this._cedula = value;
    }
    get cedula() {
        return this._cedula;
    }
    set billetes5(value) {
        this._billetes5 = value;
    }
    get billetes5() {
        return this._billetes5;
    }
    set billetes10(value) {
        this._billetes10 = value;
    }
    get billetes10() {
        return this._billetes10;
    }
    set billetes20(value) {
        this._billetes20 = value;
    }
    get billetes20() {
        return this._billetes20;
    }
    get montoTotal() {
        return this.billetes5 * 5 + this.billetes10 * 10 + this.billetes20 * 20;
    }
}
//# sourceMappingURL=Cl_mAporte.js.map