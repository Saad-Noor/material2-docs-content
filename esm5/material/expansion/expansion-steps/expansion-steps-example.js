import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/datepicker";
/**
 * @title Expansion panel as accordion
 */
var ExpansionStepsExample = /** @class */ (function () {
    function ExpansionStepsExample() {
        this.step = 0;
    }
    ExpansionStepsExample.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionStepsExample.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionStepsExample.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
    ExpansionStepsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 56, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
            var _r3 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-accordion", 0);
            i0.ɵɵelementStart(1, "mat-expansion-panel", 1);
            i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_1_listener() { return ctx.setStep(0); });
            i0.ɵɵelementStart(2, "mat-expansion-panel-header");
            i0.ɵɵelementStart(3, "mat-panel-title");
            i0.ɵɵtext(4, " Personal data ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-panel-description");
            i0.ɵɵtext(6, " Type your name and age ");
            i0.ɵɵelementStart(7, "mat-icon");
            i0.ɵɵtext(8, "account_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field");
            i0.ɵɵelementStart(10, "mat-label");
            i0.ɵɵtext(11, "First name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-form-field");
            i0.ɵɵelementStart(14, "mat-label");
            i0.ɵɵtext(15, "Age");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-action-row");
            i0.ɵɵelementStart(18, "button", 4);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_18_listener() { return ctx.nextStep(); });
            i0.ɵɵtext(19, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-expansion-panel", 1);
            i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_20_listener() { return ctx.setStep(1); });
            i0.ɵɵelementStart(21, "mat-expansion-panel-header");
            i0.ɵɵelementStart(22, "mat-panel-title");
            i0.ɵɵtext(23, " Destination ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "mat-panel-description");
            i0.ɵɵtext(25, " Type the country name ");
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27, "map");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-form-field");
            i0.ɵɵelementStart(29, "mat-label");
            i0.ɵɵtext(30, "Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-action-row");
            i0.ɵɵelementStart(33, "button", 5);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_33_listener() { return ctx.prevStep(); });
            i0.ɵɵtext(34, "Previous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "button", 4);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_35_listener() { return ctx.nextStep(); });
            i0.ɵɵtext(36, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "mat-expansion-panel", 1);
            i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_37_listener() { return ctx.setStep(2); });
            i0.ɵɵelementStart(38, "mat-expansion-panel-header");
            i0.ɵɵelementStart(39, "mat-panel-title");
            i0.ɵɵtext(40, " Day of the trip ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "mat-panel-description");
            i0.ɵɵtext(42, " Inform the date you wish to travel ");
            i0.ɵɵelementStart(43, "mat-icon");
            i0.ɵɵtext(44, "date_range");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "mat-form-field");
            i0.ɵɵelementStart(46, "mat-label");
            i0.ɵɵtext(47, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "input", 6);
            i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_48_listener() { i0.ɵɵrestoreView(_r3); var _r2 = i0.ɵɵreference(50); return _r2.open(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "mat-datepicker", null, 7);
            i0.ɵɵelementStart(51, "mat-action-row");
            i0.ɵɵelementStart(52, "button", 5);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_52_listener() { return ctx.prevStep(); });
            i0.ɵɵtext(53, "Previous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "button", 4);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_54_listener() { return ctx.nextStep(); });
            i0.ɵɵtext(55, "End");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(50);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("expanded", ctx.step === 0);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("expanded", ctx.step === 1);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("expanded", ctx.step === 2);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("matDatepicker", _r2);
        } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription, i2.MatIcon, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.MatExpansionPanelActionRow, i5.MatButton, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return ExpansionStepsExample;
}());
export { ExpansionStepsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionStepsExample, [{
        type: Component,
        args: [{
                selector: 'expansion-steps-example',
                templateUrl: 'expansion-steps-example.html',
                styleUrls: ['expansion-steps-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1zdGVwcy9leHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFNBQUksR0FBRyxDQUFDLENBQUM7S0FhVjtJQVhDLHVDQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzhGQWJVLHFCQUFxQjs4REFBckIscUJBQXFCOztZQ1ZsQyx3Q0FDRTtZQUFBLDhDQUNFO1lBRDJDLGlIQUFVLFlBQVEsQ0FBQyxDQUFDLElBQUM7WUFDaEUsa0RBQ0U7WUFBQSx1Q0FDRTtZQUFBLCtCQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDZDQUNFO1lBQUEsd0NBQ0E7WUFBQSxnQ0FBVTtZQUFBLDhCQUFjO1lBQUEsaUJBQVc7WUFDckMsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUU3QixzQ0FDRTtZQUFBLGtDQUFXO1lBQUEsMkJBQVU7WUFBQSxpQkFBWTtZQUNqQyw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsb0JBQUc7WUFBQSxpQkFBWTtZQUMxQiw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLGtDQUF3RDtZQUFyQixtR0FBUyxjQUFVLElBQUM7WUFBQyxxQkFBSTtZQUFBLGlCQUFTO1lBQ3ZFLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFFdEIsK0NBQ0U7WUFEMkMsa0hBQVUsWUFBUSxDQUFDLENBQUMsSUFBQztZQUNoRSxtREFDRTtZQUFBLHdDQUNFO1lBQUEsOEJBQ0Y7WUFBQSxpQkFBa0I7WUFDbEIsOENBQ0U7WUFBQSx3Q0FDQTtZQUFBLGlDQUFVO1lBQUEsb0JBQUc7WUFBQSxpQkFBVztZQUMxQixpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSx3QkFBTztZQUFBLGlCQUFZO1lBQzlCLDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLHVDQUNFO1lBQUEsa0NBQXFEO1lBQXJCLG1HQUFTLGNBQVUsSUFBQztZQUFDLHlCQUFRO1lBQUEsaUJBQVM7WUFDdEUsa0NBQXdEO1lBQXJCLG1HQUFTLGNBQVUsSUFBQztZQUFDLHFCQUFJO1lBQUEsaUJBQVM7WUFDdkUsaUJBQWlCO1lBQ25CLGlCQUFzQjtZQUV0QiwrQ0FDRTtZQUQyQyxrSEFBVSxZQUFRLENBQUMsQ0FBQyxJQUFDO1lBQ2hFLG1EQUNFO1lBQUEsd0NBQ0U7WUFBQSxrQ0FDRjtZQUFBLGlCQUFrQjtZQUNsQiw4Q0FDRTtZQUFBLHFEQUNBO1lBQUEsaUNBQVU7WUFBQSwyQkFBVTtZQUFBLGlCQUFXO1lBQ2pDLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFFN0IsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLHFCQUFJO1lBQUEsaUJBQVk7WUFDM0IsaUNBQ0Y7WUFEMkMsdUpBQVMsVUFBYSxJQUFDO1lBQWhFLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLDJDQUF5QztZQUV6Qyx1Q0FDRTtZQUFBLGtDQUFxRDtZQUFyQixtR0FBUyxjQUFVLElBQUM7WUFBQyx5QkFBUTtZQUFBLGlCQUFTO1lBQ3RFLGtDQUF3RDtZQUFyQixtR0FBUyxjQUFVLElBQUM7WUFBQyxvQkFBRztZQUFBLGlCQUFTO1lBQ3RFLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFFeEIsaUJBQWdCOzs7WUF2RU8sZUFBdUI7WUFBdkIseUNBQXVCO1lBMEJ2QixnQkFBdUI7WUFBdkIseUNBQXVCO1lBc0J2QixnQkFBdUI7WUFBdkIseUNBQXVCO1lBYXhCLGdCQUF3QjtZQUF4QixtQ0FBd0I7O2dDRDlEOUM7Q0F3QkMsQUFuQkQsSUFtQkM7U0FkWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEV4cGFuc2lvbiBwYW5lbCBhcyBhY2NvcmRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvblN0ZXBzRXhhbXBsZSB7XG4gIHN0ZXAgPSAwO1xuXG4gIHNldFN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc3RlcCA9IGluZGV4O1xuICB9XG5cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwKys7XG4gIH1cblxuICBwcmV2U3RlcCgpIHtcbiAgICB0aGlzLnN0ZXAtLTtcbiAgfVxufVxuIiwiPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJleGFtcGxlLWhlYWRlcnMtYWxpZ25cIj5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgW2V4cGFuZGVkXT1cInN0ZXAgPT09IDBcIiAob3BlbmVkKT1cInNldFN0ZXAoMClcIiBoaWRlVG9nZ2xlPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFBlcnNvbmFsIGRhdGFcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB5b3VyIG5hbWUgYW5kIGFnZVxuICAgICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+Rmlyc3QgbmFtZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPkFnZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtYWN0aW9uLXJvdz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPk5leHQ8L2J1dHRvbj5cbiAgICA8L21hdC1hY3Rpb24tcm93PlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgW2V4cGFuZGVkXT1cInN0ZXAgPT09IDFcIiAob3BlbmVkKT1cInNldFN0ZXAoMSlcIiBoaWRlVG9nZ2xlPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERlc3RpbmF0aW9uXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgdGhlIGNvdW50cnkgbmFtZVxuICAgICAgICA8bWF0LWljb24+bWFwPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPkNvdW50cnk8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1hY3Rpb24tcm93PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiIChjbGljayk9XCJwcmV2U3RlcCgpXCI+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPk5leHQ8L2J1dHRvbj5cbiAgICA8L21hdC1hY3Rpb24tcm93PlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgW2V4cGFuZGVkXT1cInN0ZXAgPT09IDJcIiAob3BlbmVkKT1cInNldFN0ZXAoMilcIiBoaWRlVG9nZ2xlPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERheSBvZiB0aGUgdHJpcFxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBJbmZvcm0gdGhlIGRhdGUgeW91IHdpc2ggdG8gdHJhdmVsXG4gICAgICAgIDxtYXQtaWNvbj5kYXRlX3JhbmdlPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPkRhdGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiIHJlYWRvbmx5PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cblxuICAgIDxtYXQtYWN0aW9uLXJvdz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIiAoY2xpY2spPVwicHJldlN0ZXAoKVwiPlByZXZpb3VzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5FbmQ8L2J1dHRvbj5cbiAgICA8L21hdC1hY3Rpb24tcm93PlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==