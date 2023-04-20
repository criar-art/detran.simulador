import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detran',
  templateUrl: './detran.component.html',
  styleUrls: ['./detran.component.scss']
})
export class DetranComponent implements OnInit {

  states = [
    { id: 'AC', name: 'Acre', url: "https://www.detran.ac.gov.br" },
    { id: 'AL', name: 'Alagoas', url: "https://www.detran.al.gov.br" },
    { id: 'AP', name: 'Amapá', url: "https://www.detran.ap.gov.br" },
    { id: 'AM', name: 'Amazonas', url: "https://www.detran.am.gov.br" },
    { id: 'BA', name: 'Bahia', url: "https://www.detran.ba.gov.br" },
    { id: 'CE', name: 'Ceará', url: "https://www.detran.ce.gov.br" },
    { id: 'DF', name: 'Distrito Federal', url: "http://detran.df.gov.br" },
    { id: 'ES', name: 'Espírito Santo', url: "https://detran.es.gov.br" },
    { id: 'GO', name: 'Goías', url: "https://www.detran.go.gov.br" },
    { id: 'MA', name: 'Maranhão', url: "http://www.detran.ma.gov.br" },
    { id: 'MT', name: 'Mato Grosso', url: "https://www.detran.mt.gov.br" },
    { id: 'MS', name: 'Mato Grosso do Sul', url: "https://www.detran.ms.gov.br" },
    { id: 'MG', name: 'Minas Gerais', url: "https://www.detran.mg.gov.br" },
    { id: 'PA', name: 'Pará', url: "https://www.detran.pa.gov.br" },
    { id: 'PR', name: 'Paraná', url: "https://www.detran.pr.gov.br" },
    { id: 'PB', name: 'Paraíba', url: "https://detran.pb.gov.br" },
    { id: 'PE', name: 'Pernambuco', url: "https://www.detran.pe.gov.br" },
    { id: 'PI', name: 'Piauí', url: "http://www.detran.pi.gov.br" },
    { id: 'RJ', name: 'Rio de Janeiro', url: "https://www.detran.rj.gov.br" },
    { id: 'RN', name: 'Rio Grande do Norte', url: "http://www.detran.rn.gov.br" },
    { id: 'RS', name: 'Rio Grande do Sul', url: "https://www.detran.rs.gov.br" },
    { id: 'RO', name: 'Rondônia', url: "https://www.detran.ro.gov.br" },
    { id: 'RR', name: 'Roraíma', url: "https://www.detran.rr.gov.br" },
    { id: 'SC', name: 'Santa Catarina', url: "https://www.detran.sc.gov.br" },
    { id: 'SP', name: 'São Paulo', url: "https://www.detran.sp.gov.br" },
    { id: 'SE', name: 'Sergipe', url: "https://www.detran.se.gov.br" },
    { id: 'TO', name: 'Tocantins', url: "http://www.detran.to.gov.br" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
