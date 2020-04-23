import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LogoModel } from "../models/logo_model";

@Injectable({
  providedIn: "root"
})
export class DataService implements OnInit {
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {}

  getAllLogos() {
    return this.httpClient.get<LogoModel[]>("http://localhost:3000/api/logos");
  }
}
