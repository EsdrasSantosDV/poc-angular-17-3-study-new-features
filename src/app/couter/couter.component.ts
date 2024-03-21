import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-couter',
  standalone: true,
  imports: [],
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.scss'
})
export class CouterComponent {
  counter = signal(0);

  decrement() {
    this.counter.update(n => n - 1);
  }
  increment() {
    this.counter.update(n => n + 1);
  }
}
