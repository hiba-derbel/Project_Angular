import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import dataticket from '../../app/data/dataticket.json'

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

    tasks: any = [];
    filteredTasks: any = [];

    searchTerm: string = '';
    selectedStatus: string = 'All';
    selectedPriority: string = 'All';

    selectedticket: any = null;

    pageSize: number = 5;
    currentPage: number = 1;
    totalPages: number = 1;

    pagedTasks: any[] = [];

    constructor(private router: Router) { }

    ngOnInit() {
        this.loaddata();
    }

    loaddata() {
        this.tasks = dataticket;
        this.applyFilters();
    }

    onSearchChange(event: any) {
        const value = typeof event === 'string' ? event : event?.target?.value ?? '';
        this.searchTerm = value;
        this.applyFilters();
    }

    onStatusChange(value: string) {
        this.selectedStatus = value;
        this.applyFilters();
    }

    onPriorityChange(value: string) {
        this.selectedPriority = value;
        this.applyFilters();
    }

    applyFilters() {
        const term = this.searchTerm.toLowerCase();

        this.filteredTasks = this.tasks.filter((task: any) => {
            const matchesSearch =
                !term ||
                (task.title && task.title.toLowerCase().includes(term)) ||
                (task.description && task.description.toLowerCase().includes(term));

            const matchesStatus =
                this.selectedStatus === 'All' ||
                (task.status && task.status.toLowerCase() === this.selectedStatus.toLowerCase());

            const matchesPriority =
                this.selectedPriority === 'All' ||
                (task.priority && task.priority.toLowerCase() === this.selectedPriority.toLowerCase());

            return matchesSearch && matchesStatus && matchesPriority;
        });
        this.totalPages = Math.max(1, Math.ceil(this.filteredTasks.length / this.pageSize));

        if (this.currentPage > this.totalPages) {
    this.currentPage = this.totalPages;
  }
 
  this.updatePagedTasks();
    }

    updatePagedTasks() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.pagedTasks = this.filteredTasks.slice(startIndex, endIndex);
}

goToPrevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePagedTasks();
  }
}

goToNextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updatePagedTasks();
  }
}


}
