import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('svCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }

}
