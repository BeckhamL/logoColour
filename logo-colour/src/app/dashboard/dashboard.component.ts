import { Component, OnInit, HostListener } from "@angular/core";
import { LogoModel } from "../models/logo_model";
import Typed from "typed.js";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  LogoCategoryModel,
  LogoCategoryEnum
} from "../models/logo_category_model";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  appIcons: LogoModel[];
  searchText = "";
  color = "#ffffff";
  noMatchingHex = false;
  typedOptions = {
    strings: [
      "AMAZON",
      "DISCORD",
      "LEGO",
      "PINTEREST",
      "MESSENGER",
      "SNAPCHAT"
    ],
    typeSpeed: 110,
    backSpeed: 70,
    showCursor: false,
    loop: true,
    shuffle: true
  };

  logoCategories: LogoCategoryModel[] = [
    { name: LogoCategoryEnum.technology, selected: false },
    { name: LogoCategoryEnum.foodBeverage, selected: false },
    { name: LogoCategoryEnum.clothing, selected: false },
    { name: LogoCategoryEnum.gaming, selected: false },
    { name: LogoCategoryEnum.retail, selected: false }
  ];
  typed: Typed;
  showNavBarElements = false;

  @HostListener("window:scroll")
  onscroll() {
    const header = document.getElementById("header");
    const header_title = document.getElementById("header_title");
    if (window.pageYOffset >= 600) {
      this.showNavBarElements = true;

      header.classList.add("box_shadow");
      header_title.classList.add("font_40");
    } else {
      this.showNavBarElements = false;
      header.classList.remove("box_shadow");
      header_title.classList.remove("font_40");
    }
  }

  constructor(
    private snackBar: MatSnackBar,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.appIcons = [];
    this.getAllLogos();
    this.typed = new Typed("#typed", this.typedOptions);
  }

  onClickLogo() {
    window.scroll(0, 0);
  }

  getAllLogos() {
    this.searchText = "";
    this.dataService.getAllLogos().subscribe(logos => {
      if (logos) {
        this.appIcons = logos;
        this.appIcons.sort((a, b) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
      }
    });
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

  onColorPickChange($event: string) {
    this.appIcons = this.appIcons.filter(
      x => this.checkifRGBMatch(x, $event) === true
    );
  }

  checkifRGBMatch(logo: LogoModel, colourSent: string): boolean {
    for (let i = 0; i < logo.colours.length; i++) {
      if (this.hexColorDelta(logo.colours[i].hex, colourSent) > 0.8) {
        this.noMatchingHex = false;
        return true;
      } else {
        this.noMatchingHex = true;
        return false;
      }
    }
  }

  hexColorDelta(hex1: string, hex2: string) {
    var r1 = parseInt(hex1.substring(1, 3), 16);
    var g1 = parseInt(hex1.substring(3, 5), 16);
    var b1 = parseInt(hex1.substring(5, 7), 16);

    var r2 = parseInt(hex2.substring(1, 3), 16);
    var g2 = parseInt(hex2.substring(3, 5), 16);
    var b2 = parseInt(hex2.substring(5, 7), 16);

    var r = 255 - Math.abs(r1 - r2);
    var g = 255 - Math.abs(g1 - g2);
    var b = 255 - Math.abs(b1 - b2);

    r /= 255;
    g /= 255;
    b /= 255;

    return (r + g + b) / 3;
  }

  onClickAddLogo() {
    this.snackBar.open(
      "Sucessfully requested to add " + this.searchText.toUpperCase(),
      "Close",
      {
        duration: 2000
      }
    );
  }

  onChangeCategory($event: LogoCategoryEnum) {
    const logo: LogoCategoryModel = this.logoCategories.find(
      x => x.name === $event
    );
    const logoIndex: number = this.logoCategories.findIndex(
      x => x.name === $event
    );

    if (logo.selected) {
      this.logoCategories[logoIndex].selected = false;
    } else {
      this.logoCategories[logoIndex].selected = true;
    }

    console.log(this.logoCategories);
  }
}
