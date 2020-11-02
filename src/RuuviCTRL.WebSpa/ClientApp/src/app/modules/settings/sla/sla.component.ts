import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {Sla} from '../_models/sla.model';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {
  closeResult: string;
  slaItem: Sla;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content, sla = {} as Sla) {
    this.slaItem = sla;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  saveSla(sla: Sla){
    console.log(sla);
    this.modalService.dismissAll();
  }

  createSla(sla: Sla) {
    console.log(sla);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
