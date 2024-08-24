import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
  plan: string;
  billing: string;
  status: 'Active' | 'Pending' | 'Inactive';
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {
  users: User[] = [
    { 
      name: 'John Doe', 
      email: 'john@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      role: 'Editor',
      plan: 'Enterprise',
      billing: 'Auto Debit',
      status: 'Active'
    },
    { 
      name: 'Jane Smith', 
      email: 'jane@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      role: 'Author',
      plan: 'Team',
      billing: 'Manual - Credit Card',
      status: 'Pending'
    },
    { 
      name: 'Bob Johnson', 
      email: 'bob@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      role: 'Maintainer',
      plan: 'Company',
      billing: 'Auto Debit',
      status: 'Active'
    },
    { 
      name: 'Alice Brown', 
      email: 'alice@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      role: 'Subscriber',
      plan: 'Basic',
      billing: 'Manual - PayPal',
      status: 'Inactive'
    },
    { 
      name: 'Charlie Wilson', 
      email: 'charlie@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      role: 'Admin',
      plan: 'Enterprise',
      billing: 'Auto Debit',
      status: 'Active'
    }
  ];

  roles: string[] = ['Editor', 'Author', 'Maintainer', 'Subscriber', 'Admin'];
  plans: string[] = ['Basic', 'Team', 'Company', 'Enterprise'];
  statuses: string[] = ['Active', 'Pending', 'Inactive'];
} 