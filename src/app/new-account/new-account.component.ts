import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  standalone: true,
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService], // instantiating service
})
export class NewAccountComponent {
  // instantiating service
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus); //LoggingService class's instance
  }
}
