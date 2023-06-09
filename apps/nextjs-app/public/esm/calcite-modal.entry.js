import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9b24d2d4.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-b360d7fb.js';
import { a as getSlotted, s as slotChangeHasAssignedElement, j as focusFirstTabbable, k as ensureId } from './dom-67db067b.js';
import { c as connectFocusTrap, d as deactivateFocusTrap, a as activateFocusTrap, u as updateFocusTrapElements } from './focusTrapComponent-10e88354.js';
import { a as setUpLoadableComponent, s as setComponentLoaded, c as componentLoaded } from './loadable-eeabeb84.js';
import { c as createObserver } from './observers-38221b96.js';
import { o as onToggleOpenCloseComponent } from './openCloseComponent-77161dfa.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale-6fffb6ae.js';
import { s as setUpMessages, c as connectMessages, d as disconnectMessages, u as updateMessages } from './t9n-802ef166.js';
import './guid-89dde75d.js';
import './resources-2916eda2.js';
import './key-4fdf42f2.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  modal: "modal",
  title: "title",
  header: "header",
  footer: "footer",
  scrim: "scrim",
  back: "back",
  close: "close",
  secondary: "secondary",
  primary: "primary",
  overflowHidden: "overflow-hidden",
  container: "container",
  containerOpen: "container--open",
  content: "content",
  contentNoFooter: "content--no-footer",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  slottedInShell: "slotted-in-shell",
  // these classes help apply the animation in phases to only set transform on open/close
  // this helps avoid a positioning issue for any floating-ui-owning children
  openingIdle: "modal--opening-idle",
  openingActive: "modal--opening-active",
  closingIdle: "modal--closing-idle",
  closingActive: "modal--closing-active"
};
const ICONS = {
  close: "x"
};
const SLOTS = {
  content: "content",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  back: "back",
  secondary: "secondary",
  primary: "primary"
};

const modalCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:700;display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:700;display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-modal-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:800;float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([open]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:400;display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-ui-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:400;display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:400;margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width=s][docked]) .container{align-items:flex-end}}:host([width=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width=m][docked]) .container{align-items:flex-end}}:host([width=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([open][fullscreen]) .header,:host([open][fullscreen]) .footer,:host([open][fullscreen]) .content-top,:host([open][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-ui-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-ui-danger)}:host([kind=info]) .modal{border-color:var(--calcite-ui-info)}:host([kind=success]) .modal{border-color:var(--calcite-ui-success)}:host([kind=warning]) .modal{border-color:var(--calcite-ui-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}";

let Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteModalBeforeClose = createEvent(this, "calciteModalBeforeClose", 6);
    this.calciteModalClose = createEvent(this, "calciteModalClose", 6);
    this.calciteModalBeforeOpen = createEvent(this, "calciteModalBeforeOpen", 6);
    this.calciteModalOpen = createEvent(this, "calciteModalOpen", 6);
    this.mutationObserver = createObserver("mutation", () => {
      this.updateFooterVisibility();
    });
    this.cssVarObserver = createObserver("mutation", () => {
      this.updateSizeCssVars();
    });
    this.openTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      this.focusTrapEl = el;
      connectFocusTrap(this);
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteModalOpen", this.openEnd);
    };
    this.handleOutsideClose = () => {
      if (this.outsideCloseDisabled) {
        return;
      }
      this.close();
    };
    /** Close the modal, first running the `beforeClose` method */
    this.close = () => {
      return this.beforeClose(this.el).then(() => {
        this.open = false;
        this.isOpen = false;
        this.removeOverflowHiddenClass();
      });
    };
    this.updateFooterVisibility = () => {
      this.hasFooter = !!getSlotted(this.el, [SLOTS.back, SLOTS.primary, SLOTS.secondary]);
    };
    this.updateSizeCssVars = () => {
      this.cssWidth = getComputedStyle(this.el).getPropertyValue("--calcite-modal-width");
      this.cssHeight = getComputedStyle(this.el).getPropertyValue("--calcite-modal-height");
    };
    this.contentTopSlotChangeHandler = (event) => {
      this.hasContentTop = slotChangeHasAssignedElement(event);
    };
    this.contentBottomSlotChangeHandler = (event) => {
      this.hasContentBottom = slotChangeHasAssignedElement(event);
    };
    this.open = false;
    this.beforeClose = () => Promise.resolve();
    this.closeButtonDisabled = false;
    this.focusTrapDisabled = false;
    this.outsideCloseDisabled = false;
    this.docked = undefined;
    this.escapeDisabled = false;
    this.scale = "m";
    this.width = "m";
    this.fullscreen = undefined;
    this.kind = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.slottedInShell = undefined;
    this.cssWidth = undefined;
    this.cssHeight = undefined;
    this.hasFooter = true;
    this.hasContentTop = false;
    this.hasContentBottom = false;
    this.isOpen = false;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  handlefocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? deactivateFocusTrap(this) : activateFocusTrap(this);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    await setUpMessages(this);
    setUpLoadableComponent(this);
    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.open) {
      onToggleOpenCloseComponent(this);
      requestAnimationFrame(() => this.openModal());
    }
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  connectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    (_b = this.cssVarObserver) === null || _b === void 0 ? void 0 : _b.observe(this.el, { attributeFilter: ["style"] });
    this.updateSizeCssVars();
    this.updateFooterVisibility();
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
  }
  disconnectedCallback() {
    var _a, _b;
    this.removeOverflowHiddenClass();
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.cssVarObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    disconnectConditionalSlotComponent(this);
    deactivateFocusTrap(this);
    disconnectLocalized(this);
    disconnectMessages(this);
    this.slottedInShell = false;
  }
  render() {
    return (h(Host, { "aria-describedby": this.contentId, "aria-labelledby": this.titleId, "aria-modal": "true", role: "dialog" }, h("div", { class: {
        [CSS.container]: true,
        [CSS.containerOpen]: this.isOpen,
        [CSS.slottedInShell]: this.slottedInShell
      } }, h("calcite-scrim", { class: CSS.scrim, onClick: this.handleOutsideClose }), this.renderStyle(), h("div", { class: {
        [CSS.modal]: true
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, h("div", { class: CSS.header }, this.renderCloseButton(), h("header", { class: CSS.title }, h("slot", { name: CSS.header }))), this.renderContentTop(), h("div", { class: {
        [CSS.content]: true,
        [CSS.contentNoFooter]: !this.hasFooter
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.modalContent = el) }, h("slot", { name: SLOTS.content })), this.renderContentBottom(), this.renderFooter()))));
  }
  renderFooter() {
    return this.hasFooter ? (h("div", { class: CSS.footer, key: "footer" }, h("span", { class: CSS.back }, h("slot", { name: SLOTS.back })), h("span", { class: CSS.secondary }, h("slot", { name: SLOTS.secondary })), h("span", { class: CSS.primary }, h("slot", { name: SLOTS.primary })))) : null;
  }
  renderContentTop() {
    return (h("div", { class: CSS.contentTop, hidden: !this.hasContentTop }, h("slot", { name: SLOTS.contentTop, onSlotchange: this.contentTopSlotChangeHandler })));
  }
  renderContentBottom() {
    return (h("div", { class: CSS.contentBottom, hidden: !this.hasContentBottom }, h("slot", { name: SLOTS.contentBottom, onSlotchange: this.contentBottomSlotChangeHandler })));
  }
  renderCloseButton() {
    return !this.closeButtonDisabled ? (h("button", { "aria-label": this.messages.close, class: CSS.close, key: "button", onClick: this.close, title: this.messages.close,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButtonEl = el) }, h("calcite-icon", { icon: ICONS.close, scale: this.scale === "s" ? "s" : this.scale === "m" ? "m" : this.scale === "l" ? "l" : null }))) : null;
  }
  renderStyle() {
    if (!this.fullscreen && (this.cssWidth || this.cssHeight)) {
      return (h("style", null, `.${CSS.container} {
              ${this.docked && this.cssWidth ? `align-items: center !important;` : ""}
            }
            .${CSS.modal} {
              block-size: ${this.cssHeight ? this.cssHeight : "auto"} !important;
              ${this.cssWidth ? `inline-size: ${this.cssWidth} !important;` : ""}
              ${this.cssWidth ? `max-inline-size: ${this.cssWidth} !important;` : ""}
              ${this.docked ? `border-radius: var(--calcite-border-radius) !important;` : ""}
            }
            @media screen and (max-width: ${this.cssWidth}) {
              .${CSS.container} {
                ${this.docked ? `align-items: flex-end !important;` : ""}
              }
              .${CSS.modal} {
                max-block-size: 100% !important;
                inline-size: 100% !important;
                max-inline-size: 100% !important;
                min-inline-size: 100% !important;
                margin: 0 !important;
                ${!this.docked ? `block-size: 100% !important;` : ""}
                ${!this.docked ? `border-radius: 0 !important;` : ""}
                ${this.docked
        ? `border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;`
        : ""}
              }
            }
          `));
    }
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(event) {
    if (this.open && !this.escapeDisabled && event.key === "Escape" && !event.defaultPrevented) {
      this.close();
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   */
  async setFocus() {
    await componentLoaded(this);
    focusFirstTabbable(this.focusTrapEl);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    updateFocusTrapElements(this);
  }
  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  async scrollContent(top = 0, left = 0) {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      }
      else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }
  onBeforeOpen() {
    this.transitionEl.classList.add(CSS.openingActive);
    this.calciteModalBeforeOpen.emit();
  }
  onOpen() {
    this.transitionEl.classList.remove(CSS.openingIdle, CSS.openingActive);
    this.calciteModalOpen.emit();
    activateFocusTrap(this);
  }
  onBeforeClose() {
    this.transitionEl.classList.add(CSS.closingActive);
    this.calciteModalBeforeClose.emit();
  }
  onClose() {
    this.transitionEl.classList.remove(CSS.closingIdle, CSS.closingActive);
    this.calciteModalClose.emit();
    deactivateFocusTrap(this);
  }
  async toggleModal(value) {
    var _a, _b;
    onToggleOpenCloseComponent(this);
    if (value) {
      (_a = this.transitionEl) === null || _a === void 0 ? void 0 : _a.classList.add(CSS.openingIdle);
      this.openModal();
    }
    else {
      (_b = this.transitionEl) === null || _b === void 0 ? void 0 : _b.classList.add(CSS.closingIdle);
      this.close();
    }
  }
  /** Open the modal */
  openModal() {
    this.el.addEventListener("calciteModalOpen", this.openEnd);
    this.open = true;
    this.isOpen = true;
    const titleEl = getSlotted(this.el, SLOTS.header);
    const contentEl = getSlotted(this.el, SLOTS.content);
    this.titleId = ensureId(titleEl);
    this.contentId = ensureId(contentEl);
    if (!this.slottedInShell) {
      document.documentElement.classList.add(CSS.overflowHidden);
    }
  }
  removeOverflowHiddenClass() {
    document.documentElement.classList.remove(CSS.overflowHidden);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "focusTrapDisabled": ["handlefocusTrapDisabled"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"],
    "open": ["toggleModal"]
  }; }
};
Modal.style = modalCss;

export { Modal as calcite_modal };

//# sourceMappingURL=calcite-modal.entry.js.map