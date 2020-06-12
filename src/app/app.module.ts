import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { VoteComponent } from './vote/vote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDeleteComponent } from './quote-delete/quote-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    VoteComponent,
    QuotesComponent,
    QuoteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
