import { Component } from '@angular/core';
import { ModalComponent } from '../app/modal/modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) {}
  
  Estado(id){
      this.modalRef = this.modalService.show(ModalComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-lg',
        containerClass: 'top',
        animated: true,
        data: {
          content: { ident: id}
        }
    });
    
  }
}
