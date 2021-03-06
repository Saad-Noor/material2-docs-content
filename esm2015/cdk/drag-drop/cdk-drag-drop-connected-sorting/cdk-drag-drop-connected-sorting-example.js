/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropConnectedSortingExample_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r8);
} }
function CdkDragDropConnectedSortingExample_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r9);
} }
const _c0 = function (a0) { return [a0]; };
/**
 * \@title Drag&Drop connected sorting
 */
export class CdkDragDropConnectedSortingExample {
    constructor() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropConnectedSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-connected-sorting-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropConnectedSortingExample.ɵfac = function CdkDragDropConnectedSortingExample_Factory(t) { return new (t || CdkDragDropConnectedSortingExample)(); };
/** @nocollapse */ CdkDragDropConnectedSortingExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropConnectedSortingExample, selectors: [["cdk-drag-drop-connected-sorting-example"]], decls: 12, vars: 10, consts: [[1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["doneList", "cdkDropList"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropConnectedSortingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h2");
        i0.ɵɵtext(2, "To do");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1, 2);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(5, CdkDragDropConnectedSortingExample_div_5_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 0);
        i0.ɵɵelementStart(7, "h2");
        i0.ɵɵtext(8, "Done");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 1, 4);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(11, CdkDragDropConnectedSortingExample_div_11_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r4 = i0.ɵɵreference(4);
        const _r6 = i0.ɵɵreference(10);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(6, _c0, _r6));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.todo);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cdkDropListData", ctx.done)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(8, _c0, _r4));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.done);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropConnectedSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-connected-sorting-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropConnectedSortingExample.prototype.todo;
    /** @type {?} */
    CdkDragDropConnectedSortingExample.prototype.done;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztJQ1NuRiw4QkFBMkQ7SUFBQSxZQUFRO0lBQUEsaUJBQU07OztJQUFkLGVBQVE7SUFBUiw2QkFBUTs7O0lBY25FLDhCQUEyRDtJQUFBLFlBQVE7SUFBQSxpQkFBTTs7O0lBQWQsZUFBUTtJQUFSLDZCQUFROzs7Ozs7QURidkUsTUFBTSxPQUFPLGtDQUFrQztJQUwvQztRQU1FLFNBQUksR0FBRztZQUNMLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsU0FBUztZQUNULGFBQWE7U0FDZCxDQUFDO1FBRUYsU0FBSSxHQUFHO1lBQ0wsUUFBUTtZQUNSLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLFVBQVU7U0FDWCxDQUFDO0tBWUg7Ozs7O0lBVkMsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0MsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDTCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFDcEIsS0FBSyxDQUFDLGFBQWEsRUFDbkIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxXQUFXLEVBQUUsOENBQThDO2dCQUMzRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQzthQUMzRDs7b0hBQ1ksa0NBQWtDO3VFQUFsQyxrQ0FBa0M7UUNYL0MsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLHFCQUFLO1FBQUEsaUJBQUs7UUFFZCxpQ0FPRTtRQURBLDRJQUFzQixnQkFBWSxJQUFDO1FBQ25DLG1GQUEyRDtRQUM3RCxpQkFBTTtRQUNSLGlCQUFNO1FBRU4sOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLG9CQUFJO1FBQUEsaUJBQUs7UUFFYixpQ0FPRTtRQURBLDRJQUFzQixnQkFBWSxJQUFDO1FBQ25DLHFGQUEyRDtRQUM3RCxpQkFBTTtRQUNSLGlCQUFNOzs7O1FBcEJGLGVBQXdCO1FBQXhCLDBDQUF3QiwyREFBQTtRQUlDLGVBQXlCO1FBQXpCLGtDQUF5QjtRQVVsRCxlQUF3QjtRQUF4QiwwQ0FBd0IsMkRBQUE7UUFJQyxlQUF5QjtRQUF6QixrQ0FBeUI7O2tERGJ6QyxrQ0FBa0M7Y0FMOUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFdBQVcsRUFBRSw4Q0FBOEM7Z0JBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO2FBQzNEOzs7O0lBRUMsa0RBS0U7O0lBRUYsa0RBTUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGNvbm5lY3RlZCBzb3J0aW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlIHtcbiAgdG9kbyA9IFtcbiAgICAnR2V0IHRvIHdvcmsnLFxuICAgICdQaWNrIHVwIGdyb2NlcmllcycsXG4gICAgJ0dvIGhvbWUnLFxuICAgICdGYWxsIGFzbGVlcCdcbiAgXTtcblxuICBkb25lID0gW1xuICAgICdHZXQgdXAnLFxuICAgICdCcnVzaCB0ZWV0aCcsXG4gICAgJ1Rha2UgYSBzaG93ZXInLFxuICAgICdDaGVjayBlLW1haWwnLFxuICAgICdXYWxrIGRvZydcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aDI+VG8gZG88L2gyPlxuXG4gIDxkaXZcbiAgICBjZGtEcm9wTGlzdFxuICAgICN0b2RvTGlzdD1cImNka0Ryb3BMaXN0XCJcbiAgICBbY2RrRHJvcExpc3REYXRhXT1cInRvZG9cIlxuICAgIFtjZGtEcm9wTGlzdENvbm5lY3RlZFRvXT1cIltkb25lTGlzdF1cIlxuICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvZG9cIiBjZGtEcmFnPnt7aXRlbX19PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aDI+RG9uZTwvaDI+XG5cbiAgPGRpdlxuICAgIGNka0Ryb3BMaXN0XG4gICAgI2RvbmVMaXN0PVwiY2RrRHJvcExpc3RcIlxuICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiZG9uZVwiXG4gICAgW2Nka0Ryb3BMaXN0Q29ubmVjdGVkVG9dPVwiW3RvZG9MaXN0XVwiXG4gICAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZG9uZVwiIGNka0RyYWc+e3tpdGVtfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuIl19