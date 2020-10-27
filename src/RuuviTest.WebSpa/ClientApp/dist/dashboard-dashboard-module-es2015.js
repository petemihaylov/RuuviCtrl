(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/_metronic/partials/content/widgets/advance-tables/advance-tables-widget2/advance-tables-widget2.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/advance-tables/advance-tables-widget2/advance-tables-widget2.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AdvanceTablesWidget2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceTablesWidget2Component", function() { return AdvanceTablesWidget2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");



class AdvanceTablesWidget2Component {
    constructor() {
        this.currentTab = 'Day';
    }
    ngOnInit() { }
    setCurrentTab(tab) {
        this.currentTab = tab;
    }
}
AdvanceTablesWidget2Component.ɵfac = function AdvanceTablesWidget2Component_Factory(t) { return new (t || AdvanceTablesWidget2Component)(); };
AdvanceTablesWidget2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvanceTablesWidget2Component, selectors: [["app-advance-tables-widget2"]], decls: 190, vars: 39, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0", "pt-5"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "mt-3", "font-weight-bold", "font-size-sm"], [1, "card-toolbar"], [1, "nav", "nav-pills", "nav-pills-sm", "nav-dark-75"], [1, "nav-item", 3, "click"], ["data-toggle", "tab", 1, "nav-link", "py-2", "px-4"], [1, "card-body", "pt-3", "pb-0"], [1, "table-responsive"], [1, "table", "table-borderless", "table-vertical-center"], [1, "p-0"], [1, "pl-0", "py-4"], [1, "symbol", "symbol-50", "symbol-light", "mr-1"], [1, "symbol-label"], ["alt", "", "src", "./assets/media/svg/misc/006-plurk.svg", 1, "h-50", "align-self-center"], [1, "pl-0"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "mb-1", "font-size-lg", "cursor-pointer"], [1, "font-weight-bolder"], [1, "text-muted", "font-weight-bold", "text-hover-primary", "cursor-pointer"], [1, "text-right"], [1, "text-dark-75", "font-weight-bolder", "d-block", "font-size-lg"], [1, "text-muted", "font-weight-bold"], [1, "text-muted", "font-weight-500"], [1, "label", "label-lg", "label-light-primary", "label-inline"], [1, "text-right", "pr-0"], [1, "btn", "btn-icon", "btn-light", "btn-sm", "cursor-pointer"], [1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], [1, "btn", "btn-icon", "btn-light", "btn-sm", "mx-3", "cursor-pointer"], [1, "symbol", "symbol-50", "symbol-light"], ["alt", "", "src", "./assets/media/svg/misc/015-telegram.svg", 1, "h-50", "align-self-center"], [1, "label", "label-lg", "label-light-warning", "label-inline"], ["alt", "", "src", "./assets/media/svg/misc/003-puzzle.svg", 1, "h-50", "align-self-center"], [1, "label", "label-lg", "label-light-success", "label-inline"], ["alt", "", "src", "./assets/media/svg/misc/005-bebo.svg", 1, "h-50", "align-self-center"], [1, "label", "label-lg", "label-light-danger", "label-inline"], ["alt", "", "src", "./assets/media/svg/misc/014-kickstarter.svg", 1, "h-50", "align-self-center"]], template: function AdvanceTablesWidget2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "More than 400+ new members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTablesWidget2Component_Template_li_click_9_listener() { return ctx.setCurrentTab("Month"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTablesWidget2Component_Template_li_click_12_listener() { return ctx.setCurrentTab("Week"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTablesWidget2Component_Template_li_click_15_listener() { return ctx.setCurrentTab("Day"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sant Outstanding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "bprow@bnc.cc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " $2,000,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " ReactJs, HTML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Application Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "app@dev.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " $4,600,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Python, MySQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Payrol Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "company@dev.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " $560,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Laravel, Metronic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "HR Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "hr@demo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " $57,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " AngularJS, C# ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "KTR Mobile Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "ktr@demo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " $45,200,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " ReactJS, Ruby ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", "pointer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab === "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", "pointer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab === "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", "pointer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab === "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "50px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "125px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "110px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Settings-1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Settings-1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Settings-1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Settings-1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Settings-1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
    } }, directives: [ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__["InlineSVGDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceTablesWidget2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advance-tables-widget2',
                templateUrl: './advance-tables-widget2.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/advance-tables/advance-tables-widget4/advance-tables-widget4.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/advance-tables/advance-tables-widget4/advance-tables-widget4.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AdvanceTablesWidget4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceTablesWidget4Component", function() { return AdvanceTablesWidget4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/asset/"]; };
class AdvanceTablesWidget4Component {
    constructor() { }
    ngOnInit() { }
}
AdvanceTablesWidget4Component.ɵfac = function AdvanceTablesWidget4Component_Factory(t) { return new (t || AdvanceTablesWidget4Component)(); };
AdvanceTablesWidget4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvanceTablesWidget4Component, selectors: [["app-advance-tables-widget4"]], decls: 163, vars: 12, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0", "py-5"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "mt-3", "font-weight-bold", "font-size-sm"], [1, "card-toolbar"], [1, "btn", "btn-info", "font-weight-bolder", "font-size-sm", "mr-3", "cursor-pointer"], [1, "btn", "btn-danger", "font-weight-bolder", "font-size-sm", "cursor-pointer"], [1, "card-body", "pt-0", "pb-3"], [1, "tab-content"], [1, "table-responsive"], [1, "table", "table-head-custom", "table-head-bg", "table-borderless", "table-vertical-center"], [1, "text-left", "text-uppercase"], [1, "pl-7", 2, "min-width", "250px"], [1, "text-dark-75"], [2, "min-width", "100px"], [2, "min-width", "130px"], [2, "min-width", "80px"], [1, "pl-0", "py-8"], [1, "d-flex", "align-items-center"], [1, "symbol", "symbol-50", "symbol-light", "mr-4"], [1, "symbol-label"], ["cacheSVG", "true", 1, "svg-icon", "h-75", "align-self-end", 3, "inlineSVG"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "mb-1", "font-size-lg", "cursor-pointer"], [1, "text-muted", "font-weight-bold", "d-block"], [1, "text-dark-75", "font-weight-bolder", "d-block", "font-size-lg"], [1, "text-muted", "font-weight-bold"], ["src", "./assets/media/logos/stars.png", "alt", "image", 2, "width", "5.5rem"], [1, "text-muted", "font-weight-bold", "d-block", "font-size-sm"], [1, "pr-0", "text-right"], [1, "btn", "btn-light-success", "font-weight-bolder", "font-size-sm", "cursor-pointer", 3, "routerLink"], [1, "pl-0", "py-0"], [1, "text-dark", "font-weight-bolder", "text-hover-primary", "mb-1", "font-size-lg", "cursor-pointer"], [1, "text-left", "pr-0"], ["src", "./assets/media/logos/stars.png", "alt", "image", "alt", "", 2, "width", "5.5rem"], [1, "btn", "btn-light-success", "font-weight-bolder", "font-size-sm", "cursor-pointer", 2, "width", "7rem", 3, "routerLink"]], template: function AdvanceTablesWidget4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Agents Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "More than 400+ new members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "comission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Brad Simmons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "HTML, JS, ReactJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " $8,000,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " In Proccess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " $520 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Intertico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Web, UI/UX Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Best Rated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "View Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Jessie Clarcson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "C#, ASP.NET, MS SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " $23,000,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " $1,600 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Rejected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Agoda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Houses & Hotels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Above Avarage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "View Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Lebron Wayde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "PHP, Laravel, VueJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " $34,000,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " $6,700 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " RoadGee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Best Rated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "View Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Natali Trump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Python, PostgreSQL, ReactJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " $2,600,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " $14,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " The Hill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Insurance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Avarage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "View Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/avatars/001-boy.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/avatars/018-girl-9.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/avatars/047-girl-25.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/avatars/014-girl-7.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__["InlineSVGDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceTablesWidget4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advance-tables-widget4',
                templateUrl: './advance-tables-widget4.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/lists/lists-widget1/lists-widget1.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/lists/lists-widget1/lists-widget1.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListsWidget1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsWidget1Component", function() { return ListsWidget1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dropdown-menus/dropdown-menu4/dropdown-menu4.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu4/dropdown-menu4.component.ts");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");





class ListsWidget1Component {
    constructor() { }
    ngOnInit() { }
}
ListsWidget1Component.ɵfac = function ListsWidget1Component_Factory(t) { return new (t || ListsWidget1Component)(); };
ListsWidget1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListsWidget1Component, selectors: [["app-lists-widget1"]], decls: 59, vars: 5, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0", "mt-4"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "mt-3", "font-weight-bold", "font-size-sm"], [1, "card-toolbar"], ["ngbDropdown", "", "placement", "bottom-right", "title", "Quick actions", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-clean", "btn-hover-light-primary", "btn-sm", "btn-icon"], [1, "ki", "ki-bold-more-hor"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-md", "dropdown-menu-right"], [1, "card-body", "pt-8"], [1, "d-flex", "align-items-center", "mb-10"], [1, "symbol", "symbol-40", "symbol-light-primary", "mr-5"], [1, "symbol-label"], [1, "svg-icon", "svg-icon-lg", "svg-icon-primary", 3, "inlineSVG"], [1, "d-flex", "flex-column", "font-weight-bold"], [1, "text-dark", "text-hover-primary", "mb-1", "font-size-lg", "cursor-pointer"], [1, "text-muted"], [1, "symbol", "symbol-40", "symbol-light-warning", "mr-5"], [1, "svg-icon", "svg-icon-lg", "svg-icon-warning", 3, "inlineSVG"], [1, "text-dark-75", "text-hover-primary", "mb-1", "font-size-lg", "cursor-pointer"], [1, "symbol", "symbol-40", "symbol-light-success", "mr-5"], [1, "svg-icon", "svg-icon-lg", "svg-icon-success", 3, "inlineSVG"], [1, "symbol", "symbol-40", "symbol-light-danger", "mr-5"], [1, "svg-icon", "svg-icon-lg", "svg-icon-danger", 3, "inlineSVG"], [1, "d-flex", "align-items-center", "mb-2"], [1, "symbol", "symbol-40", "symbol-light-info", "mr-5"], [1, "svg-icon", "svg-icon-lg", "svg-icon-info", 3, "inlineSVG"]], template: function ListsWidget1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tasks Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pending 10 tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-dropdown-menu4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Project Briefing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Project Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Concept Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Art Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Functional Logics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lead Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "DevOps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "QA Managers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Home/Library.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Group-chat.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Attachment2.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Shield-user.svg");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu4Component"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsWidget1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lists-widget1',
                templateUrl: './lists-widget1.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/lists/lists-widget3/lists-widget3.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/lists/lists-widget3/lists-widget3.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListsWidget3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsWidget3Component", function() { return ListsWidget3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dropdown-menus/dropdown-menu2/dropdown-menu2.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu2/dropdown-menu2.component.ts");
/* harmony import */ var _widget3_dropdown_widget3_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget3-dropdown/widget3-dropdown.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget3/widget3-dropdown/widget3-dropdown.component.ts");





class ListsWidget3Component {
    constructor() { }
    ngOnInit() { }
}
ListsWidget3Component.ɵfac = function ListsWidget3Component_Factory(t) { return new (t || ListsWidget3Component)(); };
ListsWidget3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListsWidget3Component, selectors: [["app-lists-widget3"]], decls: 61, vars: 0, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0"], [1, "card-title", "font-weight-bolder", "text-dark"], [1, "card-toolbar"], ["ngbDropdown", "", "data-toggle", "tooltip", "title", "Quick actions", "data-placement", "bottom", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light-primary", "btn-sm", "font-weight-bolder", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], [1, "card-body", "pt-2"], [1, "d-flex", "align-items-center", "mb-10"], [1, "symbol", "symbol-40", "symbol-light-success", "mr-5"], [1, "symbol-label"], ["alt", "boy avatar", "src", "./assets/media/svg/avatars/009-boy-4.svg", 1, "h-75", "align-self-end"], [1, "d-flex", "flex-column", "flex-grow-1", "font-weight-bold"], ["href", "#", 1, "text-dark", "text-hover-primary", "mb-1", "font-size-lg"], [1, "text-muted"], ["alt", "", "src", "./assets/media/svg/avatars/006-girl-3.svg", 1, "h-75", "align-self-end"], ["alt", "", "src", "./assets/media/svg/avatars/011-boy-5.svg", 1, "h-75", "align-self-end"], ["alt", "", "src", "./assets/media/svg/avatars/015-boy-6.svg", 1, "h-75", "align-self-end"], [1, "d-flex", "align-items-center", "mb-2"], ["alt", "", "src", "./assets/media/svg/avatars/016-boy-7.svg", 1, "h-75", "align-self-end"]], template: function ListsWidget3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-dropdown-menu2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ricky Hunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PHP, SQLite, Artisan CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-widget3-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Anne Clarc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "PHP, SQLite, Artisan CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-widget3-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Kristaps Zumman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "PHP, SQLite, Artisan CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-widget3-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ricky Hunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "PHP, SQLite, Artisan CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-widget3-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Carles Puyol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "PHP, SQLite, Artisan CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-widget3-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu2Component"], _widget3_dropdown_widget3_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["Widget3DropdownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsWidget3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lists-widget3',
                templateUrl: './lists-widget3.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/lists/lists-widget3/widget3-dropdown/widget3-dropdown.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/lists/lists-widget3/widget3-dropdown/widget3-dropdown.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: Widget3DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget3DropdownComponent", function() { return Widget3DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component.ts");




class Widget3DropdownComponent {
    constructor() { }
    ngOnInit() { }
}
Widget3DropdownComponent.ɵfac = function Widget3DropdownComponent_Factory(t) { return new (t || Widget3DropdownComponent)(); };
Widget3DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Widget3DropdownComponent, selectors: [["app-widget3-dropdown"]], decls: 5, vars: 0, consts: [["ngbDropdown", "", "data-toggle", "tooltip", "title", "Quick actions", "data-placement", "left", 1, "dropdown", "dropdown-inline", "ml-2"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-hover-light-primary", "btn-sm", "btn-icon"], [1, "ki", "ki-bold-more-hor"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-fit", "dropdown-menu-md", "dropdown-menu-right"]], template: function Widget3DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-dropdown-menu1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu1Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Widget3DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget3-dropdown',
                templateUrl: './widget3-dropdown.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/lists/lists-widget4/lists-widget4.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/lists/lists-widget4/lists-widget4.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListsWidget4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsWidget4Component", function() { return ListsWidget4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dropdown-menus/dropdown-menu2/dropdown-menu2.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu2/dropdown-menu2.component.ts");
/* harmony import */ var _widget4_dropdown_widget4_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget4-dropdown/widget4-dropdown.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget4/widget4-dropdown/widget4-dropdown.component.ts");





class ListsWidget4Component {
    constructor() { }
    ngOnInit() { }
}
ListsWidget4Component.ɵfac = function ListsWidget4Component_Factory(t) { return new (t || ListsWidget4Component)(); };
ListsWidget4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListsWidget4Component, selectors: [["app-lists-widget4"]], decls: 66, vars: 0, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0"], [1, "card-title", "font-weight-bolder", "text-dark"], [1, "card-toolbar"], ["ngbDropdown", "", "data-toggle", "tooltip", "title", "Quick actions", "data-placement", "bottom", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "font-size-sm", "font-weight-bolder", "dropdown-toggle", "text-dark-75"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], [1, "card-body", "pt-2"], [1, "d-flex", "align-items-center", "mb-10"], [1, "bullet", "bullet-bar", "bg-success", "align-self-stretch"], [1, "checkbox", "checkbox-lg", "checkbox-light-success", "checkbox-single", "flex-shrink-0", "m-0", "mx-4"], ["type", "checkbox", "name", "", "value", "1"], [1, "d-flex", "flex-column", "flex-grow-1"], [1, "text-dark-75", "text-hover-primary", "font-weight-bold", "font-size-lg", "mb-1", "cursor-pointer"], [1, "text-muted", "font-weight-bold"], [1, "bullet", "bullet-bar", "bg-primary", "align-self-stretch"], [1, "checkbox", "checkbox-lg", "checkbox-light-primary", "checkbox-single", "flex-shrink-0", "m-0", "mx-4"], ["type", "checkbox", "value", "1"], [1, "bullet", "bullet-bar", "bg-warning", "align-self-stretch"], [1, "checkbox", "checkbox-lg", "checkbox-light-warning", "checkbox-single", "flex-shrink-0", "m-0", "mx-4"], [1, "text-dark-75", "text-hover-primary", "font-size-sm", "font-weight-bold", "font-size-lg", "mb-1", "cursor-pointer"], [1, "bullet", "bullet-bar", "bg-info", "align-self-stretch"], [1, "checkbox", "checkbox-lg", "checkbox-light-info", "checkbox-single", "flex-shrink-0", "m-0", "mx-4"], [1, "d-flex", "align-items-center", "mb-2"], [1, "bullet", "bullet-bar", "bg-danger", "align-self-stretch"], [1, "checkbox", "checkbox-lg", "checkbox-light-danger", "checkbox-single", "flex-shrink-0", "m-0", "mx-4"]], template: function ListsWidget4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-dropdown-menu2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Create FireStone Logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Due in 2 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-widget4-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Stakeholder Meeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Due in 3 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-widget4-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Scoping & Estimations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Due in 5 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-widget4-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sprint Showcase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Due in 1 Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-widget4-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Project Retro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Due in 12 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "app-widget4-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu2Component"], _widget4_dropdown_widget4_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["Widget4DropdownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsWidget4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lists-widget4',
                templateUrl: './lists-widget4.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/lists/lists-widget4/widget4-dropdown/widget4-dropdown.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/lists/lists-widget4/widget4-dropdown/widget4-dropdown.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: Widget4DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget4DropdownComponent", function() { return Widget4DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dropdown-menus/dropdown-menu2/dropdown-menu2.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu2/dropdown-menu2.component.ts");




class Widget4DropdownComponent {
    constructor() { }
    ngOnInit() { }
}
Widget4DropdownComponent.ɵfac = function Widget4DropdownComponent_Factory(t) { return new (t || Widget4DropdownComponent)(); };
Widget4DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Widget4DropdownComponent, selectors: [["app-widget4-dropdown"]], decls: 5, vars: 0, consts: [["ngbDropdown", "", "data-toggle", "tooltip", "title", "Quick actions", "data-placement", "left", 1, "dropdown", "dropdown-inline", "ml-2"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-hover-light-primary", "btn-sm", "btn-icon"], [1, "ki", "ki-bold-more-hor"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-fit", "dropdown-menu-md", "dropdown-menu-right"]], template: function Widget4DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-dropdown-menu2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu2Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Widget4DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget4-dropdown',
                templateUrl: './widget4-dropdown.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/lists/lists-widget8/lists-widget8.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/lists/lists-widget8/lists-widget8.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListsWidget8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsWidget8Component", function() { return ListsWidget8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component.ts");




class ListsWidget8Component {
    constructor() { }
    ngOnInit() { }
}
ListsWidget8Component.ɵfac = function ListsWidget8Component_Factory(t) { return new (t || ListsWidget8Component)(); };
ListsWidget8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListsWidget8Component, selectors: [["app-lists-widget8"]], decls: 47, vars: 0, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0"], [1, "card-title", "font-weight-bolder", "text-dark"], [1, "card-toolbar"], ["ngbDropdown", "", "placement", "bottom-right", "title", "Quick actions", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-clean", "btn-hover-light-primary", "btn-sm", "btn-icon"], [1, "ki", "ki-bold-more-hor"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-md", "dropdown-menu-right"], [1, "card-body", "pt-0"], [1, "mb-10"], [1, "d-flex", "align-items-center"], [1, "symbol", "symbol-45", "symbol-light", "mr-5"], [1, "symbol-label"], ["alt", "", "src", "./assets/media/svg/misc/006-plurk.svg", 1, "h-50", "align-self-center"], [1, "d-flex", "flex-column", "flex-grow-1"], [1, "font-weight-bold", "text-dark-75", "text-hover-primary", "font-size-lg", "mb-1", "cursor-pointer"], [1, "text-muted", "font-weight-bold"], [1, "text-dark-50", "m-0", "pt-5", "font-weight-normal"], ["alt", "", "src", "./assets/media/svg/misc/015-telegram.svg", 1, "h-50", "align-self-center"], [1, ""], ["alt", "", "src", "./assets/media/svg/misc/014-kickstarter.svg", 1, "h-50", "align-self-center"], ["href", "#", 1, "font-weight-bold", "text-dark-75", "text-hover-primary", "font-size-lg", "mb-1"]], template: function ListsWidget8Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-dropdown-menu1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Top Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " A brief write up about the top Authors that fits within this section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Popular Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "5 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " A brief write up about the Popular Authors that fits within this section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " A brief write up about the New Users that fits within this section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu1Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsWidget8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lists-widget8',
                templateUrl: './lists-widget8.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/lists/lists-widget9/lists-widget9.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/lists/lists-widget9/lists-widget9.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListsWidget9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsWidget9Component", function() { return ListsWidget9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component.ts");




class ListsWidget9Component {
    constructor() { }
    ngOnInit() { }
}
ListsWidget9Component.ɵfac = function ListsWidget9Component_Factory(t) { return new (t || ListsWidget9Component)(); };
ListsWidget9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListsWidget9Component, selectors: [["app-lists-widget9"]], decls: 81, vars: 0, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "align-items-center", "border-0", "mt-4"], [1, "card-title", "align-items-start", "flex-column"], [1, "font-weight-bolder", "text-dark"], [1, "text-muted", "mt-3", "font-weight-bold", "font-size-sm"], [1, "card-toolbar"], ["ngbDropdown", "", "placement", "bottom-right", "title", "Quick actions", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-clean", "btn-hover-light-primary", "btn-sm", "btn-icon"], [1, "ki", "ki-bold-more-hor"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-md", "dropdown-menu-right"], [1, "card-body", "pt-4"], [1, "timeline", "timeline-6", "mt-3"], [1, "timeline-item", "align-items-start"], [1, "timeline-label", "font-weight-bolder", "text-dark-75", "font-size-lg"], [1, "timeline-badge"], [1, "fa", "fa-genderless", "text-warning", "icon-xl"], [1, "font-weight-mormal", "font-size-lg", "timeline-content", "text-muted", "pl-3"], [1, "fa", "fa-genderless", "text-success", "icon-xl"], [1, "timeline-content", "d-flex"], [1, "font-weight-bolder", "text-dark-75", "pl-3", "font-size-lg"], [1, "fa", "fa-genderless", "text-danger", "icon-xl"], [1, "timeline-content", "font-weight-bolder", "font-size-lg", "text-dark-75", "pl-3"], ["href", "#", 1, "text-primary"], [1, "fa", "fa-genderless", "text-primary", "icon-xl"], [1, "timeline-content", "font-weight-mormal", "font-size-lg", "text-muted", "pl-3"], [1, "timeline-content", "font-weight-bolder", "text-dark-75", "pl-3", "font-size-lg"], [1, "fa", "fa-genderless", "text-info", "icon-xl"]], template: function ListsWidget9Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "890,344 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-dropdown-menu1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 08:42 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Outlines keep you honest. And keep structure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 10:00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "AEOL meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 14:37 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Make deposit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "USD 700");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ". to ESL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 16:50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Indulging in poorly driving and keep structure keep great ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 21:03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " New order placed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "#XF-2356");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 23:07 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Outlines keep and you honest. Indulging in poorly driving ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " 16:50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Indulging in poorly driving and keep structure keep great ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " 21:03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " New order placed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "#XF-2356");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu1Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsWidget9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lists-widget9',
                templateUrl: './lists-widget9.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/mixed/mixed-widget1/mixed-widget1.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/mixed/mixed-widget1/mixed-widget1.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MixedWidget1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixedWidget1Component", function() { return MixedWidget1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ "./src/app/_metronic/core/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dropdown-menus/dropdown-menu2/dropdown-menu2.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu2/dropdown-menu2.component.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");







