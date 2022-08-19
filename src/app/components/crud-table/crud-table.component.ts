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

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CrudTableComponent implements OnInit {
  @Input() title: string = '';
  @Input() products: Product[] = [];

  unfilteredProducts: Product[] = [];

  productDialog: boolean = false;
  product: Product = emptyProduct;
  selectedProducts: Product[] = [];
  submitted: boolean = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private domSanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.unfilteredProducts = this.products;
  }

  openNew() {
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
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = emptyProduct;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        // If new product
        this.product;
        this.PostProduct();

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
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
    const nowTime = new Date();
    const formData = new FormData();

    formData.append('imageFile', this.product.imageFile ?? '');
    formData.append('name', this.product.name);
    formData.append('price', this.product.price.toString());
    formData.append('quantity', this.product.quantity.toString());
    formData.append('stockState', this.product.stockStatus);

    const upload$ = this.httpClient.post(
      'https://localhost/api/inventory/add',
      formData
    );

    upload$.subscribe();
  }

  PutProduct() {
    const formData = new FormData();

    formData.append('imageFile', this.product.imageFile ?? '');
    formData.append('name', this.product.name);
    formData.append('price', this.product.price.toString());
    formData.append('quantity', this.product.quantity.toString());
    formData.append('stockState', this.product.stockStatus);

    const upload$ = this.httpClient.put(
      'https://localhost/api/inventory/add',
      formData
    );

    upload$.subscribe();
  }
}
