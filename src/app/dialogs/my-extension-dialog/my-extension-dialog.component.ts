import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'aca-my-extension-dialog',
  templateUrl: './my-extension-dialog.component.html',
  styleUrls: ['./my-extension-dialog.component.scss']
})


export class MyExtensionDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<MyExtensionDialogComponent>) {

  }

  ngOnInit() {


  }
  openDialog() {

    // window.location = 'mailto:?subject=' + encodeURIComponent("Billing statement Alfresco.xlsx") + '&body='
    //   + encodeURIComponent("http://localhost:4200/#/libraries/1f36ade1-9f2b-4f95-a0be-5ca28d98ffa5/(viewer:view/ba2897d4-54e3-44a2-b1d3-d23ab9c07ee3)?location=%2Flibraries%2F1f36ade1-9f2b-4f95-a0be-5ca28d98ffa5");
    this.dialogRef.close();

  }
}



