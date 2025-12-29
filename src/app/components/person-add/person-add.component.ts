import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html'
})
export class PersonAddComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      age: ['']
    });
  }

  save() {
    this.personService.add(this.form.value);
    this.router.navigate(['/']);
  }
}
