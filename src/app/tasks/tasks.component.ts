import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
