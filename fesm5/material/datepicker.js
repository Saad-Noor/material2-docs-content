import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵdefineComponent, ɵɵgetCurrentView, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵtext, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵtextInterpolate, Inject, ViewEncapsulation, ɵɵtemplate, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormControl, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInput, MatDatepicker, MatDatepickerToggle, MatCalendar, MatDatepickerToggleIcon, MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _rollupMoment from 'moment';
import _rollupMoment__default, {  } from 'moment';

/** @title Datepicker open method */
var DatepickerApiExample = /** @class */ (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample.ɵfac = function DatepickerApiExample_Factory(t) { return new (t || DatepickerApiExample)(); };
    DatepickerApiExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerApiExample, selectors: [["datepicker-api-example"]], decls: 6, vars: 1, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"]], template: function DatepickerApiExample_Template(rf, ctx) { if (rf & 1) {
            var _r1 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelement(1, "input", 1);
            ɵɵelement(2, "mat-datepicker", null, 2);
            ɵɵelementEnd();
            ɵɵelementStart(4, "button", 3);
            ɵɵlistener("click", function DatepickerApiExample_Template_button_click_4_listener() { ɵɵrestoreView(_r1); var _r0 = ɵɵreference(3); return _r0.open(); });
            ɵɵtext(5, "Open");
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = ɵɵreference(3);
            ɵɵadvance(1);
            ɵɵproperty("matDatepicker", _r0);
        } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepicker, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerApiExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerApiExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-api-example',
                templateUrl: 'datepicker-api-example.html',
                styleUrls: ['datepicker-api-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker palette colors */
var DatepickerColorExample = /** @class */ (function () {
    function DatepickerColorExample() {
    }
    DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
    DatepickerColorExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Inherited calendar color");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 1);
            ɵɵelement(4, "mat-datepicker-toggle", 2);
            ɵɵelement(5, "mat-datepicker", null, 3);
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-form-field", 0);
            ɵɵelementStart(8, "mat-label");
            ɵɵtext(9, "Custom calendar color");
            ɵɵelementEnd();
            ɵɵelement(10, "input", 1);
            ɵɵelement(11, "mat-datepicker-toggle", 2);
            ɵɵelement(12, "mat-datepicker", 4, 5);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = ɵɵreference(6);
            var _r3 = ɵɵreference(13);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r2);
            ɵɵadvance(1);
            ɵɵproperty("for", _r2);
            ɵɵadvance(6);
            ɵɵproperty("matDatepicker", _r3);
            ɵɵadvance(1);
            ɵɵproperty("for", _r3);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerColorExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerColorExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-color-example',
                templateUrl: 'datepicker-color-example.html',
                styleUrls: ['datepicker-color-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker with custom calendar header */
var DatepickerCustomHeaderExample = /** @class */ (function () {
    function DatepickerCustomHeaderExample() {
        this.exampleHeader = ExampleHeader;
    }
    DatepickerCustomHeaderExample.ɵfac = function DatepickerCustomHeaderExample_Factory(t) { return new (t || DatepickerCustomHeaderExample)(); };
    DatepickerCustomHeaderExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerCustomHeaderExample, selectors: [["datepicker-custom-header-example"]], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "calendarHeaderComponent"], ["picker", ""]], template: function DatepickerCustomHeaderExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Custom calendar header");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", 2, 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r4 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r4);
            ɵɵadvance(1);
            ɵɵproperty("for", _r4);
            ɵɵadvance(1);
            ɵɵproperty("calendarHeaderComponent", ctx.exampleHeader);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2, changeDetection: 0 });
    return DatepickerCustomHeaderExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-header-example',
                templateUrl: 'datepicker-custom-header-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
