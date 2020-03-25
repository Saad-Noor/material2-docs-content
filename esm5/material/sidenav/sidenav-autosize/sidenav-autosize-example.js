import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function SidenavAutosizeExample_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Lorem, ipsum dolor sit amet consectetur.");
    i0.ɵɵelementEnd();
} }
/**
 * @title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample.ɵfac = function SidenavAutosizeExample_Factory(t) { return new (t || SidenavAutosizeExample)(); };
    SidenavAutosizeExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavAutosizeExample, selectors: [["sidenav-autosize-example"]], decls: 11, vars: 1, consts: [["autosize", "", 1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "example-sidenav-content"], ["type", "button", "mat-button", "", 3, "click"]], template: function SidenavAutosizeExample_Template(rf, ctx) { if (rf & 1) {
            var _r2 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-drawer-container", 0);
            i0.ɵɵelementStart(1, "mat-drawer", 1, 2);
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "Auto-resizing sidenav");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, SidenavAutosizeExample_p_5_Template, 2, 0, "p", 3);
            i0.ɵɵelementStart(6, "button", 4);
            i0.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_6_listener() { return ctx.showFiller = !ctx.showFiller; });
            i0.ɵɵtext(7, " Toggle extra text ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelementStart(9, "button", 6);
            i0.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(2); return _r0.toggle(); });
            i0.ɵɵtext(10, " Toggle sidenav ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.showFiller);
        } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i2.NgIf, i3.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}"] });
    return SidenavAutosizeExample;
}());
export { SidenavAutosizeExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavAutosizeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-autosize-example',
                templateUrl: 'sidenav-autosize-example.html',
                styleUrls: ['sidenav-autosize-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWF1dG9zaXplL3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1hdXRvc2l6ZS9zaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNHcEMseUJBQXNCO0lBQUEsd0RBQXdDO0lBQUEsaUJBQUk7O0FERHRFOztHQUVHO0FBQ0g7SUFBQTtRQU1FLGVBQVUsR0FBRyxLQUFLLENBQUM7S0FDcEI7Z0dBRlksc0JBQXNCOytEQUF0QixzQkFBc0I7O1lDVm5DLCtDQUNFO1lBQUEsd0NBQ0U7WUFBQSx5QkFBRztZQUFBLHFDQUFxQjtZQUFBLGlCQUFJO1lBQzVCLG1FQUFzQjtZQUN0QixpQ0FDRTtZQURNLHVJQUFrQztZQUN4QyxtQ0FDRjtZQUFBLGlCQUFTO1lBQ1gsaUJBQWE7WUFFYiw4QkFDRTtZQUFBLGlDQUNFO1lBRCtCLHVKQUFTLFlBQWUsSUFBQztZQUN4RCxpQ0FDRjtZQUFBLGlCQUFTO1lBQ1gsaUJBQU07WUFFUixpQkFBdUI7O1lBWmhCLGVBQWtCO1lBQWxCLHFDQUFrQjs7aUNESHpCO0NBWUMsQUFQRCxJQU9DO1NBRlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBBdXRvc2l6ZSBzaWRlbmF2XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2QXV0b3NpemVFeGFtcGxlIHtcbiAgc2hvd0ZpbGxlciA9IGZhbHNlO1xufVxuIiwiPG1hdC1kcmF3ZXItY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBhdXRvc2l6ZT5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdlwiIG1vZGU9XCJzaWRlXCI+XG4gICAgPHA+QXV0by1yZXNpemluZyBzaWRlbmF2PC9wPlxuICAgIDxwICpuZ0lmPVwic2hvd0ZpbGxlclwiPkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2hvd0ZpbGxlciA9ICFzaG93RmlsbGVyXCIgbWF0LXJhaXNlZC1idXR0b24+XG4gICAgICBUb2dnbGUgZXh0cmEgdGV4dFxuICAgIDwvYnV0dG9uPlxuICA8L21hdC1kcmF3ZXI+XG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdi1jb250ZW50XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiZHJhd2VyLnRvZ2dsZSgpXCI+XG4gICAgICBUb2dnbGUgc2lkZW5hdlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiJdfQ==