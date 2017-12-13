import { Component, OnInit , ViewChild} from '@angular/core';
import{ NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'az-registro-familiar',
  templateUrl: './direccion.component.html'
 
})
export class DireccionComponent implements OnInit {

  constructor(private _modalService: NgbModal) {}

  ngOnInit() {
  }

  @ViewChild('myModal') myModal;
  private modalRef: NgbModalRef;

 
  
  
  openModal() {
    this.modalRef = this._modalService.open(this.myModal);
    this.modalRef.result.catch(() => { });
  }
  
  closeModal() {
    this.modalRef.close();
  }
}