/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/dialog/dialog-overview/dialog-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/common";
function DialogOverviewExample_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1, " You chose: ");
    i0.ɵɵelementStart(2, "i");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.animal);
} }
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.animal;
    /** @type {?} */
    DialogData.prototype.name;
}
/**
 * \@title Dialog Overview
 */
export class DialogOverviewExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The dialog was closed');
            this.animal = result;
        }));
    }
}
DialogOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
                styleUrls: ['dialog-overview-example.css'],
            },] },
];
/** @nocollapse */
DialogOverviewExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
/** @nocollapse */ DialogOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 10, vars: 2, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ol");
        i0.ɵɵelementStart(1, "li");
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "What's your name?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "input", 0);
        i0.ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "li");
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵlistener("click", function DialogOverviewExample_Template_button_click_7_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(8, "Pick one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, DialogOverviewExample_li_9_Template, 4, 1, "li", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.name);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.animal);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatButton, i6.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogOverviewExample, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
                styleUrls: ['dialog-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
if (false) {
    /** @type {?} */
    DialogOverviewExample.prototype.animal;
    /** @type {?} */
    DialogOverviewExample.prototype.name;
    /** @type {?} */
    DialogOverviewExample.prototype.dialog;
}
export class DialogOverviewExampleDialog {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            },] },
];
/** @nocollapse */
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/** @nocollapse */ DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ DialogOverviewExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4, "What's your favorite animal?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field");
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Favorite Animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 2);
        i0.ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_8_listener($event) { return ctx.data.animal = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "button", 4);
        i0.ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_10_listener() { return ctx.onNoClick(); });
        i0.ɵɵtext(11, "No Thanks");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 5);
        i0.ɵɵtext(13, "Ok");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.data.animal);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("mat-dialog-close", ctx.data.animal);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i1.MatDialogActions, i5.MatButton, i1.MatDialogClose], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogOverviewExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.dialogRef;
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNTaEYsMEJBQ0U7SUFBQSw0QkFBVztJQUFBLHlCQUFHO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQzlCLGlCQUFLOzs7SUFEVyxlQUFVO0lBQVYsbUNBQVU7Ozs7O0FEUjVCLGdDQUdDOzs7SUFGQyw0QkFBZTs7SUFDZiwwQkFBYTs7Ozs7QUFXZixNQUFNLE9BQU8scUJBQXFCOzs7O0lBS2hDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7O0lBRXhDLFVBQVU7O2NBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQzlELEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7U0FDN0MsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztZQWRPLFNBQVM7OzBGQWVKLHFCQUFxQjswREFBckIscUJBQXFCO1FDaEJsQywwQkFDRTtRQUFBLDBCQUNFO1FBQUEsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLGlDQUFpQjtRQUFBLGlCQUFZO1FBQ3hDLGdDQUNGO1FBRGtCLDRJQUFrQjtRQUFsQyxpQkFDRjtRQUFBLGlCQUFpQjtRQUNuQixpQkFBSztRQUNMLDBCQUNFO1FBQUEsaUNBQWlEO1FBQXZCLGtHQUFTLGdCQUFZLElBQUM7UUFBQyx3QkFBUTtRQUFBLGlCQUFTO1FBQ3BFLGlCQUFLO1FBQ0wsb0VBQ0U7UUFFSixpQkFBSzs7UUFUaUIsZUFBa0I7UUFBbEIsa0NBQWtCO1FBTWxDLGVBQWM7UUFBZCxpQ0FBYzs7a0RETVAscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUdDLHVDQUFlOztJQUNmLHFDQUFhOztJQUVELHVDQUF3Qjs7QUFvQnRDLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBRXRDLFlBQ1MsU0FBb0QsRUFDM0IsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7Ozs7SUFFdEQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQ7Ozs7WUF2Q2tCLFlBQVk7NENBNEMxQixNQUFNLFNBQUMsZUFBZTs7c0dBSmQsMkJBQTJCLDhEQUk1QixlQUFlO2dFQUpkLDJCQUEyQjtRRXpDeEMsNkJBQXFCO1FBQUEsWUFBZ0I7UUFBQSxpQkFBSztRQUMxQyw4QkFDRTtRQUFBLHlCQUFHO1FBQUEsNENBQTRCO1FBQUEsaUJBQUk7UUFDbkMsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLCtCQUFlO1FBQUEsaUJBQVk7UUFDdEMsZ0NBQ0Y7UUFEa0IseUpBQXlCO1FBQXpDLGlCQUNGO1FBQUEsaUJBQWlCO1FBQ25CLGlCQUFNO1FBQ04sOEJBQ0U7UUFBQSxrQ0FBeUM7UUFBdEIseUdBQVMsZUFBVyxJQUFDO1FBQUMsMEJBQVM7UUFBQSxpQkFBUztRQUMzRCxrQ0FBb0U7UUFBQSxtQkFBRTtRQUFBLGlCQUFTO1FBQ2pGLGlCQUFNOztRQVhlLGVBQWdCO1FBQWhCLCtDQUFnQjtRQUtqQixlQUF5QjtRQUF6Qix5Q0FBeUI7UUFLeEIsZUFBZ0M7UUFBaEMsa0RBQWdDOztrREYrQnhDLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQzthQUNuRDs7c0JBS0ksTUFBTTt1QkFBQyxlQUFlOzs7O0lBRHZCLGdEQUEyRDs7SUFDM0QsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIERpYWxvZyBPdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlIHtcblxuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHtuYW1lOiB0aGlzLm5hbWUsIGFuaW1hbDogdGhpcy5hbmltYWx9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcbiAgICAgIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7fVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsIjxvbD5cbiAgPGxpPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+V2hhdCdzIHlvdXIgbmFtZT88L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+UGljayBvbmU8L2J1dHRvbj5cbiAgPC9saT5cbiAgPGxpICpuZ0lmPVwiYW5pbWFsXCI+XG4gICAgWW91IGNob3NlOiA8aT57e2FuaW1hbH19PC9pPlxuICA8L2xpPlxuPC9vbD5cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkhpIHt7ZGF0YS5uYW1lfX08L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxwPldoYXQncyB5b3VyIGZhdm9yaXRlIGFuaW1hbD88L3A+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIEFuaW1hbDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImRhdGEuYW5pbWFsXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uTm9DbGljaygpXCI+Tm8gVGhhbmtzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJkYXRhLmFuaW1hbFwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=