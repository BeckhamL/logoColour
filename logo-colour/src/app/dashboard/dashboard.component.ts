import { Component, OnInit } from "@angular/core";
import { LogoModel } from "../models/logo_model";
import { FormControl } from "@angular/forms";
import { Observable, BehaviorSubject } from "rxjs";
import { fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";
import Typed from 'typed.js';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  appIcons: LogoModel[];
  searchText = '';
  color = '#ffffff';
  typedOptions = {
    strings: ['AMAZON', 'DISCORD', 'LEGO', 'PINTEREST', 'MESSENGER', 'SNAPCHAT'],
    typeSpeed: 110,
    backSpeed: 70,
    showCursor: false,
    loop: true,
    shuffle: true
  };
  typed: Typed;

  constructor() {}

  ngOnInit() {
    this.typed = new Typed('#typed', this.typedOptions);

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
      },
      {
        img: "barnes.png",
        name: "barnes & noble",
        colours: [
          { hex: "#366251", rgb: "(54,98,81)", cmyk: "(78,41,69,29)" },
          { hex: "#C6BEB0", rgb: "(198,190,176)", cmyk: "(23,21,29,0)" }
        ]
      },
      {
        img: "amazon.png",
        name: "amazon",
        colours: [
          { hex: "#FF9900", rgb: "(255,153,0)", cmyk: "(0,47,100,0)" },
          { hex: "#000000", rgb: "(0,0,0)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "acer.png",
        name: "acer",
        colours: [{ hex: "#83B81A", rgb: "(131,184,26)", cmyk: "(55,6,100,0)" }]
      },
      {
        img: "lego.png",
        name: "lego",
        colours: [
          { hex: "#E3000B", rgb: "(227,0,11)", cmyk: "(4,100,100,1)" },
          { hex: "#FFED00", rgb: "(255,237,0)", cmyk: "(3,1,97,0)" },
          { hex: "#000000", rgb: "(0,0,0)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "paypal.png",
        name: "paypal",
        colours: [
          { hex: "#00457C", rgb: "(0,69,124)", cmyk: "(100,57,0,40)" },
          { hex: "#0079C1", rgb: "(0,121,193)", cmyk: "(100,44,0,0)" }
        ]
      },
      {
        img: "budlight.png",
        name: "bud light",
        colours: [
          { hex: "#061148", rgb: "(6,17,72)", cmyk: "(100,97,34,46)" },
          { hex: "#00A1E1", rgb: "(0,161,225)", cmyk: "(74,21,0,0)" }
        ]
      },
      {
        img: "pokemon.png",
        name: "pokemon",
        colours: [
          { hex: "#FFCB05", rgb: "(255,203,5)", cmyk: "(0,20,100,0)" },
          { hex: "#3D7DCA", rgb: "(61,125,202)", cmyk: "(76,47,0,0)" },
          { hex: "#003A70", rgb: "(0,58,112)", cmyk: "(100,84,31,17)" }
        ]
      },
      {
        img: "tmobile.png",
        name: "t-mobile",
        colours: [
          { hex: "#ED008C", rgb: "(237,0,140)", cmyk: "(0,99,1,0)" },
          { hex: "#999B9E", rgb: "(153,155,158)", cmyk: "(43,34,33,1)" }
        ]
      },
      {
        img: "canon.png",
        name: "canon",
        colours: [
          { hex: "#BF1920", rgb: "(191,25,32)", cmyk: "(18,100,100,8)" }
        ]
      },
      {
        img: "twitter.png",
        name: "twitter",
        colours: [{ hex: "#1DA1F2", rgb: "(29,161,242)", cmyk: "(69,26,0,0)" }]
      },
      {
        img: "youtube.png",
        name: "youtube",
        colours: [
          { hex: "#FF0000", rgb: "(255,0,0)", cmyk: "(0,95,100,0)" },
          { hex: "#282828", rgb: "(40,40,40)", cmyk: "(0,0,0,100)" }
        ]
      },
      {
        img: "linkedin.png",
        name: "linkedin",
        colours: [
          { hex: "#2867B2", rgb: "(40,103,178)", cmyk: "(87,61,0,0)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "twitch.png",
        name: "twitch",
        colours: [
          { hex: "#6441A4", rgb: "(100,65,164)", cmyk: "(69,75,0,0)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "coke.png",
        name: "coca-cola",
        colours: [{ hex: "#F40009", rgb: "(244,0,0)", cmyk: "(4,100,95,0)" }]
      },
      {
        img: "hulu.png",
        name: "hulu",
        colours: [
          { hex: "#3DBB3D", rgb: "(102,170,50)", cmyk: "(66,11,100,1)" }
        ]
      },
      {
        img: "reddit.png",
        name: "reddit",
        colours: [
          { hex: "#FF4500", rgb: "(255,69,0)", cmyk: "(0,87,100,0)" },
          { hex: "#000000", rgb: "(0,0,0)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "whatsapp.png",
        name: "whatsapp",
        colours: [
          { hex: "#4AC959", rgb: "(74,201,89)", cmyk: "(66,0,87,0)" },
          { hex: "#455A64", rgb: "(69,90,100)", cmyk: "(75,55,47,24)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "pinterest.png",
        name: "pinterest",
        colours: [
          { hex: "#BD081C", rgb: "(189,8,28)", cmyk: "(18,100,100,9)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "mcdonalds.png",
        name: "mcdonalds",
        colours: [
          { hex: "#FFC72C", rgb: "(255,199,44)", cmyk: "(0,100,91,0)" },
          { hex: "#DA291C", rgb: "(218,41,28)", cmyk: "(0,30,94,0)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "oldnavy.png",
        name: "old navy",
        colours: [
          { hex: "#163E69", rgb: "(22,62,105)", cmyk: "(99,80,33,21)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "levi.png",
        name: "levi",
        colours: [
          { hex: "#C41230", rgb: "(196, 18, 48)", cmyk: "(0,100,79,20)" },
          { hex: "#ffffff", rgb: "(255,255,255)", cmyk: "(0,0,0,0)" }
        ]
      },
      {
        img: "pandora.png",
        name: "pandora",
        colours: [{ hex: "#00A0EE", rgb: "(0,160,238)", cmyk: "(71,25,0,0)" }]
      }
    ];

    this.appIcons.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
  }

  onFilterChange(filterValue: string) {
    if (filterValue === "atoz") {
      this.appIcons.sort((a, b) =>
        a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      );
    } else {
      this.appIcons.sort((a, b) =>
      a.name > b.name ? -1 : a.name < b.name ? 1 : 0
    );
    }
  }

  onColorPickChange($event) {
    console.log($event)
  }
}
