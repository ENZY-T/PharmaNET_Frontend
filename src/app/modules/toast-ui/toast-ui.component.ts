import { Component, Input, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-toast-ui',
  templateUrl: './toast-ui.component.html',
  styleUrls: ['./toast-ui.component.scss'],
  providers: [MessageService]

})
export class ToastUiComponent implements OnInit {

  _Title: string ="";
  get Title(): string {
      return this._Title;
  }
  @Input() set Title(newTitle: string) {
      this._Title = newTitle;
  }

  _isToastTypeSuccess: boolean = false;
  get isToastTypeSuccess(): boolean {
      return this._isShowToast;
  }
  @Input() set isToastTypeSuccess(tostType: boolean) {
      this._isToastTypeSuccess = tostType;
  }

  _isShowToast: boolean = false;
  get isShowToast(): boolean {
      return this._isShowToast;
  }
  @Input() set isShowToast(isShow: boolean) {
      this._isShowToast = isShow;
      this.runToast();
  }

  
  constructor( private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { }

   ngOnInit() {

  }
runToast(){
  if(this._isShowToast){
    if(this._isToastTypeSuccess){
      this.showSuccess();
    }else {
      this.showError();
    }
    this._isShowToast = false;
    }
}
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: this.Title});
    }

    showError() {
      this.messageService.add({severity:'error', summary: 'Error', detail: this.Title});
  }

}
