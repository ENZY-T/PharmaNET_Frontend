import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { medCard } from '../models/med-card';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  value="";

  
  constructor() {}

  ngOnInit(): void {

  }

  clearValue() {
    this.value="";
  }
}
