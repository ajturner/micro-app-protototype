import { r as registerInstance, h } from './index-9b24d2d4.js';
import { c as createCommonjsModule, a as commonjsGlobal, g as getAugmentedNamespace } from './_commonjsHelpers-66ac50f5.js';

var strings = createCommonjsModule(function (module, exports) {
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = void 0;
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
var Strings = /** @class */ (function () {
    function Strings() {
    }
    Strings.errors = {
        unknownElementType: function (typeName) {
            return "Unknown element type \"".concat(typeName, "\". Fallback will be used if present.");
        },
        unknownActionType: function (typeName) {
            return "Unknown action type \"".concat(typeName, "\". Fallback will be used if present.");
        },
        elementTypeNotAllowed: function (typeName) {
            return "Element type \"".concat(typeName, "\" is not allowed in this context.");
        },
        actionTypeNotAllowed: function (typeName) {
            return "Action type \"".concat(typeName, "\" is not allowed in this context.");
        },
        invalidPropertyValue: function (value, propertyName) {
            return "Invalid value \"".concat(value, "\" for property \"").concat(propertyName, "\".");
        },
        showCardMustHaveCard: function () {
            return "\"An Action.ShowCard must have its \"card\" property set to a valid AdaptiveCard object.";
        },
        invalidColumnWidth: function (invalidWidth) {
            return "Invalid column width \"".concat(invalidWidth, "\" - defaulting to \"auto\".");
        },
        invalidCardVersion: function (defaultingToVersion) {
            return "Invalid card version. Defaulting to \"".concat(defaultingToVersion, "\".");
        },
        invalidVersionString: function (versionString) {
            return "Invalid version string \"".concat(versionString, "\".");
        },
        propertyValueNotSupported: function (value, propertyName, supportedInVersion, versionUsed) {
            return "Value \"".concat(value, "\" for property \"").concat(propertyName, "\" is supported in version ").concat(supportedInVersion, ", but you are using version ").concat(versionUsed, ".");
        },
        propertyNotSupported: function (propertyName, supportedInVersion, versionUsed) {
            return "Property \"".concat(propertyName, "\" is supported in version ").concat(supportedInVersion, ", but you are using version ").concat(versionUsed, ".");
        },
        indexOutOfRange: function (index) { return "Index out of range (".concat(index, ")."); },
        elementCannotBeUsedAsInline: function () {
            return "RichTextBlock.addInline: the specified card element cannot be used as a RichTextBlock inline.";
        },
        inlineAlreadyParented: function () {
            return "RichTextBlock.addInline: the specified inline already belongs to another RichTextBlock.";
        },
        interactivityNotAllowed: function () { return "Interactivity is not allowed."; },
        inputsMustHaveUniqueId: function () { return "All inputs must have a unique Id."; },
        choiceSetMustHaveAtLeastOneChoice: function () {
            return "An Input.ChoiceSet must have at least one choice defined.";
        },
        choiceSetChoicesMustHaveTitleAndValue: function () {
            return "All choices in an Input.ChoiceSet must have their title and value properties set.";
        },
        propertyMustBeSet: function (propertyName) { return "Property \"".concat(propertyName, "\" must be set."); },
        actionHttpHeadersMustHaveNameAndValue: function () {
            return "All headers of an Action.Http must have their name and value properties set.";
        },
        tooManyActions: function (maximumActions) {
            return "Maximum number of actions exceeded (".concat(maximumActions, ").");
        },
        tooLittleTimeDelay: function (minAutoplayDelay) {
            return "Autoplay Delay is too short (".concat(minAutoplayDelay, ").");
        },
        tooManyCarouselPages: function (maxCarouselPages) {
            return "Maximum number of Carousel pages exceeded (".concat(maxCarouselPages, ").");
        },
        invalidInitialPageIndex: function (initialPageIndex) {
            return "InitialPage for carousel is invalid (".concat(initialPageIndex, ").");
        },
        columnAlreadyBelongsToAnotherSet: function () { return "This column already belongs to another ColumnSet."; },
        invalidCardType: function () {
            return "Invalid or missing card type. Make sure the card's type property is set to \"AdaptiveCard\".";
        },
        unsupportedCardVersion: function (version, maxSupportedVersion) {
            return "The specified card version (".concat(version, ") is not supported or still in preview. The latest released card version is ").concat(maxSupportedVersion, ".");
        },
        duplicateId: function (id) { return "Duplicate Id \"".concat(id, "\"."); },
        markdownProcessingNotEnabled: function () {
            return "Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown";
        },
        processMarkdownEventRemoved: function () {
            return "The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.";
        },
        elementAlreadyParented: function () { return "The element already belongs to another container."; },
        actionAlreadyParented: function () { return "The action already belongs to another element."; },
        elementTypeNotStandalone: function (typeName) {
            return "Elements of type ".concat(typeName, " cannot be used as standalone elements.");
        },
        invalidInputLabelWidth: function () {
            return "Invalid input label width. Defaulting to label width from host config.";
        },
    };
    Strings.magicCodeInputCard = {
        tryAgain: function () { return "That didn't work... let's try again."; },
        pleaseLogin: function () {
            return 'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"';
        },
        enterMagicCode: function () { return "Enter magic code"; },
        pleaseEnterMagicCodeYouReceived: function () { return "Please enter the magic code you received."; },
        submit: function () { return "Submit"; },
        cancel: function () { return "Cancel"; },
        somethingWentWrong: function () { return "Something went wrong. This action can't be handled."; },
        authenticationFailed: function () { return "Authentication failed."; }
    };
    Strings.runtime = {
        automaticRefreshPaused: function () { return "Automatic refresh paused."; },
        clckToRestartAutomaticRefresh: function () { return "Click to restart."; },
        refreshThisCard: function () { return "Refresh this card"; }
    };
    Strings.hints = {
        dontUseWeightedAndStrecthedColumnsInSameSet: function () {
            return "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space.";
        }
    };
    Strings.defaults = {
        inlineActionTitle: function () { return "Inline Action"; },
        overflowButtonText: function () { return "..."; },
        overflowButtonTooltip: function () { return "More options"; },
        mediaPlayerAriaLabel: function () { return "Media content"; },
        mediaPlayerPlayMedia: function () { return "Play media"; },
        youTubeVideoPlayer: function () { return "YouTube video player"; },
        vimeoVideoPlayer: function () { return "Vimeo video player"; },
        dailymotionVideoPlayer: function () { return "Dailymotion video player"; },
        carouselNavigationPreviousTooltip: function () { return "Previous carousel page"; },
        carouselNavigationNextTooltip: function () { return "Next carousel page"; }
    };
    return Strings;
}());
exports.Strings = Strings;
//# sourceMappingURL=strings.js.map
});

var enums = createCommonjsModule(function (module, exports) {
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselInteractionEvent = exports.LogLevel = exports.RefreshMode = exports.TypeErrorType = exports.ContainerFitStatus = exports.ValidationEvent = exports.ValidationPhase = exports.InputLabelPosition = exports.InputTextStyle = exports.ActionIconPlacement = exports.FillMode = exports.Orientation = exports.ShowCardActionMode = exports.ImageStyle = exports.ActionAlignment = exports.VerticalAlignment = exports.HorizontalAlignment = exports.TextColor = exports.Spacing = exports.FontType = exports.TextWeight = exports.InputStyle = exports.TextSize = exports.SizeUnit = exports.ImageSetPresentationStyle = exports.ImageSize = exports.Size = exports.ActionMode = exports.ActionStyle = exports.ContainerStyle = void 0;
/*
    This should really be a string enum, e.g.

        export enum ContainerStyle {
            Default = "default",
            Emphasis = "emphasis"
        }

    However, some hosts do not use a version of TypeScript
    recent enough to understand string enums. This is
    a compatible construct that does not require using
    a more recent version of TypeScript.

    Also note the "weird" way these readonly fields are declared is to work around
    a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    and adopt this syntax for all other static readonly fields.
*/
/* eslint-disable @typescript-eslint/no-extraneous-class, @typescript-eslint/naming-convention */
var ContainerStyle = /** @class */ (function () {
    function ContainerStyle() {
    }
    ContainerStyle.Default = "default";
    ContainerStyle.Emphasis = "emphasis";
    ContainerStyle.Accent = "accent";
    ContainerStyle.Good = "good";
    ContainerStyle.Attention = "attention";
    ContainerStyle.Warning = "warning";
    return ContainerStyle;
}());
exports.ContainerStyle = ContainerStyle;
var ActionStyle = /** @class */ (function () {
    function ActionStyle() {
    }
    ActionStyle.Default = "default";
    ActionStyle.Positive = "positive";
    ActionStyle.Destructive = "destructive";
    return ActionStyle;
}());
exports.ActionStyle = ActionStyle;
var ActionMode = /** @class */ (function () {
    function ActionMode() {
    }
    ActionMode.Primary = "primary";
    ActionMode.Secondary = "secondary";
    return ActionMode;
}());
exports.ActionMode = ActionMode;
(function (Size) {
    Size[Size["Auto"] = 0] = "Auto";
    Size[Size["Stretch"] = 1] = "Stretch";
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(exports.Size || (exports.Size = {}));
(function (ImageSize) {
    ImageSize[ImageSize["Small"] = 0] = "Small";
    ImageSize[ImageSize["Medium"] = 1] = "Medium";
    ImageSize[ImageSize["Large"] = 2] = "Large";
})(exports.ImageSize || (exports.ImageSize = {}));
(function (ImageSetPresentationStyle) {
    ImageSetPresentationStyle[ImageSetPresentationStyle["Default"] = 0] = "Default";
    ImageSetPresentationStyle[ImageSetPresentationStyle["Stacked"] = 1] = "Stacked";
})(exports.ImageSetPresentationStyle || (exports.ImageSetPresentationStyle = {}));
(function (SizeUnit) {
    SizeUnit[SizeUnit["Weight"] = 0] = "Weight";
    SizeUnit[SizeUnit["Pixel"] = 1] = "Pixel";
})(exports.SizeUnit || (exports.SizeUnit = {}));
(function (TextSize) {
    TextSize[TextSize["Small"] = 0] = "Small";
    TextSize[TextSize["Default"] = 1] = "Default";
    TextSize[TextSize["Medium"] = 2] = "Medium";
    TextSize[TextSize["Large"] = 3] = "Large";
    TextSize[TextSize["ExtraLarge"] = 4] = "ExtraLarge";
})(exports.TextSize || (exports.TextSize = {}));
(function (InputStyle) {
    InputStyle[InputStyle["RevealOnHover"] = 0] = "RevealOnHover";
    InputStyle[InputStyle["Default"] = 1] = "Default";
})(exports.InputStyle || (exports.InputStyle = {}));
(function (TextWeight) {
    TextWeight[TextWeight["Lighter"] = 0] = "Lighter";
    TextWeight[TextWeight["Default"] = 1] = "Default";
    TextWeight[TextWeight["Bolder"] = 2] = "Bolder";
})(exports.TextWeight || (exports.TextWeight = {}));
(function (FontType) {
    FontType[FontType["Default"] = 0] = "Default";
    FontType[FontType["Monospace"] = 1] = "Monospace";
})(exports.FontType || (exports.FontType = {}));
(function (Spacing) {
    Spacing[Spacing["None"] = 0] = "None";
    Spacing[Spacing["Small"] = 1] = "Small";
    Spacing[Spacing["Default"] = 2] = "Default";
    Spacing[Spacing["Medium"] = 3] = "Medium";
    Spacing[Spacing["Large"] = 4] = "Large";
    Spacing[Spacing["ExtraLarge"] = 5] = "ExtraLarge";
    Spacing[Spacing["Padding"] = 6] = "Padding";
})(exports.Spacing || (exports.Spacing = {}));
(function (TextColor) {
    TextColor[TextColor["Default"] = 0] = "Default";
    TextColor[TextColor["Dark"] = 1] = "Dark";
    TextColor[TextColor["Light"] = 2] = "Light";
    TextColor[TextColor["Accent"] = 3] = "Accent";
    TextColor[TextColor["Good"] = 4] = "Good";
    TextColor[TextColor["Warning"] = 5] = "Warning";
    TextColor[TextColor["Attention"] = 6] = "Attention";
})(exports.TextColor || (exports.TextColor = {}));
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
})(exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
})(exports.VerticalAlignment || (exports.VerticalAlignment = {}));
(function (ActionAlignment) {
    ActionAlignment[ActionAlignment["Left"] = 0] = "Left";
    ActionAlignment[ActionAlignment["Center"] = 1] = "Center";
    ActionAlignment[ActionAlignment["Right"] = 2] = "Right";
    ActionAlignment[ActionAlignment["Stretch"] = 3] = "Stretch";
})(exports.ActionAlignment || (exports.ActionAlignment = {}));
(function (ImageStyle) {
    ImageStyle[ImageStyle["Default"] = 0] = "Default";
    ImageStyle[ImageStyle["Person"] = 1] = "Person";
})(exports.ImageStyle || (exports.ImageStyle = {}));
(function (ShowCardActionMode) {
    ShowCardActionMode[ShowCardActionMode["Inline"] = 0] = "Inline";
    ShowCardActionMode[ShowCardActionMode["Popup"] = 1] = "Popup";
})(exports.ShowCardActionMode || (exports.ShowCardActionMode = {}));
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(exports.Orientation || (exports.Orientation = {}));
(function (FillMode) {
    FillMode[FillMode["Cover"] = 0] = "Cover";
    FillMode[FillMode["RepeatHorizontally"] = 1] = "RepeatHorizontally";
    FillMode[FillMode["RepeatVertically"] = 2] = "RepeatVertically";
    FillMode[FillMode["Repeat"] = 3] = "Repeat";
})(exports.FillMode || (exports.FillMode = {}));
(function (ActionIconPlacement) {
    ActionIconPlacement[ActionIconPlacement["LeftOfTitle"] = 0] = "LeftOfTitle";
    ActionIconPlacement[ActionIconPlacement["AboveTitle"] = 1] = "AboveTitle";
})(exports.ActionIconPlacement || (exports.ActionIconPlacement = {}));
(function (InputTextStyle) {
    InputTextStyle[InputTextStyle["Text"] = 0] = "Text";
    InputTextStyle[InputTextStyle["Tel"] = 1] = "Tel";
    InputTextStyle[InputTextStyle["Url"] = 2] = "Url";
    InputTextStyle[InputTextStyle["Email"] = 3] = "Email";
    InputTextStyle[InputTextStyle["Password"] = 4] = "Password";
})(exports.InputTextStyle || (exports.InputTextStyle = {}));
(function (InputLabelPosition) {
    InputLabelPosition[InputLabelPosition["Inline"] = 0] = "Inline";
    InputLabelPosition[InputLabelPosition["Above"] = 1] = "Above";
})(exports.InputLabelPosition || (exports.InputLabelPosition = {}));
(function (ValidationPhase) {
    ValidationPhase[ValidationPhase["Parse"] = 0] = "Parse";
    ValidationPhase[ValidationPhase["ToJSON"] = 1] = "ToJSON";
    ValidationPhase[ValidationPhase["Validation"] = 2] = "Validation";
})(exports.ValidationPhase || (exports.ValidationPhase = {}));
(function (ValidationEvent) {
    ValidationEvent[ValidationEvent["Hint"] = 0] = "Hint";
    ValidationEvent[ValidationEvent["ActionTypeNotAllowed"] = 1] = "ActionTypeNotAllowed";
    ValidationEvent[ValidationEvent["CollectionCantBeEmpty"] = 2] = "CollectionCantBeEmpty";
    ValidationEvent[ValidationEvent["Deprecated"] = 3] = "Deprecated";
    ValidationEvent[ValidationEvent["ElementTypeNotAllowed"] = 4] = "ElementTypeNotAllowed";
    ValidationEvent[ValidationEvent["InteractivityNotAllowed"] = 5] = "InteractivityNotAllowed";
    ValidationEvent[ValidationEvent["InvalidPropertyValue"] = 6] = "InvalidPropertyValue";
    ValidationEvent[ValidationEvent["MissingCardType"] = 7] = "MissingCardType";
    ValidationEvent[ValidationEvent["PropertyCantBeNull"] = 8] = "PropertyCantBeNull";
    ValidationEvent[ValidationEvent["TooManyActions"] = 9] = "TooManyActions";
    ValidationEvent[ValidationEvent["UnknownActionType"] = 10] = "UnknownActionType";
    ValidationEvent[ValidationEvent["UnknownElementType"] = 11] = "UnknownElementType";
    ValidationEvent[ValidationEvent["UnsupportedCardVersion"] = 12] = "UnsupportedCardVersion";
    ValidationEvent[ValidationEvent["DuplicateId"] = 13] = "DuplicateId";
    ValidationEvent[ValidationEvent["UnsupportedProperty"] = 14] = "UnsupportedProperty";
    ValidationEvent[ValidationEvent["RequiredInputsShouldHaveLabel"] = 15] = "RequiredInputsShouldHaveLabel";
    ValidationEvent[ValidationEvent["RequiredInputsShouldHaveErrorMessage"] = 16] = "RequiredInputsShouldHaveErrorMessage";
    ValidationEvent[ValidationEvent["Other"] = 17] = "Other";
})(exports.ValidationEvent || (exports.ValidationEvent = {}));
(function (ContainerFitStatus) {
    ContainerFitStatus[ContainerFitStatus["FullyInContainer"] = 0] = "FullyInContainer";
    ContainerFitStatus[ContainerFitStatus["Overflowing"] = 1] = "Overflowing";
    ContainerFitStatus[ContainerFitStatus["FullyOutOfContainer"] = 2] = "FullyOutOfContainer";
})(exports.ContainerFitStatus || (exports.ContainerFitStatus = {}));
(function (TypeErrorType) {
    TypeErrorType[TypeErrorType["UnknownType"] = 0] = "UnknownType";
    TypeErrorType[TypeErrorType["ForbiddenType"] = 1] = "ForbiddenType";
})(exports.TypeErrorType || (exports.TypeErrorType = {}));
(function (RefreshMode) {
    RefreshMode[RefreshMode["Disabled"] = 0] = "Disabled";
    RefreshMode[RefreshMode["Manual"] = 1] = "Manual";
    RefreshMode[RefreshMode["Automatic"] = 2] = "Automatic";
})(exports.RefreshMode || (exports.RefreshMode = {}));
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Error"] = 2] = "Error";
})(exports.LogLevel || (exports.LogLevel = {}));
(function (CarouselInteractionEvent) {
    CarouselInteractionEvent[CarouselInteractionEvent["NavigationNext"] = 0] = "NavigationNext";
    CarouselInteractionEvent[CarouselInteractionEvent["NavigationPrevious"] = 1] = "NavigationPrevious";
    CarouselInteractionEvent[CarouselInteractionEvent["Pagination"] = 2] = "Pagination";
    CarouselInteractionEvent[CarouselInteractionEvent["Autoplay"] = 3] = "Autoplay";
})(exports.CarouselInteractionEvent || (exports.CarouselInteractionEvent = {}));
//# sourceMappingURL=enums.js.map
});

var shared = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = exports.SizeAndUnit = exports.PaddingDefinition = exports.SpacingDefinition = exports.StringWithSubstitutions = exports.ContentTypes = exports.GlobalSettings = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.useAdvancedTextBlockTruncation = true;
    GlobalSettings.useAdvancedCardBottomTruncation = false;
    GlobalSettings.useMarkdownInRadioButtonAndCheckbox = true;
    GlobalSettings.allowMarkForTextHighlighting = false;
    GlobalSettings.alwaysBleedSeparators = false;
    GlobalSettings.enableFullJsonRoundTrip = false;
    GlobalSettings.displayInputValidationErrors = true;
    GlobalSettings.allowPreProcessingPropertyValues = false;
    GlobalSettings.setTabIndexAtCardRoot = true;
    GlobalSettings.enableFallback = true;
    GlobalSettings.useWebkitLineClamp = true;
    GlobalSettings.allowMoreThanMaxActionsInOverflowMenu = false;
    GlobalSettings.removePaddingFromContainersWithBackgroundImage = false;
    GlobalSettings.resetInputsDirtyStateAfterActionExecution = true;
    GlobalSettings.applets = {
        logEnabled: true,
        logLevel: enums.LogLevel.Error,
        maximumRetryAttempts: 3,
        defaultTimeBetweenRetryAttempts: 3000,
        authPromptWidth: 400,
        authPromptHeight: 600,
        refresh: {
            mode: enums.RefreshMode.Manual,
            timeBetweenAutomaticRefreshes: 3000,
            maximumConsecutiveAutomaticRefreshes: 3,
            allowManualRefreshesAfterAutomaticRefreshes: true
        }
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
exports.ContentTypes = {
    applicationJson: "application/json",
    applicationXWwwFormUrlencoded: "application/x-www-form-urlencoded"
};
var StringWithSubstitutions = /** @class */ (function () {
    function StringWithSubstitutions() {
        this._isProcessed = false;
    }
    StringWithSubstitutions.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        if (!referencedInputs) {
            throw new Error("The referencedInputs parameter cannot be null.");
        }
        if (this._original) {
            for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
                var input = inputs_1[_i];
                var matches = new RegExp("\\{{2}(" + input.id + ").value\\}{2}", "gi").exec(this._original);
                if (matches != null && input.id) {
                    referencedInputs[input.id] = input;
                }
            }
        }
    };
    StringWithSubstitutions.prototype.substituteInputValues = function (inputs, contentType) {
        this._processed = this._original;
        if (this._original) {
            var regEx = /\{{2}([a-z0-9_$@]+).value\}{2}/gi;
            var matches = void 0;
            while ((matches = regEx.exec(this._original)) !== null && this._processed) {
                for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (key.toLowerCase() === matches[1].toLowerCase()) {
                        var matchedInput = inputs[key];
                        var valueForReplace = "";
                        if (matchedInput.value) {
                            valueForReplace = matchedInput.value;
                        }
                        if (contentType === exports.ContentTypes.applicationJson) {
                            valueForReplace = JSON.stringify(valueForReplace);
                            valueForReplace = valueForReplace.slice(1, -1);
                        }
                        else if (contentType === exports.ContentTypes.applicationXWwwFormUrlencoded) {
                            valueForReplace = encodeURIComponent(valueForReplace);
                        }
                        this._processed = this._processed.replace(matches[0], valueForReplace);
                        break;
                    }
                }
            }
        }
        this._isProcessed = true;
    };
    StringWithSubstitutions.prototype.getOriginal = function () {
        return this._original;
    };
    StringWithSubstitutions.prototype.get = function () {
        if (!this._isProcessed) {
            return this._original;
        }
        else {
            return this._processed;
        }
    };
    StringWithSubstitutions.prototype.set = function (value) {
        this._original = value;
        this._isProcessed = false;
    };
    return StringWithSubstitutions;
}());
exports.StringWithSubstitutions = StringWithSubstitutions;
var SpacingDefinition = /** @class */ (function () {
    function SpacingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return SpacingDefinition;
}());
exports.SpacingDefinition = SpacingDefinition;
var PaddingDefinition = /** @class */ (function () {
    function PaddingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = enums.Spacing.None; }
        if (right === void 0) { right = enums.Spacing.None; }
        if (bottom === void 0) { bottom = enums.Spacing.None; }
        if (left === void 0) { left = enums.Spacing.None; }
        this.top = enums.Spacing.None;
        this.right = enums.Spacing.None;
        this.bottom = enums.Spacing.None;
        this.left = enums.Spacing.None;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return PaddingDefinition;
}());
exports.PaddingDefinition = PaddingDefinition;
var SizeAndUnit = /** @class */ (function () {
    function SizeAndUnit(physicalSize, unit) {
        this.physicalSize = physicalSize;
        this.unit = unit;
    }
    SizeAndUnit.parse = function (input, requireUnitSpecifier) {
        if (requireUnitSpecifier === void 0) { requireUnitSpecifier = false; }
        var result = new SizeAndUnit(0, enums.SizeUnit.Weight);
        if (typeof input === "number") {
            result.physicalSize = input;
            return result;
        }
        else if (typeof input === "string") {
            var regExp = /^([0-9]+)(px|\*)?$/g;
            var matches = regExp.exec(input);
            var expectedMatchCount = requireUnitSpecifier ? 3 : 2;
            if (matches && matches.length >= expectedMatchCount) {
                result.physicalSize = parseInt(matches[1]);
                if (matches.length === 3) {
                    if (matches[2] === "px") {
                        result.unit = enums.SizeUnit.Pixel;
                    }
                }
                return result;
            }
        }
        throw new Error("Invalid size: " + input);
    };
    return SizeAndUnit;
}());
exports.SizeAndUnit = SizeAndUnit;
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
/* eslint-disable @typescript-eslint/no-extraneous-class, @typescript-eslint/naming-convention, no-bitwise */
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.generate = function () {
        var d0 = (Math.random() * 0xffffffff) | 0;
        var d1 = (Math.random() * 0xffffffff) | 0;
        var d2 = (Math.random() * 0xffffffff) | 0;
        var d3 = (Math.random() * 0xffffffff) | 0;
        return (UUID.lut[d0 & 0xff] +
            UUID.lut[(d0 >> 8) & 0xff] +
            UUID.lut[(d0 >> 16) & 0xff] +
            UUID.lut[(d0 >> 24) & 0xff] +
            "-" +
            UUID.lut[d1 & 0xff] +
            UUID.lut[(d1 >> 8) & 0xff] +
            "-" +
            UUID.lut[((d1 >> 16) & 0x0f) | 0x40] +
            UUID.lut[(d1 >> 24) & 0xff] +
            "-" +
            UUID.lut[(d2 & 0x3f) | 0x80] +
            UUID.lut[(d2 >> 8) & 0xff] +
            "-" +
            UUID.lut[(d2 >> 16) & 0xff] +
            UUID.lut[(d2 >> 24) & 0xff] +
            UUID.lut[d3 & 0xff] +
            UUID.lut[(d3 >> 8) & 0xff] +
            UUID.lut[(d3 >> 16) & 0xff] +
            UUID.lut[(d3 >> 24) & 0xff]);
    };
    UUID.initialize = function () {
        for (var i = 0; i < 256; i++) {
            UUID.lut[i] = (i < 16 ? "0" : "") + i.toString(16);
        }
    };
    UUID.lut = [];
    return UUID;
}());
exports.UUID = UUID;
UUID.initialize();
/* eslint-enable @typescript-eslint/no-extraneous-class, @typescript-eslint/naming-convention, no-bitwise */
//# sourceMappingURL=shared.js.map
});

var utils = createCommonjsModule(function (module, exports) {
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCancelSelectActionEventHandler = exports.clearElementChildren = exports.getScrollY = exports.getScrollX = exports.getFitStatus = exports.truncate = exports.truncateText = exports.stringToCssColor = exports.parseEnum = exports.getEnumValueByName = exports.parseBool = exports.parseNumber = exports.parseString = exports.appendChild = exports.generateUniqueId = exports.isMobileOS = exports.isInternetExplorer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


function isInternetExplorer() {
    // The documentMode property only exists in IE
    return window.document.documentMode !== undefined;
}
exports.isInternetExplorer = isInternetExplorer;
function isMobileOS() {
    var userAgent = window.navigator.userAgent;
    return (!!userAgent.match(/Android/i) || !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i));
}
exports.isMobileOS = isMobileOS;
/**
 * Generate a UUID prepended with "__ac-"
 */
function generateUniqueId() {
    return "__ac-" + shared.UUID.generate();
}
exports.generateUniqueId = generateUniqueId;
function appendChild(node, child) {
    if (child) {
        node.appendChild(child);
    }
}
exports.appendChild = appendChild;
function parseString(obj, defaultValue) {
    return typeof obj === "string" ? obj : defaultValue;
}
exports.parseString = parseString;
function parseNumber(obj, defaultValue) {
    return typeof obj === "number" ? obj : defaultValue;
}
exports.parseNumber = parseNumber;
function parseBool(value, defaultValue) {
    if (typeof value === "boolean") {
        return value;
    }
    else if (typeof value === "string") {
        switch (value.toLowerCase()) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                return defaultValue;
        }
    }
    return defaultValue;
}
exports.parseBool = parseBool;
function getEnumValueByName(enumType, name) {
    // eslint-disable-next-line guard-for-in
    for (var key in enumType) {
        var keyAsNumber = parseInt(key, 10);
        if (keyAsNumber >= 0) {
            var value = enumType[key];
            if (value && typeof value === "string" && value.toLowerCase() === name.toLowerCase()) {
                return keyAsNumber;
            }
        }
    }
    return undefined;
}
exports.getEnumValueByName = getEnumValueByName;
function parseEnum(enumType, name, defaultValue) {
    if (!name) {
        return defaultValue;
    }
    var enumValue = getEnumValueByName(enumType, name);
    return enumValue !== undefined ? enumValue : defaultValue;
}
exports.parseEnum = parseEnum;
function stringToCssColor(color) {
    if (color) {
        var regEx = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi;
        var matches = regEx.exec(color);
        if (matches && matches[4]) {
            var a = parseInt(matches[1], 16) / 255;
            var r = parseInt(matches[2], 16);
            var g = parseInt(matches[3], 16);
            var b = parseInt(matches[4], 16);
            return "rgba(" + r + "," + g + "," + b + "," + a + ")";
        }
    }
    return color;
}
exports.stringToCssColor = stringToCssColor;
function truncateWorker(element, maxHeight, fullText, truncateAt, lineHeight) {
    var fits = function () {
        // Allow a one pixel overflow to account for rounding differences
        // between browsers
        return maxHeight - element.scrollHeight >= -1.0;
    };
    if (fits()) {
        return;
    }
    var breakableIndices = findBreakableIndices(fullText);
    var lo = 0;
    var hi = breakableIndices.length;
    var bestBreakIdx = 0;
    // Do a binary search for the longest string that fits
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        truncateAt(fullText, breakableIndices[mid]);
        if (fits()) {
            bestBreakIdx = breakableIndices[mid];
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    truncateAt(fullText, bestBreakIdx);
    // If we have extra room, try to expand the string letter by letter
    // (covers the case where we have to break in the middle of a long word)
    if (lineHeight && maxHeight - element.scrollHeight >= lineHeight - 1.0) {
        var idx = findNextCharacter(fullText, bestBreakIdx);
        while (idx < fullText.length) {
            truncateAt(fullText, idx);
            if (fits()) {
                bestBreakIdx = idx;
                idx = findNextCharacter(fullText, idx);
            }
            else {
                break;
            }
        }
        truncateAt(fullText, bestBreakIdx);
    }
}
function truncateText(element, maxHeight, lineHeight) {
    truncateWorker(element, maxHeight, element.innerText, function (text, idx) {
        element.innerText = text.substring(0, idx) + "...";
    }, lineHeight);
}
exports.truncateText = truncateText;
/**
 * {@link truncate} has been deprecated and is no longer in use internally. This policy passes
 * content through as it always has, which is _supposed_ to be dealing with text only (see {@link
 * TextBlock.truncateIfSupported}), but had a bug where it might actually pass through an element
 * for which innerHTML yielded actual HTML (since fixed).
 */
var ttDeprecatedPolicy = (typeof window === 'undefined') ? undefined : (_a = window.trustedTypes) === null || _a === void 0 ? void 0 : _a.createPolicy("adaptivecards#deprecatedExportedFunctionPolicy", {
    createHTML: function (value) { return value; }
});
/** @deprecated Use {@link truncateText} instead. */
function truncate(element, maxHeight, lineHeight) {
    truncateWorker(element, maxHeight, element.innerHTML, function (text, idx) {
        var _a;
        var truncatedString = text.substring(0, idx) + "...";
        var truncatedHTML = (_a = ttDeprecatedPolicy === null || ttDeprecatedPolicy === void 0 ? void 0 : ttDeprecatedPolicy.createHTML(truncatedString)) !== null && _a !== void 0 ? _a : truncatedString;
        element.innerHTML = truncatedHTML;
    }, lineHeight);
}
exports.truncate = truncate;
function findBreakableIndices(html) {
    var results = [];
    var idx = findNextCharacter(html, -1);
    while (idx < html.length) {
        if (html[idx] === " ") {
            results.push(idx);
        }
        idx = findNextCharacter(html, idx);
    }
    return results;
}
function findNextCharacter(html, currIdx) {
    currIdx += 1;
    // If we found the start of an HTML tag, keep advancing until we get
    // past it, so we don't end up truncating in the middle of the tag
    while (currIdx < html.length && html[currIdx] === "<") {
        while (currIdx < html.length && html[currIdx++] !== ">") {
            continue;
        }
    }
    return currIdx;
}
function getFitStatus(element, containerEnd) {
    var start = element.offsetTop;
    var end = start + element.clientHeight;
    if (end <= containerEnd) {
        return enums.ContainerFitStatus.FullyInContainer;
    }
    else if (start < containerEnd) {
        return enums.ContainerFitStatus.Overflowing;
    }
    else {
        return enums.ContainerFitStatus.FullyOutOfContainer;
    }
}
exports.getFitStatus = getFitStatus;
function getScrollX() {
    return window.pageXOffset;
}
exports.getScrollX = getScrollX;
function getScrollY() {
    return window.pageYOffset;
}
exports.getScrollY = getScrollY;
function clearElementChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
exports.clearElementChildren = clearElementChildren;
function addCancelSelectActionEventHandler(element) {
    element.onclick = function (e) {
        e.preventDefault();
        e.cancelBubble = true;
    };
}
exports.addCancelSelectActionEventHandler = addCancelSelectActionEventHandler;
//# sourceMappingURL=utils.js.map
});

var serialization = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializableObject = exports.property = exports.SerializableObjectSchema = exports.CustomProperty = exports.SerializableObjectCollectionProperty = exports.SerializableObjectProperty = exports.EnumProperty = exports.ValueSetProperty = exports.StringArrayProperty = exports.PixelSizeProperty = exports.NumProperty = exports.BoolProperty = exports.StringProperty = exports.PropertyDefinition = exports.BaseSerializationContext = exports.isVersionLessOrEqual = exports.Versions = exports.Version = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.




var Version = /** @class */ (function () {
    function Version(major, minor, label) {
        if (major === void 0) { major = 1; }
        if (minor === void 0) { minor = 1; }
        this._isValid = true;
        this._major = major;
        this._minor = minor;
        this._label = label;
    }
    Version.parse = function (versionString, context) {
        if (!versionString) {
            return undefined;
        }
        var result = new Version();
        result._versionString = versionString;
        var regEx = /(\d+).(\d+)/gi;
        var matches = regEx.exec(versionString);
        if (matches != null && matches.length === 3) {
            result._major = parseInt(matches[1]);
            result._minor = parseInt(matches[2]);
        }
        else {
            result._isValid = false;
        }
        if (!result._isValid) {
            context.logParseEvent(undefined, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidVersionString(result._versionString));
        }
        return result;
    };
    Version.prototype.toString = function () {
        return !this._isValid ? this._versionString : this._major + "." + this._minor;
    };
    Version.prototype.toJSON = function () {
        return this.toString();
    };
    Version.prototype.compareTo = function (otherVersion) {
        if (!this.isValid || !otherVersion.isValid) {
            throw new Error("Cannot compare invalid version.");
        }
        if (this.major > otherVersion.major) {
            return 1;
        }
        else if (this.major < otherVersion.major) {
            return -1;
        }
        else if (this.minor > otherVersion.minor) {
            return 1;
        }
        else if (this.minor < otherVersion.minor) {
            return -1;
        }
        return 0;
    };
    Object.defineProperty(Version.prototype, "label", {
        get: function () {
            return this._label ? this._label : this.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: false,
        configurable: true
    });
    return Version;
}());
exports.Version = Version;
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
var Versions = /** @class */ (function () {
    function Versions() {
    }
    /* eslint-enable @typescript-eslint/naming-convention */
    Versions.getAllDeclaredVersions = function () {
        var ctor = Versions;
        var properties = [];
        for (var propertyName in ctor) {
            if (propertyName.match(/^v[0-9_]*$/)) {
                // filter latest
                try {
                    var propertyValue = ctor[propertyName];
                    if (propertyValue instanceof Version) {
                        properties.push(propertyValue);
                    }
                }
                catch (_a) {
                    // If a property happens to have a getter function and
                    // it throws an exception, we need to catch it here
                }
            }
        }
        return properties.sort(function (v1, v2) { return v1.compareTo(v2); });
    };
    /* eslint-disable @typescript-eslint/naming-convention */
    Versions.v1_0 = new Version(1, 0);
    Versions.v1_1 = new Version(1, 1);
    Versions.v1_2 = new Version(1, 2);
    Versions.v1_3 = new Version(1, 3);
    Versions.v1_4 = new Version(1, 4);
    Versions.v1_5 = new Version(1, 5);
    // If preview tag is added/removed from any version,
    // don't forget to update .ac-schema-version-1-?::after too in adaptivecards-site\themes\adaptivecards\source\css\style.css
    Versions.v1_6 = new Version(1, 6, "1.6 Preview");
    Versions.latest = Versions.v1_5;
    return Versions;
}());
exports.Versions = Versions;
function isVersionLessOrEqual(version, targetVersion) {
    if (version instanceof Version) {
        if (targetVersion instanceof Version) {
            return targetVersion.compareTo(version) >= 0;
        }
        else {
            // Target version is *
            return true;
        }
    }
    else {
        // Version is *
        return true;
    }
}
exports.isVersionLessOrEqual = isVersionLessOrEqual;
var BaseSerializationContext = /** @class */ (function () {
    function BaseSerializationContext(targetVersion) {
        if (targetVersion === void 0) { targetVersion = Versions.latest; }
        this._validationEvents = [];
        this.targetVersion = targetVersion;
    }
    BaseSerializationContext.prototype.isTemplateString = function (value) {
        if (typeof value === "string") {
            return value.startsWith("${");
        }
        else {
            return false;
        }
    };
    BaseSerializationContext.prototype.tryDeleteValue = function (target, propertyName) {
        if (!shared.GlobalSettings.enableFullJsonRoundTrip) {
            delete target[propertyName];
        }
    };
    BaseSerializationContext.prototype.tryDeleteDefaultValue = function (target, propertyName) {
        if (!shared.GlobalSettings.enableFullJsonRoundTrip || !this.isTemplateString(target[propertyName])) {
            delete target[propertyName];
        }
    };
    BaseSerializationContext.prototype.serializeValue = function (target, propertyName, propertyValue, defaultValue, forceDeleteIfNullOrDefault) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (forceDeleteIfNullOrDefault === void 0) { forceDeleteIfNullOrDefault = false; }
        if (propertyValue === null ||
            propertyValue === undefined) {
            if (!shared.GlobalSettings.enableFullJsonRoundTrip || forceDeleteIfNullOrDefault) {
                delete target[propertyName];
            }
        }
        else if (propertyValue === defaultValue) {
            if (!shared.GlobalSettings.enableFullJsonRoundTrip || forceDeleteIfNullOrDefault || !this.isTemplateString(target[propertyName])) {
                delete target[propertyName];
            }
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeString = function (target, propertyName, propertyValue, defaultValue) {
        if (propertyValue === null ||
            propertyValue === undefined) {
            this.tryDeleteValue(target, propertyName);
        }
        else if (propertyValue === defaultValue) {
            this.tryDeleteDefaultValue(target, propertyName);
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeBool = function (target, propertyName, propertyValue, defaultValue) {
        if (propertyValue === null ||
            propertyValue === undefined) {
            this.tryDeleteValue(target, propertyName);
        }
        else if (propertyValue === defaultValue) {
            this.tryDeleteDefaultValue(target, propertyName);
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeNumber = function (target, propertyName, propertyValue, defaultValue) {
        if (propertyValue === null ||
            propertyValue === undefined ||
            isNaN(propertyValue)) {
            this.tryDeleteValue(target, propertyName);
        }
        else if (propertyValue === defaultValue) {
            this.tryDeleteDefaultValue(target, propertyName);
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeEnum = function (enumType, target, propertyName, propertyValue, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (propertyValue === null ||
            propertyValue === undefined) {
            this.tryDeleteValue(target, propertyName);
        }
        else if (propertyValue === defaultValue) {
            this.tryDeleteDefaultValue(target, propertyName);
        }
        else {
            target[propertyName] = enumType[propertyValue];
        }
    };
    BaseSerializationContext.prototype.serializeArray = function (target, propertyName, propertyValue) {
        var items = [];
        if (propertyValue) {
            for (var _i = 0, propertyValue_1 = propertyValue; _i < propertyValue_1.length; _i++) {
                var item = propertyValue_1[_i];
                var serializedItem = undefined;
                if (item instanceof SerializableObject) {
                    serializedItem = item.toJSON(this);
                }
                else if (item.toJSON) {
                    serializedItem = item.toJSON();
                }
                else {
                    serializedItem = item;
                }
                if (serializedItem !== undefined) {
                    items.push(serializedItem);
                }
            }
        }
        if (items.length === 0) {
            if (target.hasOwnProperty(propertyName) && Array.isArray(target[propertyName])) {
                delete target[propertyName];
            }
        }
        else {
            this.serializeValue(target, propertyName, items);
        }
    };
    BaseSerializationContext.prototype.clearEvents = function () {
        this._validationEvents = [];
    };
    BaseSerializationContext.prototype.logEvent = function (source, phase, event, message) {
        this._validationEvents.push({
            source: source,
            phase: phase,
            event: event,
            message: message
        });
    };
    BaseSerializationContext.prototype.logParseEvent = function (source, event, message) {
        this.logEvent(source, enums.ValidationPhase.Parse, event, message);
    };
    BaseSerializationContext.prototype.getEventAt = function (index) {
        return this._validationEvents[index];
    };
    Object.defineProperty(BaseSerializationContext.prototype, "eventCount", {
        get: function () {
            return this._validationEvents.length;
        },
        enumerable: false,
        configurable: true
    });
    return BaseSerializationContext;
}());
exports.BaseSerializationContext = BaseSerializationContext;
var SimpleSerializationContext = /** @class */ (function (_super) {
    __extends(SimpleSerializationContext, _super);
    function SimpleSerializationContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SimpleSerializationContext;
}(BaseSerializationContext));
var PropertyDefinition = /** @class */ (function () {
    function PropertyDefinition(targetVersion, name, defaultValue, onGetInitialValue) {
        this.targetVersion = targetVersion;
        this.name = name;
        this.defaultValue = defaultValue;
        this.onGetInitialValue = onGetInitialValue;
        this.isSerializationEnabled = true;
        this.sequentialNumber = PropertyDefinition._sequentialNumber;
        PropertyDefinition._sequentialNumber++;
    }
    PropertyDefinition.prototype.getInternalName = function () {
        return this.name;
    };
    PropertyDefinition.prototype.parse = function (sender, source, context) {
        return source[this.name];
    };
    PropertyDefinition.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value, this.defaultValue);
    };
    PropertyDefinition._sequentialNumber = 0;
    return PropertyDefinition;
}());
exports.PropertyDefinition = PropertyDefinition;
var StringProperty = /** @class */ (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty(targetVersion, name, treatEmptyAsUndefined, regEx, defaultValue, onGetInitialValue) {
        if (treatEmptyAsUndefined === void 0) { treatEmptyAsUndefined = true; }
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.treatEmptyAsUndefined = treatEmptyAsUndefined;
        _this.regEx = regEx;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    StringProperty.prototype.parse = function (sender, source, context) {
        var parsedValue = utils.parseString(source[this.name], this.defaultValue);
        var isUndefined = parsedValue === undefined || (parsedValue === "" && this.treatEmptyAsUndefined);
        if (!isUndefined && this.regEx !== undefined) {
            var matches = this.regEx.exec(parsedValue);
            if (!matches) {
                context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidPropertyValue(parsedValue, this.name));
                return undefined;
            }
        }
        return parsedValue;
    };
    StringProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeString(target, this.name, value === "" && this.treatEmptyAsUndefined ? undefined : value, this.defaultValue);
    };
    return StringProperty;
}(PropertyDefinition));
exports.StringProperty = StringProperty;
var BoolProperty = /** @class */ (function (_super) {
    __extends(BoolProperty, _super);
    function BoolProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    BoolProperty.prototype.parse = function (sender, source, context) {
        return utils.parseBool(source[this.name], this.defaultValue);
    };
    BoolProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeBool(target, this.name, value, this.defaultValue);
    };
    return BoolProperty;
}(PropertyDefinition));
exports.BoolProperty = BoolProperty;
var NumProperty = /** @class */ (function (_super) {
    __extends(NumProperty, _super);
    function NumProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    NumProperty.prototype.parse = function (sender, source, context) {
        return utils.parseNumber(source[this.name], this.defaultValue);
    };
    NumProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeNumber(target, this.name, value, this.defaultValue);
    };
    return NumProperty;
}(PropertyDefinition));
exports.NumProperty = NumProperty;
var PixelSizeProperty = /** @class */ (function (_super) {
    __extends(PixelSizeProperty, _super);
    function PixelSizeProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PixelSizeProperty.prototype.parse = function (sender, source, context) {
        var result = undefined;
        var value = source[this.name];
        if (typeof value === "string") {
            var isValid = false;
            try {
                var size = shared.SizeAndUnit.parse(value, true);
                if (size.unit === enums.SizeUnit.Pixel) {
                    result = size.physicalSize;
                    isValid = true;
                }
            }
            catch (_a) {
                // Do nothing. A parse error is emitted below
            }
            if (!isValid) {
                context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidPropertyValue(source[this.name], this.name));
            }
        }
        return result;
    };
    PixelSizeProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : undefined);
    };
    return PixelSizeProperty;
}(PropertyDefinition));
exports.PixelSizeProperty = PixelSizeProperty;
var StringArrayProperty = /** @class */ (function (_super) {
    __extends(StringArrayProperty, _super);
    function StringArrayProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    StringArrayProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined || !Array.isArray(sourceValue)) {
            return this.defaultValue;
        }
        var result = [];
        for (var _i = 0, sourceValue_1 = sourceValue; _i < sourceValue_1.length; _i++) {
            var value = sourceValue_1[_i];
            if (typeof value === "string") {
                result.push(value);
            }
            else {
                context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, "Invalid array value \"".concat(JSON.stringify(value), "\" of type \"").concat(typeof value, "\" ignored for \"").concat(this.name, "\"."));
            }
        }
        return result;
    };
    StringArrayProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeArray(target, this.name, value);
    };
    return StringArrayProperty;
}(PropertyDefinition));
exports.StringArrayProperty = StringArrayProperty;
var ValueSetProperty = /** @class */ (function (_super) {
    __extends(ValueSetProperty, _super);
    function ValueSetProperty(targetVersion, name, values, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.values = values;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    ValueSetProperty.prototype.isValidValue = function (value, context) {
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var versionedValue = _a[_i];
            if (value.toLowerCase() === versionedValue.value.toLowerCase()) {
                var targetVersion = versionedValue.targetVersion
                    ? versionedValue.targetVersion
                    : this.targetVersion;
                return targetVersion.compareTo(context.targetVersion) <= 0;
            }
        }
        return false;
    };
    ValueSetProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.defaultValue;
        }
        if (typeof sourceValue === "string") {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (sourceValue.toLowerCase() === versionedValue.value.toLowerCase()) {
                    var targetVersion = versionedValue.targetVersion
                        ? versionedValue.targetVersion
                        : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        return versionedValue.value;
                    }
                    else {
                        context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.propertyValueNotSupported(sourceValue, this.name, targetVersion.toString(), context.targetVersion.toString()));
                        return this.defaultValue;
                    }
                }
            }
        }
        context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidPropertyValue(sourceValue, this.name));
        return this.defaultValue;
    };
    ValueSetProperty.prototype.toJSON = function (sender, target, value, context) {
        var invalidValue = false;
        if (value !== undefined) {
            invalidValue = true;
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === value) {
                    var targetVersion = versionedValue.targetVersion
                        ? versionedValue.targetVersion
                        : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        invalidValue = false;
                        break;
                    }
                    else {
                        context.logEvent(sender, enums.ValidationPhase.ToJSON, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.propertyValueNotSupported(value, this.name, targetVersion.toString(), context.targetVersion.toString()));
                    }
                }
            }
        }
        if (!invalidValue) {
            context.serializeValue(target, this.name, value, this.defaultValue, true);
        }
    };
    return ValueSetProperty;
}(PropertyDefinition));
exports.ValueSetProperty = ValueSetProperty;
var EnumProperty = /** @class */ (function (_super) {
    __extends(EnumProperty, _super);
    function EnumProperty(targetVersion, name, enumType, defaultValue, values, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.enumType = enumType;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        _this._values = [];
        if (!values) {
            // eslint-disable-next-line guard-for-in
            for (var key in enumType) {
                var keyAsNumber = parseInt(key, 10);
                if (keyAsNumber >= 0) {
                    _this._values.push({ value: keyAsNumber });
                }
            }
        }
        else {
            _this._values = values;
        }
        return _this;
    }
    EnumProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (typeof sourceValue !== "string") {
            return this.defaultValue;
        }
        var enumValue = utils.getEnumValueByName(this.enumType, sourceValue);
        if (enumValue !== undefined) {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === enumValue) {
                    var targetVersion = versionedValue.targetVersion
                        ? versionedValue.targetVersion
                        : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        return enumValue;
                    }
                    else {
                        context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.propertyValueNotSupported(sourceValue, this.name, targetVersion.toString(), context.targetVersion.toString()));
                        return this.defaultValue;
                    }
                }
            }
        }
        context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidPropertyValue(sourceValue, this.name));
        return this.defaultValue;
    };
    EnumProperty.prototype.toJSON = function (sender, target, value, context) {
        var invalidValue = false;
        if (value !== undefined) {
            invalidValue = true;
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === value) {
                    var targetVersion = versionedValue.targetVersion
                        ? versionedValue.targetVersion
                        : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        invalidValue = false;
                        break;
                    }
                    else {
                        context.logEvent(sender, enums.ValidationPhase.ToJSON, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidPropertyValue(value, this.name));
                    }
                }
            }
        }
        if (!invalidValue) {
            context.serializeEnum(this.enumType, target, this.name, value, this.defaultValue);
        }
    };
    Object.defineProperty(EnumProperty.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: false,
        configurable: true
    });
    return EnumProperty;
}(PropertyDefinition));
exports.EnumProperty = EnumProperty;
var SerializableObjectProperty = /** @class */ (function (_super) {
    __extends(SerializableObjectProperty, _super);
    function SerializableObjectProperty(targetVersion, name, objectType, nullable, defaultValue) {
        if (nullable === void 0) { nullable = false; }
        var _this = _super.call(this, targetVersion, name, defaultValue, function (sender) {
            return _this.nullable ? undefined : new _this.objectType();
        }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.objectType = objectType;
        _this.nullable = nullable;
        return _this;
    }
    SerializableObjectProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.onGetInitialValue ? this.onGetInitialValue(sender) : this.defaultValue;
        }
        var result = new this.objectType();
        result.parse(sourceValue, context);
        return result;
    };
    SerializableObjectProperty.prototype.toJSON = function (sender, target, value, context) {
        var serializedValue = undefined;
        if (value !== undefined && !value.hasAllDefaultValues()) {
            serializedValue = value.toJSON(context);
        }
        if (typeof serializedValue === "object" && Object.keys(serializedValue).length === 0) {
            serializedValue = undefined;
        }
        context.serializeValue(target, this.name, serializedValue, this.defaultValue, true);
    };
    return SerializableObjectProperty;
}(PropertyDefinition));
exports.SerializableObjectProperty = SerializableObjectProperty;
var SerializableObjectCollectionProperty = /** @class */ (function (_super) {
    __extends(SerializableObjectCollectionProperty, _super);
    function SerializableObjectCollectionProperty(targetVersion, name, objectType, onItemAdded) {
        var _this = _super.call(this, targetVersion, name, undefined, function (sender) {
            return [];
        }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.objectType = objectType;
        _this.onItemAdded = onItemAdded;
        return _this;
    }
    SerializableObjectCollectionProperty.prototype.parse = function (sender, source, context) {
        var result = [];
        var sourceCollection = source[this.name];
        if (Array.isArray(sourceCollection)) {
            for (var _i = 0, sourceCollection_1 = sourceCollection; _i < sourceCollection_1.length; _i++) {
                var sourceItem = sourceCollection_1[_i];
                var item = new this.objectType();
                item.parse(sourceItem, context);
                result.push(item);
                if (this.onItemAdded) {
                    this.onItemAdded(sender, item);
                }
            }
        }
        return result.length > 0
            ? result
            : this.onGetInitialValue
                ? this.onGetInitialValue(sender)
                : undefined;
    };
    SerializableObjectCollectionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeArray(target, this.name, value);
    };
    return SerializableObjectCollectionProperty;
}(PropertyDefinition));
exports.SerializableObjectCollectionProperty = SerializableObjectCollectionProperty;
var CustomProperty = /** @class */ (function (_super) {
    __extends(CustomProperty, _super);
    function CustomProperty(targetVersion, name, onParse, onToJSON, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.onParse = onParse;
        _this.onToJSON = onToJSON;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        if (!_this.onParse) {
            throw new Error("CustomPropertyDefinition instances must have an onParse handler.");
        }
        if (!_this.onToJSON) {
            throw new Error("CustomPropertyDefinition instances must have an onToJSON handler.");
        }
        return _this;
    }
    CustomProperty.prototype.parse = function (sender, source, context) {
        return this.onParse(sender, this, source, context);
    };
    CustomProperty.prototype.toJSON = function (sender, target, value, context) {
        this.onToJSON(sender, this, target, value, context);
    };
    return CustomProperty;
}(PropertyDefinition));
exports.CustomProperty = CustomProperty;
var SerializableObjectSchema = /** @class */ (function () {
    function SerializableObjectSchema() {
        this._properties = [];
    }
    SerializableObjectSchema.prototype.indexOf = function (prop) {
        for (var i = 0; i < this._properties.length; i++) {
            if (this._properties[i] === prop) {
                return i;
            }
        }
        return -1;
    };
    SerializableObjectSchema.prototype.add = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
            var prop = properties_1[_a];
            if (this.indexOf(prop) === -1) {
                this._properties.push(prop);
            }
        }
    };
    SerializableObjectSchema.prototype.remove = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        for (var _a = 0, properties_2 = properties; _a < properties_2.length; _a++) {
            var prop = properties_2[_a];
            while (true) {
                var index = this.indexOf(prop);
                if (index >= 0) {
                    this._properties.splice(index, 1);
                }
                else {
                    break;
                }
            }
        }
    };
    SerializableObjectSchema.prototype.getItemAt = function (index) {
        return this._properties[index];
    };
    SerializableObjectSchema.prototype.getCount = function () {
        return this._properties.length;
    };
    return SerializableObjectSchema;
}());
exports.SerializableObjectSchema = SerializableObjectSchema;
// This is a decorator function, used to map SerializableObject descendant class members to
// schema properties
function property(prop) {
    return function (target, propertyKey) {
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (!descriptor.get && !descriptor.set) {
            descriptor.get = function () {
                return this.getValue(prop);
            };
            descriptor.set = function (value) {
                this.setValue(prop, value);
            };
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}
exports.property = property;
var SerializableObject = /** @class */ (function () {
    function SerializableObject() {
        this._propertyBag = {};
        this._rawProperties = {};
        this.maxVersion = SerializableObject.defaultMaxVersion;
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            if (prop.onGetInitialValue) {
                this.setValue(prop, prop.onGetInitialValue(this));
            }
        }
    }
    SerializableObject.prototype.getDefaultSerializationContext = function () {
        return new SimpleSerializationContext();
    };
    SerializableObject.prototype.populateSchema = function (schema) {
        var ctor = this.constructor;
        var properties = [];
        // eslint-disable-next-line guard-for-in
        for (var propertyName in ctor) {
            try {
                var propertyValue = ctor[propertyName];
                if (propertyValue instanceof PropertyDefinition) {
                    properties.push(propertyValue);
                }
            }
            catch (_a) {
                // If a property happens to have a getter function and
                // it throws an exception, we need to catch it here
            }
        }
        if (properties.length > 0) {
            var sortedProperties = properties.sort(function (p1, p2) {
                if (p1.sequentialNumber > p2.sequentialNumber) {
                    return 1;
                }
                else if (p1.sequentialNumber < p2.sequentialNumber) {
                    return -1;
                }
                return 0;
            });
            schema.add.apply(schema, sortedProperties);
        }
        if (SerializableObject.onRegisterCustomProperties) {
            SerializableObject.onRegisterCustomProperties(this, schema);
        }
    };
    SerializableObject.prototype.getValue = function (prop) {
        return this._propertyBag.hasOwnProperty(prop.getInternalName())
            ? this._propertyBag[prop.getInternalName()]
            : prop.defaultValue;
    };
    SerializableObject.prototype.setValue = function (prop, value) {
        if (value === undefined || value === null) {
            delete this._propertyBag[prop.getInternalName()];
        }
        else {
            this._propertyBag[prop.getInternalName()] = value;
        }
    };
    SerializableObject.prototype.internalParse = function (source, context) {
        this._propertyBag = {};
        this._rawProperties = shared.GlobalSettings.enableFullJsonRoundTrip ? (source ? source : {}) : {};
        if (source) {
            var s = this.getSchema();
            for (var i = 0; i < s.getCount(); i++) {
                var prop = s.getItemAt(i);
                if (prop.isSerializationEnabled) {
                    var propertyValue = prop.onGetInitialValue
                        ? prop.onGetInitialValue(this)
                        : undefined;
                    if (source.hasOwnProperty(prop.name)) {
                        if (prop.targetVersion.compareTo(context.targetVersion) <= 0) {
                            propertyValue = prop.parse(this, source, context);
                        }
                        else {
                            context.logParseEvent(this, enums.ValidationEvent.UnsupportedProperty, strings.Strings.errors.propertyNotSupported(prop.name, prop.targetVersion.toString(), context.targetVersion.toString()));
                        }
                    }
                    this.setValue(prop, propertyValue);
                }
            }
        }
        else {
            this.resetDefaultValues();
        }
    };
    SerializableObject.prototype.internalToJSON = function (target, context) {
        var s = this.getSchema();
        var serializedProperties = [];
        for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            // Avoid serializing the same property multiple times. This is necessary
            // because some property definitions map to the same underlying schema
            // property
            if (prop.isSerializationEnabled &&
                prop.targetVersion.compareTo(context.targetVersion) <= 0 &&
                serializedProperties.indexOf(prop.name) === -1) {
                prop.toJSON(this, target, this.getValue(prop), context);
                serializedProperties.push(prop.name);
            }
        }
    };
    SerializableObject.prototype.shouldSerialize = function (_context) {
        return true;
    };
    SerializableObject.prototype.parse = function (source, context) {
        this.internalParse(source, context ? context : new SimpleSerializationContext());
    };
    SerializableObject.prototype.toJSON = function (context) {
        var effectiveContext;
        if (context && context instanceof BaseSerializationContext) {
            effectiveContext = context;
        }
        else {
            effectiveContext = this.getDefaultSerializationContext();
            effectiveContext.toJSONOriginalParam = context;
        }
        if (this.shouldSerialize(effectiveContext)) {
            var result = void 0;
            if (shared.GlobalSettings.enableFullJsonRoundTrip &&
                this._rawProperties &&
                typeof this._rawProperties === "object") {
                result = this._rawProperties;
            }
            else {
                result = {};
            }
            this.internalToJSON(result, effectiveContext);
            return result;
        }
        else {
            return undefined;
        }
    };
    SerializableObject.prototype.hasDefaultValue = function (prop) {
        return this.getValue(prop) === prop.defaultValue;
    };
    SerializableObject.prototype.hasAllDefaultValues = function () {
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            if (!this.hasDefaultValue(prop)) {
                return false;
            }
        }
        return true;
    };
    SerializableObject.prototype.resetDefaultValues = function () {
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            this.setValue(prop, prop.defaultValue);
        }
    };
    SerializableObject.prototype.setCustomProperty = function (name, value) {
        var shouldDeleteProperty = (typeof value === "string" && !value) || value === undefined || value === null;
        if (shouldDeleteProperty) {
            delete this._rawProperties[name];
        }
        else {
            this._rawProperties[name] = value;
        }
    };
    SerializableObject.prototype.getCustomProperty = function (name) {
        return this._rawProperties[name];
    };
    SerializableObject.prototype.getSchema = function () {
        var schema = SerializableObject._schemaCache[this.getSchemaKey()];
        if (!schema) {
            schema = new SerializableObjectSchema();
            this.populateSchema(schema);
            SerializableObject._schemaCache[this.getSchemaKey()] = schema;
        }
        return schema;
    };
    SerializableObject.defaultMaxVersion = Versions.latest;
    SerializableObject._schemaCache = {};
    return SerializableObject;
}());
exports.SerializableObject = SerializableObject;
//# sourceMappingURL=serialization.js.map
});

var hostCapabilities = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostCapabilities = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

var HostCapabilities = /** @class */ (function (_super) {
    __extends(HostCapabilities, _super);
    function HostCapabilities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._capabilities = {};
        return _this;
    }
    HostCapabilities.prototype.getSchemaKey = function () {
        return "HostCapabilities";
    };
    HostCapabilities.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        if (source) {
            // eslint-disable-next-line guard-for-in
            for (var name_1 in source) {
                var jsonVersion = source[name_1];
                if (typeof jsonVersion === "string") {
                    if (jsonVersion === "*") {
                        this.addCapability(name_1, "*");
                    }
                    else {
                        var version = serialization.Version.parse(jsonVersion, context);
                        if (version === null || version === void 0 ? void 0 : version.isValid) {
                            this.addCapability(name_1, version);
                        }
                    }
                }
            }
        }
    };
    HostCapabilities.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        // eslint-disable-next-line guard-for-in
        for (var key in this._capabilities) {
            target[key] = this._capabilities[key];
        }
    };
    HostCapabilities.prototype.addCapability = function (name, version) {
        this._capabilities[name] = version;
    };
    HostCapabilities.prototype.removeCapability = function (name) {
        delete this._capabilities[name];
    };
    HostCapabilities.prototype.clear = function () {
        this._capabilities = {};
    };
    HostCapabilities.prototype.hasCapability = function (name, version) {
        if (this._capabilities.hasOwnProperty(name)) {
            if (version === "*" || this._capabilities[name] === "*") {
                return true;
            }
            return version.compareTo(this._capabilities[name]) <= 0;
        }
        return false;
    };
    HostCapabilities.prototype.areAllMet = function (hostCapabilities) {
        for (var capabilityName in this._capabilities) {
            if (!hostCapabilities.hasCapability(capabilityName, this._capabilities[capabilityName])) {
                return false;
            }
        }
        return true;
    };
    return HostCapabilities;
}(serialization.SerializableObject));
exports.HostCapabilities = HostCapabilities;
//# sourceMappingURL=host-capabilities.js.map
});

var hostConfig = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHostConfig = exports.HostConfig = exports.CarouselConfig = exports.FontTypeSet = exports.FontTypeDefinition = exports.ContainerStyleSet = exports.ContainerStyleDefinition = exports.ColorSetDefinition = exports.ActionsConfig = exports.ShowCardActionConfig = exports.FactSetConfig = exports.FactTitleDefinition = exports.FactTextDefinition = exports.InputConfig = exports.InputLabelConfig = exports.RequiredInputLabelTextDefinition = exports.TextBlockConfig = exports.TextStyleSet = exports.TextStyleDefinition = exports.BaseTextDefinition = exports.TableConfig = exports.MediaConfig = exports.ImageSetConfig = exports.AdaptiveCardConfig = exports.TextColorDefinition = exports.ColorDefinition = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.




function parseHostConfigEnum(targetEnum, value, defaultValue) {
    if (typeof value === "string") {
        var parsedValue = utils.parseEnum(targetEnum, value, defaultValue);
        return parsedValue !== undefined ? parsedValue : defaultValue;
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return defaultValue;
    }
}
var ColorDefinition = /** @class */ (function () {
    function ColorDefinition(defaultColor, subtleColor) {
        this.default = "#000000";
        this.subtle = "#666666";
        if (defaultColor) {
            this.default = defaultColor;
        }
        if (subtleColor) {
            this.subtle = subtleColor;
        }
    }
    ColorDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.default = obj["default"] || this.default;
            this.subtle = obj["subtle"] || this.subtle;
        }
    };
    return ColorDefinition;
}());
exports.ColorDefinition = ColorDefinition;
var TextColorDefinition = /** @class */ (function (_super) {
    __extends(TextColorDefinition, _super);
    function TextColorDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.highlightColors = new ColorDefinition("#22000000", "#11000000");
        return _this;
    }
    TextColorDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.highlightColors.parse(obj["highlightColors"]);
        }
    };
    return TextColorDefinition;
}(ColorDefinition));
exports.TextColorDefinition = TextColorDefinition;
var AdaptiveCardConfig = /** @class */ (function () {
    function AdaptiveCardConfig(obj) {
        this.allowCustomStyle = false;
        if (obj) {
            this.allowCustomStyle = obj["allowCustomStyle"] || this.allowCustomStyle;
        }
    }
    return AdaptiveCardConfig;
}());
exports.AdaptiveCardConfig = AdaptiveCardConfig;
var ImageSetConfig = /** @class */ (function () {
    function ImageSetConfig(obj) {
        this.imageSize = enums.Size.Medium;
        this.maxImageHeight = 100;
        if (obj) {
            this.imageSize = obj["imageSize"] != null ? obj["imageSize"] : this.imageSize;
            this.maxImageHeight = utils.parseNumber(obj["maxImageHeight"], 100);
        }
    }
    ImageSetConfig.prototype.toJSON = function () {
        return {
            imageSize: enums.Size[this.imageSize],
            maxImageHeight: this.maxImageHeight
        };
    };
    return ImageSetConfig;
}());
exports.ImageSetConfig = ImageSetConfig;
var MediaConfig = /** @class */ (function () {
    function MediaConfig(obj) {
        this.allowInlinePlayback = true;
        if (obj) {
            this.defaultPoster = obj["defaultPoster"];
            this.allowInlinePlayback = obj["allowInlinePlayback"] || this.allowInlinePlayback;
        }
    }
    MediaConfig.prototype.toJSON = function () {
        return {
            defaultPoster: this.defaultPoster,
            allowInlinePlayback: this.allowInlinePlayback
        };
    };
    return MediaConfig;
}());
exports.MediaConfig = MediaConfig;
var TableConfig = /** @class */ (function () {
    function TableConfig(obj) {
        this.cellSpacing = 8;
        if (obj) {
            this.cellSpacing =
                obj.cellSpacing && typeof obj.cellSpacing === "number"
                    ? obj.cellSpacing
                    : this.cellSpacing;
        }
    }
    TableConfig.prototype.toJSON = function () {
        return {
            cellSpacing: this.cellSpacing
        };
    };
    return TableConfig;
}());
exports.TableConfig = TableConfig;
var BaseTextDefinition = /** @class */ (function () {
    function BaseTextDefinition(obj) {
        this.size = enums.TextSize.Default;
        this.color = enums.TextColor.Default;
        this.isSubtle = false;
        this.weight = enums.TextWeight.Default;
        this.parse(obj);
    }
    BaseTextDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.size = parseHostConfigEnum(enums.TextSize, obj["size"], this.size);
            this.color = parseHostConfigEnum(enums.TextColor, obj["color"], this.color);
            this.isSubtle =
                obj.isSubtle !== undefined && typeof obj.isSubtle === "boolean"
                    ? obj.isSubtle
                    : this.isSubtle;
            this.weight = parseHostConfigEnum(enums.TextWeight, obj["weight"], this.getDefaultWeight());
        }
    };
    BaseTextDefinition.prototype.getDefaultWeight = function () {
        return enums.TextWeight.Default;
    };
    BaseTextDefinition.prototype.toJSON = function () {
        return {
            size: enums.TextSize[this.size],
            color: enums.TextColor[this.color],
            isSubtle: this.isSubtle,
            weight: enums.TextWeight[this.weight]
        };
    };
    return BaseTextDefinition;
}());
exports.BaseTextDefinition = BaseTextDefinition;
var TextStyleDefinition = /** @class */ (function (_super) {
    __extends(TextStyleDefinition, _super);
    function TextStyleDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fontType = enums.FontType.Default;
        return _this;
    }
    TextStyleDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.fontType = parseHostConfigEnum(enums.FontType, obj.fontType, this.fontType);
        }
    };
    return TextStyleDefinition;
}(BaseTextDefinition));
exports.TextStyleDefinition = TextStyleDefinition;
var TextStyleSet = /** @class */ (function () {
    function TextStyleSet(obj) {
        this.default = new TextStyleDefinition();
        this.heading = new TextStyleDefinition({
            size: "Large",
            weight: "Bolder"
        });
        this.columnHeader = new TextStyleDefinition({
            weight: "Bolder"
        });
        if (obj) {
            this.heading.parse(obj.heading);
            this.columnHeader.parse(obj.columnHeader);
        }
    }
    TextStyleSet.prototype.getStyleByName = function (name) {
        switch (name.toLowerCase()) {
            case "heading":
                return this.heading;
            case "columnHeader":
                return this.columnHeader;
            default:
                return this.default;
        }
    };
    return TextStyleSet;
}());
exports.TextStyleSet = TextStyleSet;
var TextBlockConfig = /** @class */ (function () {
    function TextBlockConfig(obj) {
        if (obj) {
            this.headingLevel = utils.parseNumber(obj.headingLevel);
        }
    }
    return TextBlockConfig;
}());
exports.TextBlockConfig = TextBlockConfig;
var RequiredInputLabelTextDefinition = /** @class */ (function (_super) {
    __extends(RequiredInputLabelTextDefinition, _super);
    function RequiredInputLabelTextDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suffix = " *";
        _this.suffixColor = enums.TextColor.Attention;
        return _this;
    }
    RequiredInputLabelTextDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.suffix = obj["suffix"] || this.suffix;
            this.suffixColor = parseHostConfigEnum(enums.TextColor, obj["suffixColor"], this.suffixColor);
        }
    };
    RequiredInputLabelTextDefinition.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        result["suffix"] = this.suffix;
        result["suffixColor"] = enums.TextColor[this.suffixColor];
        return result;
    };
    return RequiredInputLabelTextDefinition;
}(BaseTextDefinition));
exports.RequiredInputLabelTextDefinition = RequiredInputLabelTextDefinition;
var InputLabelConfig = /** @class */ (function () {
    function InputLabelConfig(obj) {
        this.inputSpacing = enums.Spacing.Small;
        this.width = 30;
        this.requiredInputs = new RequiredInputLabelTextDefinition();
        this.optionalInputs = new BaseTextDefinition();
        if (obj) {
            this.inputSpacing = parseHostConfigEnum(enums.Spacing, obj["inputSpacing"], this.inputSpacing);
            this.requiredInputs = new RequiredInputLabelTextDefinition(obj["requiredInputs"]);
            this.optionalInputs = new BaseTextDefinition(obj["optionalInputs"]);
            this.width =
                obj["width"] != null ? obj["width"] : this.width;
        }
    }
    return InputLabelConfig;
}());
exports.InputLabelConfig = InputLabelConfig;
var InputConfig = /** @class */ (function () {
    function InputConfig(obj) {
        this.label = new InputLabelConfig();
        this.errorMessage = new BaseTextDefinition({
            color: enums.TextColor.Attention
        });
        if (obj) {
            this.label = new InputLabelConfig(obj["label"]);
            this.errorMessage = new BaseTextDefinition(obj["errorMessage"]);
        }
    }
    return InputConfig;
}());
exports.InputConfig = InputConfig;
var FactTextDefinition = /** @class */ (function (_super) {
    __extends(FactTextDefinition, _super);
    function FactTextDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = true;
        return _this;
    }
    FactTextDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.wrap = obj["wrap"] != null ? obj["wrap"] : this.wrap;
        }
    };
    FactTextDefinition.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        result["wrap"] = this.wrap;
        return result;
    };
    return FactTextDefinition;
}(BaseTextDefinition));
exports.FactTextDefinition = FactTextDefinition;
var FactTitleDefinition = /** @class */ (function (_super) {
    __extends(FactTitleDefinition, _super);
    function FactTitleDefinition(obj) {
        var _this = _super.call(this, obj) || this;
        _this.maxWidth = 150;
        _this.weight = enums.TextWeight.Bolder;
        if (obj) {
            _this.maxWidth = obj["maxWidth"] != null ? obj["maxWidth"] : _this.maxWidth;
            _this.weight = parseHostConfigEnum(enums.TextWeight, obj["weight"], enums.TextWeight.Bolder);
        }
        return _this;
    }
    FactTitleDefinition.prototype.getDefaultWeight = function () {
        return enums.TextWeight.Bolder;
    };
    return FactTitleDefinition;
}(FactTextDefinition));
exports.FactTitleDefinition = FactTitleDefinition;
var FactSetConfig = /** @class */ (function () {
    function FactSetConfig(obj) {
        this.title = new FactTitleDefinition();
        this.value = new FactTextDefinition();
        this.spacing = 10;
        if (obj) {
            this.title = new FactTitleDefinition(obj["title"]);
            this.value = new FactTextDefinition(obj["value"]);
            this.spacing =
                obj.spacing && obj.spacing != null ? obj.spacing && obj.spacing : this.spacing;
        }
    }
    return FactSetConfig;
}());
exports.FactSetConfig = FactSetConfig;
var ShowCardActionConfig = /** @class */ (function () {
    function ShowCardActionConfig(obj) {
        this.actionMode = enums.ShowCardActionMode.Inline;
        this.inlineTopMargin = 16;
        this.style = enums.ContainerStyle.Emphasis;
        if (obj) {
            this.actionMode = parseHostConfigEnum(enums.ShowCardActionMode, obj["actionMode"], enums.ShowCardActionMode.Inline);
            this.inlineTopMargin =
                obj["inlineTopMargin"] != null ? obj["inlineTopMargin"] : this.inlineTopMargin;
            this.style =
                obj["style"] && typeof obj["style"] === "string"
                    ? obj["style"]
                    : enums.ContainerStyle.Emphasis;
        }
    }
    ShowCardActionConfig.prototype.toJSON = function () {
        return {
            actionMode: enums.ShowCardActionMode[this.actionMode],
            inlineTopMargin: this.inlineTopMargin,
            style: this.style
        };
    };
    return ShowCardActionConfig;
}());
exports.ShowCardActionConfig = ShowCardActionConfig;
var ActionsConfig = /** @class */ (function () {
    function ActionsConfig(obj) {
        this.maxActions = 5;
        this.spacing = enums.Spacing.Default;
        this.buttonSpacing = 20;
        this.showCard = new ShowCardActionConfig();
        this.preExpandSingleShowCardAction = false;
        this.actionsOrientation = enums.Orientation.Horizontal;
        this.actionAlignment = enums.ActionAlignment.Left;
        this.iconPlacement = enums.ActionIconPlacement.LeftOfTitle;
        this.allowTitleToWrap = false;
        this.iconSize = 16;
        if (obj) {
            this.maxActions = obj["maxActions"] != null ? obj["maxActions"] : this.maxActions;
            this.spacing = parseHostConfigEnum(enums.Spacing, obj.spacing && obj.spacing, enums.Spacing.Default);
            this.buttonSpacing =
                obj["buttonSpacing"] != null ? obj["buttonSpacing"] : this.buttonSpacing;
            this.showCard = new ShowCardActionConfig(obj["showCard"]);
            this.preExpandSingleShowCardAction = utils.parseBool(obj["preExpandSingleShowCardAction"], false);
            this.actionsOrientation = parseHostConfigEnum(enums.Orientation, obj["actionsOrientation"], enums.Orientation.Horizontal);
            this.actionAlignment = parseHostConfigEnum(enums.ActionAlignment, obj["actionAlignment"], enums.ActionAlignment.Left);
            this.iconPlacement = parseHostConfigEnum(enums.ActionIconPlacement, obj["iconPlacement"], enums.ActionIconPlacement.LeftOfTitle);
            this.allowTitleToWrap =
                obj["allowTitleToWrap"] != null ? obj["allowTitleToWrap"] : this.allowTitleToWrap;
            try {
                var sizeAndUnit = shared.SizeAndUnit.parse(obj["iconSize"]);
                if (sizeAndUnit.unit === enums.SizeUnit.Pixel) {
                    this.iconSize = sizeAndUnit.physicalSize;
                }
            }
            catch (e) {
                // Swallow this, keep default icon size
            }
        }
    }
    ActionsConfig.prototype.toJSON = function () {
        return {
            maxActions: this.maxActions,
            spacing: enums.Spacing[this.spacing],
            buttonSpacing: this.buttonSpacing,
            showCard: this.showCard,
            preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
            actionsOrientation: enums.Orientation[this.actionsOrientation],
            actionAlignment: enums.ActionAlignment[this.actionAlignment]
        };
    };
    return ActionsConfig;
}());
exports.ActionsConfig = ActionsConfig;
var ColorSetDefinition = /** @class */ (function () {
    function ColorSetDefinition(obj) {
        this.default = new TextColorDefinition();
        this.dark = new TextColorDefinition();
        this.light = new TextColorDefinition();
        this.accent = new TextColorDefinition();
        this.good = new TextColorDefinition();
        this.warning = new TextColorDefinition();
        this.attention = new TextColorDefinition();
        this.parse(obj);
    }
    ColorSetDefinition.prototype.parseSingleColor = function (obj, propertyName) {
        if (obj) {
            this[propertyName].parse(obj[propertyName]);
        }
    };
    ColorSetDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.parseSingleColor(obj, "default");
            this.parseSingleColor(obj, "dark");
            this.parseSingleColor(obj, "light");
            this.parseSingleColor(obj, "accent");
            this.parseSingleColor(obj, "good");
            this.parseSingleColor(obj, "warning");
            this.parseSingleColor(obj, "attention");
        }
    };
    return ColorSetDefinition;
}());
exports.ColorSetDefinition = ColorSetDefinition;
var ContainerStyleDefinition = /** @class */ (function () {
    function ContainerStyleDefinition(obj) {
        this.foregroundColors = new ColorSetDefinition({
            "default": { default: "#333333", subtle: "#EE333333" },
            "dark": { default: "#000000", subtle: "#66000000" },
            "light": { default: "#FFFFFF", subtle: "#33000000" },
            "accent": { default: "#2E89FC", subtle: "#882E89FC" },
            "good": { default: "#028A02", subtle: "#DD027502" },
            "warning": { default: "#E69500", subtle: "#DDE69500" },
            "attention": { default: "#CC3300", subtle: "#DDCC3300" }
        });
        this.parse(obj);
    }
    ContainerStyleDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.backgroundColor = obj["backgroundColor"];
            this.foregroundColors.parse(obj["foregroundColors"]);
            this.highlightBackgroundColor = obj["highlightBackgroundColor"];
            this.highlightForegroundColor = obj["highlightForegroundColor"];
            this.borderColor = obj["borderColor"];
        }
    };
    Object.defineProperty(ContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerStyleDefinition;
}());
exports.ContainerStyleDefinition = ContainerStyleDefinition;
var BuiltInContainerStyleDefinition = /** @class */ (function (_super) {
    __extends(BuiltInContainerStyleDefinition, _super);
    function BuiltInContainerStyleDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuiltInContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return BuiltInContainerStyleDefinition;
}(ContainerStyleDefinition));
var ContainerStyleSet = /** @class */ (function () {
    function ContainerStyleSet(obj) {
        this._allStyles = {};
        this._allStyles[enums.ContainerStyle.Default] = new BuiltInContainerStyleDefinition();
        this._allStyles[enums.ContainerStyle.Emphasis] = new BuiltInContainerStyleDefinition();
        this._allStyles[enums.ContainerStyle.Accent] = new BuiltInContainerStyleDefinition();
        this._allStyles[enums.ContainerStyle.Good] = new BuiltInContainerStyleDefinition();
        this._allStyles[enums.ContainerStyle.Attention] = new BuiltInContainerStyleDefinition();
        this._allStyles[enums.ContainerStyle.Warning] = new BuiltInContainerStyleDefinition();
        if (obj) {
            this._allStyles[enums.ContainerStyle.Default].parse(obj[enums.ContainerStyle.Default]);
            this._allStyles[enums.ContainerStyle.Emphasis].parse(obj[enums.ContainerStyle.Emphasis]);
            this._allStyles[enums.ContainerStyle.Accent].parse(obj[enums.ContainerStyle.Accent]);
            this._allStyles[enums.ContainerStyle.Good].parse(obj[enums.ContainerStyle.Good]);
            this._allStyles[enums.ContainerStyle.Attention].parse(obj[enums.ContainerStyle.Attention]);
            this._allStyles[enums.ContainerStyle.Warning].parse(obj[enums.ContainerStyle.Warning]);
            var customStyleArray = obj["customStyles"];
            if (customStyleArray && Array.isArray(customStyleArray)) {
                for (var _i = 0, customStyleArray_1 = customStyleArray; _i < customStyleArray_1.length; _i++) {
                    var customStyle = customStyleArray_1[_i];
                    if (customStyle) {
                        var styleName = customStyle["name"];
                        if (styleName && typeof styleName === "string") {
                            if (this._allStyles.hasOwnProperty(styleName)) {
                                this._allStyles[styleName].parse(customStyle["style"]);
                            }
                            else {
                                this._allStyles[styleName] = new ContainerStyleDefinition(customStyle["style"]);
                            }
                        }
                    }
                }
            }
        }
    }
    ContainerStyleSet.prototype.toJSON = function () {
        var _this = this;
        var customStyleArray = [];
        Object.keys(this._allStyles).forEach(function (key) {
            if (!_this._allStyles[key].isBuiltIn) {
                customStyleArray.push({
                    name: key,
                    style: _this._allStyles[key]
                });
            }
        });
        var result = {
            default: this.default,
            emphasis: this.emphasis
        };
        if (customStyleArray.length > 0) {
            result.customStyles = customStyleArray;
        }
        return result;
    };
    ContainerStyleSet.prototype.getStyleByName = function (name, defaultValue) {
        if (name && this._allStyles.hasOwnProperty(name)) {
            return this._allStyles[name];
        }
        else {
            return defaultValue ? defaultValue : this._allStyles[enums.ContainerStyle.Default];
        }
    };
    Object.defineProperty(ContainerStyleSet.prototype, "default", {
        get: function () {
            return this._allStyles[enums.ContainerStyle.Default];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerStyleSet.prototype, "emphasis", {
        get: function () {
            return this._allStyles[enums.ContainerStyle.Emphasis];
        },
        enumerable: false,
        configurable: true
    });
    return ContainerStyleSet;
}());
exports.ContainerStyleSet = ContainerStyleSet;
var FontTypeDefinition = /** @class */ (function () {
    function FontTypeDefinition(fontFamily) {
        this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif";
        this.fontSizes = {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
        };
        this.fontWeights = {
            lighter: 200,
            default: 400,
            bolder: 600
        };
        if (fontFamily) {
            this.fontFamily = fontFamily;
        }
    }
    FontTypeDefinition.prototype.parse = function (obj) {
        this.fontFamily = obj["fontFamily"] || this.fontFamily;
        this.fontSizes = {
            small: (obj.fontSizes && obj.fontSizes["small"]) || this.fontSizes.small,
            default: (obj.fontSizes && obj.fontSizes["default"]) || this.fontSizes.default,
            medium: (obj.fontSizes && obj.fontSizes["medium"]) || this.fontSizes.medium,
            large: (obj.fontSizes && obj.fontSizes["large"]) || this.fontSizes.large,
            extraLarge: (obj.fontSizes && obj.fontSizes["extraLarge"]) || this.fontSizes.extraLarge
        };
        this.fontWeights = {
            lighter: (obj.fontWeights && obj.fontWeights["lighter"]) || this.fontWeights.lighter,
            default: (obj.fontWeights && obj.fontWeights["default"]) || this.fontWeights.default,
            bolder: (obj.fontWeights && obj.fontWeights["bolder"]) || this.fontWeights.bolder
        };
    };
    FontTypeDefinition.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
    return FontTypeDefinition;
}());
exports.FontTypeDefinition = FontTypeDefinition;
var FontTypeSet = /** @class */ (function () {
    function FontTypeSet(obj) {
        this.default = new FontTypeDefinition();
        this.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
        if (obj) {
            this.default.parse(obj["default"]);
            this.monospace.parse(obj["monospace"]);
        }
    }
    FontTypeSet.prototype.getStyleDefinition = function (style) {
        switch (style) {
            case enums.FontType.Monospace:
                return this.monospace;
            case enums.FontType.Default:
            default:
                return this.default;
        }
    };
    return FontTypeSet;
}());
exports.FontTypeSet = FontTypeSet;
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig(obj) {
        this.maxCarouselPages = 10;
        this.minAutoplayDelay = 5000.0;
        if (obj) {
            this.maxCarouselPages =
                obj["maxCarouselPages"] != null ? obj["maxCarouselPages"] : this.maxCarouselPages;
            this.minAutoplayDelay =
                obj["minAutoplayDelay"] != null ? obj["minAutoplayDelay"] : this.minAutoplayDelay;
        }
    }
    CarouselConfig.prototype.toJSON = function () {
        return {
            maxCarouselPages: this.maxCarouselPages,
            minAutoplayDelay: this.minAutoplayDelay
        };
    };
    return CarouselConfig;
}());
exports.CarouselConfig = CarouselConfig;
var HostConfig = /** @class */ (function () {
    function HostConfig(obj) {
        this.hostCapabilities = new hostCapabilities.HostCapabilities();
        this.choiceSetInputValueSeparator = ",";
        this.supportsInteractivity = true;
        this.spacing = {
            small: 3,
            default: 8,
            medium: 20,
            large: 30,
            extraLarge: 40,
            padding: 15
        };
        this.separator = {
            lineThickness: 1,
            lineColor: "#EEEEEE"
        };
        this.imageSizes = {
            small: 40,
            medium: 80,
            large: 160
        };
        this.containerStyles = new ContainerStyleSet();
        this.inputs = new InputConfig();
        this.actions = new ActionsConfig();
        this.adaptiveCard = new AdaptiveCardConfig();
        this.imageSet = new ImageSetConfig();
        this.media = new MediaConfig();
        this.factSet = new FactSetConfig();
        this.table = new TableConfig();
        this.textStyles = new TextStyleSet();
        this.textBlock = new TextBlockConfig();
        this.carousel = new CarouselConfig();
        this.alwaysAllowBleed = false;
        if (obj) {
            if (typeof obj === "string" || obj instanceof String) {
                obj = JSON.parse(obj);
            }
            this.choiceSetInputValueSeparator =
                obj && typeof obj["choiceSetInputValueSeparator"] === "string"
                    ? obj["choiceSetInputValueSeparator"]
                    : this.choiceSetInputValueSeparator;
            this.supportsInteractivity =
                obj && typeof obj["supportsInteractivity"] === "boolean"
                    ? obj["supportsInteractivity"]
                    : this.supportsInteractivity;
            this._legacyFontType = new FontTypeDefinition();
            this._legacyFontType.parse(obj);
            if (obj.fontTypes) {
                this.fontTypes = new FontTypeSet(obj.fontTypes);
            }
            if (obj.lineHeights) {
                this.lineHeights = {
                    small: obj.lineHeights["small"],
                    default: obj.lineHeights["default"],
                    medium: obj.lineHeights["medium"],
                    large: obj.lineHeights["large"],
                    extraLarge: obj.lineHeights["extraLarge"]
                };
            }
            this.imageSizes = {
                small: (obj.imageSizes && obj.imageSizes["small"]) || this.imageSizes.small,
                medium: (obj.imageSizes && obj.imageSizes["medium"]) || this.imageSizes.medium,
                large: (obj.imageSizes && obj.imageSizes["large"]) || this.imageSizes.large
            };
            this.containerStyles = new ContainerStyleSet(obj["containerStyles"]);
            this.spacing = {
                small: (obj.spacing && obj.spacing["small"]) || this.spacing.small,
                default: (obj.spacing && obj.spacing["default"]) || this.spacing.default,
                medium: (obj.spacing && obj.spacing["medium"]) || this.spacing.medium,
                large: (obj.spacing && obj.spacing["large"]) || this.spacing.large,
                extraLarge: (obj.spacing && obj.spacing["extraLarge"]) || this.spacing.extraLarge,
                padding: (obj.spacing && obj.spacing["padding"]) || this.spacing.padding
            };
            this.separator = {
                lineThickness: (obj.separator && obj.separator["lineThickness"]) ||
                    this.separator.lineThickness,
                lineColor: (obj.separator && obj.separator["lineColor"]) || this.separator.lineColor
            };
            this.inputs = new InputConfig(obj.inputs || this.inputs);
            this.actions = new ActionsConfig(obj.actions || this.actions);
            this.adaptiveCard = new AdaptiveCardConfig(obj.adaptiveCard || this.adaptiveCard);
            this.imageSet = new ImageSetConfig(obj["imageSet"]);
            this.factSet = new FactSetConfig(obj["factSet"]);
            this.textStyles = new TextStyleSet(obj["textStyles"]);
            this.textBlock = new TextBlockConfig(obj["textBlock"]);
            this.carousel = new CarouselConfig(obj["carousel"]);
        }
    }
    HostConfig.prototype.getFontTypeDefinition = function (style) {
        if (this.fontTypes) {
            return this.fontTypes.getStyleDefinition(style);
        }
        else {
            return style === enums.FontType.Monospace
                ? FontTypeDefinition.monospace
                : this._legacyFontType;
        }
    };
    HostConfig.prototype.getEffectiveSpacing = function (spacing) {
        switch (spacing) {
            case enums.Spacing.Small:
                return this.spacing.small;
            case enums.Spacing.Default:
                return this.spacing.default;
            case enums.Spacing.Medium:
                return this.spacing.medium;
            case enums.Spacing.Large:
                return this.spacing.large;
            case enums.Spacing.ExtraLarge:
                return this.spacing.extraLarge;
            case enums.Spacing.Padding:
                return this.spacing.padding;
            default:
                return 0;
        }
    };
    HostConfig.prototype.paddingDefinitionToSpacingDefinition = function (paddingDefinition) {
        return new shared.SpacingDefinition(this.getEffectiveSpacing(paddingDefinition.top), this.getEffectiveSpacing(paddingDefinition.right), this.getEffectiveSpacing(paddingDefinition.bottom), this.getEffectiveSpacing(paddingDefinition.left));
    };
    HostConfig.prototype.makeCssClassNames = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = [];
        for (var _a = 0, classNames_1 = classNames; _a < classNames_1.length; _a++) {
            var className = classNames_1[_a];
            result.push((this.cssClassNamePrefix ? this.cssClassNamePrefix + "-" : "") + className);
        }
        return result;
    };
    HostConfig.prototype.makeCssClassName = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = this.makeCssClassNames.apply(this, classNames).join(" ");
        return result ? result : "";
    };
    Object.defineProperty(HostConfig.prototype, "fontFamily", {
        get: function () {
            return this._legacyFontType.fontFamily;
        },
        set: function (value) {
            this._legacyFontType.fontFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontSizes", {
        get: function () {
            return this._legacyFontType.fontSizes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontWeights", {
        get: function () {
            return this._legacyFontType.fontWeights;
        },
        enumerable: false,
        configurable: true
    });
    return HostConfig;
}());
exports.HostConfig = HostConfig;
// eslint-disable-next-line @typescript-eslint/naming-convention
exports.defaultHostConfig = new HostConfig({
    supportsInteractivity: true,
    spacing: {
        small: 10,
        default: 20,
        medium: 30,
        large: 40,
        extraLarge: 50,
        padding: 20
    },
    separator: {
        lineThickness: 1,
        lineColor: "#EEEEEE"
    },
    fontTypes: {
        default: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        },
        monospace: {
            fontFamily: "'Courier New', Courier, monospace",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        }
    },
    imageSizes: {
        small: 40,
        medium: 80,
        large: 160
    },
    containerStyles: {
        default: {
            backgroundColor: "#FFFFFF",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        emphasis: {
            backgroundColor: "#08000000",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        accent: {
            backgroundColor: "#C7DEF9",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        good: {
            backgroundColor: "#CCFFCC",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        attention: {
            backgroundColor: "#FFC5B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        warning: {
            backgroundColor: "#FFE2B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        }
    },
    inputs: {
        label: {
            requiredInputs: {
                weight: enums.TextWeight.Bolder,
                suffix: " *",
                suffixColor: enums.TextColor.Attention
            },
            optionalInputs: {
                weight: enums.TextWeight.Bolder
            }
        },
        errorMessage: {
            color: enums.TextColor.Attention,
            weight: enums.TextWeight.Bolder
        }
    },
    actions: {
        maxActions: 5,
        spacing: enums.Spacing.Default,
        buttonSpacing: 10,
        showCard: {
            actionMode: enums.ShowCardActionMode.Inline,
            inlineTopMargin: 16
        },
        actionsOrientation: enums.Orientation.Horizontal,
        actionAlignment: enums.ActionAlignment.Left
    },
    adaptiveCard: {
        allowCustomStyle: false
    },
    imageSet: {
        imageSize: enums.Size.Medium,
        maxImageHeight: 100
    },
    factSet: {
        title: {
            color: enums.TextColor.Default,
            size: enums.TextSize.Default,
            isSubtle: false,
            weight: enums.TextWeight.Bolder,
            wrap: true,
            maxWidth: 150
        },
        value: {
            color: enums.TextColor.Default,
            size: enums.TextSize.Default,
            isSubtle: false,
            weight: enums.TextWeight.Default,
            wrap: true
        },
        spacing: 10
    },
    carousel: {
        maxCarouselPages: 10,
        minAutoplayDuration: 5000
    }
});
//# sourceMappingURL=host-config.js.map
});

var registry = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalRegistry = exports.CardObjectRegistry = void 0;

var CardObjectRegistry = /** @class */ (function () {
    function CardObjectRegistry() {
        this._items = {};
    }
    CardObjectRegistry.prototype.findByName = function (typeName) {
        return this._items.hasOwnProperty(typeName) ? this._items[typeName] : undefined;
    };
    CardObjectRegistry.prototype.clear = function () {
        this._items = {};
    };
    CardObjectRegistry.prototype.copyTo = function (target) {
        var keys = Object.keys(this._items);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var typeRegistration = this._items[key];
            target.register(typeRegistration.typeName, typeRegistration.objectType, typeRegistration.schemaVersion);
        }
    };
    CardObjectRegistry.prototype.register = function (typeName, objectType, schemaVersion) {
        if (schemaVersion === void 0) { schemaVersion = serialization.Versions.v1_0; }
        var registrationInfo = this.findByName(typeName);
        if (registrationInfo !== undefined) {
            registrationInfo.objectType = objectType;
        }
        else {
            registrationInfo = {
                typeName: typeName,
                objectType: objectType,
                schemaVersion: schemaVersion
            };
        }
        this._items[typeName] = registrationInfo;
    };
    CardObjectRegistry.prototype.unregister = function (typeName) {
        delete this._items[typeName];
    };
    CardObjectRegistry.prototype.createInstance = function (typeName, targetVersion) {
        var registrationInfo = this.findByName(typeName);
        return registrationInfo && registrationInfo.schemaVersion.compareTo(targetVersion) <= 0
            ? new registrationInfo.objectType()
            : undefined;
    };
    CardObjectRegistry.prototype.getItemCount = function () {
        return Object.keys(this._items).length;
    };
    CardObjectRegistry.prototype.getItemAt = function (index) {
        var _this = this;
        return Object.keys(this._items).map(function (e) { return _this._items[e]; })[index];
    };
    return CardObjectRegistry;
}());
exports.CardObjectRegistry = CardObjectRegistry;
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
var GlobalRegistry = /** @class */ (function () {
    function GlobalRegistry() {
    }
    GlobalRegistry.populateWithDefaultElements = function (registry) {
        registry.clear();
        GlobalRegistry.defaultElements.copyTo(registry);
    };
    GlobalRegistry.populateWithDefaultActions = function (registry) {
        registry.clear();
        GlobalRegistry.defaultActions.copyTo(registry);
    };
    Object.defineProperty(GlobalRegistry, "elements", {
        get: function () {
            if (!GlobalRegistry._elements) {
                GlobalRegistry._elements = new CardObjectRegistry();
                GlobalRegistry.populateWithDefaultElements(GlobalRegistry._elements);
            }
            return GlobalRegistry._elements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalRegistry, "actions", {
        get: function () {
            if (!GlobalRegistry._actions) {
                GlobalRegistry._actions = new CardObjectRegistry();
                GlobalRegistry.populateWithDefaultActions(GlobalRegistry._actions);
            }
            return GlobalRegistry._actions;
        },
        enumerable: false,
        configurable: true
    });
    GlobalRegistry.reset = function () {
        GlobalRegistry._elements = undefined;
        GlobalRegistry._actions = undefined;
    };
    GlobalRegistry.defaultElements = new CardObjectRegistry();
    GlobalRegistry.defaultActions = new CardObjectRegistry();
    return GlobalRegistry;
}());
exports.GlobalRegistry = GlobalRegistry;
//# sourceMappingURL=registry.js.map
});

var cardObject = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardObject = exports.ValidationResults = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.





var ValidationResults = /** @class */ (function () {
    function ValidationResults() {
        this.allIds = {};
        this.validationEvents = [];
    }
    ValidationResults.prototype.addFailure = function (cardObject, event, message) {
        this.validationEvents.push({
            phase: enums.ValidationPhase.Validation,
            source: cardObject,
            event: event,
            message: message
        });
    };
    return ValidationResults;
}());
exports.ValidationResults = ValidationResults;
var CardObject = /** @class */ (function (_super) {
    __extends(CardObject, _super);
    function CardObject() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //#endregion
        _this._shouldFallback = false;
        return _this;
    }
    CardObject.prototype.getSchemaKey = function () {
        return this.getJsonTypeName();
    };
    Object.defineProperty(CardObject.prototype, "requires", {
        get: function () {
            return this.getValue(CardObject.requiresProperty);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Checks if this CardObject contains the given DOM Node.
     * @param node The DOM Node to look for.
     * @returns `true` if the DOM Node was found, `false` otherwise.
     */
    CardObject.prototype.contains = function (node) {
        if (this._renderedElement) {
            return this._renderedElement.contains(node);
        }
        return false;
    };
    CardObject.prototype.preProcessPropertyValue = function (prop, propertyValue) {
        var value = propertyValue === undefined ? this.getValue(prop) : propertyValue;
        if (shared.GlobalSettings.allowPreProcessingPropertyValues) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var currentObject = this;
            while (currentObject && !currentObject.onPreProcessPropertyValue) {
                currentObject = currentObject.parent;
            }
            if (currentObject && currentObject.onPreProcessPropertyValue) {
                return currentObject.onPreProcessPropertyValue(this, prop, value);
            }
        }
        return value;
    };
    CardObject.prototype.setParent = function (value) {
        this._parent = value;
    };
    CardObject.prototype.setShouldFallback = function (value) {
        this._shouldFallback = value;
    };
    CardObject.prototype.shouldFallback = function () {
        return this._shouldFallback || !this.requires.areAllMet(this.hostConfig.hostCapabilities);
    };
    CardObject.prototype.getRootObject = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var currentObject = this;
        while (currentObject.parent) {
            currentObject = currentObject.parent;
        }
        return currentObject;
    };
    CardObject.prototype.internalValidateProperties = function (context) {
        if (this.id) {
            if (context.allIds.hasOwnProperty(this.id)) {
                if (context.allIds[this.id] === 1) {
                    context.addFailure(this, enums.ValidationEvent.DuplicateId, strings.Strings.errors.duplicateId(this.id));
                }
                context.allIds[this.id] += 1;
            }
            else {
                context.allIds[this.id] = 1;
            }
        }
    };
    CardObject.prototype.validateProperties = function () {
        var result = new ValidationResults();
        this.internalValidateProperties(result);
        return result;
    };
    /**
     * Recursively searches this CardObject and any children to find the
     * innermost CardObject that owns the given DOM Node.
     *
     * @param node The DOM Node to look for.
     *
     * @returns The owner of the given DOM Node, or `undefined` if no owner was found.
     */
    CardObject.prototype.findDOMNodeOwner = function (node) {
        // default implementation for CardObjects with no associated children
        return this.contains(node) ? this : undefined;
    };
    CardObject.prototype.releaseDOMResources = function () {
        // Do nothing in base implementation
    };
    Object.defineProperty(CardObject.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: false,
        configurable: true
    });
    CardObject.typeNameProperty = new serialization.StringProperty(serialization.Versions.v1_0, "type", undefined, undefined, undefined, function (sender) {
        return sender.getJsonTypeName();
    });
    CardObject.idProperty = new serialization.StringProperty(serialization.Versions.v1_0, "id");
    CardObject.requiresProperty = new serialization.SerializableObjectProperty(serialization.Versions.v1_2, "requires", hostCapabilities.HostCapabilities, false, new hostCapabilities.HostCapabilities());
    __decorate([
        (0, serialization.property)(CardObject.idProperty)
    ], CardObject.prototype, "id", void 0);
    __decorate([
        (0, serialization.property)(CardObject.requiresProperty)
    ], CardObject.prototype, "requires", null);
    return CardObject;
}(serialization.SerializableObject));
exports.CardObject = CardObject;
//# sourceMappingURL=card-object.js.map
});

var textFormatters = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatText = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var AbstractTextFormatter = /** @class */ (function () {
    function AbstractTextFormatter(regularExpression) {
        this._regularExpression = regularExpression;
    }
    AbstractTextFormatter.prototype.format = function (lang, input) {
        var matches;
        if (input) {
            var result = input;
            while ((matches = this._regularExpression.exec(input)) != null) {
                result = result.replace(matches[0], this.internalFormat(lang, matches));
            }
            return result;
        }
        else {
            return input;
        }
    };
    return AbstractTextFormatter;
}());
var DateFormatter = /** @class */ (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        var format = matches[2] !== undefined ? matches[2].toLowerCase() : "compact";
        if (format !== "compact") {
            return date.toLocaleDateString(lang, {
                day: "numeric",
                weekday: format,
                month: format,
                year: "numeric"
            });
        }
        else {
            return date.toLocaleDateString();
        }
    };
    return DateFormatter;
}(AbstractTextFormatter));
var TimeFormatter = /** @class */ (function (_super) {
    __extends(TimeFormatter, _super);
    function TimeFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        return date.toLocaleTimeString(lang, { hour: "numeric", minute: "2-digit" });
    };
    return TimeFormatter;
}(AbstractTextFormatter));
function formatText(lang, text) {
    var formatters = [
        new DateFormatter(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),
        new TimeFormatter(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)
    ];
    var result = text;
    for (var _i = 0, formatters_1 = formatters; _i < formatters_1.length; _i++) {
        var formatter = formatters_1[_i];
        result = formatter.format(lang, result);
    }
    return result;
}
exports.formatText = formatText;
//# sourceMappingURL=text-formatters.js.map
});

var constants = createCommonjsModule(function (module, exports) {
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.keys = {
        tab: "Tab",
        enter: "Enter",
        escape: "Escape",
        space: " ",
        up: "ArrowUp",
        down: "ArrowDown",
        delete: "Delete"
    };
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=constants.js.map
});

var menuItem = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


var MenuItem = /** @class */ (function () {
    function MenuItem(key, value) {
        this._isEnabled = true;
        this.key = key;
        this._value = value;
    }
    MenuItem.prototype.click = function () {
        if (this.isEnabled && this.onClick) {
            this.onClick(this);
        }
    };
    MenuItem.prototype.updateCssClasses = function () {
        if (this._element) {
            var effectiveHostConfig = this._hostConfig ? this._hostConfig : hostConfig.defaultHostConfig;
            this._element.className = effectiveHostConfig.makeCssClassName("ac-ctrl");
            this._element.classList.add(effectiveHostConfig.makeCssClassName(this.isEnabled ? "ac-ctrl-dropdown-item" : "ac-ctrl-dropdown-item-disabled"));
            if (!this.isEnabled) {
                this._element.classList.add(effectiveHostConfig.makeCssClassName("ac-disabled"));
            }
        }
    };
    MenuItem.prototype.toString = function () {
        return this.value;
    };
    MenuItem.prototype.render = function (hostConfig) {
        var _this = this;
        this._hostConfig = hostConfig;
        if (!this._element) {
            this._element = document.createElement("span");
            this._element.innerText = this.value;
            this._element.setAttribute("role", "menuitem");
            if (!this.isEnabled) {
                this._element.setAttribute("aria-disabled", "true");
            }
            this._element.setAttribute("aria-current", "false");
            this._element.onmouseup = function (_e) {
                _this.click();
            };
            this._element.onkeydown = function (e) {
                if (e.key === constants.Constants.keys.enter) {
                    e.cancelBubble = true;
                    _this.click();
                }
            };
            this.updateCssClasses();
        }
        return this._element;
    };
    Object.defineProperty(MenuItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            this._value = newValue;
            if (this._element) {
                this._element.innerText = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            if (this._isEnabled !== value) {
                this._isEnabled = value;
                this.updateCssClasses();
            }
        },
        enumerable: false,
        configurable: true
    });
    return MenuItem;
}());
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu-item.js.map
});

var collection = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Collection = /** @class */ (function () {
    function Collection() {
        this._items = [];
    }
    Collection.prototype.get = function (index) {
        return this._items[index];
    };
    Collection.prototype.add = function (item) {
        this._items.push(item);
        if (this.onItemAdded) {
            this.onItemAdded(item);
        }
    };
    Collection.prototype.remove = function (item) {
        var i = this._items.indexOf(item);
        if (i >= 0) {
            this._items = this._items.splice(i, 1);
            if (this.onItemRemoved) {
                this.onItemRemoved(item);
            }
        }
    };
    Collection.prototype.indexOf = function (item) {
        return this._items.indexOf(item);
    };
    Object.defineProperty(Collection.prototype, "length", {
        get: function () {
            return this._items.length;
        },
        enumerable: false,
        configurable: true
    });
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map
});

var popupControl = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupControl = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



var PopupControl = /** @class */ (function () {
    function PopupControl() {
        this._isOpen = false;
    }
    PopupControl.prototype.keyDown = function (e) {
        switch (e.key) {
            case constants.Constants.keys.escape:
                this.closePopup(true);
                break;
        }
    };
    PopupControl.prototype.render = function (_rootElementBounds) {
        var _this = this;
        var element = document.createElement("div");
        element.tabIndex = 0;
        element.className = this.hostConfig.makeCssClassName("ac-ctrl", "ac-ctrl-popup-container");
        element.setAttribute("role", "dialog");
        element.setAttribute("aria-modal", "true");
        element.onkeydown = function (e) {
            _this.keyDown(e);
            return !e.cancelBubble;
        };
        element.appendChild(this.renderContent());
        return element;
    };
    PopupControl.prototype.focus = function () {
        if (this._popupElement) {
            this._popupElement.firstElementChild.focus();
        }
    };
    PopupControl.prototype.popup = function (rootElement) {
        var _a, _b, _c, _d, _f;
        var _this = this;
        if (!this._isOpen) {
            this._overlayElement = document.createElement("div");
            this._overlayElement.className = this.hostConfig.makeCssClassName("ac-ctrl-overlay");
            this._overlayElement.tabIndex = 0;
            this._overlayElement.style.width = document.documentElement.scrollWidth + "px";
            this._overlayElement.style.height = document.documentElement.scrollHeight + "px";
            this._overlayElement.onfocus = function (_e) {
                _this.closePopup(true);
            };
            document.body.appendChild(this._overlayElement);
            var rootElementBounds = rootElement.getBoundingClientRect();
            this._popupElement = this.render(rootElementBounds);
            (_a = this._popupElement.classList).remove.apply(_a, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideLeftToRight", "ac-ctrl-slideRightToLeft", "ac-ctrl-slideTopToBottom", "ac-ctrl-slideRightToLeft"));
            window.addEventListener("resize", function (_e) {
                _this.closePopup(true);
            });
            var rootElementLabel = rootElement.getAttribute("aria-label");
            if (rootElementLabel) {
                this._popupElement.setAttribute("aria-label", rootElementLabel);
            }
            this._overlayElement.appendChild(this._popupElement);
            var popupElementBounds = this._popupElement.getBoundingClientRect();
            var availableSpaceBelow = window.innerHeight - rootElementBounds.bottom;
            var availableSpaceAbove = rootElementBounds.top;
            var availableSpaceRight = window.innerWidth - rootElementBounds.right;
            var availableSpaceLeft = rootElementBounds.left;
            var left = rootElementBounds.left + utils.getScrollX();
            var top_1;
            if (availableSpaceAbove < popupElementBounds.height &&
                availableSpaceBelow < popupElementBounds.height) {
                // Not enough space above or below root element
                var actualPopupHeight = Math.min(popupElementBounds.height, window.innerHeight);
                this._popupElement.style.maxHeight = actualPopupHeight + "px";
                if (actualPopupHeight < popupElementBounds.height) {
                    top_1 = utils.getScrollY();
                }
                else {
                    top_1 =
                        utils.getScrollY() +
                            rootElementBounds.top +
                            (rootElementBounds.height - actualPopupHeight) / 2;
                }
                if (availableSpaceLeft < popupElementBounds.width &&
                    availableSpaceRight < popupElementBounds.width) {
                    // Not enough space left or right of root element
                    var actualPopupWidth = Math.min(popupElementBounds.width, window.innerWidth);
                    this._popupElement.style.maxWidth = actualPopupWidth + "px";
                    if (actualPopupWidth < popupElementBounds.width) {
                        left = utils.getScrollX();
                    }
                    else {
                        left =
                            utils.getScrollX() +
                                rootElementBounds.left +
                                (rootElementBounds.width - actualPopupWidth) / 2;
                    }
                }
                else {
                    // Enough space on the left or right of the root element
                    if (availableSpaceRight >= popupElementBounds.width) {
                        left = utils.getScrollX() + rootElementBounds.right;
                        (_b = this._popupElement.classList).add.apply(_b, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideLeftToRight"));
                    }
                    else {
                        left =
                            utils.getScrollX() + rootElementBounds.left - popupElementBounds.width;
                        (_c = this._popupElement.classList).add.apply(_c, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideRightToLeft"));
                    }
                }
            }
            else {
                // Enough space above or below root element
                if (availableSpaceBelow >= popupElementBounds.height) {
                    top_1 = utils.getScrollY() + rootElementBounds.bottom;
                    (_d = this._popupElement.classList).add.apply(_d, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideTopToBottom"));
                }
                else {
                    top_1 = utils.getScrollY() + rootElementBounds.top - popupElementBounds.height;
                    (_f = this._popupElement.classList).add.apply(_f, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideBottomToTop"));
                }
                if (availableSpaceRight < popupElementBounds.width) {
                    left = utils.getScrollX() + rootElementBounds.right - popupElementBounds.width;
                }
            }
            this._popupElement.style.left = left + "px";
            this._popupElement.style.top = top_1 + "px";
            this._popupElement.focus();
            this._isOpen = true;
        }
    };
    PopupControl.prototype.closePopup = function (wasCancelled) {
        if (this._isOpen) {
            document.body.removeChild(this._overlayElement);
            this._isOpen = false;
            if (this.onClose) {
                this.onClose(this, wasCancelled);
            }
        }
    };
    Object.defineProperty(PopupControl.prototype, "hostConfig", {
        get: function () {
            return this._hostConfig ? this._hostConfig : hostConfig.defaultHostConfig;
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupControl.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        enumerable: false,
        configurable: true
    });
    return PopupControl;
}());
exports.PopupControl = PopupControl;
//# sourceMappingURL=popup-control.js.map
});

var popupMenu = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupMenu = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



var PopupMenu = /** @class */ (function (_super) {
    __extends(PopupMenu, _super);
    function PopupMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = new collection.Collection();
        _this._renderedItems = [];
        _this._selectedIndex = -1;
        return _this;
    }
    PopupMenu.prototype.renderContent = function () {
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-ctrl ac-popup");
        element.setAttribute("role", "listbox");
        for (var i = 0; i < this._items.length; i++) {
            var renderedItem = this._items.get(i).render(this.hostConfig);
            renderedItem.tabIndex = 0;
            element.appendChild(renderedItem);
            if (i === this.selectedIndex) {
                renderedItem.focus();
            }
            this._renderedItems.push(renderedItem);
        }
        return element;
    };
    PopupMenu.prototype.keyDown = function (e) {
        _super.prototype.keyDown.call(this, e);
        var selectedItemIndex = this._selectedIndex;
        switch (e.key) {
            case constants.Constants.keys.tab:
                this.closePopup(true);
                break;
            /*
            case Constants.keys.enter:
                if (this.selectedIndex >= 0) {
                    this.selectedIndex = this.selectedIndex;

                    this.close();
                }

                break;
            */
            case constants.Constants.keys.up:
                if (selectedItemIndex <= 0) {
                    selectedItemIndex = this._renderedItems.length - 1;
                }
                else {
                    selectedItemIndex--;
                    if (selectedItemIndex < 0) {
                        selectedItemIndex = this._renderedItems.length - 1;
                    }
                }
                this.selectedIndex = selectedItemIndex;
                e.cancelBubble = true;
                break;
            case constants.Constants.keys.down:
                if (selectedItemIndex < 0) {
                    selectedItemIndex = 0;
                }
                else {
                    selectedItemIndex++;
                    if (selectedItemIndex >= this._renderedItems.length) {
                        selectedItemIndex = 0;
                    }
                }
                this.selectedIndex = selectedItemIndex;
                e.cancelBubble = true;
                break;
        }
    };
    Object.defineProperty(PopupMenu.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupMenu.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (index) {
            if (index >= 0 && index < this._renderedItems.length) {
                this._renderedItems[index].focus();
                this._selectedIndex = index;
            }
        },
        enumerable: false,
        configurable: true
    });
    return PopupMenu;
}(popupControl.PopupControl));
exports.PopupMenu = PopupMenu;
//# sourceMappingURL=popup-menu.js.map
});

var controls = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (C) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__exportStar(menuItem, exports);
__exportStar(popupMenu, exports);
//# sourceMappingURL=index.js.map
});

var cardElements = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerWithActions = exports.ColumnSet = exports.Column = exports.Container = exports.BackgroundImage = exports.ContainerBase = exports.StylableCardElementContainer = exports.ContainerStyleProperty = exports.ActionSet = exports.ShowCardAction = exports.HttpAction = exports.HttpHeader = exports.ToggleVisibilityAction = exports.OpenUrlAction = exports.ExecuteAction = exports.SubmitAction = exports.SubmitActionBase = exports.Action = exports.TimeInput = exports.TimeProperty = exports.DateInput = exports.NumberInput = exports.ChoiceSetInput = exports.Choice = exports.ToggleInput = exports.TextInput = exports.Input = exports.Media = exports.YouTubePlayer = exports.DailymotionPlayer = exports.VimeoPlayer = exports.IFrameMediaMediaPlayer = exports.CustomMediaPlayer = exports.HTML5MediaPlayer = exports.MediaPlayer = exports.MediaSource = exports.CaptionSource = exports.ContentSource = exports.ImageSet = exports.CardElementContainer = exports.Image = exports.FactSet = exports.Fact = exports.RichTextBlock = exports.TextRun = exports.TextBlock = exports.BaseTextBlock = exports.ActionProperty = exports.CardElement = exports.renderSeparation = void 0;
exports.SerializationContext = exports.AdaptiveCard = exports.Authentication = exports.TokenExchangeResource = exports.AuthCardButton = exports.RefreshDefinition = exports.RefreshActionProperty = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.










function clearElement(element) {
    var _a, _b;
    var trustedHtml = (typeof window === 'undefined') ? "" : ((_b = (_a = window.trustedTypes) === null || _a === void 0 ? void 0 : _a.emptyHTML) !== null && _b !== void 0 ? _b : "");
    element.innerHTML = trustedHtml;
}
function renderSeparation(hostConfig, separationDefinition, orientation) {
    if (separationDefinition.spacing > 0 ||
        (separationDefinition.lineThickness && separationDefinition.lineThickness > 0)) {
        var separator = document.createElement("div");
        separator.className = hostConfig.makeCssClassName("ac-" +
            (orientation === enums.Orientation.Horizontal ? "horizontal" : "vertical") +
            "-separator");
        separator.setAttribute("aria-hidden", "true");
        var color = separationDefinition.lineColor
            ? utils.stringToCssColor(separationDefinition.lineColor)
            : "";
        if (orientation === enums.Orientation.Horizontal) {
            if (separationDefinition.lineThickness) {
                separator.style.paddingTop = separationDefinition.spacing / 2 + "px";
                separator.style.marginBottom = separationDefinition.spacing / 2 + "px";
                separator.style.borderBottom =
                    separationDefinition.lineThickness + "px solid " + color;
            }
            else {
                separator.style.height = separationDefinition.spacing + "px";
            }
        }
        else {
            if (separationDefinition.lineThickness) {
                separator.style.paddingLeft = separationDefinition.spacing / 2 + "px";
                separator.style.marginRight = separationDefinition.spacing / 2 + "px";
                separator.style.borderRight =
                    separationDefinition.lineThickness + "px solid " + color;
            }
            else {
                separator.style.width = separationDefinition.spacing + "px";
            }
        }
        separator.style.overflow = "hidden";
        separator.style.flex = "0 0 auto";
        return separator;
    }
    else {
        return undefined;
    }
}
exports.renderSeparation = renderSeparation;
var CardElement = /** @class */ (function (_super) {
    __extends(CardElement, _super);
    function CardElement() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._truncatedDueToOverflow = false;
        return _this;
    }
    Object.defineProperty(CardElement.prototype, "lang", {
        get: function () {
            var lang = this.getValue(CardElement.langProperty);
            if (lang) {
                return lang;
            }
            else {
                if (this.parent) {
                    return this.parent.lang;
                }
                else {
                    return undefined;
                }
            }
        },
        set: function (value) {
            this.setValue(CardElement.langProperty, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isVisible", {
        get: function () {
            return this.getValue(CardElement.isVisibleProperty);
        },
        set: function (value) {
            // If the element is going to be hidden, reset any changes that were due
            // to overflow truncation (this ensures that if the element is later
            // un-hidden it has the right content)
            if (shared.GlobalSettings.useAdvancedCardBottomTruncation && !value) {
                this.undoOverflowTruncation();
            }
            if (this.isVisible !== value) {
                this.setValue(CardElement.isVisibleProperty, value);
                this.updateRenderedElementVisibility();
                if (this._renderedElement) {
                    raiseElementVisibilityChangedEvent(this);
                }
            }
            if (this._renderedElement) {
                this._renderedElement.setAttribute("aria-expanded", value.toString());
            }
        },
        enumerable: false,
        configurable: true
    });
    CardElement.prototype.internalRenderSeparator = function () {
        var renderedSeparator = renderSeparation(this.hostConfig, {
            spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
            lineThickness: this.separator ? this.hostConfig.separator.lineThickness : undefined,
            lineColor: this.separator ? this.hostConfig.separator.lineColor : undefined
        }, this.separatorOrientation);
        if (shared.GlobalSettings.alwaysBleedSeparators &&
            renderedSeparator &&
            this.separatorOrientation === enums.Orientation.Horizontal) {
            // Adjust separator's margins if the option to always bleed separators is turned on
            var parentContainer = this.getParentContainer();
            if (parentContainer && parentContainer.getEffectivePadding()) {
                var parentPhysicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(parentContainer.getEffectivePadding());
                renderedSeparator.style.marginLeft = "-" + parentPhysicalPadding.left + "px";
                renderedSeparator.style.marginRight = "-" + parentPhysicalPadding.right + "px";
            }
        }
        return renderedSeparator;
    };
    CardElement.prototype.updateRenderedElementVisibility = function () {
        var displayMode = this.isDesignMode() || this.isVisible
            ? this._defaultRenderedElementDisplayMode
            : "none";
        if (this._renderedElement) {
            if (displayMode) {
                this._renderedElement.style.display = displayMode;
            }
            else {
                this._renderedElement.style.removeProperty("display");
            }
        }
        if (this._separatorElement) {
            if (this.parent && this.parent.isFirstElement(this)) {
                this._separatorElement.style.display = "none";
            }
            else {
                if (displayMode) {
                    this._separatorElement.style.display = displayMode;
                }
                else {
                    this._separatorElement.style.removeProperty("display");
                }
            }
        }
    };
    CardElement.prototype.hideElementDueToOverflow = function () {
        if (this._renderedElement && this.isVisible) {
            this._renderedElement.style.visibility = "hidden";
            this.isVisible = false;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    CardElement.prototype.showElementHiddenDueToOverflow = function () {
        if (this._renderedElement && !this.isVisible) {
            this._renderedElement.style.removeProperty("visibility");
            this.isVisible = true;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.handleOverflow = function (maxHeight) {
        if (this.isVisible || this.isHiddenDueToOverflow()) {
            var handled = this.truncateOverflow(maxHeight);
            // Even if we were unable to truncate the element to fit this time,
            // it still could have been previously truncated
            this._truncatedDueToOverflow = handled || this._truncatedDueToOverflow;
            if (!handled) {
                this.hideElementDueToOverflow();
            }
            else if (handled && !this.isVisible) {
                this.showElementHiddenDueToOverflow();
            }
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.resetOverflow = function () {
        var sizeChanged = false;
        if (this._truncatedDueToOverflow) {
            this.undoOverflowTruncation();
            this._truncatedDueToOverflow = false;
            sizeChanged = true;
        }
        if (this.isHiddenDueToOverflow()) {
            this.showElementHiddenDueToOverflow();
        }
        return sizeChanged;
    };
    CardElement.prototype.getDefaultSerializationContext = function () {
        return new SerializationContext();
    };
    CardElement.prototype.createPlaceholderElement = function () {
        var styleDefinition = this.getEffectiveStyleDefinition();
        var foregroundCssColor = utils.stringToCssColor(styleDefinition.foregroundColors.default.subtle);
        var element = document.createElement("div");
        element.style.border = "1px dashed " + foregroundCssColor;
        element.style.padding = "4px";
        element.style.minHeight = "32px";
        element.style.fontSize = "10px";
        if (foregroundCssColor) {
            element.style.color = foregroundCssColor;
        }
        element.innerText = "Empty " + this.getJsonTypeName();
        return element;
    };
    CardElement.prototype.adjustRenderedElementSize = function (renderedElement) {
        if (this.height === "auto") {
            renderedElement.style.flex = "0 0 auto";
        }
        else {
            renderedElement.style.flex = "1 1 auto";
        }
    };
    /*
     * Called when mouse enters or leaves the card.
     * Inputs elements need to update their visual state in such events like showing or hiding borders etc.
     * It calls Input.updateVisualState(eventType) for all inputs.
     * This method on input (updateVisualState) is supposed to be called from card level on mouse events.
     */
    CardElement.prototype.updateInputsVisualState = function (hover) {
        var allInputs = this.getAllInputs();
        var inputEventType = !!hover ? InputEventType.MouseEnterOnCard : InputEventType.MouseLeaveOnCard;
        allInputs.forEach(function (input) { return input.updateVisualState(inputEventType); });
    };
    CardElement.prototype.isDisplayed = function () {
        return (this._renderedElement !== undefined &&
            this.isVisible &&
            this._renderedElement.offsetHeight > 0);
    };
    CardElement.prototype.overrideInternalRender = function () {
        return this.internalRender();
    };
    CardElement.prototype.applyPadding = function () {
        if (this.separatorElement && this.separatorOrientation === enums.Orientation.Horizontal) {
            if (shared.GlobalSettings.alwaysBleedSeparators && !this.isBleeding()) {
                var padding = new shared.PaddingDefinition();
                this.getImmediateSurroundingPadding(padding);
                var physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
                this.separatorElement.style.marginLeft = "-" + physicalPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + physicalPadding.right + "px";
            }
            else {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    /*
     * Called when this element overflows the bottom of the card.
     * maxHeight will be the amount of space still available on the card (0 if
     * the element is fully off the card).
     */
    CardElement.prototype.truncateOverflow = function (_maxHeight) {
        // Child implementations should return true if the element handled
        // the truncation request such that its content fits within maxHeight,
        // false if the element should fall back to being hidden
        return false;
    };
    /*
     * This should reverse any changes performed in truncateOverflow().
     */
    CardElement.prototype.undoOverflowTruncation = function () {
        return;
    };
    CardElement.prototype.getDefaultPadding = function () {
        return new shared.PaddingDefinition();
    };
    CardElement.prototype.getHasBackground = function (ignoreBackgroundImages) {
        return false;
    };
    CardElement.prototype.getHasBorder = function () {
        return false;
    };
    CardElement.prototype.getPadding = function () {
        return this._padding;
    };
    CardElement.prototype.setPadding = function (value) {
        this._padding = value;
    };
    CardElement.prototype.shouldSerialize = function (context) {
        return context.elementRegistry.findByName(this.getJsonTypeName()) !== undefined;
    };
    Object.defineProperty(CardElement.prototype, "useDefaultSizing", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorOrientation", {
        get: function () {
            return enums.Orientation.Horizontal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "defaultStyle", {
        get: function () {
            return enums.ContainerStyle.Default;
        },
        enumerable: false,
        configurable: true
    });
    CardElement.prototype.parse = function (source, context) {
        _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
    };
    CardElement.prototype.asString = function () {
        return "";
    };
    CardElement.prototype.isBleeding = function () {
        return false;
    };
    CardElement.prototype.getEffectiveStyle = function () {
        if (this.parent) {
            return this.parent.getEffectiveStyle();
        }
        return this.defaultStyle;
    };
    CardElement.prototype.getEffectiveStyleDefinition = function () {
        return this.hostConfig.containerStyles.getStyleByName(this.getEffectiveStyle());
    };
    CardElement.prototype.getEffectiveTextStyleDefinition = function () {
        if (this.parent) {
            return this.parent.getEffectiveTextStyleDefinition();
        }
        return this.hostConfig.textStyles.default;
    };
    CardElement.prototype.getForbiddenActionTypes = function () {
        return [];
    };
    CardElement.prototype.getImmediateSurroundingPadding = function (result, processTop, processRight, processBottom, processLeft) {
        if (processTop === void 0) { processTop = true; }
        if (processRight === void 0) { processRight = true; }
        if (processBottom === void 0) { processBottom = true; }
        if (processLeft === void 0) { processLeft = true; }
        if (this.parent) {
            var doProcessTop = processTop && this.parent.isTopElement(this);
            var doProcessRight = processRight && this.parent.isRightMostElement(this);
            var doProcessBottom = processBottom && this.parent.isBottomElement(this);
            var doProcessLeft = processLeft && this.parent.isLeftMostElement(this);
            var effectivePadding = this.parent.getEffectivePadding();
            if (effectivePadding) {
                if (doProcessTop && effectivePadding.top !== enums.Spacing.None) {
                    result.top = effectivePadding.top;
                    doProcessTop = false;
                }
                if (doProcessRight && effectivePadding.right !== enums.Spacing.None) {
                    result.right = effectivePadding.right;
                    doProcessRight = false;
                }
                if (doProcessBottom && effectivePadding.bottom !== enums.Spacing.None) {
                    result.bottom = effectivePadding.bottom;
                    doProcessBottom = false;
                }
                if (doProcessLeft && effectivePadding.left !== enums.Spacing.None) {
                    result.left = effectivePadding.left;
                    doProcessLeft = false;
                }
            }
            if (doProcessTop || doProcessRight || doProcessBottom || doProcessLeft) {
                this.parent.getImmediateSurroundingPadding(result, doProcessTop, doProcessRight, doProcessBottom, doProcessLeft);
            }
        }
    };
    CardElement.prototype.getActionCount = function () {
        return 0;
    };
    CardElement.prototype.getActionAt = function (index) {
        throw new Error(strings.Strings.errors.indexOutOfRange(index));
    };
    CardElement.prototype.indexOfAction = function (action) {
        for (var i = 0; i < this.getActionCount(); i++) {
            if (this.getActionAt(i) === action) {
                return i;
            }
        }
        return -1;
    };
    CardElement.prototype.remove = function () {
        if (this.parent && this.parent instanceof CardElementContainer) {
            return this.parent.removeItem(this);
        }
        return false;
    };
    CardElement.prototype.render = function () {
        this._renderedElement = this.overrideInternalRender();
        this._separatorElement = this.internalRenderSeparator();
        if (this._renderedElement) {
            if (this.id) {
                this._renderedElement.id = this.id;
            }
            if (this.customCssSelector) {
                this._renderedElement.classList.add(this.customCssSelector);
            }
            this._renderedElement.style.boxSizing = "border-box";
            this._defaultRenderedElementDisplayMode = this._renderedElement.style.display
                ? this._renderedElement.style.display
                : undefined;
            this.adjustRenderedElementSize(this._renderedElement);
            this.updateLayout(false);
        }
        else if (this.isDesignMode()) {
            this._renderedElement = this.createPlaceholderElement();
        }
        return this._renderedElement;
    };
    CardElement.prototype.updateLayout = function (_processChildren) {
        this.updateRenderedElementVisibility();
        this.applyPadding();
    };
    CardElement.prototype.updateActionsEnabledState = function () {
        var allActions = this.getRootElement().getAllActions();
        for (var _i = 0, allActions_1 = allActions; _i < allActions_1.length; _i++) {
            var action = allActions_1[_i];
            action.updateEnabledState();
        }
    };
    CardElement.prototype.indexOf = function (_cardElement) {
        return -1;
    };
    CardElement.prototype.isDesignMode = function () {
        var rootElement = this.getRootElement();
        return rootElement instanceof AdaptiveCard && rootElement.designMode;
    };
    CardElement.prototype.isFirstElement = function (_element) {
        return true;
    };
    CardElement.prototype.isLastElement = function (_element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryLeft = function () {
        return this.parent
            ? this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft()
            : true;
    };
    CardElement.prototype.isAtTheVeryRight = function () {
        return this.parent
            ? this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight()
            : true;
    };
    CardElement.prototype.isAtTheVeryTop = function () {
        return this.parent
            ? this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop()
            : true;
    };
    CardElement.prototype.isAtTheVeryBottom = function () {
        return this.parent
            ? this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom()
            : true;
    };
    CardElement.prototype.isBleedingAtTop = function () {
        return false;
    };
    CardElement.prototype.isBleedingAtBottom = function () {
        return false;
    };
    CardElement.prototype.isLeftMostElement = function (_element) {
        return true;
    };
    CardElement.prototype.isRightMostElement = function (_element) {
        return true;
    };
    CardElement.prototype.isTopElement = function (element) {
        return this.isFirstElement(element);
    };
    CardElement.prototype.isBottomElement = function (element) {
        return this.isLastElement(element);
    };
    CardElement.prototype.isHiddenDueToOverflow = function () {
        return (this._renderedElement !== undefined &&
            this._renderedElement.style.visibility === "hidden");
    };
    CardElement.prototype.getRootElement = function () {
        return this.getRootObject();
    };
    CardElement.prototype.getParentContainer = function () {
        var currentElement = this.parent;
        while (currentElement) {
            if (currentElement instanceof Container) {
                return currentElement;
            }
            currentElement = currentElement.parent;
        }
        return undefined;
    };
    CardElement.prototype.getAllInputs = function (processActions) {
        return [];
    };
    CardElement.prototype.getAllActions = function () {
        var result = [];
        for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action) {
                result.push(action);
            }
        }
        return result;
    };
    CardElement.prototype.getResourceInformation = function () {
        return [];
    };
    CardElement.prototype.getElementById = function (id) {
        return this.id === id ? this : undefined;
    };
    CardElement.prototype.getActionById = function (_id) {
        return undefined;
    };
    CardElement.prototype.getElementByIdFromAction = function (id) {
        var result = undefined;
        for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action instanceof ShowCardAction) {
                result = action.card.getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    CardElement.prototype.getEffectivePadding = function () {
        var padding = this.getPadding();
        return padding ? padding : this.getDefaultPadding();
    };
    CardElement.prototype.getEffectiveHorizontalAlignment = function () {
        if (this.horizontalAlignment !== undefined) {
            return this.horizontalAlignment;
        }
        if (this.parent) {
            return this.parent.getEffectiveHorizontalAlignment();
        }
        return enums.HorizontalAlignment.Left;
    };
    Object.defineProperty(CardElement.prototype, "hostConfig", {
        get: function () {
            if (this._hostConfig) {
                return this._hostConfig;
            }
            else {
                if (this.parent) {
                    return this.parent.hostConfig;
                }
                else {
                    return hostConfig.defaultHostConfig;
                }
            }
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "index", {
        get: function () {
            if (this.parent) {
                return this.parent.indexOf(this);
            }
            else {
                return 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInteractive", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isStandalone", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInline", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.separatorElement) {
                return !this.parent.isFirstElement(this) && (this.isVisible || this.isDesignMode());
            }
            else {
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorElement", {
        get: function () {
            return this._separatorElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    CardElement.langProperty = new serialization.StringProperty(serialization.Versions.v1_1, "lang", true, /^[a-z]{2,3}$/gi);
    CardElement.isVisibleProperty = new serialization.BoolProperty(serialization.Versions.v1_2, "isVisible", true);
    CardElement.separatorProperty = new serialization.BoolProperty(serialization.Versions.v1_0, "separator", false);
    CardElement.heightProperty = new serialization.ValueSetProperty(serialization.Versions.v1_1, "height", [{ value: "auto" }, { value: "stretch" }], "auto");
    CardElement.horizontalAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "horizontalAlignment", enums.HorizontalAlignment);
    CardElement.spacingProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "spacing", enums.Spacing, enums.Spacing.Default);
    __decorate([
        (0, serialization.property)(CardElement.horizontalAlignmentProperty)
    ], CardElement.prototype, "horizontalAlignment", void 0);
    __decorate([
        (0, serialization.property)(CardElement.spacingProperty)
    ], CardElement.prototype, "spacing", void 0);
    __decorate([
        (0, serialization.property)(CardElement.separatorProperty)
    ], CardElement.prototype, "separator", void 0);
    __decorate([
        (0, serialization.property)(CardElement.heightProperty)
    ], CardElement.prototype, "height", void 0);
    __decorate([
        (0, serialization.property)(CardElement.langProperty)
    ], CardElement.prototype, "lang", null);
    __decorate([
        (0, serialization.property)(CardElement.isVisibleProperty)
    ], CardElement.prototype, "isVisible", null);
    return CardElement;
}(cardObject.CardObject));
exports.CardElement = CardElement;
var ActionProperty = /** @class */ (function (_super) {
    __extends(ActionProperty, _super);
    function ActionProperty(targetVersion, name, forbiddenActionTypes) {
        if (forbiddenActionTypes === void 0) { forbiddenActionTypes = []; }
        var _this = _super.call(this, targetVersion, name, undefined) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.forbiddenActionTypes = forbiddenActionTypes;
        return _this;
    }
    ActionProperty.prototype.parse = function (sender, source, context) {
        var parent = sender;
        return context.parseAction(parent, source[this.name], this.forbiddenActionTypes, parent.isDesignMode());
    };
    ActionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value ? value.toJSON(context) : undefined, undefined, true);
    };
    return ActionProperty;
}(serialization.PropertyDefinition));
exports.ActionProperty = ActionProperty;
var BaseTextBlock = /** @class */ (function (_super) {
    __extends(BaseTextBlock, _super);
    function BaseTextBlock(text) {
        var _this = _super.call(this) || this;
        _this.ariaHidden = false;
        if (text) {
            _this.text = text;
        }
        return _this;
    }
    BaseTextBlock.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        // selectAction is declared on BaseTextBlock but is only exposed on TextRun,
        // so the property is removed from the BaseTextBlock schema.
        schema.remove(BaseTextBlock.selectActionProperty);
    };
    Object.defineProperty(BaseTextBlock.prototype, "text", {
        get: function () {
            return this.getValue(BaseTextBlock.textProperty);
        },
        set: function (value) {
            this.setText(value);
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    BaseTextBlock.prototype.getFontSize = function (fontType) {
        switch (this.effectiveSize) {
            case enums.TextSize.Small:
                return fontType.fontSizes.small;
            case enums.TextSize.Medium:
                return fontType.fontSizes.medium;
            case enums.TextSize.Large:
                return fontType.fontSizes.large;
            case enums.TextSize.ExtraLarge:
                return fontType.fontSizes.extraLarge;
            default:
                return fontType.fontSizes.default;
        }
    };
    BaseTextBlock.prototype.getColorDefinition = function (colorSet, color) {
        switch (color) {
            case enums.TextColor.Accent:
                return colorSet.accent;
            case enums.TextColor.Dark:
                return colorSet.dark;
            case enums.TextColor.Light:
                return colorSet.light;
            case enums.TextColor.Good:
                return colorSet.good;
            case enums.TextColor.Warning:
                return colorSet.warning;
            case enums.TextColor.Attention:
                return colorSet.attention;
            default:
                return colorSet.default;
        }
    };
    BaseTextBlock.prototype.setText = function (value) {
        this.setValue(BaseTextBlock.textProperty, value);
    };
    BaseTextBlock.prototype.init = function (textDefinition) {
        this.size = textDefinition.size;
        this.weight = textDefinition.weight;
        this.color = textDefinition.color;
        this.isSubtle = textDefinition.isSubtle;
    };
    BaseTextBlock.prototype.asString = function () {
        return this.text;
    };
    BaseTextBlock.prototype.applyStylesTo = function (targetElement) {
        var fontType = this.hostConfig.getFontTypeDefinition(this.effectiveFontType);
        if (fontType.fontFamily) {
            targetElement.style.fontFamily = fontType.fontFamily;
        }
        var fontSize;
        switch (this.effectiveSize) {
            case enums.TextSize.Small:
                fontSize = fontType.fontSizes.small;
                break;
            case enums.TextSize.Medium:
                fontSize = fontType.fontSizes.medium;
                break;
            case enums.TextSize.Large:
                fontSize = fontType.fontSizes.large;
                break;
            case enums.TextSize.ExtraLarge:
                fontSize = fontType.fontSizes.extraLarge;
                break;
            default:
                fontSize = fontType.fontSizes.default;
                break;
        }
        targetElement.style.fontSize = fontSize + "px";
        var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
        var targetColor = utils.stringToCssColor(this.effectiveIsSubtle ? colorDefinition.subtle : colorDefinition.default);
        if (targetColor) {
            targetElement.style.color = targetColor;
        }
        var fontWeight;
        switch (this.effectiveWeight) {
            case enums.TextWeight.Lighter:
                fontWeight = fontType.fontWeights.lighter;
                break;
            case enums.TextWeight.Bolder:
                fontWeight = fontType.fontWeights.bolder;
                break;
            default:
                fontWeight = fontType.fontWeights.default;
                break;
        }
        targetElement.style.fontWeight = fontWeight.toString();
        if (this.ariaHidden) {
            targetElement.setAttribute("aria-hidden", "true");
        }
    };
    BaseTextBlock.prototype.getAllActions = function () {
        var result = _super.prototype.getAllActions.call(this);
        if (this.selectAction) {
            result.push(this.selectAction);
        }
        return result;
    };
    Object.defineProperty(BaseTextBlock.prototype, "effectiveColor", {
        get: function () {
            return this.color !== undefined ? this.color : this.getEffectiveTextStyleDefinition().color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveFontType", {
        get: function () {
            return this.fontType !== undefined
                ? this.fontType
                : this.getEffectiveTextStyleDefinition().fontType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveIsSubtle", {
        get: function () {
            return this.isSubtle !== undefined
                ? this.isSubtle
                : this.getEffectiveTextStyleDefinition().isSubtle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveSize", {
        get: function () {
            return this.size !== undefined ? this.size : this.getEffectiveTextStyleDefinition().size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveWeight", {
        get: function () {
            return this.weight !== undefined
                ? this.weight
                : this.getEffectiveTextStyleDefinition().weight;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    BaseTextBlock.textProperty = new serialization.StringProperty(serialization.Versions.v1_0, "text", true);
    BaseTextBlock.sizeProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "size", enums.TextSize);
    BaseTextBlock.weightProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "weight", enums.TextWeight);
    BaseTextBlock.colorProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "color", enums.TextColor);
    BaseTextBlock.isSubtleProperty = new serialization.BoolProperty(serialization.Versions.v1_0, "isSubtle");
    BaseTextBlock.fontTypeProperty = new serialization.EnumProperty(serialization.Versions.v1_2, "fontType", enums.FontType);
    BaseTextBlock.selectActionProperty = new ActionProperty(serialization.Versions.v1_1, "selectAction", [
        "Action.ShowCard"
    ]);
    __decorate([
        (0, serialization.property)(BaseTextBlock.sizeProperty)
    ], BaseTextBlock.prototype, "size", void 0);
    __decorate([
        (0, serialization.property)(BaseTextBlock.weightProperty)
    ], BaseTextBlock.prototype, "weight", void 0);
    __decorate([
        (0, serialization.property)(BaseTextBlock.colorProperty)
    ], BaseTextBlock.prototype, "color", void 0);
    __decorate([
        (0, serialization.property)(BaseTextBlock.fontTypeProperty)
    ], BaseTextBlock.prototype, "fontType", void 0);
    __decorate([
        (0, serialization.property)(BaseTextBlock.isSubtleProperty)
    ], BaseTextBlock.prototype, "isSubtle", void 0);
    __decorate([
        (0, serialization.property)(BaseTextBlock.textProperty)
    ], BaseTextBlock.prototype, "text", null);
    __decorate([
        (0, serialization.property)(BaseTextBlock.selectActionProperty)
    ], BaseTextBlock.prototype, "selectAction", void 0);
    return BaseTextBlock;
}(CardElement));
exports.BaseTextBlock = BaseTextBlock;
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = false;
        _this._treatAsPlainText = true;
        _this.useMarkdown = true;
        return _this;
    }
    TextBlock.prototype.restoreOriginalContent = function () {
        var _a, _b;
        if (this.renderedElement !== undefined) {
            if (this.maxLines && this.maxLines > 0) {
                this.renderedElement.style.maxHeight =
                    this._computedLineHeight * this.maxLines + "px";
            }
            var originalHtml = (_b = (_a = TextBlock._ttRoundtripPolicy) === null || _a === void 0 ? void 0 : _a.createHTML(this._originalInnerHtml)) !== null && _b !== void 0 ? _b : this._originalInnerHtml;
            this.renderedElement.innerHTML = originalHtml;
        }
    };
    TextBlock.prototype.truncateIfSupported = function (maxHeight) {
        if (this.renderedElement !== undefined) {
            // For now, only truncate TextBlocks that contain just a single
            // paragraph -- since the maxLines calculation doesn't take into
            // account Markdown lists
            var children = this.renderedElement.children;
            var isTextOnly = !children.length;
            var truncationSupported = isTextOnly ||
                (children.length === 1 && children[0].tagName.toLowerCase() === "p" && !children[0].children.length);
            if (truncationSupported) {
                var element = isTextOnly ? this.renderedElement : children[0];
                utils.truncateText(element, maxHeight, this._computedLineHeight);
                return true;
            }
        }
        return false;
    };
    TextBlock.prototype.setText = function (value) {
        _super.prototype.setText.call(this, value);
        this._processedText = undefined;
    };
    TextBlock.prototype.internalRender = function () {
        var _this = this;
        var _a, _b;
        this._processedText = undefined;
        if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var element = void 0;
            if (this.forElementId) {
                var labelElement = document.createElement("label");
                labelElement.htmlFor = this.forElementId;
                element = labelElement;
            }
            else {
                element = document.createElement("div");
            }
            element.classList.add(hostConfig.makeCssClassName("ac-textBlock"));
            element.style.overflow = "hidden";
            this.applyStylesTo(element);
            if (this.style === "heading") {
                element.setAttribute("role", "heading");
                var headingLevel = this.hostConfig.textBlock.headingLevel;
                if (headingLevel !== undefined && headingLevel > 0) {
                    element.setAttribute("aria-level", headingLevel.toString());
                }
            }
            if (this.selectAction && hostConfig.supportsInteractivity) {
                element.onclick = function (e) {
                    if (_this.selectAction && _this.selectAction.isEffectivelyEnabled()) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                this.selectAction.setupElementForAccessibility(element);
                if (this.selectAction.isEffectivelyEnabled()) {
                    element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
            if (!this._processedText) {
                this._treatAsPlainText = true;
                var formattedText = textFormatters.formatText(this.lang, preProcessedText);
                if (this.useMarkdown && formattedText) {
                    if (shared.GlobalSettings.allowMarkForTextHighlighting) {
                        formattedText = formattedText
                            .replace(/<mark>/g, "===")
                            .replace(/<\/mark>/g, "/==/");
                    }
                    var markdownProcessingResult = AdaptiveCard.applyMarkdown(formattedText);
                    if (markdownProcessingResult.didProcess &&
                        markdownProcessingResult.outputHtml) {
                        this._processedText = markdownProcessingResult.outputHtml;
                        this._treatAsPlainText = false;
                        // Only process <mark> tag if markdown processing was applied because
                        // markdown processing is also responsible for sanitizing the input string
                        if (shared.GlobalSettings.allowMarkForTextHighlighting && this._processedText) {
                            var markStyle = "";
                            var effectiveStyle = this.getEffectiveStyleDefinition();
                            if (effectiveStyle.highlightBackgroundColor) {
                                markStyle +=
                                    "background-color: " +
                                        effectiveStyle.highlightBackgroundColor +
                                        ";";
                            }
                            if (effectiveStyle.highlightForegroundColor) {
                                markStyle +=
                                    "color: " + effectiveStyle.highlightForegroundColor + ";";
                            }
                            if (markStyle) {
                                markStyle = 'style="' + markStyle + '"';
                            }
                            this._processedText = this._processedText
                                .replace(/===/g, "<mark " + markStyle + ">")
                                .replace(/\/==\//g, "</mark>");
                        }
                    }
                    else {
                        this._processedText = formattedText;
                        this._treatAsPlainText = true;
                    }
                }
                else {
                    this._processedText = formattedText;
                    this._treatAsPlainText = true;
                }
            }
            if (!this._processedText) {
                this._processedText = "";
            }
            if (this._treatAsPlainText) {
                element.innerText = this._processedText;
            }
            else {
                var processedHtml = (_b = (_a = TextBlock._ttMarkdownPolicy) === null || _a === void 0 ? void 0 : _a.createHTML(this._processedText)) !== null && _b !== void 0 ? _b : this._processedText;
                element.innerHTML = processedHtml;
            }
            if (element.firstElementChild instanceof HTMLElement) {
                var firstElementChild = element.firstElementChild;
                firstElementChild.style.marginTop = "0px";
                firstElementChild.style.width = "100%";
                if (!this.wrap) {
                    firstElementChild.style.overflow = "hidden";
                    firstElementChild.style.textOverflow = "ellipsis";
                }
            }
            if (element.lastElementChild instanceof HTMLElement) {
                element.lastElementChild.style.marginBottom = "0px";
            }
            var anchors = element.getElementsByTagName("a");
            var _loop_1 = function (anchor) {
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (raiseAnchorClickedEvent(_this, anchor, e)) {
                        e.preventDefault();
                        e.cancelBubble = true;
                    }
                };
                anchor.oncontextmenu = function (e) {
                    if (raiseAnchorClickedEvent(_this, anchor, e)) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        return false;
                    }
                    return true;
                };
            };
            for (var _i = 0, _c = Array.from(anchors); _i < _c.length; _i++) {
                var anchor = _c[_i];
                _loop_1(anchor);
            }
            if (this.wrap) {
                element.style.wordWrap = "break-word";
                if (this.maxLines && this.maxLines > 0) {
                    element.style.overflow = "hidden";
                    if (utils.isInternetExplorer() || !shared.GlobalSettings.useWebkitLineClamp) {
                        element.style.maxHeight = this._computedLineHeight * this.maxLines + "px";
                    }
                    else {
                        // While non standard, --webkit-line-clamp works in every browser (except IE)
                        // and is a great solution to support the maxLines feature with ellipsis
                        // truncation. With --webkit-line-clamp there is need to use explicit line heights
                        element.style.removeProperty("line-height");
                        element.style.display = "-webkit-box";
                        element.style.webkitBoxOrient = "vertical";
                        element.style.webkitLineClamp = this.maxLines.toString();
                    }
                }
            }
            else {
                element.style.whiteSpace = "nowrap";
                element.style.textOverflow = "ellipsis";
            }
            if (shared.GlobalSettings.useAdvancedTextBlockTruncation ||
                shared.GlobalSettings.useAdvancedCardBottomTruncation) {
                this._originalInnerHtml = element.innerHTML;
            }
            return element;
        }
        else {
            return undefined;
        }
    };
    TextBlock.prototype.truncateOverflow = function (maxHeight) {
        if (maxHeight >= this._computedLineHeight) {
            return this.truncateIfSupported(maxHeight);
        }
        return false;
    };
    TextBlock.prototype.undoOverflowTruncation = function () {
        this.restoreOriginalContent();
        if (shared.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines) {
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    TextBlock.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        switch (this.getEffectiveHorizontalAlignment()) {
            case enums.HorizontalAlignment.Center:
                targetElement.style.textAlign = "center";
                break;
            case enums.HorizontalAlignment.Right:
                targetElement.style.textAlign = "end";
                break;
            default:
                targetElement.style.textAlign = "start";
                break;
        }
        var lineHeights = this.hostConfig.lineHeights;
        if (lineHeights) {
            switch (this.effectiveSize) {
                case enums.TextSize.Small:
                    this._computedLineHeight = lineHeights.small;
                    break;
                case enums.TextSize.Medium:
                    this._computedLineHeight = lineHeights.medium;
                    break;
                case enums.TextSize.Large:
                    this._computedLineHeight = lineHeights.large;
                    break;
                case enums.TextSize.ExtraLarge:
                    this._computedLineHeight = lineHeights.extraLarge;
                    break;
                default:
                    this._computedLineHeight = lineHeights.default;
                    break;
            }
        }
        else {
            // Looks like 1.33 is the magic number to compute line-height
            // from font size.
            this._computedLineHeight =
                this.getFontSize(this.hostConfig.getFontTypeDefinition(this.effectiveFontType)) *
                    1.33;
        }
        targetElement.style.lineHeight = this._computedLineHeight + "px";
    };
    TextBlock.prototype.getJsonTypeName = function () {
        return "TextBlock";
    };
    TextBlock.prototype.getEffectiveTextStyleDefinition = function () {
        if (this.style) {
            return this.hostConfig.textStyles.getStyleByName(this.style);
        }
        return _super.prototype.getEffectiveTextStyleDefinition.call(this);
    };
    TextBlock.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = false; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (shared.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines && this.isDisplayed()) {
            // Reset the element's innerHTML in case the available room for
            // content has increased
            this.restoreOriginalContent();
            this.truncateIfSupported(this._computedLineHeight * this.maxLines);
        }
    };
    var _a, _b;
    TextBlock.wrapProperty = new serialization.BoolProperty(serialization.Versions.v1_0, "wrap", false);
    TextBlock.maxLinesProperty = new serialization.NumProperty(serialization.Versions.v1_0, "maxLines");
    TextBlock.styleProperty = new serialization.ValueSetProperty(serialization.Versions.v1_5, "style", [
        { value: "default" },
        { value: "columnHeader" },
        { value: "heading" }
    ]);
    // Markdown processing is handled outside of Adaptive Cards. It's up to the host to ensure that markdown is safely
    // processed.
    TextBlock._ttMarkdownPolicy = (typeof window === 'undefined') ? undefined : (_a = window.trustedTypes) === null || _a === void 0 ? void 0 : _a.createPolicy("adaptivecards#markdownPassthroughPolicy", { createHTML: function (value) { return value; } });
    // When "advanced" truncation is enabled (see GlobalSettings.useAdvancedCardBottomTruncation and
    // GlobalSettings.useAdvancedTextBlockTruncation), we store the original pre-truncation content in
    // _originalInnerHtml so that we can restore/recalculate truncation later if space availability has changed (see
    // TextBlock.restoreOriginalContent())
    TextBlock._ttRoundtripPolicy = (typeof window === 'undefined') ? undefined : (_b = window.trustedTypes) === null || _b === void 0 ? void 0 : _b.createPolicy("adaptivecards#restoreContentsPolicy", { createHTML: function (value) { return value; } });
    __decorate([
        (0, serialization.property)(TextBlock.wrapProperty)
    ], TextBlock.prototype, "wrap", void 0);
    __decorate([
        (0, serialization.property)(TextBlock.maxLinesProperty)
    ], TextBlock.prototype, "maxLines", void 0);
    __decorate([
        (0, serialization.property)(TextBlock.styleProperty)
    ], TextBlock.prototype, "style", void 0);
    return TextBlock;
}(BaseTextBlock));
exports.TextBlock = TextBlock;
var TextRun = /** @class */ (function (_super) {
    __extends(TextRun, _super);
    function TextRun() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.italic = false;
        _this.strikethrough = false;
        _this.highlight = false;
        _this.underline = false;
        return _this;
    }
    TextRun.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.add(BaseTextBlock.selectActionProperty);
    };
    //#endregion
    TextRun.prototype.internalRender = function () {
        var _this = this;
        if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var formattedText = textFormatters.formatText(this.lang, preProcessedText);
            if (!formattedText) {
                formattedText = "";
            }
            var element = document.createElement("span");
            element.classList.add(hostConfig.makeCssClassName("ac-textRun"));
            this.applyStylesTo(element);
            if (this.selectAction && hostConfig.supportsInteractivity) {
                var anchor = document.createElement("a");
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                var href = this.selectAction.getHref();
                anchor.href = href ? href : "";
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (_this.selectAction && _this.selectAction.isEffectivelyEnabled()) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                this.selectAction.setupElementForAccessibility(anchor);
                anchor.innerText = formattedText;
                element.appendChild(anchor);
            }
            else {
                element.innerText = formattedText;
            }
            return element;
        }
        else {
            return undefined;
        }
    };
    TextRun.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        if (this.italic) {
            targetElement.style.fontStyle = "italic";
        }
        if (this.strikethrough) {
            targetElement.style.textDecoration = "line-through";
        }
        if (this.highlight) {
            var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
            var backgroundColor = utils.stringToCssColor(this.effectiveIsSubtle
                ? colorDefinition.highlightColors.subtle
                : colorDefinition.highlightColors.default);
            if (backgroundColor) {
                targetElement.style.backgroundColor = backgroundColor;
            }
        }
        if (this.underline) {
            targetElement.style.textDecoration = "underline";
        }
    };
    TextRun.prototype.getJsonTypeName = function () {
        return "TextRun";
    };
    Object.defineProperty(TextRun.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRun.prototype, "isInline", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    TextRun.italicProperty = new serialization.BoolProperty(serialization.Versions.v1_2, "italic", false);
    TextRun.strikethroughProperty = new serialization.BoolProperty(serialization.Versions.v1_2, "strikethrough", false);
    TextRun.highlightProperty = new serialization.BoolProperty(serialization.Versions.v1_2, "highlight", false);
    TextRun.underlineProperty = new serialization.BoolProperty(serialization.Versions.v1_3, "underline", false);
    __decorate([
        (0, serialization.property)(TextRun.italicProperty)
    ], TextRun.prototype, "italic", void 0);
    __decorate([
        (0, serialization.property)(TextRun.strikethroughProperty)
    ], TextRun.prototype, "strikethrough", void 0);
    __decorate([
        (0, serialization.property)(TextRun.highlightProperty)
    ], TextRun.prototype, "highlight", void 0);
    __decorate([
        (0, serialization.property)(TextRun.underlineProperty)
    ], TextRun.prototype, "underline", void 0);
    return TextRun;
}(BaseTextBlock));
exports.TextRun = TextRun;
var RichTextBlock = /** @class */ (function (_super) {
    __extends(RichTextBlock, _super);
    function RichTextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inlines = [];
        return _this;
    }
    RichTextBlock.prototype.internalAddInline = function (inline, forceAdd) {
        if (forceAdd === void 0) { forceAdd = false; }
        if (!inline.isInline) {
            throw new Error(strings.Strings.errors.elementCannotBeUsedAsInline());
        }
        var doAdd = inline.parent === undefined || forceAdd;
        if (!doAdd && inline.parent !== this) {
            throw new Error(strings.Strings.errors.inlineAlreadyParented());
        }
        else {
            inline.setParent(this);
            this._inlines.push(inline);
        }
    };
    RichTextBlock.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._inlines = [];
        if (Array.isArray(source["inlines"])) {
            for (var _i = 0, _a = source["inlines"]; _i < _a.length; _i++) {
                var jsonInline = _a[_i];
                var inline = void 0;
                if (typeof jsonInline === "string") {
                    var textRun = new TextRun();
                    textRun.text = jsonInline;
                    inline = textRun;
                }
                else {
                    // No fallback for inlines in 1.2
                    inline = context.parseElement(this, jsonInline, [], false);
                }
                if (inline) {
                    this.internalAddInline(inline, true);
                }
            }
        }
    };
    RichTextBlock.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        if (this._inlines.length > 0) {
            var jsonInlines = [];
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                jsonInlines.push(inline.toJSON(context));
            }
            context.serializeValue(target, "inlines", jsonInlines);
        }
    };
    RichTextBlock.prototype.internalRender = function () {
        if (this._inlines.length > 0) {
            var element = void 0;
            if (this.forElementId) {
                var labelElement = document.createElement("label");
                labelElement.htmlFor = this.forElementId;
                element = labelElement;
            }
            else {
                element = document.createElement("div");
            }
            element.className = this.hostConfig.makeCssClassName("ac-richTextBlock");
            switch (this.getEffectiveHorizontalAlignment()) {
                case enums.HorizontalAlignment.Center:
                    element.style.textAlign = "center";
                    break;
                case enums.HorizontalAlignment.Right:
                    element.style.textAlign = "end";
                    break;
                default:
                    element.style.textAlign = "start";
                    break;
            }
            var renderedInlines = 0;
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                var renderedInline = inline.render();
                if (renderedInline) {
                    element.appendChild(renderedInline);
                    renderedInlines++;
                }
            }
            if (renderedInlines > 0) {
                return element;
            }
        }
        return undefined;
    };
    RichTextBlock.prototype.asString = function () {
        var result = "";
        for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
            var inline = _a[_i];
            result += inline.asString();
        }
        return result;
    };
    RichTextBlock.prototype.getJsonTypeName = function () {
        return "RichTextBlock";
    };
    RichTextBlock.prototype.getInlineCount = function () {
        return this._inlines.length;
    };
    RichTextBlock.prototype.getInlineAt = function (index) {
        if (index >= 0 && index < this._inlines.length) {
            return this._inlines[index];
        }
        else {
            throw new Error(strings.Strings.errors.indexOutOfRange(index));
        }
    };
    RichTextBlock.prototype.addInline = function (inline) {
        if (typeof inline === "string") {
            this.internalAddInline(new TextRun(inline));
        }
        else {
            this.internalAddInline(inline);
        }
    };
    RichTextBlock.prototype.removeInline = function (inline) {
        var index = this._inlines.indexOf(inline);
        if (index >= 0) {
            this._inlines[index].setParent(undefined);
            this._inlines.splice(index, 1);
            return true;
        }
        return false;
    };
    return RichTextBlock;
}(CardElement));
exports.RichTextBlock = RichTextBlock;
var Fact = /** @class */ (function (_super) {
    __extends(Fact, _super);
    function Fact(name, value) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    //#endregion
    Fact.prototype.getSchemaKey = function () {
        return "Fact";
    };
    //#region Schema
    Fact.titleProperty = new serialization.StringProperty(serialization.Versions.v1_0, "title");
    Fact.valueProperty = new serialization.StringProperty(serialization.Versions.v1_0, "value");
    __decorate([
        (0, serialization.property)(Fact.titleProperty)
    ], Fact.prototype, "name", void 0);
    __decorate([
        (0, serialization.property)(Fact.valueProperty)
    ], Fact.prototype, "value", void 0);
    return Fact;
}(serialization.SerializableObject));
exports.Fact = Fact;
var FactSet = /** @class */ (function (_super) {
    __extends(FactSet, _super);
    function FactSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FactSet.prototype, "useDefaultSizing", {
        //#endregion
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    FactSet.prototype.internalRender = function () {
        var element = undefined;
        var hostConfig = this.hostConfig;
        if (this.facts.length > 0) {
            element = document.createElement("table");
            element.style.borderWidth = "0px";
            element.style.borderSpacing = "0px";
            element.style.borderStyle = "none";
            element.style.borderCollapse = "collapse";
            element.style.display = "block";
            element.style.overflow = "hidden";
            element.classList.add(hostConfig.makeCssClassName("ac-factset"));
            element.setAttribute("role", "presentation");
            for (var i = 0; i < this.facts.length; i++) {
                var trElement = document.createElement("tr");
                if (i > 0) {
                    trElement.style.marginTop = hostConfig.factSet.spacing + "px";
                }
                // Title column
                var tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-title"));
                if (hostConfig.factSet.title.maxWidth) {
                    tdElement.style.maxWidth = hostConfig.factSet.title.maxWidth + "px";
                }
                tdElement.style.verticalAlign = "top";
                var textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text =
                    !this.facts[i].name && this.isDesignMode() ? "Title" : this.facts[i].name;
                textBlock.size = hostConfig.factSet.title.size;
                textBlock.color = hostConfig.factSet.title.color;
                textBlock.isSubtle = hostConfig.factSet.title.isSubtle;
                textBlock.weight = hostConfig.factSet.title.weight;
                textBlock.wrap = hostConfig.factSet.title.wrap;
                textBlock.spacing = enums.Spacing.None;
                utils.appendChild(tdElement, textBlock.render());
                utils.appendChild(trElement, tdElement);
                // Spacer column
                tdElement = document.createElement("td");
                tdElement.style.width = "10px";
                utils.appendChild(trElement, tdElement);
                // Value column
                tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.style.verticalAlign = "top";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-value"));
                textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = this.facts[i].value;
                textBlock.size = hostConfig.factSet.value.size;
                textBlock.color = hostConfig.factSet.value.color;
                textBlock.isSubtle = hostConfig.factSet.value.isSubtle;
                textBlock.weight = hostConfig.factSet.value.weight;
                textBlock.wrap = hostConfig.factSet.value.wrap;
                textBlock.spacing = enums.Spacing.None;
                utils.appendChild(tdElement, textBlock.render());
                utils.appendChild(trElement, tdElement);
                utils.appendChild(element, trElement);
            }
        }
        return element;
    };
    FactSet.prototype.getJsonTypeName = function () {
        return "FactSet";
    };
    //#region Schema
    FactSet.factsProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_0, "facts", Fact);
    __decorate([
        (0, serialization.property)(FactSet.factsProperty)
    ], FactSet.prototype, "facts", void 0);
    return FactSet;
}(CardElement));
exports.FactSet = FactSet;
var ImageDimensionProperty = /** @class */ (function (_super) {
    __extends(ImageDimensionProperty, _super);
    function ImageDimensionProperty(targetVersion, name, internalName, fallbackProperty) {
        var _this = _super.call(this, targetVersion, name) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.internalName = internalName;
        _this.fallbackProperty = fallbackProperty;
        return _this;
    }
    ImageDimensionProperty.prototype.getInternalName = function () {
        return this.internalName;
    };
    ImageDimensionProperty.prototype.parse = function (sender, source, context) {
        var result = undefined;
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.defaultValue;
        }
        var isValid = false;
        if (typeof sourceValue === "string") {
            try {
                var size = shared.SizeAndUnit.parse(sourceValue, true);
                if (size.unit === enums.SizeUnit.Pixel) {
                    result = size.physicalSize;
                    isValid = true;
                }
            }
            catch (_a) {
                // Swallow the exception
            }
            // If the source value isn't valid per this property definition,
            // check its validity per the fallback property, if specified
            if (!isValid && this.fallbackProperty) {
                isValid = this.fallbackProperty.isValidValue(sourceValue, context);
            }
        }
        if (!isValid) {
            context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidPropertyValue(sourceValue, this.name));
        }
        return result;
    };
    ImageDimensionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : undefined);
    };
    return ImageDimensionProperty;
}(serialization.PropertyDefinition));
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = enums.Size.Auto;
        _this.style = enums.ImageStyle.Default;
        return _this;
    }
    Image.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.remove(CardElement.heightProperty);
    };
    //#endregion
    Image.prototype.applySize = function (element) {
        if (this.pixelWidth || this.pixelHeight) {
            if (this.pixelWidth) {
                element.style.width = this.pixelWidth + "px";
            }
            if (this.pixelHeight) {
                element.style.height = this.pixelHeight + "px";
            }
        }
        else {
            if (this.maxHeight) {
                // If the image is constrained in height, we set its height property and
                // auto and stretch are ignored (default to medium). THis is necessary for
                // ImageSet which uses a maximum image height as opposed to the cards width
                // as a constraining dimension
                switch (this.size) {
                    case enums.Size.Small:
                        element.style.height = this.hostConfig.imageSizes.small + "px";
                        break;
                    case enums.Size.Large:
                        element.style.height = this.hostConfig.imageSizes.large + "px";
                        break;
                    default:
                        element.style.height = this.hostConfig.imageSizes.medium + "px";
                        break;
                }
                element.style.maxHeight = this.maxHeight + "px";
            }
            else {
                switch (this.size) {
                    case enums.Size.Stretch:
                        element.style.width = "100%";
                        break;
                    case enums.Size.Auto:
                        element.style.maxWidth = "100%";
                        break;
                    case enums.Size.Small:
                        element.style.width = this.hostConfig.imageSizes.small + "px";
                        break;
                    case enums.Size.Large:
                        element.style.width = this.hostConfig.imageSizes.large + "px";
                        break;
                    case enums.Size.Medium:
                        element.style.width = this.hostConfig.imageSizes.medium + "px";
                        break;
                }
                element.style.maxHeight = "100%";
            }
        }
    };
    Object.defineProperty(Image.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.internalRender = function () {
        var _this = this;
        var element = undefined;
        if (this.url) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.alignItems = "flex-start";
            // Cache hostConfig to avoid walking the parent hierarchy multiple times
            var hostConfig = this.hostConfig;
            switch (this.getEffectiveHorizontalAlignment()) {
                case enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var imageElement = document.createElement("img");
            this.renderedImageElement = imageElement;
            imageElement.onload = function (_e) {
                raiseImageLoadedEvent(_this);
            };
            imageElement.onerror = function (_e) {
                if (_this.renderedElement) {
                    var card = _this.getRootElement();
                    clearElement(_this.renderedElement);
                    if (card && card.designMode) {
                        var errorElement = document.createElement("div");
                        errorElement.style.display = "flex";
                        errorElement.style.alignItems = "center";
                        errorElement.style.justifyContent = "center";
                        errorElement.style.backgroundColor = "#EEEEEE";
                        errorElement.style.color = "black";
                        errorElement.innerText = ":-(";
                        errorElement.style.padding = "10px";
                        _this.applySize(errorElement);
                        _this.renderedElement.appendChild(errorElement);
                    }
                }
                raiseImageLoadedEvent(_this);
            };
            imageElement.style.minWidth = "0";
            imageElement.classList.add(hostConfig.makeCssClassName("ac-image"));
            if (this.selectAction && hostConfig.supportsInteractivity) {
                imageElement.onkeypress = function (e) {
                    if (_this.selectAction &&
                        _this.selectAction.isEffectivelyEnabled() &&
                        (e.code === "Enter" || e.code === "Space")) {
                        // enter or space pressed
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                imageElement.onclick = function (e) {
                    if (_this.selectAction && _this.selectAction.isEffectivelyEnabled()) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                this.selectAction.setupElementForAccessibility(imageElement);
                if (this.selectAction.isEffectivelyEnabled()) {
                    imageElement.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
            this.applySize(imageElement);
            if (this.style === enums.ImageStyle.Person) {
                imageElement.style.borderRadius = "50%";
                imageElement.style.backgroundPosition = "50% 50%";
                imageElement.style.backgroundRepeat = "no-repeat";
            }
            var backgroundColor = utils.stringToCssColor(this.backgroundColor);
            if (backgroundColor) {
                imageElement.style.backgroundColor = backgroundColor;
            }
            this.setImageSource(imageElement);
            var altTextProperty = this.preProcessPropertyValue(Image.altTextProperty);
            if (altTextProperty) {
                imageElement.alt = altTextProperty;
            }
            element.appendChild(imageElement);
        }
        return element;
    };
    Image.prototype.getJsonTypeName = function () {
        return "Image";
    };
    Image.prototype.getAllActions = function () {
        var result = _super.prototype.getAllActions.call(this);
        if (this.selectAction) {
            result.push(this.selectAction);
        }
        return result;
    };
    Image.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.selectAction) {
            result = this.selectAction.getActionById(id);
        }
        return result;
    };
    Image.prototype.getResourceInformation = function () {
        return this.url ? [{ url: this.url, mimeType: "image" }] : [];
    };
    Image.prototype.setImageSource = function (imageElement) {
        var imageForceLoader = new ImageForceLoader(this.forceLoad, this.url);
        imageForceLoader.configureImage(this);
        imageElement.src = this.preProcessPropertyValue(Image.urlProperty);
        imageForceLoader.resetImage(this);
    };
    Image.urlProperty = new serialization.StringProperty(serialization.Versions.v1_0, "url");
    Image.altTextProperty = new serialization.StringProperty(serialization.Versions.v1_0, "altText");
    Image.backgroundColorProperty = new serialization.StringProperty(serialization.Versions.v1_1, "backgroundColor");
    Image.styleProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "style", enums.ImageStyle, enums.ImageStyle.Default);
    Image.sizeProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "size", enums.Size, enums.Size.Auto);
    Image.pixelWidthProperty = new ImageDimensionProperty(serialization.Versions.v1_1, "width", "pixelWidth");
    Image.pixelHeightProperty = new ImageDimensionProperty(serialization.Versions.v1_1, "height", "pixelHeight", CardElement.heightProperty);
    Image.selectActionProperty = new ActionProperty(serialization.Versions.v1_1, "selectAction", [
        "Action.ShowCard"
    ]);
    Image.shouldForceLoadProperty = new serialization.BoolProperty(serialization.Versions.v1_6, "forceLoad", false);
    __decorate([
        (0, serialization.property)(Image.urlProperty)
    ], Image.prototype, "url", void 0);
    __decorate([
        (0, serialization.property)(Image.altTextProperty)
    ], Image.prototype, "altText", void 0);
    __decorate([
        (0, serialization.property)(Image.backgroundColorProperty)
    ], Image.prototype, "backgroundColor", void 0);
    __decorate([
        (0, serialization.property)(Image.sizeProperty)
    ], Image.prototype, "size", void 0);
    __decorate([
        (0, serialization.property)(Image.styleProperty)
    ], Image.prototype, "style", void 0);
    __decorate([
        (0, serialization.property)(Image.pixelWidthProperty)
    ], Image.prototype, "pixelWidth", void 0);
    __decorate([
        (0, serialization.property)(Image.pixelHeightProperty)
    ], Image.prototype, "pixelHeight", void 0);
    __decorate([
        (0, serialization.property)(Image.selectActionProperty)
    ], Image.prototype, "selectAction", void 0);
    __decorate([
        (0, serialization.property)(Image.shouldForceLoadProperty)
    ], Image.prototype, "forceLoad", void 0);
    return Image;
}(CardElement));
exports.Image = Image;
// configures Image element to fetch a new image data from url source instead of relying on cache
// currently rudimentary refreshing scheme is used
// by attaching unique query string to url, we bypass the cache usage
var ImageForceLoader = /** @class */ (function () {
    function ImageForceLoader(doForceLoad, url) {
        this.doForceLoad = doForceLoad;
        this.url = url;
        if (url && url.length && doForceLoad) {
            // we can do better by appending unique key such as uuid instead of epoch
            // however the current usage is for front-end ui and networking,  
            // since ui is running in single main thread, this is sufficient mechanism
            // without needing to depend on external library for our small use cases.
            this.uniqueHash = '?' + Date.now();
            this.urlWithForceLoadOption = url + this.uniqueHash;
        }
    }
    ImageForceLoader.prototype.configureImage = function (image) {
        if (this.urlWithForceLoadOption && this.urlWithForceLoadOption.length) {
            image.url = this.urlWithForceLoadOption;
        }
    };
    ImageForceLoader.prototype.resetImage = function (image) {
        image.url = this.url;
    };
    return ImageForceLoader;
}());
var CardElementContainer = /** @class */ (function (_super) {
    __extends(CardElementContainer, _super);
    function CardElementContainer() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allowVerticalOverflow = false;
        return _this;
    }
    CardElementContainer.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        if (!this.isSelectable) {
            schema.remove(CardElementContainer.selectActionProperty);
        }
    };
    //#endregion
    CardElementContainer.prototype.isElementAllowed = function (element) {
        return this.hostConfig.supportsInteractivity || !element.isInteractive;
    };
    CardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new shared.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        this.renderedElement.style.marginRight = "0";
        this.renderedElement.style.marginLeft = "0";
    };
    Object.defineProperty(CardElementContainer.prototype, "isSelectable", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    CardElementContainer.prototype.forbiddenChildElements = function () {
        return [];
    };
    CardElementContainer.prototype.releaseDOMResources = function () {
        _super.prototype.releaseDOMResources.call(this);
        for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).releaseDOMResources();
        }
    };
    CardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        for (var i = 0; i < this.getItemCount(); i++) {
            var item = this.getItemAt(i);
            if (!this.hostConfig.supportsInteractivity && item.isInteractive) {
                context.addFailure(this, enums.ValidationEvent.InteractivityNotAllowed, strings.Strings.errors.interactivityNotAllowed());
            }
            if (!this.isElementAllowed(item)) {
                context.addFailure(this, enums.ValidationEvent.InteractivityNotAllowed, strings.Strings.errors.elementTypeNotAllowed(item.getJsonTypeName()));
            }
            item.internalValidateProperties(context);
        }
        if (this._selectAction) {
            this._selectAction.internalValidateProperties(context);
        }
    };
    CardElementContainer.prototype.render = function () {
        var _this = this;
        var element = _super.prototype.render.call(this);
        if (element) {
            var hostConfig = this.hostConfig;
            if (this.allowVerticalOverflow) {
                element.style.overflowX = "hidden";
                element.style.overflowY = "auto";
            }
            if (element &&
                this.isSelectable &&
                this._selectAction &&
                hostConfig.supportsInteractivity) {
                element.onclick = function (e) {
                    if (_this._selectAction && _this._selectAction.isEffectivelyEnabled()) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this._selectAction.execute();
                    }
                };
                element.onkeypress = function (e) {
                    if (_this._selectAction &&
                        _this._selectAction.isEffectivelyEnabled() &&
                        (e.code === "Enter" || e.code === "Space")) {
                        // Enter or space pressed
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this._selectAction.execute();
                    }
                };
                this._selectAction.setupElementForAccessibility(element);
                if (this._selectAction.isEffectivelyEnabled()) {
                    element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
        }
        return element;
    };
    CardElementContainer.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (processChildren) {
            for (var i = 0; i < this.getItemCount(); i++) {
                this.getItemAt(i).updateLayout();
            }
        }
    };
    CardElementContainer.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result.push.apply(result, this.getItemAt(i).getAllInputs(processActions));
        }
        return result;
    };
    CardElementContainer.prototype.getAllActions = function () {
        var result = _super.prototype.getAllActions.call(this);
        for (var i = 0; i < this.getItemCount(); i++) {
            result.push.apply(result, this.getItemAt(i).getAllActions());
        }
        if (this._selectAction) {
            result.push(this._selectAction);
        }
        return result;
    };
    CardElementContainer.prototype.getResourceInformation = function () {
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result.push.apply(result, this.getItemAt(i).getResourceInformation());
        }
        return result;
    };
    CardElementContainer.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this.getItemCount(); i++) {
                result = this.getItemAt(i).getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    /**
     * @inheritdoc
     */
    CardElementContainer.prototype.findDOMNodeOwner = function (node) {
        var _a;
        var target = undefined;
        for (var i = 0; i < this.getItemCount(); i++) {
            // recur through child elements
            target = this.getItemAt(i).findDOMNodeOwner(node);
            if (target) {
                return target;
            }
        }
        // If not found in children, check the actions
        for (var i = 0; i < this.getActionCount(); i++) {
            target = (_a = this.getActionAt(i)) === null || _a === void 0 ? void 0 : _a.findDOMNodeOwner(node);
            if (target) {
                return target;
            }
        }
        // if not found in children or actions, defer to parent implementation
        return _super.prototype.findDOMNodeOwner.call(this, node);
    };
    CardElementContainer.selectActionProperty = new ActionProperty(serialization.Versions.v1_1, "selectAction", [
        "Action.ShowCard"
    ]);
    __decorate([
        (0, serialization.property)(CardElementContainer.selectActionProperty)
    ], CardElementContainer.prototype, "_selectAction", void 0);
    return CardElementContainer;
}(CardElement));
exports.CardElementContainer = CardElementContainer;
var ImageSet = /** @class */ (function (_super) {
    __extends(ImageSet, _super);
    function ImageSet() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._images = [];
        _this.imageSize = enums.ImageSize.Medium;
        _this.presentationStyle = enums.ImageSetPresentationStyle.Default;
        _this.pixelOffset = 0;
        return _this;
    }
    //#endregion
    ImageSet.prototype.internalRender = function () {
        var element = undefined;
        if (this._images.length > 0) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            for (var _i = 0, _a = this._images; _i < _a.length; _i++) {
                var image = _a[_i];
                switch (this.imageSize) {
                    case enums.ImageSize.Small:
                        image.size = enums.Size.Small;
                        break;
                    case enums.ImageSize.Large:
                        image.size = enums.Size.Large;
                        break;
                    default:
                        image.size = enums.Size.Medium;
                        break;
                }
                image.maxHeight = this.hostConfig.imageSet.maxImageHeight;
                var renderedImage = image.render();
                if (renderedImage) {
                    renderedImage.style.display = "inline-flex";
                    renderedImage.style.margin = "0px";
                    if (this.presentationStyle == enums.ImageSetPresentationStyle.Default) {
                        renderedImage.style.marginRight = "10px";
                    }
                    utils.appendChild(element, renderedImage);
                }
            }
            if (this.presentationStyle == enums.ImageSetPresentationStyle.Stacked) {
                this.applyStackedPresentationStyle();
            }
        }
        return element;
    };
    ImageSet.prototype.applyStackedPresentationStyle = function () {
        if (this._images[0].renderedImageElement) {
            var dimension = StackedImageConfigurator.parseNumericPixelDimension(this._images[0].renderedImageElement.style.height);
            var bgColor = this.getEffectiveBackgroundColor();
            if (dimension) {
                var stackedImageConfigurator = new StackedImageConfigurator(this.pixelOffset, dimension, bgColor);
                stackedImageConfigurator.configureImagesArrayAsStackedLayout(this._images);
            }
        }
    };
    ImageSet.prototype.getEffectiveBackgroundColor = function () {
        var parentContainer = this.getParentContainer();
        var style = parentContainer === null || parentContainer === void 0 ? void 0 : parentContainer.getEffectiveStyle();
        var styleDefinition = this.hostConfig.containerStyles.getStyleByName(style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
        return utils.stringToCssColor(styleDefinition.backgroundColor);
    };
    ImageSet.prototype.getItemCount = function () {
        return this._images.length;
    };
    ImageSet.prototype.getItemAt = function (index) {
        return this._images[index];
    };
    ImageSet.prototype.getFirstVisibleRenderedItem = function () {
        return this._images && this._images.length > 0 ? this._images[0] : undefined;
    };
    ImageSet.prototype.getLastVisibleRenderedItem = function () {
        return this._images && this._images.length > 0
            ? this._images[this._images.length - 1]
            : undefined;
    };
    ImageSet.prototype.removeItem = function (item) {
        if (item instanceof Image) {
            var itemIndex = this._images.indexOf(item);
            if (itemIndex >= 0) {
                this._images.splice(itemIndex, 1);
                item.setParent(undefined);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ImageSet.prototype.getJsonTypeName = function () {
        return "ImageSet";
    };
    ImageSet.prototype.addImage = function (image) {
        if (!image.parent) {
            this._images.push(image);
            image.setParent(this);
        }
        else {
            throw new Error("This image already belongs to another ImageSet");
        }
    };
    ImageSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Image ? this._images.indexOf(cardElement) : -1;
    };
    ImageSet.imagesProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_0, "images", Image, function (sender, item) {
        item.setParent(sender);
    });
    ImageSet.imageSizeProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "imageSize", enums.ImageSize, enums.ImageSize.Medium);
    ImageSet.imagePresentationStyle = new serialization.EnumProperty(serialization.Versions.v1_6, "style", enums.ImageSetPresentationStyle, enums.ImageSetPresentationStyle.Default);
    ImageSet.pixelOffset = new serialization.NumProperty(serialization.Versions.v1_6, "offset", 0, undefined);
    __decorate([
        (0, serialization.property)(ImageSet.imagesProperty)
    ], ImageSet.prototype, "_images", void 0);
    __decorate([
        (0, serialization.property)(ImageSet.imageSizeProperty)
    ], ImageSet.prototype, "imageSize", void 0);
    __decorate([
        (0, serialization.property)(ImageSet.imagePresentationStyle)
    ], ImageSet.prototype, "presentationStyle", void 0);
    __decorate([
        (0, serialization.property)(ImageSet.pixelOffset)
    ], ImageSet.prototype, "pixelOffset", void 0);
    return ImageSet;
}(CardElementContainer));
exports.ImageSet = ImageSet;
var StackedImageConfigurator = /** @class */ (function () {
    function StackedImageConfigurator(offset, dimension, style) {
        this.sign45 = 0.7071;
        this.maxImageCounts = 2;
        this.offset = 0;
        this.normalizationConstant = 0;
        this.border = 5;
        this.dimension = 0;
        this.dimension = dimension;
        this.normalizationConstant = (dimension * this.sign45 - 0.5 * dimension) * 2;
        // offset determines how far images are placed from each other
        // at zero, images are separated only by the border
        // there is no restriction on how far they are apart in positive values, their actual
        // positioning is limited by maximum size imposed by Image renderer
        // a negative value can decrease upto the diameter of the image since a value less than the diameter
        // put the images past each other, and the use of such value is not reasonable request
        // users should change image positions in such case.
        this.offset = this.sign45 * (Math.max(offset, -dimension) - this.normalizationConstant);
        this.style = style ? style : "";
    }
    StackedImageConfigurator.prototype.moveImageRight = function (element) {
        element.style.marginLeft = this.offset + "px";
    };
    StackedImageConfigurator.prototype.moveImageUp = function (element) {
        element.style.marginBottom = this.offset + this.dimension + "px";
    };
    StackedImageConfigurator.prototype.moveImageDown = function (element) {
        element.style.marginTop = this.offset + this.dimension + "px";
    };
    StackedImageConfigurator.prototype.makeImageRound = function (element) {
        element.style.borderRadius = "50%";
        element.style.backgroundPosition = "50% 50%";
        element.style.backgroundRepeat = "no-repeat";
    };
    StackedImageConfigurator.prototype.applyBorder = function (element) {
        element.style.height = (this.dimension + this.border * 2) + "px";
        element.style.border = this.border + "px" + " solid " + this.style;
    };
    StackedImageConfigurator.prototype.configureImageForBottomLeft = function (element) {
        this.moveImageDown(element);
        this.makeImageRound(element);
        this.applyBorder(element);
        element.style.zIndex = "2";
    };
    StackedImageConfigurator.prototype.configureImageForTopRight = function (element) {
        this.moveImageUp(element);
        this.moveImageRight(element);
        this.makeImageRound(element);
        element.style.zIndex = "1";
    };
    // stacked layout is applied when there are two images in ImageSet,
    // first image in the ImageSet is put bottom left of ImageSet,
    // second image is placed top right diagonally to the first image at 45 angle
    // first image is placed over the second image should the overlap to occur.
    StackedImageConfigurator.prototype.configureImagesArrayAsStackedLayout = function (elements) {
        if (elements.length == 1) {
            if (elements[0].renderedImageElement) {
                this.makeImageRound(elements[0].renderedImageElement);
            }
        }
        else if (elements.length <= this.maxImageCounts) {
            if (elements[0].renderedImageElement && elements[1].renderedImageElement) {
                this.configureImageForBottomLeft(elements[0].renderedImageElement);
                this.configureImageForTopRight(elements[1].renderedImageElement);
            }
        }
    };
    StackedImageConfigurator.parseNumericPixelDimension = function (dimension) {
        if ((dimension === null || dimension === void 0 ? void 0 : dimension.substring(dimension.length - 2)) == 'px') {
            return parseInt(dimension.substring(0, dimension.length - 2));
        }
        return undefined;
    };
    return StackedImageConfigurator;
}());
var ContentSource = /** @class */ (function (_super) {
    __extends(ContentSource, _super);
    //#endregion
    function ContentSource(url, mimeType) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.mimeType = mimeType;
        return _this;
    }
    ContentSource.prototype.isValid = function () {
        return this.mimeType && this.url ? true : false;
    };
    //#region Schema
    ContentSource.mimeTypeProperty = new serialization.StringProperty(serialization.Versions.v1_1, "mimeType");
    ContentSource.urlProperty = new serialization.StringProperty(serialization.Versions.v1_1, "url");
    __decorate([
        (0, serialization.property)(ContentSource.mimeTypeProperty)
    ], ContentSource.prototype, "mimeType", void 0);
    __decorate([
        (0, serialization.property)(ContentSource.urlProperty)
    ], ContentSource.prototype, "url", void 0);
    return ContentSource;
}(serialization.SerializableObject));
exports.ContentSource = ContentSource;
var CaptionSource = /** @class */ (function (_super) {
    __extends(CaptionSource, _super);
    //#endregion
    function CaptionSource(url, mimeType, label) {
        var _this = _super.call(this, url, mimeType) || this;
        _this.label = label;
        return _this;
    }
    CaptionSource.prototype.getSchemaKey = function () {
        return "CaptionSource";
    };
    CaptionSource.prototype.render = function () {
        var result = undefined;
        if (this.isValid()) {
            result = document.createElement("track");
            result.src = this.url;
            result.kind = "captions";
            result.label = this.label;
        }
        return result;
    };
    //#region Schema
    CaptionSource.labelProperty = new serialization.StringProperty(serialization.Versions.v1_6, "label");
    __decorate([
        (0, serialization.property)(CaptionSource.labelProperty)
    ], CaptionSource.prototype, "label", void 0);
    return CaptionSource;
}(ContentSource));
exports.CaptionSource = CaptionSource;
var MediaSource = /** @class */ (function (_super) {
    __extends(MediaSource, _super);
    function MediaSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaSource.prototype.getSchemaKey = function () {
        return "MediaSource";
    };
    MediaSource.prototype.render = function () {
        var result = undefined;
        if (this.isValid()) {
            result = document.createElement("source");
            result.src = this.url;
            result.type = this.mimeType;
        }
        return result;
    };
    return MediaSource;
}(ContentSource));
exports.MediaSource = MediaSource;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer() {
    }
    MediaPlayer.prototype.play = function () {
        // Do nothing in base implementation
    };
    Object.defineProperty(MediaPlayer.prototype, "posterUrl", {
        get: function () {
            return this._posterUrl;
        },
        set: function (value) {
            this._posterUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaPlayer.prototype, "selectedMediaType", {
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    return MediaPlayer;
}());
exports.MediaPlayer = MediaPlayer;
var HTML5MediaPlayer = /** @class */ (function (_super) {
    __extends(HTML5MediaPlayer, _super);
    function HTML5MediaPlayer(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        _this._selectedSources = [];
        _this._captionSources = [];
        _this.processSources();
        return _this;
    }
    HTML5MediaPlayer.prototype.processSources = function () {
        var _a;
        this._selectedSources = [];
        this._captionSources = [];
        this._selectedMediaType = undefined;
        for (var _i = 0, _b = this.owner.sources; _i < _b.length; _i++) {
            var source = _b[_i];
            var mimeComponents = source.mimeType ? source.mimeType.split("/") : [];
            if (mimeComponents.length === 2) {
                if (!this._selectedMediaType) {
                    var index = HTML5MediaPlayer.supportedMediaTypes.indexOf(mimeComponents[0]);
                    if (index >= 0) {
                        this._selectedMediaType = HTML5MediaPlayer.supportedMediaTypes[index];
                    }
                }
                if (mimeComponents[0] === this._selectedMediaType) {
                    this._selectedSources.push(source);
                }
            }
        }
        (_a = this._captionSources).push.apply(_a, this.owner.captionSources);
    };
    HTML5MediaPlayer.prototype.canPlay = function () {
        return this._selectedSources.length > 0;
    };
    HTML5MediaPlayer.prototype.fetchVideoDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HTML5MediaPlayer.prototype.render = function () {
        if (this._selectedMediaType === "video") {
            this._mediaElement = document.createElement("video");
        }
        else {
            this._mediaElement = document.createElement("audio");
        }
        this._mediaElement.setAttribute("aria-label", this.owner.altText ? this.owner.altText : strings.Strings.defaults.mediaPlayerAriaLabel());
        this._mediaElement.setAttribute("webkit-playsinline", "");
        this._mediaElement.setAttribute("playsinline", "");
        // We enable crossorigin for cases where the caption file has a different domain than
        // the video file. If the caption file lives in a different domain than the video file
        // and crossorigin is not set, then the caption file will fail to load.
        this._mediaElement.setAttribute("crossorigin", "");
        this._mediaElement.autoplay = true;
        this._mediaElement.controls = true;
        if (utils.isMobileOS()) {
            this._mediaElement.muted = true;
        }
        this._mediaElement.preload = "none";
        this._mediaElement.style.width = "100%";
        for (var _i = 0, _a = this.owner.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var renderedSource = source.render();
            utils.appendChild(this._mediaElement, renderedSource);
        }
        for (var _b = 0, _c = this.owner.captionSources; _b < _c.length; _b++) {
            var captionSource = _c[_b];
            if (captionSource.mimeType == "vtt") {
                var renderedCaptionSource = captionSource.render();
                utils.appendChild(this._mediaElement, renderedCaptionSource);
            }
        }
        return this._mediaElement;
    };
    HTML5MediaPlayer.prototype.play = function () {
        if (this._mediaElement) {
            this._mediaElement.play();
        }
    };
    Object.defineProperty(HTML5MediaPlayer.prototype, "selectedMediaType", {
        get: function () {
            return this._selectedMediaType;
        },
        enumerable: false,
        configurable: true
    });
    HTML5MediaPlayer.supportedMediaTypes = ["audio", "video"];
    return HTML5MediaPlayer;
}(MediaPlayer));
exports.HTML5MediaPlayer = HTML5MediaPlayer;
var CustomMediaPlayer = /** @class */ (function (_super) {
    __extends(CustomMediaPlayer, _super);
    function CustomMediaPlayer(matches) {
        return _super.call(this) || this;
    }
    return CustomMediaPlayer;
}(MediaPlayer));
exports.CustomMediaPlayer = CustomMediaPlayer;
var IFrameMediaMediaPlayer = /** @class */ (function (_super) {
    __extends(IFrameMediaMediaPlayer, _super);
    function IFrameMediaMediaPlayer(matches, iFrameTitle) {
        var _this = _super.call(this, matches) || this;
        _this.iFrameTitle = iFrameTitle;
        if (matches.length >= 2) {
            _this._videoId = matches[1];
        }
        return _this;
    }
    IFrameMediaMediaPlayer.prototype.canPlay = function () {
        return this._videoId !== undefined;
    };
    IFrameMediaMediaPlayer.prototype.render = function () {
        var container = document.createElement("div");
        container.style.position = "relative";
        container.style.width = "100%";
        container.style.height = "0";
        container.style.paddingBottom = "56.25%";
        var iFrame = document.createElement("iframe");
        iFrame.style.position = "absolute";
        iFrame.style.top = "0";
        iFrame.style.left = "0";
        iFrame.style.width = "100%";
        iFrame.style.height = "100%";
        iFrame.src = this.getEmbedVideoUrl();
        iFrame.frameBorder = "0";
        if (this.iFrameTitle) {
            iFrame.title = this.iFrameTitle;
        }
        iFrame.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iFrame.allowFullscreen = true;
        container.appendChild(iFrame);
        return container;
    };
    Object.defineProperty(IFrameMediaMediaPlayer.prototype, "videoId", {
        get: function () {
            return this._videoId;
        },
        enumerable: false,
        configurable: true
    });
    return IFrameMediaMediaPlayer;
}(CustomMediaPlayer));
exports.IFrameMediaMediaPlayer = IFrameMediaMediaPlayer;
var VimeoPlayer = /** @class */ (function (_super) {
    __extends(VimeoPlayer, _super);
    function VimeoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VimeoPlayer.prototype.fetchVideoDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oEmbedUrl, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oEmbedUrl = "https://vimeo.com/api/oembed.json?url=".concat(this.getEmbedVideoUrl());
                        return [4 /*yield*/, fetch(oEmbedUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        this.posterUrl = json["thumbnail_url"];
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VimeoPlayer.prototype.getEmbedVideoUrl = function () {
        return "https://player.vimeo.com/video/".concat(this.videoId, "?autoplay=1");
    };
    return VimeoPlayer;
}(IFrameMediaMediaPlayer));
exports.VimeoPlayer = VimeoPlayer;
var DailymotionPlayer = /** @class */ (function (_super) {
    __extends(DailymotionPlayer, _super);
    function DailymotionPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailymotionPlayer.prototype.fetchVideoDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiUrl = "https://api.dailymotion.com/video/".concat(this.videoId, "?fields=thumbnail_720_url");
                        return [4 /*yield*/, fetch(apiUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        this.posterUrl = json["thumbnail_720_url"];
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DailymotionPlayer.prototype.getEmbedVideoUrl = function () {
        return "https://www.dailymotion.com/embed/video/".concat(this.videoId, "?autoplay=1");
    };
    return DailymotionPlayer;
}(IFrameMediaMediaPlayer));
exports.DailymotionPlayer = DailymotionPlayer;
var YouTubePlayer = /** @class */ (function (_super) {
    __extends(YouTubePlayer, _super);
    function YouTubePlayer(matches, iFrameTitle) {
        var _this = _super.call(this, matches, iFrameTitle) || this;
        _this.iFrameTitle = iFrameTitle;
        if (matches.length >= 3 && matches[2] !== undefined) {
            _this._startTimeIndex = parseInt(matches[2]);
        }
        return _this;
    }
    YouTubePlayer.prototype.fetchVideoDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.posterUrl = this.videoId
                    ? "https://img.youtube.com/vi/".concat(this.videoId, "/maxresdefault.jpg")
                    : undefined;
                return [2 /*return*/];
            });
        });
    };
    YouTubePlayer.prototype.getEmbedVideoUrl = function () {
        var url = "https://www.youtube.com/embed/".concat(this.videoId, "?autoplay=1");
        if (this._startTimeIndex !== undefined) {
            url += "&start=".concat(this._startTimeIndex);
        }
        return url;
    };
    return YouTubePlayer;
}(IFrameMediaMediaPlayer));
exports.YouTubePlayer = YouTubePlayer;
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sources = [];
        _this.captionSources = [];
        return _this;
    }
    Media.prototype.createMediaPlayer = function () {
        for (var _i = 0, _a = Media.customMediaPlayers; _i < _a.length; _i++) {
            var provider = _a[_i];
            for (var _b = 0, _c = this.sources; _b < _c.length; _b++) {
                var source = _c[_b];
                if (source.url) {
                    for (var _d = 0, _f = provider.urlPatterns; _d < _f.length; _d++) {
                        var pattern = _f[_d];
                        var matches = pattern.exec(source.url);
                        if (matches !== null) {
                            return provider.createMediaPlayer(matches);
                        }
                    }
                }
            }
        }
        return new HTML5MediaPlayer(this);
    };
    Media.prototype.handlePlayButtonInvoke = function (event) {
        if (this.hostConfig.media.allowInlinePlayback) {
            event.preventDefault();
            event.cancelBubble = true;
            if (this.renderedElement) {
                var mediaPlayerElement = this._mediaPlayer.render();
                clearElement(this.renderedElement);
                this.renderedElement.appendChild(mediaPlayerElement);
                this._mediaPlayer.play();
                mediaPlayerElement.focus();
            }
        }
        else {
            if (Media.onPlay) {
                event.preventDefault();
                event.cancelBubble = true;
                Media.onPlay(this);
            }
        }
    };
    Media.prototype.displayPoster = function () {
        return __awaiter(this, void 0, void 0, function () {
            var playButtonArrowWidth, playButtonArrowHeight, posterRootElement_1, posterUrl, posterImageElement_1, playButtonOuterElement, playButtonInnerElement, playButtonContainer;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.renderedElement) {
                    playButtonArrowWidth = 12;
                    playButtonArrowHeight = 15;
                    posterRootElement_1 = document.createElement("div");
                    posterRootElement_1.className = this.hostConfig.makeCssClassName("ac-media-poster");
                    posterRootElement_1.setAttribute("role", "contentinfo");
                    posterRootElement_1.setAttribute("aria-label", this.altText ? this.altText : strings.Strings.defaults.mediaPlayerAriaLabel());
                    posterRootElement_1.style.position = "relative";
                    posterRootElement_1.style.display = "flex";
                    posterUrl = this.poster ? this.poster : this._mediaPlayer.posterUrl;
                    if (!posterUrl) {
                        posterUrl = this.hostConfig.media.defaultPoster;
                    }
                    if (posterUrl) {
                        posterImageElement_1 = document.createElement("img");
                        posterImageElement_1.style.width = "100%";
                        posterImageElement_1.style.height = "100%";
                        posterImageElement_1.setAttribute("role", "presentation");
                        posterImageElement_1.onerror = function (_e) {
                            if (posterImageElement_1.parentNode) {
                                posterImageElement_1.parentNode.removeChild(posterImageElement_1);
                            }
                            posterRootElement_1.classList.add("empty");
                            posterRootElement_1.style.minHeight = "150px";
                        };
                        posterImageElement_1.src = posterUrl;
                        posterRootElement_1.appendChild(posterImageElement_1);
                    }
                    else {
                        posterRootElement_1.classList.add("empty");
                        posterRootElement_1.style.minHeight = "150px";
                    }
                    if (this.hostConfig.supportsInteractivity && this._mediaPlayer.canPlay()) {
                        playButtonOuterElement = document.createElement("div");
                        playButtonOuterElement.tabIndex = 0;
                        playButtonOuterElement.setAttribute("role", "button");
                        playButtonOuterElement.setAttribute("aria-label", strings.Strings.defaults.mediaPlayerPlayMedia());
                        playButtonOuterElement.className =
                            this.hostConfig.makeCssClassName("ac-media-playButton");
                        playButtonOuterElement.style.display = "flex";
                        playButtonOuterElement.style.alignItems = "center";
                        playButtonOuterElement.style.justifyContent = "center";
                        playButtonOuterElement.onclick = function (e) {
                            _this.handlePlayButtonInvoke(e);
                        };
                        playButtonOuterElement.onkeypress = function (e) {
                            if (e.code === "Enter" || e.code === "Space") {
                                // space or enter
                                _this.handlePlayButtonInvoke(e);
                            }
                        };
                        playButtonInnerElement = document.createElement("div");
                        playButtonInnerElement.className = this.hostConfig.makeCssClassName("ac-media-playButton-arrow");
                        playButtonInnerElement.style.width = playButtonArrowWidth + "px";
                        playButtonInnerElement.style.height = playButtonArrowHeight + "px";
                        playButtonInnerElement.style.borderTopWidth = playButtonArrowHeight / 2 + "px";
                        playButtonInnerElement.style.borderBottomWidth = playButtonArrowHeight / 2 + "px";
                        playButtonInnerElement.style.borderLeftWidth = playButtonArrowWidth + "px";
                        playButtonInnerElement.style.borderRightWidth = "0";
                        playButtonInnerElement.style.borderStyle = "solid";
                        playButtonInnerElement.style.borderTopColor = "transparent";
                        playButtonInnerElement.style.borderRightColor = "transparent";
                        playButtonInnerElement.style.borderBottomColor = "transparent";
                        playButtonInnerElement.style.transform =
                            "translate(" + playButtonArrowWidth / 10 + "px,0px)";
                        playButtonOuterElement.appendChild(playButtonInnerElement);
                        playButtonContainer = document.createElement("div");
                        playButtonContainer.style.position = "absolute";
                        playButtonContainer.style.left = "0";
                        playButtonContainer.style.top = "0";
                        playButtonContainer.style.width = "100%";
                        playButtonContainer.style.height = "100%";
                        playButtonContainer.style.display = "flex";
                        playButtonContainer.style.justifyContent = "center";
                        playButtonContainer.style.alignItems = "center";
                        playButtonContainer.appendChild(playButtonOuterElement);
                        posterRootElement_1.appendChild(playButtonContainer);
                    }
                    clearElement(this.renderedElement);
                    this.renderedElement.appendChild(posterRootElement_1);
                }
                return [2 /*return*/];
            });
        });
    };
    Media.prototype.internalRender = function () {
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-media");
        return element;
    };
    Media.prototype.render = function () {
        var _this = this;
        var result = _super.prototype.render.call(this);
        if (result) {
            this._mediaPlayer = this.createMediaPlayer();
            this._mediaPlayer.fetchVideoDetails().then(function () { return _this.displayPoster(); });
        }
        return result;
    };
    Media.prototype.releaseDOMResources = function () {
        _super.prototype.releaseDOMResources.call(this);
        this.displayPoster();
    };
    Media.prototype.getJsonTypeName = function () {
        return "Media";
    };
    Media.prototype.getResourceInformation = function () {
        var result = [];
        if (this._mediaPlayer) {
            var posterUrl = this.poster ? this.poster : this.hostConfig.media.defaultPoster;
            if (posterUrl) {
                result.push({ url: posterUrl, mimeType: "image" });
            }
        }
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var mediaSource = _a[_i];
            if (mediaSource.isValid()) {
                result.push({
                    /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- `mediaSource.url` is of type `string | undefined`, but is validated by `isValid()` call */
                    url: mediaSource.url,
                    mimeType: mediaSource.mimeType
                    /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */
                });
            }
        }
        for (var _b = 0, _c = this.captionSources; _b < _c.length; _b++) {
            var captionSource = _c[_b];
            if (captionSource.isValid()) {
                result.push({
                    /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- `captionSource.url` is of type `string | undefined`, but is validated by `isValid()` call */
                    url: captionSource.url,
                    mimeType: captionSource.mimeType
                    /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */
                });
            }
        }
        return result;
    };
    Object.defineProperty(Media.prototype, "selectedMediaType", {
        get: function () {
            return this._mediaPlayer.selectedMediaType;
        },
        enumerable: false,
        configurable: true
    });
    Media.customMediaPlayers = [
        {
            urlPatterns: [
                /^(?:https?:\/\/)?(?:www.)?youtube.com\/watch\?(?=.*v=([\w\d-_]+))(?=(?:.*t=(\d+))?).*/gi,
                /^(?:https?:\/\/)?youtu.be\/([\w\d-_]+)(?:\?t=(\d+))?/gi
            ],
            createMediaPlayer: function (matches) {
                return new YouTubePlayer(matches, strings.Strings.defaults.youTubeVideoPlayer());
            }
        },
        {
            urlPatterns: [/^(?:https?:\/\/)?vimeo.com\/([\w\d-_]+).*/gi],
            createMediaPlayer: function (matches) {
                return new VimeoPlayer(matches, strings.Strings.defaults.vimeoVideoPlayer());
            }
        },
        {
            urlPatterns: [/^(?:https?:\/\/)?(?:www.)?dailymotion.com\/video\/([\w\d-_]+).*/gi],
            createMediaPlayer: function (matches) {
                return new DailymotionPlayer(matches, strings.Strings.defaults.dailymotionVideoPlayer());
            }
        }
    ];
    //#region Schema
    Media.sourcesProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_1, "sources", MediaSource);
    Media.captionSourcesProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_6, "captionSources", CaptionSource);
    Media.posterProperty = new serialization.StringProperty(serialization.Versions.v1_1, "poster");
    Media.altTextProperty = new serialization.StringProperty(serialization.Versions.v1_1, "altText");
    __decorate([
        (0, serialization.property)(Media.sourcesProperty)
    ], Media.prototype, "sources", void 0);
    __decorate([
        (0, serialization.property)(Media.captionSourcesProperty)
    ], Media.prototype, "captionSources", void 0);
    __decorate([
        (0, serialization.property)(Media.posterProperty)
    ], Media.prototype, "poster", void 0);
    __decorate([
        (0, serialization.property)(Media.altTextProperty)
    ], Media.prototype, "altText", void 0);
    return Media;
}(CardElement));
exports.Media = Media;
var InputEventType;
(function (InputEventType) {
    InputEventType[InputEventType["InitialRender"] = 0] = "InitialRender";
    InputEventType[InputEventType["MouseEnterOnCard"] = 1] = "MouseEnterOnCard";
    InputEventType[InputEventType["MouseLeaveOnCard"] = 2] = "MouseLeaveOnCard";
    InputEventType[InputEventType["FocusLeave"] = 3] = "FocusLeave";
})(InputEventType || (InputEventType = {}));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputStyle = enums.InputStyle.Default;
        return _this;
    }
    Input.prototype.getAllLabelIds = function () {
        var labelIds = [];
        if (this.labelledBy) {
            labelIds.push(this.labelledBy);
        }
        if (this._renderedLabelElement) {
            labelIds.push(this._renderedLabelElement.id);
        }
        if (this._renderedErrorMessageElement) {
            labelIds.push(this._renderedErrorMessageElement.id);
        }
        return labelIds;
    };
    Input.prototype.updateInputControlAriaLabelledBy = function () {
        if (this._renderedInputControlElement) {
            var labelIds = this.getAllLabelIds();
            if (labelIds.length > 0) {
                this._renderedInputControlElement.setAttribute("aria-labelledby", labelIds.join(" "));
            }
            else {
                this._renderedInputControlElement.removeAttribute("aria-labelledby");
            }
        }
    };
    Object.defineProperty(Input.prototype, "isNullable", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "renderedInputControlElement", {
        get: function () {
            return this._renderedInputControlElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "inputControlContainerElement", {
        get: function () {
            return this._inputControlContainerElement;
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.overrideInternalRender = function () {
        var _this = this;
        var hostConfig = this.hostConfig;
        this._outerContainerElement = document.createElement("div");
        this._outerContainerElement.style.display = "flex";
        if (this.labelPosition === enums.InputLabelPosition.Inline) {
            this._outerContainerElement.style.flexDirection = "row";
        }
        else {
            this._outerContainerElement.style.flexDirection = "column";
        }
        var renderedInputControlId = utils.generateUniqueId();
        if (this.label) {
            var labelRichTextBlock = new RichTextBlock();
            labelRichTextBlock.setParent(this);
            labelRichTextBlock.forElementId = renderedInputControlId;
            var labelInline = new TextRun(this.label);
            labelRichTextBlock.addInline(labelInline);
            if (this.isRequired) {
                labelInline.init(hostConfig.inputs.label.requiredInputs);
                var isRequiredCueInline = new TextRun(hostConfig.inputs.label.requiredInputs.suffix);
                isRequiredCueInline.color = hostConfig.inputs.label.requiredInputs.suffixColor;
                isRequiredCueInline.ariaHidden = true;
                labelRichTextBlock.addInline(isRequiredCueInline);
            }
            else {
                labelInline.init(hostConfig.inputs.label.optionalInputs);
            }
            this._renderedLabelElement = labelRichTextBlock.render();
            if (this._renderedLabelElement) {
                this._renderedLabelElement.id = utils.generateUniqueId();
                if (this.labelPosition === enums.InputLabelPosition.Inline) {
                    // For inline label position: label should be in center of the div and no extra spacing needed
                    this._renderedLabelElement.style.alignSelf = "center";
                }
                else {
                    this._renderedLabelElement.style.marginBottom =
                        hostConfig.getEffectiveSpacing(hostConfig.inputs.label.inputSpacing) + "px";
                }
                this._outerContainerElement.appendChild(this._renderedLabelElement);
            }
        }
        this._inputControlContainerElement = document.createElement("div");
        this._inputControlContainerElement.className =
            hostConfig.makeCssClassName("ac-input-container");
        this._inputControlContainerElement.style.display = "flex";
        if (this.height === "stretch") {
            this._inputControlContainerElement.style.alignItems = "stretch";
            this._inputControlContainerElement.style.flex = "1 1 auto";
        }
        this._renderedInputControlElement = this.internalRender();
        if (this._renderedInputControlElement) {
            this._renderedInputControlElement.id = renderedInputControlId;
            this._renderedInputControlElement.style.minWidth = "0px";
            if (this.isNullable && this.isRequired) {
                this._renderedInputControlElement.setAttribute("aria-required", "true");
                this._renderedInputControlElement.classList.add(hostConfig.makeCssClassName("ac-input-required"));
            }
            this._inputControlContainerElement.appendChild(this._renderedInputControlElement);
            this._outerContainerElement.appendChild(this._inputControlContainerElement);
            if (this._renderedLabelElement && this.labelPosition === enums.InputLabelPosition.Inline) {
                if (!this.labelWidth) {
                    var defaultLabelWidth = hostConfig.inputs.label.width;
                    this._renderedLabelElement.style.width = defaultLabelWidth.toString() + "%";
                    this._renderedInputControlElement.style.width = (100 - defaultLabelWidth) + "%";
                }
                else if (this.labelWidth.unit == enums.SizeUnit.Weight) {
                    var labelWidthInPercent = this.labelWidth.physicalSize;
                    this._renderedLabelElement.style.width = labelWidthInPercent.toString() + "%";
                    this._renderedInputControlElement.style.width = (100 - labelWidthInPercent).toString() + "%";
                }
                else if (this.labelWidth.unit == enums.SizeUnit.Pixel) {
                    var labelWidthInPixel = this.labelWidth.physicalSize;
                    this._renderedLabelElement.style.width = labelWidthInPixel.toString() + "px";
                }
            }
            this.updateVisualState(InputEventType.InitialRender);
            if (this._renderedInputControlElement) {
                this._renderedInputControlElement.onblur = function (ev) {
                    _this.updateVisualState(InputEventType.FocusLeave);
                };
            }
            this.updateInputControlAriaLabelledBy();
            return this._outerContainerElement;
        }
        this.resetDirtyState();
        return undefined;
    };
    Input.prototype.valueChanged = function () {
        this.getRootElement().updateActionsEnabledState();
        if (this.isValid()) {
            this.resetValidationFailureCue();
        }
        if (this.onValueChanged) {
            this.onValueChanged(this);
        }
        raiseInputValueChangedEvent(this);
    };
    Input.prototype.resetValidationFailureCue = function () {
        if (this.renderedInputControlElement) {
            this.renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            this.updateInputControlAriaLabelledBy();
            if (this._renderedErrorMessageElement) {
                this._outerContainerElement.removeChild(this._renderedErrorMessageElement);
                this._renderedErrorMessageElement = undefined;
            }
        }
    };
    Input.prototype.showValidationErrorMessage = function () {
        if (this.renderedElement &&
            this.errorMessage &&
            shared.GlobalSettings.displayInputValidationErrors) {
            var errorMessageTextBlock = new TextBlock();
            errorMessageTextBlock.setParent(this);
            errorMessageTextBlock.text = this.errorMessage;
            errorMessageTextBlock.wrap = true;
            errorMessageTextBlock.init(this.hostConfig.inputs.errorMessage);
            this._renderedErrorMessageElement = errorMessageTextBlock.render();
            if (this._renderedErrorMessageElement) {
                this._renderedErrorMessageElement.id = utils.generateUniqueId();
                this._outerContainerElement.appendChild(this._renderedErrorMessageElement);
                this.updateInputControlAriaLabelledBy();
            }
        }
    };
    Input.prototype.updateVisualState = function (eventType) {
        if (!this._renderedInputControlElement || this.inputStyle !== enums.InputStyle.RevealOnHover) {
            return;
        }
        if (eventType === InputEventType.InitialRender) {
            // on initial render, we will show input fields as read only view
            this._renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-inputStyle-revealOnHover-onrender"));
        }
        else if (eventType === InputEventType.MouseEnterOnCard) {
            // on hover on the card, we will reveal the inputs by showing borders etc
            // ac-inputStyle-revealOnHover-onhover class is also used to identify if mouse is hovering on the card
            this._renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-inputStyle-revealOnHover-onhover"));
        }
        else if (eventType === InputEventType.MouseLeaveOnCard) {
            this._renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-inputStyle-revealOnHover-onhover"));
        }
    };
    Input.prototype.focus = function () {
        if (this._renderedInputControlElement) {
            this._renderedInputControlElement.focus();
        }
    };
    Input.prototype.isValid = function () {
        return true;
    };
    Input.prototype.isDirty = function () {
        return this.value !== this._oldValue;
    };
    Input.prototype.resetDirtyState = function () {
        this._oldValue = this.value;
    };
    Input.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.id) {
            context.addFailure(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.inputsMustHaveUniqueId());
        }
        if (this.isRequired) {
            if (!this.label) {
                context.addFailure(this, enums.ValidationEvent.RequiredInputsShouldHaveLabel, "Required inputs should have a label");
            }
            if (!this.errorMessage) {
                context.addFailure(this, enums.ValidationEvent.RequiredInputsShouldHaveErrorMessage, "Required inputs should have an error message");
            }
        }
    };
    Input.prototype.validateValue = function () {
        this.resetValidationFailureCue();
        var result = this.isRequired ? this.isSet() && this.isValid() : this.isValid();
        if (!result && this.renderedInputControlElement) {
            this.renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            this.showValidationErrorMessage();
        }
        return result;
    };
    Input.prototype.getAllInputs = function (processActions) {
        return [this];
    };
    Input.prototype.render = function () {
        var result = _super.prototype.render.call(this);
        this.resetDirtyState();
        return result;
    };
    Object.defineProperty(Input.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    Input.labelProperty = new serialization.StringProperty(serialization.Versions.v1_3, "label", true);
    Input.isRequiredProperty = new serialization.BoolProperty(serialization.Versions.v1_3, "isRequired", false);
    Input.errorMessageProperty = new serialization.StringProperty(serialization.Versions.v1_3, "errorMessage", true);
    Input.inputStyleProperty = new serialization.EnumProperty(serialization.Versions.v1_6, "inputStyle", enums.InputStyle, enums.InputStyle.Default, [
        { value: enums.InputStyle.RevealOnHover },
        { value: enums.InputStyle.Default }
    ]);
    Input.labelWidthProperty = new serialization.CustomProperty(serialization.Versions.v1_6, "labelWidth", function (sender, prop, source, context) {
        var result = prop.defaultValue;
        var value = source[prop.name];
        var invalidLabelWidth = false;
        if (typeof value === "number" && !isNaN(value)) {
            result = new shared.SizeAndUnit(value, enums.SizeUnit.Weight);
            if (result.physicalSize < 0 || result.physicalSize > 100) {
                invalidLabelWidth = true;
            }
        }
        else if (typeof value === "string") {
            try {
                result = shared.SizeAndUnit.parse(value);
            }
            catch (e) {
                invalidLabelWidth = true;
            }
        }
        else {
            invalidLabelWidth = true;
        }
        if (invalidLabelWidth) {
            context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidInputLabelWidth());
            result = undefined;
        }
        return result;
    }, function (sender, property, target, value, context) {
        if (value instanceof shared.SizeAndUnit) {
            if (value.unit === enums.SizeUnit.Pixel) {
                context.serializeValue(target, "labelWidth", value.physicalSize + "px");
            }
            else {
                context.serializeNumber(target, "labelWidth", value.physicalSize);
            }
        }
    }, undefined);
    Input.labelPositionProperty = new serialization.EnumProperty(serialization.Versions.v1_6, "labelPosition", enums.InputLabelPosition, enums.InputLabelPosition.Above, [
        { value: enums.InputLabelPosition.Inline },
        { value: enums.InputLabelPosition.Above }
    ]);
    __decorate([
        (0, serialization.property)(Input.labelProperty)
    ], Input.prototype, "label", void 0);
    __decorate([
        (0, serialization.property)(Input.isRequiredProperty)
    ], Input.prototype, "isRequired", void 0);
    __decorate([
        (0, serialization.property)(Input.errorMessageProperty)
    ], Input.prototype, "errorMessage", void 0);
    __decorate([
        (0, serialization.property)(Input.inputStyleProperty)
    ], Input.prototype, "inputStyle", void 0);
    __decorate([
        (0, serialization.property)(Input.labelWidthProperty)
    ], Input.prototype, "labelWidth", void 0);
    __decorate([
        (0, serialization.property)(Input.labelPositionProperty)
    ], Input.prototype, "labelPosition", void 0);
    return Input;
}(CardElement));
exports.Input = Input;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMultiline = false;
        _this.style = enums.InputTextStyle.Text;
        return _this;
    }
    //#endregion
    TextInput.prototype.setupInput = function (input) {
        var _this = this;
        input.style.flex = "1 1 auto";
        input.tabIndex = this.isDesignMode() ? -1 : 0;
        if (this.placeholder) {
            input.placeholder = this.placeholder;
            input.setAttribute("aria-label", this.placeholder);
        }
        if (this.defaultValue) {
            input.value = this.defaultValue;
        }
        if (this.maxLength && this.maxLength > 0) {
            input.maxLength = this.maxLength;
        }
        input.oninput = function () {
            _this.valueChanged();
        };
        input.onkeypress = function (e) {
            // Ctrl+Enter pressed
            if (e.ctrlKey &&
                e.code === "Enter" &&
                _this.inlineAction &&
                _this.inlineAction.isEffectivelyEnabled()) {
                _this.inlineAction.execute();
            }
        };
    };
    TextInput.prototype.internalRender = function () {
        var result;
        if (this.isMultiline && this.style !== enums.InputTextStyle.Password) {
            result = document.createElement("textarea");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput", "ac-multiline");
            if (this.height === "stretch") {
                result.style.height = "initial";
            }
        }
        else {
            result = document.createElement("input");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput");
            result.type = enums.InputTextStyle[this.style].toLowerCase();
        }
        this.setupInput(result);
        return result;
    };
    TextInput.prototype.overrideInternalRender = function () {
        var _this = this;
        var renderedInputControl = _super.prototype.overrideInternalRender.call(this);
        if (this.inlineAction) {
            var button_1 = document.createElement("button");
            button_1.className = this.hostConfig.makeCssClassName(this.inlineAction.isEffectivelyEnabled()
                ? "ac-inlineActionButton"
                : "ac-inlineActionButton-disabled");
            button_1.onclick = function (e) {
                if (_this.inlineAction && _this.inlineAction.isEffectivelyEnabled()) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.inlineAction.execute();
                }
            };
            if (this.inlineAction.iconUrl) {
                button_1.classList.add("iconOnly");
                var icon_1 = document.createElement("img");
                icon_1.style.height = "100%";
                icon_1.setAttribute("role", "presentation");
                // The below trick is necessary as a workaround in Chrome where the icon is initially displayed
                // at its native size then resized to 100% of the button's height. This cfreates an unpleasant
                // flicker. On top of that, Chrome's flex implementation fails to prperly re-layout the button
                // after the image has loaded and been gicven its final size. The below trick also fixes that.
                icon_1.style.display = "none";
                icon_1.onload = function () {
                    icon_1.style.removeProperty("display");
                };
                icon_1.onerror = function () {
                    button_1.removeChild(icon_1);
                    button_1.classList.remove("iconOnly");
                    button_1.classList.add("textOnly");
                    button_1.textContent =
                        _this.inlineAction && _this.inlineAction.title
                            ? _this.inlineAction.title
                            : strings.Strings.defaults.inlineActionTitle();
                };
                icon_1.src = this.inlineAction.iconUrl;
                button_1.appendChild(icon_1);
                button_1.title = this.inlineAction.title
                    ? this.inlineAction.title
                    : strings.Strings.defaults.inlineActionTitle();
            }
            else {
                button_1.classList.add("textOnly");
                button_1.textContent = this.inlineAction.title
                    ? this.inlineAction.title
                    : strings.Strings.defaults.inlineActionTitle();
            }
            this.inlineAction.setupElementForAccessibility(button_1, true);
            button_1.style.marginLeft = "8px";
            this.inputControlContainerElement.appendChild(button_1);
        }
        return renderedInputControl;
    };
    TextInput.prototype.updateVisualState = function (eventType) {
        if (!(this.inlineAction || this.isMultiline)) {
            _super.prototype.updateVisualState.call(this, eventType);
        }
    };
    TextInput.prototype.getJsonTypeName = function () {
        return "Input.Text";
    };
    TextInput.prototype.getAllActions = function () {
        var result = _super.prototype.getAllActions.call(this);
        if (this.inlineAction) {
            result.push(this.inlineAction);
        }
        return result;
    };
    TextInput.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.inlineAction) {
            result = this.inlineAction.getActionById(id);
        }
        return result;
    };
    TextInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    TextInput.prototype.isValid = function () {
        if (!this.value) {
            return true;
        }
        if (this.regex) {
            return new RegExp(this.regex, "g").test(this.value);
        }
        return true;
    };
    Object.defineProperty(TextInput.prototype, "value", {
        get: function () {
            if (this.renderedInputControlElement) {
                if (this.isMultiline) {
                    return this.renderedInputControlElement.value;
                }
                else {
                    return this.renderedInputControlElement.value;
                }
            }
            else {
                return undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    TextInput.valueProperty = new serialization.StringProperty(serialization.Versions.v1_0, "value");
    TextInput.maxLengthProperty = new serialization.NumProperty(serialization.Versions.v1_0, "maxLength");
    TextInput.isMultilineProperty = new serialization.BoolProperty(serialization.Versions.v1_0, "isMultiline", false);
    TextInput.placeholderProperty = new serialization.StringProperty(serialization.Versions.v1_0, "placeholder");
    TextInput.styleProperty = new serialization.EnumProperty(serialization.Versions.v1_0, "style", enums.InputTextStyle, enums.InputTextStyle.Text, [
        { value: enums.InputTextStyle.Text },
        { value: enums.InputTextStyle.Tel },
        { value: enums.InputTextStyle.Url },
        { value: enums.InputTextStyle.Email },
        { value: enums.InputTextStyle.Password, targetVersion: serialization.Versions.v1_5 }
    ]);
    TextInput.inlineActionProperty = new ActionProperty(serialization.Versions.v1_0, "inlineAction", [
        "Action.ShowCard"
    ]);
    TextInput.regexProperty = new serialization.StringProperty(serialization.Versions.v1_3, "regex", true);
    __decorate([
        (0, serialization.property)(TextInput.valueProperty)
    ], TextInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization.property)(TextInput.maxLengthProperty)
    ], TextInput.prototype, "maxLength", void 0);
    __decorate([
        (0, serialization.property)(TextInput.isMultilineProperty)
    ], TextInput.prototype, "isMultiline", void 0);
    __decorate([
        (0, serialization.property)(TextInput.placeholderProperty)
    ], TextInput.prototype, "placeholder", void 0);
    __decorate([
        (0, serialization.property)(TextInput.styleProperty)
    ], TextInput.prototype, "style", void 0);
    __decorate([
        (0, serialization.property)(TextInput.inlineActionProperty)
    ], TextInput.prototype, "inlineAction", void 0);
    __decorate([
        (0, serialization.property)(TextInput.regexProperty)
    ], TextInput.prototype, "regex", void 0);
    return TextInput;
}(Input));
exports.TextInput = TextInput;
var ToggleInput = /** @class */ (function (_super) {
    __extends(ToggleInput, _super);
    function ToggleInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueOn = "true";
        _this.valueOff = "false";
        _this.wrap = false;
        return _this;
    }
    ToggleInput.prototype.updateInputControlAriaLabelledBy = function () {
        if (this._checkboxInputElement) {
            var joinedLabelIds = this.getAllLabelIds().join(" ");
            if (this._checkboxInputLabelElement && this._checkboxInputLabelElement.id) {
                joinedLabelIds += " " + this._checkboxInputLabelElement.id;
            }
            if (joinedLabelIds) {
                this._checkboxInputElement.setAttribute("aria-labelledby", joinedLabelIds);
            }
            else {
                this._checkboxInputElement.removeAttribute("aria-labelledby");
            }
        }
    };
    ToggleInput.prototype.internalRender = function () {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input", "ac-toggleInput");
        element.style.width = "100%";
        element.style.display = "flex";
        element.style.alignItems = "center";
        this._checkboxInputElement = document.createElement("input");
        this._checkboxInputElement.id = utils.generateUniqueId();
        this._checkboxInputElement.type = "checkbox";
        this._checkboxInputElement.style.display = "inline-block";
        this._checkboxInputElement.style.verticalAlign = "middle";
        this._checkboxInputElement.style.margin = "0";
        this._checkboxInputElement.style.flex = "0 0 auto";
        if (this.title) {
            this._checkboxInputElement.setAttribute("aria-label", this.title);
        }
        if (this.isRequired) {
            this._checkboxInputElement.setAttribute("aria-required", "true");
        }
        this._checkboxInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
        if (this.defaultValue === this.valueOn) {
            this._checkboxInputElement.checked = true;
        }
        this._oldCheckboxValue = this._checkboxInputElement.checked;
        this._checkboxInputElement.onchange = function () {
            _this.valueChanged();
        };
        utils.appendChild(element, this._checkboxInputElement);
        if (this.title || this.isDesignMode()) {
            var label = new TextBlock();
            label.setParent(this);
            label.forElementId = this._checkboxInputElement.id;
            label.hostConfig = this.hostConfig;
            label.text = !this.title ? this.getJsonTypeName() : this.title;
            label.useMarkdown = shared.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            this._checkboxInputLabelElement = label.render();
            if (this._checkboxInputLabelElement) {
                this._checkboxInputLabelElement.id = utils.generateUniqueId();
                this._checkboxInputLabelElement.style.display = "inline-block";
                this._checkboxInputLabelElement.style.flex = "1 1 auto";
                this._checkboxInputLabelElement.style.marginLeft = "6px";
                this._checkboxInputLabelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                utils.appendChild(element, spacerElement);
                utils.appendChild(element, this._checkboxInputLabelElement);
            }
        }
        return element;
    };
    Object.defineProperty(ToggleInput.prototype, "isNullable", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    ToggleInput.prototype.updateVisualState = function (eventType) {
    };
    ToggleInput.prototype.getJsonTypeName = function () {
        return "Input.Toggle";
    };
    ToggleInput.prototype.focus = function () {
        if (this._checkboxInputElement) {
            this._checkboxInputElement.focus();
        }
    };
    ToggleInput.prototype.isSet = function () {
        if (this.isRequired) {
            return this.value === this.valueOn;
        }
        return this.value ? true : false;
    };
    ToggleInput.prototype.isDirty = function () {
        return this._checkboxInputElement
            ? this._checkboxInputElement.checked !== this._oldCheckboxValue
            : false;
    };
    Object.defineProperty(ToggleInput.prototype, "value", {
        get: function () {
            if (this._checkboxInputElement) {
                return this._checkboxInputElement.checked ? this.valueOn : this.valueOff;
            }
            else {
                return undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    ToggleInput.valueProperty = new serialization.StringProperty(serialization.Versions.v1_0, "value");
    ToggleInput.titleProperty = new serialization.StringProperty(serialization.Versions.v1_0, "title");
    ToggleInput.valueOnProperty = new serialization.StringProperty(serialization.Versions.v1_0, "valueOn", true, undefined, "true", function (sender) {
        return "true";
    });
    ToggleInput.valueOffProperty = new serialization.StringProperty(serialization.Versions.v1_0, "valueOff", true, undefined, "false", function (sender) {
        return "false";
    });
    ToggleInput.wrapProperty = new serialization.BoolProperty(serialization.Versions.v1_2, "wrap", false);
    __decorate([
        (0, serialization.property)(ToggleInput.valueProperty)
    ], ToggleInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization.property)(ToggleInput.titleProperty)
    ], ToggleInput.prototype, "title", void 0);
    __decorate([
        (0, serialization.property)(ToggleInput.valueOnProperty)
    ], ToggleInput.prototype, "valueOn", void 0);
    __decorate([
        (0, serialization.property)(ToggleInput.valueOffProperty)
    ], ToggleInput.prototype, "valueOff", void 0);
    __decorate([
        (0, serialization.property)(ToggleInput.wrapProperty)
    ], ToggleInput.prototype, "wrap", void 0);
    return ToggleInput;
}(Input));
exports.ToggleInput = ToggleInput;
var Choice = /** @class */ (function (_super) {
    __extends(Choice, _super);
    function Choice(title, value) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.value = value;
        return _this;
    }
    //#endregion
    Choice.prototype.getSchemaKey = function () {
        return "Choice";
    };
    //#region Schema
    Choice.titleProperty = new serialization.StringProperty(serialization.Versions.v1_0, "title");
    Choice.valueProperty = new serialization.StringProperty(serialization.Versions.v1_0, "value");
    __decorate([
        (0, serialization.property)(Choice.titleProperty)
    ], Choice.prototype, "title", void 0);
    __decorate([
        (0, serialization.property)(Choice.valueProperty)
    ], Choice.prototype, "value", void 0);
    return Choice;
}(serialization.SerializableObject));
exports.Choice = Choice;
var ChoiceSetInput = /** @class */ (function (_super) {
    __extends(ChoiceSetInput, _super);
    function ChoiceSetInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMultiSelect = false;
        _this.wrap = false;
        _this.choices = [];
        return _this;
    }
    Object.defineProperty(ChoiceSetInput.prototype, "isCompact", {
        get: function () {
            return !this.style || this.style === "compact";
        },
        set: function (value) {
            this.style = value ? undefined : "expanded";
        },
        enumerable: false,
        configurable: true
    });
    ChoiceSetInput.getUniqueCategoryName = function () {
        var uniqueCategoryName = "__ac-category" + ChoiceSetInput._uniqueCategoryCounter;
        ChoiceSetInput._uniqueCategoryCounter++;
        return uniqueCategoryName;
    };
    ChoiceSetInput.prototype.createPlaceholderOptionWhenValueDoesNotExist = function () {
        if (!this.value) {
            var placeholderOption = document.createElement("option");
            placeholderOption.selected = true;
            placeholderOption.disabled = true;
            placeholderOption.hidden = true;
            placeholderOption.value = "";
            if (this.placeholder) {
                placeholderOption.text = this.placeholder;
            }
            return placeholderOption;
        }
        return undefined;
    };
    // Make sure `aria-current` is applied to the currently-selected item
    ChoiceSetInput.prototype.internalApplyAriaCurrent = function () {
        if (this._selectElement) {
            var options = this._selectElement.options;
            if (options) {
                for (var _i = 0, _a = Array.from(options); _i < _a.length; _i++) {
                    var option = _a[_i];
                    if (option.selected) {
                        option.setAttribute("aria-current", "true");
                    }
                    else {
                        option.removeAttribute("aria-current");
                    }
                }
            }
        }
    };
    ChoiceSetInput.prototype.renderCompoundInput = function (cssClassName, type, defaultValues) {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input", cssClassName);
        element.style.width = "100%";
        element.tabIndex = this.isDesignMode() ? -1 : 0;
        this._toggleInputs = [];
        this._labels = [];
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            var input = document.createElement("input");
            input.id = utils.generateUniqueId();
            input.type = type;
            input.style.margin = "0";
            input.style.display = "inline-block";
            input.style.verticalAlign = "middle";
            input.style.flex = "0 0 auto";
            input.name = this.id ? this.id : this._uniqueCategoryName;
            if (this.isRequired) {
                input.setAttribute("aria-required", "true");
            }
            input.tabIndex = this.isDesignMode() ? -1 : 0;
            if (choice.value) {
                input.value = choice.value;
            }
            if (choice.title) {
                input.setAttribute("aria-label", choice.title);
            }
            if (defaultValues && choice.value) {
                if (defaultValues.indexOf(choice.value) >= 0) {
                    input.checked = true;
                }
            }
            input.onchange = function () {
                _this.valueChanged();
            };
            this._toggleInputs.push(input);
            var compoundInput = document.createElement("div");
            compoundInput.style.display = "flex";
            compoundInput.style.alignItems = "center";
            utils.appendChild(compoundInput, input);
            var label = new TextBlock();
            label.setParent(this);
            label.forElementId = input.id;
            label.hostConfig = this.hostConfig;
            label.text = choice.title ? choice.title : "Choice " + this._toggleInputs.length;
            label.useMarkdown = shared.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            var labelElement = label.render();
            this._labels.push(labelElement);
            if (labelElement) {
                labelElement.id = utils.generateUniqueId();
                labelElement.style.display = "inline-block";
                labelElement.style.flex = "1 1 auto";
                labelElement.style.marginLeft = "6px";
                labelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                utils.appendChild(compoundInput, spacerElement);
                utils.appendChild(compoundInput, labelElement);
            }
            utils.appendChild(element, compoundInput);
        }
        return element;
    };
    ChoiceSetInput.prototype.updateInputControlAriaLabelledBy = function () {
        if ((this.isMultiSelect || this.style === "expanded") &&
            this._toggleInputs &&
            this._labels) {
            var labelIds = this.getAllLabelIds();
            for (var i = 0; i < this._toggleInputs.length; i++) {
                var joinedLabelIds = labelIds.join(" ");
                var label = this._labels[i];
                if (label && label.id) {
                    joinedLabelIds += " " + label.id;
                }
                if (joinedLabelIds) {
                    this._toggleInputs[i].setAttribute("aria-labelledby", joinedLabelIds);
                }
                else {
                    this._toggleInputs[i].removeAttribute("aria-labelledby");
                }
            }
        }
        else {
            _super.prototype.updateInputControlAriaLabelledBy.call(this);
        }
    };
    ChoiceSetInput.prototype.internalRender = function () {
        var _this = this;
        this._uniqueCategoryName = ChoiceSetInput.getUniqueCategoryName();
        if (this.isMultiSelect) {
            // Render as a list of toggle inputs
            return this.renderCompoundInput("ac-choiceSetInput-multiSelect", "checkbox", this.defaultValue
                ? this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator)
                : undefined);
        }
        else {
            if (this.style === "expanded") {
                // Render as a series of radio buttons
                return this.renderCompoundInput("ac-choiceSetInput-expanded", "radio", this.defaultValue ? [this.defaultValue] : undefined);
            }
            else if (this.style === "filtered") {
                // Render as a text input coupled with a datalist
                var inputContainer = document.createElement("div");
                inputContainer.style.width = "100%";
                this._textInput = document.createElement("input");
                this._textInput.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-filtered");
                this._textInput.type = "text";
                this._textInput.style.width = "100%";
                this._textInput.oninput = function () {
                    _this.valueChanged();
                    if (_this._textInput) {
                        // Remove aria-label when value is not empty so narration software doesn't
                        // read the placeholder
                        if (_this.value) {
                            _this._textInput.removeAttribute("placeholder");
                            _this._textInput.removeAttribute("aria-label");
                        }
                        else if (_this.placeholder) {
                            _this._textInput.placeholder = _this.placeholder;
                            _this._textInput.setAttribute("aria-label", _this.placeholder);
                        }
                    }
                };
                if (this.defaultValue) {
                    this._textInput.value = this.defaultValue;
                }
                if (this.placeholder && !this._textInput.value) {
                    this._textInput.placeholder = this.placeholder;
                    this._textInput.setAttribute("aria-label", this.placeholder);
                }
                this._textInput.tabIndex = this.isDesignMode() ? -1 : 0;
                var dataList = document.createElement("datalist");
                dataList.id = utils.generateUniqueId();
                for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                    var choice = _a[_i];
                    var option = document.createElement("option");
                    // To fix https://stackoverflow.com/questions/29882361/show-datalist-labels-but-submit-the-actual-value
                    // value is mapped to choice.title other than choice.value
                    if (choice.title) {
                        option.value = choice.title;
                        option.setAttribute("aria-label", choice.title);
                    }
                    option.tabIndex = this.isDesignMode() ? -1 : 0;
                    dataList.appendChild(option);
                }
                this._textInput.setAttribute("list", dataList.id);
                inputContainer.append(this._textInput, dataList);
                return inputContainer;
            }
            else {
                // Render as a combo box
                this._selectElement = document.createElement("select");
                this._selectElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-compact");
                this._selectElement.style.width = "100%";
                this._selectElement.tabIndex = this.isDesignMode() ? -1 : 0;
                var placeholderOption = this.createPlaceholderOptionWhenValueDoesNotExist();
                utils.appendChild(this._selectElement, placeholderOption);
                for (var _b = 0, _c = this.choices; _b < _c.length; _b++) {
                    var choice = _c[_b];
                    var option = document.createElement("option");
                    option.value = choice.value;
                    if (choice.title) {
                        option.text = choice.title;
                        option.setAttribute("aria-label", choice.title);
                    }
                    option.tabIndex = this.isDesignMode() ? -1 : 0;
                    if (choice.value === this.defaultValue) {
                        option.selected = true;
                    }
                    utils.appendChild(this._selectElement, option);
                }
                this._selectElement.onchange = function () {
                    _this.internalApplyAriaCurrent();
                    _this.valueChanged();
                };
                this.internalApplyAriaCurrent();
                return this._selectElement;
            }
        }
    };
    ChoiceSetInput.prototype.updateVisualState = function (eventType) {
        if (!this.isMultiSelect && this.isCompact) {
            _super.prototype.updateVisualState.call(this, eventType);
            if (this._selectElement && this.inputStyle === enums.InputStyle.RevealOnHover) {
                var hideDropDownPicker = shouldHideInputAdornersForRevealOnHover(this._selectElement, eventType);
                if (hideDropDownPicker) {
                    this._selectElement.style.appearance = "none";
                    this._selectElement.classList.remove(this.hostConfig.makeCssClassName("ac-inputStyle-revealOnHover-onfocus"));
                }
                else {
                    this._selectElement.style.appearance = "auto";
                    this._selectElement.classList.add(this.hostConfig.makeCssClassName("ac-inputStyle-revealOnHover-onfocus"));
                }
            }
        }
    };
    ChoiceSetInput.prototype.getJsonTypeName = function () {
        return "Input.ChoiceSet";
    };
    ChoiceSetInput.prototype.focus = function () {
        if (this._toggleInputs && (this.isMultiSelect || this.style === "expanded")) {
            if (this._toggleInputs.length > 0) {
                this._toggleInputs[0].focus();
            }
        }
        else if (this._textInput) {
            this._textInput.focus();
        }
        else {
            _super.prototype.focus.call(this);
        }
    };
    ChoiceSetInput.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this.choices.length === 0) {
            context.addFailure(this, enums.ValidationEvent.CollectionCantBeEmpty, strings.Strings.errors.choiceSetMustHaveAtLeastOneChoice());
        }
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            if (!choice.title || !choice.value) {
                context.addFailure(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.choiceSetChoicesMustHaveTitleAndValue());
            }
        }
    };
    ChoiceSetInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    ChoiceSetInput.prototype.isValid = function () {
        if (this._textInput) {
            if (this.value === "" || this.value === this.placeholder) {
                return true;
            }
            for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                var choice = _a[_i];
                if (this.value === choice.value) {
                    return true;
                }
            }
            return false;
        }
        return _super.prototype.isValid.call(this);
    };
    Object.defineProperty(ChoiceSetInput.prototype, "value", {
        get: function () {
            if (!this.isMultiSelect) {
                if (this._selectElement) {
                    return this._selectElement.selectedIndex > 0
                        ? this._selectElement.value
                        : undefined;
                }
                else if (this._textInput) {
                    for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                        var choice = _a[_i];
                        if (choice.title && this._textInput.value === choice.title) {
                            return choice.value;
                        }
                    }
                    return this._textInput.value;
                }
                else if (this._toggleInputs && this._toggleInputs.length > 0) {
                    for (var _b = 0, _c = this._toggleInputs; _b < _c.length; _b++) {
                        var toggleInput = _c[_b];
                        if (toggleInput.checked) {
                            return toggleInput.value;
                        }
                    }
                }
                return undefined;
            }
            else {
                if (!this._toggleInputs || this._toggleInputs.length === 0) {
                    return undefined;
                }
                var result = "";
                for (var _d = 0, _f = this._toggleInputs; _d < _f.length; _d++) {
                    var toggleInput = _f[_d];
                    if (toggleInput.checked) {
                        if (result !== "") {
                            result += this.hostConfig.choiceSetInputValueSeparator;
                        }
                        result += toggleInput.value;
                    }
                }
                return result ? result : undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    ChoiceSetInput.valueProperty = new serialization.StringProperty(serialization.Versions.v1_0, "value");
    ChoiceSetInput.choicesProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_0, "choices", Choice);
    ChoiceSetInput.styleProperty = new serialization.ValueSetProperty(serialization.Versions.v1_0, "style", [
        { value: "compact" },
        { value: "expanded" },
        { value: "filtered", targetVersion: serialization.Versions.v1_5 }
    ], "compact");
    ChoiceSetInput.isMultiSelectProperty = new serialization.BoolProperty(serialization.Versions.v1_0, "isMultiSelect", false);
    ChoiceSetInput.placeholderProperty = new serialization.StringProperty(serialization.Versions.v1_0, "placeholder");
    ChoiceSetInput.wrapProperty = new serialization.BoolProperty(serialization.Versions.v1_2, "wrap", false);
    //#endregion
    ChoiceSetInput._uniqueCategoryCounter = 0;
    __decorate([
        (0, serialization.property)(ChoiceSetInput.valueProperty)
    ], ChoiceSetInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization.property)(ChoiceSetInput.styleProperty)
    ], ChoiceSetInput.prototype, "style", void 0);
    __decorate([
        (0, serialization.property)(ChoiceSetInput.isMultiSelectProperty)
    ], ChoiceSetInput.prototype, "isMultiSelect", void 0);
    __decorate([
        (0, serialization.property)(ChoiceSetInput.placeholderProperty)
    ], ChoiceSetInput.prototype, "placeholder", void 0);
    __decorate([
        (0, serialization.property)(ChoiceSetInput.wrapProperty)
    ], ChoiceSetInput.prototype, "wrap", void 0);
    __decorate([
        (0, serialization.property)(ChoiceSetInput.choicesProperty)
    ], ChoiceSetInput.prototype, "choices", void 0);
    return ChoiceSetInput;
}(Input));
exports.ChoiceSetInput = ChoiceSetInput;
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInput.prototype.internalRender = function () {
        var _this = this;
        this._numberInputElement = document.createElement("input");
        this._numberInputElement.setAttribute("type", "number");
        if (this.min !== undefined) {
            this._numberInputElement.setAttribute("min", this.min.toString());
        }
        if (this.max !== undefined) {
            this._numberInputElement.setAttribute("max", this.max.toString());
        }
        this._numberInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-numberInput");
        this._numberInputElement.style.width = "100%";
        this._numberInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
        if (this.defaultValue !== undefined) {
            this._numberInputElement.valueAsNumber = this.defaultValue;
        }
        if (this.placeholder) {
            this._numberInputElement.placeholder = this.placeholder;
            this._numberInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._numberInputElement.oninput = function () {
            _this.valueChanged();
        };
        return this._numberInputElement;
    };
    NumberInput.prototype.getJsonTypeName = function () {
        return "Input.Number";
    };
    NumberInput.prototype.isSet = function () {
        return this.value !== undefined && !isNaN(this.value);
    };
    NumberInput.prototype.isValid = function () {
        if (this.value === undefined) {
            return !this.isRequired;
        }
        var result = true;
        if (this.min !== undefined) {
            result = result && this.value >= this.min;
        }
        if (this.max !== undefined) {
            result = result && this.value <= this.max;
        }
        return result;
    };
    Object.defineProperty(NumberInput.prototype, "value", {
        get: function () {
            return this._numberInputElement ? this._numberInputElement.valueAsNumber : undefined;
        },
        set: function (value) {
            if (value && this._numberInputElement) {
                this._numberInputElement.value = value.toString();
            }
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    NumberInput.valueProperty = new serialization.NumProperty(serialization.Versions.v1_0, "value");
    NumberInput.placeholderProperty = new serialization.StringProperty(serialization.Versions.v1_0, "placeholder");
    NumberInput.minProperty = new serialization.NumProperty(serialization.Versions.v1_0, "min");
    NumberInput.maxProperty = new serialization.NumProperty(serialization.Versions.v1_0, "max");
    __decorate([
        (0, serialization.property)(NumberInput.valueProperty)
    ], NumberInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization.property)(NumberInput.minProperty)
    ], NumberInput.prototype, "min", void 0);
    __decorate([
        (0, serialization.property)(NumberInput.maxProperty)
    ], NumberInput.prototype, "max", void 0);
    __decorate([
        (0, serialization.property)(NumberInput.placeholderProperty)
    ], NumberInput.prototype, "placeholder", void 0);
    return NumberInput;
}(Input));
exports.NumberInput = NumberInput;
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateInput.prototype.internalRender = function () {
        var _this = this;
        this._dateInputElement = document.createElement("input");
        this._dateInputElement.setAttribute("type", "date");
        if (this.min) {
            this._dateInputElement.setAttribute("min", this.min);
        }
        if (this.max) {
            this._dateInputElement.setAttribute("max", this.max);
        }
        if (this.placeholder) {
            this._dateInputElement.placeholder = this.placeholder;
            this._dateInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._dateInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
        this._dateInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-dateInput");
        this._dateInputElement.style.width = "100%";
        this._dateInputElement.oninput = function () {
            _this.valueChanged();
        };
        if (this.defaultValue) {
            this._dateInputElement.value = this.defaultValue;
        }
        return this._dateInputElement;
    };
    DateInput.prototype.updateVisualState = function (eventType) {
        _super.prototype.updateVisualState.call(this, eventType);
        if (this._dateInputElement && this.inputStyle === enums.InputStyle.RevealOnHover) {
            var hideDatePicker = shouldHideInputAdornersForRevealOnHover(this._dateInputElement, eventType);
            updateInputAdornersVisibility(this._dateInputElement, hideDatePicker /*hide*/);
        }
    };
    DateInput.prototype.getJsonTypeName = function () {
        return "Input.Date";
    };
    DateInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    DateInput.prototype.isValid = function () {
        if (!this.value) {
            return !this.isRequired;
        }
        var valueAsDate = new Date(this.value);
        var result = true;
        if (this.min) {
            var minDate = new Date(this.min);
            result = result && valueAsDate >= minDate;
        }
        if (this.max) {
            var maxDate = new Date(this.max);
            result = result && valueAsDate <= maxDate;
        }
        return result;
    };
    Object.defineProperty(DateInput.prototype, "value", {
        get: function () {
            return this._dateInputElement ? this._dateInputElement.value : undefined;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    DateInput.valueProperty = new serialization.StringProperty(serialization.Versions.v1_0, "value");
    DateInput.placeholderProperty = new serialization.StringProperty(serialization.Versions.v1_0, "placeholder");
    DateInput.minProperty = new serialization.StringProperty(serialization.Versions.v1_0, "min");
    DateInput.maxProperty = new serialization.StringProperty(serialization.Versions.v1_0, "max");
    __decorate([
        (0, serialization.property)(DateInput.valueProperty)
    ], DateInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization.property)(DateInput.minProperty)
    ], DateInput.prototype, "min", void 0);
    __decorate([
        (0, serialization.property)(DateInput.maxProperty)
    ], DateInput.prototype, "max", void 0);
    __decorate([
        (0, serialization.property)(DateInput.placeholderProperty)
    ], DateInput.prototype, "placeholder", void 0);
    return DateInput;
}(Input));
exports.DateInput = DateInput;
var TimeProperty = /** @class */ (function (_super) {
    __extends(TimeProperty, _super);
    function TimeProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, function (sender, prop, source, context) {
            var value = source[prop.name];
            if (typeof value === "string" && value && /^[0-9]{2}:[0-9]{2}$/.test(value)) {
                return value;
            }
            return undefined;
        }, function (sender, prop, target, value, context) {
            context.serializeValue(target, prop.name, value);
        }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    return TimeProperty;
}(serialization.CustomProperty));
exports.TimeProperty = TimeProperty;
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInput.convertTimeStringToDate = function (timeString) {
        return new Date("1973-09-04T" + timeString + ":00Z");
    };
    TimeInput.prototype.internalRender = function () {
        var _this = this;
        this._timeInputElement = document.createElement("input");
        this._timeInputElement.setAttribute("type", "time");
        if (this.min) {
            this._timeInputElement.setAttribute("min", this.min);
        }
        if (this.max) {
            this._timeInputElement.setAttribute("max", this.max);
        }
        this._timeInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-timeInput");
        this._timeInputElement.style.width = "100%";
        this._timeInputElement.oninput = function () {
            _this.valueChanged();
        };
        if (this.placeholder) {
            this._timeInputElement.placeholder = this.placeholder;
            this._timeInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._timeInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
        if (this.defaultValue) {
            this._timeInputElement.value = this.defaultValue;
        }
        return this._timeInputElement;
    };
    TimeInput.prototype.updateVisualState = function (eventType) {
        _super.prototype.updateVisualState.call(this, eventType);
        if (this._timeInputElement && this.inputStyle === enums.InputStyle.RevealOnHover) {
            var hideTimePicker = shouldHideInputAdornersForRevealOnHover(this._timeInputElement, eventType);
            updateInputAdornersVisibility(this._timeInputElement, hideTimePicker /*hide*/);
        }
    };
    TimeInput.prototype.getJsonTypeName = function () {
        return "Input.Time";
    };
    TimeInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    TimeInput.prototype.isValid = function () {
        if (!this.value) {
            return !this.isRequired;
        }
        var valueAsDate = TimeInput.convertTimeStringToDate(this.value);
        var result = true;
        if (this.min) {
            var minDate = TimeInput.convertTimeStringToDate(this.min);
            result = result && valueAsDate >= minDate;
        }
        if (this.max) {
            var maxDate = TimeInput.convertTimeStringToDate(this.max);
            result = result && valueAsDate <= maxDate;
        }
        return result;
    };
    Object.defineProperty(TimeInput.prototype, "value", {
        get: function () {
            return this._timeInputElement ? this._timeInputElement.value : undefined;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    TimeInput.valueProperty = new TimeProperty(serialization.Versions.v1_0, "value");
    TimeInput.placeholderProperty = new serialization.StringProperty(serialization.Versions.v1_0, "placeholder");
    TimeInput.minProperty = new TimeProperty(serialization.Versions.v1_0, "min");
    TimeInput.maxProperty = new TimeProperty(serialization.Versions.v1_0, "max");
    __decorate([
        (0, serialization.property)(TimeInput.valueProperty)
    ], TimeInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization.property)(TimeInput.minProperty)
    ], TimeInput.prototype, "min", void 0);
    __decorate([
        (0, serialization.property)(TimeInput.maxProperty)
    ], TimeInput.prototype, "max", void 0);
    __decorate([
        (0, serialization.property)(TimeInput.placeholderProperty)
    ], TimeInput.prototype, "placeholder", void 0);
    return TimeInput;
}(Input));
exports.TimeInput = TimeInput;
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = enums.ActionStyle.Default;
        _this.mode = enums.ActionMode.Primary;
        _this._state = 0 /* Normal */;
        _this._isFocusable = true;
        return _this;
    }
    //#endregion
    Action.prototype.renderButtonContent = function () {
        if (this.renderedElement) {
            // Cache hostConfig for perf
            var hostConfig = this.hostConfig;
            var titleElement = document.createElement("div");
            titleElement.style.overflow = "hidden";
            titleElement.style.textOverflow = "ellipsis";
            if (!(hostConfig.actions.iconPlacement === enums.ActionIconPlacement.AboveTitle ||
                hostConfig.actions.allowTitleToWrap)) {
                titleElement.style.whiteSpace = "nowrap";
            }
            if (this.title) {
                titleElement.innerText = this.title;
            }
            if (!this.iconUrl) {
                this.renderedElement.classList.add("noIcon");
                this.renderedElement.appendChild(titleElement);
            }
            else {
                var iconElement = document.createElement("img");
                iconElement.src = this.iconUrl;
                iconElement.style.width = hostConfig.actions.iconSize + "px";
                iconElement.style.height = hostConfig.actions.iconSize + "px";
                iconElement.style.flex = "0 0 auto";
                if (hostConfig.actions.iconPlacement === enums.ActionIconPlacement.AboveTitle) {
                    this.renderedElement.classList.add("iconAbove");
                    this.renderedElement.style.flexDirection = "column";
                    if (this.title) {
                        iconElement.style.marginBottom = "6px";
                    }
                }
                else {
                    this.renderedElement.classList.add("iconLeft");
                    iconElement.style.maxHeight = "100%";
                    if (this.title) {
                        iconElement.style.marginRight = "6px";
                    }
                }
                this.renderedElement.appendChild(iconElement);
                this.renderedElement.appendChild(titleElement);
            }
        }
    };
    Action.prototype.getParentContainer = function () {
        if (this.parent instanceof Container) {
            return this.parent;
        }
        return this.parent ? this.parent.getParentContainer() : undefined;
    };
    Action.prototype.isDesignMode = function () {
        var rootElement = this.getRootObject();
        return rootElement instanceof CardElement && rootElement.isDesignMode();
    };
    Action.prototype.updateCssClasses = function () {
        var _a, _b;
        if (this.parent && this.renderedElement) {
            var hostConfig = this.parent.hostConfig;
            this.renderedElement.className = hostConfig.makeCssClassName(this.isEffectivelyEnabled() ? "ac-pushButton" : "ac-pushButton-disabled");
            var parentContainer = this.getParentContainer();
            if (parentContainer) {
                var parentContainerStyle = parentContainer.getEffectiveStyle();
                if (parentContainerStyle) {
                    this.renderedElement.classList.add("style-" + parentContainerStyle);
                }
            }
            this.renderedElement.tabIndex = !this.isDesignMode() && this.isFocusable ? 0 : -1;
            switch (this._state) {
                case 0 /* Normal */:
                    // No additional classes needed
                    break;
                case 1 /* Expanded */:
                    this.renderedElement.classList.add(hostConfig.makeCssClassName("expanded"));
                    break;
                case 2 /* Subdued */:
                    this.renderedElement.classList.add(hostConfig.makeCssClassName("subdued"));
                    break;
            }
            if (this.style && this.isEffectivelyEnabled()) {
                if (this.style === enums.ActionStyle.Positive) {
                    (_a = this.renderedElement.classList).add.apply(_a, hostConfig.makeCssClassNames("primary", "style-positive"));
                }
                else {
                    (_b = this.renderedElement.classList).add.apply(_b, hostConfig.makeCssClassNames("style-" + this.style.toLowerCase()));
                }
            }
        }
    };
    Action.prototype.getDefaultSerializationContext = function () {
        return new SerializationContext();
    };
    Action.prototype.internalGetReferencedInputs = function () {
        return {};
    };
    Action.prototype.internalPrepareForExecution = function (_inputs) {
        // Do nothing in base implementation
    };
    Action.prototype.internalValidateInputs = function (referencedInputs) {
        var result = [];
        if (referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = referencedInputs[key];
                if (!input.validateValue()) {
                    result.push(input);
                }
            }
        }
        return result;
    };
    Action.prototype.shouldSerialize = function (context) {
        return context.actionRegistry.findByName(this.getJsonTypeName()) !== undefined;
    };
    Action.prototype.raiseExecuteActionEvent = function () {
        if (this.onExecute) {
            this.onExecute(this);
        }
        raiseExecuteActionEvent(this);
    };
    Action.prototype.internalAfterExecute = function () {
        var rootObject = this.getRootObject();
        if (rootObject instanceof CardElement) {
            rootObject.updateActionsEnabledState();
        }
    };
    Action.prototype.getHref = function () {
        return "";
    };
    Action.prototype.getAriaRole = function () {
        return "button";
    };
    Action.prototype.setupElementForAccessibility = function (element, promoteTooltipToLabel) {
        if (promoteTooltipToLabel === void 0) { promoteTooltipToLabel = false; }
        element.tabIndex = this.isEffectivelyEnabled() && !this.isDesignMode() ? 0 : -1;
        element.setAttribute("role", this.getAriaRole());
        if (element instanceof HTMLButtonElement) {
            element.disabled = !this.isEffectivelyEnabled();
        }
        if (!this.isEffectivelyEnabled()) {
            element.setAttribute("aria-disabled", "true");
        }
        else {
            element.removeAttribute("aria-disabled");
            element.classList.add(this.hostConfig.makeCssClassName("ac-selectable"));
        }
        if (this.title) {
            element.setAttribute("aria-label", this.title);
            element.title = this.title;
        }
        else {
            element.removeAttribute("aria-label");
            element.removeAttribute("title");
        }
        if (this.tooltip) {
            if (promoteTooltipToLabel && !this.title) {
                element.setAttribute("aria-label", this.tooltip);
            }
            element.title = this.tooltip;
        }
    };
    Action.prototype.parse = function (source, context) {
        return _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
    };
    Action.prototype.render = function () {
        var _this = this;
        var buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.style.display = "flex";
        buttonElement.style.alignItems = "center";
        buttonElement.style.justifyContent = "center";
        buttonElement.onclick = function (e) {
            if (_this.isEffectivelyEnabled()) {
                e.preventDefault();
                e.cancelBubble = true;
                _this.execute();
            }
        };
        this._renderedElement = buttonElement;
        this.renderButtonContent();
        this.updateCssClasses();
        this.setupElementForAccessibility(buttonElement);
    };
    Action.prototype.execute = function () {
        if (this._actionCollection) {
            this._actionCollection.actionExecuted(this);
        }
        this.raiseExecuteActionEvent();
        this.internalAfterExecute();
    };
    Action.prototype.prepareForExecution = function () {
        var referencedInputs = this.getReferencedInputs();
        var invalidInputs = this.internalValidateInputs(referencedInputs);
        if (invalidInputs.length > 0) {
            invalidInputs[0].focus();
            return false;
        }
        this.internalPrepareForExecution(referencedInputs);
        return true;
    };
    Action.prototype.remove = function () {
        if (this._actionCollection) {
            return this._actionCollection.removeAction(this);
        }
        return false;
    };
    Action.prototype.getAllInputs = function (processActions) {
        return [];
    };
    Action.prototype.getAllActions = function () {
        return [this];
    };
    Action.prototype.getResourceInformation = function () {
        return this.iconUrl ? [{ url: this.iconUrl, mimeType: "image" }] : [];
    };
    Action.prototype.getActionById = function (id) {
        return this.id === id ? this : undefined;
    };
    Action.prototype.getReferencedInputs = function () {
        return this.internalGetReferencedInputs();
    };
    /**
     * Validates the inputs associated with this action.
     *
     * @returns A list of inputs that failed validation, or an empty array if no input failed validation.
     */
    Action.prototype.validateInputs = function () {
        return this.internalValidateInputs(this.getReferencedInputs());
    };
    Action.prototype.updateEnabledState = function () {
        // Do nothing in base implementation
    };
    Action.prototype.isEffectivelyEnabled = function () {
        return this.isEnabled;
    };
    Object.defineProperty(Action.prototype, "isPrimary", {
        get: function () {
            return this.style === enums.ActionStyle.Positive;
        },
        set: function (value) {
            if (value) {
                this.style = enums.ActionStyle.Positive;
            }
            else {
                if (this.style === enums.ActionStyle.Positive) {
                    this.style = enums.ActionStyle.Default;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "hostConfig", {
        get: function () {
            return this.parent ? this.parent.hostConfig : hostConfig.defaultHostConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            if (this._state !== value) {
                this._state = value;
                this.updateCssClasses();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "isFocusable", {
        get: function () {
            return this._isFocusable;
        },
        set: function (value) {
            if (this._isFocusable !== value) {
                this._isFocusable = value;
                this.updateCssClasses();
            }
        },
        enumerable: false,
        configurable: true
    });
    Action.titleProperty = new serialization.StringProperty(serialization.Versions.v1_0, "title");
    Action.iconUrlProperty = new serialization.StringProperty(serialization.Versions.v1_1, "iconUrl");
    Action.styleProperty = new serialization.ValueSetProperty(serialization.Versions.v1_2, "style", [
        { value: enums.ActionStyle.Default },
        { value: enums.ActionStyle.Positive },
        { value: enums.ActionStyle.Destructive }
    ], enums.ActionStyle.Default);
    Action.modeProperty = new serialization.ValueSetProperty(serialization.Versions.v1_5, "mode", [{ value: enums.ActionMode.Primary }, { value: enums.ActionMode.Secondary }], enums.ActionMode.Primary);
    Action.tooltipProperty = new serialization.StringProperty(serialization.Versions.v1_5, "tooltip");
    Action.isEnabledProperty = new serialization.BoolProperty(serialization.Versions.v1_5, "isEnabled", true);
    __decorate([
        (0, serialization.property)(Action.titleProperty)
    ], Action.prototype, "title", void 0);
    __decorate([
        (0, serialization.property)(Action.iconUrlProperty)
    ], Action.prototype, "iconUrl", void 0);
    __decorate([
        (0, serialization.property)(Action.styleProperty)
    ], Action.prototype, "style", void 0);
    __decorate([
        (0, serialization.property)(Action.modeProperty)
    ], Action.prototype, "mode", void 0);
    __decorate([
        (0, serialization.property)(Action.tooltipProperty)
    ], Action.prototype, "tooltip", void 0);
    __decorate([
        (0, serialization.property)(Action.isEnabledProperty)
    ], Action.prototype, "isEnabled", void 0);
    return Action;
}(cardObject.CardObject));
exports.Action = Action;
var SubmitActionBase = /** @class */ (function (_super) {
    __extends(SubmitActionBase, _super);
    function SubmitActionBase() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabledUnlessAssociatedInputsChange = false;
        //#endregion
        _this._isPrepared = false;
        _this._areReferencedInputsDirty = false;
        return _this;
    }
    SubmitActionBase.prototype.internalGetReferencedInputs = function () {
        var result = {};
        if (this.associatedInputs !== "none") {
            var current = this.parent;
            var inputs = [];
            while (current) {
                inputs.push.apply(inputs, current.getAllInputs(false));
                current = current.parent;
            }
            for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
                var input = inputs_1[_i];
                if (input.id) {
                    result[input.id] = input;
                }
            }
        }
        return result;
    };
    SubmitActionBase.prototype.internalPrepareForExecution = function (inputs) {
        if (this._originalData) {
            this._processedData = JSON.parse(JSON.stringify(this._originalData));
        }
        else {
            this._processedData = {};
        }
        if (this._processedData && inputs) {
            for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = inputs[key];
                if (input.id && input.isSet()) {
                    this._processedData[input.id] =
                        typeof input.value === "string" ? input.value : input.value.toString();
                }
            }
        }
        this._isPrepared = true;
    };
    SubmitActionBase.prototype.internalAfterExecute = function () {
        if (shared.GlobalSettings.resetInputsDirtyStateAfterActionExecution) {
            this.resetReferencedInputsDirtyState();
        }
    };
    SubmitActionBase.prototype.resetReferencedInputsDirtyState = function () {
        var referencedInputs = this.getReferencedInputs();
        this._areReferencedInputsDirty = false;
        if (referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = referencedInputs[key];
                input.resetDirtyState();
            }
        }
    };
    SubmitActionBase.prototype.updateEnabledState = function () {
        this._areReferencedInputsDirty = false;
        var referencedInputs = this.getReferencedInputs();
        if (referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = referencedInputs[key];
                if (input.isDirty()) {
                    this._areReferencedInputsDirty = true;
                    break;
                }
            }
        }
        this.updateCssClasses();
        if (this._renderedElement) {
            this.setupElementForAccessibility(this._renderedElement);
        }
    };
    SubmitActionBase.prototype.isEffectivelyEnabled = function () {
        var result = _super.prototype.isEffectivelyEnabled.call(this);
        return this.disabledUnlessAssociatedInputsChange
            ? result && this._areReferencedInputsDirty
            : result;
    };
    Object.defineProperty(SubmitActionBase.prototype, "data", {
        get: function () {
            return this._isPrepared ? this._processedData : this._originalData;
        },
        set: function (value) {
            this._originalData = value;
            this._isPrepared = false;
        },
        enumerable: false,
        configurable: true
    });
    SubmitActionBase.dataProperty = new serialization.PropertyDefinition(serialization.Versions.v1_0, "data");
    SubmitActionBase.associatedInputsProperty = new serialization.CustomProperty(serialization.Versions.v1_3, "associatedInputs", function (sender, prop, source, context) {
        var value = source[prop.name];
        if (value !== undefined && typeof value === "string") {
            return value.toLowerCase() === "none" ? "none" : "auto";
        }
        return undefined;
    }, function (sender, prop, target, value, context) {
        context.serializeValue(target, prop.name, value);
    });
    SubmitActionBase.disabledUnlessAssociatedInputsChangeProperty = new serialization.BoolProperty(serialization.Versions.v1_6, "disabledUnlessAssociatedInputsChange", false);
    __decorate([
        (0, serialization.property)(SubmitActionBase.dataProperty)
    ], SubmitActionBase.prototype, "_originalData", void 0);
    __decorate([
        (0, serialization.property)(SubmitActionBase.associatedInputsProperty)
    ], SubmitActionBase.prototype, "associatedInputs", void 0);
    __decorate([
        (0, serialization.property)(SubmitActionBase.disabledUnlessAssociatedInputsChangeProperty)
    ], SubmitActionBase.prototype, "disabledUnlessAssociatedInputsChange", void 0);
    return SubmitActionBase;
}(Action));
exports.SubmitActionBase = SubmitActionBase;
var SubmitAction = /** @class */ (function (_super) {
    __extends(SubmitAction, _super);
    function SubmitAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmitAction.prototype.getJsonTypeName = function () {
        return SubmitAction.JsonTypeName;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    SubmitAction.JsonTypeName = "Action.Submit";
    return SubmitAction;
}(SubmitActionBase));
exports.SubmitAction = SubmitAction;
var ExecuteAction = /** @class */ (function (_super) {
    __extends(ExecuteAction, _super);
    function ExecuteAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    ExecuteAction.prototype.getJsonTypeName = function () {
        return ExecuteAction.JsonTypeName;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ExecuteAction.JsonTypeName = "Action.Execute";
    //#region Schema
    ExecuteAction.verbProperty = new serialization.StringProperty(serialization.Versions.v1_4, "verb");
    __decorate([
        (0, serialization.property)(ExecuteAction.verbProperty)
    ], ExecuteAction.prototype, "verb", void 0);
    return ExecuteAction;
}(SubmitActionBase));
exports.ExecuteAction = ExecuteAction;
var OpenUrlAction = /** @class */ (function (_super) {
    __extends(OpenUrlAction, _super);
    function OpenUrlAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenUrlAction.prototype.getJsonTypeName = function () {
        return OpenUrlAction.JsonTypeName;
    };
    OpenUrlAction.prototype.getAriaRole = function () {
        return "link";
    };
    OpenUrlAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.url) {
            context.addFailure(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.propertyMustBeSet("url"));
        }
    };
    OpenUrlAction.prototype.getHref = function () {
        return this.url;
    };
    //#region Schema
    OpenUrlAction.urlProperty = new serialization.StringProperty(serialization.Versions.v1_0, "url");
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    OpenUrlAction.JsonTypeName = "Action.OpenUrl";
    __decorate([
        (0, serialization.property)(OpenUrlAction.urlProperty)
    ], OpenUrlAction.prototype, "url", void 0);
    return OpenUrlAction;
}(Action));
exports.OpenUrlAction = OpenUrlAction;
var ToggleVisibilityAction = /** @class */ (function (_super) {
    __extends(ToggleVisibilityAction, _super);
    function ToggleVisibilityAction() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetElements = {};
        return _this;
    }
    ToggleVisibilityAction.prototype.updateAriaControlsAttribute = function () {
        // apply aria labels to make it clear which elements this action will toggle
        if (this.targetElements) {
            var elementIds = Object.keys(this.targetElements);
            if (this._renderedElement) {
                if (elementIds.length > 0) {
                    this._renderedElement.setAttribute("aria-controls", elementIds.join(" "));
                }
                else {
                    this._renderedElement.removeAttribute("aria-controls");
                }
            }
        }
    };
    ToggleVisibilityAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.targetElements) {
            context.addFailure(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.propertyMustBeSet("targetElements"));
        }
    };
    ToggleVisibilityAction.prototype.getJsonTypeName = function () {
        return ToggleVisibilityAction.JsonTypeName;
    };
    ToggleVisibilityAction.prototype.render = function () {
        _super.prototype.render.call(this);
        this.updateAriaControlsAttribute();
    };
    ToggleVisibilityAction.prototype.execute = function () {
        _super.prototype.execute.call(this);
        if (this.parent) {
            for (var _i = 0, _a = Object.keys(this.targetElements); _i < _a.length; _i++) {
                var elementId = _a[_i];
                var targetElement = this.parent.getRootElement().getElementById(elementId);
                if (targetElement) {
                    if (typeof this.targetElements[elementId] === "boolean") {
                        targetElement.isVisible = this.targetElements[elementId];
                    }
                    else {
                        targetElement.isVisible = !targetElement.isVisible;
                    }
                }
            }
        }
    };
    ToggleVisibilityAction.prototype.addTargetElement = function (elementId, isVisible) {
        if (isVisible === void 0) { isVisible = undefined; }
        this.targetElements[elementId] = isVisible;
        this.updateAriaControlsAttribute();
    };
    ToggleVisibilityAction.prototype.removeTargetElement = function (elementId) {
        delete this.targetElements[elementId];
        this.updateAriaControlsAttribute();
    };
    ToggleVisibilityAction.targetElementsProperty = new serialization.CustomProperty(serialization.Versions.v1_2, "targetElements", function (sender, prop, source, context) {
        var result = {};
        if (Array.isArray(source[prop.name])) {
            for (var _i = 0, _a = source[prop.name]; _i < _a.length; _i++) {
                var item = _a[_i];
                if (typeof item === "string") {
                    result[item] = undefined;
                }
                else if (typeof item === "object") {
                    var elementId = item["elementId"];
                    if (typeof elementId === "string") {
                        result[elementId] = utils.parseBool(item["isVisible"]);
                    }
                }
            }
        }
        return result;
    }, function (sender, prop, target, value, context) {
        var targetElements = [];
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var id = _a[_i];
            if (typeof value[id] === "boolean") {
                targetElements.push({
                    elementId: id,
                    isVisible: value[id]
                });
            }
            else {
                targetElements.push(id);
            }
        }
        context.serializeArray(target, prop.name, targetElements);
    }, {}, function (sender) {
        return {};
    });
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ToggleVisibilityAction.JsonTypeName = "Action.ToggleVisibility";
    __decorate([
        (0, serialization.property)(ToggleVisibilityAction.targetElementsProperty)
    ], ToggleVisibilityAction.prototype, "targetElements", void 0);
    return ToggleVisibilityAction;
}(Action));
exports.ToggleVisibilityAction = ToggleVisibilityAction;
var StringWithSubstitutionProperty = /** @class */ (function (_super) {
    __extends(StringWithSubstitutionProperty, _super);
    function StringWithSubstitutionProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, undefined, function () {
            return new shared.StringWithSubstitutions();
        }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    StringWithSubstitutionProperty.prototype.parse = function (sender, source, context) {
        var result = new shared.StringWithSubstitutions();
        result.set(utils.parseString(source[this.name]));
        return result;
    };
    StringWithSubstitutionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value.getOriginal());
    };
    return StringWithSubstitutionProperty;
}(serialization.PropertyDefinition));
var HttpHeader = /** @class */ (function (_super) {
    __extends(HttpHeader, _super);
    //#endregion
    function HttpHeader(name, value) {
        if (name === void 0) { name = ""; }
        if (value === void 0) { value = ""; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    HttpHeader.prototype.getSchemaKey = function () {
        return "HttpHeader";
    };
    HttpHeader.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        this._value.getReferencedInputs(inputs, referencedInputs);
    };
    HttpHeader.prototype.prepareForExecution = function (inputs) {
        this._value.substituteInputValues(inputs, shared.ContentTypes.applicationXWwwFormUrlencoded);
    };
    Object.defineProperty(HttpHeader.prototype, "value", {
        get: function () {
            return this._value.get();
        },
        set: function (newValue) {
            this._value.set(newValue);
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    HttpHeader.nameProperty = new serialization.StringProperty(serialization.Versions.v1_0, "name");
    HttpHeader.valueProperty = new StringWithSubstitutionProperty(serialization.Versions.v1_0, "value");
    __decorate([
        (0, serialization.property)(HttpHeader.nameProperty)
    ], HttpHeader.prototype, "name", void 0);
    __decorate([
        (0, serialization.property)(HttpHeader.valueProperty)
    ], HttpHeader.prototype, "_value", void 0);
    return HttpHeader;
}(serialization.SerializableObject));
exports.HttpHeader = HttpHeader;
var HttpAction = /** @class */ (function (_super) {
    __extends(HttpAction, _super);
    function HttpAction() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ignoreInputValidation = false;
        return _this;
    }
    HttpAction.prototype.internalGetReferencedInputs = function () {
        var allInputs = this.parent ? this.parent.getRootElement().getAllInputs() : [];
        var result = {};
        this._url.getReferencedInputs(allInputs, result);
        for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
            var header = _a[_i];
            header.getReferencedInputs(allInputs, result);
        }
        this._body.getReferencedInputs(allInputs, result);
        return result;
    };
    HttpAction.prototype.internalPrepareForExecution = function (inputs) {
        if (inputs) {
            this._url.substituteInputValues(inputs, shared.ContentTypes.applicationXWwwFormUrlencoded);
            var contentType = shared.ContentTypes.applicationJson;
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                header.prepareForExecution(inputs);
                if (header.name && header.name.toLowerCase() === "content-type") {
                    contentType = header.value;
                }
            }
            this._body.substituteInputValues(inputs, contentType);
        }
    };
    HttpAction.prototype.getJsonTypeName = function () {
        return HttpAction.JsonTypeName;
    };
    HttpAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.url) {
            context.addFailure(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.propertyMustBeSet("url"));
        }
        if (this.headers.length > 0) {
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                if (!header.name) {
                    context.addFailure(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.actionHttpHeadersMustHaveNameAndValue());
                }
            }
        }
    };
    Object.defineProperty(HttpAction.prototype, "ignoreInputValidation", {
        get: function () {
            return this._ignoreInputValidation;
        },
        set: function (value) {
            this._ignoreInputValidation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "url", {
        get: function () {
            return this._url.get();
        },
        set: function (value) {
            this._url.set(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "body", {
        get: function () {
            return this._body.get();
        },
        set: function (value) {
            this._body.set(value);
        },
        enumerable: false,
        configurable: true
    });
    HttpAction.urlProperty = new StringWithSubstitutionProperty(serialization.Versions.v1_0, "url");
    HttpAction.bodyProperty = new StringWithSubstitutionProperty(serialization.Versions.v1_0, "body");
    HttpAction.methodProperty = new serialization.StringProperty(serialization.Versions.v1_0, "method");
    HttpAction.headersProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_0, "headers", HttpHeader);
    HttpAction.ignoreInputValidationProperty = new serialization.BoolProperty(serialization.Versions.v1_3, "ignoreInputValidation", false);
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    HttpAction.JsonTypeName = "Action.Http";
    __decorate([
        (0, serialization.property)(HttpAction.urlProperty)
    ], HttpAction.prototype, "_url", void 0);
    __decorate([
        (0, serialization.property)(HttpAction.bodyProperty)
    ], HttpAction.prototype, "_body", void 0);
    __decorate([
        (0, serialization.property)(HttpAction.methodProperty)
    ], HttpAction.prototype, "method", void 0);
    __decorate([
        (0, serialization.property)(HttpAction.headersProperty)
    ], HttpAction.prototype, "headers", void 0);
    __decorate([
        (0, serialization.property)(HttpAction.ignoreInputValidationProperty)
    ], HttpAction.prototype, "_ignoreInputValidation", void 0);
    return HttpAction;
}(Action));
exports.HttpAction = HttpAction;
var ShowCardAction = /** @class */ (function (_super) {
    __extends(ShowCardAction, _super);
    function ShowCardAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = new InlineAdaptiveCard();
        return _this;
    }
    ShowCardAction.prototype.updateCssClasses = function () {
        _super.prototype.updateCssClasses.call(this);
        if (this.renderedElement) {
            var effectiveHostConfig = this.parent ? this.parent.hostConfig : hostConfig.defaultHostConfig;
            this.renderedElement.classList.add(effectiveHostConfig.makeCssClassName("expandable"));
            this.renderedElement.setAttribute("aria-expanded", (this.state === 1 /* Expanded */).toString());
        }
    };
    ShowCardAction.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        var jsonCard = source["card"];
        if (jsonCard) {
            this.card.parse(jsonCard, context);
        }
        else {
            context.logParseEvent(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.showCardMustHaveCard());
        }
    };
    ShowCardAction.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        if (this.card) {
            context.serializeValue(target, "card", this.card.toJSON(context));
        }
    };
    ShowCardAction.prototype.raiseExecuteActionEvent = function () {
        if (this.hostConfig.actions.showCard.actionMode === enums.ShowCardActionMode.Popup) {
            // Only raise the event in Popup mode.
            _super.prototype.raiseExecuteActionEvent.call(this);
        }
    };
    ShowCardAction.prototype.releaseDOMResources = function () {
        _super.prototype.releaseDOMResources.call(this);
        this.card.releaseDOMResources();
    };
    ShowCardAction.prototype.getJsonTypeName = function () {
        return ShowCardAction.JsonTypeName;
    };
    ShowCardAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this.card.internalValidateProperties(context);
    };
    ShowCardAction.prototype.setParent = function (value) {
        _super.prototype.setParent.call(this, value);
        this.card.setParent(value);
    };
    ShowCardAction.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        return this.card.getAllInputs(processActions);
    };
    ShowCardAction.prototype.getAllActions = function () {
        var result = _super.prototype.getAllActions.call(this);
        result.push.apply(result, this.card.getAllActions());
        return result;
    };
    ShowCardAction.prototype.getResourceInformation = function () {
        var result = _super.prototype.getResourceInformation.call(this);
        result.push.apply(result, this.card.getResourceInformation());
        return result;
    };
    ShowCardAction.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            result = this.card.getActionById(id);
        }
        return result;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ShowCardAction.JsonTypeName = "Action.ShowCard";
    return ShowCardAction;
}(Action));
exports.ShowCardAction = ShowCardAction;
var OverflowAction = /** @class */ (function (_super) {
    __extends(OverflowAction, _super);
    function OverflowAction(actions) {
        var _this = _super.call(this) || this;
        _this._actions = actions;
        _this.title = strings.Strings.defaults.overflowButtonText();
        _this.tooltip = strings.Strings.defaults.overflowButtonTooltip();
        return _this;
    }
    OverflowAction.prototype.getActions = function () {
        return this._actions;
    };
    OverflowAction.prototype.getAllActions = function () {
        var result = _super.prototype.getAllActions.call(this);
        result.push.apply(result, this._actions);
        return result;
    };
    OverflowAction.prototype.getJsonTypeName = function () {
        return ShowCardAction.JsonTypeName;
    };
    OverflowAction.prototype.execute = function () {
        var _this = this;
        var _a;
        var shouldDisplayPopupMenu = !raiseDisplayOverflowActionMenuEvent(this, this.renderedElement);
        if (shouldDisplayPopupMenu && this.renderedElement) {
            var contextMenu_1 = new controls.PopupMenu();
            contextMenu_1.hostConfig = this.hostConfig;
            var _loop_2 = function (i) {
                var menuItem = new controls.MenuItem(i.toString(), (_a = this_1._actions[i].title) !== null && _a !== void 0 ? _a : "");
                menuItem.isEnabled = this_1._actions[i].isEnabled;
                menuItem.onClick = function () {
                    var actionToExecute = _this._actions[i];
                    contextMenu_1.closePopup(false);
                    if (actionToExecute.isEnabled) {
                        actionToExecute.execute();
                    }
                };
                contextMenu_1.items.add(menuItem);
            };
            var this_1 = this;
            for (var i = 0; i < this._actions.length; i++) {
                _loop_2(i);
            }
            contextMenu_1.onClose = function () {
                var _a;
                (_a = _this.renderedElement) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-expanded", "false");
            };
            this.renderedElement.setAttribute("aria-expanded", "true");
            contextMenu_1.popup(this.renderedElement);
        }
    };
    OverflowAction.prototype.setupElementForAccessibility = function (element, promoteTooltipToLabel) {
        if (promoteTooltipToLabel === void 0) { promoteTooltipToLabel = false; }
        _super.prototype.setupElementForAccessibility.call(this, element, promoteTooltipToLabel);
        element.setAttribute("aria-label", strings.Strings.defaults.overflowButtonTooltip());
        element.setAttribute("aria-expanded", "false");
    };
    OverflowAction.JsonTypeName = "Action.Overflow";
    return OverflowAction;
}(Action));
var ActionCollection = /** @class */ (function () {
    function ActionCollection(owner) {
        this._items = [];
        this._renderedActions = [];
        this._owner = owner;
    }
    ActionCollection.prototype.isActionAllowed = function (action) {
        var forbiddenTypes = this._owner.getForbiddenActionTypes();
        if (forbiddenTypes) {
            for (var _i = 0, forbiddenTypes_1 = forbiddenTypes; _i < forbiddenTypes_1.length; _i++) {
                var forbiddenType = forbiddenTypes_1[_i];
                if (action.constructor === forbiddenType) {
                    return false;
                }
            }
        }
        return true;
    };
    ActionCollection.prototype.refreshContainer = function () {
        clearElement(this._actionCardContainer);
        if (!this._actionCard) {
            this._actionCardContainer.style.marginTop = "0px";
            return;
        }
        this._actionCardContainer.style.marginTop =
            this.renderedActionCount > 0
                ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px"
                : "0px";
        var padding = this._owner.getEffectivePadding();
        this._owner.getImmediateSurroundingPadding(padding);
        var physicalPadding = this._owner.hostConfig.paddingDefinitionToSpacingDefinition(padding);
        if (this._actionCard) {
            this._actionCard.style.paddingLeft = physicalPadding.left + "px";
            this._actionCard.style.paddingRight = physicalPadding.right + "px";
            this._actionCard.style.marginLeft = "-" + physicalPadding.left + "px";
            this._actionCard.style.marginRight = "-" + physicalPadding.right + "px";
            if (physicalPadding.bottom !== 0 && !this._owner.isDesignMode()) {
                this._actionCard.style.paddingBottom = physicalPadding.bottom + "px";
                this._actionCard.style.marginBottom = "-" + physicalPadding.bottom + "px";
            }
            utils.appendChild(this._actionCardContainer, this._actionCard);
        }
    };
    ActionCollection.prototype.layoutChanged = function () {
        this._owner.getRootElement().updateLayout();
    };
    ActionCollection.prototype.showActionCard = function (action, suppressStyle, raiseEvent) {
        if (suppressStyle === void 0) { suppressStyle = false; }
        if (raiseEvent === void 0) { raiseEvent = true; }
        action.card.suppressStyle = suppressStyle;
        // Always re-render a ShowCard action in design mode; reuse already rendered ShowCard (if available) otherwise
        var renderedCard = action.card.renderedElement && !this._owner.isDesignMode()
            ? action.card.renderedElement
            : action.card.render();
        this._actionCard = renderedCard;
        this._expandedAction = action;
        this.refreshContainer();
        if (raiseEvent) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(action, true);
        }
    };
    ActionCollection.prototype.collapseExpandedAction = function () {
        for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var action = _a[_i];
            action.state = 0 /* Normal */;
        }
        var previouslyExpandedAction = this._expandedAction;
        this._expandedAction = undefined;
        this._actionCard = undefined;
        this.refreshContainer();
        if (previouslyExpandedAction) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(previouslyExpandedAction, false);
        }
    };
    ActionCollection.prototype.expandShowCardAction = function (action, raiseEvent) {
        var _this = this;
        var afterSelectedAction = false;
        for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var renderedAction = _a[_i];
            // Remove actions after selected action from tabOrder if the actions are oriented horizontally, to skip focus directly to expanded card
            if (this._owner.hostConfig.actions.actionsOrientation == enums.Orientation.Horizontal &&
                afterSelectedAction) {
                renderedAction.isFocusable = false;
            }
            if (renderedAction !== action) {
                renderedAction.state = 2 /* Subdued */;
            }
            else {
                renderedAction.state = 1 /* Expanded */;
                afterSelectedAction = true;
                if (renderedAction.renderedElement) {
                    renderedAction.renderedElement.onblur = function (_e) {
                        for (var _i = 0, _a = _this._renderedActions; _i < _a.length; _i++) {
                            var ra = _a[_i];
                            ra.isFocusable = true;
                        }
                    };
                }
            }
        }
        this.showActionCard(action, !(this._owner.isAtTheVeryLeft() && this._owner.isAtTheVeryRight()), raiseEvent);
    };
    ActionCollection.prototype.releaseDOMResources = function () {
        for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var action = _a[_i];
            action.releaseDOMResources();
        }
    };
    ActionCollection.prototype.actionExecuted = function (action) {
        if (!(action instanceof ShowCardAction)) {
            this.collapseExpandedAction();
        }
        else {
            if (action === this._expandedAction) {
                this.collapseExpandedAction();
            }
            else if (this._owner.hostConfig.actions.showCard.actionMode ===
                enums.ShowCardActionMode.Inline) {
                this.expandShowCardAction(action, true);
            }
        }
    };
    ActionCollection.prototype.parse = function (source, context) {
        this.clear();
        if (Array.isArray(source)) {
            for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                var jsonAction = source_1[_i];
                var forbiddenActions = [];
                // If the action owner is a ContainerWithActions, we should check for forbidden actions
                if (this._owner instanceof ContainerWithActions) {
                    forbiddenActions = this._owner.getForbiddenActionNames();
                }
                var action = context.parseAction(this._owner, jsonAction, forbiddenActions, !this._owner.isDesignMode());
                if (action) {
                    this.addAction(action);
                }
            }
        }
    };
    ActionCollection.prototype.toJSON = function (target, propertyName, context) {
        context.serializeArray(target, propertyName, this._items);
    };
    ActionCollection.prototype.getActionAt = function (id) {
        return this._items[id];
    };
    ActionCollection.prototype.getActionCount = function () {
        return this._items.length;
    };
    ActionCollection.prototype.getActionById = function (id) {
        var result = undefined;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            result = item.getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ActionCollection.prototype.validateProperties = function (context) {
        if (this._owner.hostConfig.actions.maxActions &&
            this._items.length > this._owner.hostConfig.actions.maxActions) {
            context.addFailure(this._owner, enums.ValidationEvent.TooManyActions, strings.Strings.errors.tooManyActions(this._owner.hostConfig.actions.maxActions));
        }
        if (this._items.length > 0 && !this._owner.hostConfig.supportsInteractivity) {
            context.addFailure(this._owner, enums.ValidationEvent.InteractivityNotAllowed, strings.Strings.errors.interactivityNotAllowed());
        }
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!this.isActionAllowed(item)) {
                context.addFailure(this._owner, enums.ValidationEvent.ActionTypeNotAllowed, strings.Strings.errors.actionTypeNotAllowed(item.getJsonTypeName()));
            }
            item.internalValidateProperties(context);
        }
    };
    ActionCollection.prototype.render = function (orientation) {
        // Cache hostConfig for better perf
        var hostConfig = this._owner.hostConfig;
        if (!hostConfig.supportsInteractivity) {
            return undefined;
        }
        var element = document.createElement("div");
        var maxActions = hostConfig.actions.maxActions
            ? Math.min(hostConfig.actions.maxActions, this._items.length)
            : this._items.length;
        this._actionCardContainer = document.createElement("div");
        this._renderedActions = [];
        if (hostConfig.actions.preExpandSingleShowCardAction &&
            maxActions === 1 &&
            this._items[0] instanceof ShowCardAction &&
            this.isActionAllowed(this._items[0])) {
            this.showActionCard(this._items[0], true);
            this._renderedActions.push(this._items[0]);
        }
        else {
            var buttonStrip = document.createElement("div");
            buttonStrip.className = hostConfig.makeCssClassName("ac-actionSet");
            buttonStrip.style.display = "flex";
            if (orientation === enums.Orientation.Horizontal) {
                buttonStrip.style.flexDirection = "row";
                if (this._owner.horizontalAlignment &&
                    hostConfig.actions.actionAlignment !== enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case enums.HorizontalAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case enums.HorizontalAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case enums.ActionAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case enums.ActionAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
            }
            else {
                buttonStrip.style.flexDirection = "column";
                if (this._owner.horizontalAlignment &&
                    hostConfig.actions.actionAlignment !== enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case enums.HorizontalAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case enums.HorizontalAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case enums.ActionAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case enums.ActionAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        case enums.ActionAlignment.Stretch:
                            buttonStrip.style.alignItems = "stretch";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
            }
            var allowedActions = this._items.filter(this.isActionAllowed.bind(this));
            var primaryActions_1 = [];
            var secondaryActions_1 = [];
            if (!this._owner.isDesignMode()) {
                allowedActions.forEach(function (action) {
                    return action.mode === enums.ActionMode.Secondary
                        ? secondaryActions_1.push(action)
                        : primaryActions_1.push(action);
                });
                // If primaryActions.length > maxActions, extra actions are moved to overflow
                var overflowPrimaryActions = primaryActions_1.splice(hostConfig.actions.maxActions);
                if (shared.GlobalSettings.allowMoreThanMaxActionsInOverflowMenu) {
                    secondaryActions_1.push.apply(secondaryActions_1, overflowPrimaryActions);
                }
                var shouldRenderOverflowActionButton = true;
                if (secondaryActions_1.length > 0) {
                    if (!this._overflowAction) {
                        this._overflowAction = new OverflowAction(secondaryActions_1);
                        this._overflowAction.setParent(this._owner);
                        this._overflowAction["_actionCollection"] = this;
                    }
                    var isRootAction = this._owner instanceof AdaptiveCard && !this._owner.parent;
                    shouldRenderOverflowActionButton = !raiseRenderOverflowActionsEvent(this._overflowAction, isRootAction);
                }
                if (this._overflowAction && shouldRenderOverflowActionButton) {
                    primaryActions_1.push(this._overflowAction);
                }
            }
            else {
                primaryActions_1 = allowedActions;
            }
            for (var i = 0; i < primaryActions_1.length; i++) {
                var action = primaryActions_1[i];
                action.render();
                if (action.renderedElement) {
                    if (hostConfig.actions.actionsOrientation === enums.Orientation.Horizontal &&
                        hostConfig.actions.actionAlignment === enums.ActionAlignment.Stretch) {
                        action.renderedElement.style.flex = "0 1 100%";
                    }
                    else {
                        action.renderedElement.style.flex = "0 1 auto";
                    }
                    buttonStrip.appendChild(action.renderedElement);
                    this._renderedActions.push(action);
                    if (i < primaryActions_1.length - 1 && hostConfig.actions.buttonSpacing > 0) {
                        var spacer = document.createElement("div");
                        if (orientation === enums.Orientation.Horizontal) {
                            spacer.style.flex = "0 0 auto";
                            spacer.style.width = hostConfig.actions.buttonSpacing + "px";
                        }
                        else {
                            spacer.style.height = hostConfig.actions.buttonSpacing + "px";
                        }
                        utils.appendChild(buttonStrip, spacer);
                    }
                }
            }
            var buttonStripContainer = document.createElement("div");
            buttonStripContainer.style.overflow = "hidden";
            buttonStripContainer.appendChild(buttonStrip);
            utils.appendChild(element, buttonStripContainer);
        }
        utils.appendChild(element, this._actionCardContainer);
        for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var renderedAction = _a[_i];
            if (renderedAction.state === 1 /* Expanded */) {
                this.expandShowCardAction(renderedAction, false);
                break;
            }
        }
        return this._renderedActions.length > 0 ? element : undefined;
    };
    ActionCollection.prototype.addAction = function (action) {
        if (!action) {
            throw new Error("The action parameter cannot be null.");
        }
        if ((!action.parent || action.parent === this._owner) && this._items.indexOf(action) < 0) {
            this._items.push(action);
            if (!action.parent) {
                action.setParent(this._owner);
            }
            action["_actionCollection"] = this;
        }
        else {
            throw new Error(strings.Strings.errors.actionAlreadyParented());
        }
    };
    ActionCollection.prototype.removeAction = function (action) {
        if (this.expandedAction && this._expandedAction === action) {
            this.collapseExpandedAction();
        }
        var actionIndex = this._items.indexOf(action);
        if (actionIndex >= 0) {
            this._items.splice(actionIndex, 1);
            action.setParent(undefined);
            action["_actionCollection"] = undefined;
            for (var i = 0; i < this._renderedActions.length; i++) {
                if (this._renderedActions[i] === action) {
                    this._renderedActions.splice(i, 1);
                    break;
                }
            }
            return true;
        }
        return false;
    };
    ActionCollection.prototype.clear = function () {
        this._items = [];
        this._renderedActions = [];
        this._expandedAction = undefined;
    };
    ActionCollection.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        var result = [];
        if (processActions) {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var action = _a[_i];
                result.push.apply(result, action.getAllInputs());
            }
        }
        return result;
    };
    ActionCollection.prototype.getResourceInformation = function () {
        var result = [];
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var action = _a[_i];
            result.push.apply(result, action.getResourceInformation());
        }
        return result;
    };
    Object.defineProperty(ActionCollection.prototype, "renderedActionCount", {
        get: function () {
            return this._renderedActions.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionCollection.prototype, "expandedAction", {
        get: function () {
            return this._expandedAction;
        },
        enumerable: false,
        configurable: true
    });
    return ActionCollection;
}());
var ActionSet = /** @class */ (function (_super) {
    __extends(ActionSet, _super);
    function ActionSet() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ActionSet.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._actionCollection.parse(source["actions"], context);
    };
    ActionSet.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        this._actionCollection.toJSON(target, "actions", context);
    };
    ActionSet.prototype.internalRender = function () {
        return this._actionCollection.render(this.orientation !== undefined
            ? this.orientation
            : this.hostConfig.actions.actionsOrientation);
    };
    ActionSet.prototype.releaseDOMResources = function () {
        _super.prototype.releaseDOMResources.call(this);
        this._actionCollection.releaseDOMResources();
    };
    ActionSet.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount === 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.getActionCount() === 1) {
                return (this._actionCollection.expandedAction !== undefined &&
                    !this.hostConfig.actions.preExpandSingleShowCardAction);
            }
            else {
                return this._actionCollection.expandedAction !== undefined;
            }
        }
    };
    ActionSet.prototype.getJsonTypeName = function () {
        return "ActionSet";
    };
    ActionSet.prototype.getActionCount = function () {
        return this._actionCollection.getActionCount();
    };
    ActionSet.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.getActionAt(index);
        }
        else {
            return _super.prototype.getActionAt.call(this, index);
        }
    };
    ActionSet.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ActionSet.prototype.getAllActions = function () {
        var result = _super.prototype.getAllActions.call(this);
        for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action) {
                result.push(action);
            }
        }
        return result;
    };
    ActionSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this._actionCollection.validateProperties(context);
    };
    ActionSet.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ActionSet.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        return processActions ? this._actionCollection.getAllInputs() : [];
    };
    ActionSet.prototype.getResourceInformation = function () {
        return this._actionCollection.getResourceInformation();
    };
    /**
     * @inheritdoc
     */
    ActionSet.prototype.findDOMNodeOwner = function (node) {
        var target = undefined;
        for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action) {
                // recur through each Action
                target = action.findDOMNodeOwner(node);
                if (target) {
                    return target;
                }
            }
        }
        // if not found in any Action, defer to parent implementation
        return _super.prototype.findDOMNodeOwner.call(this, node);
    };
    ActionSet.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            result = this.getElementByIdFromAction(id);
        }
        return result;
    };
    Object.defineProperty(ActionSet.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    ActionSet.orientationProperty = new serialization.EnumProperty(serialization.Versions.v1_1, "orientation", enums.Orientation);
    __decorate([
        (0, serialization.property)(ActionSet.orientationProperty)
    ], ActionSet.prototype, "orientation", void 0);
    return ActionSet;
}(CardElement));
exports.ActionSet = ActionSet;
var ContainerStyleProperty = /** @class */ (function (_super) {
    __extends(ContainerStyleProperty, _super);
    function ContainerStyleProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, [
            { value: enums.ContainerStyle.Default },
            { value: enums.ContainerStyle.Emphasis },
            { targetVersion: serialization.Versions.v1_2, value: enums.ContainerStyle.Accent },
            { targetVersion: serialization.Versions.v1_2, value: enums.ContainerStyle.Good },
            { targetVersion: serialization.Versions.v1_2, value: enums.ContainerStyle.Attention },
            { targetVersion: serialization.Versions.v1_2, value: enums.ContainerStyle.Warning }
        ], defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    return ContainerStyleProperty;
}(serialization.ValueSetProperty));
exports.ContainerStyleProperty = ContainerStyleProperty;
var StylableCardElementContainer = /** @class */ (function (_super) {
    __extends(StylableCardElementContainer, _super);
    function StylableCardElementContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StylableCardElementContainer.prototype, "style", {
        get: function () {
            if (this.allowCustomStyle) {
                var style = this.getValue(StylableCardElementContainer.styleProperty);
                if (style && this.hostConfig.containerStyles.getStyleByName(style)) {
                    return style;
                }
            }
            return undefined;
        },
        set: function (value) {
            this.setValue(StylableCardElementContainer.styleProperty, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "allowCustomStyle", {
        //#endregion
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "hasExplicitStyle", {
        get: function () {
            return this.getValue(StylableCardElementContainer.styleProperty) !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    StylableCardElementContainer.prototype.applyBorder = function () {
        // No border in base implementation
    };
    StylableCardElementContainer.prototype.applyBackground = function () {
        if (this.renderedElement) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (styleDefinition.backgroundColor) {
                var bgColor = utils.stringToCssColor(styleDefinition.backgroundColor);
                if (bgColor) {
                    this.renderedElement.style.backgroundColor = bgColor;
                }
            }
        }
    };
    StylableCardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new shared.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        if (this.isBleeding()) {
            // Bleed into the first parent that does have padding
            var padding = new shared.PaddingDefinition();
            this.getImmediateSurroundingPadding(padding);
            var surroundingPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
            this.renderedElement.style.marginRight = "-" + surroundingPadding.right + "px";
            this.renderedElement.style.marginLeft = "-" + surroundingPadding.left + "px";
            if (!this.isDesignMode()) {
                this.renderedElement.style.marginTop = "-" + surroundingPadding.top + "px";
                this.renderedElement.style.marginBottom = "-" + surroundingPadding.bottom + "px";
            }
            if (this.separatorElement &&
                this.separatorOrientation === enums.Orientation.Horizontal) {
                this.separatorElement.style.marginLeft = "-" + surroundingPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + surroundingPadding.right + "px";
            }
        }
        else {
            this.renderedElement.style.marginRight = "0";
            this.renderedElement.style.marginLeft = "0";
            this.renderedElement.style.marginTop = "0";
            this.renderedElement.style.marginBottom = "0";
            if (this.separatorElement &&
                this.separatorOrientation === enums.Orientation.Horizontal) {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    StylableCardElementContainer.prototype.getHasBackground = function (ignoreBackgroundImages) {
        if (ignoreBackgroundImages === void 0) { ignoreBackgroundImages = false; }
        var currentElement = this.parent;
        while (currentElement) {
            var currentElementHasBackgroundImage = false;
            if (ignoreBackgroundImages) {
                currentElementHasBackgroundImage = false;
            }
            else {
                currentElementHasBackgroundImage =
                    currentElement instanceof Container
                        ? currentElement.backgroundImage.isValid()
                        : false;
            }
            if (currentElement instanceof StylableCardElementContainer) {
                if (this.hasExplicitStyle &&
                    (currentElement.getEffectiveStyle() !== this.getEffectiveStyle() ||
                        currentElementHasBackgroundImage)) {
                    return true;
                }
            }
            currentElement = currentElement.parent;
        }
        return false;
    };
    StylableCardElementContainer.prototype.getDefaultPadding = function () {
        return this.getHasBackground() || this.getHasBorder()
            ? new shared.PaddingDefinition(enums.Spacing.Padding, enums.Spacing.Padding, enums.Spacing.Padding, enums.Spacing.Padding)
            : _super.prototype.getDefaultPadding.call(this);
    };
    StylableCardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        var explicitStyle = this.getValue(StylableCardElementContainer.styleProperty);
        if (explicitStyle !== undefined) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(explicitStyle);
            if (!styleDefinition) {
                context.addFailure(this, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidPropertyValue(explicitStyle, "style"));
            }
        }
    };
    StylableCardElementContainer.prototype.render = function () {
        var renderedElement = _super.prototype.render.call(this);
        if (renderedElement && this.getHasBackground()) {
            this.applyBackground();
        }
        this.applyBorder();
        return renderedElement;
    };
    StylableCardElementContainer.prototype.getEffectiveStyle = function () {
        var effectiveStyle = this.style;
        return effectiveStyle ? effectiveStyle : _super.prototype.getEffectiveStyle.call(this);
    };
    //#region Schema
    StylableCardElementContainer.styleProperty = new ContainerStyleProperty(serialization.Versions.v1_0, "style");
    __decorate([
        (0, serialization.property)(StylableCardElementContainer.styleProperty)
    ], StylableCardElementContainer.prototype, "style", null);
    return StylableCardElementContainer;
}(CardElementContainer));
exports.StylableCardElementContainer = StylableCardElementContainer;
var ContainerBase = /** @class */ (function (_super) {
    __extends(ContainerBase, _super);
    function ContainerBase() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bleed = false;
        return _this;
    }
    //#endregion
    ContainerBase.prototype.adjustRenderedElementSize = function (renderedElement) {
        _super.prototype.adjustRenderedElementSize.call(this, renderedElement);
        if (this.minPixelHeight) {
            renderedElement.style.minHeight = this.minPixelHeight + "px";
        }
    };
    ContainerBase.prototype.getHasExpandedAction = function () {
        return false;
    };
    ContainerBase.prototype.getBleed = function () {
        return this._bleed;
    };
    ContainerBase.prototype.setBleed = function (value) {
        this._bleed = value;
    };
    Object.defineProperty(ContainerBase.prototype, "renderedActionCount", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    ContainerBase.prototype.isBleeding = function () {
        return (this.getHasBackground() || this.hostConfig.alwaysAllowBleed) && this.getBleed();
    };
    ContainerBase.bleedProperty = new serialization.BoolProperty(serialization.Versions.v1_2, "bleed", false);
    ContainerBase.minHeightProperty = new serialization.PixelSizeProperty(serialization.Versions.v1_2, "minHeight");
    __decorate([
        (0, serialization.property)(ContainerBase.bleedProperty)
    ], ContainerBase.prototype, "_bleed", void 0);
    __decorate([
        (0, serialization.property)(ContainerBase.minHeightProperty)
    ], ContainerBase.prototype, "minPixelHeight", void 0);
    return ContainerBase;
}(StylableCardElementContainer));
exports.ContainerBase = ContainerBase;
var BackgroundImage = /** @class */ (function (_super) {
    __extends(BackgroundImage, _super);
    function BackgroundImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    BackgroundImage.prototype.getSchemaKey = function () {
        return "BackgroundImage";
    };
    BackgroundImage.prototype.internalParse = function (source, context) {
        if (typeof source === "string") {
            this.resetDefaultValues();
            this.url = source;
        }
        else {
            return _super.prototype.internalParse.call(this, source, context);
        }
    };
    BackgroundImage.prototype.apply = function (element) {
        if (this.url && element.renderedElement) {
            element.renderedElement.style.backgroundImage =
                "url('" +
                    element.preProcessPropertyValue(BackgroundImage.urlProperty, this.url) +
                    "')";
            switch (this.fillMode) {
                case enums.FillMode.Repeat:
                    element.renderedElement.style.backgroundRepeat = "repeat";
                    break;
                case enums.FillMode.RepeatHorizontally:
                    element.renderedElement.style.backgroundRepeat = "repeat-x";
                    break;
                case enums.FillMode.RepeatVertically:
                    element.renderedElement.style.backgroundRepeat = "repeat-y";
                    break;
                case enums.FillMode.Cover:
                default:
                    element.renderedElement.style.backgroundRepeat = "no-repeat";
                    element.renderedElement.style.backgroundSize = "cover";
                    break;
            }
            switch (this.horizontalAlignment) {
                case enums.HorizontalAlignment.Left:
                    break;
                case enums.HorizontalAlignment.Center:
                    element.renderedElement.style.backgroundPositionX = "center";
                    break;
                case enums.HorizontalAlignment.Right:
                    element.renderedElement.style.backgroundPositionX = "right";
                    break;
            }
            switch (this.verticalAlignment) {
                case enums.VerticalAlignment.Top:
                    break;
                case enums.VerticalAlignment.Center:
                    element.renderedElement.style.backgroundPositionY = "center";
                    break;
                case enums.VerticalAlignment.Bottom:
                    element.renderedElement.style.backgroundPositionY = "bottom";
                    break;
            }
        }
    };
    BackgroundImage.prototype.isValid = function () {
        return this.url ? true : false;
    };
    //#region Schema
    BackgroundImage.urlProperty = new serialization.StringProperty(serialization.Versions.v1_0, "url");
    BackgroundImage.fillModeProperty = new serialization.EnumProperty(serialization.Versions.v1_2, "fillMode", enums.FillMode, enums.FillMode.Cover);
    BackgroundImage.horizontalAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_2, "horizontalAlignment", enums.HorizontalAlignment, enums.HorizontalAlignment.Left);
    BackgroundImage.verticalAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_2, "verticalAlignment", enums.VerticalAlignment, enums.VerticalAlignment.Top);
    __decorate([
        (0, serialization.property)(BackgroundImage.urlProperty)
    ], BackgroundImage.prototype, "url", void 0);
    __decorate([
        (0, serialization.property)(BackgroundImage.fillModeProperty)
    ], BackgroundImage.prototype, "fillMode", void 0);
    __decorate([
        (0, serialization.property)(BackgroundImage.horizontalAlignmentProperty)
    ], BackgroundImage.prototype, "horizontalAlignment", void 0);
    __decorate([
        (0, serialization.property)(BackgroundImage.verticalAlignmentProperty)
    ], BackgroundImage.prototype, "verticalAlignment", void 0);
    return BackgroundImage;
}(serialization.SerializableObject));
exports.BackgroundImage = BackgroundImage;
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //#endregion
        _this._items = [];
        _this._renderedItems = [];
        return _this;
    }
    Object.defineProperty(Container.prototype, "backgroundImage", {
        get: function () {
            return this.getValue(Container.backgroundImageProperty);
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.insertItemAt = function (item, index, forceInsert) {
        if (!item.parent || forceInsert) {
            if (item.isStandalone) {
                if (index < 0 || index >= this._items.length) {
                    this._items.push(item);
                }
                else {
                    this._items.splice(index, 0, item);
                }
                item.setParent(this);
            }
            else {
                throw new Error(strings.Strings.errors.elementTypeNotStandalone(item.getJsonTypeName()));
            }
        }
        else {
            throw new Error(strings.Strings.errors.elementAlreadyParented());
        }
    };
    Container.prototype.getItemsCollectionPropertyName = function () {
        return "items";
    };
    Container.prototype.applyBackground = function () {
        if (this.backgroundImage.isValid() && this.renderedElement) {
            this.backgroundImage.apply(this);
        }
        _super.prototype.applyBackground.call(this);
    };
    Container.prototype.applyRTL = function (element) {
        if (this.rtl !== undefined) {
            element.dir = this.rtl ? "rtl" : "ltr";
        }
    };
    Container.prototype.internalRender = function () {
        this._renderedItems = [];
        // Cache hostConfig to avoid walking the parent hierarchy several times
        var hostConfig = this.hostConfig;
        var element = document.createElement("div");
        this.applyRTL(element);
        element.classList.add(hostConfig.makeCssClassName("ac-container"));
        element.style.display = "flex";
        element.style.flexDirection = "column";
        if (shared.GlobalSettings.useAdvancedCardBottomTruncation) {
            // Forces the container to be at least as tall as its content.
            //
            // Fixes a quirk in Chrome where, for nested flex elements, the
            // inner element's height would never exceed the outer element's
            // height. This caused overflow truncation to break -- containers
            // would always be measured as not overflowing, since their heights
            // were constrained by their parents as opposed to truly reflecting
            // the height of their content.
            //
            // See the "Browser Rendering Notes" section of this answer:
            // https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
            element.style.minHeight = "-webkit-min-content";
        }
        switch (this.getEffectiveVerticalContentAlignment()) {
            case enums.VerticalAlignment.Center:
                element.style.justifyContent = "center";
                break;
            case enums.VerticalAlignment.Bottom:
                element.style.justifyContent = "flex-end";
                break;
            default:
                element.style.justifyContent = "flex-start";
                break;
        }
        if (this._items.length > 0) {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                var renderedItem = this.isElementAllowed(item) ? item.render() : undefined;
                if (renderedItem) {
                    if (this._renderedItems.length > 0 && item.separatorElement) {
                        item.separatorElement.style.flex = "0 0 auto";
                        utils.appendChild(element, item.separatorElement);
                    }
                    utils.appendChild(element, renderedItem);
                    this._renderedItems.push(item);
                }
            }
        }
        else {
            if (this.isDesignMode()) {
                var placeholderElement = this.createPlaceholderElement();
                placeholderElement.style.width = "100%";
                placeholderElement.style.height = "100%";
                element.appendChild(placeholderElement);
            }
        }
        return element;
    };
    Container.prototype.truncateOverflow = function (maxHeight) {
        if (this.renderedElement) {
            // Add 1 to account for rounding differences between browsers
            var boundary_1 = this.renderedElement.offsetTop + maxHeight + 1;
            var handleElement_1 = function (cardElement) {
                var elt = cardElement.renderedElement;
                if (elt) {
                    switch (utils.getFitStatus(elt, boundary_1)) {
                        case enums.ContainerFitStatus.FullyInContainer:
                            var sizeChanged = cardElement["resetOverflow"]();
                            // If the element's size changed after resetting content,
                            // we have to check if it still fits fully in the card
                            if (sizeChanged) {
                                handleElement_1(cardElement);
                            }
                            break;
                        case enums.ContainerFitStatus.Overflowing:
                            var containerMaxHeight = boundary_1 - elt.offsetTop;
                            cardElement["handleOverflow"](containerMaxHeight);
                            break;
                        case enums.ContainerFitStatus.FullyOutOfContainer:
                            cardElement["handleOverflow"](0);
                            break;
                    }
                }
            };
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                handleElement_1(item);
            }
            return true;
        }
        return false;
    };
    Container.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item["resetOverflow"]();
        }
    };
    Container.prototype.getHasBackground = function (ignoreBackgroundImages) {
        if (ignoreBackgroundImages === void 0) { ignoreBackgroundImages = false; }
        var result = ignoreBackgroundImages ? false : this.backgroundImage.isValid();
        return result || _super.prototype.getHasBackground.call(this, ignoreBackgroundImages);
    };
    Container.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this.clear();
        this.setShouldFallback(false);
        var jsonItems = source[this.getItemsCollectionPropertyName()];
        if (Array.isArray(jsonItems)) {
            for (var _i = 0, jsonItems_1 = jsonItems; _i < jsonItems_1.length; _i++) {
                var item = jsonItems_1[_i];
                var element = context.parseElement(this, item, this.forbiddenChildElements(), !this.isDesignMode());
                if (element) {
                    this.insertItemAt(element, -1, true);
                }
            }
        }
    };
    Container.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        var collectionPropertyName = this.getItemsCollectionPropertyName();
        context.serializeArray(target, collectionPropertyName, this._items);
    };
    Object.defineProperty(Container.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.getEffectivePadding = function () {
        if (shared.GlobalSettings.removePaddingFromContainersWithBackgroundImage &&
            !this.getHasBackground(true)) {
            return new shared.PaddingDefinition();
        }
        return _super.prototype.getEffectivePadding.call(this);
    };
    Container.prototype.getEffectiveVerticalContentAlignment = function () {
        if (this.verticalContentAlignment !== undefined) {
            return this.verticalContentAlignment;
        }
        var parentContainer = this.getParentContainer();
        return parentContainer
            ? parentContainer.getEffectiveVerticalContentAlignment()
            : enums.VerticalAlignment.Top;
    };
    Container.prototype.getItemCount = function () {
        return this._items.length;
    };
    Container.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    Container.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var _i = 0, _a = this._renderedItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isVisible) {
                    return item;
                }
            }
        }
        return undefined;
    };
    Container.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var i = this._renderedItems.length - 1; i >= 0; i--) {
                if (this._renderedItems[i].isVisible) {
                    return this._renderedItems[i];
                }
            }
        }
        return undefined;
    };
    Container.prototype.getJsonTypeName = function () {
        return "Container";
    };
    Container.prototype.isFirstElement = function (element) {
        var designMode = this.isDesignMode();
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isVisible || designMode) {
                return item === element;
            }
        }
        return false;
    };
    Container.prototype.isLastElement = function (element) {
        var designMode = this.isDesignMode();
        for (var i = this._items.length - 1; i >= 0; i--) {
            if (this._items[i].isVisible || designMode) {
                return this._items[i] === element;
            }
        }
        return false;
    };
    Container.prototype.isRtl = function () {
        if (this.rtl !== undefined) {
            return this.rtl;
        }
        else {
            var parentContainer = this.getParentContainer();
            return parentContainer ? parentContainer.isRtl() : false;
        }
    };
    Container.prototype.isBleedingAtTop = function () {
        var firstRenderedItem = this.getFirstVisibleRenderedItem();
        return (this.isBleeding() || (firstRenderedItem ? firstRenderedItem.isBleedingAtTop() : false));
    };
    Container.prototype.isBleedingAtBottom = function () {
        var lastRenderedItem = this.getLastVisibleRenderedItem();
        return (this.isBleeding() ||
            (lastRenderedItem
                ? lastRenderedItem.isBleedingAtBottom() &&
                    lastRenderedItem.getEffectiveStyle() === this.getEffectiveStyle()
                : false));
    };
    Container.prototype.indexOf = function (cardElement) {
        return this._items.indexOf(cardElement);
    };
    Container.prototype.addItem = function (item) {
        this.insertItemAt(item, -1, false);
    };
    Container.prototype.insertItemBefore = function (item, insertBefore) {
        this.insertItemAt(item, this._items.indexOf(insertBefore), false);
    };
    Container.prototype.insertItemAfter = function (item, insertAfter) {
        this.insertItemAt(item, this._items.indexOf(insertAfter) + 1, false);
    };
    Container.prototype.removeItem = function (item) {
        var itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(undefined);
            this.updateLayout();
            return true;
        }
        return false;
    };
    Container.prototype.clear = function () {
        this._items = [];
        this._renderedItems = [];
    };
    Container.prototype.getResourceInformation = function () {
        var result = _super.prototype.getResourceInformation.call(this);
        if (this.backgroundImage.isValid()) {
            result.push({
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- validated by `isValid()`
                url: this.backgroundImage.url,
                mimeType: "image"
            });
        }
        return result;
    };
    Container.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            if (this.selectAction) {
                result = this.selectAction.getActionById(id);
            }
            if (!result) {
                for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result = item.getActionById(id);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    };
    Object.defineProperty(Container.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    Container.backgroundImageProperty = new serialization.SerializableObjectProperty(serialization.Versions.v1_0, "backgroundImage", BackgroundImage);
    Container.verticalContentAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_1, "verticalContentAlignment", enums.VerticalAlignment);
    Container.rtlProperty = new serialization.BoolProperty(serialization.Versions.v1_0, "rtl");
    __decorate([
        (0, serialization.property)(Container.backgroundImageProperty)
    ], Container.prototype, "backgroundImage", null);
    __decorate([
        (0, serialization.property)(Container.verticalContentAlignmentProperty)
    ], Container.prototype, "verticalContentAlignment", void 0);
    __decorate([
        (0, serialization.property)(Container.rtlProperty)
    ], Container.prototype, "rtl", void 0);
    return Container;
}(ContainerBase));
exports.Container = Container;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(width) {
        if (width === void 0) { width = "stretch"; }
        var _this = _super.call(this) || this;
        _this.width = "stretch";
        //#endregion
        _this._computedWeight = 0;
        _this.width = width;
        return _this;
    }
    Column.prototype.adjustRenderedElementSize = function (renderedElement) {
        var minDesignTimeColumnHeight = 20;
        if (this.isDesignMode()) {
            renderedElement.style.minWidth = "20px";
            renderedElement.style.minHeight =
                (!this.minPixelHeight
                    ? minDesignTimeColumnHeight
                    : Math.max(this.minPixelHeight, minDesignTimeColumnHeight)) + "px";
        }
        else {
            renderedElement.style.minWidth = "0";
            if (this.minPixelHeight) {
                renderedElement.style.minHeight = this.minPixelHeight + "px";
            }
        }
        if (this.width === "auto") {
            renderedElement.style.flex = "0 1 auto";
        }
        else if (this.width === "stretch") {
            renderedElement.style.flex = "1 1 50px";
        }
        else if (this.width instanceof shared.SizeAndUnit) {
            if (this.width.unit === enums.SizeUnit.Pixel) {
                renderedElement.style.flex = "0 0 auto";
                renderedElement.style.width = this.width.physicalSize + "px";
            }
            else {
                renderedElement.style.flex =
                    "1 1 " +
                        (this._computedWeight > 0 ? this._computedWeight : this.width.physicalSize) +
                        "%";
            }
        }
    };
    Column.prototype.shouldSerialize = function (_context) {
        return true;
    };
    Object.defineProperty(Column.prototype, "separatorOrientation", {
        get: function () {
            return enums.Orientation.Vertical;
        },
        enumerable: false,
        configurable: true
    });
    Column.prototype.getJsonTypeName = function () {
        return "Column";
    };
    Object.defineProperty(Column.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.parent instanceof ColumnSet) {
                return this.separatorElement !== undefined && !this.parent.isLeftMostElement(this);
            }
            else {
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    Column.widthProperty = new serialization.CustomProperty(serialization.Versions.v1_0, "width", function (sender, prop, source, context) {
        var result = prop.defaultValue;
        var value = source[prop.name];
        var invalidWidth = false;
        if (typeof value === "number" && !isNaN(value)) {
            result = new shared.SizeAndUnit(value, enums.SizeUnit.Weight);
        }
        else if (value === "auto" || value === "stretch") {
            result = value;
        }
        else if (typeof value === "string") {
            try {
                result = shared.SizeAndUnit.parse(value);
                if (result.unit === enums.SizeUnit.Pixel &&
                    prop.targetVersion.compareTo(context.targetVersion) > 0) {
                    invalidWidth = true;
                }
            }
            catch (e) {
                invalidWidth = true;
            }
        }
        else {
            invalidWidth = true;
        }
        if (invalidWidth) {
            context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidColumnWidth(value));
            result = "auto";
        }
        return result;
    }, function (sender, property, target, value, context) {
        if (value instanceof shared.SizeAndUnit) {
            if (value.unit === enums.SizeUnit.Pixel) {
                context.serializeValue(target, "width", value.physicalSize + "px");
            }
            else {
                context.serializeNumber(target, "width", value.physicalSize);
            }
        }
        else {
            context.serializeValue(target, "width", value);
        }
    }, "stretch");
    __decorate([
        (0, serialization.property)(Column.widthProperty)
    ], Column.prototype, "width", void 0);
    return Column;
}(Container));
exports.Column = Column;
var ColumnSet = /** @class */ (function (_super) {
    __extends(ColumnSet, _super);
    function ColumnSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        return _this;
    }
    ColumnSet.prototype.createColumnInstance = function (source, context) {
        return context.parseCardObject(this, source, [], !this.isDesignMode(), function (typeName) {
            return !typeName || typeName === "Column" ? new Column() : undefined;
        }, function (typeName, _errorType) {
            context.logParseEvent(undefined, enums.ValidationEvent.ElementTypeNotAllowed, strings.Strings.errors.elementTypeNotAllowed(typeName));
        });
    };
    ColumnSet.prototype.internalRender = function () {
        this._renderedColumns = [];
        if (this._columns.length > 0) {
            // Cache hostConfig to avoid walking the parent hierarchy several times
            var hostConfig = this.hostConfig;
            var element = document.createElement("div");
            element.className = hostConfig.makeCssClassName("ac-columnSet");
            element.style.display = "flex";
            if (shared.GlobalSettings.useAdvancedCardBottomTruncation) {
                // See comment in Container.internalRender()
                element.style.minHeight = "-webkit-min-content";
            }
            switch (this.getEffectiveHorizontalAlignment()) {
                case enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var totalWeight = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.width instanceof shared.SizeAndUnit &&
                    column.width.unit === enums.SizeUnit.Weight) {
                    totalWeight += column.width.physicalSize;
                }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
                var column = _c[_b];
                if (column.width instanceof shared.SizeAndUnit &&
                    column.width.unit === enums.SizeUnit.Weight &&
                    totalWeight > 0) {
                    var computedWeight = (100 / totalWeight) * column.width.physicalSize;
                    // Best way to emulate "internal" access I know of
                    column["_computedWeight"] = computedWeight;
                }
                var renderedColumn = column.render();
                if (renderedColumn) {
                    if (this._renderedColumns.length > 0 && column.separatorElement) {
                        column.separatorElement.style.flex = "0 0 auto";
                        utils.appendChild(element, column.separatorElement);
                    }
                    utils.appendChild(element, renderedColumn);
                    this._renderedColumns.push(column);
                }
            }
            return this._renderedColumns.length > 0 ? element : undefined;
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.truncateOverflow = function (maxHeight) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column["handleOverflow"](maxHeight);
        }
        return true;
    };
    ColumnSet.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column["resetOverflow"]();
        }
    };
    Object.defineProperty(ColumnSet.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    ColumnSet.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._columns = [];
        this._renderedColumns = [];
        var jsonColumns = source["columns"];
        if (Array.isArray(jsonColumns)) {
            for (var _i = 0, jsonColumns_1 = jsonColumns; _i < jsonColumns_1.length; _i++) {
                var item = jsonColumns_1[_i];
                var column = this.createColumnInstance(item, context);
                if (column) {
                    this._columns.push(column);
                }
            }
        }
    };
    ColumnSet.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, "columns", this._columns);
    };
    ColumnSet.prototype.isFirstElement = function (element) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.isVisible) {
                return column === element;
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtTop = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtTop()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtBottom = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtBottom()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.getItemCount = function () {
        return this._columns.length;
    };
    ColumnSet.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[0];
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[this._renderedColumns.length - 1];
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.getColumnAt = function (index) {
        return this._columns[index];
    };
    ColumnSet.prototype.getItemAt = function (index) {
        return this.getColumnAt(index);
    };
    ColumnSet.prototype.getJsonTypeName = function () {
        return "ColumnSet";
    };
    ColumnSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        var weightedColumns = 0;
        var stretchedColumns = 0;
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (typeof column.width === "number") {
                weightedColumns++;
            }
            else if (column.width === "stretch") {
                stretchedColumns++;
            }
        }
        if (weightedColumns > 0 && stretchedColumns > 0) {
            context.addFailure(this, enums.ValidationEvent.Hint, strings.Strings.hints.dontUseWeightedAndStrecthedColumnsInSameSet());
        }
    };
    ColumnSet.prototype.addColumn = function (column) {
        if (!column.parent) {
            this._columns.push(column);
            column.setParent(this);
        }
        else {
            throw new Error(strings.Strings.errors.columnAlreadyBelongsToAnotherSet());
        }
    };
    ColumnSet.prototype.removeItem = function (item) {
        if (item instanceof Column) {
            var itemIndex = this._columns.indexOf(item);
            if (itemIndex >= 0) {
                this._columns.splice(itemIndex, 1);
                item.setParent(undefined);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ColumnSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Column ? this._columns.indexOf(cardElement) : -1;
    };
    ColumnSet.prototype.isLeftMostElement = function (element) {
        return this._columns.indexOf(element) === 0;
    };
    ColumnSet.prototype.isRightMostElement = function (element) {
        return this._columns.indexOf(element) === this._columns.length - 1;
    };
    ColumnSet.prototype.isTopElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.isBottomElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.getActionById = function (id) {
        var result = undefined;
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            result = column.getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    Object.defineProperty(ColumnSet.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
        },
        enumerable: false,
        configurable: true
    });
    return ColumnSet;
}(ContainerBase));
exports.ColumnSet = ColumnSet;
function raiseImageLoadedEvent(image) {
    var card = image.getRootElement();
    var onImageLoadedHandler = card && card.onImageLoaded ? card.onImageLoaded : AdaptiveCard.onImageLoaded;
    if (onImageLoadedHandler) {
        onImageLoadedHandler(image);
    }
}
function raiseAnchorClickedEvent(element, anchor, ev) {
    var card = element.getRootElement();
    var onAnchorClickedHandler = card && card.onAnchorClicked ? card.onAnchorClicked : AdaptiveCard.onAnchorClicked;
    return onAnchorClickedHandler !== undefined
        ? onAnchorClickedHandler(element, anchor, ev)
        : false;
}
function raiseExecuteActionEvent(action) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onExecuteActionHandler = card && card.onExecuteAction ? card.onExecuteAction : AdaptiveCard.onExecuteAction;
    if (action.prepareForExecution() && onExecuteActionHandler) {
        onExecuteActionHandler(action);
    }
}
function raiseInlineCardExpandedEvent(action, isExpanded) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onInlineCardExpandedHandler = card && card.onInlineCardExpanded
        ? card.onInlineCardExpanded
        : AdaptiveCard.onInlineCardExpanded;
    if (onInlineCardExpandedHandler) {
        onInlineCardExpandedHandler(action, isExpanded);
    }
}
function raiseInputValueChangedEvent(input) {
    var card = input.getRootElement();
    var onInputValueChangedHandler = card && card.onInputValueChanged
        ? card.onInputValueChanged
        : AdaptiveCard.onInputValueChanged;
    if (onInputValueChangedHandler) {
        onInputValueChangedHandler(input);
    }
}
function raiseElementVisibilityChangedEvent(element, shouldUpdateLayout) {
    if (shouldUpdateLayout === void 0) { shouldUpdateLayout = true; }
    var rootElement = element.getRootElement();
    if (shouldUpdateLayout) {
        rootElement.updateLayout();
    }
    var card = rootElement;
    var onElementVisibilityChangedHandler = card && card.onElementVisibilityChanged
        ? card.onElementVisibilityChanged
        : AdaptiveCard.onElementVisibilityChanged;
    if (onElementVisibilityChangedHandler !== undefined) {
        onElementVisibilityChangedHandler(element);
    }
}
function updateInputAdornersVisibility(input, hide) {
    if (!!hide) {
        // hides the time/date picker icon
        input.readOnly = true;
        // hides the cross button icon
        input.required = true;
    }
    else {
        // shows the time/date picker icon
        input.readOnly = false;
        // shows the cross button icon
        input.required = false;
    }
}
function shouldHideInputAdornersForRevealOnHover(input, eventType) {
    // show/hide input adorners (date picker, time picker, select dropdown picker) with inputStyle RevealOnHover
    // 1. intial render of card: hide input adorners
    // 2. mouse hover on the card: show input adorners
    // 3. mouse hover outside the card: hide input adorners unless input is still in focus state
    // 4. input loses focus: hide the input adorners unless mouse is still hovering on the card
    // check if input still has the focus
    var isInputInFocus = input === document.activeElement;
    // check if mouse is still on the card
    var isMouseOverCard = input.classList.contains("ac-inputStyle-revealOnHover-onhover");
    var hideInputAdorners = (eventType === InputEventType.InitialRender) ||
        (eventType === InputEventType.FocusLeave && !isMouseOverCard) ||
        (eventType === InputEventType.MouseLeaveOnCard && !isInputInFocus);
    return hideInputAdorners;
}
/**
 * @returns return false to continue with default context menu; return true to skip SDK default context menu
 */
function raiseDisplayOverflowActionMenuEvent(action, target) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onDisplayOverflowActionMenuHandler = card && card.onDisplayOverflowActionMenu
        ? card.onDisplayOverflowActionMenu
        : AdaptiveCard.onDisplayOverflowActionMenu;
    return onDisplayOverflowActionMenuHandler !== undefined
        ? onDisplayOverflowActionMenuHandler(action.getActions(), target)
        : false;
}
/**
 * @returns return false to continue with default action button; return true to skip SDK default action button
 */
function raiseRenderOverflowActionsEvent(action, isAtRootLevelActions) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onRenderOverflowActionsHandler = card && card.onRenderOverflowActions
        ? card.onRenderOverflowActions
        : AdaptiveCard.onRenderOverflowActions;
    return onRenderOverflowActionsHandler !== undefined
        ? onRenderOverflowActionsHandler(action.getActions(), isAtRootLevelActions)
        : false;
}
var ContainerWithActions = /** @class */ (function (_super) {
    __extends(ContainerWithActions, _super);
    function ContainerWithActions() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ContainerWithActions.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this.parseActions(source, context);
    };
    ContainerWithActions.prototype.parseActions = function (source, context) {
        this._actionCollection.parse(source["actions"], context);
    };
    ContainerWithActions.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        this._actionCollection.toJSON(target, "actions", context);
    };
    ContainerWithActions.prototype.internalRender = function () {
        var element = _super.prototype.internalRender.call(this);
        if (element) {
            var renderedActions = this._actionCollection.render(this.hostConfig.actions.actionsOrientation);
            if (renderedActions) {
                utils.appendChild(element, renderSeparation(this.hostConfig, {
                    spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing)
                }, enums.Orientation.Horizontal));
                utils.appendChild(element, renderedActions);
            }
            if (this.renderIfEmpty) {
                return element;
            }
            else {
                return element.children.length > 0 ? element : undefined;
            }
        }
        else {
            return undefined;
        }
    };
    ContainerWithActions.prototype.getHasExpandedAction = function () {
        if (this.renderedActionCount === 0) {
            return false;
        }
        else if (this.renderedActionCount === 1) {
            return (this._actionCollection.expandedAction !== undefined &&
                !this.hostConfig.actions.preExpandSingleShowCardAction);
        }
        else {
            return this._actionCollection.expandedAction !== undefined;
        }
    };
    Object.defineProperty(ContainerWithActions.prototype, "renderedActionCount", {
        get: function () {
            return this._actionCollection.renderedActionCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerWithActions.prototype, "renderIfEmpty", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    ContainerWithActions.prototype.releaseDOMResources = function () {
        _super.prototype.releaseDOMResources.call(this);
        this._actionCollection.releaseDOMResources();
    };
    ContainerWithActions.prototype.getActionCount = function () {
        return this._actionCollection.getActionCount();
    };
    ContainerWithActions.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.getActionAt(index);
        }
        else {
            return _super.prototype.getActionAt.call(this, index);
        }
    };
    ContainerWithActions.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ContainerWithActions.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this._actionCollection) {
            this._actionCollection.validateProperties(context);
        }
    };
    ContainerWithActions.prototype.isLastElement = function (element) {
        return _super.prototype.isLastElement.call(this, element) && this._actionCollection.getActionCount() === 0;
    };
    ContainerWithActions.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ContainerWithActions.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._actionCollection.clear();
    };
    ContainerWithActions.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        var result = _super.prototype.getAllInputs.call(this, processActions);
        if (processActions) {
            result.push.apply(result, this._actionCollection.getAllInputs(processActions));
        }
        return result;
    };
    ContainerWithActions.prototype.getResourceInformation = function () {
        var result = _super.prototype.getResourceInformation.call(this);
        result.push.apply(result, this._actionCollection.getResourceInformation());
        return result;
    };
    ContainerWithActions.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount === 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.getActionCount() === 1) {
                return (this._actionCollection.expandedAction !== undefined &&
                    !this.hostConfig.actions.preExpandSingleShowCardAction);
            }
            else {
                return this._actionCollection.expandedAction !== undefined;
            }
        }
    };
    ContainerWithActions.prototype.getForbiddenActionNames = function () {
        return [];
    };
    ContainerWithActions.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            result = this.getElementByIdFromAction(id);
        }
        return result;
    };
    Object.defineProperty(ContainerWithActions.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerWithActions;
}(Container));
exports.ContainerWithActions = ContainerWithActions;
var RefreshActionProperty = /** @class */ (function (_super) {
    __extends(RefreshActionProperty, _super);
    function RefreshActionProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, undefined) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    RefreshActionProperty.prototype.parse = function (sender, source, context) {
        var action = context.parseAction(sender.parent, source[this.name], [], false);
        if (action !== undefined) {
            if (action instanceof ExecuteAction) {
                return action;
            }
            context.logParseEvent(sender, enums.ValidationEvent.ActionTypeNotAllowed, strings.Strings.errors.actionTypeNotAllowed(action.getJsonTypeName()));
        }
        context.logParseEvent(sender, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.propertyMustBeSet("action"));
        return undefined;
    };
    RefreshActionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value ? value.toJSON(context) : undefined, undefined, true);
    };
    return RefreshActionProperty;
}(serialization.PropertyDefinition));
exports.RefreshActionProperty = RefreshActionProperty;
var RefreshDefinition = /** @class */ (function (_super) {
    __extends(RefreshDefinition, _super);
    function RefreshDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RefreshDefinition.prototype, "action", {
        get: function () {
            return this.getValue(RefreshDefinition.actionProperty);
        },
        set: function (value) {
            this.setValue(RefreshDefinition.actionProperty, value);
            if (value) {
                value.setParent(this.parent);
            }
        },
        enumerable: false,
        configurable: true
    });
    RefreshDefinition.prototype.getSchemaKey = function () {
        return "RefreshDefinition";
    };
    //#region Schema
    RefreshDefinition.actionProperty = new RefreshActionProperty(serialization.Versions.v1_4, "action");
    RefreshDefinition.userIdsProperty = new serialization.StringArrayProperty(serialization.Versions.v1_4, "userIds");
    __decorate([
        (0, serialization.property)(RefreshDefinition.actionProperty)
    ], RefreshDefinition.prototype, "action", null);
    __decorate([
        (0, serialization.property)(RefreshDefinition.userIdsProperty)
    ], RefreshDefinition.prototype, "userIds", void 0);
    return RefreshDefinition;
}(serialization.SerializableObject));
exports.RefreshDefinition = RefreshDefinition;
var AuthCardButton = /** @class */ (function (_super) {
    __extends(AuthCardButton, _super);
    function AuthCardButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthCardButton.prototype.getSchemaKey = function () {
        return "AuthCardButton";
    };
    //#region Schema
    AuthCardButton.typeProperty = new serialization.StringProperty(serialization.Versions.v1_4, "type");
    AuthCardButton.titleProperty = new serialization.StringProperty(serialization.Versions.v1_4, "title");
    AuthCardButton.imageProperty = new serialization.StringProperty(serialization.Versions.v1_4, "image");
    AuthCardButton.valueProperty = new serialization.StringProperty(serialization.Versions.v1_4, "value");
    __decorate([
        (0, serialization.property)(AuthCardButton.typeProperty)
    ], AuthCardButton.prototype, "type", void 0);
    __decorate([
        (0, serialization.property)(AuthCardButton.titleProperty)
    ], AuthCardButton.prototype, "title", void 0);
    __decorate([
        (0, serialization.property)(AuthCardButton.imageProperty)
    ], AuthCardButton.prototype, "image", void 0);
    __decorate([
        (0, serialization.property)(AuthCardButton.valueProperty)
    ], AuthCardButton.prototype, "value", void 0);
    return AuthCardButton;
}(serialization.SerializableObject));
exports.AuthCardButton = AuthCardButton;
var TokenExchangeResource = /** @class */ (function (_super) {
    __extends(TokenExchangeResource, _super);
    function TokenExchangeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TokenExchangeResource.prototype.getSchemaKey = function () {
        return "TokenExchangeResource";
    };
    //#region Schema
    TokenExchangeResource.idProperty = new serialization.StringProperty(serialization.Versions.v1_4, "id");
    TokenExchangeResource.uriProperty = new serialization.StringProperty(serialization.Versions.v1_4, "uri");
    TokenExchangeResource.providerIdProperty = new serialization.StringProperty(serialization.Versions.v1_4, "providerId");
    __decorate([
        (0, serialization.property)(TokenExchangeResource.idProperty)
    ], TokenExchangeResource.prototype, "id", void 0);
    __decorate([
        (0, serialization.property)(TokenExchangeResource.uriProperty)
    ], TokenExchangeResource.prototype, "uri", void 0);
    __decorate([
        (0, serialization.property)(TokenExchangeResource.providerIdProperty)
    ], TokenExchangeResource.prototype, "providerId", void 0);
    return TokenExchangeResource;
}(serialization.SerializableObject));
exports.TokenExchangeResource = TokenExchangeResource;
var Authentication = /** @class */ (function (_super) {
    __extends(Authentication, _super);
    function Authentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Authentication.prototype.getSchemaKey = function () {
        return "Authentication";
    };
    //#region Schema
    Authentication.textProperty = new serialization.StringProperty(serialization.Versions.v1_4, "text");
    Authentication.connectionNameProperty = new serialization.StringProperty(serialization.Versions.v1_4, "connectionName");
    Authentication.buttonsProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_4, "buttons", AuthCardButton);
    Authentication.tokenExchangeResourceProperty = new serialization.SerializableObjectProperty(serialization.Versions.v1_4, "tokenExchangeResource", TokenExchangeResource, true);
    __decorate([
        (0, serialization.property)(Authentication.textProperty)
    ], Authentication.prototype, "text", void 0);
    __decorate([
        (0, serialization.property)(Authentication.connectionNameProperty)
    ], Authentication.prototype, "connectionName", void 0);
    __decorate([
        (0, serialization.property)(Authentication.buttonsProperty)
    ], Authentication.prototype, "buttons", void 0);
    __decorate([
        (0, serialization.property)(Authentication.tokenExchangeResourceProperty)
    ], Authentication.prototype, "tokenExchangeResource", void 0);
    return Authentication;
}(serialization.SerializableObject));
exports.Authentication = Authentication;
// @dynamic
var AdaptiveCard = /** @class */ (function (_super) {
    __extends(AdaptiveCard, _super);
    function AdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designMode = false;
        return _this;
    }
    Object.defineProperty(AdaptiveCard.prototype, "refresh", {
        get: function () {
            return this.getValue(AdaptiveCard.refreshProperty);
        },
        set: function (value) {
            this.setValue(AdaptiveCard.refreshProperty, value);
            if (value) {
                value.parent = this;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard, "processMarkdown", {
        get: function () {
            throw new Error(strings.Strings.errors.processMarkdownEventRemoved());
        },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        set: function (_value) {
            throw new Error(strings.Strings.errors.processMarkdownEventRemoved());
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveCard.applyMarkdown = function (text) {
        var result = {
            didProcess: false
        };
        if (AdaptiveCard.onProcessMarkdown) {
            AdaptiveCard.onProcessMarkdown(text, result);
        }
        else if (window.markdownit) {
            // Check for markdownit
            var markdownIt = window.markdownit;
            result.outputHtml = markdownIt().render(text);
            result.didProcess = true;
        }
        else if (!AdaptiveCard._haveWarnedAboutNoMarkdownProcessing) {
            // eslint-disable-next-line no-console
            console.warn(strings.Strings.errors.markdownProcessingNotEnabled);
            AdaptiveCard._haveWarnedAboutNoMarkdownProcessing = true;
        }
        return result;
    };
    AdaptiveCard.prototype.isVersionSupported = function () {
        if (this.bypassVersionCheck) {
            return true;
        }
        else {
            var unsupportedVersion = !this.version ||
                !this.version.isValid ||
                this.maxVersion.major < this.version.major ||
                (this.maxVersion.major === this.version.major &&
                    this.maxVersion.minor < this.version.minor);
            return !unsupportedVersion;
        }
    };
    AdaptiveCard.prototype.getDefaultSerializationContext = function () {
        return new SerializationContext(this.version);
    };
    AdaptiveCard.prototype.getItemsCollectionPropertyName = function () {
        return "body";
    };
    AdaptiveCard.prototype.internalParse = function (source, context) {
        this._fallbackCard = undefined;
        var fallbackElement = context.parseElement(undefined, source["fallback"], this.forbiddenChildElements(), !this.isDesignMode());
        if (fallbackElement) {
            this._fallbackCard = new AdaptiveCard();
            this._fallbackCard.addItem(fallbackElement);
        }
        _super.prototype.internalParse.call(this, source, context);
    };
    AdaptiveCard.prototype.internalToJSON = function (target, context) {
        this.setValue(AdaptiveCard.versionProperty, context.targetVersion);
        _super.prototype.internalToJSON.call(this, target, context);
    };
    AdaptiveCard.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (shared.GlobalSettings.useAdvancedCardBottomTruncation && renderedElement) {
            // Unlike containers, the root card element should be allowed to
            // be shorter than its content (otherwise the overflow truncation
            // logic would never get triggered)
            renderedElement.style.removeProperty("minHeight");
        }
        return renderedElement;
    };
    AdaptiveCard.prototype.getHasBackground = function (ignoreBackgroundImages) {
        return true;
    };
    AdaptiveCard.prototype.getDefaultPadding = function () {
        return new shared.PaddingDefinition(enums.Spacing.Padding, enums.Spacing.Padding, enums.Spacing.Padding, enums.Spacing.Padding);
    };
    AdaptiveCard.prototype.shouldSerialize = function (_context) {
        return true;
    };
    Object.defineProperty(AdaptiveCard.prototype, "renderIfEmpty", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomStyle", {
        get: function () {
            return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "hasBackground", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveCard.prototype.getJsonTypeName = function () {
        return "AdaptiveCard";
    };
    AdaptiveCard.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this.getValue(CardElement.typeNameProperty) !== "AdaptiveCard") {
            context.addFailure(this, enums.ValidationEvent.MissingCardType, strings.Strings.errors.invalidCardType());
        }
        if (!this.bypassVersionCheck && !this.version) {
            context.addFailure(this, enums.ValidationEvent.PropertyCantBeNull, strings.Strings.errors.propertyMustBeSet("version"));
        }
        else if (!this.isVersionSupported()) {
            context.addFailure(this, enums.ValidationEvent.UnsupportedCardVersion, strings.Strings.errors.unsupportedCardVersion(this.version.toString(), this.maxVersion.toString()));
        }
    };
    AdaptiveCard.prototype.render = function (target) {
        var _this = this;
        var renderedCard;
        if (this.shouldFallback() && this._fallbackCard) {
            this._fallbackCard.hostConfig = this.hostConfig;
            renderedCard = this._fallbackCard.render();
        }
        else {
            renderedCard = _super.prototype.render.call(this);
            if (renderedCard) {
                renderedCard.classList.add(this.hostConfig.makeCssClassName("ac-adaptiveCard"));
                // Having a tabIndex on the root container for a card can mess up accessibility in some scenarios.
                // However, we've shipped this behavior before, and so can't just turn it off in a point release. For
                // now, to unblock accessibility scenarios for our customers, we've got an option to turn it off. In a
                // future release, we should strongly consider flipping the default such that we *don't* emit a tabIndex
                // by default.
                if (shared.GlobalSettings.setTabIndexAtCardRoot) {
                    renderedCard.tabIndex = 0;
                }
                if (this.speak) {
                    renderedCard.setAttribute("aria-label", this.speak);
                }
                renderedCard.onmouseenter = function (ev) {
                    _this.updateInputsVisualState(true /* hover */);
                };
                renderedCard.onmouseleave = function (ev) {
                    _this.updateInputsVisualState(false /* hover */);
                };
                this.getRootElement().updateActionsEnabledState();
            }
        }
        if (target) {
            utils.appendChild(target, renderedCard);
            this.updateLayout();
        }
        return renderedCard;
    };
    AdaptiveCard.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (shared.GlobalSettings.useAdvancedCardBottomTruncation && this.isDisplayed()) {
            var padding = this.hostConfig.getEffectiveSpacing(enums.Spacing.Default);
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            this["handleOverflow"](this.renderedElement.offsetHeight - padding);
        }
    };
    AdaptiveCard.prototype.shouldFallback = function () {
        return _super.prototype.shouldFallback.call(this) || !this.isVersionSupported();
    };
    Object.defineProperty(AdaptiveCard.prototype, "hasVisibleSeparator", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveCard.schemaUrl = "http://adaptivecards.io/schemas/adaptive-card.json";
    //#region Schema
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdaptiveCard.$schemaProperty = new serialization.CustomProperty(serialization.Versions.v1_0, "$schema", function (sender, property, source, context) {
        return AdaptiveCard.schemaUrl;
    }, function (sender, prop, target, value, context) {
        context.serializeValue(target, prop.name, AdaptiveCard.schemaUrl);
    });
    AdaptiveCard.versionProperty = new serialization.CustomProperty(serialization.Versions.v1_0, "version", function (sender, prop, source, context) {
        var version = serialization.Version.parse(source[prop.name], context);
        if (version === undefined) {
            version = serialization.Versions.latest;
            context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidCardVersion(version.toString()));
        }
        return version;
    }, function (sender, prop, target, value, context) {
        if (value !== undefined) {
            context.serializeValue(target, prop.name, value.toString());
        }
    }, serialization.Versions.v1_0);
    AdaptiveCard.fallbackTextProperty = new serialization.StringProperty(serialization.Versions.v1_0, "fallbackText");
    AdaptiveCard.speakProperty = new serialization.StringProperty(serialization.Versions.v1_0, "speak");
    AdaptiveCard.refreshProperty = new serialization.SerializableObjectProperty(serialization.Versions.v1_4, "refresh", RefreshDefinition, true);
    AdaptiveCard.authenticationProperty = new serialization.SerializableObjectProperty(serialization.Versions.v1_4, "authentication", Authentication, true);
    //#endregion
    AdaptiveCard._haveWarnedAboutNoMarkdownProcessing = false;
    __decorate([
        (0, serialization.property)(AdaptiveCard.versionProperty)
    ], AdaptiveCard.prototype, "version", void 0);
    __decorate([
        (0, serialization.property)(AdaptiveCard.fallbackTextProperty)
    ], AdaptiveCard.prototype, "fallbackText", void 0);
    __decorate([
        (0, serialization.property)(AdaptiveCard.speakProperty)
    ], AdaptiveCard.prototype, "speak", void 0);
    __decorate([
        (0, serialization.property)(AdaptiveCard.refreshProperty)
    ], AdaptiveCard.prototype, "refresh", null);
    __decorate([
        (0, serialization.property)(AdaptiveCard.authenticationProperty)
    ], AdaptiveCard.prototype, "authentication", void 0);
    return AdaptiveCard;
}(ContainerWithActions));
exports.AdaptiveCard = AdaptiveCard;
var InlineAdaptiveCard = /** @class */ (function (_super) {
    __extends(InlineAdaptiveCard, _super);
    function InlineAdaptiveCard() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suppressStyle = false;
        return _this;
    }
    InlineAdaptiveCard.prototype.getSchemaKey = function () {
        return "InlineAdaptiveCard";
    };
    InlineAdaptiveCard.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.remove(AdaptiveCard.$schemaProperty, AdaptiveCard.versionProperty);
    };
    //#endregion
    InlineAdaptiveCard.prototype.getDefaultPadding = function () {
        return new shared.PaddingDefinition(this.suppressStyle ? enums.Spacing.None : enums.Spacing.Padding, enums.Spacing.Padding, this.suppressStyle ? enums.Spacing.None : enums.Spacing.Padding, enums.Spacing.Padding);
    };
    Object.defineProperty(InlineAdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultStyle", {
        get: function () {
            if (this.suppressStyle) {
                return enums.ContainerStyle.Default;
            }
            else {
                return this.hostConfig.actions.showCard.style
                    ? this.hostConfig.actions.showCard.style
                    : enums.ContainerStyle.Emphasis;
            }
        },
        enumerable: false,
        configurable: true
    });
    InlineAdaptiveCard.prototype.render = function (target) {
        var renderedCard = _super.prototype.render.call(this, target);
        if (renderedCard) {
            renderedCard.setAttribute("aria-live", "polite");
            renderedCard.removeAttribute("tabindex");
        }
        return renderedCard;
    };
    return InlineAdaptiveCard;
}(AdaptiveCard));
var SerializationContext = /** @class */ (function (_super) {
    __extends(SerializationContext, _super);
    function SerializationContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._forbiddenTypes = new Set();
        return _this;
    }
    SerializationContext.prototype.internalParseCardObject = function (parent, source, forbiddenTypes, allowFallback, createInstanceCallback, logParseEvent) {
        var _this = this;
        var result = undefined;
        if (source && typeof source === "object") {
            var oldForbiddenTypes_1 = new Set();
            this._forbiddenTypes.forEach(function (type) {
                oldForbiddenTypes_1.add(type);
            });
            forbiddenTypes.forEach(function (type) {
                _this._forbiddenTypes.add(type);
            });
            var typeName = utils.parseString(source["type"]);
            if (typeName && this._forbiddenTypes.has(typeName)) {
                logParseEvent(typeName, enums.TypeErrorType.ForbiddenType);
            }
            else {
                var tryToFallback = false;
                result = createInstanceCallback(typeName);
                if (!result) {
                    tryToFallback = shared.GlobalSettings.enableFallback && allowFallback;
                    logParseEvent(typeName, enums.TypeErrorType.UnknownType);
                }
                else {
                    result.setParent(parent);
                    result.parse(source, this);
                    tryToFallback =
                        shared.GlobalSettings.enableFallback && allowFallback && result.shouldFallback();
                }
                if (tryToFallback) {
                    var fallback = source["fallback"];
                    if (!fallback && parent) {
                        parent.setShouldFallback(true);
                    }
                    if (typeof fallback === "string" && fallback.toLowerCase() === "drop") {
                        result = undefined;
                    }
                    else if (typeof fallback === "object") {
                        result = this.internalParseCardObject(parent, fallback, forbiddenTypes, true, createInstanceCallback, logParseEvent);
                    }
                }
            }
            this._forbiddenTypes = oldForbiddenTypes_1;
        }
        return result;
    };
    SerializationContext.prototype.cardObjectParsed = function (o, source) {
        if (o instanceof Action && this.onParseAction) {
            this.onParseAction(o, source, this);
        }
        else if (o instanceof CardElement && this.onParseElement) {
            this.onParseElement(o, source, this);
        }
    };
    SerializationContext.prototype.shouldSerialize = function (o) {
        if (o instanceof Action) {
            return this.actionRegistry.findByName(o.getJsonTypeName()) !== undefined;
        }
        else if (o instanceof CardElement) {
            return this.elementRegistry.findByName(o.getJsonTypeName()) !== undefined;
        }
        else {
            return true;
        }
    };
    SerializationContext.prototype.parseCardObject = function (parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent) {
        var forbiddenTypes = new Set(forbiddenTypeNames);
        var result = this.internalParseCardObject(parent, source, forbiddenTypes, allowFallback, createInstanceCallback, logParseEvent);
        if (result !== undefined) {
            this.cardObjectParsed(result, source);
        }
        return result;
    };
    SerializationContext.prototype.parseElement = function (parent, source, forbiddenTypes, allowFallback) {
        var _this = this;
        return this.parseCardObject(parent, source, forbiddenTypes, allowFallback, function (typeName) {
            return _this.elementRegistry.createInstance(typeName, _this.targetVersion);
        }, function (typeName, errorType) {
            if (errorType === enums.TypeErrorType.UnknownType) {
                _this.logParseEvent(undefined, enums.ValidationEvent.UnknownElementType, strings.Strings.errors.unknownElementType(typeName));
            }
            else {
                _this.logParseEvent(undefined, enums.ValidationEvent.ElementTypeNotAllowed, strings.Strings.errors.elementTypeNotAllowed(typeName));
            }
        });
    };
    SerializationContext.prototype.parseAction = function (parent, source, forbiddenActionTypes, allowFallback) {
        var _this = this;
        return this.parseCardObject(parent, source, forbiddenActionTypes, allowFallback, function (typeName) {
            return _this.actionRegistry.createInstance(typeName, _this.targetVersion);
        }, function (typeName, errorType) {
            if (errorType === enums.TypeErrorType.UnknownType) {
                _this.logParseEvent(undefined, enums.ValidationEvent.UnknownActionType, strings.Strings.errors.unknownActionType(typeName));
            }
            else {
                _this.logParseEvent(undefined, enums.ValidationEvent.ActionTypeNotAllowed, strings.Strings.errors.actionTypeNotAllowed(typeName));
            }
        });
    };
    Object.defineProperty(SerializationContext.prototype, "elementRegistry", {
        get: function () {
            var _a;
            return (_a = this._elementRegistry) !== null && _a !== void 0 ? _a : registry.GlobalRegistry.elements;
        },
        enumerable: false,
        configurable: true
    });
    // Not using a property setter here because the setter should accept "undefined"
    // whereas the getter should never return undefined.
    SerializationContext.prototype.setElementRegistry = function (value) {
        this._elementRegistry = value;
    };
    Object.defineProperty(SerializationContext.prototype, "actionRegistry", {
        get: function () {
            var _a;
            return (_a = this._actionRegistry) !== null && _a !== void 0 ? _a : registry.GlobalRegistry.actions;
        },
        enumerable: false,
        configurable: true
    });
    // Not using a property setter here because the setter should accept "undefined"
    // whereas the getter should never return undefined.
    SerializationContext.prototype.setActionRegistry = function (value) {
        this._actionRegistry = value;
    };
    return SerializationContext;
}(serialization.BaseSerializationContext));
exports.SerializationContext = SerializationContext;
registry.GlobalRegistry.defaultElements.register("Container", Container);
registry.GlobalRegistry.defaultElements.register("TextBlock", TextBlock);
registry.GlobalRegistry.defaultElements.register("RichTextBlock", RichTextBlock, serialization.Versions.v1_2);
registry.GlobalRegistry.defaultElements.register("TextRun", TextRun, serialization.Versions.v1_2);
registry.GlobalRegistry.defaultElements.register("Image", Image);
registry.GlobalRegistry.defaultElements.register("ImageSet", ImageSet);
registry.GlobalRegistry.defaultElements.register("Media", Media, serialization.Versions.v1_1);
registry.GlobalRegistry.defaultElements.register("FactSet", FactSet);
registry.GlobalRegistry.defaultElements.register("ColumnSet", ColumnSet);
registry.GlobalRegistry.defaultElements.register("ActionSet", ActionSet, serialization.Versions.v1_2);
registry.GlobalRegistry.defaultElements.register("Input.Text", TextInput);
registry.GlobalRegistry.defaultElements.register("Input.Date", DateInput);
registry.GlobalRegistry.defaultElements.register("Input.Time", TimeInput);
registry.GlobalRegistry.defaultElements.register("Input.Number", NumberInput);
registry.GlobalRegistry.defaultElements.register("Input.ChoiceSet", ChoiceSetInput);
registry.GlobalRegistry.defaultElements.register("Input.Toggle", ToggleInput);
registry.GlobalRegistry.defaultActions.register(OpenUrlAction.JsonTypeName, OpenUrlAction);
registry.GlobalRegistry.defaultActions.register(SubmitAction.JsonTypeName, SubmitAction);
registry.GlobalRegistry.defaultActions.register(ShowCardAction.JsonTypeName, ShowCardAction);
registry.GlobalRegistry.defaultActions.register(ToggleVisibilityAction.JsonTypeName, ToggleVisibilityAction, serialization.Versions.v1_2);
registry.GlobalRegistry.defaultActions.register(ExecuteAction.JsonTypeName, ExecuteAction, serialization.Versions.v1_4);
//# sourceMappingURL=card-elements.js.map
});

/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject$1(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend$1(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject$1(src[key]) &&
            isObject$1(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend$1(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend$1(win, ssrWindow);
    return win;
}

/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */

/* eslint-disable no-proto */
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get() {
      return proto;
    },

    set(value) {
      proto.__proto__ = value;
    }

  });
}

class Dom7 extends Array {
  constructor(items) {
    if (typeof items === 'number') {
      super(items);
    } else {
      super(...(items || []));
      makeReactive(this);
    }
  }

}

function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

// eslint-disable-next-line

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  const a = [];
  const res = context.querySelectorAll(selector);

  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  const window = getWindow();
  const document = getDocument();
  let arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    const html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      let toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

// eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}

function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}

function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}

function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition$1(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
  }

  return this;
}

function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = $(target).parents(); // eslint-disable-line

      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  const events = eventType.split(' ');
  let j;

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  const events = eventType.split(' ');

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function trigger(...args) {
  const window = getWindow();
  const events = args[0].split(' ');
  const eventData = args[1];

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];

      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd$1(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    const window = getWindow();
    const document = getDocument();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function styles() {
  const window = getWindow();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  const window = getWindow();
  let i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach((el, index) => {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  const window = getWindow();
  const document = getDocument();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  let child = this[0];
  let i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    const returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append(...els) {
  let newChild;
  const document = getDocument();

  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];

    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function prepend(newChild) {
  const document = getDocument();
  let i;
  let j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    const el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);

    el = prev;
  }

  return $(prevEls);
}

function parent(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line

    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }

      parent = parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  let closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  const foundElements = [];

  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);

    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  const children = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

const Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  transform,
  transition: transition$1,
  on,
  off,
  trigger,
  transitionEnd: transitionEnd$1,
  outerWidth,
  outerHeight,
  styles,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove
};
Object.keys(Methods).forEach(methodName => {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle$1(el) {
  const window = getWindow();
  let style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis = 'x') {
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];

  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';

  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  const animate = () => {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}

let support;

function calcSupport() {
  const window = getWindow();
  const document = getDocument();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }

        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}

let deviceCached;

function calcDevice({
  userAgent
} = {}) {
  const support = getSupport();
  const window = getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel'; // iPadOs 13 fix

  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}

let browser;

function calcBrowser() {
  const window = getWindow();

  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}

function Resize({
  swiper,
  on,
  emit
}) {
  const window = getWindow();
  let observer = null;
  let animationFrame = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });

        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = getWindow();

  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  const init = () => {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();

      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */
const eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },

  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;

    function onceHandler(...args) {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },

  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },

  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },

  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }

  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.$el.removeClass(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || $([])).each(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = $(swiper.visibleSlides);
}

function updateProgress(translate) {
  const swiper = this;

  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = $(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

const update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

const translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit(`transition${step}`);

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }

    swiper.emit(`slideChangeTransition${step}`);

    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

const transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex]; // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  } // Update progress


  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}

function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

const slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate() {
  const swiper = this;
  const document = getDocument();
  const {
    params,
    $wrapperEl
  } = swiper; // Remove duplicated slides

  const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }

      slides = $selector.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index) => {
    const slide = $(el);
    slide.attr('data-swiper-slide-index', index);
  });

  for (let i = 0; i < swiper.loopedSlides; i += 1) {
    const index = i - Math.floor(i / slides.length) * slides.length;
    appendSlides.push(slides.eq(index)[0]);
    prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
  }

  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

const loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  const swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

const grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);

    if (!found && !el.getRootNode) {
      return null;
    }

    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = getDocument();
  const window = getWindow();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = $(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''; // eslint-disable-next-line

  const eventPath = event.composedPath ? event.composedPath() : event.path;

  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    $targetEl = $(eventPath[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;

    if ($targetEl.is(data.focusableElements)) {
      preventDefault = false;

      if ($targetEl[0].nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }

    if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }

  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    if (!$(e.target).is(data.focusableElements)) {
      swiper.allowClick = false;
    }

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  let rewindFirstIndex = null;
  let rewindLastIndex = null;

  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
  const document = getDocument();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }
};

function attachEvents() {
  const swiper = this;
  const document = getDocument();
  const {
    params,
    support
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}

const events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }

    swiper.emitContainerClasses();
  } // Toggle navigation, pagination, scrollbar


  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }

    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }

    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];

    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

const breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

  const suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(' '));
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

const classes = {
  addClasses,
  removeClasses
};

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window = getWindow();
  let image;

  function onReady() {
    if (callback) callback();
  }

  const isPicture = $(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

const images = {
  loadImage,
  preloadImages
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

const checkOverflow$1 = {
  checkOverflow
};

const defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: true,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      extend(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      extend(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images
};
const extendedDefaults = {};

class Swiper {
  constructor(...args) {
    let el;
    let params;

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }

    if (!params) params = {};
    params = extend({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && $(params.el).length > 1) {
      const swipers = [];
      $(params.el).each(containerEl => {
        const newParams = extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      }); // eslint-disable-next-line no-constructor-return

      return swipers;
    } // Swiper Instance


    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];

    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }

    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

    swiper.params = extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend({}, swiper.params);
    swiper.passedParams = extend({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = $; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },

      isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance
    // eslint-disable-next-line no-constructor-return


    return swiper;
  }

  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  }

  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  }

  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }

  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }

  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.each(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }

  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;

      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      }
    }

    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    let translated;

    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }

  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;

    if (swiper.rtl) {
      swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }

    swiper.update();
  }

  mount(el) {
    const swiper = this;
    if (swiper.mounted) return true; // Find el

    const $el = $(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };

    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = options => $el.children(options);

        return res;
      }

      if (!$el.children) {
        return $($el).children(getWrapperSelector());
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    let $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document = getDocument();
      const wrapper = document.createElement('div');
      $wrapperEl = $(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
        $wrapperEl.append(slideEl);
      });
    }

    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  }

  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      deleteProps(swiper);
    }

    swiper.destroyed = true;
    return null;
  }

  static extendDefaults(newDefaults) {
    extend(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }

  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  }

}

Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

function Virtual({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };

  function renderSlide(slide, index) {
    const params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  }

  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;

    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }

    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }

      emit('virtualUpdate');
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }

      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];

          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }

      return;
    }

    const prependIndexes = [];
    const appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }

    appendIndexes.forEach(index => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach(index => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  }

  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    update(true);
  }

  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const $cachedEl = cache[cachedIndex];
        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }

  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    update(true);
    swiper.slideTo(activeIndex, 0);
  }

  function removeAllSlides() {
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    update(true);
    swiper.slideTo(0, 0);
  }

  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    swiper.virtual.slides = swiper.params.virtual.slides;
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;

    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}

/* eslint-disable consistent-return */
function Keyboard({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = getDocument();
  const window = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });

  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }

      const $el = swiper.$el;
      const swiperWidth = $el[0].clientWidth;
      const swiperHeight = $el[0].clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    emit('keyPress', kc);
    return undefined;
  }

  function enable() {
    if (swiper.keyboard.enabled) return;
    $(document).on('keydown', handle);
    swiper.keyboard.enabled = true;
  }

  function disable() {
    if (!swiper.keyboard.enabled) return;
    $(document).off('keydown', handle);
    swiper.keyboard.enabled = false;
  }

  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

/* eslint-disable consistent-return */
function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];

  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY

    let pX = 0;
    let pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }

  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }

  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }

  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  }

  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  }

  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    const params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = $(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;

          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);

          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = nextTick(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }

  function events(method) {
    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = $(swiper.params.mousewheel.eventsTarget);
    }

    target[method]('mouseenter', handleMouseEnter);
    target[method]('mouseleave', handleMouseLeave);
    target[method]('wheel', handle);
  }

  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }

    if (swiper.mousewheel.enabled) return false;
    events('on');
    swiper.mousewheel.enabled = true;
    return true;
  }

  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }

    if (!swiper.mousewheel.enabled) return false;
    events('off');
    swiper.mousewheel.enabled = false;
    return true;
  }

  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }

    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }

    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = getDocument();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}

function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    let $el;

    if (el) {
      $el = $(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }

  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
    init();
    update();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
    destroy();
  };

  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}

function classesToSelector(classes = '') {
  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;

  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }

  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }

  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el; // Current/Total

    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;

      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }

        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

      if ($el.length > 1) {
        bullets.each(bullet => {
          const $bullet = $(bullet);
          const bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }

            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, 'prev');
            }

            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, 'next');
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);

          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          } else {
            setSideBullets($firstDisplayedBullet, 'prev');
            setSideBullets($lastDisplayedBullet, 'next');
          }
        }
      }

      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }

    if (params.type === 'fraction') {
      $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      let progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit('paginationRender', $el[0]);
    } else {
      emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  }

  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = '';

    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      emit('paginationRender', swiper.pagination.$el[0]);
    }
  }

  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let $el = $(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

      if ($el.length > 1) {
        $el = $el.filter(el => {
          if ($(el).parents('.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);
    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = $(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', classesToSelector(params.bulletClass));
    }
  }

  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on('slidesLengthChange', () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on('snapGridLengthChange', () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.pagination;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;

    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }

      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
    }

    init();
    render();
    update();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}

function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };

  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }

    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  }

  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  }

  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  }

  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    emit('scrollbarDragStart', e);
  }

  function onDragMove(e) {
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit('scrollbarDragMove', e);
  }

  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }

  function events(method) {
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params,
      support
    } = swiper;
    const $el = scrollbar.$el;
    if (!$el) return;
    const target = $el[0];
    const activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

    if (!support.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }

  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }

  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }

  function init() {
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let $el = $(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

    if ($dragEl.length === 0) {
      $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Object.assign(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.scrollbar;
    const $el = swiper.scrollbar.$el;

    if ($el) {
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }

    disableDraggable();
  }

  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.scrollbar;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    init();
    updateSize();
    setTranslate();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}

function Parallax({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    parallax: {
      enabled: false
    }
  });

  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const $el = $(el);
    const rtlFactor = rtl ? -1 : 1;
    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }

    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  };

  const setTranslate = () => {
    const {
      $el,
      slides,
      progress,
      snapGrid
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
      setTransform(el, progress);
    });
    slides.each((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
        setTransform(el, slideProgress);
      });
    });
  };

  const setTransition = (duration = swiper.params.speed) => {
    const {
      $el
    } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
      const $parallaxEl = $(parallaxEl);
      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  };

  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}

function Zoom({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let gesturesEnabled;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const gesture = {
    $slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    $imageEl: undefined,
    $imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },

    set(value) {
      if (scale !== value) {
        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
        emit('zoomChange', value, imageEl, slideEl);
      }

      scale = value;
    }

  });

  function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  } // Events


  function onGestureStart(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    isScaling = true;
  }

  function onGestureChange(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }

    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function onGestureEnd(e) {
    const device = swiper.device;
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      fakeGestureTouched = false;
      fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  }

  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  }

  function onTouchMove(e) {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    } // Define if we need image drag


    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTransitionEnd() {
    const zoom = swiper.zoom;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  }

  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
      }

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }

    zoom.scale = 1;
    currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  } // Toggle Zoom


  function zoomToggle(e) {
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }

  function getListeners() {
    const support = swiper.support;
    const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  function getSlideSelector() {
    return `.${swiper.params.slideClass}`;
  }

  function toggleGestures(method) {
    const {
      passiveListener
    } = getListeners();
    const slideSelector = getSlideSelector();
    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
  }

  function enableGestures() {
    if (gesturesEnabled) return;
    gesturesEnabled = true;
    toggleGestures('on');
  }

  function disableGestures() {
    if (!gesturesEnabled) return;
    gesturesEnabled = false;
    toggleGestures('off');
  } // Attach/Detach Events


  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const support = swiper.support;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    const support = swiper.support;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

function Lazy({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  });
  swiper.lazy = {};
  let scrollHandlerAttached = false;
  let initialImageLoaded = false;

  function loadInSlide(index, loadInDuplicate = true) {
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(imageEl => {
      const $imageEl = $(imageEl);
      $imageEl.addClass(params.loadingClass);
      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');
      const $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(sourceEl => {
              const $source = $(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();

        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            loadInSlide(duplicatedSlide.index(), false);
          }
        }

        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  }

  function load() {
    const {
      $wrapperEl,
      params: swiperParams,
      slides,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;
    let slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return $(slideEl).attr('data-swiper-slide-index');
      }

      return $(slideEl).index();
    }

    if (!initialImageLoaded) initialImageLoaded = true;

    if (swiper.params.watchSlidesProgress) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
        const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
        loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) loadInSlide(i);
      }
    } else {
      loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        const amount = params.loadPrevNextAmount;
        const spv = Math.ceil(slidesPerView);
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (let i = activeIndex + spv; i < maxIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        } // Prev Slides


        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
      }
    }
  }

  function checkInViewOnLoad() {
    const window = getWindow();
    if (!swiper || swiper.destroyed) return;
    const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
    const isWindow = $scrollElement[0] === window;
    const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    const swiperOffset = swiper.$el.offset();
    const {
      rtlTranslate: rtl
    } = swiper;
    let inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (let i = 0; i < swiperCoord.length; i += 1) {
      const point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (inView) {
      load();
      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
    } else if (!scrollHandlerAttached) {
      scrollHandlerAttached = true;
      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
    }
  }

  on('beforeInit', () => {
    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
      swiper.params.preloadImages = false;
    }
  });
  on('init', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('scroll', () => {
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
      load();
    }
  });
  on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('transitionStart', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    }
  });
  on('transitionEnd', () => {
    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('slideChange', () => {
    const {
      lazy,
      cssMode,
      watchSlidesProgress,
      touchReleaseOnEdges,
      resistanceRatio
    } = swiper.params;

    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
      load();
    }
  });
  on('destroy', () => {
    if (!swiper.$el) return;
    swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
  });
  Object.assign(swiper.lazy, {
    load,
    loadInSlide
  });
}

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  });
  swiper.controller = {
    control: undefined
  };

  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  } // xxx: for now i will just save one spline function to to


  function getInterpolateFunction(c) {
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  }

  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }

  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }

  function removeSpline() {
    if (!swiper.controller.control) return;

    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }

  on('beforeInit', () => {
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}

function A11y({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;

  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  }

  function getRandomNumber(size = 16) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);

    return 'x'.repeat(size).replace(/x/g, randomChar);
  }

  function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
  }

  function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
  }

  function addElRole($el, role) {
    $el.attr('role', role);
  }

  function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
  }

  function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
  }

  function addElLabel($el, label) {
    $el.attr('aria-label', label);
  }

  function addElId($el, id) {
    $el.attr('id', id);
  }

  function addElLive($el, live) {
    $el.attr('aria-live', live);
  }

  function disableEl($el) {
    $el.attr('aria-disabled', true);
  }

  function enableEl($el) {
    $el.attr('aria-disabled', false);
  }

  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const $targetEl = $(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  }

  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        disableEl($prevEl);
        makeElNotFocusable($prevEl);
      } else {
        enableEl($prevEl);
        makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        disableEl($nextEl);
        makeElNotFocusable($nextEl);
      } else {
        enableEl($nextEl);
        makeElFocusable($nextEl);
      }
    }
  }

  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }

  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }

  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.each(bulletEl => {
      const $bulletEl = $(bulletEl);

      if (swiper.params.pagination.clickable) {
        makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          addElRole($bulletEl, 'button');
          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      }

      if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
        $bulletEl.attr('aria-current', 'true');
      } else {
        $bulletEl.removeAttr('aria-current');
      }
    });
  }

  const initNavEl = ($el, wrapperId, message) => {
    makeElFocusable($el);

    if ($el[0].tagName !== 'BUTTON') {
      addElRole($el, 'button');
      $el.on('keydown', onEnterOrSpaceKey);
    }

    addElLabel($el, message);
    addElControls($el, wrapperId);
  };

  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };

  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };

  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;

    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }

    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };

  const initSlides = () => {
    const params = swiper.params.a11y;

    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
    }

    if (params.slideRole) {
      addElRole($(swiper.slides), params.slideRole);
    }

    const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;

    if (params.slideLabelMessage) {
      swiper.slides.each((slideEl, index) => {
        const $slideEl = $(slideEl);
        const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel($slideEl, ariaLabelMessage);
      });
    }
  };

  const init = () => {
    const params = swiper.params.a11y;
    swiper.$el.append(liveRegion); // Container

    const $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    const $wrapperEl = swiper.$wrapperEl;
    const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId($wrapperEl, wrapperId);
    addElLive($wrapperEl, live); // Slide

    initSlides(); // Navigation

    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      initNavEl($nextEl, wrapperId, params.nextSlideMessage);
    }

    if ($prevEl && $prevEl.length) {
      initNavEl($prevEl, wrapperId, params.prevSlideMessage);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.on('focus', handleFocus, true);
    swiper.$el.on('pointerdown', handlePointerDown, true);
    swiper.$el.on('pointerup', handlePointerUp, true);
  };

  function destroy() {
    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', onEnterOrSpaceKey);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.off('focus', handleFocus, true);
    swiper.$el.off('pointerdown', handlePointerDown, true);
    swiper.$el.off('pointerup', handlePointerUp, true);
  }

  on('beforeInit', () => {
    liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

function History({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};

  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  const getPathValues = urlOverride => {
    const window = getWindow();
    let location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };

  const setHistory = (key, index) => {
    const window = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    const slide = swiper.slides.eq(index);
    let value = slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key}/${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }

    if (swiper.params.history.keepQuery) {
      value += location.search;
    }

    const currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };

  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };

  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };

  const init = () => {
    const window = getWindow();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) return;
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };

  const destroy = () => {
    const window = getWindow();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };

  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

function HashNavigation({
  swiper,
  extendParams,
  emit,
  on
}) {
  let initialized = false;
  const document = getDocument();
  const window = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  });

  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  };

  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
      emit('hashSet');
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      emit('hashSet');
    }
  };

  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');

    if (hash) {
      const speed = 0;

      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      $(window).on('hashchange', onHashChange);
    }
  };

  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      $(window).off('hashchange', onHashChange);
    }
  };

  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

/* eslint no-underscore-dangle: "off" */
function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    if (!swiper.size) {
      swiper.autoplay.running = false;
      swiper.autoplay.paused = false;
      return;
    }

    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    const document = getDocument();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit('autoplayPause');
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    emit('autoplayResume');
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', () => {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}

function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };

  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  }

  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }

  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs

    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }

    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }

  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    init();
    update(true);
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;

    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}

function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });

  function onTouchStart() {
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }

  function onTouchMove() {
    const {
      touchEventsData: data,
      touches
    } = swiper; // Velocity

    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: now()
    });
  }

  function onTouchEnd({
    currentPos
  }) {
    const {
      params,
      $wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper; // Time diff

    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;

    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;

        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }

  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}

function Grid({
  swiper,
  extendParams
}) {
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;

  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    slidesPerRow = slidesNumberEvenToRows / rows;
    numFullColumns = Math.floor(slidesLength / rows);

    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }

    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
  };

  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup,
      spaceBetween
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid; // Set slides order

    let newSlideOrderIndex;
    let column;
    let row;

    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.css({
        '-webkit-order': newSlideOrderIndex,
        order: newSlideOrderIndex
      });
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;

      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;

        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }

    slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
  };

  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      spaceBetween,
      centeredSlides,
      roundLengths
    } = swiper.params;
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.$wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
    });

    if (centeredSlides) {
      snapGrid.splice(0, snapGrid.length);
      const newSlidesGrid = [];

      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid.push(...newSlidesGrid);
    }
  };

  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}

function appendSlide(slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  let newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  const baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];

  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];

  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

function Manipulation({
  swiper
}) {
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}

function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;

    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

      swiper.slides.each(slideEl => {
        const $slideEl = swiper.$(slideEl);
        $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
      }); // create new one

      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;

    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }

    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}

function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformEl,
  allSlides
}) {
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}

function EffectFade({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.fadeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

function EffectCube({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });

  const createSlideShadows = ($slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
      $slideEl.append(shadowBefore);
    }

    if (shadowAfter.length === 0) {
      shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
      $slideEl.append(shadowAfter);
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.each(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows($(slideEl), progress, isHorizontal);
    });
  };

  const setTranslate = () => {
    const {
      $el,
      $wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: `${swiperWidth}px`
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, isHorizontal);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }

    const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };

  const setTransition = duration => {
    const {
      $el,
      slides
    } = swiper;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  };

  effectInit({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

function createShadow(params, $slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

  if (!$shadowEl.length) {
    $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
    $shadowContainer.append($shadowEl);
  }

  return $shadowEl;
}

function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });

  const createSlideShadows = ($slideEl, progress, params) => {
    let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }

    if (shadowAfter.length === 0) {
      shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  const recreateShadows = () => {
    // Set shadows
    const params = swiper.params.flipEffect;
    swiper.slides.each(slideEl => {
      const $slideEl = $(slideEl);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }

      createSlideShadows($slideEl, progress, params);
    });
  };

  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, params);
      }

      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.flipEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl
    });
  };

  effectInit({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth; // Each slide offset from center

    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.coverflowEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  };

  effectInit({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };

  const setTranslate = () => {
    const {
      slides,
      $wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;

    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;

      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;

      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }

      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };

      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      } // set translate


      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      }); // set rotates

      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

      if (custom && data.shadow || !custom) {
        let $shadowEl = $slideEl.children('.swiper-slide-shadow');

        if ($shadowEl.length === 0 && data.shadow) {
          $shadowEl = createShadow(params, $slideEl);
        }

        if ($shadowEl.length) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }

      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform).css({
        opacity: opacityString
      });

      if (data.origin) {
        $targetEl.css('transform-origin', data.origin);
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.creativeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });

  const setTranslate = () => {
    const {
      slides,
      activeIndex
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = swiper.translate;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = $slideEl[0].swiperSlideOffset;

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
      }

      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }

      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }

      if (progress < 0) {
        // next
        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }

      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }

      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;

      if (params.slideShadows) {
        // Set shadows
        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

        if ($shadowEl.length === 0) {
          $shadowEl = createShadow(params, $slideEl);
        }

        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.cardsEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl
    });
  };

  effectInit({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */

const swiper_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Swiper: Swiper,
    'default': Swiper,
    Virtual: Virtual,
    Keyboard: Keyboard,
    Mousewheel: Mousewheel,
    Navigation: Navigation,
    Pagination: Pagination,
    Scrollbar: Scrollbar,
    Parallax: Parallax,
    Zoom: Zoom,
    Lazy: Lazy,
    Controller: Controller,
    A11y: A11y,
    History: History,
    HashNavigation: HashNavigation,
    Autoplay: Autoplay,
    Thumbs: Thumb,
    FreeMode: freeMode,
    Grid: Grid,
    Manipulation: Manipulation,
    EffectFade: EffectFade,
    EffectCube: EffectCube,
    EffectFlip: EffectFlip,
    EffectCoverflow: EffectCoverflow,
    EffectCreative: EffectCreative,
    EffectCards: EffectCards
});

const swiper_1 = /*@__PURE__*/getAugmentedNamespace(swiper_esm);

var carousel = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselEvent = exports.Carousel = exports.CarouselPage = void 0;
// Copyright (C) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.




var enums_1 = enums;




// Note: to function correctly, consumers need to have CSS from swiper/css, swiper/css/pagination, and
// swiper/css/navigation
var CarouselPage = /** @class */ (function (_super) {
    __extends(CarouselPage, _super);
    function CarouselPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#region Schema
    CarouselPage.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        // `style`, `bleed`, `isVisible` are not supported in CarouselPage
        schema.remove(cardElements.Container.styleProperty);
        schema.remove(cardElements.Container.bleedProperty);
        schema.remove(cardElements.Container.isVisibleProperty);
    };
    //#endregion
    CarouselPage.prototype.internalRender = function () {
        var carouselSlide = document.createElement("div");
        carouselSlide.className = this.hostConfig.makeCssClassName("swiper-slide");
        // `isRtl()` will set the correct value of rtl by reading the value from the parents
        this.rtl = this.isRtl();
        var renderedElement = _super.prototype.internalRender.call(this);
        utils.appendChild(carouselSlide, renderedElement);
        return carouselSlide;
    };
    CarouselPage.prototype.getForbiddenActionTypes = function () {
        return [cardElements.ShowCardAction, cardElements.ToggleVisibilityAction];
    };
    CarouselPage.prototype.getForbiddenChildElements = function () {
        return this.forbiddenChildElements();
    };
    CarouselPage.prototype.forbiddenChildElements = function () {
        return __spreadArray([
            cardElements.ToggleVisibilityAction.JsonTypeName,
            cardElements.ShowCardAction.JsonTypeName,
            "Media",
            "ActionSet",
            "Input.Text",
            "Input.Date",
            "Input.Time",
            "Input.Number",
            "Input.ChoiceSet",
            "Input.Toggle",
            "Carousel"
        ], _super.prototype.forbiddenChildElements.call(this), true);
    };
    CarouselPage.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this.setShouldFallback(false);
    };
    CarouselPage.prototype.shouldSerialize = function (_context) {
        return true;
    };
    CarouselPage.prototype.getJsonTypeName = function () {
        return "CarouselPage";
    };
    Object.defineProperty(CarouselPage.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarouselPage.prototype, "hasVisibleSeparator", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return CarouselPage;
}(cardElements.Container));
exports.CarouselPage = CarouselPage;
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.carouselLoop = true;
        _this.carouselOrientation = enums.Orientation.Horizontal;
        _this._pages = [];
        _this._currentIndex = 0;
        _this._previousEventType = enums.CarouselInteractionEvent.Pagination;
        return _this;
    }
    //#region Schema
    Carousel.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        // `style`, `bleed`, `isVisible` are not supported in Carousel
        schema.remove(cardElements.Container.styleProperty);
        schema.remove(cardElements.Container.bleedProperty);
        schema.remove(cardElements.Container.isVisibleProperty);
    };
    Object.defineProperty(Carousel.prototype, "timer", {
        get: function () {
            var timer = this.getValue(Carousel.timerProperty);
            if (timer && timer < this.hostConfig.carousel.minAutoplayDelay) {
                console.warn(strings.Strings.errors.tooLittleTimeDelay);
                timer = this.hostConfig.carousel.minAutoplayDelay;
            }
            return timer;
        },
        set: function (value) {
            if (value && value < this.hostConfig.carousel.minAutoplayDelay) {
                console.warn(strings.Strings.errors.tooLittleTimeDelay);
                this.setValue(Carousel.timerProperty, this.hostConfig.carousel.minAutoplayDelay);
            }
            else {
                this.setValue(Carousel.timerProperty, value);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "initialPageIndex", {
        get: function () {
            return this.getValue(Carousel.initialPageProperty);
        },
        set: function (value) {
            if (this.isValidParsedPageIndex(value)) {
                this.setValue(Carousel.initialPageProperty, value);
            }
            else {
                console.warn(strings.Strings.errors.invalidInitialPageIndex(value));
                this.setValue(Carousel.initialPageProperty, 0);
            }
        },
        enumerable: false,
        configurable: true
    });
    Carousel.prototype.isValidParsedPageIndex = function (index) {
        return this._pages ? this.isValidPageIndex(index, this._pages.length) : false;
    };
    Carousel.prototype.isValidRenderedPageIndex = function (index) {
        return this._renderedPages ? this.isValidPageIndex(index, this._renderedPages.length) : false;
    };
    Carousel.prototype.isValidPageIndex = function (index, collectionSize) {
        return (collectionSize > 0 && 0 <= index && index < collectionSize);
    };
    Object.defineProperty(Carousel.prototype, "previousEventType", {
        //#endregion
        get: function () {
            return this._previousEventType;
        },
        set: function (eventType) {
            this._previousEventType = eventType;
        },
        enumerable: false,
        configurable: true
    });
    // Question: Why do we place this on the Carousel instead of the CarouselPage?
    Carousel.prototype.forbiddenChildElements = function () {
        return __spreadArray([
            cardElements.ToggleVisibilityAction.JsonTypeName,
            cardElements.ShowCardAction.JsonTypeName,
            "Media",
            "ActionSet",
            "Input.Text",
            "Input.Date",
            "Input.Time",
            "Input.Number",
            "Input.ChoiceSet",
            "Input.Toggle"
        ], _super.prototype.forbiddenChildElements.call(this), true);
    };
    Carousel.prototype.adjustRenderedElementSize = function (renderedElement) {
        _super.prototype.adjustRenderedElementSize.call(this, renderedElement);
        if (this.height == "stretch" && this._containerForAdorners !== undefined) {
            this._containerForAdorners.style.height = "100%";
        }
        // Assign the explicit height to carouselPageContainer if given
        if (this.carouselHeight) {
            this._carouselPageContainer.style.height = this.carouselHeight + "px";
        }
    };
    Carousel.prototype.getJsonTypeName = function () {
        return "Carousel";
    };
    Carousel.prototype.getItemCount = function () {
        return this._pages.length;
    };
    Carousel.prototype.getItemAt = function (index) {
        return this._pages[index];
    };
    Carousel.prototype.addPage = function (page) {
        this._pages.push(page);
        page.setParent(this);
    };
    Carousel.prototype.removeItem = function (item) {
        if (item instanceof CarouselPage) {
            var itemIndex = this._pages.indexOf(item);
            if (itemIndex >= 0) {
                this._pages.splice(itemIndex, 1);
                item.setParent(undefined);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    Carousel.prototype.getFirstVisibleRenderedItem = function () {
        var _a;
        if (this.renderedElement && ((_a = this._renderedPages) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return this._renderedPages[0];
        }
        else {
            return undefined;
        }
    };
    Carousel.prototype.getLastVisibleRenderedItem = function () {
        var _a;
        if (this.renderedElement && ((_a = this._renderedPages) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return this._renderedPages[this._renderedPages.length - 1];
        }
        else {
            return undefined;
        }
    };
    Object.defineProperty(Carousel.prototype, "currentPageId", {
        get: function () {
            var _a, _b;
            if ((_b = (_a = this._carousel) === null || _a === void 0 ? void 0 : _a.slides) === null || _b === void 0 ? void 0 : _b.length) {
                var activeSlide = this._carousel.slides[this._carousel.activeIndex];
                return activeSlide.id;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "currentPageIndex", {
        get: function () {
            var _a;
            return (_a = this._carousel) === null || _a === void 0 ? void 0 : _a.realIndex;
        },
        enumerable: false,
        configurable: true
    });
    Carousel.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._pages = [];
        var jsonPages = source["pages"];
        if (Array.isArray(jsonPages)) {
            for (var _i = 0, jsonPages_1 = jsonPages; _i < jsonPages_1.length; _i++) {
                var item = jsonPages_1[_i];
                var page = this.createCarouselPageInstance(item, context);
                if (page) {
                    this._pages.push(page);
                }
            }
        }
        // everything is parsed do validate on initial page index
        this.validateParsing(context);
    };
    Carousel.prototype.validateParsing = function (context) {
        if (!this.isValidParsedPageIndex(this.initialPageIndex)) {
            context.logParseEvent(this, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidInitialPageIndex(this.initialPageIndex));
        }
    };
    Carousel.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, "pages", this._pages);
    };
    Carousel.prototype.internalRender = function () {
        var _a;
        this._renderedPages = [];
        if (this._pages.length <= 0) {
            return undefined;
        }
        this.validateOrientationProperties();
        var cardLevelContainer = document.createElement("div");
        cardLevelContainer.className = this.hostConfig.makeCssClassName("ac-carousel-card-level-container");
        var carouselContainer = document.createElement("div");
        carouselContainer.className = this.hostConfig.makeCssClassName("swiper", "ac-carousel");
        this._carouselPageContainer = carouselContainer;
        var containerForAdorners = document.createElement("div");
        containerForAdorners.className = this.hostConfig.makeCssClassName("ac-carousel-container");
        this._containerForAdorners = containerForAdorners;
        cardLevelContainer.appendChild(containerForAdorners);
        var navigationContainer = document.createElement("div");
        navigationContainer.className = this.hostConfig.makeCssClassName("ac-carousel-navigation");
        containerForAdorners.appendChild(navigationContainer);
        var carouselWrapper = document.createElement("div");
        carouselWrapper.className = this.hostConfig.makeCssClassName("swiper-wrapper", "ac-carousel-card-container");
        carouselWrapper.style.display = "flex";
        switch (this.getEffectiveVerticalContentAlignment()) {
            case enums.VerticalAlignment.Top:
                carouselWrapper.style.alignItems = "flex-start";
                break;
            case enums.VerticalAlignment.Bottom:
                carouselWrapper.style.alignItems = "flex-end";
                break;
            default:
                carouselWrapper.style.alignItems = "center";
                break;
        }
        if (shared.GlobalSettings.useAdvancedCardBottomTruncation) {
            // Forces the container to be at least as tall as its content.
            //
            // Fixes a quirk in Chrome where, for nested flex elements, the
            // inner element's height would never exceed the outer element's
            // height. This caused overflow truncation to break -- containers
            // would always be measured as not overflowing, since their heights
            // were constrained by their parents as opposed to truly reflecting
            // the height of their content.
            //
            // See the "Browser Rendering Notes" section of this answer:
            // https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
            carouselWrapper.style.minHeight = "-webkit-min-content";
        }
        var prevElementDiv = document.createElement("div");
        prevElementDiv.className = this.hostConfig.makeCssClassName("swiper-button-prev");
        var nextElementDiv = document.createElement("div");
        nextElementDiv.className = this.hostConfig.makeCssClassName("swiper-button-next");
        if (this.carouselOrientation === enums.Orientation.Horizontal) {
            this.updateCssForHorizontalCarousel(prevElementDiv, nextElementDiv);
        }
        else {
            this.updateCssForVerticalCarousel(navigationContainer, prevElementDiv, nextElementDiv);
        }
        var pagination = document.createElement("div");
        pagination.className = this.hostConfig.makeCssClassName("swiper-pagination", "ac-carousel-pagination");
        navigationContainer.appendChild(prevElementDiv);
        utils.addCancelSelectActionEventHandler(prevElementDiv);
        navigationContainer.appendChild(pagination);
        utils.addCancelSelectActionEventHandler(pagination);
        navigationContainer.appendChild(nextElementDiv);
        utils.addCancelSelectActionEventHandler(nextElementDiv);
        if (this.isDesignMode()) {
            // If we are in design mode, we need to ensure these elements are in front of the peers
            prevElementDiv.style.zIndex = "20";
            nextElementDiv.style.zIndex = "20";
            pagination.style.zIndex = "20";
        }
        var requestedNumberOfPages = Math.min(this._pages.length, this.hostConfig.carousel.maxCarouselPages);
        if (this._pages.length > this.hostConfig.carousel.maxCarouselPages) {
            console.warn(strings.Strings.errors.tooManyCarouselPages);
        }
        if (this._pages.length > 0) {
            for (var i = 0; i < requestedNumberOfPages; i++) {
                var page = this._pages[i];
                var renderedItem = this.isElementAllowed(page) ? page.render() : undefined;
                renderedItem === null || renderedItem === void 0 ? void 0 : renderedItem.classList.add("ac-carousel-page");
                (_a = renderedItem === null || renderedItem === void 0 ? void 0 : renderedItem.children[0]) === null || _a === void 0 ? void 0 : _a.classList.add("ac-carousel-page-container");
                if (renderedItem) {
                    utils.appendChild(carouselWrapper, renderedItem);
                    this._renderedPages.push(page);
                }
            }
        }
        carouselContainer.appendChild(carouselWrapper);
        carouselContainer.tabIndex = this.isDesignMode() ? -1 : 0;
        containerForAdorners.appendChild(carouselContainer);
        // `isRtl()` will set the correct value of rtl by reading the value from the parents
        this.rtl = this.isRtl();
        this.applyRTL(pagination);
        if (!this.isDesignMode()) {
            if (this.isValidRenderedPageIndex(this.initialPageIndex)) {
                this._currentIndex = this.initialPageIndex;
            }
            else {
                console.warn(strings.Strings.errors.invalidInitialPageIndex(this.initialPageIndex));
                this._currentIndex = 0;
            }
        }
        this.initializeCarouselControl(carouselContainer, nextElementDiv, prevElementDiv, pagination, this.rtl);
        return this._renderedPages.length > 0 ? cardLevelContainer : undefined;
    };
    Carousel.prototype.applyRTL = function (pagination) {
        _super.prototype.applyRTL.call(this, this._carouselPageContainer);
        if (this.rtl) {
            pagination.classList.add(this.hostConfig.makeCssClassName("ac-carousel-pagination-rtl"));
        }
    };
    Carousel.prototype.validateOrientationProperties = function () {
        if (!this.carouselHeight) {
            this.carouselOrientation = enums.Orientation.Horizontal;
        }
    };
    Carousel.prototype.updateCssForHorizontalCarousel = function (prevElementDiv, nextElementDiv) {
        prevElementDiv.classList.add(this.hostConfig.makeCssClassName("ac-carousel-left"));
        nextElementDiv.classList.add(this.hostConfig.makeCssClassName("ac-carousel-right"));
    };
    Carousel.prototype.updateCssForVerticalCarousel = function (navigationContainer, prevElementDiv, nextElementDiv) {
        this._containerForAdorners.classList.add(this.hostConfig.makeCssClassName("ac-carousel-container-vertical"));
        navigationContainer.classList.add(this.hostConfig.makeCssClassName("ac-carousel-navigation-vertical"));
        prevElementDiv.classList.add(this.hostConfig.makeCssClassName("ac-carousel-up"));
        nextElementDiv.classList.add(this.hostConfig.makeCssClassName("ac-carousel-down"));
    };
    Carousel.prototype.initializeCarouselControl = function (carouselContainer, nextElement, prevElement, paginationElement, rtl) {
        var _this = this;
        var _a, _b, _c;
        var nextElementAdjustedForRtl = (rtl === undefined || !rtl ? nextElement : prevElement);
        var prevElementAdjustedForRtl = (rtl === undefined || !rtl ? prevElement : nextElement);
        var prevElementAdjustedForOrientation = (enums.Orientation.Horizontal === this.carouselOrientation) ? prevElementAdjustedForRtl : prevElement;
        var nextElementAdjustedForOrientation = (enums.Orientation.Horizontal === this.carouselOrientation) ? nextElementAdjustedForRtl : nextElement;
        var swiperOptions = {
            loop: !this.isDesignMode() && this.carouselLoop,
            modules: [swiper_1.Navigation, swiper_1.Pagination, swiper_1.Scrollbar, swiper_1.A11y, swiper_1.History, swiper_1.Keyboard],
            pagination: {
                el: paginationElement,
                clickable: true
            },
            navigation: {
                prevEl: prevElementAdjustedForOrientation,
                nextEl: nextElementAdjustedForOrientation
            },
            a11y: {
                enabled: true
            },
            keyboard: {
                enabled: false,
                onlyInViewport: true
            },
            direction: this.carouselOrientation === enums.Orientation.Horizontal ? "horizontal" : "vertical",
            resizeObserver: false,
            initialSlide: this._currentIndex
        };
        if (this.timer && !this.isDesignMode()) {
            (_a = swiperOptions.modules) === null || _a === void 0 ? void 0 : _a.push(swiper_1.Autoplay);
            swiperOptions.autoplay = { delay: this.timer, pauseOnMouseEnter: true };
        }
        var carousel = new swiper_1.Swiper(carouselContainer, swiperOptions);
        // While the 'pauseOnMouseEnter' option should resume autoplay on
        // mouse exit it doesn't do it, so adding custom events to handle it
        carouselContainer.addEventListener("mouseenter", function (_event) {
            var _a;
            (_a = carousel.autoplay) === null || _a === void 0 ? void 0 : _a.stop();
        });
        carouselContainer.addEventListener("mouseleave", function (_event) {
            var _a;
            (_a = carousel.autoplay) === null || _a === void 0 ? void 0 : _a.start();
        });
        carousel.on('navigationNext', function (swiper) {
            _this.raiseCarouselEvent(enums.CarouselInteractionEvent.NavigationNext);
        });
        carousel.on('navigationPrev', function (swiper) {
            _this.raiseCarouselEvent(enums.CarouselInteractionEvent.NavigationPrevious);
        });
        carousel.on('slideChangeTransitionEnd', function (swiper) {
            _this.currentIndex = swiper.realIndex;
            _this.raiseCarouselEvent(enums.CarouselInteractionEvent.Pagination);
        });
        carousel.on('autoplay', function () {
            _this.raiseCarouselEvent(enums.CarouselInteractionEvent.Autoplay);
        });
        carousel.on('paginationRender', function (swiper, paginationEl) {
            swiper.pagination.bullets.forEach(function (bullet, index) {
                bullet.addEventListener("keypress", function (event) {
                    if (event.key == "Enter") {
                        event.preventDefault();
                        swiper.slideTo(index + 1);
                    }
                });
            });
        });
        carousel.on('destroy', function () {
            _this.destroyResizeObserver();
        });
        prevElement.title = (_b = prevElement.ariaLabel) !== null && _b !== void 0 ? _b : strings.Strings.defaults.carouselNavigationPreviousTooltip();
        nextElement.title = (_c = nextElement.ariaLabel) !== null && _c !== void 0 ? _c : strings.Strings.defaults.carouselNavigationNextTooltip();
        this._carousel = carousel;
        this.createResizeObserver();
    };
    Carousel.prototype.createCarouselPageInstance = function (source, context) {
        return context.parseCardObject(this, source, this.forbiddenChildElements(), !this.isDesignMode(), function (typeName) {
            return !typeName || typeName === "CarouselPage" ? new CarouselPage() : undefined;
        }, function (typeName, _errorType) {
            context.logParseEvent(undefined, enums_1.ValidationEvent.ElementTypeNotAllowed, strings.Strings.errors.elementTypeNotAllowed(typeName));
        });
    };
    Carousel.prototype.slideTo = function (index) {
        var _a;
        (_a = this._carousel) === null || _a === void 0 ? void 0 : _a.slideTo(index);
    };
    Object.defineProperty(Carousel.prototype, "carouselPageContainer", {
        get: function () {
            return this._carouselPageContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (currentIndex) {
            this._currentIndex = currentIndex;
        },
        enumerable: false,
        configurable: true
    });
    Carousel.prototype.createCarouselEvent = function (type) {
        var currentPageId;
        if (this.currentPageIndex != undefined) {
            currentPageId = this.getItemAt(this.currentPageIndex).id;
        }
        return new CarouselEvent(type, this.id, currentPageId, this.currentPageIndex);
    };
    Carousel.prototype.raiseCarouselEvent = function (eventType) {
        var card = this.parent ? this.parent.getRootElement() : undefined;
        var onCarouselEventHandler = card && card.onCarouselEvent
            ? card.onCarouselEvent
            : cardElements.AdaptiveCard.onCarouselEvent;
        // pagination event is triggered on slide transition end event 
        if (onCarouselEventHandler && eventType == enums.CarouselInteractionEvent.Pagination) {
            // returns the event type that causes slide transition
            onCarouselEventHandler(this.createCarouselEvent(this.previousEventType));
        }
        this.previousEventType = eventType;
    };
    /// Swiper version 8 added requestAnimationFrame() call in its resize observer code
    /// The new call causes flickering issue,
    /// We've copied resize observer code from Swiper version 7 with some modifications
    Carousel.prototype.createResizeObserver = function () {
        var _this = this;
        var _a;
        if (!this.checkIfCarouselInValidStateForResizeEvent()) {
            return;
        }
        this._observer = new ResizeObserver(function (entries) {
            var _a, _b, _c, _d;
            var width = (_a = _this._carousel) === null || _a === void 0 ? void 0 : _a.width;
            var height = (_b = _this._carousel) === null || _b === void 0 ? void 0 : _b.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_a) {
                var _b;
                var contentBoxSize = _a.contentBoxSize, contentRect = _a.contentRect, target = _a.target;
                if (target && target !== ((_b = _this._carousel) === null || _b === void 0 ? void 0 : _b.el)) {
                    return;
                }
                newWidth = contentRect
                    ? contentRect.width
                    : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect
                    ? contentRect.height
                    : (contentBoxSize[0] || contentBoxSize).blockSize;
            });
            if (newWidth !== width || newHeight !== height) {
                if (_this.checkIfCarouselInValidStateForResizeEvent()) {
                    (_c = _this._carousel) === null || _c === void 0 ? void 0 : _c.emit('beforeResize');
                    (_d = _this._carousel) === null || _d === void 0 ? void 0 : _d.emit('resize');
                }
            }
        });
        this._observer.observe((_a = this._carousel) === null || _a === void 0 ? void 0 : _a.el);
    };
    Carousel.prototype.destroyResizeObserver = function () {
        var _a;
        if (this._observer && this._observer.unobserve && ((_a = this._carousel) === null || _a === void 0 ? void 0 : _a.el)) {
            this._observer.unobserve(this._carousel.el);
            this._observer = null;
        }
    };
    Carousel.prototype.checkIfCarouselInValidStateForResizeEvent = function () {
        return this._carousel && !this._carousel.destroyed;
    };
    Carousel.timerProperty = new serialization.NumProperty(serialization.Versions.v1_6, "timer", undefined);
    Carousel.initialPageProperty = new serialization.NumProperty(serialization.Versions.v1_6, "initialPage", 0);
    Carousel.loopProperty = new serialization.BoolProperty(serialization.Versions.v1_6, "loop", true);
    Carousel.orientationProperty = new serialization.EnumProperty(serialization.Versions.v1_6, "orientation", enums.Orientation, enums.Orientation.Horizontal);
    Carousel.carouselHeightProperty = new serialization.PixelSizeProperty(serialization.Versions.v1_6, "heightInPixels");
    __decorate([
        (0, serialization.property)(Carousel.timerProperty)
    ], Carousel.prototype, "timer", null);
    __decorate([
        (0, serialization.property)(Carousel.initialPageProperty)
    ], Carousel.prototype, "initialPageIndex", null);
    __decorate([
        (0, serialization.property)(Carousel.loopProperty)
    ], Carousel.prototype, "carouselLoop", void 0);
    __decorate([
        (0, serialization.property)(Carousel.orientationProperty)
    ], Carousel.prototype, "carouselOrientation", void 0);
    __decorate([
        (0, serialization.property)(Carousel.carouselHeightProperty)
    ], Carousel.prototype, "carouselHeight", void 0);
    return Carousel;
}(cardElements.Container));
exports.Carousel = Carousel;
var CarouselEvent = /** @class */ (function () {
    function CarouselEvent(type, carouselId, activeCarouselPageId, activeCarouselPageIndex) {
        this.type = type;
        this.carouselId = carouselId;
        this.activeCarouselPageId = activeCarouselPageId;
        this.activeCarouselPageIndex = activeCarouselPageIndex;
    }
    return CarouselEvent;
}());
exports.CarouselEvent = CarouselEvent;
registry.GlobalRegistry.defaultElements.register("Carousel", Carousel, serialization.Versions.v1_6);
//# sourceMappingURL=carousel.js.map
});

var table = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.TableRow = exports.TableCell = exports.StylableContainer = exports.TableColumnDefinition = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.







var TableColumnDefinition = /** @class */ (function (_super) {
    __extends(TableColumnDefinition, _super);
    function TableColumnDefinition() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = new shared.SizeAndUnit(1, enums.SizeUnit.Weight);
        return _this;
    }
    TableColumnDefinition.prototype.getSchemaKey = function () {
        return "ColumnDefinition";
    };
    TableColumnDefinition.horizontalCellContentAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_5, "horizontalCellContentAlignment", enums.HorizontalAlignment);
    TableColumnDefinition.verticalCellContentAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_5, "verticalCellContentAlignment", enums.VerticalAlignment);
    TableColumnDefinition.widthProperty = new serialization.CustomProperty(serialization.Versions.v1_5, "width", function (sender, prop, source, context) {
        var result = prop.defaultValue;
        var value = source[prop.name];
        var invalidWidth = false;
        if (typeof value === "number" && !isNaN(value)) {
            result = new shared.SizeAndUnit(value, enums.SizeUnit.Weight);
        }
        else if (typeof value === "string") {
            try {
                result = shared.SizeAndUnit.parse(value);
            }
            catch (e) {
                invalidWidth = true;
            }
        }
        else {
            invalidWidth = true;
        }
        if (invalidWidth) {
            context.logParseEvent(sender, enums.ValidationEvent.InvalidPropertyValue, strings.Strings.errors.invalidColumnWidth(value));
        }
        return result;
    }, function (sender, property, target, value, context) {
        if (value.unit === enums.SizeUnit.Pixel) {
            context.serializeValue(target, "width", value.physicalSize + "px");
        }
        else {
            context.serializeNumber(target, "width", value.physicalSize);
        }
    }, new shared.SizeAndUnit(1, enums.SizeUnit.Weight));
    __decorate([
        (0, serialization.property)(TableColumnDefinition.horizontalCellContentAlignmentProperty)
    ], TableColumnDefinition.prototype, "horizontalCellContentAlignment", void 0);
    __decorate([
        (0, serialization.property)(TableColumnDefinition.verticalCellContentAlignmentProperty)
    ], TableColumnDefinition.prototype, "verticalCellContentAlignment", void 0);
    __decorate([
        (0, serialization.property)(TableColumnDefinition.widthProperty)
    ], TableColumnDefinition.prototype, "width", void 0);
    return TableColumnDefinition;
}(serialization.SerializableObject));
exports.TableColumnDefinition = TableColumnDefinition;
var StylableContainer = /** @class */ (function (_super) {
    __extends(StylableContainer, _super);
    function StylableContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [];
        return _this;
    }
    StylableContainer.prototype.parseItem = function (source, context) {
        var _this = this;
        return context.parseCardObject(this, source, [], // Forbidden types not supported for elements for now
        !this.isDesignMode(), function (typeName) {
            return _this.createItemInstance(typeName);
        }, function (typeName, _errorType) {
            context.logParseEvent(undefined, enums.ValidationEvent.ElementTypeNotAllowed, strings.Strings.errors.elementTypeNotAllowed(typeName));
        });
    };
    StylableContainer.prototype.internalAddItem = function (item) {
        if (!item.parent) {
            this._items.push(item);
            item.setParent(this);
        }
        else {
            throw new Error(strings.Strings.errors.elementAlreadyParented());
        }
    };
    StylableContainer.prototype.internalRemoveItem = function (item) {
        var itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(undefined);
            this.updateLayout();
            return true;
        }
        return false;
    };
    StylableContainer.prototype.internalIndexOf = function (item) {
        return this._items.indexOf(item);
    };
    StylableContainer.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._items = [];
        var items = source[this.getCollectionPropertyName()];
        if (Array.isArray(items)) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var instance = this.parseItem(item, context);
                if (instance) {
                    this._items.push(instance);
                }
            }
        }
    };
    StylableContainer.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, this.getCollectionPropertyName(), this._items);
    };
    StylableContainer.prototype.removeItem = function (item) {
        return this.internalRemoveItem(item);
    };
    StylableContainer.prototype.getItemCount = function () {
        return this._items.length;
    };
    StylableContainer.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    StylableContainer.prototype.getFirstVisibleRenderedItem = function () {
        return this.getItemCount() > 0 ? this.getItemAt(0) : undefined;
    };
    StylableContainer.prototype.getLastVisibleRenderedItem = function () {
        return this.getItemCount() > 0 ? this.getItemAt(this.getItemCount() - 1) : undefined;
    };
    return StylableContainer;
}(cardElements.StylableCardElementContainer));
exports.StylableContainer = StylableContainer;
var TableCell = /** @class */ (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columnIndex = -1;
        _this._cellType = "data";
        return _this;
    }
    TableCell.prototype.getHasBorder = function () {
        return this.parentRow.parentTable.showGridLines;
    };
    TableCell.prototype.applyBorder = function () {
        if (this.renderedElement && this.getHasBorder()) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.parentRow.parentTable.gridStyle);
            if (styleDefinition.borderColor) {
                var borderColor = (0, utils.stringToCssColor)(styleDefinition.borderColor);
                if (borderColor) {
                    this.renderedElement.style.borderRight = "1px solid " + borderColor;
                    this.renderedElement.style.borderBottom = "1px solid " + borderColor;
                }
            }
        }
    };
    TableCell.prototype.getDefaultPadding = function () {
        return this.getHasBackground() || this.getHasBorder()
            ? new shared.PaddingDefinition(enums.Spacing.Small, enums.Spacing.Small, enums.Spacing.Small, enums.Spacing.Small)
            : _super.prototype.getDefaultPadding.call(this);
    };
    TableCell.prototype.internalRender = function () {
        var cellElement = _super.prototype.internalRender.call(this);
        if (cellElement) {
            cellElement.setAttribute("role", this.cellType === "data" ? "cell" : "columnheader");
            cellElement.style.minWidth = "0";
            if (this.cellType === "header") {
                cellElement.setAttribute("scope", "col");
            }
        }
        return cellElement;
    };
    TableCell.prototype.shouldSerialize = function (_context) {
        return true;
    };
    TableCell.prototype.getJsonTypeName = function () {
        return "TableCell";
    };
    TableCell.prototype.getEffectiveTextStyleDefinition = function () {
        if (this.cellType === "header") {
            return this.hostConfig.textStyles.columnHeader;
        }
        return _super.prototype.getEffectiveTextStyleDefinition.call(this);
    };
    TableCell.prototype.getEffectiveHorizontalAlignment = function () {
        if (this.horizontalAlignment !== undefined) {
            return this.horizontalAlignment;
        }
        if (this.parentRow.horizontalCellContentAlignment !== undefined) {
            return this.parentRow.horizontalCellContentAlignment;
        }
        if (this.columnIndex >= 0) {
            var horizontalAlignment = this.parentRow.parentTable.getColumnAt(this.columnIndex).horizontalCellContentAlignment;
            if (horizontalAlignment !== undefined) {
                return horizontalAlignment;
            }
        }
        if (this.parentRow.parentTable.horizontalCellContentAlignment !== undefined) {
            return this.parentRow.parentTable.horizontalCellContentAlignment;
        }
        return _super.prototype.getEffectiveHorizontalAlignment.call(this);
    };
    TableCell.prototype.getEffectiveVerticalContentAlignment = function () {
        if (this.verticalContentAlignment !== undefined) {
            return this.verticalContentAlignment;
        }
        if (this.parentRow.verticalCellContentAlignment !== undefined) {
            return this.parentRow.verticalCellContentAlignment;
        }
        if (this.columnIndex >= 0) {
            var verticalAlignment = this.parentRow.parentTable.getColumnAt(this.columnIndex).verticalCellContentAlignment;
            if (verticalAlignment !== undefined) {
                return verticalAlignment;
            }
        }
        if (this.parentRow.parentTable.verticalCellContentAlignment !== undefined) {
            return this.parentRow.parentTable.verticalCellContentAlignment;
        }
        return _super.prototype.getEffectiveVerticalContentAlignment.call(this);
    };
    Object.defineProperty(TableCell.prototype, "columnIndex", {
        get: function () {
            return this._columnIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableCell.prototype, "cellType", {
        get: function () {
            return this._cellType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableCell.prototype, "parentRow", {
        get: function () {
            return this.parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableCell.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return TableCell;
}(cardElements.Container));
exports.TableCell = TableCell;
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    TableRow.prototype.getDefaultPadding = function () {
        return new shared.PaddingDefinition(enums.Spacing.None, enums.Spacing.None, enums.Spacing.None, enums.Spacing.None);
    };
    TableRow.prototype.applyBackground = function () {
        if (this.renderedElement) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (styleDefinition.backgroundColor) {
                var bgColor = (0, utils.stringToCssColor)(styleDefinition.backgroundColor);
                if (bgColor) {
                    this.renderedElement.style.backgroundColor = bgColor;
                }
            }
        }
    };
    TableRow.prototype.getCollectionPropertyName = function () {
        return "cells";
    };
    TableRow.prototype.createItemInstance = function (typeName) {
        return !typeName || typeName === "TableCell" ? new TableCell() : undefined;
    };
    TableRow.prototype.internalRender = function () {
        var isFirstRow = this.getIsFirstRow();
        var cellSpacing = this.hostConfig.table.cellSpacing;
        var rowElement = document.createElement("div");
        rowElement.setAttribute("role", "row");
        rowElement.style.display = "flex";
        rowElement.style.flexDirection = "row";
        for (var i = 0; i < Math.min(this.getItemCount(), this.parentTable.getColumnCount()); i++) {
            var cell = this.getItemAt(i);
            // Cheating a bit in order to keep cellType read-only
            cell["_columnIndex"] = i;
            cell["_cellType"] =
                this.parentTable.firstRowAsHeaders && isFirstRow ? "header" : "data";
            var renderedCell = cell.render();
            if (renderedCell) {
                var column = this.parentTable.getColumnAt(i);
                if (column.computedWidth.unit === enums.SizeUnit.Pixel) {
                    renderedCell.style.flex = "0 0 " + column.computedWidth.physicalSize + "px";
                }
                else {
                    renderedCell.style.flex = "1 1 " + column.computedWidth.physicalSize + "%";
                }
                if (i > 0 && !this.parentTable.showGridLines && cellSpacing > 0) {
                    renderedCell.style.marginLeft = cellSpacing + "px";
                }
                rowElement.appendChild(renderedCell);
            }
        }
        return rowElement.children.length > 0 ? rowElement : undefined;
    };
    TableRow.prototype.shouldSerialize = function (_context) {
        return true;
    };
    TableRow.prototype.addCell = function (cell) {
        this.internalAddItem(cell);
    };
    TableRow.prototype.removeCellAt = function (columnIndex) {
        if (columnIndex >= 0 && columnIndex < this.getItemCount()) {
            return this.removeItem(this.getItemAt(columnIndex));
        }
        return false;
    };
    TableRow.prototype.indexOf = function (cardElement) {
        return cardElement instanceof TableCell ? this.internalIndexOf(cardElement) : -1;
    };
    TableRow.prototype.ensureHasEnoughCells = function (cellCount) {
        while (this.getItemCount() < cellCount) {
            this.addCell(new TableCell());
        }
    };
    TableRow.prototype.getJsonTypeName = function () {
        return "TableRow";
    };
    TableRow.prototype.getIsFirstRow = function () {
        return this.parentTable.getItemAt(0) === this;
    };
    Object.defineProperty(TableRow.prototype, "parentTable", {
        get: function () {
            return this.parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableRow.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    TableRow.styleProperty = new cardElements.ContainerStyleProperty(serialization.Versions.v1_5, "style");
    TableRow.horizontalCellContentAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_5, "horizontalCellContentAlignment", enums.HorizontalAlignment);
    TableRow.verticalCellContentAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_5, "verticalCellContentAlignment", enums.VerticalAlignment);
    __decorate([
        (0, serialization.property)(TableRow.horizontalCellContentAlignmentProperty)
    ], TableRow.prototype, "horizontalCellContentAlignment", void 0);
    __decorate([
        (0, serialization.property)(TableRow.verticalCellContentAlignmentProperty)
    ], TableRow.prototype, "verticalCellContentAlignment", void 0);
    return TableRow;
}(StylableContainer));
exports.TableRow = TableRow;
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        _this.firstRowAsHeaders = true;
        _this.showGridLines = true;
        return _this;
    }
    Object.defineProperty(Table.prototype, "gridStyle", {
        get: function () {
            var style = this.getValue(Table.gridStyleProperty);
            if (style && this.hostConfig.containerStyles.getStyleByName(style)) {
                return style;
            }
            return undefined;
        },
        set: function (value) {
            this.setValue(Table.gridStyleProperty, value);
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    Table.prototype.ensureRowsHaveEnoughCells = function () {
        for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).ensureHasEnoughCells(this.getColumnCount());
        }
    };
    Table.prototype.removeCellsFromColumn = function (columnIndex) {
        for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).removeCellAt(columnIndex);
        }
    };
    Table.prototype.getCollectionPropertyName = function () {
        return "rows";
    };
    Table.prototype.createItemInstance = function (typeName) {
        return !typeName || typeName === "TableRow" ? new TableRow() : undefined;
    };
    Table.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this.ensureRowsHaveEnoughCells();
    };
    Table.prototype.internalRender = function () {
        if (this.getItemCount() > 0) {
            var totalWeights = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.width.unit === enums.SizeUnit.Weight) {
                    totalWeights += column.width.physicalSize;
                }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
                var column = _c[_b];
                if (column.width.unit === enums.SizeUnit.Pixel) {
                    column.computedWidth = new shared.SizeAndUnit(column.width.physicalSize, enums.SizeUnit.Pixel);
                }
                else {
                    column.computedWidth = new shared.SizeAndUnit((100 / totalWeights) * column.width.physicalSize, enums.SizeUnit.Weight);
                }
            }
            var tableElement = document.createElement("div");
            tableElement.setAttribute("role", "table");
            tableElement.style.display = "flex";
            tableElement.style.flexDirection = "column";
            if (this.showGridLines) {
                var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.gridStyle);
                if (styleDefinition.borderColor) {
                    var borderColor = (0, utils.stringToCssColor)(styleDefinition.borderColor);
                    if (borderColor) {
                        tableElement.style.borderTop = "1px solid " + borderColor;
                        tableElement.style.borderLeft = "1px solid " + borderColor;
                    }
                }
            }
            var cellSpacing = this.hostConfig.table.cellSpacing;
            for (var i = 0; i < this.getItemCount(); i++) {
                var renderedRow = this.getItemAt(i).render();
                if (renderedRow) {
                    if (i > 0 && !this.showGridLines && cellSpacing > 0) {
                        var separatorRow = document.createElement("div");
                        separatorRow.setAttribute("aria-hidden", "true");
                        separatorRow.style.height = cellSpacing + "px";
                        tableElement.appendChild(separatorRow);
                    }
                    tableElement.appendChild(renderedRow);
                }
            }
            return tableElement;
        }
        return undefined;
    };
    Table.prototype.addColumn = function (column) {
        this._columns.push(column);
        this.ensureRowsHaveEnoughCells();
    };
    Table.prototype.removeColumn = function (column) {
        var index = this._columns.indexOf(column);
        if (index >= 0) {
            this.removeCellsFromColumn(index);
            this._columns.splice(index, 1);
        }
    };
    Table.prototype.getColumnCount = function () {
        return this._columns.length;
    };
    Table.prototype.getColumnAt = function (index) {
        return this._columns[index];
    };
    Table.prototype.addRow = function (row) {
        this.internalAddItem(row);
        row.ensureHasEnoughCells(this.getColumnCount());
    };
    Table.prototype.indexOf = function (cardElement) {
        return cardElement instanceof TableRow ? this.internalIndexOf(cardElement) : -1;
    };
    Table.prototype.getJsonTypeName = function () {
        return "Table";
    };
    Table._columnsProperty = new serialization.SerializableObjectCollectionProperty(serialization.Versions.v1_5, "columns", TableColumnDefinition);
    Table.firstRowAsHeadersProperty = new serialization.BoolProperty(serialization.Versions.v1_5, "firstRowAsHeaders", true);
    Table.showGridLinesProperty = new serialization.BoolProperty(serialization.Versions.v1_5, "showGridLines", true);
    Table.gridStyleProperty = new cardElements.ContainerStyleProperty(serialization.Versions.v1_5, "gridStyle");
    Table.horizontalCellContentAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_5, "horizontalCellContentAlignment", enums.HorizontalAlignment);
    Table.verticalCellContentAlignmentProperty = new serialization.EnumProperty(serialization.Versions.v1_5, "verticalCellContentAlignment", enums.VerticalAlignment);
    __decorate([
        (0, serialization.property)(Table._columnsProperty)
    ], Table.prototype, "_columns", void 0);
    __decorate([
        (0, serialization.property)(Table.firstRowAsHeadersProperty)
    ], Table.prototype, "firstRowAsHeaders", void 0);
    __decorate([
        (0, serialization.property)(Table.showGridLinesProperty)
    ], Table.prototype, "showGridLines", void 0);
    __decorate([
        (0, serialization.property)(Table.gridStyleProperty)
    ], Table.prototype, "gridStyle", null);
    __decorate([
        (0, serialization.property)(Table.horizontalCellContentAlignmentProperty)
    ], Table.prototype, "horizontalCellContentAlignment", void 0);
    __decorate([
        (0, serialization.property)(Table.verticalCellContentAlignmentProperty)
    ], Table.prototype, "verticalCellContentAlignment", void 0);
    return Table;
}(StylableContainer));
exports.Table = Table;
registry.GlobalRegistry.defaultElements.register("Table", Table, serialization.Versions.v1_5);
//# sourceMappingURL=table.js.map
});

var channelAdapter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelAdapter = void 0;
var ChannelAdapter = /** @class */ (function () {
    function ChannelAdapter() {
    }
    return ChannelAdapter;
}());
exports.ChannelAdapter = ChannelAdapter;
//# sourceMappingURL=channel-adapter.js.map
});

var activityRequest = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestResponse = exports.ErrorResponse = exports.SuccessResponse = exports.ActivityResponse = exports.ActivityRequestError = exports.ActivityRequestTrigger = void 0;
(function (ActivityRequestTrigger) {
    ActivityRequestTrigger["Automatic"] = "automatic";
    ActivityRequestTrigger["Manual"] = "manual";
})(exports.ActivityRequestTrigger || (exports.ActivityRequestTrigger = {}));
var ActivityRequestError = /** @class */ (function () {
    function ActivityRequestError(code, message) {
        this.code = code;
        this.message = message;
    }
    return ActivityRequestError;
}());
exports.ActivityRequestError = ActivityRequestError;
var ActivityResponse = /** @class */ (function () {
    function ActivityResponse(request) {
        this.request = request;
    }
    return ActivityResponse;
}());
exports.ActivityResponse = ActivityResponse;
var SuccessResponse = /** @class */ (function (_super) {
    __extends(SuccessResponse, _super);
    function SuccessResponse(request, rawContent) {
        var _this = _super.call(this, request) || this;
        _this.request = request;
        _this.rawContent = rawContent;
        return _this;
    }
    return SuccessResponse;
}(ActivityResponse));
exports.SuccessResponse = SuccessResponse;
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(request, error) {
        var _this = _super.call(this, request) || this;
        _this.request = request;
        _this.error = error;
        return _this;
    }
    return ErrorResponse;
}(ActivityResponse));
exports.ErrorResponse = ErrorResponse;
var LoginRequestResponse = /** @class */ (function (_super) {
    __extends(LoginRequestResponse, _super);
    function LoginRequestResponse(request, auth) {
        var _this = _super.call(this, request) || this;
        _this.request = request;
        _this._auth = auth;
        for (var _i = 0, _a = _this._auth.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            if (button.type === "signin" && button.value !== undefined) {
                try {
                    new URL(button.value);
                    _this.signinButton = button;
                    break;
                }
                catch (e) {
                    // Ignore parsing error
                }
            }
        }
        return _this;
    }
    Object.defineProperty(LoginRequestResponse.prototype, "tokenExchangeResource", {
        get: function () {
            return this._auth.tokenExchangeResource;
        },
        enumerable: false,
        configurable: true
    });
    return LoginRequestResponse;
}(ActivityResponse));
exports.LoginRequestResponse = LoginRequestResponse;
//# sourceMappingURL=activity-request.js.map
});

var adaptiveApplet = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptiveApplet = void 0;
// Copyright (C) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.







function logEvent(level, message) {
    var optionalParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optionalParams[_i - 2] = arguments[_i];
    }
    if (shared.GlobalSettings.applets.logEnabled) {
        if (shared.GlobalSettings.applets.onLogEvent) {
            shared.GlobalSettings.applets.onLogEvent(level, message, optionalParams);
        }
        else {
            /* eslint-disable no-console */
            switch (level) {
                case enums.LogLevel.Warning:
                    console.warn(message, optionalParams);
                    break;
                case enums.LogLevel.Error:
                    console.error(message, optionalParams);
                    break;
                default:
                    console.log(message, optionalParams);
                    break;
            }
            /* eslint-enable no-console */
        }
    }
}
var ActivityRequest = /** @class */ (function () {
    function ActivityRequest(action, trigger, consecutiveRefreshes) {
        this.action = action;
        this.trigger = trigger;
        this.consecutiveRefreshes = consecutiveRefreshes;
        this.attemptNumber = 0;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    ActivityRequest.prototype.retryAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.onSend) {
                    this.onSend(this);
                }
                return [2 /*return*/];
            });
        });
    };
    return ActivityRequest;
}());
var AdaptiveApplet = /** @class */ (function () {
    function AdaptiveApplet() {
        this._allowAutomaticCardUpdate = false;
        this.renderedElement = document.createElement("div");
        this.renderedElement.className = "aaf-cardHost";
        this.renderedElement.style.position = "relative";
        this.renderedElement.style.display = "flex";
        this.renderedElement.style.flexDirection = "column";
        this._cardHostElement = document.createElement("div");
        this._refreshButtonHostElement = document.createElement("div");
        this._refreshButtonHostElement.className = "aaf-refreshButtonHost";
        this._refreshButtonHostElement.style.display = "none";
        this.renderedElement.appendChild(this._cardHostElement);
        this.renderedElement.appendChild(this._refreshButtonHostElement);
    }
    AdaptiveApplet.prototype.displayCard = function (card) {
        if (card.renderedElement) {
            utils.clearElementChildren(this._cardHostElement);
            this._refreshButtonHostElement.style.display = "none";
            this._cardHostElement.appendChild(card.renderedElement);
        }
        else {
            throw new Error("displayCard: undefined card.");
        }
    };
    AdaptiveApplet.prototype.showManualRefreshButton = function (refreshAction) {
        var _this = this;
        var displayBuiltInManualRefreshButton = this.onShowManualRefreshButton
            ? this.onShowManualRefreshButton(this)
            : true;
        if (displayBuiltInManualRefreshButton) {
            this._refreshButtonHostElement.style.display = "none";
            var renderedRefreshButton = undefined;
            if (this.onRenderManualRefreshButton) {
                renderedRefreshButton = this.onRenderManualRefreshButton(this);
            }
            else {
                var message = strings.Strings.runtime.refreshThisCard();
                if (shared.GlobalSettings.applets.refresh.mode === enums.RefreshMode.Automatic) {
                    strings.Strings.runtime.automaticRefreshPaused();
                    message = strings.Strings.runtime.clckToRestartAutomaticRefresh();
                }
                var cardPayload = {
                    type: "AdaptiveCard",
                    version: "1.2",
                    body: [
                        {
                            type: "RichTextBlock",
                            horizontalAlignment: "right",
                            inlines: [
                                {
                                    type: "TextRun",
                                    text: message,
                                    selectAction: {
                                        type: "Action.Submit",
                                        id: "refreshCard"
                                    }
                                }
                            ]
                        }
                    ]
                };
                var card = new cardElements.AdaptiveCard();
                card.parse(cardPayload, new cardElements.SerializationContext(serialization.Versions.v1_2));
                card.onExecuteAction = function (action) {
                    if (action.id === "refreshCard") {
                        utils.clearElementChildren(_this._refreshButtonHostElement);
                        _this.internalExecuteAction(refreshAction, activityRequest.ActivityRequestTrigger.Automatic, 0);
                    }
                };
                renderedRefreshButton = card.render();
            }
            if (renderedRefreshButton) {
                utils.clearElementChildren(this._refreshButtonHostElement);
                this._refreshButtonHostElement.appendChild(renderedRefreshButton);
                this._refreshButtonHostElement.style.removeProperty("display");
            }
        }
    };
    AdaptiveApplet.prototype.createActivityRequest = function (action, trigger, consecutiveRefreshes) {
        var _this = this;
        if (this.card) {
            var request_1 = new ActivityRequest(action, trigger, consecutiveRefreshes);
            request_1.onSend = function (sender) {
                sender.attemptNumber++;
                void _this.internalSendActivityRequestAsync(request_1);
            };
            var cancel = this.onPrepareActivityRequest
                ? !this.onPrepareActivityRequest(this, request_1, action)
                : false;
            return cancel ? undefined : request_1;
        }
        else {
            throw new Error("createActivityRequest: no card has been set.");
        }
    };
    AdaptiveApplet.prototype.createMagicCodeInputCard = function (attemptNumber) {
        var payload = {
            type: "AdaptiveCard",
            version: "1.0",
            body: [
                {
                    type: "TextBlock",
                    color: "attention",
                    text: attemptNumber === 1 ? undefined : "That didn't work... let's try again.",
                    wrap: true,
                    horizontalAlignment: "center"
                },
                {
                    type: "TextBlock",
                    text: 'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"',
                    wrap: true,
                    horizontalAlignment: "center"
                },
                {
                    type: "Input.Text",
                    id: "magicCode",
                    placeholder: "Enter magic code"
                },
                {
                    type: "ActionSet",
                    horizontalAlignment: "center",
                    actions: [
                        {
                            type: "Action.Submit",
                            id: AdaptiveApplet._submitMagicCodeActionId,
                            title: "Submit"
                        },
                        {
                            type: "Action.Submit",
                            id: AdaptiveApplet._cancelMagicCodeAuthActionId,
                            title: "Cancel"
                        }
                    ]
                }
            ]
        };
        var card = new cardElements.AdaptiveCard();
        card.parse(payload);
        return card;
    };
    AdaptiveApplet.prototype.cancelAutomaticRefresh = function () {
        if (this._allowAutomaticCardUpdate) {
            logEvent(enums.LogLevel.Warning, "Automatic card refresh has been cancelled as a result of the user interacting with the card.");
        }
        this._allowAutomaticCardUpdate = false;
    };
    AdaptiveApplet.prototype.createSerializationContext = function () {
        return this.onCreateSerializationContext
            ? this.onCreateSerializationContext(this)
            : new cardElements.SerializationContext();
    };
    AdaptiveApplet.prototype.internalSetCard = function (payload, consecutiveRefreshes) {
        var _this = this;
        if (typeof payload === "object" && payload["type"] === "AdaptiveCard") {
            this._cardPayload = payload;
        }
        if (this._cardPayload) {
            try {
                var card = new cardElements.AdaptiveCard();
                if (this.hostConfig) {
                    card.hostConfig = this.hostConfig;
                }
                var serializationContext = this.createSerializationContext();
                card.parse(this._cardPayload, serializationContext);
                var doChangeCard = this.onCardChanging
                    ? this.onCardChanging(this, this._cardPayload)
                    : true;
                if (doChangeCard) {
                    this._card = card;
                    if (this._card.authentication &&
                        this._card.authentication.tokenExchangeResource &&
                        this.onPrefetchSSOToken) {
                        this.onPrefetchSSOToken(this, this._card.authentication.tokenExchangeResource);
                    }
                    this._card.onExecuteAction = function (action) {
                        // If the user takes an action, cancel any pending automatic refresh
                        _this.cancelAutomaticRefresh();
                        _this.internalExecuteAction(action, activityRequest.ActivityRequestTrigger.Manual, 0);
                    };
                    this._card.onInputValueChanged = function (_input) {
                        // If the user modifies an input, cancel any pending automatic refresh
                        _this.cancelAutomaticRefresh();
                    };
                    this._card.render();
                    if (this._card.renderedElement) {
                        this.displayCard(this._card);
                        if (this.onCardChanged) {
                            this.onCardChanged(this);
                        }
                        if (this._card.refresh) {
                            if (shared.GlobalSettings.applets.refresh.mode ===
                                enums.RefreshMode.Automatic &&
                                consecutiveRefreshes <
                                    shared.GlobalSettings.applets.refresh
                                        .maximumConsecutiveAutomaticRefreshes) {
                                if (shared.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes <=
                                    0) {
                                    logEvent(enums.LogLevel.Info, "Triggering automatic card refresh number " +
                                        (consecutiveRefreshes + 1));
                                    this.internalExecuteAction(this._card.refresh.action, activityRequest.ActivityRequestTrigger.Automatic, consecutiveRefreshes + 1);
                                }
                                else {
                                    logEvent(enums.LogLevel.Info, "Scheduling automatic card refresh number " +
                                        (consecutiveRefreshes + 1) +
                                        " in " +
                                        shared.GlobalSettings.applets.refresh
                                            .timeBetweenAutomaticRefreshes +
                                        "ms");
                                    var action_1 = this._card.refresh.action;
                                    this._allowAutomaticCardUpdate = true;
                                    window.setTimeout(function () {
                                        if (_this._allowAutomaticCardUpdate) {
                                            _this.internalExecuteAction(action_1, activityRequest.ActivityRequestTrigger.Automatic, consecutiveRefreshes + 1);
                                        }
                                    }, shared.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes);
                                }
                            }
                            else if (shared.GlobalSettings.applets.refresh.mode !== enums.RefreshMode.Disabled) {
                                if (consecutiveRefreshes > 0) {
                                    logEvent(enums.LogLevel.Warning, "Stopping automatic refreshes after " +
                                        consecutiveRefreshes +
                                        " consecutive refreshes.");
                                }
                                else {
                                    logEvent(enums.LogLevel.Warning, "The card has a refresh section, but automatic refreshes are disabled.");
                                }
                                if (shared.GlobalSettings.applets.refresh
                                    .allowManualRefreshesAfterAutomaticRefreshes ||
                                    shared.GlobalSettings.applets.refresh.mode === enums.RefreshMode.Manual) {
                                    logEvent(enums.LogLevel.Info, "Showing manual refresh button.");
                                    this.showManualRefreshButton(this._card.refresh.action);
                                }
                            }
                        }
                    }
                }
            }
            catch (error) {
                // Ignore all errors
                logEvent(enums.LogLevel.Error, "setCard: " + error);
            }
        }
    };
    AdaptiveApplet.prototype.internalExecuteAction = function (action, trigger, consecutiveRefreshes) {
        if (action instanceof cardElements.ExecuteAction) {
            if (this.channelAdapter) {
                var request = this.createActivityRequest(action, trigger, consecutiveRefreshes);
                if (request) {
                    void request.retryAsync();
                }
            }
            else {
                throw new Error("internalExecuteAction: No channel adapter set.");
            }
        }
        if (this.onAction) {
            this.onAction(this, action);
        }
    };
    AdaptiveApplet.prototype.createProgressOverlay = function (request) {
        if (!this._progressOverlay) {
            if (this.onCreateProgressOverlay) {
                this._progressOverlay = this.onCreateProgressOverlay(this, request);
            }
            else {
                this._progressOverlay = document.createElement("div");
                this._progressOverlay.className = "aaf-progress-overlay";
                var spinner = document.createElement("div");
                spinner.className = "aaf-spinner";
                spinner.style.width = "28px";
                spinner.style.height = "28px";
                this._progressOverlay.appendChild(spinner);
            }
        }
        return this._progressOverlay;
    };
    AdaptiveApplet.prototype.removeProgressOverlay = function (request) {
        if (this.onRemoveProgressOverlay) {
            this.onRemoveProgressOverlay(this, request);
        }
        if (this._progressOverlay !== undefined) {
            this.renderedElement.removeChild(this._progressOverlay);
            this._progressOverlay = undefined;
        }
    };
    AdaptiveApplet.prototype.activityRequestSucceeded = function (response, parsedContent) {
        if (this.onActivityRequestSucceeded) {
            this.onActivityRequestSucceeded(this, response, parsedContent);
        }
    };
    AdaptiveApplet.prototype.activityRequestFailed = function (response) {
        return this.onActivityRequestFailed
            ? this.onActivityRequestFailed(this, response)
            : shared.GlobalSettings.applets.defaultTimeBetweenRetryAttempts;
    };
    AdaptiveApplet.prototype.showAuthCodeInputDialog = function (request) {
        var _this = this;
        var showBuiltInAuthCodeInputCard = this.onShowAuthCodeInputDialog
            ? this.onShowAuthCodeInputDialog(this, request)
            : true;
        if (showBuiltInAuthCodeInputCard) {
            var authCodeInputCard = this.createMagicCodeInputCard(request.attemptNumber);
            authCodeInputCard.render();
            authCodeInputCard.onExecuteAction = function (submitMagicCodeAction) {
                if (_this.card && submitMagicCodeAction instanceof cardElements.SubmitAction) {
                    switch (submitMagicCodeAction.id) {
                        case AdaptiveApplet._submitMagicCodeActionId:
                            var authCode = undefined;
                            if (submitMagicCodeAction.data &&
                                typeof submitMagicCodeAction.data["magicCode"] === "string") {
                                authCode = submitMagicCodeAction.data["magicCode"];
                            }
                            if (authCode) {
                                _this.displayCard(_this.card);
                                request.authCode = authCode;
                                void request.retryAsync();
                            }
                            else {
                                alert("Please enter the magic code you received.");
                            }
                            break;
                        case AdaptiveApplet._cancelMagicCodeAuthActionId:
                            logEvent(enums.LogLevel.Warning, "Authentication cancelled by user.");
                            _this.displayCard(_this.card);
                            break;
                        default:
                            logEvent(enums.LogLevel.Error, "Unexpected action taken from magic code input card (id = " +
                                submitMagicCodeAction.id +
                                ")");
                            alert(strings.Strings.magicCodeInputCard.somethingWentWrong());
                            break;
                    }
                }
            };
            this.displayCard(authCodeInputCard);
        }
    };
    AdaptiveApplet.prototype.internalSendActivityRequestAsync = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var overlay, done, _loop_1, this_1, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.channelAdapter) {
                            throw new Error("internalSendActivityRequestAsync: channelAdapter is not set.");
                        }
                        overlay = this.createProgressOverlay(request);
                        if (overlay !== undefined) {
                            this.renderedElement.appendChild(overlay);
                        }
                        done = false;
                        _loop_1 = function () {
                            var response, error_1, parsedContent, retryIn_1, attemptOAuth, left, top_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        response = undefined;
                                        if (request.attemptNumber === 1) {
                                            logEvent(enums.LogLevel.Info, "Sending activity request to channel (attempt " + request.attemptNumber + ")");
                                        }
                                        else {
                                            logEvent(enums.LogLevel.Info, "Re-sending activity request to channel (attempt " + request.attemptNumber + ")");
                                        }
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this_1.channelAdapter.sendRequestAsync(request)];
                                    case 2:
                                        response = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _b.sent();
                                        logEvent(enums.LogLevel.Error, "Activity request failed: " + error_1);
                                        this_1.removeProgressOverlay(request);
                                        done = true;
                                        return [3 /*break*/, 4];
                                    case 4:
                                        if (!response) return [3 /*break*/, 10];
                                        if (!(response instanceof activityRequest.SuccessResponse)) return [3 /*break*/, 5];
                                        this_1.removeProgressOverlay(request);
                                        if (response.rawContent === undefined) {
                                            throw new Error("internalSendActivityRequestAsync: Action.Execute result is undefined");
                                        }
                                        parsedContent = response.rawContent;
                                        try {
                                            parsedContent = JSON.parse(response.rawContent);
                                        }
                                        catch (_c) {
                                            // Leave parseContent as is
                                        }
                                        if (typeof parsedContent === "string") {
                                            logEvent(enums.LogLevel.Info, "The activity request returned a string after " +
                                                request.attemptNumber +
                                                " attempt(s).");
                                            this_1.activityRequestSucceeded(response, parsedContent);
                                        }
                                        else if (typeof parsedContent === "object" &&
                                            parsedContent["type"] === "AdaptiveCard") {
                                            logEvent(enums.LogLevel.Info, "The activity request returned an Adaptive Card after " +
                                                request.attemptNumber +
                                                " attempt(s).");
                                            this_1.internalSetCard(parsedContent, request.consecutiveRefreshes);
                                            this_1.activityRequestSucceeded(response, this_1.card);
                                        }
                                        else {
                                            throw new Error("internalSendActivityRequestAsync: Action.Execute result is of unsupported type (" +
                                                typeof response.rawContent +
                                                ")");
                                        }
                                        done = true;
                                        return [3 /*break*/, 10];
                                    case 5:
                                        if (!(response instanceof activityRequest.ErrorResponse)) return [3 /*break*/, 9];
                                        retryIn_1 = this_1.activityRequestFailed(response);
                                        if (!(retryIn_1 >= 0 &&
                                            request.attemptNumber < shared.GlobalSettings.applets.maximumRetryAttempts)) return [3 /*break*/, 7];
                                        logEvent(enums.LogLevel.Warning, "Activity request failed: ".concat(response.error.message, ". Retrying in ").concat(retryIn_1, "ms"));
                                        request.attemptNumber++;
                                        return [4 /*yield*/, new Promise(function (resolve, _reject) {
                                                window.setTimeout(function () {
                                                    resolve();
                                                }, retryIn_1);
                                            })];
                                    case 6:
                                        _b.sent();
                                        return [3 /*break*/, 8];
                                    case 7:
                                        logEvent(enums.LogLevel.Error, "Activity request failed: ".concat(response.error.message, ". Giving up after ").concat(request.attemptNumber, " attempt(s)"));
                                        this_1.removeProgressOverlay(request);
                                        done = true;
                                        _b.label = 8;
                                    case 8: return [3 /*break*/, 10];
                                    case 9:
                                        if (response instanceof activityRequest.LoginRequestResponse) {
                                            logEvent(enums.LogLevel.Info, "The activity request returned a LoginRequestResponse after " +
                                                request.attemptNumber +
                                                " attempt(s).");
                                            if (request.attemptNumber <= shared.GlobalSettings.applets.maximumRetryAttempts) {
                                                attemptOAuth = true;
                                                if (response.tokenExchangeResource && this_1.onSSOTokenNeeded) {
                                                    // Attempt to use SSO. The host will return true if it can handle SSO, in which case
                                                    // we bypass OAuth
                                                    attemptOAuth = !this_1.onSSOTokenNeeded(this_1, request, response.tokenExchangeResource);
                                                }
                                                if (attemptOAuth) {
                                                    // Attempt to use OAuth
                                                    this_1.removeProgressOverlay(request);
                                                    if (response.signinButton === undefined) {
                                                        throw new Error("internalSendActivityRequestAsync: the login request doesn't contain a valid signin URL.");
                                                    }
                                                    logEvent(enums.LogLevel.Info, "Login required at " + response.signinButton.value);
                                                    if (this_1.onShowSigninPrompt) {
                                                        // Bypass the built-in auth prompt if the host app handles it
                                                        this_1.onShowSigninPrompt(this_1, request, response.signinButton);
                                                    }
                                                    else {
                                                        this_1.showAuthCodeInputDialog(request);
                                                        left = window.screenX +
                                                            (window.outerWidth - shared.GlobalSettings.applets.authPromptWidth) /
                                                                2;
                                                        top_1 = window.screenY +
                                                            (window.outerHeight - shared.GlobalSettings.applets.authPromptHeight) /
                                                                2;
                                                        window.open(response.signinButton.value, response.signinButton.title
                                                            ? response.signinButton.title
                                                            : "Sign in", "width=".concat(shared.GlobalSettings.applets.authPromptWidth, ",height=").concat(shared.GlobalSettings.applets.authPromptHeight, ",left=").concat(left, ",top=").concat(top_1));
                                                    }
                                                }
                                            }
                                            else {
                                                logEvent(enums.LogLevel.Error, "Authentication failed. Giving up after " +
                                                    request.attemptNumber +
                                                    " attempt(s)");
                                                alert(strings.Strings.magicCodeInputCard.authenticationFailed());
                                            }
                                            return [2 /*return*/, "break"];
                                        }
                                        else {
                                            throw new Error("Unhandled response type: " + JSON.stringify(response));
                                        }
                                    case 10: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 1;
                    case 1:
                        if (!!done) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 3];
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdaptiveApplet.prototype.refreshCard = function () {
        if (this._card && this._card.refresh) {
            this.internalExecuteAction(this._card.refresh.action, activityRequest.ActivityRequestTrigger.Manual, 0);
        }
    };
    AdaptiveApplet.prototype.setCard = function (payload) {
        this.internalSetCard(payload, 0);
    };
    Object.defineProperty(AdaptiveApplet.prototype, "card", {
        get: function () {
            return this._card;
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveApplet._submitMagicCodeActionId = "submitMagicCode";
    AdaptiveApplet._cancelMagicCodeAuthActionId = "cancelMagicCodeAuth";
    return AdaptiveApplet;
}());
exports.AdaptiveApplet = AdaptiveApplet;
//# sourceMappingURL=adaptive-applet.js.map
});

var adaptivecards = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__exportStar(strings, exports);
__exportStar(enums, exports);
__exportStar(shared, exports);
__exportStar(utils, exports);
__exportStar(serialization, exports);
__exportStar(hostCapabilities, exports);
__exportStar(hostConfig, exports);
__exportStar(registry, exports);
__exportStar(cardObject, exports);
__exportStar(cardElements, exports);
__exportStar(carousel, exports);
__exportStar(table, exports);
__exportStar(channelAdapter, exports);
__exportStar(activityRequest, exports);
__exportStar(adaptiveApplet, exports);
//# sourceMappingURL=adaptivecards.js.map
});

const hubLayoutCardCss = ":host{display:block}.card{box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);background-color:white;border-radius:4px;padding:16px;margin:8px}";

let CardComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    const adaptiveCard = new adaptivecards.AdaptiveCard();
    adaptiveCard.parse(this.config);
    const renderedCard = adaptiveCard.render();
    this.cardElement.appendChild(renderedCard);
  }
  render() {
    let content;
    switch (this.config.type) {
      case 'TextBlock':
        content = h("calcite-tip", { style: this.config.style }, this.config.text);
        break;
      case 'Image':
        content = (h("calcite-card", null, h("img", { slot: "thumbnail", src: this.config.url, style: this.config.style, alt: this.config.text })));
        break;
      case 'Map':
        content = (h("calcite-map", { lat: this.config.lat, lon: this.config.lon, zoom: this.config.zoom, style: this.config.style }));
        break;
      // Add more case statements for other card types like weather, survey, etc.
    }
    return h("div", { class: "card", style: this.config.style }, content, h("calcite-chip", { value: this.config.type }, this.config.type));
  }
};
CardComponent.style = hubLayoutCardCss;

const hubLayoutSectionCss = ":host{display:block}.section{display:flex;flex-direction:column}";

let HubLayoutSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "section", style: this.config.style }, this.config.cards.map((card) => (h("hub-layout-card", { config: card })))));
  }
};
HubLayoutSection.style = hubLayoutSectionCss;

export { CardComponent as hub_layout_card, HubLayoutSection as hub_layout_section };

//# sourceMappingURL=hub-layout-card_2.entry.js.map