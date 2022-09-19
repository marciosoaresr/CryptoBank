import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  shifts: any[];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
      //this.shifts = this.service.transfers;
      this.service.all().subscribe((shifts: Transfer[]) => {
      console.table(shifts);
      this.shifts = shifts
    })
  }

}
