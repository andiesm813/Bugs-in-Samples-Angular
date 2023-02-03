import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonStylesComponent } from './button-styles/button-styles.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';
import { SpaceBetweenComponent } from './space-between/space-between.component';
import { CardsOpacityComponent } from './cards-opacity/cards-opacity.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent } from './dialog/dialog.component';
import { GridInTabLayoutComponent } from './grid-in-tab-layout/grid-in-tab-layout.component';
import { InputGroupComponent } from './input-group/input-group.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'buttons', pathMatch: 'full' }, { path: 'buttons', component: ButtonsComponent, data: { text: 'Buttons' } }, { path: 'button-styles', component: ButtonStylesComponent, data: { text: 'Button Styles' } }, { path: 'button-group', component: ButtonGroupComponent, data: { text: 'Button Group' } }, { path: 'floating-action-button', component: FloatingActionButtonComponent, data: { text: 'Floating Action Button' } }, { path: 'space-between', component: SpaceBetweenComponent, data: { text: 'Space Between' } }, { path: 'cards-opacity', component: CardsOpacityComponent, data: { text: 'Cards Opacity' } }, { path: 'card-actions', component: CardActionsComponent, data: { text: 'Card Actions' } }, { path: 'chips', component: ChipsComponent, data: { text: 'Chips' } }, { path: 'dialog', component: DialogComponent, data: { text: 'Dialog' } }, { path: 'grid-in-tab-layout', component: GridInTabLayoutComponent, data: { text: 'Grid in Tab Layout' } }, { path: 'input-group', component: InputGroupComponent, data: { text: 'Input Group' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
