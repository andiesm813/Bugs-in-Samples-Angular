import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxDropDownModule, IgxListModule, IgxAvatarModule, IgxCardModule, IgxDialogModule, IgxButtonGroupModule, IgxBadgeModule, IgxChipsModule, IgxInputGroupModule, IgxGridModule, IgxTabsModule, IgxSelectModule, IgxNavbarModule, IgcFormsModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonStylesComponent } from './button-styles/button-styles.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardsOpacityComponent } from './cards-opacity/cards-opacity.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent } from './dialog/dialog.component';
import { GridInTabLayoutComponent } from './grid-in-tab-layout/grid-in-tab-layout.component';
import { InputsCombosComponent } from './inputs-combos/inputs-combos.component';
import { ListComponent } from './list/list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RatingComponent } from './rating/rating.component';
import { SpaceBetweenComponent } from './space-between/space-between.component';
import { TextLinksComponent } from './text-links/text-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    ButtonStylesComponent,
    CardActionsComponent,
    CardsOpacityComponent,
    ChipsComponent,
    DialogComponent,
    GridInTabLayoutComponent,
    InputsCombosComponent,
    ListComponent,
    NavigationBarComponent,
    RatingComponent,
    SpaceBetweenComponent,
    TextLinksComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    IgcFormsModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
