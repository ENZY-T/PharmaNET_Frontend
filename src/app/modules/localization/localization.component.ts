import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/models/localization';
import { AuthorizationsService } from 'src/app/services/authorizations.service';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {

  longitude?:string;
  latitude?:string;

  @Output() public childEvent = new EventEmitter();

  constructor(private services:AuthorizationsService) { }

  ngOnInit(): void {
    this.services.getLocationService().then(resp=>{
      
      this.latitude=resp.lat;
      this.longitude=resp.lng;
      let locationVal={
        latitude:this.latitude,
        longitude:this.longitude
      }
      this.childEvent.emit(locationVal);
    })
    
   
  }

 
}
