import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * @title Drag&Drop boundary
 */
var CdkDragDropBoundaryExample = /** @class */ (function () {
    function CdkDragDropBoundaryExample() {
    }
    CdkDragDropBoundaryExample.ɵfac = function CdkDragDropBoundaryExample_Factory(t) { return new (t || CdkDragDropBoundaryExample)(); };
    CdkDragDropBoundaryExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropBoundaryExample, selectors: [["cdk-drag-drop-boundary-example"]], decls: 3, vars: 0, consts: [[1, "example-boundary"], ["cdkDragBoundary", ".example-boundary", "cdkDrag", "", 1, "example-box"]], template: function CdkDragDropBoundaryExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2, " I can only be dragged within the dotted container ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}"] });
    return CdkDragDropBoundaryExample;
}());
export { CdkDragDropBoundaryExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropBoundaryExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-boundary-example',
                templateUrl: 'cdk-drag-drop-boundary-example.html',
                styleUrls: ['cdk-drag-drop-boundary-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1ib3VuZGFyeS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWJvdW5kYXJ5L2Nkay1kcmFnLWRyb3AtYm91bmRhcnktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1ib3VuZGFyeS9jZGstZHJhZy1kcm9wLWJvdW5kYXJ5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBSzBDO3dHQUE3QiwwQkFBMEI7bUVBQTFCLDBCQUEwQjtZQ1Z2Qyw4QkFDRTtZQUFBLDhCQUNFO1lBQUEsbUVBQ0Y7WUFBQSxpQkFBTTtZQUNSLGlCQUFNOztxQ0RKTjtDQVUwQyxBQUwxQyxJQUswQztTQUE3QiwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBib3VuZGFyeVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWJvdW5kYXJ5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtYm91bmRhcnktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtYm91bmRhcnktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWJvdW5kYXJ5XCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWdCb3VuZGFyeT1cIi5leGFtcGxlLWJvdW5kYXJ5XCIgY2RrRHJhZz5cbiAgICBJIGNhbiBvbmx5IGJlIGRyYWdnZWQgd2l0aGluIHRoZSBkb3R0ZWQgY29udGFpbmVyXG4gIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==