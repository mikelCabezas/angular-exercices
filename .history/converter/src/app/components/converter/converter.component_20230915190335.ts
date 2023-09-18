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
}
