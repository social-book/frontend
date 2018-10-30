import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { ProfileComponent } from './profile/profile.component';
import { FindpeopleComponent } from './findpeople/findpeople.component';
import { AddimageComponent } from './addimage/addimage.component';
import {MaintainancemodeComponent} from './maintainancemode/maintainancemode.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent }, // todo check consistency
    { path: 'profile', component: ProfileComponent }, // todo check consistency
    { path: 'find', component: FindpeopleComponent }, // todo check consistency
    { path: 'addalbum', component: AddimageComponent }, // todo check consistency
    { path: 'fail', component: MaintainancemodeComponent }, // todo check consistency

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
