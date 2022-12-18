import { Component, OnInit } from '@angular/core';
import { pharmacyCard,pharmacyCardsData } from 'src/app/models/med-card';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.scss']
})
export class PharmacyListComponent implements OnInit {
 // pharmacyCard: pharmacyCard[] = [];
  pharmacyCard: pharmacyCardsData[] = [];

  constructor(private service:PharmacyProfileService, private router: Router) { }

  ngOnInit(): void {
   this.onGetPharmacy();

  //   this.pharmacyCard = [
  //     { id:0, name: 'New Sriya Pharmacy', telephoneNumber:"0702101735",address:"Colombo 03", isSelect:false, image:'data:image/jpeg;base64,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8/EY6kA43rdxzl/zGo5qXH7sc0X3nHsc1HeegjKXegMxifBX7R9oAoc26kAuaxmoBt6qHK7dmfdYHp4+BxTS9qeO2KXTU3FVRn3bUCFUIDbWK4YgsOQyYyl336J56t7b8YQ7X1dyEdzqit9isp6+cV+Ot+1f4xlLvRETzv6+cV+Ot+1f4x6+cV+Ot+1f4xlLvQB1S7tvPOceWZkTzp67cUzn9ssz1z7H4y/r5xX4637V/jGUu9ERPO/r5xX4637V/jHr5xX4637V/jGUu9ERPO/r5xX4637V/jHr5xX4637J+MZS70MxgLPPPr5xX4637J+MevnFfjrftX+MZS70RE87+vnFfjrftX+MevnFfjrftX+MZS70RE87+vnFfjrftX+MevnFfjrftX+MZS70PmTPO/r5xX4637J+MyNJ2t43aCa9Xa+3GceiGM9OojKXegInwG7tVxxPf1Vq88czT1xux08JUdreN/F28/8A6v6RlLvQETzy/briwODrbQR5V/jK+vnFfjrftX+MZS7Qj/zHI/funbLf7QLC6utGCpsZi1oJtayq2vdZ6OpFODaG5KM7B3ktJiSRcaduCpwtDKgO4L+0ndln1LWZZagCCNW4Hs+ya0JLY5tV27tZERamr2CobktUN+6egkqRUCNw06g7i/XPQbYiLF3Dru2TuNqVvSC+5vRXgO6PUlVqEioKrN6JSHRV25bCnMyNL279E4sq0uzYno1rGof9nVBYzptp2jDgNt35zyyNsRFi7qtzAsSAQCTgM29gM8gWwNxA78DMrEQEREBERAREQEREBERAREQEREBLVlQfaUN5EkfyiIFxZX/hD/U39Y9In+EP9TREDjYjPIY8h/3kRED/2Q==',ratingNumber:3 },
  //     { id:1, name: 'B.S. Family Care',  telephoneNumber:"0773129190",address:"Negambo",     isSelect:false,  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSUPqxFD5P2hi6_DdTdSJlBTHw7W3TTwkEOoWec25bbI34hFotFSoJPh3oiZ7BIdC2HU&usqp=CAU',ratingNumber:2 },
  //     { id:2, name: 'Ceylon Pharmacy', telephoneNumber:"0718573119",address:"Rathnapura", isSelect:false,   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x3yiseparInuRu6HoQa9J_9riwb7LHjNkQ&usqp=CAU',ratingNumber:3 },
  //     { id:3, name: 'Kekirawa Osusala', telephoneNumber:"0773129150",address:"Colombo 07",      isSelect:false,  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEooit3rXX1evnjr0amW2dYAR1h6rmFsOwg&usqp=CAU',ratingNumber:2 },
  //     { id:4, name: 'Tharaka Pharmacy', telephoneNumber:"0714623151",address:"Gampaha",   isSelect:false,  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYAUQREesAKns30lZmLZUp3M_w5zfhHJb-w&usqp=CAU',ratingNumber:3 },
  //     { id:5, name: 'Chamee Pharmacy', telephoneNumber:"0754624591",address:"Moratuwa",  isSelect:false,  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjb4qAm48sZVo8ReHNqJ1P81GzrM4NEiuFGg&usqp=CAU',ratingNumber:2 }
  // ];

  }
  greet(event:any){
    console.log(event);
    console.log(event.email);
    localStorage.setItem("UserFullName","Isuru lakshan ketawala");
    localStorage.setItem("SelectedPharmcayEmail",event.email);
    this.router.navigateByUrl('/customerView');
  }
  async onGetPharmacy(){
    console.log("asking...");
    this.service.getAllPharmacyData()
    .subscribe(
      (val) => {
        console.log("response");
        console.log(val);
        this.pharmacyCard =val;
     
      
         

      },)


  }
}
