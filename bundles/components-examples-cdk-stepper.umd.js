(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/stepper'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/stepper', ['exports', '@angular/cdk/stepper', '@angular/common', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.stepper = {}), global.ng.cdk.stepper, global.ng.common, global.ng.core));
}(this, (function (exports, i1, i2, i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var _c0 = function (a0) { return { "example-active": a0 }; };
    function CustomStepper_button_9_Template(rf, ctx) { if (rf & 1) {
        var _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 6);
        i0.ɵɵlistener("click", function CustomStepper_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var i_r2 = ctx.index; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onClick(i_r2); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var i_r2 = ctx.index;
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.selectedIndex === i_r2));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
    } }
    /** @title A custom CDK stepper without a form */
    var CdkCustomStepperWithoutFormExample = /** @class */ (function () {
        function CdkCustomStepperWithoutFormExample() {
        }
        CdkCustomStepperWithoutFormExample.ɵfac = function CdkCustomStepperWithoutFormExample_Factory(t) { return new (t || CdkCustomStepperWithoutFormExample)(); };
        CdkCustomStepperWithoutFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "example-custom-stepper");
                i0.ɵɵelementStart(1, "cdk-step");
                i0.ɵɵelementStart(2, "p");
                i0.ɵɵtext(3, "This is any content of \"Step 1\"");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "cdk-step");
                i0.ɵɵelementStart(5, "p");
                i0.ɵɵtext(6, "This is any content of \"Step 2\"");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: function () { return [CustomStepper, i1.CdkStep]; }, styles: [""] });
        return CdkCustomStepperWithoutFormExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-custom-stepper-without-form-example',
                    templateUrl: './cdk-custom-stepper-without-form-example.html',
                    styleUrls: ['./cdk-custom-stepper-without-form-example.css']
                }]
        }], null, null); })();
    /** Custom CDK stepper component */
    var CustomStepper = /** @class */ (function (_super) {
        __extends(CustomStepper, _super);
        function CustomStepper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomStepper.prototype.onClick = function (index) {
            this.selectedIndex = index;
        };
        CustomStepper.ɵfac = function CustomStepper_Factory(t) { return ɵCustomStepper_BaseFactory(t || CustomStepper); };
        CustomStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: i1.CdkStepper, useExisting: CustomStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 6, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "ngClass", "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelementStart(1, "header");
                i0.ɵɵelementStart(2, "h2");
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵelementContainer(5, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "footer", 2);
                i0.ɵɵelementStart(7, "button", 3);
                i0.ɵɵtext(8, "\u2190");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, CustomStepper_button_9_Template, 2, 4, "button", 4);
                i0.ɵɵelementStart(10, "button", 5);
                i0.ɵɵtext(11, "\u2192");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
                i0.ɵɵadvance(1);
                i0.ɵɵstyleProp("display", ctx.selected ? "block" : "none");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.selected.content);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.steps);
            } }, directives: [i2.NgTemplateOutlet, i1.CdkStepperPrevious, i2.NgForOf, i1.CdkStepperNext, i2.NgClass], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n}"] });
        return CustomStepper;
    }(i1.CdkStepper));
    var ɵCustomStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomStepper);
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomStepper, [{
            type: i0.Component,
            args: [{
                    selector: 'example-custom-stepper',
                    templateUrl: './example-custom-stepper.html',
                    styleUrls: ['./example-custom-stepper.css'],
                    providers: [{ provide: i1.CdkStepper, useExisting: CustomStepper }]
                }]
        }], null, null); })();

    var EXAMPLES = [
        CdkCustomStepperWithoutFormExample,
        CustomStepper,
    ];
    var CdkStepperExamplesModule = /** @class */ (function () {
        function CdkStepperExamplesModule() {
        }
        CdkStepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
        CdkStepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); }, imports: [[
                    i1.CdkStepperModule,
                    i2.CommonModule,
                ]] });
        return CdkStepperExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
            CustomStepper], imports: [i1.CdkStepperModule,
            i2.CommonModule], exports: [CdkCustomStepperWithoutFormExample,
            CustomStepper] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkStepperExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.CdkStepperModule,
                        i2.CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }], null, null); })();

    exports.CdkCustomStepperWithoutFormExample = CdkCustomStepperWithoutFormExample;
    exports.CdkStepperExamplesModule = CdkStepperExamplesModule;
    exports.CustomStepper = CustomStepper;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-stepper.umd.js.map
