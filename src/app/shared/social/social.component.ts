import {Component,Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent implements OnInit {

  @Input() links;

  ngOnInit() {
  }

}
