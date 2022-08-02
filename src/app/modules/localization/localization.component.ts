import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/models/localization';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {

  currentLaguage:string='';
  currentLaguage1?:Language;
  heading:string='Select Language';
  
  languageArry: Language[]=[
    {id:'en',name:'English'},
    {id:'de',name:'German'},
    {id:'it',name:'Itali'},
    {id:'ja',name:'Japanese'}
    
  ];

  constructor(public translate:TranslateService){

    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|de/) ? browserLang :'English');
  
   }

   ngOnInit(): void {
  }


   onSet(val:any){
      console.log(val.lan.name);
      this.heading = val.lan.name;
      let lan=val.lan;

      for(let i =0;i<this.languageArry.length;i++){
        if(this.languageArry[i].name == lan.name){
          this.currentLaguage =this.languageArry[i].id;
          this.translate.use(this.currentLaguage);
        }
       }
   }  

}
