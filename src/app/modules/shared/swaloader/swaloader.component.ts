import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'ivl-swaloader',
  templateUrl: './swaloader.component.html',
  styleUrls: ['./swaloader.component.scss']
})
export class SwaloaderComponent implements OnInit {

  constructor(private messagesService : MessagesService) { 
    this.currentLoadingMessageIndex = 0
    this.loadingMessages = []
  }

  private loadingMessages: Array<string>
  private currentLoadingMessageIndex : number

  @Input()loading: any
  ngOnInit() {
    this.displayLoadingMessages()
    
  }

  private async loadLoadingMessages() {
    this.loadingMessages = await this.messagesService.retrieveLoadingMessages()
  }

  private async displayLoadingMessages() {
    await this.loadLoadingMessages()
    this.cycleHurryUpMessages(this.currentLoadingMessageIndex, this.loadingMessages)
  }

  private cycleHurryUpMessages(currentLoadingMessageIndex: number, loadingMessages: Array<string>) {
    this.currentLoadingMessageIndex = currentLoadingMessageIndex
    const time = 3500

    if (currentLoadingMessageIndex < loadingMessages.length - 1)
      setTimeout(() => this.cycleHurryUpMessages(++currentLoadingMessageIndex, loadingMessages), time);
  }

}
