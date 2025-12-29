import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  form!: FormGroup;
  personId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService, private fb: FormBuilder) {}

  ngOnInit() {
    this.personId = +this.route.snapshot.paramMap.get('id')!;
    const person = this.personService.getById(this.personId);

    if (!person) {
      this.router.navigate(['/']);
      return;
    }

    this.form = this.fb.group({
      id: [person.id],
      name: [person.name],
      email: [person.email],
      age: [person.age]
    });
  }

  save() {
    this.personService.update(this.form.value);
    this.router.navigate(['/']);
  }
}
