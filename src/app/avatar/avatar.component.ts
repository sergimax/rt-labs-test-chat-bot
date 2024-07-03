import { Component, Input } from '@angular/core';


@Component({
  selector: 'avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() src = "user-svgrepo-com.svg" 
}
