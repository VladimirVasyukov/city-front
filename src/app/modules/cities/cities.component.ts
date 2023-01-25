import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit, OnDestroy {
  title: Data;
  subscriptionTitle$: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscriptionTitle$ = this.activatedRoute.data
      .pipe(
        tap((data) => {
          this.title = data;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscriptionTitle$.unsubscribe();
  }
}
