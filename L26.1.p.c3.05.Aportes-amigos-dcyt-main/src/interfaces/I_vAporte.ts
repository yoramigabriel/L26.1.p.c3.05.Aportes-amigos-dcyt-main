export interface I_vAporte {
  get cedula(): string;
  get billetes5(): number;
  get billetes10(): number;
  get billetes20(): number;
  onCancelar(callback: () => void): void;
  onAceptar(callback: () => void): void;
  mostrar(): void;
  ocultar(): void;
}
