import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  coffee = prefixPath('../../assets/hot-drink.svg');
  twitter = prefixPath('../../assets/twitter.svg');
  github = prefixPath('../../assets/github.svg');
  email = prefixPath('../../assets/paper-plane.svg');
  site = prefixPath('../../assets/world-grid.svg');
}

var prefixPath = (path) => {
  return 'memory' + path;
};

