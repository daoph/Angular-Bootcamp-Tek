import { RouterModule, Routes } from '@angular/router';
import { About, Home, News, MySPA } from './all.component';


export const routes: Routes = [
    {path: ' ', component: Home },
    {path: 'news', component: News },
    {path: 'about', component: About }
];

export const routing = RouterModule.forRoot(routes);