import { FancyCheckbox } from './../fancyCheckbox/fancyCheckbox.component';
import { FancyText } from './../fancyText/fancyText.component';
import { Component, Input } from '@angular/core';


@Component({
    selector: "subscription-form",
    // template: `
    // <h3>Please subscribe to our newsletter</h3>
    // <p>E-mail address</p>
    // <p><fancy-text></fancy-text></p>
    // <p>Areas of interest</p>
    // <p><fancy-checkbox label = "Volleyball"></fancy-checkbox></p>
    // <p><fancy-checkbox label = "Football"></fancy-checkbox></p>
    // <p><fancy-checkbox label = "Tennis"></fancy-checkbox></p>
    // `
    templateUrl:"./subscriptionForm.component.html"
})

export class SubscriptionForm{
    @Input() interests:[string]
}