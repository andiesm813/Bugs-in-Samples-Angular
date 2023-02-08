import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonStylesComponent } from './button-styles/button-styles.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardsOpacityComponent } from './cards-opacity/cards-opacity.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent } from './dialog/dialog.component';
import { GridInTabLayoutComponent } from './grid-in-tab-layout/grid-in-tab-layout.component';
import { InputsCombosComponent } from './inputs-combos/inputs-combos.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SpaceBetweenComponent } from './space-between/space-between.component';

export const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'buttons', component: ButtonsComponent, data: { text: 'Buttons' } },
  { path: 'button-group', component: ButtonGroupComponent, data: { text: 'Button Group' } },
  { path: 'button-styles', component: ButtonStylesComponent, data: { text: 'Button Styles' } },
  { path: 'card-actions', component: CardActionsComponent, data: { text: 'Card Actions' } },
  { path: 'cards-opacity', component: CardsOpacityComponent, data: { text: 'Cards Opacity' } },
  { path: 'chips', component: ChipsComponent, data: { text: 'Chips' } },
  { path: 'dialog', component: DialogComponent, data: { text: 'Dialog' } },
  { path: 'grid-in-tab-layout', component: GridInTabLayoutComponent, data: { text: 'Grid in Tab Layout' } },
  { path: 'inputs-combos', component: InputsCombosComponent, data: { text: 'Inputs & Combos' } },
  { path: 'navigation-bar', component: NavigationBarComponent, data: { text: 'Navigation Bar' } },
  { path: 'space-between', component: SpaceBetweenComponent, data: { text: 'Space Between' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
