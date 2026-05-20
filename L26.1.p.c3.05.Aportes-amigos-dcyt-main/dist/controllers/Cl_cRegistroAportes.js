import Cl_mRegistroAportes from "../models/Cl_mRegistroAportes.js";
import Cl_mAporte from "../models/Cl_mAporte.js";
export default class Cl_cRegistroAportes {
    mRegistro;
    vRegistro;
    cAporte;
    constructor(vistaRegistro, controladorAporte, billetes5Ant, billetes10Ant, billetes20Ant) {
        this.vRegistro = vistaRegistro;
        this.cAporte = controladorAporte;
        this.mRegistro = new Cl_mRegistroAportes(billetes5Ant, billetes10Ant, billetes20Ant);
        // Aportes iniciales del ejemplo
        this.mRegistro.agregarAporte(new Cl_mAporte({
            cedula: "12122344",
            billetes5: 2,
            billetes10: 1,
            billetes20: 0,
        }));
        this.mRegistro.agregarAporte(new Cl_mAporte({
            cedula: "33144567",
            billetes5: 2,
            billetes10: 3,
            billetes20: 2,
        }));
        this.mRegistro.agregarAporte(new Cl_mAporte({
            cedula: "31123456",
            billetes5: 1,
            billetes10: 2,
            billetes20: 3,
        }));
        // Mostrar vista inicial
        this.vRegistro.mostrarAportes({
            aportes: this.mRegistro.aportes,
            totalDia: this.mRegistro.totalReunidoDia(),
            totalAcumulado: this.mRegistro.totalAcumulado(),
            porcentajeBilletes20: this.mRegistro.porcentajeBilletes20(),
        });
        this.vRegistro.onNuevoAporte(() => this.procesar1Aporte());
    }
    procesar1Aporte() {
        this.cAporte.solicitarAporte((aporte) => {
            if (aporte !== null) {
                this.mRegistro.agregarAporte(aporte);
                this.vRegistro.mostrarAportes({
                    aportes: this.mRegistro.aportes,
                    totalDia: this.mRegistro.totalReunidoDia(),
                    totalAcumulado: this.mRegistro.totalAcumulado(),
                    porcentajeBilletes20: this.mRegistro.porcentajeBilletes20(),
                });
            }
        });
    }
}
//# sourceMappingURL=Cl_cRegistroAportes.js.map