class MixedWidget1Component {
    constructor(layout) {
        this.layout = layout;
        this.chartOptions = {};
        this.fontFamily = '';
        this.colorsGrayGray500 = '';
        this.colorsGrayGray200 = '';
        this.colorsGrayGray300 = '';
        this.colorsThemeBaseDanger = '';
        this.fontFamily = this.layout.getProp('js.fontFamily');
        this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500');
        this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200');
        this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300');
        this.colorsThemeBaseDanger = this.layout.getProp('js.colors.theme.base.danger');
    }
    ngOnInit() {
        this.chartOptions = this.getChartOptions();
    }
    getChartOptions() {
        const strokeColor = '#D13647';
        return {
            series: [
                {
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40, 40, 40],
                },
            ],
            chart: {
                type: 'area',
                height: 200,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: strokeColor,
                    opacity: 0.5,
                },
            },
            plotOptions: {},
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: 'solid',
                opacity: 0,
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [strokeColor],
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: this.colorsGrayGray300,
                        width: 1,
                        dashArray: 3,
                    },
                },
            },
            yaxis: {
                min: 0,
                max: 80,
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    fontFamily: this.fontFamily,
                },
                y: {
                    // tslint:disable-next-line
                    formatter: function (val) {
                        return '$' + val + ' thousands';
                    },
                },
                marker: {
                    show: false,
                },
            },
            colors: ['transparent'],
            markers: {
                colors: this.colorsThemeBaseDanger,
                strokeColor: [strokeColor],
                strokeWidth: 3,
            },
        };
    }
}
MixedWidget1Component.ɵfac = function MixedWidget1Component_Factory(t) { return new (t || MixedWidget1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"])); };
MixedWidget1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MixedWidget1Component, selectors: [["app-mixed-widget1"]], decls: 32, vars: 19, consts: [[1, "card", "card-custom", "bg-gray-100", "card-stretch", "gutter-b"], [1, "card-header", "border-0", "bg-danger", "py-5"], [1, "card-title", "font-weight-bolder", "text-white"], [1, "card-toolbar"], ["ngbDropdown", "", "placement", "bottom-right", "title", "Quick actions", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", 1, "btn", "btn-transparent-white", "btn-sm", "font-weight-bolder", "dropdown-toggle", "px-5", "dropdown-toggle", "btn", "btn-transparent"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], [1, "card-body", "p-0", "position-relative", "overflow-hidden"], ["id", "kt_mixed_widget_1_chart", 1, "card-rounded-bottom", "bg-danger"], [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "stroke", "legend", "fill", "states", "tooltip", "colors", "markers", "plotOptions"], [1, "card-spacer", "mt-n25"], [1, "row", "m-0"], [1, "col", "bg-light-warning", "px-6", "py-8", "rounded-xl", "mr-7", "mb-7"], [1, "svg-icon", "svg-icon-3x", "svg-icon-warning", "d-block", "my-2", 3, "inlineSVG"], ["href", "#", 1, "text-warning", "font-weight-bold", "font-size-h6"], [1, "col", "bg-light-primary", "px-6", "py-8", "rounded-xl", "mb-7"], [1, "svg-icon", "svg-icon-3x", "svg-icon-primary", "d-block", "my-2", 3, "inlineSVG"], ["href", "#", 1, "text-primary", "font-weight-bold", "font-size-h6", "mt-2"], [1, "col", "bg-light-danger", "px-6", "py-8", "rounded-xl", "mr-7"], [1, "svg-icon", "svg-icon-3x", "svg-icon-danger", "d-block", "my-2", 3, "inlineSVG"], ["href", "#", 1, "text-danger", "font-weight-bold", "font-size-h6", "mt-2"], [1, "col", "bg-light-success", "px-6", "py-8", "rounded-xl"], [1, "svg-icon", "svg-icon-3x", "svg-icon-success", "d-block", "my-2", 3, "inlineSVG"], ["href", "#", 1, "text-success", "font-weight-bold", "font-size-h6", "mt-2"]], template: function MixedWidget1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sales Stat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-dropdown-menu2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "apx-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Weekly Sales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " New Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Item Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Bug Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("dataLabels", ctx.chartOptions.dataLabels)("stroke", ctx.chartOptions.stroke)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("states", ctx.chartOptions.states)("tooltip", ctx.chartOptions.tooltip)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("plotOptions", ctx.chartOptions.plotOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Media/Equalizer.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Add-user.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Design/Layers.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Urgent-mail.svg");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu2Component"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MixedWidget1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mixed-widget1',
                templateUrl: './mixed-widget1.component.html',
            }]
    }], function () { return [{ type: _core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/mixed/mixed-widget14/mixed-widget14.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/mixed/mixed-widget14/mixed-widget14.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MixedWidget14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixedWidget14Component", function() { return MixedWidget14Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ "./src/app/_metronic/core/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dropdown_menus_dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dropdown-menus/dropdown-menu4/dropdown-menu4.component */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu4/dropdown-menu4.component.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");






class MixedWidget14Component {
    constructor(layout) {
        this.layout = layout;
        this.chartOptions = {};
        this.colorsGrayGray100 = this.layout.getProp('js.colors.gray.gray100');
        this.colorsGrayGray700 = this.layout.getProp('js.colors.gray.gray700');
        this.colorsThemeBaseSuccess = this.layout.getProp('js.colors.theme.base.success');
        this.colorsThemeLightSuccess = this.layout.getProp('js.colors.theme.light.success');
        this.fontFamily = this.layout.getProp('js.fontFamily');
    }
    ngOnInit() {
        this.chartOptions = this.getChartOptions();
    }
    getChartOptions() {
        const strokeColor = '#D13647';
        return {
            series: [74],
            chart: {
                type: 'radialBar',
                height: 200,
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '65%',
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            show: false,
                            fontWeight: '700',
                        },
                        value: {
                            color: this.colorsGrayGray700,
                            fontSize: '30px',
                            fontWeight: '700',
                            offsetY: 12,
                            show: true,
                        },
                    },
                    track: {
                        background: this.colorsThemeLightSuccess,
                        strokeWidth: '100%',
                    },
                },
            },
            colors: [this.colorsThemeBaseSuccess],
            stroke: {
                lineCap: 'round',
            },
            labels: ['Progress'],
            legend: {},
            dataLabels: {},
            fill: {},
            xaxis: {},
            yaxis: {},
            states: {},
            tooltip: {},
            markers: {},
        };
    }
}
MixedWidget14Component.ɵfac = function MixedWidget14Component_Factory(t) { return new (t || MixedWidget14Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"])); };
MixedWidget14Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MixedWidget14Component, selectors: [["app-mixed-widget14"]], decls: 21, vars: 13, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0", "pt-5"], [1, "card-title", "font-weight-bolder"], [1, "card-toolbar"], ["ngbDropdown", "", "placement", "bottom-right", "title", "Quick actions", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", 1, "btn", "btn-clean", "btn-hover-light-primary", "btn-sm", "btn-icon", "cursor-pointer"], [1, "ki", "ki-bold-more-hor"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], [1, "card-body", "d-flex", "flex-column"], [1, "flex-grow-1"], ["id", "kt_mixed_widget_14_chart", 2, "height", "200px"], [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "stroke", "legend", "fill", "states", "tooltip", "colors", "markers", "plotOptions"], [1, "pt-5"], [1, "text-center", "font-weight-normal", "font-size-lg", "pb-7"], [1, "btn", "btn-success", "btn-shadow-hover", "font-weight-bolder", "w-100", "py-3", "cursor-pointer"]], template: function MixedWidget14Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action Needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-dropdown-menu4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Notes: Current sprint requires stakeholders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " to approve newly amended policies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Generate Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("dataLabels", ctx.chartOptions.dataLabels)("stroke", ctx.chartOptions.stroke)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("states", ctx.chartOptions.states)("tooltip", ctx.chartOptions.tooltip)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("plotOptions", ctx.chartOptions.plotOptions);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _dropdown_menus_dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu4Component"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MixedWidget14Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mixed-widget14',
                templateUrl: './mixed-widget14.component.html',
            }]
    }], function () { return [{ type: _core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/stats/stats-widget11/stats-widget11.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/stats/stats-widget11/stats-widget11.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StatsWidget11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsWidget11Component", function() { return StatsWidget11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ "./src/app/_metronic/core/index.ts");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");





class StatsWidget11Component {
    constructor(layout) {
        this.layout = layout;
        this.chartOptions = {};
        this.fontFamily = '';
        this.colorsGrayGray500 = '';
        this.colorsGrayGray200 = '';
        this.colorsGrayGray300 = '';
        this.colorsThemeBaseDanger = '';
        this.colorsThemeBasePrimary = '';
        this.colorsThemeLightPrimary = '';
        this.colorsThemeBaseSuccess = '';
        this.colorsThemeLightSuccess = '';
        this.fontFamily = this.layout.getProp('js.fontFamily');
        this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500');
        this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200');
        this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300');
        this.colorsThemeBaseDanger = this.layout.getProp('js.colors.theme.base.danger');
        this.colorsThemeBasePrimary = this.layout.getProp('js.colors.theme.base.primary');
        this.colorsThemeLightPrimary = this.layout.getProp('js.colors.theme.light.primary');
        this.colorsThemeBaseSuccess = this.layout.getProp('js.colors.theme.base.success');
        this.colorsThemeLightSuccess = this.layout.getProp('js.colors.theme.light.success');
    }
    ngOnInit() {
        this.chartOptions = this.getChartOptions();
    }
    getChartOptions() {
        return {
            series: [
                {
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40],
                },
            ],
            chart: {
                type: 'area',
                height: 150,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {},
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: 'solid',
                opacity: 1,
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [this.colorsThemeBaseSuccess],
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: this.colorsGrayGray300,
                        width: 1,
                        dashArray: 3,
                    },
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    fontFamily: this.fontFamily,
                },
                y: {
                    // tslint:disable-next-line
                    formatter: function (val) {
                        return '$' + val + ' thousands';
                    },
                },
            },
            colors: [this.colorsThemeLightSuccess],
            markers: {
                colors: this.colorsThemeLightSuccess,
                strokeColor: [this.colorsThemeBaseSuccess],
                strokeWidth: 3,
            },
        };
    }
}
StatsWidget11Component.ɵfac = function StatsWidget11Component_Factory(t) { return new (t || StatsWidget11Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"])); };
StatsWidget11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsWidget11Component, selectors: [["app-stats-widget11"]], decls: 13, vars: 16, consts: [[1, "card", "card-custom", "card-stretch", "card-stretch-half", "gutter-b"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-center", "justify-content-between", "card-spacer", "flex-grow-1"], [1, "symbol", "symbol-50", "symbol-light-success", "mr-2"], [1, "symbol-label"], [1, "svg-icon", "svg-icon-xl", "svg-icon-success", 3, "inlineSVG"], [1, "d-flex", "flex-column", "text-right"], [1, "text-dark-75", "font-weight-bolder", "font-size-h3"], [1, "text-muted", "font-weight-bold", "mt-2"], ["id", "kt_stats_widget_11_chart", 1, "card-rounded-bottom"], [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "stroke", "legend", "fill", "states", "tooltip", "colors", "markers", "plotOptions"]], template: function StatsWidget11Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "750$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Weekly Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "apx-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Layout/Layout-4-blocks.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("dataLabels", ctx.chartOptions.dataLabels)("stroke", ctx.chartOptions.stroke)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("states", ctx.chartOptions.states)("tooltip", ctx.chartOptions.tooltip)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("plotOptions", ctx.chartOptions.plotOptions);
    } }, directives: [ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__["InlineSVGDirective"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsWidget11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats-widget11',
                templateUrl: './stats-widget11.component.html',
            }]
    }], function () { return [{ type: _core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/stats/stats-widget12/stats-widget12.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/stats/stats-widget12/stats-widget12.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StatsWidget12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsWidget12Component", function() { return StatsWidget12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ "./src/app/_metronic/core/index.ts");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");





class StatsWidget12Component {
    constructor(layout) {
        this.layout = layout;
        this.chartOptions = {};
        this.fontFamily = '';
        this.colorsGrayGray500 = '';
        this.colorsGrayGray200 = '';
        this.colorsGrayGray300 = '';
        this.colorsThemeBaseDanger = '';
        this.colorsThemeBasePrimary = '';
        this.colorsThemeLightPrimary = '';
        this.fontFamily = this.layout.getProp('js.fontFamily');
        this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500');
        this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200');
        this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300');
        this.colorsThemeBaseDanger = this.layout.getProp('js.colors.theme.base.danger');
        this.colorsThemeBasePrimary = this.layout.getProp('js.colors.theme.base.primary');
        this.colorsThemeLightPrimary = this.layout.getProp('js.colors.theme.light.primary');
    }
    ngOnInit() {
        this.chartOptions = this.getChartOptions();
    }
    getChartOptions() {
        return {
            series: [
                {
                    name: 'Net Profit',
                    data: [40, 40, 30, 30, 35, 35, 50],
                },
            ],
            chart: {
                type: 'area',
                height: 150,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {},
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: 'solid',
                opacity: 1,
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [this.colorsThemeBasePrimary],
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: this.colorsGrayGray300,
                        width: 1,
                        dashArray: 3,
                    },
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
            },
            yaxis: {
                min: 0,
                max: 55,
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily,
                    },
                },
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    fontFamily: this.fontFamily,
                },
                y: {
                    // tslint:disable-next-line
                    formatter: function (val) {
                        return '$' + val + ' thousands';
                    },
                },
                marker: {
                    show: false,
                },
            },
            colors: [this.colorsThemeLightPrimary],
            markers: {
                colors: this.colorsThemeLightPrimary,
                strokeColor: [this.colorsThemeBasePrimary],
                strokeWidth: 3,
            },
        };
    }
}
StatsWidget12Component.ɵfac = function StatsWidget12Component_Factory(t) { return new (t || StatsWidget12Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"])); };
StatsWidget12Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsWidget12Component, selectors: [["app-stats-widget12"]], decls: 13, vars: 16, consts: [[1, "card", "card-custom", "card-stretch", "card-stretch-half", "gutter-b"], [1, "card-body", "d-flex", "flex-column", "p-0"], [1, "d-flex", "align-items-center", "justify-content-between", "card-spacer", "flex-grow-1"], [1, "symbol", "symbol-50", "symbol-light-primary", "mr-2"], [1, "symbol-label"], [1, "svg-icon", "svg-icon-xl", "svg-icon-primary", 3, "inlineSVG"], [1, "d-flex", "flex-column", "text-right"], [1, "text-dark-75", "font-weight-bolder", "font-size-h3"], [1, "text-muted", "font-weight-bold", "mt-2"], ["id", "kt_stats_widget_12_chart", 1, "card-rounded-bottom"], [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "stroke", "legend", "fill", "states", "tooltip", "colors", "markers", "plotOptions"]], template: function StatsWidget12Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+6,5K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "apx-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Group.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("dataLabels", ctx.chartOptions.dataLabels)("stroke", ctx.chartOptions.stroke)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("states", ctx.chartOptions.states)("tooltip", ctx.chartOptions.tooltip)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("plotOptions", ctx.chartOptions.plotOptions);
    } }, directives: [ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__["InlineSVGDirective"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsWidget12Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats-widget12',
                templateUrl: './stats-widget12.component.html',
            }]
    }], function () { return [{ type: _core__WEBPACK_IMPORTED_MODULE_1__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/content/widgets/widgets.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/partials/content/widgets/widgets.module.ts ***!
  \**********************************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var _mixed_mixed_widget1_mixed_widget1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixed/mixed-widget1/mixed-widget1.component */ "./src/app/_metronic/partials/content/widgets/mixed/mixed-widget1/mixed-widget1.component.ts");
/* harmony import */ var _lists_lists_widget9_lists_widget9_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lists/lists-widget9/lists-widget9.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget9/lists-widget9.component.ts");
/* harmony import */ var _stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats/stats-widget11/stats-widget11.component */ "./src/app/_metronic/partials/content/widgets/stats/stats-widget11/stats-widget11.component.ts");
/* harmony import */ var _stats_stats_widget12_stats_widget12_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stats/stats-widget12/stats-widget12.component */ "./src/app/_metronic/partials/content/widgets/stats/stats-widget12/stats-widget12.component.ts");
/* harmony import */ var _lists_lists_widget1_lists_widget1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lists/lists-widget1/lists-widget1.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget1/lists-widget1.component.ts");
/* harmony import */ var _lists_lists_widget3_lists_widget3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lists/lists-widget3/lists-widget3.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget3/lists-widget3.component.ts");
/* harmony import */ var _lists_lists_widget4_lists_widget4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lists/lists-widget4/lists-widget4.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget4/lists-widget4.component.ts");
/* harmony import */ var _lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lists/lists-widget8/lists-widget8.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget8/lists-widget8.component.ts");
/* harmony import */ var _mixed_mixed_widget14_mixed_widget14_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mixed/mixed-widget14/mixed-widget14.component */ "./src/app/_metronic/partials/content/widgets/mixed/mixed-widget14/mixed-widget14.component.ts");
/* harmony import */ var _advance_tables_advance_tables_widget4_advance_tables_widget4_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./advance-tables/advance-tables-widget4/advance-tables-widget4.component */ "./src/app/_metronic/partials/content/widgets/advance-tables/advance-tables-widget4/advance-tables-widget4.component.ts");
/* harmony import */ var _advance_tables_advance_tables_widget2_advance_tables_widget2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./advance-tables/advance-tables-widget2/advance-tables-widget2.component */ "./src/app/_metronic/partials/content/widgets/advance-tables/advance-tables-widget2/advance-tables-widget2.component.ts");
/* harmony import */ var _dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dropdown-menus/dropdown-menus.module */ "./src/app/_metronic/partials/content/dropdown-menus/dropdown-menus.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _lists_lists_widget3_widget3_dropdown_widget3_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lists/lists-widget3/widget3-dropdown/widget3-dropdown.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget3/widget3-dropdown/widget3-dropdown.component.ts");
/* harmony import */ var _lists_lists_widget4_widget4_dropdown_widget4_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lists/lists-widget4/widget4-dropdown/widget4-dropdown.component */ "./src/app/_metronic/partials/content/widgets/lists/lists-widget4/widget4-dropdown/widget4-dropdown.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





















