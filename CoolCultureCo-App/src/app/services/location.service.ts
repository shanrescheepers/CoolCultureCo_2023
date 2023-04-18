import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'

export interface Location {
  _id: string,
  name: string,
  address: string
}

export interface selectedLocation {
  _id: string,
  name: string,
  image: string,
  managerNumber: Number,
  email: string,
}

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  private locations$ = new BehaviorSubject<Location[]>([]);
  private selectedlocation$ = new BehaviorSubject<selectedLocation[]>([]);


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

  public getLocation(): Observable<selectedLocation[]> {
    console.log(this.selectedlocation$);
    return this.selectedlocation$;
  }

  public setLocation(id: any) {
    this.http
      .get<selectedLocation[]>("http://localhost:3000/api/location/" + id)
      .subscribe((selectedlocation) => {
        this.selectedlocation$.next(selectedlocation)
        // console.log(selectedlocation);
      })
  }

}
