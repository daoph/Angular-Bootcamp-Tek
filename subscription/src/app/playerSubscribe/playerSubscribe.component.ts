import { Component } from '@angular/core';


@Component({
    selector: "player-subscribe",
    template: "<subscription-form [interests]='players'></subscription-form>"
})

export class PlayerSubscribe {
    players = ["Lebron James", "Lionel Messi", "Manny Pacquiao"]
}