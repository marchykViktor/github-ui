import {trigger, state, animate, style, transition} from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [

    state('*', style({
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    })),
    
    transition(':enter', [
      style({
        position: 'relative',
        left: '1000px',
        opacity: 0
      }),
      animate('1s ease-in-out', style({
        left: 0,
        opacity: 1
      }))
    ])
    
  ]);