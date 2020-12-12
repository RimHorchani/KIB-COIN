import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  },
  {
    path: 'drink',
    loadChildren: () => import('./drink/drink.module').then( m => m.DrinkPageModule)
  },
  {
    path: 'dessert',
    loadChildren: () => import('./dessert/dessert.module').then( m => m.DessertPageModule)
  },
  {
    path: 'plat',
    loadChildren: () => import('./plat/plat.module').then( m => m.PlatPageModule)
  },
  {
    path: 'break',
    loadChildren: () => import('./break/break.module').then( m => m.BreakPageModule)
  },
  {
    path: 'entre',
    loadChildren: () => import('./entre/entre.module').then( m => m.EntrePageModule)
  },
  {
    path: 'sand',
    loadChildren: () => import('./sand/sand.module').then( m => m.SandPageModule)
  },
  

  
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'cart1-modal',
    loadChildren: () => import('./pages/cart1-modal/cart1-modal.module').then( m => m.Cart1ModalPageModule)
  },
  {
    path: 'cart2-modal',
    loadChildren: () => import('./pages/cart2-modal/cart2-modal.module').then( m => m.Cart2ModalPageModule)
  },
  {
    path: 'cart3-modal',
    loadChildren: () => import('./pages/cart3-modal/cart3-modal.module').then( m => m.Cart3ModalPageModule)
  },
  {
    path: 'cart4-modal',
    loadChildren: () => import('./pages/cart4-modal/cart4-modal.module').then( m => m.Cart4ModalPageModule)
  },
  {
    path: 'cart5-modal',
    loadChildren: () => import('./pages/cart5-modal/cart5-modal.module').then( m => m.Cart5ModalPageModule)
  },
  {
    path: 'cart6-modal',
    loadChildren: () => import('./pages/cart6-modal/cart6-modal.module').then( m => m.Cart6ModalPageModule)
  },
  
 
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'fid',
    loadChildren: () => import('./fid/fid.module').then( m => m.FidPageModule)
  },
  {
    path: 'fidback',
    loadChildren: () => import('./fidback/fidback.module').then( m => m.FidbackPageModule)
  },
  
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'offre',
    loadChildren: () => import('./offre/offre.module').then( m => m.OffrePageModule)
  },
  {
    path: 'changep',
    loadChildren: () => import('./changep/changep.module').then( m => m.ChangepPageModule)
  },
  
  {
    path: 'pass',
    loadChildren: () => import('./pass/pass.module').then( m => m.PassPageModule)
  },
  {
    path: 'offres',
    loadChildren: () => import('./offres/offres.module').then( m => m.OffresPageModule)
  },
  
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
