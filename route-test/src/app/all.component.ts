import { Component } from '@angular/core';

@Component ({
    selector: 'home-directive',
    template:  `
    <h2>Home</h2>
    <p>This is the home page</p>
    `
})

export class Home { }

@Component ({
    selector: 'about-directive',
    template:  `
    <h2>About</h2>
    <p>About our company</p>
    `
})

export class About { }

@Component ({
    selector: 'news-directive',
    template:  `
    <h2>News</h2>
    <p>Latest news.</p>
    `
})

export class News { }

@Component ({
    selector: 'my-spa',
    template:  `
    <h1>Simple SPA!</h1>
    <a [routerLink] = "['/']">Home</a>
    <a [routerLink] = "['/news']">News</a>
    <a [routerLink] = "['/about']">About</a>

    <div>
    <router-outlet></router-outlet>
    </div>
    `
})

export class MySPA {

}