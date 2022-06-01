import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
//Componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PizzaCardComponent } from './pizzas/pizza-card/pizza-card.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { AdicionalesComponent } from './adicionales/adicionales.component';
import { AdicionalCardComponent } from './adicionales/adicional-card/adicional-card.component';
import { PromocionCardComponent } from './promociones/promocion-card/promocion-card.component';
import { CarritoComponent } from './carrito/carrito.component';
import { OrdenComponent } from './orden/orden.component';
import { BigCartComponent } from './carrito/big-cart/big-cart.component';
import { SmallCartComponent } from './carrito/small-cart/small-cart.component';
import { ArmaPizzaComponent } from './arma-pizza/arma-pizza.component';
import { CrudPizzaComponent } from './local/crud-pizza/crud-pizza.component';
import { CrudAdicionalesComponent } from './local/crud-adicionales/crud-adicionales.component';
import { CrudUsuariosComponent } from './local/crud-usuarios/crud-usuarios.component';
import { CrudPromocionesComponent } from './local/crud-promociones/crud-promociones.component';
import { PizzaFormComponent } from './local/crud-pizza/pizza-form/pizza-form.component';
import { AdicionalFormComponent } from './local/crud-adicionales/adicional-form/adicional-form.component';
import { PromocionFormComponent } from './local/crud-promociones/promocion-form/promocion-form.component';
import { UsuarioFormComponent } from './local/crud-usuarios/usuario-form/usuario-form.component';
import { EnvioComponent } from './envio/envio.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';

const routes : Routes=[
  {path: '', redirectTo: '/nuestras-pizzas', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'nuestras-pizzas', component: PizzasComponent},
  {path: 'paquetes-promociones', component: PromocionesComponent},
  {path: 'nuestros-adicionales', component: AdicionalesComponent},
  {path: 'orden/:codigo', component: OrdenComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'pizza_magica', component: ArmaPizzaComponent},
  {path: 'pizzas', component: CrudPizzaComponent},
  {path: 'pizza-add', component: PizzaFormComponent},
  {path: 'pizza-edit/:index', component: PizzaFormComponent},
  {path: 'usuarios', component: CrudUsuariosComponent},
  {path: 'user-add', component: UsuarioFormComponent},
  {path: 'user-edit/:index', component: UsuarioFormComponent},
  {path: 'promociones', component: CrudPromocionesComponent},
  {path: 'promocion-add', component: PromocionFormComponent},
  {path: 'promocion-edit/:index', component: PromocionFormComponent},
  {path: 'adicionales', component: CrudAdicionalesComponent},
  {path: 'adicional-add', component: AdicionalFormComponent},
  {path: 'adicional-edit/:index', component: AdicionalFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    PizzasComponent,
    SidenavComponent,
    PizzaCardComponent,
    PromocionesComponent,
    AdicionalesComponent,
    AdicionalCardComponent,
    PromocionCardComponent,
    CarritoComponent,
    OrdenComponent,
    BigCartComponent,
    SmallCartComponent,
    ArmaPizzaComponent,
    CrudPizzaComponent,
    CrudAdicionalesComponent,
    CrudUsuariosComponent,
    CrudPromocionesComponent,
    PizzaFormComponent,
    AdicionalFormComponent,
    PromocionFormComponent,
    UsuarioFormComponent,
    EnvioComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatStepperModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
