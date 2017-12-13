import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { AuthorsComponent } from "./authors/authors.component";

import { CoursesService } from "./courses.service";
import { AuthorsService } from "./authors.service";
import { FavoriteComponent } from './favorite/favorite.component';
import { InputTitleCaseComponent } from './input-title-case/input-title-case.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    InputTitleCaseComponent,
    TitleCasePipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
