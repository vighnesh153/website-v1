import { Component, OnInit } from '@angular/core';

import { environment } from '@vighnesh153-environments/environment';

import { ClipboardService } from 'ngx-clipboard';
import { ToastMessagesService } from '@vighnesh153-shared/services/toast-messages.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  email = environment.personal.email;
  linkedInUrl = environment.personal.linkedIn;
  githubInUrl = environment.personal.github.profile;

  constructor(private clipboardService: ClipboardService,
              private toastMessagesService: ToastMessagesService) {}

  ngOnInit(): void {
  }

  copy() {
    this.clipboardService.copyFromContent(this.email);
    this.toastMessagesService
      .broadcast('Copied to clipboard!', 'INFO');
  }

  open(url: string) {
    window.open(url, '_blank', 'noopener');
  }

}
