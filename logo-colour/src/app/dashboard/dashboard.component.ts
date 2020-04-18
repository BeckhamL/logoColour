import { Component, OnInit } from "@angular/core";
import { LogoModel } from "../models/logo_model";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  appIcons: LogoModel[];

  constructor() {}

  ngOnInit() {
    this.appIcons = [
      {
        img: "messenger.png",
        name: "messenger",
        colours: [
          { hex: "#0078FF", rgb: "(0,120,255)", cmyk: "(78,54,0,0)" },
          { hex: "#00C6FF", rgb: "(0,198,255)", cmyk: "(63,1,0,0)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      }
    ];
  }
}
