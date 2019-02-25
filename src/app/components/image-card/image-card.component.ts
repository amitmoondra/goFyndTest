import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
@Input() source: string;
@Input() alternativeText: string;
@Output() public deleteImage = new EventEmitter<string>();
@Output() public openDialog = new EventEmitter<string>();
  constructor(
  ) { }

  ngOnInit() {
  }


}
