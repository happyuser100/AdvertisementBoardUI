import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AdvertisementBoardService } from 'src/shared/services/advertisement-board.service';
import { AdvertisementItem } from 'src/shared/models/advertisement-item';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-advertisment-list',
  templateUrl: './advertisment-list.component.html',
  styleUrls: ['./advertisment-list.component.css']
})
export class AdvertismentListComponent implements OnInit{

  displayedColumns: string[] = ['id', 'place', 'adProperty','edit','delete'];  
  data: AdvertisementItem[] = [];

  dataSource = new MatTableDataSource<AdvertisementItem>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private advertisementBoardService: AdvertisementBoardService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllAdvertisements();
  }

  getAllAdvertisements() {
    this.advertisementBoardService.getAll().subscribe({
      next: (response) => {
        this.data = response;
        this.dataSource = new MatTableDataSource<AdvertisementItem>(this.data);
      },
      error: (error) => {
        this.commonService.displayMessage('There was an error in retrieving data from the server');
      }
    });
  }  

  deleteClick(id: string) {
    this.advertisementBoardService.delete(id).subscribe({
      next: (response) => {
        this.commonService.displayMessage('Advertisment succesfull deleted');
        this.getAllAdvertisements();
      },
      error: (error) => {
        this.commonService.displayMessage('There was an error in retrieving data from the server');
      }
    });
  }

  // updateClick(id: string)
  // {
  //   this.router.navigate(['/edit', id]), { relativeTo: this.route };
  // }
}