/** Custom header component for datepicker. */
var ExampleHeader = /** @class */ (function () {
    function ExampleHeader(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe(function () { return cdr.markForCheck(); });
    }
    ExampleHeader.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    Object.defineProperty(ExampleHeader.prototype, "periodLabel", {
        get: function () {
            return this._dateAdapter
                .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    ExampleHeader.prototype.previousClicked = function (mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    };
    ExampleHeader.prototype.nextClicked = function (mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    };
    ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(ɵɵdirectiveInject(MatCalendar), ɵɵdirectiveInject(DateAdapter), ɵɵdirectiveInject(MAT_DATE_FORMATS), ɵɵdirectiveInject(ChangeDetectorRef)); };
    ExampleHeader.ɵcmp = ɵɵdefineComponent({ type: ExampleHeader, selectors: [["example-header"]], decls: 19, vars: 1, consts: [[1, "example-header"], ["mat-icon-button", "", 1, "example-double-arrow", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "example-header-label"]], template: function ExampleHeader_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "button", 1);
            ɵɵlistener("click", function ExampleHeader_Template_button_click_1_listener() { return ctx.previousClicked("year"); });
            ɵɵelementStart(2, "mat-icon");
            ɵɵtext(3, "keyboard_arrow_left");
            ɵɵelementEnd();
            ɵɵelementStart(4, "mat-icon");
            ɵɵtext(5, "keyboard_arrow_left");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(6, "button", 2);
            ɵɵlistener("click", function ExampleHeader_Template_button_click_6_listener() { return ctx.previousClicked("month"); });
            ɵɵelementStart(7, "mat-icon");
            ɵɵtext(8, "keyboard_arrow_left");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "span", 3);
            ɵɵtext(10);
            ɵɵelementEnd();
            ɵɵelementStart(11, "button", 2);
            ɵɵlistener("click", function ExampleHeader_Template_button_click_11_listener() { return ctx.nextClicked("month"); });
            ɵɵelementStart(12, "mat-icon");
            ɵɵtext(13, "keyboard_arrow_right");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "button", 1);
            ɵɵlistener("click", function ExampleHeader_Template_button_click_14_listener() { return ctx.nextClicked("year"); });
            ɵɵelementStart(15, "mat-icon");
            ɵɵtext(16, "keyboard_arrow_right");
            ɵɵelementEnd();
            ɵɵelementStart(17, "mat-icon");
            ɵɵtext(18, "keyboard_arrow_right");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(10);
            ɵɵtextInterpolate(ctx.periodLabel);
        } }, directives: [MatButton, MatIcon], styles: [".example-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n      margin: -22%;\n    }"], changeDetection: 0 });
    return ExampleHeader;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExampleHeader, [{
        type: Component,
        args: [{
                selector: 'example-header',
                styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MatCalendar }, { type: DateAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATE_FORMATS]
            }] }, { type: ChangeDetectorRef }]; }, null); })();

/** @title Datepicker with custom icon */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
    DatepickerCustomIconExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 9, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Choose a date");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 1);
            ɵɵelementStart(4, "mat-datepicker-toggle", 2);
            ɵɵelementStart(5, "mat-icon", 3);
            ɵɵtext(6, "keyboard_arrow_down");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(7, "mat-datepicker", null, 4);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r5 = ɵɵreference(8);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r5);
            ɵɵadvance(1);
            ɵɵproperty("for", _r5);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatIcon, MatDatepickerToggleIcon, MatDatepicker], styles: [""] });
    return DatepickerCustomIconExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerCustomIconExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-icon-example',
                templateUrl: 'datepicker-custom-icon-example.html',
                styleUrls: ['datepicker-custom-icon-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker with custom date classes */
var DatepickerDateClassExample = /** @class */ (function () {
    function DatepickerDateClassExample() {
        this.dateClass = function (d) {
            var date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
        };
    }
    DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
    DatepickerDateClassExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 7, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Choose a date");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 1);
            ɵɵelement(4, "mat-datepicker-toggle", 2);
            ɵɵelement(5, "mat-datepicker", 3, 4);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r6 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r6);
            ɵɵadvance(1);
            ɵɵproperty("for", _r6);
            ɵɵadvance(1);
            ɵɵproperty("dateClass", ctx.dateClass);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
    return DatepickerDateClassExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerDateClassExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

/** @title Disabled datepicker */
var DatepickerDisabledExample = /** @class */ (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
    DatepickerDisabledExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 24, vars: 6, consts: [["matInput", "", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵelementStart(1, "mat-form-field");
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "Completely disabled");
            ɵɵelementEnd();
            ɵɵelement(4, "input", 0);
            ɵɵelement(5, "mat-datepicker-toggle", 1);
            ɵɵelement(6, "mat-datepicker", null, 2);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "p");
            ɵɵelementStart(9, "mat-form-field");
            ɵɵelementStart(10, "mat-label");
            ɵɵtext(11, "Popup disabled");
            ɵɵelementEnd();
            ɵɵelement(12, "input", 3);
            ɵɵelement(13, "mat-datepicker-toggle", 4);
            ɵɵelement(14, "mat-datepicker", null, 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(16, "p");
            ɵɵelementStart(17, "mat-form-field");
            ɵɵelementStart(18, "mat-label");
            ɵɵtext(19, "Input disabled");
            ɵɵelementEnd();
            ɵɵelement(20, "input", 0);
            ɵɵelement(21, "mat-datepicker-toggle", 1);
            ɵɵelement(22, "mat-datepicker", 6, 7);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = ɵɵreference(7);
            var _r8 = ɵɵreference(15);
            var _r9 = ɵɵreference(23);
            ɵɵadvance(4);
            ɵɵproperty("matDatepicker", _r7);
            ɵɵadvance(1);
            ɵɵproperty("for", _r7);
            ɵɵadvance(7);
            ɵɵproperty("matDatepicker", _r8);
            ɵɵadvance(1);
            ɵɵproperty("for", _r8);
            ɵɵadvance(7);
            ɵɵproperty("matDatepicker", _r9);
            ɵɵadvance(1);
            ɵɵproperty("for", _r9);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerDisabledExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerDisabledExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-disabled-example',
                templateUrl: 'datepicker-disabled-example.html',
                styleUrls: ['datepicker-disabled-example.css'],
            }]
    }], null, null); })();

