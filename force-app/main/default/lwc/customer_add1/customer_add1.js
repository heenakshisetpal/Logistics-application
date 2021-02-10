import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import customer_detail__c from '@salesforce/schema/customer_detail__c';
import Address__c from '@salesforce/schema/customer_detail__c.Address__c';
import City__c from '@salesforce/schema/customer_detail__c.City__c';
import postal_code__c from '@salesforce/schema/customer_detail__c.postal_code__c';
import 	province__c from '@salesforce/schema/customer_detail__c.province__c';
import 	street__c from '@salesforce/schema/customer_detail__c.street__c';
import 	Name__c from '@salesforce/schema/customer_detail__c.Name__c';
import Quantity__c from '@salesforce/schema/customer_detail__c.Quantity__c';
import 	Product__c from '@salesforce/schema/customer_detail__c.Product__c';
import 	email__c from '@salesforce/schema/customer_detail__c.email__c';
export default class Customer_add1 extends LightningElement {
    objectApiName = customer_detail__c;
    fields = [Address__c,City__c,postal_code__c,province__c,street__c,Name__c,Quantity__c,Product__c,email__c];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}