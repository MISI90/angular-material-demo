import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {HeroModel} from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mailControl = new FormControl('', [
    Validators.required,
    Validators.minLength(15)
  ]);

  constructor(private snackBar: MatSnackBar) {
  }

  hero: HeroModel = new HeroModel();

  test() {
    if (this.mailControl.errors) {
      this.snackBar.open('Formularz zawiera błędy. Popraw je aby móc zapisać dane.', 'OK');
    }
  }

}
