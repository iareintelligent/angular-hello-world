import { Component, Input } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  contactMethods = [{ id: 1, name: "Email" }, { id: 2, name: "Phone" }];
  onChange(firstName) {
    console.log(firstName);
  }

  submit(f) {
    console.log(f);
  }
  submit(f) {
    f.value;
  }
}
