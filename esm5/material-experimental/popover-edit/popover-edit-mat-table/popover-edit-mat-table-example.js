import { __extends } from "tslib";
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/cdk-experimental/popover-edit";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material-experimental/popover-edit";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/common";
import * as i12 from "@angular/material/list";
function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var _r75 = i0.ɵɵreference(2); var ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.onSubmitWeight(element_r74, _r75); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.weightValues.for(element_r74).value = $event; });
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r74 = ctx.$implicit;
    var ctx_r59 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r59.weightValues.for(element_r74).value);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", element_r74.weight);
} }
function PopoverEditMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 22);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r83); var element_r79 = i0.ɵɵnextContext().$implicit; var ctx_r81 = i0.ɵɵnextContext(); return ctx_r81.goodJob(element_r79); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r83); var element_r79 = i0.ɵɵnextContext().$implicit; var ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.badJob(element_r79); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "thumb_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r79 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r79.position, " ");
} }
function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    var _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementStart(2, "mat-checkbox", 23);
    i0.ɵɵlistener("ngModelChange", function PopoverEditMatTableExample_th_7_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r87); var ctx_r86 = i0.ɵɵnextContext(); return ctx_r86.nameEditEnabled = $event; });
    i0.ɵɵtext(3, "Edit enabled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r62 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r62.nameEditEnabled);
} }
function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r95); var _r92 = i0.ɵɵreference(2); var element_r88 = i0.ɵɵnextContext().$implicit; var ctx_r93 = i0.ɵɵnextContext(); return ctx_r93.onSubmitName(element_r88, _r92); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r95); var element_r88 = i0.ɵɵnextContext().$implicit; var ctx_r96 = i0.ɵɵnextContext(); return ctx_r96.nameValues.for(element_r88).value = $event; });
    i0.ɵɵelementStart(3, "h2", 27);
    i0.ɵɵtext(4, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵelementStart(6, "mat-form-field");
    i0.ɵɵelement(7, "input", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 29);
    i0.ɵɵelementStart(9, "button", 30);
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 31);
    i0.ɵɵtext(12, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 32);
    i0.ɵɵtext(14, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r88 = i0.ɵɵnextContext().$implicit;
    var ctx_r90 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r90.nameValues.for(element_r88).value);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", element_r88.name);
} }
function PopoverEditMatTableExample_td_8_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PopoverEditMatTableExample_td_8_ng_container_4_span_1_Template, 4, 0, "span", 21);
    i0.ɵɵelementContainerEnd();
} }
function PopoverEditMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_8_ng_container_4_Template, 2, 0, "ng-container", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r88 = ctx.$implicit;
    var _r89 = i0.ɵɵreference(3);
    var ctx_r63 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matPopoverEdit", _r89)("matPopoverEditDisabled", !ctx_r63.nameEditEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r88.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r63.nameEditEnabled);
} }
function PopoverEditMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Type ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var type_r106 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r106);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", type_r106, " ");
} }
var _c0 = function (a0) { return [a0]; };
function PopoverEditMatTableExample_td_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 36, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r109); var _r104 = i0.ɵɵreference(2); var element_r100 = i0.ɵɵnextContext().$implicit; var ctx_r107 = i0.ɵɵnextContext(); return ctx_r107.onSubmitType(element_r100, _r104); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r109); var element_r100 = i0.ɵɵnextContext().$implicit; var ctx_r110 = i0.ɵɵnextContext(); return ctx_r110.typeValues.for(element_r100).value = $event; });
    i0.ɵɵelementStart(3, "div", 37);
    i0.ɵɵelementStart(4, "mat-selection-list", 38);
    i0.ɵɵlistener("selectionChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_mat_selection_list_selectionChange_4_listener() { i0.ɵɵrestoreView(_r109); var _r104 = i0.ɵɵreference(2); return _r104.ngSubmit.emit(); });
    i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r100 = i0.ɵɵnextContext().$implicit;
    var ctx_r102 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r102.typeValues.for(element_r100).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("multiple", false)("ngModel", i0.ɵɵpureFunction1(4, _c0, element_r100.type));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r102.TYPES);
} }
function PopoverEditMatTableExample_td_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_drop_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_11_ng_template_2_Template, 6, 6, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_11_span_4_Template, 4, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r100 = ctx.$implicit;
    var _r101 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r101);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r100.type, " ");
} }
function PopoverEditMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 41);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_14_span_2_Template, 4, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r114 = ctx.$implicit;
    i0.ɵɵnextContext();
    var _r58 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r58)("matPopoverEditContext", element_r114);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r114.weight, " ");
} }
function PopoverEditMatTableExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r116 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r116.symbol, " ");
} }
function PopoverEditMatTableExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 42);
} }
function PopoverEditMatTableExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 43);
} }
function PopoverEditMatTableExample_th_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Fantasy Counterparts ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var fantasyElement_r124 = ctx.$implicit;
    i0.ɵɵproperty("value", fantasyElement_r124);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fantasyElement_r124, " ");
} }
function PopoverEditMatTableExample_td_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r127); var _r122 = i0.ɵɵreference(2); var element_r118 = i0.ɵɵnextContext().$implicit; var ctx_r125 = i0.ɵɵnextContext(); return ctx_r125.onSubmitFantasyCounterparts(element_r118, _r122); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r127); var element_r118 = i0.ɵɵnextContext().$implicit; var ctx_r128 = i0.ɵɵnextContext(); return ctx_r128.fantasyValues.for(element_r118).value = $event; });
    i0.ɵɵelementStart(3, "div", 37);
    i0.ɵɵelementStart(4, "mat-selection-list", 45);
    i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 29);
    i0.ɵɵelementStart(7, "button", 30);
    i0.ɵɵtext(8, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 31);
    i0.ɵɵtext(10, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r118 = i0.ɵɵnextContext().$implicit;
    var ctx_r120 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r120.fantasyValues.for(element_r118).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r118.fantasyCounterparts);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r120.FANTASY_ELEMENTS);
} }
function PopoverEditMatTableExample_td_22_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_drop_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_22_ng_template_2_Template, 11, 3, "ng-template", null, 44, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_22_span_4_Template, 4, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r118 = ctx.$implicit;
    var _r119 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r119);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r118.fantasyCounterparts.join(", "), " ");
} }
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', type: 'Nonmetal', weight: 1.0079, symbol: 'H',
        fantasyCounterparts: ['Fire', 'Wind', 'Light'] },
    { position: 2, name: 'Helium', type: 'Nonmetal', weight: 4.0026, symbol: 'He',
        fantasyCounterparts: ['Wind', 'Light'] },
    { position: 3, name: 'Lithium', type: 'Metal', weight: 6.941, symbol: 'Li',
        fantasyCounterparts: [] },
    { position: 4, name: 'Beryllium', type: 'Metal', weight: 9.0122, symbol: 'Be',
        fantasyCounterparts: [] },
    { position: 5, name: 'Boron', type: 'Semimetal', weight: 10.811, symbol: 'B',
        fantasyCounterparts: [] },
    { position: 6, name: 'Carbon', type: 'Nonmetal', weight: 12.0107, symbol: 'C',
        fantasyCounterparts: ['Earth', 'Dark'] },
    { position: 7, name: 'Nitrogen', type: 'Nonmetal', weight: 14.0067, symbol: 'N',
        fantasyCounterparts: ['Wind'] },
    { position: 8, name: 'Oxygen', type: 'Nonmetal', weight: 15.9994, symbol: 'O',
        fantasyCounterparts: ['Fire', 'Water', 'Wind'] },
    { position: 9, name: 'Fluorine', type: 'Nonmetal', weight: 18.9984, symbol: 'F',
        fantasyCounterparts: [] },
    { position: 10, name: 'Neon', type: 'Nonmetal', weight: 20.1797, symbol: 'Ne',
        fantasyCounterparts: ['Light'] },
    { position: 11, name: 'Sodium', type: 'Metal', weight: 22.9897, symbol: 'Na',
        fantasyCounterparts: ['Earth', 'Water'] },
    { position: 12, name: 'Magnesium', type: 'Metal', weight: 24.305, symbol: 'Mg',
        fantasyCounterparts: [] },
    { position: 13, name: 'Aluminum', type: 'Metal', weight: 26.9815, symbol: 'Al',
        fantasyCounterparts: [] },
    { position: 14, name: 'Silicon', type: 'Semimetal', weight: 28.0855, symbol: 'Si',
        fantasyCounterparts: [] },
    { position: 15, name: 'Phosphorus', type: 'Nonmetal', weight: 30.9738, symbol: 'P',
        fantasyCounterparts: [] },
    { position: 16, name: 'Sulfur', type: 'Nonmetal', weight: 32.065, symbol: 'S',
        fantasyCounterparts: [] },
    { position: 17, name: 'Chlorine', type: 'Nonmetal', weight: 35.453, symbol: 'Cl',
        fantasyCounterparts: [] },
    { position: 18, name: 'Argon', type: 'Nonmetal', weight: 39.948, symbol: 'Ar',
        fantasyCounterparts: [] },
    { position: 19, name: 'Potassium', type: 'Metal', weight: 39.0983, symbol: 'K',
        fantasyCounterparts: [] },
    { position: 20, name: 'Calcium', type: 'Metal', weight: 40.078, symbol: 'Ca',
        fantasyCounterparts: [] },
];
var TYPES = ['Metal', 'Semimetal', 'Nonmetal'];
var FANTASY_ELEMENTS = ['Earth', 'Water', 'Wind', 'Fire', 'Light', 'Dark'];
/**
 * @title Material Popover Edit on a Material data-table
 */
