import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxDropDownModule, IgxListModule, IgxAvatarModule, IgxCardModule, IgxDialogModule, IgxButtonGroupModule, IgxBadgeModule, IgxChipsModule, IgxInputGroupModule, IgxGridModule, IgxTabsModule, IgxSelectModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    MasterViewComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    ButtonStylesComponent,
    CardActionsComponent,
    CardsOpacityComponent,
    ChipsComponent,
    DialogComponent,
    GridInTabLayoutComponent,
    InputsCombosComponent,
    NavigationBarComponent,
    SpaceBetweenComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxListModule,
    IgxAvatarModule,
    IgxCardModule,
    IgxDialogModule,
    FormsModule,
    IgxButtonGroupModule,
    IgxBadgeModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxGridModule,
    IgxTabsModule,
    IgxSelectModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
