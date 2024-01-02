import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class AppComponent {
  posts$!: Observable<any[]>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.posts$ = this.http
      .get<any[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(shareReplay());
    const obs$ = fromTimestamp();
    obs$.subscribe({ next: (value) => console.log(value) });
    setTimeout(() => {
      obs$.subscribe({ next: (value) => console.log(value) });
    }, 2000);
  }
}

const fromTimestamp = (): Observable<number> => {
  const timestamp = Date.now();
  return new Observable((subscriber) => {
    subscriber.next(timestamp);
  });
};
