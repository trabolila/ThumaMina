import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MemeGenerator';

  topText = '';
  bottomText = '';

  onTopKey(event: any) { // without type info
    this.topText = event.target.value;
  }


  onBottomKey(event: any) { // without type info
    this.bottomText = event.target.value;
  }
}
