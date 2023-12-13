import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeapiComponent } from './fakeapi/fakeapi.component';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { CoingeckoComponent } from './coingecko/coingecko.component';

const appRoutes: Routes = [
  { path: 'fakeapi', component: FakeapiComponent },
  { path: 'pokeapi', component: PokeapiComponent},
  { path: 'coingecko', component: CoingeckoComponent},
  // Adicione outras rotas conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
