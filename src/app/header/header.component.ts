import { Component } from '@angular/core';
import { CouterComponent } from '../couter/couter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CouterComponent],
})
export class HeaderComponent {
  counterLogginTo($event: Event) {
    console.log($event);
  }
  counterLogging($event: string) {
    console.log($event);
  }
}
