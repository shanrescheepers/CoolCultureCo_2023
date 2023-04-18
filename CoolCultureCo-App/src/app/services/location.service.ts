import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';

export interface Location {
  id: string,
  name: string,
  address: string
}


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations$ = new BehaviorSubject<Location[]>([]);


  constructor(private http: HttpClient) { }

  public init(): void {
    this.http
      .get("http://localhost:3000/api/locations")
      .subscribe((locations: any) => {
        console.log(locations);
        this.locations$.next(locations)
      })
  }

  public getLocations(): Observable<Location[]> {
    return this.locations$;
  }
}
