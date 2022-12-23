import { GlobalData } from './../../GlobalData';
import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { emptyProduct, Product } from 'src/app/models/product';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CrudTableComponent implements OnInit {
  @Input() title: string = '';
  products: Product[] = [];

  baseUrl = GlobalData.baseUrl;
  emptyProduct = emptyProduct;
  unfilteredProducts: Product[] = [];

  productDialog: boolean = false;
  product: Product = emptyProduct;
  selectedProducts: Product[] = [];
  submitted: boolean = false;
  latitude:String ="";
  longitude:String ="";

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private domSanitizer: DomSanitizer,
    private httpClient: HttpClient,
    private service:PharmacyProfileService
  ) {}

  ngOnInit() {
    this.getOwnerInventry();
    this.unfilteredProducts = this.products;
  }

  onDisplayLocation(location:any){
   
    this.latitude=location.latitude;
    this.longitude=location.longitude;
    console.log(this.latitude);
    console.log(this.longitude);
  }

  openNew() {
    this.product.image ="";
    this.product.name="";
    this.product.category = "";
    this.product.price=0;
    this.product.quantity=0;
    this.product = emptyProduct;
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(
          (val) => !this.selectedProducts.includes(val)
        );
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  editProduct(product: Product) {
    console.log(product);
    this.product = { ...product };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        //If Edit
        console.log("PUt");
        this.PutProduct();
      } else {
        // If new product
        console.log("post");
       // this.product;
        this.PostProduct();
       
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = emptyProduct;
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  handleSearch(event: any) {
    this.products = this.unfilteredProducts.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  handleImageFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const url: SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(file)
      );
      this.product.imageFile = file;
      this.product.image = url;
    } else {
      this.product.image = '';
    }
  }

  PostProduct() {
    console.log("this.product");
    console.log(this.product);
    let user =localStorage.getItem("UserName");

    const formData = new FormData();

    formData.append('image', this.product.imageFile ?? '');
    formData.append('name', this.product.name);
    formData.append('price', this.product.price.toString());
    formData.append('quantity', this.product.quantity.toString());
    formData.append('stockStatus', this.product.stockStatus);
    formData.append('category', this.product.category);
    formData.append('email', user?? '');
    formData.append('searchKey',"");
    formData.append('currentLatitude',"");
    formData.append('currentLongitude',"");
    
    this.httpClient
      .post('https://localhost:5001/api/Inventory', formData)
      .subscribe(
        (val) => {},
        (error) => {
          this.messageService.add({
            severity: 'danger',
            summary: 'Error',
            detail: 'Product Create Failed',
            life: 3000,
          });
        },
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Product Created',
            life: 3000,
          });
          this.getOwnerInventry();
        }
      );
  }

  PutProduct() {
    const formData = new FormData();

    formData.append('image', this.product.imageFile ?? '');
    formData.append('name', this.product.name);
    formData.append('price', this.product.price.toString());
    formData.append('quantity', this.product.quantity.toString());
    formData.append('stockStatus', this.product.stockStatus);
    formData.append('category', this.product.category);

    this.httpClient
      .put(GlobalData.baseUrl + 'api/inventory/' + this.product.id, formData)
      .subscribe(
        (val) => {},
        (error) => {
          this.messageService.add({
            severity: 'danger',
            summary: 'Error',
            detail: 'Product Create Failed',
            life: 3000,
          });
        },
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successfully Edited',
            detail: 'Product Edited',
            life: 3000,
          });
          this.getOwnerInventry();
        }
      );
  }

  DeleteProduct(product: Product) {

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.httpClient
          .delete(GlobalData.baseUrl + 'api/inventory/' + product.id)
          .subscribe(
            (val) => {},
            (error) => {
              this.messageService.add({
                severity: 'danger',
                summary: 'Error',
                detail: 'Product Delete Failed',
                life: 3000,
              });
            },
            () => {
              this.messageService.add({
                severity: 'success',
                summary: 'Successfully Deleted',
                detail: 'Product Deleted',
                life: 3000,
              });
              this.getOwnerInventry();
              this.unfilteredProducts = this.products;
            }
          );
      },
    });
  }

  // fetchData() {
  //   this.httpClient.get(GlobalData.baseUrl + 'api/inventory').subscribe(
  //     (val) => {
  //       this.products = val as Product[];
  //     },
  //     (error) => {
  //       //Toast Error(error + statusCode)
  //     }
  //   );

    
  // }

  
  getOwnerInventry() {
    let pharmacyOwnerEmail =localStorage.getItem("UserName");
   
    var formData: any = new FormData();
    formData.append('email', pharmacyOwnerEmail);
    this.service.getOwnerInventry(formData)
    .subscribe(
      (val) => {
        console.log("inventry received");
        console.log(val);
        this.products =val;
 
      },
      response => {
         console.log(response);

         console.log("response.body");
       //   console.log(response.status)
          if(response.status == 200){
            console.log("inventry received");
            console.log(response);
            this.products =response;
          }
          else{
           
           
          }
      },
      () => {
        // console.log("The POST observable is now completed.");
      });

    
  }
}
