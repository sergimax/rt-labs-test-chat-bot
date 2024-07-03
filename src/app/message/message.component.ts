import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [AvatarComponent, NgClass, NgIf],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input({required: true}) messageText = "";
  @Input({required: true}) isMessageFromBot = true;
}
