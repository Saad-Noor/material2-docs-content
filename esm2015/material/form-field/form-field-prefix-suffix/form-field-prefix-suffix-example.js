/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/form-field-prefix-suffix/form-field-prefix-suffix-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
/**
 * \@title Form field with prefix & suffix
 */
export class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = true;
    }
}
FormFieldPrefixSuffixExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-prefix-suffix-example',
                templateUrl: 'form-field-prefix-suffix-example.html',
                styleUrls: ['form-field-prefix-suffix-example.css'],
            },] },
];
/** @nocollapse */ FormFieldPrefixSuffixExample.ɵfac = function FormFieldPrefixSuffixExample_Factory(t) { return new (t || FormFieldPrefixSuffixExample)(); };
/** @nocollapse */ FormFieldPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldPrefixSuffixExample, selectors: [["form-field-prefix-suffix-example"]], decls: 16, vars: 4, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "type", "number", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""]], template: function FormFieldPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Enter your password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵlistener("click", function FormFieldPrefixSuffixExample_Template_button_click_5_listener() { return ctx.hide = !ctx.hide; });
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field", 1);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Amount");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 4);
        i0.ɵɵelementStart(12, "span", 5);
        i0.ɵɵtext(13, "$\u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "span", 6);
        i0.ɵɵtext(15, ".00");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("type", ctx.hide ? "password" : "text");
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hide);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatButton, i1.MatSuffix, i4.MatIcon, i1.MatPrefix], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'form-field-prefix-suffix-example',
                templateUrl: 'form-field-prefix-suffix-example.html',
                styleUrls: ['form-field-prefix-suffix-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    FormFieldPrefixSuffixExample.prototype.hide;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4L2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFReEMsTUFBTSxPQUFPLDRCQUE0QjtJQUx6QztRQU1FLFNBQUksR0FBRyxJQUFJLENBQUM7S0FDYjs7O1lBUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOzt3R0FDWSw0QkFBNEI7aUVBQTVCLDRCQUE0QjtRQ1J6Qyw4QkFDRTtRQUFBLHlDQUNFO1FBQUEsaUNBQVc7UUFBQSxtQ0FBbUI7UUFBQSxpQkFBWTtRQUMxQywyQkFDQTtRQUFBLGlDQUNBO1FBRGtDLGlJQUFzQjtRQUN4RCxnQ0FBVTtRQUFBLFlBQTBDO1FBQUEsaUJBQVc7UUFDL0QsaUJBQVM7UUFDWCxpQkFBaUI7UUFFakIseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLHVCQUFNO1FBQUEsaUJBQVk7UUFDN0IsNEJBQ0E7UUFBQSxnQ0FBZ0I7UUFBQSx3QkFBTztRQUFBLGlCQUFPO1FBQzlCLGdDQUFnQjtRQUFBLG9CQUFHO1FBQUEsaUJBQU87UUFDNUIsaUJBQWlCO1FBQ25CLGlCQUFNOztRQVpjLGVBQW1DO1FBQW5DLHFEQUFtQztRQUNNLGVBQW1DO1FBQW5DLDZDQUFtQywwQkFBQTtRQUNsRixlQUEwQztRQUExQyxnRUFBMEM7O2tEREczQyw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOzs7O0lBRUMsNENBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIHByZWZpeCAmIHN1ZmZpeCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZFByZWZpeFN1ZmZpeEV4YW1wbGUge1xuICBoaWRlID0gdHJ1ZTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkVudGVyIHlvdXIgcGFzc3dvcmQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwiaGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCdcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRTdWZmaXggKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ0hpZGUgcGFzc3dvcmQnXCIgW2F0dHIuYXJpYS1wcmVzc2VkXT1cImhpZGVcIj5cbiAgICA8bWF0LWljb24+e3toaWRlID8gJ3Zpc2liaWxpdHlfb2ZmJyA6ICd2aXNpYmlsaXR5J319PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkFtb3VudDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJleGFtcGxlLXJpZ2h0LWFsaWduXCI+XG4gICAgPHNwYW4gbWF0UHJlZml4PiQmbmJzcDs8L3NwYW4+XG4gICAgPHNwYW4gbWF0U3VmZml4Pi4wMDwvc3Bhbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19