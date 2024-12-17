import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdvertisementItem } from 'src/shared/models/advertisement-item';
import { AdvertisementBoardService } from 'src/shared/services/advertisement-board.service';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-main-advertisment',
  templateUrl: './main-advertisment.component.html',
  styleUrls: ['./main-advertisment.component.css']
})
export class MainAdvertismentComponent {

  form: FormGroup = new FormGroup({});
  items: AdvertisementItem[] = [];

  get placeNameCtrl() {
    return this.form.get('placeName');
  }

  constructor(
    private fb: FormBuilder,
    private advertisementBoardService: AdvertisementBoardService,
    private commonService: CommonService) {
    this.form = fb.group({
      placeName: ['', [Validators.required]],
    })
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

  searchByPlace() {
    let placeName = this.form.get("placeName")?.value;
    this.advertisementBoardService.getByPlace(placeName).subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (error) => {
        this.commonService.displayMessage('There was an error in retrieving data from the server');
      }
    });
  }
}
