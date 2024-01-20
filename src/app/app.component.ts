import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calcurate-area';
  selectValue: {
    unit: number,
    fromUnit: string,
    result: number
  } = {
    unit: 1,
    fromUnit: 'ตารางวา',
    result: 0
  }
  fromUnits = [
    {
      type: 1,
      unitname: 'ตารางวา',
    },
    {
      type: 2,
      unitname: 'งาน',
    },
    {
      type: 3,
      unitname: 'ไร่',
    },
  ]


  calcularateAarea(event: any){
      let result = 0
      switch(this.selectValue.fromUnit)  {
        case 'ตารางวา':
            result = this.selectValue.unit * 4
            this.selectValue.result = result
        break
        case 'งาน':
          result = this.selectValue.unit * 400
          this.selectValue.result = result
        break
        case 'ไร่':
          result = this.selectValue.unit * 1600
          this.selectValue.result = result
        break
      }

  }
}
