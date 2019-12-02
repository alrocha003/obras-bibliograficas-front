import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ObrasBibliograficasService {
  URL_BASE = "https://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  public GetAll() {
    return this.httpClient.get(`${this.URL_BASE}/api/Author`);
  }

  public Register(param): Observable<{}> {
    return this.httpClient.post(`${this.URL_BASE}/api/Author`, {
      Id: 0,
      Name: param.name
    });
  }
}
