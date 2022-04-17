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

const routes : Routes=[
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'pizzas', component: PizzasComponent},
  {path: 'promociones', component: PromocionesComponent},
  {path: 'adicionales', component: AdicionalesComponent},
  {path: 'orden', component: OrdenComponent},
  {path: 'carrito', component: CarritoComponent}
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
    SmallCartComponent
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
