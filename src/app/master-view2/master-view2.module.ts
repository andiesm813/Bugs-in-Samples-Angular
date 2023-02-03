import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView2RoutingModule } from './master-view2-routing.module';
import { MasterView2Component } from './master-view2.component';
import { ResizingIssueComponent } from './resizing-issue/resizing-issue.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxBadgeModule, IgxListModule, IgxAvatarModule, IgxCalendarModule, IgxToggleModule, IgxDropDownModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MasterView2Component,
    ResizingIssueComponent
  ],
  imports: [
    CommonModule,
    MasterView2RoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxBadgeModule,
    IgxListModule,
    IgxAvatarModule,
    IgxCalendarModule,
    FormsModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterView2Module {
}
