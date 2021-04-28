import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  enableServer = false;
  serverCreationSentence = 'The server has not been created yet';
  serverName = 'test';

  constructor() {
    setTimeout(() => {
      this.enableServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onBtnClick() {
    this.serverCreationSentence = 'Server Created!';
  }

  onInput(event: any) {
    this.serverName = event.target.value;
  }
}
