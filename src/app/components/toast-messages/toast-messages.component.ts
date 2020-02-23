import {
  Component,
  OnInit
} from '@angular/core';

import { Subscription } from 'rxjs';

import { environment } from '@vighnesh153-environments/environment';

import { Toast } from '@vighnesh153-shared/models/Toast';
import { ToastMessagesService } from '@vighnesh153-shared/services/toast-messages.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss']
})
export class ToastMessagesComponent implements OnInit {
  messages: {toast: Toast, id: number }[];
  toastMessageSubscription: Subscription;
  toastId: number;
  toastDurationInMs = environment.toastDurationInSeconds * 1000;

  constructor(private toastMessagesService: ToastMessagesService) {
    this.toastId = 0;
    this.messages = [];
    this.toastMessageSubscription =
      this.toastMessagesService.toastMessageSubject
        .subscribe(toast => {
          this.messages.push({ toast, id: this.toastId });

          const currentId = this.toastId;
          setTimeout(() => {
            this.messages = this.messages.filter(t => t.id !== currentId);
          }, this.toastDurationInMs);

          this.toastId++;
        });
  }

  ngOnInit(): void {
  }

}
