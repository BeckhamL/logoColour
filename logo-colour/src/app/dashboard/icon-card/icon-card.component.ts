import { Component, OnInit, Input } from '@angular/core';
import { LogoModel } from '../../models/logo_model';
@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {

  @Input()
  app: LogoModel;
  
  constructor() { }

  ngOnInit() {
  }

}
