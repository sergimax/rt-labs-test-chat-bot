import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AvatarComponent} from "./avatar/avatar.component"
import {MessageComponent} from "./message/message.component"
import {HeaderComponent} from "./header/header.component"
import {ChatInputComponent} from "./chat-input/chat-input.component";
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
  imports: [RouterOutlet, AvatarComponent, MessageComponent, HeaderComponent, ChatInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rt-labs-test-chat-bot';
  messagesData: ICommands = data;
}
