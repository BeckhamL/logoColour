import { Component, OnInit, Input } from '@angular/core';
import { LogoModel } from '../../models/logo_model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {

  @Input()
  app: LogoModel;
  
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onClickAddToClipboard(clickElement: string) {
    this.snackBar.open('Copied ' + clickElement + ' to the clipboard!', 'Close', {
      duration: 2000
    });
  }

}
