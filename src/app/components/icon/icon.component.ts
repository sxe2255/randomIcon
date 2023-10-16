import { Input, Component } from '@angular/core';
import { IconName, fas } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconArrayNames {
  definitions: Definitions;
}
interface Definitions {
  fas:{}
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() stringIcon: IconProp = 'at';
  iconArrayNames: IconArrayNames;
  arrayName: string[] = [];
  count: number = 1;

  constructor(library: FaIconLibrary,  ) {
    library.addIconPacks(fas);
    this.iconArrayNames = JSON.parse(JSON.stringify(library));
    this.arrayName = Object.keys(this.iconArrayNames.definitions.fas);
  }

  changeIcone() {
    setTimeout(()=>{
      let newIcon = this.arrayName[Math.floor(Math.random() * this.arrayName.length)];
      let temp = newIcon as IconName;
      this.stringIcon = temp;
      this.count = 1;
    }, this.count * 3000)
    this.count += 1;
  }
}


