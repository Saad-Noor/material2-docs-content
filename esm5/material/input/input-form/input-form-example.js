import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Inputs in a form
 */
var InputFormExample = /** @class */ (function () {
    function InputFormExample() {
    }
    InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
    InputFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 47, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "5", "placeholder", "Ex. 94105", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Company (disabled)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "table", 3);
            i0.ɵɵelementStart(6, "tr");
            i0.ɵɵelementStart(7, "td");
            i0.ɵɵelementStart(8, "mat-form-field", 1);
            i0.ɵɵelementStart(9, "mat-label");
            i0.ɵɵtext(10, "First name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "td");
            i0.ɵɵelementStart(13, "mat-form-field", 1);
            i0.ɵɵelementStart(14, "mat-label");
            i0.ɵɵtext(15, "Long Last Name That Will Be Truncated");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵelementStart(18, "mat-form-field", 1);
            i0.ɵɵelementStart(19, "mat-label");
            i0.ɵɵtext(20, "Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "textarea", 5);
            i0.ɵɵtext(22, "1600 Amphitheatre Pkwy");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-form-field", 1);
            i0.ɵɵelementStart(24, "mat-label");
            i0.ɵɵtext(25, "Address 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "textarea", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "table", 3);
            i0.ɵɵelementStart(28, "tr");
            i0.ɵɵelementStart(29, "td");
            i0.ɵɵelementStart(30, "mat-form-field", 1);
            i0.ɵɵelementStart(31, "mat-label");
            i0.ɵɵtext(32, "City");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "td");
            i0.ɵɵelementStart(35, "mat-form-field", 1);
            i0.ɵɵelementStart(36, "mat-label");
            i0.ɵɵtext(37, "State");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "td");
            i0.ɵɵelementStart(40, "mat-form-field", 1);
            i0.ɵɵelementStart(41, "mat-label");
            i0.ɵɵtext(42, "Postal Code");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(43, "input", 8, 9);
            i0.ɵɵelementStart(45, "mat-hint", 10);
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = i0.ɵɵreference(44);
            i0.ɵɵadvance(46);
            i0.ɵɵtextInterpolate1("", _r7.value.length, " / 5");
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
    return InputFormExample;
}());
export { InputFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{
                selector: 'input-form-example',
                templateUrl: 'input-form-example.html',
                styleUrls: ['input-form-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtnQztvRkFBbkIsZ0JBQWdCO3lEQUFoQixnQkFBZ0I7WUNWN0IsK0JBQ0U7WUFBQSx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsa0NBQWtCO1lBQUEsaUJBQVk7WUFDekMsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsZ0NBQWtEO1lBQUEsMEJBQ2hEO1lBQUEsMEJBQUk7WUFBQSx5Q0FDRjtZQUFBLGlDQUFXO1lBQUEsMkJBQVU7WUFBQSxpQkFBWTtZQUNqQyw0QkFDRjtZQUFBLGlCQUFpQjtZQUFBLGlCQUFLO1lBQ3RCLDJCQUFJO1lBQUEsMENBQ0Y7WUFBQSxrQ0FBVztZQUFBLHNEQUFxQztZQUFBLGlCQUFZO1lBQzVELDRCQUNGO1lBQUEsaUJBQWlCO1lBQUEsaUJBQUs7WUFDeEIsaUJBQUs7WUFBQSxpQkFBUTtZQUViLDBCQUNFO1lBQUEsMENBQ0U7WUFBQSxrQ0FBVztZQUFBLHdCQUFPO1lBQUEsaUJBQVk7WUFDOUIsb0NBQWlEO1lBQUEsdUNBQXNCO1lBQUEsaUJBQVc7WUFDcEYsaUJBQWlCO1lBQ2pCLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSwwQkFBUztZQUFBLGlCQUFZO1lBQ2hDLCtCQUE4QjtZQUNoQyxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSixpQ0FBa0Q7WUFBQSwyQkFDaEQ7WUFBQSwyQkFBSTtZQUFBLDBDQUNGO1lBQUEsa0NBQVc7WUFBQSxxQkFBSTtZQUFBLGlCQUFZO1lBQzNCLDRCQUNGO1lBQUEsaUJBQWlCO1lBQUEsaUJBQUs7WUFDdEIsMkJBQUk7WUFBQSwwQ0FDRjtZQUFBLGtDQUFXO1lBQUEsc0JBQUs7WUFBQSxpQkFBWTtZQUM1Qiw0QkFDRjtZQUFBLGlCQUFpQjtZQUFBLGlCQUFLO1lBQ3RCLDJCQUFJO1lBQUEsMENBQ0Y7WUFBQSxrQ0FBVztZQUFBLDRCQUFXO1lBQUEsaUJBQVk7WUFDbEMsK0JBQ0E7WUFBQSxxQ0FBc0I7WUFBQSxhQUErQjtZQUFBLGlCQUFXO1lBQ2xFLGlCQUFpQjtZQUFBLGlCQUFLO1lBQ3hCLGlCQUFLO1lBQUEsaUJBQVE7WUFDZixpQkFBTzs7O1lBSHFCLGdCQUErQjtZQUEvQixtREFBK0I7OzJCRHhDM0Q7Q0FVZ0MsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dHMgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1FeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8bWF0LWxhYmVsPkNvbXBhbnkgKGRpc2FibGVkKTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBkaXNhYmxlZCB2YWx1ZT1cIkdvb2dsZVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5Mb25nIExhc3QgTmFtZSBUaGF0IFdpbGwgQmUgVHJ1bmNhdGVkPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICA8L3RyPjwvdGFibGU+XG5cbiAgPHA+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiAxMDAgTWFpbiBTdFwiPjE2MDAgQW1waGl0aGVhdHJlIFBrd3k8L3RleHRhcmVhPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkFkZHJlc3MgMjwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhIG1hdElucHV0PjwvdGV4dGFyZWE+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9wPlxuXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkNpdHk8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBTYW4gRnJhbmNpc2NvXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBDYWxpZm9ybmlhXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+UG9zdGFsIENvZGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjcG9zdGFsQ29kZSBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCJFeC4gOTQxMDVcIiB2YWx1ZT1cIjk0MDQzXCI+XG4gICAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIj57e3Bvc3RhbENvZGUudmFsdWUubGVuZ3RofX0gLyA1PC9tYXQtaGludD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gIDwvdHI+PC90YWJsZT5cbjwvZm9ybT5cbiJdfQ==