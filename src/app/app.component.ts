import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hobbiesArray = new FormArray([new FormControl('', Validators.required)]);

  ngOnInit() {}

  addInputControl() {
    this.hobbiesArray.push(new FormControl('', Validators.required));
  }

  removeInputControl(idx: number) {
    this.hobbiesArray.removeAt(idx);
  }
}
