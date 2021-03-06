/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-form/select-form-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/core";
function SelectFormExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r9.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r9.viewValue, " ");
} }
function SelectFormExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r10.viewValue, " ");
} }
/**
 * @record
 */
function Food() { }
if (false) {
    /** @type {?} */
    Food.prototype.value;
    /** @type {?} */
    Food.prototype.viewValue;
}
/**
 * @record
 */
function Car() { }
if (false) {
    /** @type {?} */
    Car.prototype.value;
    /** @type {?} */
    Car.prototype.viewValue;
}
/**
 * \@title Select in a form
 */
export class SelectFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' }
        ];
    }
}
SelectFormExample.decorators = [
    { type: Component, args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
                styleUrls: ['select-form-example.css'],
            },] },
];
/** @nocollapse */ SelectFormExample.ɵfac = function SelectFormExample_Factory(t) { return new (t || SelectFormExample)(); };
/** @nocollapse */ SelectFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵelementStart(4, "mat-label");
        i0.ɵɵtext(5, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 0);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedValue = $event; });
        i0.ɵɵtemplate(7, SelectFormExample_mat_option_7_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h4");
        i0.ɵɵtext(11, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field");
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Favorite car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 2);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_select_ngModelChange_15_listener($event) { return ctx.selectedCar = $event; });
        i0.ɵɵelement(16, "option", 3);
        i0.ɵɵtemplate(17, SelectFormExample_option_17_Template, 2, 2, "option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.selectedValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.foods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Selected food: ", ctx.selectedValue, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.selectedCar);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.cars);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Selected car: ", ctx.selectedCar, " ");
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.NgModel, i4.NgForOf, i5.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i6.MatOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
                styleUrls: ['select-form-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectFormExample.prototype.selectedValue;
    /** @type {?} */
    SelectFormExample.prototype.selectedCar;
    /** @type {?} */
    SelectFormExample.prototype.foods;
    /** @type {?} */
    SelectFormExample.prototype.cars;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0tsQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjBCLHFDQUFvQjtJQUN6RCxlQUNGO0lBREUsa0RBQ0Y7OztJQVNBLGlDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFTOzs7SUFGd0IscUNBQW1CO0lBQ2xELGVBQ0Y7SUFERSxrREFDRjs7Ozs7QURoQk4sbUJBR0M7OztJQUZDLHFCQUFjOztJQUNkLHlCQUFrQjs7Ozs7QUFHcEIsa0JBR0M7OztJQUZDLG9CQUFjOztJQUNkLHdCQUFrQjs7Ozs7QUFXcEIsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQVNFLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7UUFFRixTQUFJLEdBQVU7WUFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztTQUMzQyxDQUFDO0tBQ0g7OztZQXBCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7O2tGQUNZLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDcEI5Qiw0QkFDRTtRQUFBLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsNkJBQWE7UUFBQSxpQkFBWTtRQUNwQyxxQ0FDRTtRQURVLHNKQUEyQjtRQUNyQyxnRkFDRTtRQUVKLGlCQUFhO1FBQ2YsaUJBQWlCO1FBQ2pCLHlCQUFJO1FBQUEsWUFBaUM7UUFBQSxpQkFBSTtRQUN6QywyQkFBSTtRQUFBLG1DQUFrQjtRQUFBLGlCQUFLO1FBQzNCLHVDQUNFO1FBQUEsa0NBQVc7UUFBQSw2QkFBWTtRQUFBLGlCQUFZO1FBQ25DLGtDQUNFO1FBRHVCLGlKQUF5QjtRQUNoRCw2QkFBbUM7UUFDbkMsMEVBQ0U7UUFFSixpQkFBUztRQUNYLGlCQUFpQjtRQUNqQiwwQkFBSTtRQUFBLGFBQThCO1FBQUEsaUJBQUk7UUFDeEMsaUJBQU87O1FBbEJTLGVBQTJCO1FBQTNCLDJDQUEyQjtRQUN6QixlQUEwQjtRQUExQixtQ0FBMEI7UUFLdEMsZUFBaUM7UUFBakMsaUVBQWlDO1FBSVYsZUFBeUI7UUFBekIseUNBQXlCO1FBRXhDLGVBQXdCO1FBQXhCLGtDQUF3QjtRQUtoQyxlQUE4QjtRQUE5Qiw4REFBOEI7O2tERER2QixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOzs7O0lBRUMsMENBQXNCOztJQUN0Qix3Q0FBb0I7O0lBRXBCLGtDQUlFOztJQUVGLGlDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgRm9vZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2FyIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIFNlbGVjdCBpbiBhIGZvcm1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1mb3JtLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZvcm1FeGFtcGxlIHtcbiAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuICBzZWxlY3RlZENhcjogc3RyaW5nO1xuXG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ31cbiAgXTtcblxuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICd2b2x2bycsIHZpZXdWYWx1ZTogJ1ZvbHZvJ30sXG4gICAge3ZhbHVlOiAnc2FhYicsIHZpZXdWYWx1ZTogJ1NhYWInfSxcbiAgICB7dmFsdWU6ICdtZXJjZWRlcycsIHZpZXdWYWx1ZTogJ01lcmNlZGVzJ31cbiAgXTtcbn1cbiIsIjxmb3JtPlxuICA8aDQ+bWF0LXNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIGZvb2Q8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIiBuYW1lPVwiZm9vZFwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZvb2Qgb2YgZm9vZHNcIiBbdmFsdWVdPVwiZm9vZC52YWx1ZVwiPlxuICAgICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPiBTZWxlY3RlZCBmb29kOiB7e3NlbGVjdGVkVmFsdWV9fSA8L3A+XG4gIDxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBjYXI8L21hdC1sYWJlbD5cbiAgICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJzZWxlY3RlZENhclwiIG5hbWU9XCJjYXJcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD48L29wdGlvbj5cbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNhciBvZiBjYXJzXCIgW3ZhbHVlXT1cImNhci52YWx1ZVwiPlxuICAgICAgICB7e2Nhci52aWV3VmFsdWV9fVxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPiBTZWxlY3RlZCBjYXI6IHt7c2VsZWN0ZWRDYXJ9fSA8L3A+XG48L2Zvcm0+XG4iXX0=