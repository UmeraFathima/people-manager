import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private people: Person[] = [
    { id: 1, name: 'John Doe', email: 'john@test.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@test.com', age: 25 }
  ];

  getAll(): Person[] {
    return this.people;
  }

  getById(id: number): Person | undefined {
    return this.people.find(p => p.id === id);
  }

  add(person: Person): void {
    const newId = this.people.length ? Math.max(...this.people.map(p => p.id)) + 1 : 1;
    person.id = newId;
    this.people.push(person);
  }

  update(person: Person): void {
    const index = this.people.findIndex(p => p.id === person.id);
    if (index !== -1) this.people[index] = person;
  }

  delete(id: number): void {
    this.people = this.people.filter(p => p.id !== id);
  }
}
