import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
        <div class="container">
          <div class="row">
            <div class="col">
              <button class="btn btn-primary">Button</button>
            </div>
          </div>
        </div>
        `
})
export class CoursesComponent {
  courses;

  isActive = false;
  email;

  onSave($event) {
    this.isActive = !this.isActive;
    console.log("Button was clicked: ", $event);
    $event.stopPropagation();
  }
  onDivClick($event) {
    console.log("Div was clicked: ", $event);
  }
  onKeyUp() {
    console.log(this.email);
  }
}
