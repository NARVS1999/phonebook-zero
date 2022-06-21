import {NgModule} from '@angular/core';
import { MainModule } from '../main.module';
//import {AppSharedModule} from '@app/shared/app-shared.module';
import {PhoneBookRoutingModule} from './phonebook-routing.module';
import {PhoneBookComponent} from './phonebook.component';

@NgModule({
    declarations: [PhoneBookComponent],
    imports: [MainModule, PhoneBookRoutingModule]
})
export class PhoneBookModule {}