function DatepickerEventsExample_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var e_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(e_r12);
} }
/** @title Datepicker input and change events */
var DatepickerEventsExample = /** @class */ (function () {
    function DatepickerEventsExample() {
        this.events = [];
    }
    DatepickerEventsExample.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
    DatepickerEventsExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 9, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Input & change events");
            ɵɵelementEnd();
            ɵɵelementStart(3, "input", 0);
            ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_3_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function DatepickerEventsExample_Template_input_dateChange_3_listener($event) { return ctx.addEvent("change", $event); });
            ɵɵelementEnd();
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", null, 2);
            ɵɵelementEnd();
            ɵɵelementStart(7, "div", 3);
            ɵɵtemplate(8, DatepickerEventsExample_div_8_Template, 2, 1, "div", 4);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r10 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r10);
            ɵɵadvance(1);
            ɵɵproperty("for", _r10);
            ɵɵadvance(4);
            ɵɵproperty("ngForOf", ctx.events);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
    return DatepickerEventsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerEventsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker with filter validation */
var DatepickerFilterExample = /** @class */ (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
    DatepickerFilterExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 7, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Choose a date");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 1);
            ɵɵelement(4, "mat-datepicker-toggle", 2);
            ɵɵelement(5, "mat-datepicker", null, 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r13 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r13);
            ɵɵadvance(1);
            ɵɵproperty("for", _r13);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerFilterExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerFilterExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            }]
    }], null, null); })();

var moment = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker with custom formats */
var DatepickerFormatsExample = /** @class */ (function () {
    function DatepickerFormatsExample() {
        this.date = new FormControl(moment());
    }
    DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
    DatepickerFormatsExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ])], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Verbose datepicker");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", null, 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r14 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r14)("formControl", ctx.date);
            ɵɵadvance(1);
            ɵɵproperty("for", _r14);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerFormatsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerFormatsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-formats-example',
                templateUrl: 'datepicker-formats-example.html',
                styleUrls: ['datepicker-formats-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
            }]
    }], null, null); })();

