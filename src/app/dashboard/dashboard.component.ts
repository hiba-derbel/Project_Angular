import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import dataticket from '../data/dataticket.json';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    totalTasks: number = 0;
    todoCount: number = 0;
    inProgressCount: number = 0;
    doneCount: number = 0;

    highPriorityCount: number = 0;
    mediumPriorityCount: number = 0;
    lowPriorityCount: number = 0;

    donePercent: number = 0;
    inProgressPercent: number = 0;
    todoPercent: number = 0;

    ngOnInit() {
        this.loadStats();
    }

    loadStats() {
        const tasks: any[] = dataticket as any[];

        this.totalTasks = tasks.length;
        this.todoCount = tasks.filter(t => t.status === 'To do').length;
        this.inProgressCount = tasks.filter(t => t.status === 'In progress').length;
        this.doneCount = tasks.filter(t => t.status === 'Done').length;

        this.highPriorityCount = tasks.filter(t => t.priority === 'high').length;
        this.mediumPriorityCount = tasks.filter(t => t.priority === 'medium').length;
        this.lowPriorityCount = tasks.filter(t => t.priority === 'low').length;

        // Calcul des pourcentages pour le pie chart
        if (this.totalTasks > 0) {
            this.donePercent = (this.doneCount / this.totalTasks) * 100;
            this.inProgressPercent = (this.inProgressCount / this.totalTasks) * 100;
            this.todoPercent = (this.todoCount / this.totalTasks) * 100;
        } else {
            this.donePercent = 0;
            this.inProgressPercent = 0;
            this.todoPercent = 0;
        }
    }
}
