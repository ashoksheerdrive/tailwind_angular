import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ButtonsComponent } from './shared/buttons/buttons.component';
import { BadgesComponent } from './shared/badges/badges.component';
import { AlertsComponent } from './shared/alerts/alerts.component';
import { CardsComponent } from './shared/cards/cards.component';
import { InputsComponent } from './shared/inputs/inputs.component';
import { ListsComponent } from './shared/lists/lists.component';
import { MenusComponent } from './shared/menus/menus.component';
import { FormsComponent } from './shared/forms/forms.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TablesComponent } from './shared/tables/tables.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    BadgesComponent,
    AlertsComponent,
    CardsComponent,
    InputsComponent,
    ListsComponent,
    MenusComponent,
    FormsComponent,
    TabsComponent,
    TablesComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
