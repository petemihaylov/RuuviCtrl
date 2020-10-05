import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AssetData } from "./_models/asset-data.model";
import { AssetDataService } from "./_services/asset-data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {


  Data: Observable<AssetData>;
  page = 3;

  constructor(private assetDataService: AssetDataService) {}

  ngOnInit(): void {
    this.Data = this.assetDataService.list().pipe();
  }
}
