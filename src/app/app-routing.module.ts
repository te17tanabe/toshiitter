import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  //*/
  ///*
  {
    path: '',
    // loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    redirectTo: 'mirukaku',
    pathMatch: 'full'
  },
  //*/
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'article/:tab/:article_id/:title/:text/:id',
    loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'self/:tab/:self_id',
    loadChildren: () => import('./self/self.module').then( m => m.SelfPageModule)
  },
  {
    path: 'edit/:tab',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'mirukaku',
    loadChildren: () => import('./mirukaku/mirukaku.module').then( m => m.MirukakuPageModule)
  },
  {
    path: 'edit2',
    loadChildren: () => import('./edit2/edit2.module').then( m => m.Edit2PageModule)
  },
  {  path: 'name',
    loadChildren: () => import('./name/name.module').then( m => m.NamePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
