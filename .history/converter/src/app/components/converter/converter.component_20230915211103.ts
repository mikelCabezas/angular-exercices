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
        if (this.convertTo === 'EUR') this.convertedQuantity = this.quantity
        break;
      case 'EUR':

        break;
      case 'USD':

        break;
    }
  }
}
