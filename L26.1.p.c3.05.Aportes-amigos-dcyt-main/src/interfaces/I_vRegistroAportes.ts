import Cl_mAporte from "../models/Cl_mAporte";

export interface I_vRegistroAportes {
  onNuevoAporte(callback: () => void): void;
  mostrarAportes(data: {
    aportes: Cl_mAporte[];
    totalDia: number;
    totalAcumulado: number;
    porcentajeBilletes20: number;
  }): void;
  mostrar(): void;
  ocultar(): void;
}