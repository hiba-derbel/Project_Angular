import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-create-task',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent],
    templateUrl: './create-task.component.html',
    styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

    constructor(private router: Router) { }

    onSave(event: Event) {
        event.preventDefault();
        // Logic to save task will go here
        console.log('Task saved!');
        this.router.navigate(['/tasks']);
    }

    onCancel() {
        this.router.navigate(['/tasks']);
    }
}
