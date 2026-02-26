import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-create-task',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, ReactiveFormsModule],
    templateUrl: './create-task.component.html',
    styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
    taskForm = new FormGroup(
    {
        
        title: new FormControl('', [Validators.required,Validators.minLength(3)]),
        description: new FormControl('', Validators.required,),
        status:new FormControl('To Do', Validators.required),
        priority:new FormControl("medium", Validators.required),
        dueDate:new FormControl('', Validators.required),
        });
    

    onSave() {
        if (this.taskForm.valid) {
            console.log('Task saved!', this.taskForm.value);
            this.router.navigate(['/tasks']);
        } else {
            console.log('invalid form');
            this.taskForm.markAllAsTouched();
        }
    }

    constructor(private router :Router){}

    onCancel() {
        this.router.navigate(['/tasks']);
    }
}

