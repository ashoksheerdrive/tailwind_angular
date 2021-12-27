import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './shared/alerts/alerts.component';
import { BadgesComponent } from './shared/badges/badges.component';
import { ButtonsComponent } from './shared/buttons/buttons.component';
import { CardsComponent } from './shared/cards/cards.component';
import { FormsComponent } from './shared/forms/forms.component';
import { InputsComponent } from './shared/inputs/inputs.component';
import { ListsComponent } from './shared/lists/lists.component';
import { MenusComponent } from './shared/menus/menus.component';
import { TablesComponent } from './shared/tables/tables.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';

const routes: Routes = [
  {
    path:'/buttons',component:ButtonsComponent
  },
  {
    path:'/badges',component:BadgesComponent
  },
  {
    path:'cards',component:CardsComponent
  },
  {
    path:'icons',component:AlertsComponent
  },
  {
    path:'inputs',component:InputsComponent
  },
  {
    path:'lists',component:ListsComponent
  },
  {
    path:'forms',component:FormsComponent
  }
  ,
  {
    path:'tabs',component:TabsComponent
  }
  ,
  {
    path:'tables',component:TablesComponent
  }
  ,
  {
    path:'tooltip',component:TooltipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
