import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      h1 {
        color: darkblue;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Zrcoy';
}