class WidgetsModule {
}
WidgetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_15__["DropdownMenusModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["NgApexchartsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_mixed_mixed_widget1_mixed_widget1_component__WEBPACK_IMPORTED_MODULE_4__["MixedWidget1Component"],
        _lists_lists_widget9_lists_widget9_component__WEBPACK_IMPORTED_MODULE_5__["ListsWidget9Component"],
        _stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_6__["StatsWidget11Component"],
        _stats_stats_widget12_stats_widget12_component__WEBPACK_IMPORTED_MODULE_7__["StatsWidget12Component"],
        _lists_lists_widget1_lists_widget1_component__WEBPACK_IMPORTED_MODULE_8__["ListsWidget1Component"],
        _lists_lists_widget3_lists_widget3_component__WEBPACK_IMPORTED_MODULE_9__["ListsWidget3Component"],
        _lists_lists_widget4_lists_widget4_component__WEBPACK_IMPORTED_MODULE_10__["ListsWidget4Component"],
        _lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_11__["ListsWidget8Component"],
        _mixed_mixed_widget14_mixed_widget14_component__WEBPACK_IMPORTED_MODULE_12__["MixedWidget14Component"],
        _advance_tables_advance_tables_widget4_advance_tables_widget4_component__WEBPACK_IMPORTED_MODULE_13__["AdvanceTablesWidget4Component"],
        _advance_tables_advance_tables_widget2_advance_tables_widget2_component__WEBPACK_IMPORTED_MODULE_14__["AdvanceTablesWidget2Component"],
        _lists_lists_widget3_widget3_dropdown_widget3_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["Widget3DropdownComponent"],
        _lists_lists_widget4_widget4_dropdown_widget4_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["Widget4DropdownComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_15__["DropdownMenusModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["NgApexchartsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]], exports: [_mixed_mixed_widget1_mixed_widget1_component__WEBPACK_IMPORTED_MODULE_4__["MixedWidget1Component"],
        _lists_lists_widget9_lists_widget9_component__WEBPACK_IMPORTED_MODULE_5__["ListsWidget9Component"],
        _stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_6__["StatsWidget11Component"],
        _stats_stats_widget12_stats_widget12_component__WEBPACK_IMPORTED_MODULE_7__["StatsWidget12Component"],
        _lists_lists_widget1_lists_widget1_component__WEBPACK_IMPORTED_MODULE_8__["ListsWidget1Component"],
        _lists_lists_widget3_lists_widget3_component__WEBPACK_IMPORTED_MODULE_9__["ListsWidget3Component"],
        _lists_lists_widget4_lists_widget4_component__WEBPACK_IMPORTED_MODULE_10__["ListsWidget4Component"],
        _lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_11__["ListsWidget8Component"],
        _mixed_mixed_widget14_mixed_widget14_component__WEBPACK_IMPORTED_MODULE_12__["MixedWidget14Component"],
        _advance_tables_advance_tables_widget4_advance_tables_widget4_component__WEBPACK_IMPORTED_MODULE_13__["AdvanceTablesWidget4Component"],
        _advance_tables_advance_tables_widget2_advance_tables_widget2_component__WEBPACK_IMPORTED_MODULE_14__["AdvanceTablesWidget2Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _mixed_mixed_widget1_mixed_widget1_component__WEBPACK_IMPORTED_MODULE_4__["MixedWidget1Component"],
                    _lists_lists_widget9_lists_widget9_component__WEBPACK_IMPORTED_MODULE_5__["ListsWidget9Component"],
                    _stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_6__["StatsWidget11Component"],
                    _stats_stats_widget12_stats_widget12_component__WEBPACK_IMPORTED_MODULE_7__["StatsWidget12Component"],
                    _lists_lists_widget1_lists_widget1_component__WEBPACK_IMPORTED_MODULE_8__["ListsWidget1Component"],
                    _lists_lists_widget3_lists_widget3_component__WEBPACK_IMPORTED_MODULE_9__["ListsWidget3Component"],
                    _lists_lists_widget4_lists_widget4_component__WEBPACK_IMPORTED_MODULE_10__["ListsWidget4Component"],
                    _lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_11__["ListsWidget8Component"],
                    _mixed_mixed_widget14_mixed_widget14_component__WEBPACK_IMPORTED_MODULE_12__["MixedWidget14Component"],
                    _advance_tables_advance_tables_widget4_advance_tables_widget4_component__WEBPACK_IMPORTED_MODULE_13__["AdvanceTablesWidget4Component"],
                    _advance_tables_advance_tables_widget2_advance_tables_widget2_component__WEBPACK_IMPORTED_MODULE_14__["AdvanceTablesWidget2Component"],
                    _lists_lists_widget3_widget3_dropdown_widget3_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["Widget3DropdownComponent"],
                    _lists_lists_widget4_widget4_dropdown_widget4_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["Widget4DropdownComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_15__["DropdownMenusModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["NgApexchartsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"],
                ],
                exports: [
                    _mixed_mixed_widget1_mixed_widget1_component__WEBPACK_IMPORTED_MODULE_4__["MixedWidget1Component"],
                    _lists_lists_widget9_lists_widget9_component__WEBPACK_IMPORTED_MODULE_5__["ListsWidget9Component"],
                    _stats_stats_widget11_stats_widget11_component__WEBPACK_IMPORTED_MODULE_6__["StatsWidget11Component"],
                    _stats_stats_widget12_stats_widget12_component__WEBPACK_IMPORTED_MODULE_7__["StatsWidget12Component"],
                    _lists_lists_widget1_lists_widget1_component__WEBPACK_IMPORTED_MODULE_8__["ListsWidget1Component"],
                    _lists_lists_widget3_lists_widget3_component__WEBPACK_IMPORTED_MODULE_9__["ListsWidget3Component"],
                    _lists_lists_widget4_lists_widget4_component__WEBPACK_IMPORTED_MODULE_10__["ListsWidget4Component"],
                    _lists_lists_widget8_lists_widget8_component__WEBPACK_IMPORTED_MODULE_11__["ListsWidget8Component"],
                    _mixed_mixed_widget14_mixed_widget14_component__WEBPACK_IMPORTED_MODULE_12__["MixedWidget14Component"],
                    _advance_tables_advance_tables_widget4_advance_tables_widget4_component__WEBPACK_IMPORTED_MODULE_13__["AdvanceTablesWidget4Component"],
                    _advance_tables_advance_tables_widget2_advance_tables_widget2_component__WEBPACK_IMPORTED_MODULE_14__["AdvanceTablesWidget2Component"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/_models/assetDto.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/_models/assetDto.model.ts ***!
  \***********************************************************/
/*! exports provided: AssetDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDto", function() { return AssetDto; });
class AssetDto {
}


/***/ }),

/***/ "./src/app/pages/dashboard/_models/ruuvi-websocket.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/_models/ruuvi-websocket.model.ts ***!
  \******************************************************************/
/*! exports provided: RuuviWebsocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuuviWebsocket", function() { return RuuviWebsocket; });
class RuuviWebsocket {
}


/***/ }),

/***/ "./src/app/pages/dashboard/_services/asset-data.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard/_services/asset-data.service.ts ***!
  \*****************************************************************/
/*! exports provided: AssetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDataService", function() { return AssetDataService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AssetDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
        this.endpoint = 'api/assets';
    }
    read(id) {
        return this.httpClient
            .get(`${this.url}/${this.endpoint}/${id}`);
    }
    list() {
        return this.httpClient
            .get(`${this.url}/${this.endpoint}`);
    }
}
AssetDataService.ɵfac = function AssetDataService_Factory(t) { return new (t || AssetDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AssetDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssetDataService, factory: AssetDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AssetDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/_services/ruuvi-websocket.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/_services/ruuvi-websocket.service.ts ***!
  \**********************************************************************/
/*! exports provided: RuuviWebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuuviWebsocketService", function() { return RuuviWebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _models_ruuvi_websocket_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/ruuvi-websocket.model */ "./src/app/pages/dashboard/_models/ruuvi-websocket.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");






class RuuviWebsocketService {
    constructor() {
        this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.endpoint = 'liveasset';
        this.receivedMessageObject = new _models_ruuvi_websocket_model__WEBPACK_IMPORTED_MODULE_2__["RuuviWebsocket"]();
        this.sharedObj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.startConnection = () => {
            // intitializing the the hub connection  
            this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]()
                .withUrl(`${this.url}/${this.endpoint}`)
                .withAutomaticReconnect()
                .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].Information)
                .build();
            this.hubConnection
                .start()
                .then(() => console.log('Connection started'))
                .catch(err => console.log('Error while starting connection: ' + err));
        };
        this.addAssetDataListener = () => {
            this.hubConnection.on('GetNewAssetData', output => {
                this.mapReceivedMessage(output);
            });
        };
    }
    mapReceivedMessage(output) {
        this.receivedMessageObject = output;
        this.sharedObj.next(this.receivedMessageObject);
    }
    retrieveMappedObject() {
        return this.sharedObj.asObservable();
    }
}
RuuviWebsocketService.ɵfac = function RuuviWebsocketService_Factory(t) { return new (t || RuuviWebsocketService)(); };
RuuviWebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RuuviWebsocketService, factory: RuuviWebsocketService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RuuviWebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-table/dashboard-table.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-table/dashboard-table.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTableComponent", function() { return DashboardTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a1) { return ["/asset", a1]; };
function DashboardTableComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " View details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.deviceId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.temperature[0].value, " \u00B0C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.humidity[0].value, " Pa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.pressure[0].value, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r1.id));
} }
class DashboardTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardTableComponent.ɵfac = function DashboardTableComponent_Factory(t) { return new (t || DashboardTableComponent)(); };
DashboardTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardTableComponent, selectors: [["app-dashboard-table"]], inputs: { assetData: "assetData" }, decls: 26, vars: 3, consts: [[1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0", "py-5"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "card-body", "pt-0", "pb-3"], [1, "tab-content"], [1, "table", "table-head-custom", "table-head-bg", "table-borderless", "table-vertical-center"], [1, "text-left", "text-uppercase"], [1, "pl-7", 2, "min-width", "250px"], [1, "text-dark-75"], [2, "min-width", "100px"], [4, "ngFor", "ngForOf"], [1, "text-dark-75", "font-weight-bolder", "d-block", "font-size-lg"], [1, "btn", "btn-light", "btn-hover-primary", "btn-sm", 3, "routerLink"]], template: function DashboardTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assets Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Device Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Humidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pressure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DashboardTableComponent_tr_24_Template, 19, 8, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 1, ctx.assetData));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQtdGFibGUvZGFzaGJvYXJkLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-table',
                templateUrl: './dashboard-table.component.html',
                styleUrls: ['./dashboard-table.component.scss']
            }]
    }], function () { return []; }, { assetData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['assetData']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_assetDto_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_models/assetDto.model */ "./src/app/pages/dashboard/_models/assetDto.model.ts");
