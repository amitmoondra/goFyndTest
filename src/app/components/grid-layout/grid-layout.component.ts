import { Component, OnInit } from '@angular/core';
import { GridLayoutService } from '../../services/gridLayout.service';
import { ImageCardDialogComponent } from '../image-card/image-card-dialog.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {
  public gridData = [];

  constructor(
    public gridLayoutService: GridLayoutService,
    public dialog: MatDialog,
  ) {
    this.gridLayoutService.allImages().subscribe((imagesObject: any) => {
      this.gridData = imagesObject;
      console.log(this.gridData);
    });
  }

  ngOnInit() {
  }

  deleteImage(url) {
    this.gridData = this.gridData.filter(imageObject => imageObject.image_url !== url);
  }
  openDialog(url) {
    const dialogRef = this.dialog.open(ImageCardDialogComponent, {
      width: '60%',
      height: '60%',
      data: { source:  url }
  });
  }

}
