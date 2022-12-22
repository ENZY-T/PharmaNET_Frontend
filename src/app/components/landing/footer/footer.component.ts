import { Component, OnInit } from '@angular/core';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  subcriberEmail:String="";
 
  constructor( private service:PharmacyProfileService) { }

  ngOnInit(): void {
  }


  onSubcribe()
  {
    let receiverEmail=localStorage.getItem("SelectedPharmcyEmail");
    let data={
      subscriberEmail :this.subcriberEmail,
      recieverEmail :receiverEmail
    }
    console.log(this.subcriberEmail);
    console.log(data);


    this.service.subcribe(data)
    .subscribe(
      (val) => {
          // this.isBlock=false;
          // this.toastFunction("Pharmacy Owner Details Updated Succefully",true);
          // this.onCheckInventy();
          console.log("Suncribed ok");
          console.log(val);
          this.subcriberEmail = "";
      },
      response => {
          if(response.status == 201){
          //  this.isBlock=false;
          //  this.toastFunction("Pharmacy Owner Details Updated Succefully",true);
          //  this.onCheckInventy();
          console.log("Suncribed 201");
          console.log(response);
          }
          else{
            // this.toastFunction("Pharmacy Owner Details Updated Failed",false);
            // this.isBlock=false;
            console.log("Suncribed error");
            console.log(response);
          }
      },
      () => {
          // this.isBlock=false;
      });


  }
}
