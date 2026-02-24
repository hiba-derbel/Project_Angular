import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'tasks/create', component: CreateTaskComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
