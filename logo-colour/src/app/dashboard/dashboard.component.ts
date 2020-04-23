import { Component, OnInit } from "@angular/core";
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

  constructor(
    private snackBar: MatSnackBar,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.appIcons = [];
    this.getAllLogos();
    this.typed = new Typed("#typed", this.typedOptions);
  }

  getAllLogos() {
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

  onColorPickChange($event) {
    console.log($event);
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
