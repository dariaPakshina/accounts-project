import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, AccountComponent, NewAccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
