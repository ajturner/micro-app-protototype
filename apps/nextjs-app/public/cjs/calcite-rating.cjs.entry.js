'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const form = require('./form-8a432189.js');
const guid = require('./guid-504c591e.js');
const interactive = require('./interactive-aacdfedd.js');
const label = require('./label-30c64fdd.js');
const loadable = require('./loadable-0d54a318.js');
const locale = require('./locale-dbbec1a1.js');
const t9n = require('./t9n-30d5587d.js');
require('./dom-5643dc8d.js');
require('./resources-0be54a9c.js');
require('./key-75cf5e40.js');
require('./observers-6da0c0fa.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const StarIcon = ({ full, scale, partial }) => (index.h("calcite-icon", { ...{
    class: partial ? undefined : "icon",
    icon: full ? "star-f" : "star",
    scale
  } }));

const ratingCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}:host([read-only]){pointer-events:none}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let Rating = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteRatingChange = index.createEvent(this, "calciteRatingChange", 6);
    this.handleRatingPointerOver = () => {
      this.isKeyboardInteraction = false;
    };
    this.handleRatingPointerOut = () => {
      this.isKeyboardInteraction = true;
      this.hoverValue = null;
      this.focusValue = null;
      this.hasFocus = false;
    };
    this.handleRatingFocusIn = () => {
      const selectedInput = this.value > 0 ? this.value - 1 : 0;
      const focusInput = this.inputRefs[selectedInput];
      const focusValue = Number(focusInput.value);
      focusInput.select();
      this.focusValue = focusValue;
      this.hoverValue = focusValue;
      this.hasFocus = true;
    };
    this.handleRatingFocusLeave = () => {
      this.focusValue = null;
      this.hoverValue = null;
      this.hasFocus = false;
    };
    this.handleHostKeyDown = () => {
      this.isKeyboardInteraction = true;
    };
    this.handleInputKeyDown = (event) => {
      const target = event.currentTarget;
      const inputVal = Number(target.value);
      const key = event.key;
      const numberKey = key == " " ? undefined : Number(key);
      this.emit = true;
      if (isNaN(numberKey)) {
        switch (key) {
          case "Enter":
          case " ":
            this.value = !this.required && this.value === inputVal ? 0 : inputVal;
            break;
          case "ArrowLeft":
            this.value = inputVal - 1;
            break;
          case "ArrowRight":
            this.value = inputVal + 1;
            break;
          case "Tab":
            if (this.hasFocus) {
              this.hasFocus = false;
              this.focusValue = null;
              this.hoverValue = null;
            }
        }
      }
      else {
        if (!this.required && numberKey >= 0 && numberKey <= this.max) {
          this.value = numberKey;
        }
        else if (this.required && numberKey > 0 && numberKey <= this.max) {
          this.value = numberKey;
        }
      }
    };
    this.handleInputChange = (event) => {
      if (this.isKeyboardInteraction === true) {
        const inputVal = Number(event.target["value"]);
        this.focusValue = inputVal;
        this.hoverValue = inputVal;
        this.value = inputVal;
      }
    };
    this.handleLabelPointerOver = (event) => {
      const target = event.currentTarget;
      const newPointerValue = Number(target.firstChild["value"] || 0);
      this.hoverValue = newPointerValue;
      this.focusValue = null;
    };
    this.handleLabelPointerDown = (event) => {
      const target = event.currentTarget;
      const inputVal = Number(target.firstChild["value"] || 0);
      this.focusValue = null;
      this.hoverValue = null;
      this.emit = true;
      this.value = !this.required && this.value === inputVal ? 0 : inputVal;
    };
    this.emit = false;
    this.guid = `calcite-ratings-${guid.guid()}`;
    this.isKeyboardInteraction = true;
    this.max = 5;
    this.average = undefined;
    this.count = undefined;
    this.disabled = false;
    this.form = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.name = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.showChip = false;
    this.value = 0;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.hoverValue = undefined;
    this.focusValue = undefined;
    this.hasFocus = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleValueUpdate(newValue) {
    this.hoverValue = newValue;
    this.focusValue = newValue;
    if (this.emit) {
      this.calciteRatingChange.emit();
    }
    this.emit = false;
  }
  effectiveLocaleChange() {
    t9n.updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    locale.connectLocalized(this);
    t9n.connectMessages(this);
    label.connectLabel(this);
    form.connectForm(this);
  }
  async componentWillLoad() {
    await t9n.setUpMessages(this);
    loadable.setUpLoadableComponent(this);
    this.inputRefs = Array(this.max);
  }
  componentWillRender() {
    this.starsMap = Array.from({ length: this.max }, (_, i) => {
      const value = i + 1;
      const average = !this.focusValue &&
        !this.hoverValue &&
        this.average &&
        !this.value &&
        value <= this.average;
      const checked = value === this.value;
      const focused = this.isKeyboardInteraction && this.hasFocus && this.focusValue === value;
      const fraction = this.average && this.average + 1 - value;
      const hovered = value <= this.hoverValue;
      const id = `${this.guid}-${value}`;
      const partial = !this.focusValue &&
        !this.hoverValue &&
        !this.value &&
        !hovered &&
        fraction > 0 &&
        fraction < 1;
      const selected = this.value >= value;
      return {
        average,
        checked,
        focused,
        fraction,
        hovered,
        id,
        idx: i,
        partial,
        selected,
        value
      };
    });
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  disconnectedCallback() {
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  render() {
    var _a, _b;
    return (index.h(index.Host, { onBlur: this.handleRatingFocusLeave, onFocus: this.handleRatingFocusIn, onKeyDown: this.handleHostKeyDown, onPointerOut: this.handleRatingPointerOut, onPointerOver: this.handleRatingPointerOver }, index.h("span", { class: "wrapper" }, index.h("fieldset", { class: "fieldset", disabled: this.disabled }, index.h("legend", { class: "visually-hidden" }, this.messages.rating), this.starsMap.map(({ average, checked, focused, fraction, hovered, id, idx, partial, selected, value }) => {
      return (index.h("label", { class: {
          star: true,
          focused,
          selected,
          hovered,
          average,
          partial
        }, htmlFor: id, onPointerDown: this.handleLabelPointerDown, onPointerOver: this.handleLabelPointerOver }, index.h("input", { checked: checked, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: id, name: this.guid, onChange: this.handleInputChange, onKeyDown: this.handleInputKeyDown, type: "radio", value: value,
        // eslint-disable-next-line react/jsx-sort-props
        ref: (el) => {
          this.inputRefs[idx] = el;
          return ((value === 1 || value === this.value) &&
            (this.inputFocusRef = el));
        } }), index.h(StarIcon, { full: selected || average, scale: this.scale }), partial && (index.h("div", { class: "fraction", style: { width: `${fraction * 100}%` } }, index.h(StarIcon, { full: true, partial: true, scale: this.scale }))), index.h("span", { class: "visually-hidden" }, this.messages.stars.replace("${num}", `${value}`))));
    }), (this.count || this.average) && this.showChip ? (index.h("calcite-chip", { scale: this.scale, value: (_a = this.count) === null || _a === void 0 ? void 0 : _a.toString() }, !!this.average && index.h("span", { class: "number--average" }, this.average.toString()), !!this.count && index.h("span", { class: "number--count" }, "(", (_b = this.count) === null || _b === void 0 ? void 0 : _b.toString(), ")"))) : null), index.h(form.HiddenFormInputSlot, { component: this }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await loadable.componentLoaded(this);
    (_a = this.inputFocusRef) === null || _a === void 0 ? void 0 : _a.focus();
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "value": ["handleValueUpdate"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Rating.style = ratingCss;

exports.calcite_rating = Rating;

//# sourceMappingURL=calcite-rating.cjs.entry.js.map