/** @title Datepicker with different locale */
var DatepickerLocaleExample = /** @class */ (function () {
    function DatepickerLocaleExample(_adapter) {
        this._adapter = _adapter;
    }
    DatepickerLocaleExample.prototype.french = function () {
        this._adapter.setLocale('fr');
    };
    DatepickerLocaleExample.ɵfac = function DatepickerLocaleExample_Factory(t) { return new (t || DatepickerLocaleExample)(ɵɵdirectiveInject(DateAdapter)); };
    DatepickerLocaleExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerLocaleExample, selectors: [["datepicker-locale-example"]], features: [ɵɵProvidersFeature([
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
            ])], decls: 9, vars: 2, consts: [["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp", ""], ["mat-button", "", 3, "click"]], template: function DatepickerLocaleExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Different locale");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", null, 2);
            ɵɵelementEnd();
            ɵɵelementStart(7, "button", 3);
            ɵɵlistener("click", function DatepickerLocaleExample_Template_button_click_7_listener() { return ctx.french(); });
            ɵɵtext(8, "Dynamically switch to French");
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r15 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r15);
            ɵɵadvance(1);
            ɵɵproperty("for", _r15);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerLocaleExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerLocaleExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-locale-example',
                templateUrl: 'datepicker-locale-example.html',
                styleUrls: ['datepicker-locale-example.css'],
                providers: [
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], function () { return [{ type: DateAdapter }]; }, null); })();

/** @title Datepicker with min & max validation */
var DatepickerMinMaxExample = /** @class */ (function () {
    function DatepickerMinMaxExample() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        var currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }
    DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
    DatepickerMinMaxExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 7, vars: 4, consts: [[1, "example-full-width"], ["matInput", "", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Choose a date");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 1);
            ɵɵelement(4, "mat-datepicker-toggle", 2);
            ɵɵelement(5, "mat-datepicker", null, 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r16 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r16);
            ɵɵadvance(1);
            ɵɵproperty("for", _r16);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerMinMaxExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerMinMaxExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
                styleUrls: ['datepicker-min-max-example.css'],
            }]
    }], function () { return []; }, null); })();

var moment$1 = _rollupMoment__default || _rollupMoment;
/** @title Datepicker that uses Moment.js dates */
var DatepickerMomentExample = /** @class */ (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$1([2017, 0, 1]));
    }
    DatepickerMomentExample.ɵfac = function DatepickerMomentExample_Factory(t) { return new (t || DatepickerMomentExample)(); };
    DatepickerMomentExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerMomentExample, selectors: [["datepicker-moment-example"]], features: [ɵɵProvidersFeature([
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
            ])], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerMomentExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Moment.js datepicker");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", null, 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r17 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r17)("formControl", ctx.date);
            ɵɵadvance(1);
            ɵɵproperty("for", _r17);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerMomentExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerMomentExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-moment-example',
                templateUrl: 'datepicker-moment-example.html',
                styleUrls: ['datepicker-moment-example.css'],
                providers: [
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], null, null); })();

/** @title Basic datepicker */
var DatepickerOverviewExample = /** @class */ (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
    DatepickerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], decls: 7, vars: 2, consts: [["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Choose a date");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", null, 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r18 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r18);
            ɵɵadvance(1);
            ɵɵproperty("for", _r18);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-overview-example',
                templateUrl: 'datepicker-overview-example.html',
                styleUrls: ['datepicker-overview-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker start date */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample.ɵfac = function DatepickerStartViewExample_Factory(t) { return new (t || DatepickerStartViewExample)(); };
    DatepickerStartViewExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerStartViewExample, selectors: [["datepicker-start-view-example"]], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""]], template: function DatepickerStartViewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Choose a date");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", 2, 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r19 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r19);
            ɵɵadvance(1);
            ɵɵproperty("for", _r19);
            ɵɵadvance(1);
            ɵɵproperty("startAt", ctx.startDate);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerStartViewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerStartViewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-start-view-example',
                templateUrl: 'datepicker-start-view-example.html',
                styleUrls: ['datepicker-start-view-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker touch UI */
var DatepickerTouchExample = /** @class */ (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
    DatepickerTouchExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 7, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""]], template: function DatepickerTouchExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Choose a date");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 1);
            ɵɵelement(4, "mat-datepicker-toggle", 2);
            ɵɵelement(5, "mat-datepicker", 3, 4);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r20 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r20);
            ɵɵadvance(1);
            ɵɵproperty("for", _r20);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
    return DatepickerTouchExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerTouchExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-touch-example',
                templateUrl: 'datepicker-touch-example.html',
                styleUrls: ['datepicker-touch-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker selected value */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
    DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
    DatepickerValueExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 21, vars: 9, consts: [["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["picker2", ""], ["matInput", "", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Angular forms");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelement(5, "mat-datepicker", null, 2);
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-form-field");
            ɵɵelementStart(8, "mat-label");
            ɵɵtext(9, "Angular forms (w/ deserialization)");
            ɵɵelementEnd();
            ɵɵelement(10, "input", 0);
            ɵɵelement(11, "mat-datepicker-toggle", 1);
            ɵɵelement(12, "mat-datepicker", null, 3);
            ɵɵelementEnd();
            ɵɵelementStart(14, "mat-form-field");
            ɵɵelementStart(15, "mat-label");
            ɵɵtext(16, "Value binding");
            ɵɵelementEnd();
            ɵɵelement(17, "input", 4);
            ɵɵelement(18, "mat-datepicker-toggle", 1);
            ɵɵelement(19, "mat-datepicker", null, 5);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r21 = ɵɵreference(6);
            var _r22 = ɵɵreference(13);
            var _r23 = ɵɵreference(20);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r21)("formControl", ctx.date);
            ɵɵadvance(1);
            ɵɵproperty("for", _r21);
            ɵɵadvance(6);
            ɵɵproperty("matDatepicker", _r22)("formControl", ctx.serializedDate);
            ɵɵadvance(1);
            ɵɵproperty("for", _r22);
            ɵɵadvance(6);
            ɵɵproperty("matDatepicker", _r23)("value", ctx.date.value);
            ɵɵadvance(1);
            ɵɵproperty("for", _r23);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerValueExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null); })();

