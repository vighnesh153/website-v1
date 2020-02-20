import {
  NavBarComponent
} from '@vighnesh153-shared/components/nav-bar/nav-bar.component';

const setBorderBottomGradient = (component: NavBarComponent): void => {
  const shades = component.theme.shades.color2.toDark.reverse();
  const gap = 1;
  component.navBarInfo.borderBottomGradient =
    `0 ${gap}px 5px ${shades[0]}, ` +
    `0 ${gap * 2}px 5px ${shades[1]}, ` +
    `0 ${gap * 3}px 5px ${shades[2]}, ` +
    `0 ${gap * 4}px 5px ${shades[3]}, ` +
    `0 ${gap * 5}px 5px ${shades[4]}`;
};

export const onScroll = (event: Event, component: NavBarComponent): void => {
  if (component.hamburgerItemsInfo.isHidden === false) {
    return;
  }

  const navElement = component.currentElement.nativeElement as HTMLElement;

  if (window.pageYOffset < component.previousScrollValue) {
    // Show nav-bar
    component.navBarInfo.top = '0';
    component.navBarInfo.displayNavBar = true;
    setBorderBottomGradient(component);
  } else if (
    navElement.offsetHeight < window.pageYOffset &&
    component.navBarInfo.displayNavBar
  ) {
    // Hide nav-bar
    component.navBarInfo.top = `-${(navElement.offsetHeight)}px`;
    component.navBarInfo.displayNavBar = false;
    component.navBarInfo.borderBottomGradient = '';
  }

  // If the scroll Y is 0, no need to show shadow for the NavBar
  if (window.pageYOffset === 0) {
    component.navBarInfo.borderBottomGradient = '';
  }
  component.previousScrollValue = window.pageYOffset;
};


export const onClick = (event: Event, component: NavBarComponent): void => {
  if (component.hamburgerItemsInfo.isHidden) {
    return;
  }

  const navBar = component.currentElement.nativeElement as HTMLElement;
  const clickTarget = event.target as Node;
  const hamburgerItems = component.hamburgerItems.nativeElement as HTMLUListElement;
  if (hamburgerItems.contains(clickTarget) === false &&
    navBar.contains(clickTarget) === false) {
    component.hamburgerItemsInfo.isHidden = true;
  }
};
