import { Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

export const routes: Routes = [
    {path: 'home', component:HomepageComponent},
    {path: '',pathMatch: 'full',component:HomepageComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent},




    {path: '**',component:NotfoundComponent}
    
];
