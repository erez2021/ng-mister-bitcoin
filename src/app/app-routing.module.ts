import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactDetailsComponent} from '../app/pages/contact-details/contact-details.component'
import {ContactResolverService} from '../app/services/contact-resolver.service'
import { HomePageComponent } from '../app/pages/home-page/home-page.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import {ContactComponent} from '../app/pages/contact/contact.component'
import {EditContactComponent} from '../app/pages/edit-contact/edit-contact.component'

const routes: Routes = [
  { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit/:id', component: EditContactComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit', component: EditContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomePageComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
