import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneBookComponent } from './phonebook/phonebook.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    { path: 'dashboard', component: DashboardComponent, data: { permission: 'Pages.Tenant.Dashboard' } },
                    { path: 'phonebook', component: PhoneBookComponent, data: { permission: 'Pages.Tenant.PhoneBook' } },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
