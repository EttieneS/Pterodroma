import { Component, OnInit } from '@angular/core';
import { Form, ReactiveFormsModule, NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Currency } from '../../models/currency';
import { SelectionService } from '../../services/selection.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  currencyform: FormGroup;
  currencyarray: Currency[] = [];
  currency: any;

  tableDataSource:  MatTableDataSource<Currency>;
  displayedColumns = ["currencyname"];

  constructor(private selectionService: SelectionService,) {
    this.currencyform = new FormGroup({
        currencyname: new FormControl('')
    })
  }

  ngOnInit(): void {}

  Add()
  {
    this.currency = this.currencyform.value;

    this.currencyarray.push(this.currency);
    this.tableDataSource =  new MatTableDataSource<Currency>(this.currencyarray);
  }

  Save()
  {
    this.selectionService.create(this.currencyarray);
  }
}
