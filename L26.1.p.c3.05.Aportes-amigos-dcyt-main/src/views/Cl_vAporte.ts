import { I_vAporte } from "../interfaces/I_vAporte.js";

export default class Cl_vAporte implements I_vAporte {
  private vista: HTMLElement | null;
  private inCedula: HTMLInputElement;
  private inBilletes5: HTMLInputElement;
  private inBilletes10: HTMLInputElement;
  private inBilletes20: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("aporte") as HTMLElement;
    this.inCedula = document.getElementById(
      "aporte_inCedula"
    ) as HTMLInputElement;
    this.inBilletes5 = document.getElementById(
      "aporte_inBilletes5"
    ) as HTMLInputElement;
    this.inBilletes10 = document.getElementById(
      "aporte_inBilletes10"
    ) as HTMLInputElement;
    this.inBilletes20 = document.getElementById(
      "aporte_inBilletes20"
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "aporte_btCancelar"
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "aporte_btAceptar"
    ) as HTMLButtonElement;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  get cedula(): string {
    return this.inCedula.value.trim();
  }

  get billetes5(): number {
    return parseInt(this.inBilletes5.value) || 0;
  }

  get billetes10(): number {
    return parseInt(this.inBilletes10.value) || 0;
  }

  get billetes20(): number {
    return parseInt(this.inBilletes20.value) || 0;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
    this.inCedula.value = "";
    this.inBilletes5.value = "";
    this.inBilletes10.value = "";
    this.inBilletes20.value = "";
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}