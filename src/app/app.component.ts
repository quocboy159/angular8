import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState } from './root-store';
import { Observable } from 'rxjs';
import { selectIsLoading } from './root-store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.RootState>) {
    this.isLoading$ = this.store$.select(
      selectIsLoading
    );
   }

   get isLoading(): boolean{
    let result = false;  
    this.isLoading$.subscribe(x => {
      result = x;
    })

    return result;
   }
}
