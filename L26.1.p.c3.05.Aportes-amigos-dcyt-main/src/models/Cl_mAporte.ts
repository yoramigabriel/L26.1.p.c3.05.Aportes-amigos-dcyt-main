export default class Cl_mAporte {
  private _cedula: string = "";
  private _billetes5: number = 0;
  private _billetes10: number = 0;
  private _billetes20: number = 0;

  constructor({
    cedula,
    billetes5,
    billetes10,
    billetes20,
  }: {
    cedula: string;
    billetes5: number;
    billetes10: number;
    billetes20: number;
  }) {
    this.cedula = cedula;
    this.billetes5 = billetes5;
    this.billetes10 = billetes10;
    this.billetes20 = billetes20;
  }

  set cedula(value: string) {
    this._cedula = value;
  }
  get cedula(): string {
    return this._cedula;
  }

  set billetes5(value: number) {
    this._billetes5 = value;
  }
  get billetes5(): number {
    return this._billetes5;
  }

  set billetes10(value: number) {
    this._billetes10 = value;
  }
  get billetes10(): number {
    return this._billetes10;
  }

  set billetes20(value: number) {
    this._billetes20 = value;
  }
  get billetes20(): number {
    return this._billetes20;
  }

  get montoTotal(): number {
    return this.billetes5 * 5 + this.billetes10 * 10 + this.billetes20 * 20;
  }
}