var PopoverEditMatTableExample = /** @class */ (function () {
    function PopoverEditMatTableExample(_snackBar) {
        this._snackBar = _snackBar;
        this.displayedColumns = ['position', 'name', 'type', 'weight', 'symbol', 'fantasyCounterpart'];
        this.dataSource = new ExampleDataSource();
        this.nameEditEnabled = true;
        this.TYPES = TYPES;
        this.FANTASY_ELEMENTS = FANTASY_ELEMENTS;
        this.nameValues = new FormValueContainer();
        this.weightValues = new FormValueContainer();
        this.typeValues = new FormValueContainer();
        this.fantasyValues = new FormValueContainer();
    }
    PopoverEditMatTableExample.prototype.onSubmitName = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    };
    PopoverEditMatTableExample.prototype.onSubmitWeight = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    };
    PopoverEditMatTableExample.prototype.onSubmitType = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.type = f.value.type[0];
    };
    PopoverEditMatTableExample.prototype.onSubmitFantasyCounterparts = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.fantasyCounterparts = f.value.fantasyCounterparts;
    };
    PopoverEditMatTableExample.prototype.goodJob = function (element) {
        this._snackBar.open("Way to go, " + element.name + "!", undefined, { duration: 2000 });
    };
    PopoverEditMatTableExample.prototype.badJob = function (element) {
        this._snackBar.open("You have failed me for the last time, #" + element.position + ".", undefined, { duration: 2000 });
    };
    PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
    PopoverEditMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 23, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditDisabled", 4, "matCellDef"], ["matColumnDef", "type"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "fantasyCounterpart"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], [3, "ngModel", "ngModelChange"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditDisabled"], ["nameEdit", ""], [4, "ngIf"], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["mat-cell", "", 3, "matPopoverEdit"], ["typeEdit", ""], ["matEditLens", "", "matEditClose", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["mat-edit-fill", ""], ["name", "type", "aria-label", "Element type", 3, "multiple", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""], ["fantasyCounterpartEdit", ""], ["name", "fantasyCounterparts", "aria-label", "Fantasy Element Counterparts", 3, "ngModel"], ["checkboxPosition", "before", 3, "value", 4, "ngFor", "ngForOf"], ["checkboxPosition", "before", 3, "value"]], template: function PopoverEditMatTableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, PopoverEditMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerStart(3, 2);
            i0.ɵɵtemplate(4, PopoverEditMatTableExample_th_4_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_5_Template, 3, 1, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(6, 5);
            i0.ɵɵtemplate(7, PopoverEditMatTableExample_th_7_Template, 4, 1, "th", 3);
            i0.ɵɵtemplate(8, PopoverEditMatTableExample_td_8_Template, 5, 4, "td", 6);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(9, 7);
            i0.ɵɵtemplate(10, PopoverEditMatTableExample_th_10_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 5, 2, "td", 8);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(12, 9);
            i0.ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 3, 3, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(15, 11);
            i0.ɵɵtemplate(16, PopoverEditMatTableExample_th_16_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(17, PopoverEditMatTableExample_td_17_Template, 2, 1, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(18, PopoverEditMatTableExample_tr_18_Template, 1, 0, "tr", 12);
            i0.ɵɵtemplate(19, PopoverEditMatTableExample_tr_19_Template, 1, 0, "tr", 13);
            i0.ɵɵelementContainerStart(20, 14);
            i0.ɵɵtemplate(21, PopoverEditMatTableExample_th_21_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(22, PopoverEditMatTableExample_td_22_Template, 5, 2, "td", 8);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [i2.MatTable, i3.CdkEditable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i5.MatEditLens, i6.MatFormField, i7.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i2.MatHeaderCell, i2.MatCell, i5.MatRowHoverContent, i8.MatButton, i9.MatIcon, i10.MatCheckbox, i5.MatPopoverEdit, i11.NgIf, i5.MatEditRevert, i5.MatEditClose, i5.MatEditOpen, i12.MatSelectionList, i11.NgForOf, i12.MatListOption, i2.MatHeaderRow, i2.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 16%;\n}"] });
    return PopoverEditMatTableExample;
}());
export { PopoverEditMatTableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-mat-table-example',
                styleUrls: ['popover-edit-mat-table-example.css'],
                templateUrl: 'popover-edit-mat-table-example.html',
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Stream of data that is provided to the table. */
        _this.data = new BehaviorSubject(ELEMENT_DATA);
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this.data;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(DataSource));
export { ExampleDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFMUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDN0MsMkJBQ0U7SUFBQSxvQ0FJRTtJQUZFLCtSQUF1QyxtUUFDSixxQ0FBeUIsbUJBRHJCO0lBRXpDLCtCQUNFO0lBQUEsc0NBQ0U7SUFBQSw0QkFDRjtJQUFBLGlCQUFpQjtJQUNuQixpQkFBTTtJQUNSLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFQQSxlQUFtRTtJQUFuRSwyRkFBbUU7SUFHbkMsZUFBMEI7SUFBMUIsNENBQTBCOzs7SUFTaEUsOEJBQXVDO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7OztJQUs5Qyw0QkFDRTtJQUFBLGtDQUNF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UUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRztRQUMxRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3hFLG1CQUFtQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUM7SUFDbkMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3ZFLG1CQUFtQixFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFDO0lBQzVDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtRQUN6RSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3pFLG1CQUFtQixFQUFFLEVBQUUsRUFBQztJQUM1QixFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUk7UUFDNUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxF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O1lBQWhELHVEQUFnRDs7cUNEekk5RDtDQTRIQyxBQXRERCxJQXNEQztTQWpEWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQ7O0FBb0REOzs7Ozs7R0FNRztBQUNIO0lBQXVDLHFDQUEyQjtJQUFsRTtRQUFBLHFFQVVDO1FBVEMsb0RBQW9EO1FBQ3BELFVBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7O0lBUTlELENBQUM7SUFOQyxpR0FBaUc7SUFDakcsbUNBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsc0NBQVUsR0FBVixjQUFjLENBQUM7SUFDakIsd0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBdUMsVUFBVSxHQVVoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Rm9ybVZhbHVlQ29udGFpbmVyfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgRWxlbWVudFR5cGUgPSAnTWV0YWwnIHwgJ1NlbWltZXRhbCcgfCAnTm9ubWV0YWwnO1xuXG5leHBvcnQgdHlwZSBGYW50YXN5RWxlbWVudCA9ICdFYXJ0aCcgfCAnV2F0ZXInIHwgJ1dpbmQnIHwgJ0ZpcmUnIHwgJ0xpZ2h0JyB8ICdEYXJrJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IEVsZW1lbnRUeXBlO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGZhbnRhc3lDb3VudGVycGFydHM6IEZhbnRhc3lFbGVtZW50W107XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydGaXJlJywgJ1dpbmQnLCAnTGlnaHQnXX0sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ1dpbmQnLCAnTGlnaHQnXX0sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgdHlwZTogJ1NlbWltZXRhbCcsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRWFydGgnLCAnRGFyayddfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydXaW5kJ119LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydGaXJlJywgJ1dhdGVyJywgJ1dpbmQnXX0sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnTGlnaHQnXX0sXG4gIHtwb3NpdGlvbjogMTEsIG5hbWU6ICdTb2RpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDIyLjk4OTcsIHN5bWJvbDogJ05hJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRWFydGgnLCAnV2F0ZXInXX0sXG4gIHtwb3NpdGlvbjogMTIsIG5hbWU6ICdNYWduZXNpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDI0LjMwNSwgc3ltYm9sOiAnTWcnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDEzLCBuYW1lOiAnQWx1bWludW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDI2Ljk4MTUsIHN5bWJvbDogJ0FsJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxNCwgbmFtZTogJ1NpbGljb24nLCB0eXBlOiAnU2VtaW1ldGFsJywgd2VpZ2h0OiAyOC4wODU1LCBzeW1ib2w6ICdTaScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTUsIG5hbWU6ICdQaG9zcGhvcnVzJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAzMC45NzM4LCBzeW1ib2w6ICdQJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxNywgbmFtZTogJ0NobG9yaW5lJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAzNS40NTMsIHN5bWJvbDogJ0NsJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxOCwgbmFtZTogJ0FyZ29uJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAzOS45NDgsIHN5bWJvbDogJ0FyJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSycsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMjAsIG5hbWU6ICdDYWxjaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiA0MC4wNzgsIHN5bWJvbDogJ0NhJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbl07XG5cbmNvbnN0IFRZUEVTOiByZWFkb25seSBFbGVtZW50VHlwZVtdID0gWydNZXRhbCcsICdTZW1pbWV0YWwnLCAnTm9ubWV0YWwnXTtcbmNvbnN0IEZBTlRBU1lfRUxFTUVOVFM6IHJlYWRvbmx5IEZhbnRhc3lFbGVtZW50W10gPVxuICAgIFsnRWFydGgnLCAnV2F0ZXInLCAnV2luZCcsICdGaXJlJywgJ0xpZ2h0JywgJ0RhcmsnXTtcblxuLyoqXG4gKiBAdGl0bGUgTWF0ZXJpYWwgUG9wb3ZlciBFZGl0IG9uIGEgTWF0ZXJpYWwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9XG4gICAgICBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAndHlwZScsICd3ZWlnaHQnLCAnc3ltYm9sJywgJ2ZhbnRhc3lDb3VudGVycGFydCddO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG5cbiAgbmFtZUVkaXRFbmFibGVkID0gdHJ1ZTtcblxuICByZWFkb25seSBUWVBFUyA9IFRZUEVTO1xuICByZWFkb25seSBGQU5UQVNZX0VMRU1FTlRTID0gRkFOVEFTWV9FTEVNRU5UUztcblxuICByZWFkb25seSBuYW1lVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgd2VpZ2h0VmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgdHlwZVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IGZhbnRhc3lWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvblN1Ym1pdE5hbWUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50Lm5hbWUgPSBmLnZhbHVlLm5hbWU7XG4gIH1cblxuICBvblN1Ym1pdFdlaWdodChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQud2VpZ2h0ID0gZi52YWx1ZS53ZWlnaHQ7XG4gIH1cblxuICBvblN1Ym1pdFR5cGUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50LnR5cGUgPSBmLnZhbHVlLnR5cGVbMF07XG4gIH1cblxuICBvblN1Ym1pdEZhbnRhc3lDb3VudGVycGFydHMoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHMgPSBmLnZhbHVlLmZhbnRhc3lDb3VudGVycGFydHM7XG4gIH1cblxuICBnb29kSm9iKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oYFdheSB0byBnbywgJHtlbGVtZW50Lm5hbWV9IWAsIHVuZGVmaW5lZCwge2R1cmF0aW9uOiAyMDAwfSk7XG4gIH1cblxuICBiYWRKb2IoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihgWW91IGhhdmUgZmFpbGVkIG1lIGZvciB0aGUgbGFzdCB0aW1lLCAjJHtlbGVtZW50LnBvc2l0aW9ufS5gLCB1bmRlZmluZWQsXG4gICAgICAgIHtkdXJhdGlvbjogMjAwMH0pO1xuICB9XG59XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgdG8gcHJvdmlkZSB3aGF0IGRhdGEgc2hvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSB0YWJsZS4gTm90ZSB0aGF0IHRoZSBkYXRhIHNvdXJjZVxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxuICogdGhlIHVuZGVybHlpbmcgZGF0YS4gSW5zdGVhZCwgaXQgb25seSBuZWVkcyB0byB0YWtlIHRoZSBkYXRhIGFuZCBzZW5kIHRoZSB0YWJsZSBleGFjdGx5IHdoYXRcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+IHtcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJpb2RpY0VsZW1lbnRbXT4oRUxFTUVOVF9EQVRBKTtcblxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJpb2RpY0VsZW1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge31cbn1cbiIsIjx0YWJsZSBjbGFzcz1cImV4YW1wbGUtdGFibGVcIiBtYXQtdGFibGUgZWRpdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuICA8IS0tXG4gICAgVGhpcyBlZGl0IGxlbnMgaXMgc3BlY2lmaWVkIG91dHNpZGUgb2YgdGhlIGNlbGwgYW5kIG11c3QgZXhwbGljaXRseSBkZWNsYXJlXG4gICAgaXRzIGNvbnRleHQuIEl0IGNvdWxkIGJlIHJldXNlZCBpbiBtdWx0aXBsZSBjZWxscy5cbiAgLS0+XG4gIDxuZy10ZW1wbGF0ZSAjd2VpZ2h0RWRpdCBsZXQtZWxlbWVudD5cbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0V2VpZ2h0KGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJ3ZWlnaHRWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgIDxkaXYgbWF0LWVkaXQtY29udGVudD5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFtuZ01vZGVsXT1cImVsZW1lbnQud2VpZ2h0XCIgbmFtZT1cIndlaWdodFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTm8uIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC5wb3NpdGlvbn19XG5cbiAgICAgIDwhLS0gUm93IGhvdmVyIGNvbnRlbnQgaW4gYSBub24tZWRpdCBjZWxsLiAtLT5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJnb29kSm9iKGVsZW1lbnQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX3VwPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJiYWRKb2IoZWxlbWVudClcIj5cbiAgICAgICAgICA8bWF0LWljb24+dGh1bWJfZG93bjwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICBOYW1lXG4gICAgICA8bWF0LWNoZWNrYm94XG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJuYW1lRWRpdEVuYWJsZWRcIj5FZGl0IGVuYWJsZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0RGlzYWJsZWRdPVwiIW5hbWVFZGl0RW5hYmxlZFwiPlxuICAgICAge3tlbGVtZW50Lm5hbWV9fVxuICAgICAgXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjbmFtZUVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXROYW1lKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwibmFtZVZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgICAgIDxoMiBtYXQtZWRpdC10aXRsZT5OYW1lPC9oMj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtY29udGVudD5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWFjdGlvbnM+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRDbG9zZT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYW1lRWRpdEVuYWJsZWRcIj5cbiAgICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gVHlwZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwidHlwZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFR5cGUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ0eXBlRWRpdFwiPlxuICAgICAge3tlbGVtZW50LnR5cGV9fVxuXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdHlwZUVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICBtYXRFZGl0Q2xvc2VcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0VHlwZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cInR5cGVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW211bHRpcGxlXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cIltlbGVtZW50LnR5cGVdXCJcbiAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwiZi5uZ1N1Ym1pdC5lbWl0KClcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVsZW1lbnQgdHlwZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IHR5cGUgb2YgVFlQRVNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHlwZVwiPlxuICAgICAgICAgICAgICAgICAge3t0eXBlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1saXN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuICAgICAgXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gIDwhLS0gRmFudGFzeSBDb3VudGVycGFydHMgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZhbnRhc3lDb3VudGVycGFydFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEZhbnRhc3kgQ291bnRlcnBhcnRzIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwiZmFudGFzeUNvdW50ZXJwYXJ0RWRpdFwiPlxuICAgICAge3tlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHMuam9pbignLCAnKX19XG5cbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICNmYW50YXN5Q291bnRlcnBhcnRFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0RmFudGFzeUNvdW50ZXJwYXJ0cyhlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cImZhbnRhc3lWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW25nTW9kZWxdPVwiZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGYW50YXN5IEVsZW1lbnQgQ291bnRlcnBhcnRzXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1saXN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZmFudGFzeUVsZW1lbnQgb2YgRkFOVEFTWV9FTEVNRU5UU1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmYW50YXN5RWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94UG9zaXRpb249XCJiZWZvcmVcIj5cbiAgICAgICAgICAgICAgICAgIHt7ZmFudGFzeUVsZW1lbnR9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWxpc3Qtb3B0aW9uPlxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3RhYmxlPlxuIl19