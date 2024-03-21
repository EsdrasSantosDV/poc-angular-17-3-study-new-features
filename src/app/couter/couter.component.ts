import { Component, output, signal } from '@angular/core';
import {outputFromObservable, toObservable} from "@angular/core/rxjs-interop"
@Component({
  selector: 'app-couter',
  standalone: true,
  imports: [],
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.scss',
})
export class CouterComponent {
  counter = signal(0);

  //POSSO EMITIR OS VALORES DE FORMA DECLARATIVA E COM MEU PODER ABSOLUTO DE RXJS
  //VAMOS BRINCAR AGORA
  outputCounter=outputFromObservable(toObservable(this.counter));


  decrement() {
    this.counter.update((n) => n - 1);
  }
  increment() {
    this.counter.update((n) => n + 1);
  }
}
