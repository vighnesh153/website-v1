import {
  NavBarComponent
} from '@vighnesh153-shared/components/nav-bar/nav-bar.component';

export const onClick = (event: Event, component: NavBarComponent): void => {
  if (component.hamburgerItemsInfo.isHidden) {
    return;
  }

  const clickTarget = event.target as Node;
  const navBar = component.currentElement.nativeElement as HTMLElement;
  const hamburgerItems = component.hamburgerItems.nativeElement as HTMLDivElement;

  if (hamburgerItems.contains(clickTarget) === false &&
    navBar.contains(clickTarget) === false) {
    component.hamburgerItemsInfo.isHidden = true;
  }
};
