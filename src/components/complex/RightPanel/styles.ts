import {SLIDE_PANEL_DELAY, SLIDE_PANEL_TIME} from "@utils/const";

export const StylesCSSTransition = `
.panel__panel-enter {
  transform: translateX(100%);
}
.panel__panel-enter-active {
  transform: translateX(0);
  transition: transform ${SLIDE_PANEL_TIME}ms ease;
  transition-delay: ${SLIDE_PANEL_DELAY}ms;
}
.panel__panel-exit {
  transform: translateX(0);
}
.panel__panel-exit-active {
  transform: translateX(100%);
  transition: transform ${SLIDE_PANEL_TIME}ms ease;
}
`
