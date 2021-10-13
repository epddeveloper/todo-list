import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/to-do-list', pathMatch: 'full' },
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'edit-item/:id', component: ToDoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
