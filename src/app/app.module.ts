import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { DailyTasksListComponent } from './components/daily-tasks-list/daily-tasks-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { MessageService } from './services/message.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskService } from './services/tasks.service';

const JWT_Module_Options: JwtModuleOptions = {
  config: {},
};

@NgModule({
  declarations: [
    AppComponent,LoginComponent,SignupComponent, HomeComponent,
    RightPanelComponent, LeftPanelComponent, DailyTasksListComponent,
    TaskCardComponent, NavbarComponent,
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule,FormsModule,HttpClientModule,
    MatNativeDateModule, MaterialExampleModule, ReactiveFormsModule,
    AppRoutingModule, MatCardModule, JwtModule.forRoot(JWT_Module_Options),
  ],
  providers: [AuthService, AuthenticatedGuard, MessageService,
     TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
