import { Component } from '@angular/core';
import { PostComponent } from '../shared/components/post/post.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [PostComponent],
})
export class HomePageComponent {}
