import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'

export interface SelectedLocation {
  _id: string;
  name: string;
  image: string;
  managerNumber: Number;
  email: string;
}

export interface LocationId {
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentLocationService {
  selectedlocation$ = new BehaviorSubject<SelectedLocation[]>([]);


  constructor(private http: HttpClient) { }

  public init(): void {
    // this.selectedlocation$.next(selectedlocation)
    this.http
      .get<SelectedLocation[]>("http://localhost:3000/api/location/" + "64401ef1012f7d87438755ca")
      .subscribe((selectedlocation) => {
        this.selectedlocation$.next(selectedlocation)
        // console.log(selectedlocation);
      })
  }

  public getLocation(): Observable<SelectedLocation[]> {
    // console.log(this.selectedlocation$);
    return this.selectedlocation$;
  }

  public setLocation(id: string) {
    this.http
      .get<SelectedLocation[]>("http://localhost:3000/api/location/" + id)
      .subscribe((selectedlocation) => {
        this.selectedlocation$.next(selectedlocation)
        // console.log(selectedlocation);
      })
  }
}
