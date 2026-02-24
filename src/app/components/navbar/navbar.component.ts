import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(private router: Router) { }

    onLogout() {
        // Basic logout logic
        console.log('Logging out...');
        this.router.navigate(['/login']);
    }
}
