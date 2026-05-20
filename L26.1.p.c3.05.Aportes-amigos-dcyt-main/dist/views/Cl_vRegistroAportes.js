export default class Cl_vRegistroAportes {
    lblTotalDia;
    lblTotalAcumulado;
    lblPorcentaje20;
    btNuevoAporte;
    tbAportes;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoAporte = document.getElementById("body_btNuevoAporte");
        this.lblTotalDia = document.getElementById("body_lblTotalDia");
        this.lblTotalAcumulado = document.getElementById("body_lblTotalAcumulado");
        this.lblPorcentaje20 = document.getElementById("body_lblPorcentaje20");
        this.tbAportes = document.getElementById("body_Aportes");
    }
    onNuevoAporte(callback) {
        this.btNuevoAporte.onclick = callback;
    }
    mostrarAportes(data) {
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
        this.lblPorcentaje20.innerHTML = `${data.porcentajeBilletes20.toFixed(2)}%`;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vRegistroAportes.js.map