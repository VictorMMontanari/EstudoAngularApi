import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FakeapiComponent } from './fakeapi/fakeapi.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'fakeapi', component: FakeapiComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
