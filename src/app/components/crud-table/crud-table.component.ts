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

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private domSanitizer: DomSanitizer,
    private httpClient: HttpClient,
    private service:PharmacyProfileService
  ) {}

  ngOnInit() {
    this.fetchData();
    this.unfilteredProducts = this.products;
  }

  openNew() {
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
        this.PutProduct();
      } else {
        // If new product
        this.product;
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

  PostProduct(url?: string) {
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
    
    this.httpClient
      .post('https://localhost:5001/api/inventory', formData)
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
          this.fetchData();
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
          this.fetchData();
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
              this.fetchData();
            }
          );
      },
    });
  }

  fetchData() {
    this.httpClient.get(GlobalData.baseUrl + 'api/inventory').subscribe(
      (val) => {
        this.products = val as Product[];
      },
      (error) => {
        //Toast Error(error + statusCode)
      }
    );

    
  }

  
  getOwnerInventry() {
    let pharmacyOwnerEmail =localStorage.getItem("UserName");;
    this.service.getOwnerInventry(pharmacyOwnerEmail)
    .subscribe(
      (val) => {
        console.log("inventry received");
        console.log(val);
        this.products =val;
 
      },
      response => {
         console.log(response.error.text);

         console.log("response.body");
       //   console.log(response.status)
          if(response.status == 201){
           // this.onLoginSuccess(response);
          }
          else{
           
           
          }
      },
      () => {
        // console.log("The POST observable is now completed.");
      });

    
  }
}
