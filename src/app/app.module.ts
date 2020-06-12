import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { VoteComponent } from './vote/vote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDeleteComponent } from './quote-delete/quote-delete.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    VoteComponent,
    QuotesComponent,
    QuoteDeleteComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
