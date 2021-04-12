import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerrelationshipmanagementComponent } from './dashboard/customerrelationshipmanagement/customerrelationshipmanagement.component';
import { EngineeringProductionComponent } from './dashboard/engineering-production/engineering-production.component';
import { FinanceAccountingComponent } from './dashboard/finance-accounting/finance-accounting.component';
import { HumanResourceComponent } from './dashboard/human-resource/human-resource.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { SalesMarketingComponent } from './dashboard/sales-marketing/sales-marketing.component';
import { SupplychainManagementComponent } from './dashboard/supplychain-management/supplychain-management.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path:'dashboard/customerrelationshipmanagement',
  component:CustomerrelationshipmanagementComponent
},
{path:'dashboard/engineering-production',
component:EngineeringProductionComponent
},
{path:'dashboard/finance-accounting',
component:FinanceAccountingComponent
},
{path:'dashboard/human-resource',
component:HumanResourceComponent
},
{path:'dashboard/inventory',
component:InventoryComponent
},
{path:'dashboard/purchase',
component:PurchaseComponent
},
{path:'dashboard/sales-marketing',
component:SalesMarketingComponent
},
{path:'dashboard/supplychain-management',
component:SupplychainManagementComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

                                                           
