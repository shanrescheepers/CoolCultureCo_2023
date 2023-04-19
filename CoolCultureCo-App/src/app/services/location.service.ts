import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'

export interface Location {
  _id: string;
  name: string;
  image: string;
  managerNumber: Number;
  email: string;
}



@Injectable({
  providedIn: 'root'
})

export class LocationService {
  private locations$ = new BehaviorSubject<Location[]>([]);

  constructor(private http: HttpClient) { }

  public init(): void {
    this.http
      .get<Location[]>("http://localhost:3000/api/locations")
      .subscribe((locations) => {
        this.locations$.next(locations)
        // console.log(locations);
      })
  }

  public getLocations(): Observable<Location[]> {
    // console.log(this.locations$);
    return this.locations$;
  }





}
