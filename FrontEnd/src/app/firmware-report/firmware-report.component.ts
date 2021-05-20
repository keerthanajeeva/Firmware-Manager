import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
import { ExportToCsv } from 'export-to-csv';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";

export const QUERY = gql`
query otapcommand($DeviceID:[String]){
  otapcommand(DeviceID: $DeviceID){
    DeviceID,
    DeviceID
    DeviceType
    Customer
    NetworkProvider
    MobileNo
    Model
    VehicleTypeName
    CurrentCVersion
    CurrentJavaVersion
    Ignition
  }
}  
`
@Component({
  selector: 'app-firmware-report',
  templateUrl: './firmware-report.component.html',
  styleUrls: ['./firmware-report.component.css']
})
export class FirmwareReportComponent implements OnInit {

  public searchedData
  public listArray
  public entries: object = [];
  constructor(private router:Router, private _snackBar: MatSnackBar , private http: HttpClient,private apollo: Apollo) { }

  ngOnInit(): void {
  }

 

  search(val){
    if(val != undefined)
    {
      this.listArray = val.split(',');
     this.Query();
    }
}

Query(){
   
  this.apollo.query({
    query: QUERY,
  variables:{
    DeviceID: this.listArray
  }
  }).subscribe(result => {
   
    this.entries = result.data['otapcommand']
    this.download();
  })
}

  download(){
    const options = { 
      filename: 'Firmware Report',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: false,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
     
    };
   
  const csvExporter = new ExportToCsv(options);
   
  csvExporter.generateCsv(this.entries);
  }

  dash(){
    this.router.navigate(['Firmware']);
  }

}
