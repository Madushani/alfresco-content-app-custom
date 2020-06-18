import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { AppStore, getAppSelection } from '@alfresco/aca-shared/store';
import { take } from 'rxjs/operators';
import { SharedLinkEntry } from '@alfresco/js-api';
import { SharedLinksApiService, AppConfigService } from '@alfresco/adf-core';


@Component({
  selector: 'aca-my-extension-dialog',
  templateUrl: './my-extension-dialog.component.html',
  styleUrls: ['./my-extension-dialog.component.scss']
})


export class MyExtensionDialogComponent implements OnInit {

  nodeId: string;
  nodeName: string;
  hostName: string;

  sharednode: string;
  private sharedLinksApiService;
  private appConfigService;
  constructor(
    public dialogRef: MatDialogRef<MyExtensionDialogComponent>, private store: Store<AppStore>
    , sharedLinksApiService: SharedLinksApiService, appConfigService: AppConfigService) {
    this.sharedLinksApiService = sharedLinksApiService;
    this.appConfigService = appConfigService;
  }

  ngOnInit() {


  }
  openDialog() {

    this.store
      .select(getAppSelection)
      .pipe(take(1))
      .subscribe(selection => {
        this.nodeId =
          (selection.file as SharedLinkEntry).entry.id;
        this.nodeName = (selection.file as SharedLinkEntry).entry.name;

      });

    this.hostName = this.appConfigService.config.ecmHost;

    this.sharedLinksApiService.getSharedLinks().subscribe(responce => {

      let entries = responce.list.entries;
      const length = responce.list.entries.length;
      for (let i = 0; i < length; i++) {

        if (entries[i].entry.nodeId == this.nodeId) {
          let link = this.hostName + "/#/preview/s/" + entries[i].entry.id;
          window.location.href  = 'mailto:?subject=' + encodeURIComponent(this.nodeName) + '&body=' + encodeURIComponent(link);
        }
      }
    });
    this.sharedLinksApiService.createSharedLinks(this.nodeId).pipe(take(1)).subscribe(sharedlink => {
      this.sharednode = sharedlink.entry.id;
      let link = this.hostName + "/#/preview/s/" + this.sharednode;
      window.location.href  = 'mailto:?subject=' + encodeURIComponent(this.nodeName) + '&body=' + encodeURIComponent(link);
    });

    this.dialogRef.close();

  }
}



