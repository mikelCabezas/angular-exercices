import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  quantity = 0
  convertedQuantity = 0
  currency = 'CHF'
  convertTo = 'EUR'

  currencies: string[] = ['EUR', 'USD', 'CHF']

  converse() {
    switch (this.currency) {
      case 'CHF':
        if (this.convertTo === 'CHF') this.convertedQuantity = this.quantity
        if (this.convertTo === 'EUR') this.convertedQuantity = this.quantity * 1.05
        if (this.convertTo === 'USD') this.convertedQuantity = this.quantity * 1.11
        break;
      case 'EUR':
        if (this.convertTo === 'EUR') this.convertedQuantity = this.quantity
        if (this.convertTo === 'CHF') this.convertedQuantity = this.quantity * 0.96
        if (this.convertTo === 'USD') this.convertedQuantity = this.quantity * 1.07
        break;
      case 'USD':
        if (this.convertTo === 'USD') this.convertedQuantity = this.quantity
        if (this.convertTo === 'CHF') this.convertedQuantity = this.quantity * 0.90
        if (this.convertTo === 'EUR') this.convertedQuantity = this.quantity * 0.94

        break;
    }
  }
}
