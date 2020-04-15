import { Injectable } from '@angular/core';
import data from '../assets/resumeData.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any = data;
  constructor() { }
}
