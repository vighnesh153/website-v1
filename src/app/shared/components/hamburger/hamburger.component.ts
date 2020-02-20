import {
  Input,
  OnInit,
  Component
} from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  hamburgerLineStyle = {
    backgroundColor: '#fff'
  };
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
    if (this.backgroundColor) {
      this.hamburgerLineStyle.backgroundColor = this.backgroundColor;
    }
  }

}
