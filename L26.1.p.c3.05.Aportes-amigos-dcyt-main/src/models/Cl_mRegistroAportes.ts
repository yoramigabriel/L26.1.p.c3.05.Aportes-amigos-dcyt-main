import Cl_mAporte from "./Cl_mAporte.js";

export default class Cl_mRegistroAportes {
  public aportes: Cl_mAporte[] = [];
  public billetes5Acum: number;
  public billetes10Acum: number;
  public billetes20Acum: number;

  constructor(
    billetes5Ant: number,
    billetes10Ant: number,
    billetes20Ant: number,
  ) {
    this.billetes5Acum = billetes5Ant;
    this.billetes10Acum = billetes10Ant;
    this.billetes20Acum = billetes20Ant;
  }

  agregarAporte(aporte: Cl_mAporte) {
    this.aportes.push(aporte);
    this.billetes5Acum += aporte.billetes5;
    this.billetes10Acum += aporte.billetes10;
    this.billetes20Acum += aporte.billetes20;
  }

  totalReunidoDia(): number {
    let total = 0;
    this.aportes.forEach((aporte) => {
      total += aporte.montoTotal;
    });
    return total;
  }

  totalAcumulado(): number {
    return (
      this.billetes5Acum * 5 +
      this.billetes10Acum * 10 +
      this.billetes20Acum * 20
    );
  }

  porcentajeBilletes20(): number {
    const totalBilletes =
      this.billetes5Acum + this.billetes10Acum + this.billetes20Acum;
    if (totalBilletes === 0) return 0;
    return (this.billetes20Acum / totalBilletes) * 100;
  }
}
