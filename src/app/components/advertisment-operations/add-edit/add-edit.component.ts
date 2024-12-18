import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/shared/services/common.service';
import { AdvertisementBoardService } from 'src/shared/services/advertisement-board.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private advertisementBoardService: AdvertisementBoardService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      place: ['', Validators.required],
      adProperty: ['', Validators.required],
      title: ['', Validators.required],
      imageURL: ['', [Validators.required]],
      description: ['', Validators.required],
      iconUrl: ['', Validators.required],
      personName: ['', Validators.required],
      isCommentsNumber: ['', Validators.required],
      commentsNumber: ['', Validators.required],
      isWriteComments: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.advertisementBoardService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }
  }

  // convenience getter for easy access to form fields
  public get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {
    this.advertisementBoardService.create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.commonService.displayMessage('Advertisment added');
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => this.loading = false);
  }

  private updateUser() {
    this.advertisementBoardService.update(this.id, this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.commonService.displayMessage('Advertisment updated');
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => this.loading = false);
  }
}
