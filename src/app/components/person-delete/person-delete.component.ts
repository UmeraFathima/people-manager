import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html'
})
export class PersonDeleteComponent implements OnInit {
  personId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) {}

  ngOnInit() {
    this.personId = +this.route.snapshot.paramMap.get('id')!;
  }

  confirmDelete() {
    this.personService.delete(this.personId);
    this.router.navigate(['/']);
  }
}
