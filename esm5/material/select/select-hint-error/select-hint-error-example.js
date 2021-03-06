import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectHintErrorExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var animal_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", animal_r14);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", animal_r14.name, " ");
} }
function SelectHintErrorExample_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Please choose an animal");
    i0.ɵɵelementEnd();
} }
function SelectHintErrorExample_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " This field is required ");
    i0.ɵɵelementEnd();
} }
/** @title Select with form field features */
var SelectHintErrorExample = /** @class */ (function () {
    function SelectHintErrorExample() {
        this.animalControl = new FormControl('', Validators.required);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    SelectHintErrorExample.ɵfac = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
    SelectHintErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "mat select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Favorite animal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select", 0);
            i0.ɵɵelementStart(6, "mat-option");
            i0.ɵɵtext(7, "--");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, SelectHintErrorExample_mat_option_8_Template, 2, 2, "mat-option", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, SelectHintErrorExample_mat_error_9_Template, 2, 0, "mat-error", 2);
            i0.ɵɵelementStart(10, "mat-hint");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "h4");
            i0.ɵɵtext(13, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field");
            i0.ɵɵelementStart(15, "mat-label");
            i0.ɵɵtext(16, "Select your car (required)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "select", 3);
            i0.ɵɵelement(18, "option", 4);
            i0.ɵɵelementStart(19, "option", 5);
            i0.ɵɵtext(20, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "option", 6);
            i0.ɵɵtext(22, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "option", 7);
            i0.ɵɵtext(24, "Audi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(25, SelectHintErrorExample_mat_error_25_Template, 2, 0, "mat-error", 2);
            i0.ɵɵelementStart(26, "mat-hint");
            i0.ɵɵtext(27, "You can pick up your favorite car here");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formControl", ctx.animalControl);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.animals);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.animalControl.hasError("required"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.animalControl.value == null ? null : ctx.animalControl.value.sound);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("formControl", ctx.selectFormControl);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.selectFormControl.hasError("required"));
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i5.NgIf, i1.MatHint, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1.MatError], styles: [""] });
    return SelectHintErrorExample;
}());
export { SelectHintErrorExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
                styleUrls: ['select-hint-error-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oaW50LWVycm9yL3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0luRCxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhCLGtDQUFnQjtJQUN6RCxlQUNGO0lBREUsZ0RBQ0Y7OztJQUVGLGlDQUFzRDtJQUFBLHVDQUF1QjtJQUFBLGlCQUFZOzs7SUFhekYsaUNBQ0U7SUFBQSx3Q0FDRjtJQUFBLGlCQUFZOztBRGhCZCw2Q0FBNkM7QUFDN0M7SUFBQTtRQU1FLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFlBQU8sR0FBYTtZQUNsQixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFDO1NBQy9DLENBQUM7S0FDSDtnR0FUWSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQ2RuQywwQkFBSTtZQUFBLDBCQUFVO1lBQUEsaUJBQUs7WUFDbkIsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLCtCQUFlO1lBQUEsaUJBQVk7WUFDdEMscUNBQ0U7WUFBQSxrQ0FBWTtZQUFBLGtCQUFFO1lBQUEsaUJBQWE7WUFDM0IscUZBQ0U7WUFFSixpQkFBYTtZQUNiLG1GQUFzRDtZQUN0RCxpQ0FBVTtZQUFBLGFBQThCO1lBQUEsaUJBQVc7WUFDckQsaUJBQWlCO1lBRWpCLDJCQUFJO1lBQUEsbUNBQWtCO1lBQUEsaUJBQUs7WUFDM0IsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLDJDQUEwQjtZQUFBLGlCQUFZO1lBQ2pELGtDQUNFO1lBQUEsNkJBQStDO1lBQy9DLGtDQUFxQjtZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDbEMsa0NBQXlCO1lBQUEseUJBQVE7WUFBQSxpQkFBUztZQUMxQyxrQ0FBcUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ3BDLGlCQUFTO1lBQ1QscUZBQ0U7WUFFRixpQ0FBVTtZQUFBLHVEQUFzQztZQUFBLGlCQUFXO1lBQzdELGlCQUFpQjs7WUF2QkgsZUFBNkI7WUFBN0IsK0NBQTZCO1lBRTNCLGVBQThCO1lBQTlCLHFDQUE4QjtZQUlqQyxlQUEwQztZQUExQyw2REFBMEM7WUFDM0MsZUFBOEI7WUFBOUIsNEZBQThCO1lBTU4sZUFBaUM7WUFBakMsbURBQWlDO1lBTXhELGVBQThDO1lBQTlDLGlFQUE4Qzs7aUNEdEIzRDtDQXVCQyxBQWRELElBY0M7U0FUWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmludGVyZmFjZSBBbmltYWwge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNvdW5kOiBzdHJpbmc7XG59XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggZm9ybSBmaWVsZCBmZWF0dXJlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEhpbnRFcnJvckV4YW1wbGUge1xuICBhbmltYWxDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgc2VsZWN0Rm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICBhbmltYWxzOiBBbmltYWxbXSA9IFtcbiAgICB7bmFtZTogJ0RvZycsIHNvdW5kOiAnV29vZiEnfSxcbiAgICB7bmFtZTogJ0NhdCcsIHNvdW5kOiAnTWVvdyEnfSxcbiAgICB7bmFtZTogJ0NvdycsIHNvdW5kOiAnTW9vISd9LFxuICAgIHtuYW1lOiAnRm94Jywgc291bmQ6ICdXYS1wYS1wYS1wYS1wYS1wYS1wb3chJ30sXG4gIF07XG59XG4iLCI8aDQ+bWF0IHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgYW5pbWFsPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJhbmltYWxDb250cm9sXCIgcmVxdWlyZWQ+XG4gICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGFuaW1hbCBvZiBhbmltYWxzXCIgW3ZhbHVlXT1cImFuaW1hbFwiPlxuICAgICAge3thbmltYWwubmFtZX19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJhbmltYWxDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+UGxlYXNlIGNob29zZSBhbiBhbmltYWw8L21hdC1lcnJvcj5cbiAgPG1hdC1oaW50Pnt7YW5pbWFsQ29udHJvbC52YWx1ZT8uc291bmR9fTwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgeW91ciBjYXIgKHJlcXVpcmVkKTwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgcmVxdWlyZWQgW2Zvcm1Db250cm9sXT1cInNlbGVjdEZvcm1Db250cm9sXCI+XG4gICAgPG9wdGlvbiBsYWJlbD1cIi0tc2VsZWN0IHNvbWV0aGluZyAtLVwiPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICA8bWF0LWVycm9yICpuZ0lmPVwic2VsZWN0Rm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXG4gIDwvbWF0LWVycm9yPlxuICA8bWF0LWhpbnQ+WW91IGNhbiBwaWNrIHVwIHlvdXIgZmF2b3JpdGUgY2FyIGhlcmU8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuIl19