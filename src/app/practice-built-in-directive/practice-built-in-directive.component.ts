import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-built-in-directive',
  templateUrl: './practice-built-in-directive.component.html',
  styleUrls: ['./practice-built-in-directive.component.css'],
})
export class PracticeBuiltInDirectiveComponent {
  show = false;
  count: number = 1;
  countArray = [1];
  onClick() {
    this.show = !this.show;
    this.count++;
    this.countArray.push(this.count);
  }
}
