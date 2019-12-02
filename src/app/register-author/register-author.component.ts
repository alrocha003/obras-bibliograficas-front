import { Component, OnInit } from '@angular/core';
import { ObrasBibliograficasService } from '../obras-bibliograficas.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-author',
  templateUrl: './register-author.component.html',
  styleUrls: ['./register-author.component.css']
})
export class RegisterAuthorComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: ObrasBibliograficasService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
  }

  Send() {
    this.service.Register(this.form.value).subscribe(data => {
      debugger;
      console.log(data);
    });

    this.router.navigate(["list"]).then(() => {
      window.location.reload();
    });
  }

}
