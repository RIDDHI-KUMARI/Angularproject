import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase/purchase.component';
import { InventoryComponent } from './inventory/inventory.component';
import { EngineeringProductionComponent } from './engineering-production/engineering-production.component';
import { SupplychainManagementComponent } from './supplychain-management/supplychain-management.component';
import { CustomerrelationshipmanagementComponent } from './customerrelationshipmanagement/customerrelationshipmanagement.component';
import { SalesMarketingComponent } from './sales-marketing/sales-marketing.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { FinanceAccountingComponent } from './finance-accounting/finance-accounting.component';



@NgModule({
  declarations: [
    PurchaseComponent,
    InventoryComponent,
    EngineeringProductionComponent,
    SupplychainManagementComponent,
    CustomerrelationshipmanagementComponent,
    SalesMarketingComponent,
    HumanResourceComponent,
    FinanceAccountingComponent
  ],
  exports:[
    PurchaseComponent,
    InventoryComponent,
    EngineeringProductionComponent,
    SupplychainManagementComponent,
    CustomerrelationshipmanagementComponent,
    SalesMarketingComponent,
    HumanResourceComponent,
    FinanceAccountingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
