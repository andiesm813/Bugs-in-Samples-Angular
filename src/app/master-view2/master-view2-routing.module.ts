import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView2Component } from './master-view2.component';
import { ResizingIssueComponent } from './resizing-issue/resizing-issue.component';

const routes: Routes = [{ path: '', component: MasterView2Component, children: [{ path: '', redirectTo: 'resizing-issue', pathMatch: 'full' }, { path: 'resizing-issue', component: ResizingIssueComponent, data: { text: 'Resizing Issue' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView2RoutingModule {
}
