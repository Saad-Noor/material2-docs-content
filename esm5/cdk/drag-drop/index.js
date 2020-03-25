import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkDragDropAxisLockExample } from './cdk-drag-drop-axis-lock/cdk-drag-drop-axis-lock-example';
import { CdkDragDropBoundaryExample } from './cdk-drag-drop-boundary/cdk-drag-drop-boundary-example';
import { CdkDragDropConnectedSortingGroupExample } from './cdk-drag-drop-connected-sorting-group/cdk-drag-drop-connected-sorting-group-example';
import { CdkDragDropConnectedSortingExample } from './cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting-example';
import { CdkDragDropCustomPlaceholderExample } from './cdk-drag-drop-custom-placeholder/cdk-drag-drop-custom-placeholder-example';
import { CdkDragDropCustomPreviewExample } from './cdk-drag-drop-custom-preview/cdk-drag-drop-custom-preview-example';
import { CdkDragDropDelayExample } from './cdk-drag-drop-delay/cdk-drag-drop-delay-example';
import { CdkDragDropDisabledSortingExample } from './cdk-drag-drop-disabled-sorting/cdk-drag-drop-disabled-sorting-example';
import { CdkDragDropDisabledExample } from './cdk-drag-drop-disabled/cdk-drag-drop-disabled-example';
import { CdkDragDropEnterPredicateExample } from './cdk-drag-drop-enter-predicate/cdk-drag-drop-enter-predicate-example';
import { CdkDragDropFreeDragPositionExample } from './cdk-drag-drop-free-drag-position/cdk-drag-drop-free-drag-position-example';
import { CdkDragDropHandleExample } from './cdk-drag-drop-handle/cdk-drag-drop-handle-example';
import { CdkDragDropHorizontalSortingExample } from './cdk-drag-drop-horizontal-sorting/cdk-drag-drop-horizontal-sorting-example';
import { CdkDragDropOverviewExample } from './cdk-drag-drop-overview/cdk-drag-drop-overview-example';
import { CdkDragDropRootElementExample } from './cdk-drag-drop-root-element/cdk-drag-drop-root-element-example';
import { CdkDragDropSortingExample } from './cdk-drag-drop-sorting/cdk-drag-drop-sorting-example';
import * as i0 from "@angular/core";
export { CdkDragDropAxisLockExample, CdkDragDropBoundaryExample, CdkDragDropConnectedSortingExample, CdkDragDropConnectedSortingGroupExample, CdkDragDropCustomPlaceholderExample, CdkDragDropCustomPreviewExample, CdkDragDropDelayExample, CdkDragDropDisabledExample, CdkDragDropDisabledSortingExample, CdkDragDropEnterPredicateExample, CdkDragDropFreeDragPositionExample, CdkDragDropHandleExample, CdkDragDropHorizontalSortingExample, CdkDragDropOverviewExample, CdkDragDropRootElementExample, CdkDragDropSortingExample, };
var EXAMPLES = [
    CdkDragDropAxisLockExample,
    CdkDragDropBoundaryExample,
    CdkDragDropConnectedSortingExample,
    CdkDragDropConnectedSortingGroupExample,
    CdkDragDropCustomPlaceholderExample,
    CdkDragDropCustomPreviewExample,
    CdkDragDropDelayExample,
    CdkDragDropDisabledExample,
    CdkDragDropDisabledSortingExample,
    CdkDragDropEnterPredicateExample,
    CdkDragDropFreeDragPositionExample,
    CdkDragDropHandleExample,
    CdkDragDropHorizontalSortingExample,
    CdkDragDropOverviewExample,
    CdkDragDropRootElementExample,
    CdkDragDropSortingExample,
];
var CdkDragDropExamplesModule = /** @class */ (function () {
    function CdkDragDropExamplesModule() {
    }
    CdkDragDropExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkDragDropExamplesModule });
    CdkDragDropExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkDragDropExamplesModule_Factory(t) { return new (t || CdkDragDropExamplesModule)(); }, imports: [[
                DragDropModule,
                OverlayModule,
                CommonModule,
            ]] });
    return CdkDragDropExamplesModule;
}());
export { CdkDragDropExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkDragDropExamplesModule, { declarations: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample], imports: [DragDropModule,
        OverlayModule,
        CommonModule], exports: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    DragDropModule,
                    OverlayModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNMLDBCQUEwQixFQUMzQixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFDTCx1Q0FBdUMsRUFDeEMsTUFBTSx1RkFBdUYsQ0FBQztBQUMvRixPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sMkVBQTJFLENBQUM7QUFDbkYsT0FBTyxFQUNMLG1DQUFtQyxFQUNwQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMxRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0seUVBQXlFLENBQUM7QUFDakYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLGdDQUFnQyxFQUNqQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQ0wsbUNBQW1DLEVBQ3BDLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOztBQUVoRyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLDBCQUEwQixFQUMxQixrQ0FBa0MsRUFDbEMsdUNBQXVDLEVBQ3ZDLG1DQUFtQyxFQUNuQywrQkFBK0IsRUFDL0IsdUJBQXVCLEVBQ3ZCLDBCQUEwQixFQUMxQixpQ0FBaUMsRUFDakMsZ0NBQWdDLEVBQ2hDLGtDQUFrQyxFQUNsQyx3QkFBd0IsRUFDeEIsbUNBQW1DLEVBQ25DLDBCQUEwQixFQUMxQiw2QkFBNkIsRUFDN0IseUJBQXlCLEdBQzFCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHlCQUF5QjtDQUMxQixDQUFDO0FBRUY7SUFBQTtLQVdDO2lFQURZLHlCQUF5QjtxSUFBekIseUJBQXlCLGtCQVQzQjtnQkFDUCxjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsWUFBWTthQUNiO29DQXBGSDtDQTBGQyxBQVhELElBV0M7U0FEWSx5QkFBeUI7d0ZBQXpCLHlCQUF5QixtQkE1QnBDLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsK0JBQStCO1FBQy9CLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQywwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLHlCQUF5QixhQUt2QixjQUFjO1FBQ2QsYUFBYTtRQUNiLFlBQVksYUF0QmQsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBQ3ZDLG1DQUFtQztRQUNuQywrQkFBK0I7UUFDL0IsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLGtDQUFrQztRQUNsQyx3QkFBd0I7UUFDeEIsbUNBQW1DO1FBQ25DLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IseUJBQXlCO2tEQWFkLHlCQUF5QjtjQVZyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wQXhpc0xvY2tFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1heGlzLWxvY2svY2RrLWRyYWctZHJvcC1heGlzLWxvY2stZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wQm91bmRhcnlFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtYm91bmRhcnkvY2RrLWRyYWctZHJvcC1ib3VuZGFyeS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEN1c3RvbVBsYWNlaG9sZGVyRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtY3VzdG9tLXBsYWNlaG9sZGVyL2Nkay1kcmFnLWRyb3AtY3VzdG9tLXBsYWNlaG9sZGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QcmV2aWV3RXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXcvY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BEZWxheUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1kZWxheS9jZGstZHJhZy1kcm9wLWRlbGF5LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BEaXNhYmxlZEV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1kaXNhYmxlZC9jZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BFbnRlclByZWRpY2F0ZUV4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wRnJlZURyYWdQb3NpdGlvbkV4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BIYW5kbGVFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtaGFuZGxlL2Nkay1kcmFnLWRyb3AtaGFuZGxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BIb3Jpem9udGFsU29ydGluZ0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy9jZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1vdmVydmlldy9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BSb290RWxlbWVudEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC9jZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BTb3J0aW5nRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1zb3J0aW5nLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRGVsYXlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIYW5kbGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BPdmVydmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka0RyYWdEcm9wQXhpc0xvY2tFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEJvdW5kYXJ5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nR3JvdXBFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVBsYWNlaG9sZGVyRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QcmV2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEZWxheUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wSG9yaXpvbnRhbFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BSb290RWxlbWVudEV4YW1wbGUsXG4gIENka0RyYWdEcm9wU29ydGluZ0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==