/* harmony import */ var _services_asset_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/asset-data.service */ "./src/app/pages/dashboard/_services/asset-data.service.ts");
/* harmony import */ var _services_ruuvi_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/ruuvi-websocket.service */ "./src/app/pages/dashboard/_services/ruuvi-websocket.service.ts");
/* harmony import */ var _dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-table/dashboard-table.component */ "./src/app/pages/dashboard/dashboard-table/dashboard-table.component.ts");







class DashboardComponent {
    constructor(assetDataService, ruuviDataService) {
        this.assetDataService = assetDataService;
        this.ruuviDataService = ruuviDataService;
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_assetDto_model__WEBPACK_IMPORTED_MODULE_2__["AssetDto"]());
        this.Data = this._data.asObservable();
    }
    ngOnInit() {
        this.Data = this.assetDataService.list().pipe();
        this.ruuviDataService.startConnection();
        this.ruuviDataService.addAssetDataListener();
        this.ruuviDataService.retrieveMappedObject();
        const websocketSub = this.ruuviDataService
            .retrieveMappedObject()
            .subscribe((receivedObj) => {
            this.addToData(receivedObj);
        });
    }
    addToData(obj) {
        const nextData = this._data.getValue();
        nextData.temperature.push(obj.temperature);
        nextData.humidity.push(obj.humidity);
        nextData.pressure.push(obj.pressure);
        nextData.batteryLevel.push(obj.batteryLevel);
        nextData.route.push(obj.route);
        this._data.next(nextData);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_data_service__WEBPACK_IMPORTED_MODULE_3__["AssetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ruuvi_websocket_service__WEBPACK_IMPORTED_MODULE_4__["RuuviWebsocketService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 1, consts: [[3, "assetData"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("assetData", ctx.Data);
    } }, directives: [_dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_5__["DashboardTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-dashboard",
                templateUrl: "./dashboard.component.html",
                styleUrls: ["./dashboard.component.scss"],
            }]
    }], function () { return [{ type: _services_asset_data_service__WEBPACK_IMPORTED_MODULE_3__["AssetDataService"] }, { type: _services_ruuvi_websocket_service__WEBPACK_IMPORTED_MODULE_4__["RuuviWebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/partials/content/widgets/widgets.module */ "./src/app/_metronic/partials/content/widgets/widgets.module.ts");
/* harmony import */ var _dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-table/dashboard-table.component */ "./src/app/pages/dashboard/dashboard-table/dashboard-table.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_ruuvi_websocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/ruuvi-websocket.service */ "./src/app/pages/dashboard/_services/ruuvi-websocket.service.ts");










class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _services_ruuvi_websocket_service__WEBPACK_IMPORTED_MODULE_7__["RuuviWebsocketService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_5__["DashboardTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_5__["DashboardTableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                        },
                    ]),
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _services_ruuvi_websocket_service__WEBPACK_IMPORTED_MODULE_7__["RuuviWebsocketService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map