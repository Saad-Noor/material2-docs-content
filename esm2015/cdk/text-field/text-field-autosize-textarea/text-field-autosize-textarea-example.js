/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/text-field/text-field-autosize-textarea/text-field-autosize-textarea-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/cdk/text-field";
const _c0 = ["autosize"];
/**
 * \@title Auto-resizing textarea
 */
export class TextFieldAutosizeTextareaExample {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
    }
    /**
     * @return {?}
     */
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        () => this.autosize.resizeToFitContent(true)));
    }
}
TextFieldAutosizeTextareaExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autosize-textarea-example',
                templateUrl: './text-field-autosize-textarea-example.html',
                styleUrls: ['./text-field-autosize-textarea-example.css'],
            },] },
];
/** @nocollapse */
TextFieldAutosizeTextareaExample.ctorParameters = () => [
    { type: NgZone }
];
TextFieldAutosizeTextareaExample.propDecorators = {
    autosize: [{ type: ViewChild, args: ['autosize',] }]
};
/** @nocollapse */ TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ TextFieldAutosizeTextareaExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autosize = _t.first);
    } }, decls: 22, vars: 2, consts: [["value", "16px", 3, "selectionChange"], ["fontSize", ""], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Font size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0, 1);
        i0.ɵɵlistener("selectionChange", function TextFieldAutosizeTextareaExample_Template_mat_select_selectionChange_3_listener() { return ctx.triggerResize(); });
        i0.ɵɵelementStart(5, "mat-option", 2);
        i0.ɵɵtext(6, "10px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-option", 3);
        i0.ɵɵtext(8, "12px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-option", 4);
        i0.ɵɵtext(10, "14px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-option", 5);
        i0.ɵɵtext(12, "16px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-option", 6);
        i0.ɵɵtext(14, "18px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-option", 7);
        i0.ɵɵtext(16, "20px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field");
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Autosize textarea");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "textarea", 8, 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r6 = i0.ɵɵreference(4);
        i0.ɵɵadvance(17);
        i0.ɵɵstyleProp("font-size", _r6.value);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.MatInput, i5.CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autosize-textarea-example',
                templateUrl: './text-field-autosize-textarea-example.html',
                styleUrls: ['./text-field-autosize-textarea-example.css'],
            }]
    }], function () { return [{ type: i0.NgZone }]; }, { autosize: [{
            type: ViewChild,
            args: ['autosize']
        }] }); })();
if (false) {
    /** @type {?} */
    TextFieldAutosizeTextareaExample.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    TextFieldAutosizeTextareaExample.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUMzQyxZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7Ozs7SUFJdkMsYUFBYTtRQUNYLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsV0FBVyxFQUFFLDZDQUE2QztnQkFDMUQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7YUFDMUQ7Ozs7WUFSa0IsTUFBTTs7O3VCQVl0QixTQUFTLFNBQUMsVUFBVTs7Z0hBSFYsZ0NBQWdDO3FFQUFoQyxnQ0FBZ0M7Ozs7OztRQ1Y3QyxzQ0FDRTtRQUFBLGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQyx3Q0FDRTtRQURpQyxxSUFBbUIsbUJBQWUsSUFBQztRQUNwRSxxQ0FBeUI7UUFBQSxvQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHFDQUF5QjtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDMUMscUNBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUMxQyxzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDMUMsc0NBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUM1QyxpQkFBYTtRQUNmLGlCQUFpQjtRQUVqQix1Q0FDRTtRQUFBLGtDQUFXO1FBQUEsa0NBQWlCO1FBQUEsaUJBQVk7UUFDeEMsa0NBSTRDO1FBQzlDLGlCQUFpQjs7O1FBUEQsZ0JBQWlDO1FBQWpDLHNDQUFpQzs7a0RERnBDLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsV0FBVyxFQUFFLDZDQUE2QztnQkFDMUQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7YUFDMUQ7O2tCQUlFLFNBQVM7bUJBQUMsVUFBVTs7OztJQUFyQixvREFBcUQ7Ozs7O0lBRnpDLG1EQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVGV4dGFyZWFBdXRvc2l6ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtDb21wb25lbnQsIE5nWm9uZSwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQHRpdGxlIEF1dG8tcmVzaXppbmcgdGV4dGFyZWEgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b3NpemVUZXh0YXJlYUV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICBAVmlld0NoaWxkKCdhdXRvc2l6ZScpIGF1dG9zaXplOiBDZGtUZXh0YXJlYUF1dG9zaXplO1xuXG4gIHRyaWdnZXJSZXNpemUoKSB7XG4gICAgLy8gV2FpdCBmb3IgY2hhbmdlcyB0byBiZSBhcHBsaWVkLCB0aGVuIHRyaWdnZXIgdGV4dGFyZWEgcmVzaXplLlxuICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hdXRvc2l6ZS5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+Rm9udCBzaXplPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICNmb250U2l6ZSB2YWx1ZT1cIjE2cHhcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cInRyaWdnZXJSZXNpemUoKVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTBweFwiPjEwcHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxMnB4XCI+MTJweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE0cHhcIj4xNHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTZweFwiPjE2cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxOHB4XCI+MThweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjIwcHhcIj4yMHB4PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgW3N0eWxlLmZvbnRTaXplXT1cImZvbnRTaXplLnZhbHVlXCI+XG4gIDxtYXQtbGFiZWw+QXV0b3NpemUgdGV4dGFyZWE8L21hdC1sYWJlbD5cbiAgPHRleHRhcmVhIG1hdElucHV0XG4gICAgICAgICAgICBjZGtUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgICAjYXV0b3NpemU9XCJjZGtUZXh0YXJlYUF1dG9zaXplXCJcbiAgICAgICAgICAgIGNka0F1dG9zaXplTWluUm93cz1cIjFcIlxuICAgICAgICAgICAgY2RrQXV0b3NpemVNYXhSb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19