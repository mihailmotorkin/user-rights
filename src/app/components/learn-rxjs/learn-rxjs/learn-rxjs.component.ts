import {AfterViewInit, Component, inject, PLATFORM_ID} from '@angular/core';
import {fromEvent, map, Observable, take} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, isPlatformBrowser} from '@angular/common';

function customFromEvent(el: HTMLElement, eventName: string) {
  return new Observable((subscriber) => {
    const handleEvent = (e: Event) => subscriber.next(e);
    el.addEventListener(eventName, handleEvent);

    return () => {
      console.log('DESTROYING');
      el.removeEventListener(eventName, handleEvent);
    }
  })
}

function customTimer(time: number) {
  return new Observable((subscriber) => {
    let i = 0;
    const intervalId = setInterval(() => {
      subscriber.next(i++);
    }, time)

    return () => {
      console.log('DESTROYING TIMER');
      clearInterval(intervalId);
    }
  })
}

@Component({
  selector: 'app-learn-rxjs',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './learn-rxjs.component.html',
  styleUrl: './learn-rxjs.component.scss'
})
export class LearnRxjsComponent implements AfterViewInit {
  formControl = new FormControl();
  platformId = inject(PLATFORM_ID);

  constructor() {
    const obs = new Observable((subscriber) => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)

      return () => {
        console.log('DESTROYING');
      }
    });

    const sub = obs.subscribe(value => {
      console.log(value)
    })

    setTimeout(() => {
      sub.unsubscribe();
    }, 3000)

  }

   ngAfterViewInit() {
     const inputElement = document.querySelector('input');

     if(isPlatformBrowser(this.platformId)) {
       const timer = customTimer(1000).subscribe(value => console.log(value));

       setTimeout(() => {
         timer.unsubscribe();
       }, 5000)
     }

     if (isPlatformBrowser(this.platformId) && inputElement) {
       customFromEvent(inputElement, 'keyup')
         .pipe(
           take(5)
         )
         .subscribe((event) => {
           console.log(event);
         })

     }

   }

}
