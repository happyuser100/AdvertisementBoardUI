import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import { AdvertisementItem } from '../models/advertisement-item';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementBoardService {

  baseURL: string = environment.baseURL;
  constructor(private httpClient: HttpClient, private commonService: CommonService) { }

  getAll() {
    return this.httpClient.get<AdvertisementItem[]>(`${this.baseURL}/advertisementBoard`)
      .pipe(
        catchError(this.commonService.handleError)
      );
  }

  getByPlace(place: string) {
    return this.httpClient.get<AdvertisementItem[]>(`${this.baseURL}/CityEvent/getByPlace/${place}`)
      .pipe(
        catchError(this.commonService.handleError)
      );
  }
}
