import { I_vRegistroAportes } from "../interfaces/I_vRegistroAportes.js";
import Cl_mAporte from "../models/Cl_mAporte.js";

export default class Cl_vRegistroAportes implements I_vRegistroAportes {
  private lblTotalDia: HTMLElement;
  private lblTotalAcumulado: HTMLElement;
  private lblPorcentaje20: HTMLElement;
  private btNuevoAporte: HTMLButtonElement;
  private tbAportes: HTMLElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoAporte = document.getElementById(
      "body_btNuevoAporte"
    ) as HTMLButtonElement;
    this.lblTotalDia = document.getElementById(
      "body_lblTotalDia"
    ) as HTMLElement;
    this.lblTotalAcumulado = document.getElementById(
      "body_lblTotalAcumulado"
    ) as HTMLElement;
    this.lblPorcentaje20 = document.getElementById(
      "body_lblPorcentaje20"
    ) as HTMLElement;
    this.tbAportes = document.getElementById("body_Aportes") as HTMLElement;
  }

  onNuevoAporte(callback: () => void): void {
    this.btNuevoAporte.onclick = callback;
  }

  mostrarAportes(data: {
    aportes: Cl_mAporte[];
    totalDia: number;
    totalAcumulado: number;
    porcentajeBilletes20: number;
  }): void {
    this.tbAportes.innerHTML = "";
    data.aportes.forEach((aporte) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${aporte.cedula}</td>
        <td>${aporte.billetes5}</td>
        <td>${aporte.billetes10}</td>
        <td>${aporte.billetes20}</td>
        <td>$${aporte.montoTotal}</td>
      `;
      this.tbAportes.appendChild(tr);
    });
    this.lblTotalDia.innerHTML = `$${data.totalDia}`;
    this.lblTotalAcumulado.innerHTML = `$${data.totalAcumulado}`;
    this.lblPorcentaje20.innerHTML = `${data.porcentajeBilletes20.toFixed(
      2
    )}%`;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}