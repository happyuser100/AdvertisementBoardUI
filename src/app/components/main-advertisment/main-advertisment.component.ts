import { Component } from '@angular/core';
import { AdvertisementItem } from 'src/shared/models/advertisement-item';
import { AdvertisementBoardService } from 'src/shared/services/advertisement-board.service';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-main-advertisment',
  templateUrl: './main-advertisment.component.html',
  styleUrls: ['./main-advertisment.component.css']
})
export class MainAdvertismentComponent {

  items: AdvertisementItem[] = [];

  constructor(private advertisementBoardService: AdvertisementBoardService,
    private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.getAllAdvertisements();
  }

  getAllAdvertisements() {
    this.advertisementBoardService.getAll().subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (error) => {
        this.commonService.displayMessage('There was an error in retrieving data from the server');
      }
    });
  }

}
