import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
    selector:"magazine",
    styles:["input.ng-touched.ng-invalid {background: red}",
            "input:required {box-shadow: none;}"],
    template:`

        <form [formGroup]="magazineForm" (ngSubmit)="submitForm()">
            Full name:<br/>
            <span style = "color: red" [hidden] = "magazineForm.controls.fullName.valid ||
                magazineForm.controls.fullName.untouched">
            Please enter your name<br/></span>
            <input formControlName="fullName" type="text" /><br/>
            // Valid: {{magazineForm.controls.fullName.valid}}<br/>
            // Touched: {{magazineForm.controls.fullName.touched}}<br/>
            // Dirty: {{magazineForm.controls.fullName.dirty}}<br/>
            Magazine edition:<br/>
            <select formControlName="selectedEdition">
                <option *ngFor="let e of editions"
                    [ngValue]="e">{{e.editionName}}</option></select><br/>
            Shipping option:
                <input type="radio" formControlName="selectedShipping"
                    value="GROUND"/>Ground
                <input type="radio" formControlName="selectedShipping"
                    value="AIR"/>Air <br/>
            <input formControlName="acceptPolicy" type="checkbox" />
                I accept the terms and conditions<br/>
            <br/>
            Price: {{magazineForm.value.selectedEdition.price}}
            <br/>

            <button [disabled]="magazineForm.invalid" type="submit">Purchase</button>
        </form>

    ` // THIS TICK NEEDS TO BE HERE
})

    // <form #theForm = "ngForm">
    // Full name:<br/>
    // <span style = "color: red" [hidden] = "theModel.valid || theModel.untouched">
    // Please enter your name<br/></span>
    // <input name = "fullName" type = "text" [(ngModel)] = "fullName" required #theElement #theModel = "ngModel"/><br/>
    // Valid: {{theModel.valid}}<br/>
    // Touched: {{theModel.touched}}<br/>
    // Dirty: {{theModel.dirty}}<br/>
    // Class names: {{theElement.className}}<br/>
    // Magazine edition: <br/>
    // <select name = "selectedEdition" [(ngModel)]="selectedEdition">
    // <option *ngFor = "let e of editions"
    // [ngValue] = "e">{{e.editionName}}</option>
    // </select><br/>
    // Shipping option:
    // <input type = "radio" name="selectedShipping" [(ngModel)] = "selectedShipping" value = "GROUND"/>Ground
    // <input type = "radio" name="selectedShipping" [(ngModel)] = "selectedShipping" value = "AIR"/>Air <br/>
    // <input name = "acceptPolicy" type = "checkbox" [(ngModel)] = "acceptPolicy"/>
    // I accept the terms and conditions<br/>
    // <br/>
    // Price: {{selectedEdition.price}}
    // <br/>
    // <button [disabled] = "!theForm.form.valid" (click)="submitForm()">Purchase</button>
    // </form>



export class Magazine {

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

submitForm() {
    let requestData = {
        customerName: this.magazineForm.value.fullName,
        productCode: this.magazineForm.value.selectedEdition.editionCode,
        acceptPolicy: this.magazineForm.value.acceptPolicy,
        shipMode: this.magazineForm.value.selectedShipping
    }
    alert(JSON.stringify(requestData))
}

    // fullName = new FormControl('');
    editions = [
{editionCode: 1, editionName: "US", price: "10.99 USD"},
{editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
{editionCode: 3, editionName: "International", price: "23.99 USD"}
    ]
    // selectedEdition = new FormControl (this.editions[0]); // Choose US by default
    // selectedShipping = new FormControl('');
    // acceptPolicy = new FormControl (false);

    magazineForm: FormGroup;

    createForm(){
        this.magazineForm = this.formBuilder.group({
            fullName: ['', Validators.required ],
            selectedEdition: this.editions[0],
            selectedShipping: '',
            acceptPolicy: false
        });
    }
}