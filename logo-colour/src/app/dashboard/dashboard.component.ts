import { Component, OnInit } from "@angular/core";
import { LogoModel } from "../models/logo_model";
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  appIcons: LogoModel[];
  search = new FormControl();

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
      },
      {
        img: "Snapchat.png",
        name: "snapchat",
        colours: [
          { hex: "#FFFC00", rgb: "(255,252,0)", cmyk: "(0,0,100,0)" },
          { hex: "#000000", rgb: "(0,0,0)", cmyk: "(0,0,0,10)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "airbnb.png",
        name: "airbnb",
        colours: [{ hex: "#FF585D", rgb: "(255,88,93)", cmyk: "(0,70,58,0)" }]
      },
      {
        img: "discord.png",
        name: "discord",
        colours: [
          {
            hex: "#7289DA",
            rgb: "(114,137,218)",
            cmyk: "(0.48,0.37,0.00,0.15)"
          }
        ]
      },
      {
        img: "tinder.png",
        name: "tinder",
        colours: [
          { hex: "#FE3C72", rgb: "(254,60,114)", cmyk: "(0,89,33,0)" },
          { hex: "#fe615f", rgb: "(254,97,95)", cmyk: "(0.00,0.62,0.63,0.00)" }
        ]
      },
      {
        img: "bestbuy.png",
        name: "best buy",
        colours: [
          { hex: "#0A4ABF", rgb: "(10,74,191)", cmyk: "(91,76,0,0)" },
          { hex: "#F6EB16", rgb: "(246,235,22)", cmyk: "(7,0,97,0)" },
          { hex: "#000000", rgb: "(0,0,0)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "costco.png",
        name: "costco",
        colours: [
          { hex: "#E31837", rgb: "(227,24,55)", cmyk: "(5,100,83,1)" },
          { hex: "#005DAA", rgb: "(0,93,170)", cmyk: "(94,68,1,0)" }
        ]
      },
      {
        img: "redbull.png",
        name: "red bull",
        colours: [
          { hex: "#CC1E4A", rgb: "(204,31,75)", cmyk: "(13,100,66,2)" },
          { hex: "#FFC906", rgb: "(255,202,6)", cmyk: "(0,20,100,0)" }
        ]
      }
    ];

    this.appIcons.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
  }

  onSearch() {
    
  }



}
