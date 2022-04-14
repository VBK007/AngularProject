import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World....!';
  name: any;
  lastName: any;


  onSubmitClick() {
    this.name;
    this.lastName;
    console.log(this.name);
  }
}
