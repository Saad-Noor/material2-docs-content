import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/material/icon";
function TabGroupCustomLabelExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 1);
    i0.ɵɵtext(1, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " First ");
} }
function TabGroupCustomLabelExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 1);
    i0.ɵɵtext(1, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Second ");
} }
function TabGroupCustomLabelExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 1);
    i0.ɵɵtext(1, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Third ");
} }
/**
 * @title Using tabs with a custom label template
 */
var TabGroupCustomLabelExample = /** @class */ (function () {
    function TabGroupCustomLabelExample() {
    }
    TabGroupCustomLabelExample.ɵfac = function TabGroupCustomLabelExample_Factory(t) { return new (t || TabGroupCustomLabelExample)(); };
    TabGroupCustomLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupCustomLabelExample, selectors: [["tab-group-custom-label-example"]], decls: 10, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function TabGroupCustomLabelExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab-group");
            i0.ɵɵelementStart(1, "mat-tab");
            i0.ɵɵtemplate(2, TabGroupCustomLabelExample_ng_template_2_Template, 3, 0, "ng-template", 0);
            i0.ɵɵtext(3, " Content 1 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-tab");
            i0.ɵɵtemplate(5, TabGroupCustomLabelExample_ng_template_5_Template, 3, 0, "ng-template", 0);
            i0.ɵɵtext(6, " Content 2 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-tab");
            i0.ɵɵtemplate(8, TabGroupCustomLabelExample_ng_template_8_Template, 3, 0, "ng-template", 0);
            i0.ɵɵtext(9, " Content 3 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatTabGroup, i1.MatTab, i1.MatTabLabel, i2.MatIcon], styles: [".example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return TabGroupCustomLabelExample;
}());
export { TabGroupCustomLabelExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupCustomLabelExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-custom-label-example',
                templateUrl: 'tab-group-custom-label-example.html',
                styleUrls: ['tab-group-custom-label-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtY3VzdG9tLWxhYmVsL3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWN1c3RvbS1sYWJlbC90YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0dsQyxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHVCQUNGOzs7SUFNRSxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHdCQUNGOzs7SUFNRSxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHVCQUNGOztBRG5CSjs7R0FFRztBQUNIO0lBQUE7S0FLMEM7d0dBQTdCLDBCQUEwQjttRUFBMUIsMEJBQTBCO1lDVnZDLHFDQUNFO1lBQUEsK0JBQ0U7WUFBQSwyRkFDRTtZQUdGLDJCQUNGO1lBQUEsaUJBQVU7WUFFViwrQkFDRTtZQUFBLDJGQUNFO1lBR0YsMkJBQ0Y7WUFBQSxpQkFBVTtZQUVWLCtCQUNFO1lBQUEsMkZBQ0U7WUFJRiwyQkFDRjtZQUFBLGlCQUFVO1lBQ1osaUJBQWdCOztxQ0R6QmhCO0NBVTBDLEFBTDFDLElBSzBDO1NBQTdCLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVXNpbmcgdGFicyB3aXRoIGEgY3VzdG9tIGxhYmVsIHRlbXBsYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEN1c3RvbUxhYmVsRXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS10YWItaWNvblwiPnRodW1iX3VwPC9tYXQtaWNvbj5cbiAgICAgIEZpcnN0XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBDb250ZW50IDFcbiAgPC9tYXQtdGFiPlxuXG4gIDxtYXQtdGFiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS10YWItaWNvblwiPnRodW1iX3VwPC9tYXQtaWNvbj5cbiAgICAgIFNlY29uZFxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgQ29udGVudCAyXG4gIDwvbWF0LXRhYj5cblxuICA8bWF0LXRhYj5cbiAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtdGFiLWljb25cIj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICBUaGlyZFxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICBDb250ZW50IDNcbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19