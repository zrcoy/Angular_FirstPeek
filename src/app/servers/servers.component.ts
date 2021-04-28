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
  isServerCreated = false;
  servers = ['test server', 'test server 2'];

  constructor() {
    setTimeout(() => {
      this.enableServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onBtnClick() {
    this.servers.push(this.serverName);
    this.isServerCreated = true;
    this.serverCreationSentence =
      'Server with the name: ' + this.serverName + ' is Created!';
  }

  onInput(event: any) {
    this.serverName = event.target.value;
  }
}
