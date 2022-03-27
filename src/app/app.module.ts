import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { TodosPage } from './pages/todos.pages';
import { CompletedPage } from './pages/completed.pages';


const routes:Route[] =[
{
  path:'',
  component: TodosPage
},
{
  path:'completed',
  component: CompletedPage
}
]
@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    TodosPage,
    CompletedPage
  ],
  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
