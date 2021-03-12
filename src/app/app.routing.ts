import { AlgoComponent } from "./algo/algo.component";
import { AlgohomeComponent } from "./algohome/algohome.component";
import { DowhileComponent } from "./dowhile/dowhile.component";
import { ForComponent } from "./for/for.component";
import { HomeComponent } from "./home/home.component";
import { IfComponent } from "./if/if.component";
import { IfelseComponent } from "./ifelse/ifelse.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SwitchComponent } from "./switch/switch.component";
import { WhileComponent } from "./while/while.component";
import { RouterModule, Routes } from "@angular/router";


const arr: Routes=[
  {path: '', component:HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'algohome', component: AlgohomeComponent},
  {path: 'algo', component: AlgoComponent},
  {path:'if', component: IfComponent},
  {path:'ifelse', component: IfelseComponent},
  {path: 'switch', component: SwitchComponent},
  {path: 'for', component: ForComponent},
  {path:'while', component: WhileComponent},
  {path: 'dowhile', component:DowhileComponent},
];


export const arrRouting= RouterModule.forRoot(arr);