var moment$2 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS$1 = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker emulating a Year and month picker */
var DatepickerViewsSelectionExample = /** @class */ (function () {
    function DatepickerViewsSelectionExample() {
        this.date = new FormControl(moment$2());
    }
    DatepickerViewsSelectionExample.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    };
    DatepickerViewsSelectionExample.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    };
    DatepickerViewsSelectionExample.ɵfac = function DatepickerViewsSelectionExample_Factory(t) { return new (t || DatepickerViewsSelectionExample)(); };
    DatepickerViewsSelectionExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerViewsSelectionExample, selectors: [["datepicker-views-selection-example"]], features: [ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
            ])], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected", "monthSelected"], ["dp", ""]], template: function DatepickerViewsSelectionExample_Template(rf, ctx) { if (rf & 1) {
            var _r25 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Month and Year");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0);
            ɵɵelement(4, "mat-datepicker-toggle", 1);
            ɵɵelementStart(5, "mat-datepicker", 2, 3);
            ɵɵlistener("yearSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_yearSelected_5_listener($event) { return ctx.chosenYearHandler($event); })("monthSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_monthSelected_5_listener($event) { ɵɵrestoreView(_r25); var _r24 = ɵɵreference(6); return ctx.chosenMonthHandler($event, _r24); });
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r24 = ɵɵreference(6);
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r24)("formControl", ctx.date);
            ɵɵadvance(1);
            ɵɵproperty("for", _r24);
        } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\n  display: none;\n}"] });
    return DatepickerViewsSelectionExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerViewsSelectionExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-views-selection-example',
                templateUrl: 'datepicker-views-selection-example.html',
                styleUrls: ['datepicker-views-selection-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                ],
            }]
    }], null, null); })();

var EXAMPLES = [
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    ExampleHeader,
];
var DatepickerExamplesModule = /** @class */ (function () {
    function DatepickerExamplesModule() {
    }
    DatepickerExamplesModule.ɵmod = ɵɵdefineNgModule({ type: DatepickerExamplesModule });
    DatepickerExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatDatepickerModule,
                MatInputModule,
                MatIconModule,
                MatNativeDateModule,
                ReactiveFormsModule,
            ]] });
    return DatepickerExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DatepickerExamplesModule, { declarations: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        ExampleHeader], imports: [CommonModule,
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatIconModule,
        MatNativeDateModule,
        ReactiveFormsModule], exports: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        ExampleHeader] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDatepickerModule,
                    MatInputModule,
                    MatIconModule,
                    MatNativeDateModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerExamplesModule, DatepickerFilterExample, DatepickerFormatsExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, ExampleHeader };
//# sourceMappingURL=datepicker.js.map
