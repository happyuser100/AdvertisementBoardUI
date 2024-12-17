import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdvertisementItem } from 'src/shared/models/advertisement-item';
import { AdvertisementBoardService } from 'src/shared/services/advertisement-board.service';
import { CommonService } from 'src/shared/services/common.service';

interface AdProperty {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-advertisment',
  templateUrl: './main-advertisment.component.html',
  styleUrls: ['./main-advertisment.component.css']
})
export class MainAdvertismentComponent {

  form: FormGroup = new FormGroup({});
  items: AdvertisementItem[] = [];
  educationOwnershipTypeCurrent: string = "";

  adProperties: AdProperty[] = [
    { value: '', viewValue: 'All Properties' },
    { value: 'Buy & Sell', viewValue: 'Buy & Sell' },
    { value: 'Events', viewValue: 'Events' },
    { value: 'Rent', viewValue: 'Rent' },
  ];

  get placeNameCtrl() {
    return this.form.get('placeName');
  }

  constructor(
    private fb: FormBuilder,
    private advertisementBoardService: AdvertisementBoardService,
    private commonService: CommonService) {
    this.form = fb.group({
      placeName: ['', [Validators.required]],
      prop: ['', [Validators.required]],
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

  searchByPlaceAndProp() {
    const ALL = "all";
    let placeName: string = this.form.get("placeName")?.value;
    let prop: string = this.form.get("prop")?.value;
    if (placeName == "") placeName = ALL;
    if (prop == "") prop = ALL;
    this.advertisementBoardService.getByPropAndPlace(placeName, prop).subscribe({
      next: (response) => {
        this.items = response;
        if (this.items && this.items.length == 0)
          this.commonService.displayMessage("No records found!")
      },
      error: (error) => {
        this.commonService.displayMessage('There was an error in retrieving data from the server');
      }
    });
  }

  onSelectionChange(event: any) {
    this.educationOwnershipTypeCurrent = event.value;
  }

}
