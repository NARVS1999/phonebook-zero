import { Component, ViewChild, Injector, ElementRef, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { PersonServiceProxy, EditPersonInput } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'editPersonModal',
  templateUrl: './edit-person-modal.component.html'
})
export class EditPersonModalComponent extends AppComponentBase {

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('modal' , { static: false }) modal: ModalDirective;
  @ViewChild('nameInput' , { static: false }) nameInput: ElementRef;

  person: EditPersonInput = new EditPersonInput();

  active: boolean = false;
  saving: boolean = false;

  constructor(
    injector: Injector,
    private _personService: PersonServiceProxy
  ) {
    super(injector);
  }

  show(personId): void {
    this.active = true;
    this._personService.getPersonForEdit(personId).subscribe((result)=> {
      this.person = result;
      this.modal.show();
    });

  }

  onShown(): void {
   // this.nameInput.nativeElement.focus();
  }

  save(): void {
    this.saving = true;
    this._personService.editPerson(this.person)
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close();
        this.modalSave.emit(this.person);
      });
    this.saving = false;
  }

  close(): void {
    this.modal.hide();
    this.active = false;
  }
}
