import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MaskitoModule } from '@maskito/angular';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, MaskitoModule],
})
export class HomePage {
  constructor() {}
  readonly phoneMask: MaskitoOptions = {
    mask: [
      '+',
      '1',
      ' ',
      '(',
      /\d/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) =>
    (el as HTMLIonInputElement).getInputElement();
}
