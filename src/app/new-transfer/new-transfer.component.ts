import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transfer } from "../models/transfer.model";
import { TransferService } from "../services/transfer.service";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']

})
export class NewTransferComponent {

    @Output() whenTransfer = new EventEmitter<any>();
    @Output() valueWithError = new EventEmitter<string>();

    value: number;
    destination: number;

    constructor(private service: TransferService, private router: Router){}

    transfer() {
        console.log('Requested new transfer')
        if (this.Valid()) {
            const valueEmit: Transfer = { value: this.value, destination: this.destination };
            this.service.add(valueEmit).subscribe(result => {
                console.log(result);
                this.clearFields();
                this.router.navigateByUrl('extract');
            },
            error => console.error(error));
        }
    }

    clearFields() {
        this.value = 0;
        this.destination = 0;
    }

    private Valid() {
        const valid = this.value > 0;
        if (!valid) {
            this.valueWithError.emit('Please enter a valid value');
        }
        return valid;
    }
}