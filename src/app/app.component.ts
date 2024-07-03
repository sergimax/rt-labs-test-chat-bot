import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data from '../messages.mock.json';

interface ICommands {
  commands: Array<{
    id: number;
    command: string;
    response: string;
  }>
  unknownCommandResponse: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rt-labs-test-chat-bot';
  constructor() {
    this.preloadMessages();
  }
  preloadMessages = async () => {
    try {
      let messagesData: ICommands = await data;
      console.log('messagesData', messagesData);
    } catch (e) {
      console.error(e);
    }
  };
}
