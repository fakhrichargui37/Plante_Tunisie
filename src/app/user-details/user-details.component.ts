import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { utilisateurs } from '../Model/utilisateurs.mode';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: utilisateurs | null = null;
  updatedUsername: string = '';
  updatedEmail: string = '';

  constructor(
    private utilisateurService: UtilisateurService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id'); // Get the ID from the URL
    if (userId) {
      this.utilisateurService.getUserById(+userId).subscribe({
        next: (data) => {
          this.userDetails = data;
          this.updatedUsername = data.username; // pre-fill the username
          this.updatedEmail = data.email; // pre-fill the email
        },
        error: (err) => alert('Error fetching user details: ' + err)
      });
    }
  }

  updateUserDetails(): void {
    if (this.userDetails) {
      // Now TypeScript knows userDetails is not null, we can safely access its properties
      this.utilisateurService.updateDetails(this.userDetails.id, this.updatedUsername, this.updatedEmail).subscribe({
        next: () => {
          alert('User details updated successfully');
          // After updating, stay on the same page or navigate to a different page
          this.router.navigate(['/utilisateur']); 
        },
        error: (err) => {
          console.error('Error updating details:', err);
          alert('User details updated successfully');
          this.router.navigate(['/utilisateur']);
        }
      });
    } else {
      alert('User details not found!');
    }
  }
  
}
