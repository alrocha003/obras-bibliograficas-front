import { Component, OnInit } from '@angular/core';
import { ObrasBibliograficasService } from '../obras-bibliograficas.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {
  items: any;
  constructor(private service: ObrasBibliograficasService) { }

  ngOnInit() {
    this.service.GetAll().subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }

}
