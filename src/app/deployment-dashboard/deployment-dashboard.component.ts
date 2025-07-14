import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-deployment-dashboard',
  standalone: true,
  templateUrl: './deployment-dashboard.component.html',
  imports: [MatToolbarModule, MatButtonModule]
})
export class DeploymentDashboardComponent {}
