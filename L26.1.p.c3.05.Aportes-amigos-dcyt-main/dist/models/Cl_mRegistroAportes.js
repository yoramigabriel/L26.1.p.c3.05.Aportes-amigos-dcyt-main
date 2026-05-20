export default class Cl_mRegistroAportes {
    aportes = [];
    billetes5Acum;
    billetes10Acum;
    billetes20Acum;
    constructor(billetes5Ant, billetes10Ant, billetes20Ant) {
        this.billetes5Acum = billetes5Ant;
        this.billetes10Acum = billetes10Ant;
        this.billetes20Acum = billetes20Ant;
    }
    agregarAporte(aporte) {
        this.aportes.push(aporte);
        this.billetes5Acum += aporte.billetes5;
        this.billetes10Acum += aporte.billetes10;
        this.billetes20Acum += aporte.billetes20;
    }
    totalReunidoDia() {
        let total = 0;
        this.aportes.forEach((aporte) => {
            total += aporte.montoTotal;
        });
        return total;
    }
    totalAcumulado() {
        return (this.billetes5Acum * 5 +
            this.billetes10Acum * 10 +
            this.billetes20Acum * 20);
    }
    porcentajeBilletes20() {
        const totalBilletes = this.billetes5Acum + this.billetes10Acum + this.billetes20Acum;
        if (totalBilletes === 0)
            return 0;
        return (this.billetes20Acum / totalBilletes) * 100;
    }
}
//# sourceMappingURL=Cl_mRegistroAportes.js.map