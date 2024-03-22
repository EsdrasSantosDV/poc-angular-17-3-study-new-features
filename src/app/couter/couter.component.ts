import { Component, OnInit, output, signal } from '@angular/core';
import {
  outputFromObservable,
  outputToObservable,
  toObservable,
} from '@angular/core/rxjs-interop';
import {
  combineLatest,
  concatMap,
  debounceTime,
  from,
  interval,
  map,
  mergeMap,
  of,
  take,
  throttle,
  throttleTime,
} from 'rxjs';
@Component({
  selector: 'app-couter',
  standalone: true,
  imports: [],
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.scss',
})
export class CouterComponent implements OnInit {
  counter = signal(0);

  //POSSO EMITIR OS VALORES DE FORMA DECLARATIVA E COM MEU PODER ABSOLUTO DE RXJS
  //VAMOS BRINCAR AGORA

  outputCounterFrom = outputFromObservable(
    toObservable(this.counter).pipe(
      mergeMap((value) =>
        of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
          map((valueDerivated) => {
            return `contador clicado ${value} e o calculo $${
              valueDerivated * value
            }`;
          })
        )
      )
    )
  );

  //O OUTPUT TO OBSERVABLE VC CONSEGUE USAR ISSO PRA TRANSFORMAR O QUE SAI NO OUTPUT EM UM FLUXO
  outputCounterTo$ = outputToObservable(this.outputCounterFrom);


  ngOnInit(): void {
    this.outputCounterTo$.subscribe((v) => console.log('isso no componente', v));
  }

  decrement() {
    this.counter.update((n) => n - 1);
  }
  
  increment() {
    this.counter.update((n) => n + 1);
  }
}
