import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA
  } from '@angular/material';
import {
    DomSanitizer
  } from '@angular/platform-browser';

@Component({
  templateUrl: './image-card-dialog.component.html',
  styleUrls: ['./image-card-dialog.component.scss']
})
export class ImageCardDialogComponent {
    public source: string;
    public newImageUrl = this.domsanitizer.bypassSecurityTrustResourceUrl('./assets/images/thumbnail.png');
  constructor(
      public dialogRef: MatDialogRef<ImageCardDialogComponent>,
      private domsanitizer: DomSanitizer,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    this.source = data.source;
   }

   close() {
       this.dialogRef.close();
   }

   submitImage(imageUrl) {
       this.dialogRef.close();
   }

   filePath(imageUrl) {
    this.newImageUrl = this.domsanitizer.bypassSecurityTrustResourceUrl(imageUrl);
   }

}
