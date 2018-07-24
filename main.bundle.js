webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-index/admin-projects-index/admin-projects-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-index/admin-projects-index/admin-projects-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <!-- DATA TABLE -->\n        <h3 class=\"title-5 m-b-35\">Proyektlər</h3>\n        <div class=\"table-data__tool\">\n            <div class=\"table-data__tool-left\">\n                <nav aria-label=\"Page navigation example\">\n                    <ul class=\"pagination\">\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" (click)=\"first($event)\" href=\"#\" aria-label=\"Previous\">\n                                <span aria-hidden=\"true\">&laquo;</span>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n                        <li [class.active]=\"(page + 1) == current_page\" class=\"page-item\" *ngFor=\"let page of pages\">\n                            <a class=\"page-link\" (click)=\"updatePage((page + 1), $event)\" href=\"#\">{{page + 1}}</a>\n                        </li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" (click)=\"last($event)\" href=\"#\" aria-label=\"Next\">\n                                <span aria-hidden=\"true\">&raquo;</span>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n            <div class=\"table-data__tool-right\">\n                <button class=\"au-btn au-btn-icon au-btn--green au-btn--small\" (click)=\"create()\">\n                    <i class=\"zmdi zmdi-plus\"></i>Proyekt</button>\n            </div>\n        </div>\n        \n        <div class=\"table-responsive table-responsive-data2\">\n            <table class=\"table table-data2\">\n                <thead>\n                    <tr>\n                        <th>\n                            No\n                        </th>\n                        <th>Adı</th>\n                        <th>Qiymət</th>\n                        <th>Otaq</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"tr-shadow\"  *ngFor=\"let project of projects\">\n\n                        <td>{{project['project_id']}}</td>\n                        <td>\n                            {{project['project_title']}}\n                        </td>\n                        <td class=\"desc\">{{project['project_price']}}</td>\n                        <td>\n                            <span class=\"status--process\">{{project['project_rooms']}}</span>\n                        </td>\n                        <td>\n                            <div class=\"table-data-feature\">\n                                <button class=\"item\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"More\">\n                                    <i class=\"zmdi zmdi-info\"></i>\n                                </button>\n                                <button class=\"item\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\">\n                                    <i class=\"zmdi zmdi-edit\"></i>\n                                </button>\n                                <button (click)=\"delete(project['project_id'])\" class=\"item\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\">\n                                    <i class=\"zmdi zmdi-delete\"></i>\n                                </button>\n                                \n                            </div>\n                        </td>\n                    </tr>\n                    <tr class=\"spacer\"></tr>\n                </tbody>\n            </table>\n            \n        </div>\n        <!-- END DATA TABLE -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-index/admin-projects-index/admin-projects-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProjectsIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("./src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cookie_service__ = __webpack_require__("./src/app/services/cookie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




var AdminProjectsIndexComponent = /** @class */ (function () {
    function AdminProjectsIndexComponent(projectService, cookie) {
        this.projectService = projectService;
        this.cookie = cookie;
        this.pages = new Array;
        this.current_page = 1;
    }
    AdminProjectsIndexComponent.prototype.ngOnInit = function () {
        this.getProjects(this.current_page);
        // this.projects.slice((this.project_count - 10), 1);
    };
    AdminProjectsIndexComponent.prototype.getProjects = function (page) {
        var _this = this;
        this.projectService.getProjcets(page)
            .subscribe(function (data) {
            _this.projects = data['data'];
            var last_page = data['last_page'];
            _this.current_page = data['current_page'];
            _this.pages = Array.from(Array(last_page).keys());
            _this.last_page = data['last_page'];
            _this.project_count = data['total'];
        });
    };
    AdminProjectsIndexComponent.prototype.updatePage = function (index, e) {
        e.preventDefault();
        this.current_page = index;
        this.getProjects(this.current_page);
    };
    AdminProjectsIndexComponent.prototype.first = function (e) {
        e.preventDefault();
        this.getProjects(1);
    };
    AdminProjectsIndexComponent.prototype.last = function (e) {
        e.preventDefault();
        this.getProjects(this.last_page);
    };
    AdminProjectsIndexComponent.prototype.delete = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Silmək istədiyinizə əminsiniz mi?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sil',
            cancelButtonText: "Ləğv et"
        }).then(function (result) {
            if (result.value) {
                _this.projectService.delete(id)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        // this.projects.forEach((data, i) => {
                        //   if(data['project_id'] == id){
                        //     console.log(this.projects[i]);
                        //     this.projects.splice(i, 1);
                        //   }
                        // })
                        _this.getProjects(_this.current_page);
                        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                            title: 'Silindi',
                            type: 'success'
                        });
                    }
                    else if (data['status'] == 204) {
                        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Səhvlik!', 'warning');
                    }
                });
            }
        });
    };
    AdminProjectsIndexComponent.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formValues, project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                            title: 'Proyekt yarat',
                            html: '<input id="swal-input1" placeholder="Adı" class="swal2-input">' +
                                '<input id="swal-input2" placeholder="Qiyməti" class="swal2-input">' +
                                '<input id="swal-input3" placeholder="Otaq" class="swal2-input">',
                            allowEnterKey: true,
                            focusConfirm: false,
                            confirmButtonText: 'Yarat',
                            preConfirm: function () {
                                return [
                                    document.getElementById('swal-input1').value,
                                    document.getElementById('swal-input2').value,
                                    document.getElementById('swal-input3').value
                                ];
                            },
                            allowOutsideClick: function () { return !__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.isLoading(); }
                        })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            project = {
                                project_title: formValues[0],
                                project_price: formValues[1],
                                project_rooms: formValues[2]
                            };
                            this.projectService.create(project)
                                .subscribe(function (data) {
                                if (data['status'] == 200) {
                                    if (_this.current_page == 1) {
                                        _this.projects.pop();
                                        _this.projects.unshift(data['data']);
                                    }
                                    var toast = __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000
                                    });
                                    toast({
                                        type: 'success',
                                        title: 'Yaradıldı'
                                    });
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminProjectsIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-projects-index',
            template: __webpack_require__("./src/app/admin/admin-index/admin-projects-index/admin-projects-index.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin-index/admin-projects-index/admin-projects-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_cookie_service__["a" /* CookieService */]])
    ], AdminProjectsIndexComponent);
    return AdminProjectsIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-index/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-index/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<body id=\"animsition\">\n<div class=\"page-wrapper\">\n    <!-- HEADER MOBILE-->\n    <header class=\"header-mobile d-block d-lg-none\">\n        <div class=\"header-mobile__bar\">\n            <div class=\"container-fluid\">\n                <div class=\"header-mobile-inner\">\n                    <a class=\"logo\" href=\"index.html\">\n                        <img src=\"images/icon/logo.png\" alt=\"CoolAdmin\" />\n                    </a>\n                    <button class=\"hamburger hamburger--slider\" type=\"button\">\n                        <span class=\"hamburger-box\">\n                            <span class=\"hamburger-inner\"></span>\n                        </span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <nav class=\"navbar-mobile\">\n            <div class=\"container-fluid\">\n                <ul class=\"navbar-mobile__list list-unstyled\">\n                    <li class=\"has-sub\">\n                        <a class=\"js-arrow\" href=\"#\">\n                            <i class=\"fas fa-tachometer-alt\"></i>Dashboard</a>\n                        <ul class=\"navbar-mobile-sub__list list-unstyled js-sub-list\">\n                            <li>\n                                <a href=\"index.html\">Dashboard 1</a>\n                            </li>\n                            <li>\n                                <a href=\"index2.html\">Dashboard 2</a>\n                            </li>\n                            <li>\n                                <a href=\"index3.html\">Dashboard 3</a>\n                            </li>\n                            <li>\n                                <a href=\"index4.html\">Dashboard 4</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"chart.html\">\n                            <i class=\"fas fa-home\"></i>Proyektlər</a>\n                    </li>\n                    <li>\n                        <a href=\"table.html\">\n                            <i class=\"fas fa-table\"></i>Tables</a>\n                    </li>\n                    <li>\n                        <a href=\"form.html\">\n                            <i class=\"far fa-check-square\"></i>Forms</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-calendar-alt\"></i>Calendar</a>\n                    </li>\n                    <li>\n                        <a href=\"map.html\">\n                            <i class=\"fas fa-map-marker-alt\"></i>Maps</a>\n                    </li>\n                    <li class=\"has-sub\">\n                        <a class=\"js-arrow\" href=\"#\">\n                            <i class=\"fas fa-copy\"></i>Pages</a>\n                        <ul class=\"navbar-mobile-sub__list list-unstyled js-sub-list\">\n                            <li>\n                                <a href=\"login.html\">Login</a>\n                            </li>\n                            <li>\n                                <a href=\"register.html\">Register</a>\n                            </li>\n                            <li>\n                                <a href=\"forget-pass.html\">Forget Password</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"has-sub\">\n                        <a class=\"js-arrow\" href=\"#\">\n                            <i class=\"fas fa-desktop\"></i>UI Elements</a>\n                        <ul class=\"navbar-mobile-sub__list list-unstyled js-sub-list\">\n                            <li>\n                                <a href=\"button.html\">Button</a>\n                            </li>\n                            <li>\n                                <a href=\"badge.html\">Badges</a>\n                            </li>\n                            <li>\n                                <a href=\"tab.html\">Tabs</a>\n                            </li>\n                            <li>\n                                <a href=\"card.html\">Cards</a>\n                            </li>\n                            <li>\n                                <a href=\"alert.html\">Alerts</a>\n                            </li>\n                            <li>\n                                <a href=\"progress-bar.html\">Progress Bars</a>\n                            </li>\n                            <li>\n                                <a href=\"modal.html\">Modals</a>\n                            </li>\n                            <li>\n                                <a href=\"switch.html\">Switchs</a>\n                            </li>\n                            <li>\n                                <a href=\"grid.html\">Grids</a>\n                            </li>\n                            <li>\n                                <a href=\"fontawesome.html\">Fontawesome Icon</a>\n                            </li>\n                            <li>\n                                <a href=\"typo.html\">Typography</a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </header>\n    <!-- END HEADER MOBILE-->\n\n    <!-- MENU SIDEBAR-->\n    <aside class=\"menu-sidebar d-none d-lg-block\">\n        <div class=\"logo\">\n            <a href=\"#\">\n                <img src=\"images/icon/logo.png\" alt=\"Cool Admin\" />\n            </a>\n        </div>\n        <div class=\"menu-sidebar__content js-scrollbar1\">\n            <nav class=\"navbar-sidebar\">\n                <ul class=\"list-unstyled navbar__list\">\n                    <li>\n                        <a routerLink=\"/admin\">\n                            <i class=\"fas fa-tachometer-alt\"></i>Ana səhifə</a>\n                    </li>\n                    <!-- <li class=\"active has-sub\">\n                        <a class=\"js-arrow\" href=\"#\">\n                            <i class=\"fas fa-tachometer-alt\"></i>Dashboard</a>\n                        <ul class=\"list-unstyled navbar__sub-list js-sub-list\">\n                            <li>\n                                <a href=\"index.html\">Dashboard 1</a>\n                            </li>\n                            <li>\n                                <a href=\"index2.html\">Dashboard 2</a>\n                            </li>\n                            <li>\n                                <a href=\"index3.html\">Dashboard 3</a>\n                            </li>\n                            <li>\n                                <a href=\"index4.html\">Dashboard 4</a>\n                            </li>\n                        </ul>\n                    </li> -->\n                    <li>\n                        <a routerLink=\"projects\">\n                            <i class=\"fas fa-home\"></i>Proyektlər</a>\n                    </li>\n                    <!-- <li>\n                        <a href=\"table.html\">\n                            <i class=\"fas fa-table\"></i>Tables</a>\n                    </li>\n                    \n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-calendar-alt\"></i>Calendar</a>\n                    </li>\n                    <li>\n                        <a href=\"map.html\">\n                            <i class=\"fas fa-map-marker-alt\"></i>Maps</a>\n                    </li>\n                    <li class=\"has-sub\">\n                        <a class=\"js-arrow\" href=\"#\">\n                            <i class=\"fas fa-copy\"></i>Pages</a>\n                        <ul class=\"list-unstyled navbar__sub-list js-sub-list\">\n                            <li>\n                                <a href=\"login.html\">Login</a>\n                            </li>\n                            <li>\n                                <a href=\"register.html\">Register</a>\n                            </li>\n                            <li>\n                                <a href=\"forget-pass.html\">Forget Password</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"has-sub\">\n                        <a class=\"js-arrow\" href=\"#\">\n                            <i class=\"fas fa-desktop\"></i>UI Elements</a>\n                        <ul class=\"list-unstyled navbar__sub-list js-sub-list\">\n                            <li>\n                                <a href=\"button.html\">Button</a>\n                            </li>\n                            <li>\n                                <a href=\"badge.html\">Badges</a>\n                            </li>\n                            <li>\n                                <a href=\"tab.html\">Tabs</a>\n                            </li>\n                            <li>\n                                <a href=\"card.html\">Cards</a>\n                            </li>\n                            <li>\n                                <a href=\"alert.html\">Alerts</a>\n                            </li>\n                            <li>\n                                <a href=\"progress-bar.html\">Progress Bars</a>\n                            </li>\n                            <li>\n                                <a href=\"modal.html\">Modals</a>\n                            </li>\n                            <li>\n                                <a href=\"switch.html\">Switchs</a>\n                            </li>\n                            <li>\n                                <a href=\"grid.html\">Grids</a>\n                            </li>\n                            <li>\n                                <a href=\"fontawesome.html\">Fontawesome Icon</a>\n                            </li>\n                            <li>\n                                <a href=\"typo.html\">Typography</a>\n                            </li>\n                        </ul>\n                    </li> -->\n                </ul>\n            </nav>\n        </div>\n    </aside>\n    <!-- END MENU SIDEBAR-->\n\n    <!-- PAGE CONTAINER-->\n    <div class=\"page-container\">\n        <!-- HEADER DESKTOP-->\n        <header class=\"header-desktop\">\n            <div class=\"section__content section__content--p30\">\n                <div class=\"container-fluid\">\n                    <div class=\"header-wrap\">\n                        <form class=\"form-header\" action=\"\" method=\"POST\">\n                            <input class=\"au-input au-input--xl\" type=\"text\" name=\"search\" placeholder=\"Search for datas &amp; reports...\" />\n                            <button class=\"au-btn--submit\" type=\"submit\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </button>\n                        </form>\n                        <div class=\"header-button\">\n                            <div class=\"noti-wrap\">\n                                <div class=\"noti__item js-item-menu\">\n                                    <i class=\"zmdi zmdi-comment-more\"></i>\n                                    <span class=\"quantity\">1</span>\n                                    <div class=\"mess-dropdown js-dropdown\">\n                                        <div class=\"mess__title\">\n                                            <p>You have 2 news message</p>\n                                        </div>\n                                        <div class=\"mess__item\">\n                                            <div class=\"image img-cir img-40\">\n                                                <img src=\"images/icon/avatar-06.jpg\" alt=\"Michelle Moreno\" />\n                                            </div>\n                                            <div class=\"content\">\n                                                <h6>Michelle Moreno</h6>\n                                                <p>Have sent a photo</p>\n                                                <span class=\"time\">3 min ago</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"mess__item\">\n                                            <div class=\"image img-cir img-40\">\n                                                <img src=\"images/icon/avatar-04.jpg\" alt=\"Diane Myers\" />\n                                            </div>\n                                            <div class=\"content\">\n                                                <h6>Diane Myers</h6>\n                                                <p>You are now connected on message</p>\n                                                <span class=\"time\">Yesterday</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"mess__footer\">\n                                            <a href=\"#\">View all messages</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"noti__item js-item-menu\">\n                                    <i class=\"zmdi zmdi-email\"></i>\n                                    <span class=\"quantity\">1</span>\n                                    <div class=\"email-dropdown js-dropdown\">\n                                        <div class=\"email__title\">\n                                            <p>You have 3 New Emails</p>\n                                        </div>\n                                        <div class=\"email__item\">\n                                            <div class=\"image img-cir img-40\">\n                                                <img src=\"images/icon/avatar-06.jpg\" alt=\"Cynthia Harvey\" />\n                                            </div>\n                                            <div class=\"content\">\n                                                <p>Meeting about new dashboard...</p>\n                                                <span>Cynthia Harvey, 3 min ago</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"email__item\">\n                                            <div class=\"image img-cir img-40\">\n                                                <img src=\"images/icon/avatar-05.jpg\" alt=\"Cynthia Harvey\" />\n                                            </div>\n                                            <div class=\"content\">\n                                                <p>Meeting about new dashboard...</p>\n                                                <span>Cynthia Harvey, Yesterday</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"email__item\">\n                                            <div class=\"image img-cir img-40\">\n                                                <img src=\"images/icon/avatar-04.jpg\" alt=\"Cynthia Harvey\" />\n                                            </div>\n                                            <div class=\"content\">\n                                                <p>Meeting about new dashboard...</p>\n                                                <span>Cynthia Harvey, April 12,,2018</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"email__footer\">\n                                            <a href=\"#\">See all emails</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"noti__item js-item-menu\">\n                                    <i class=\"zmdi zmdi-notifications\"></i>\n                                    <span class=\"quantity\">3</span>\n                                    <div class=\"notifi-dropdown js-dropdown\">\n                                        <div class=\"notifi__title\">\n                                            <p>You have 3 Notifications</p>\n                                        </div>\n                                        <div class=\"notifi__item\">\n                                            <div class=\"bg-c1 img-cir img-40\">\n                                                <i class=\"zmdi zmdi-email-open\"></i>\n                                            </div>\n                                            <div class=\"content\">\n                                                <p>You got a email notification</p>\n                                                <span class=\"date\">April 12, 2018 06:50</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"notifi__item\">\n                                            <div class=\"bg-c2 img-cir img-40\">\n                                                <i class=\"zmdi zmdi-account-box\"></i>\n                                            </div>\n                                            <div class=\"content\">\n                                                <p>Your account has been blocked</p>\n                                                <span class=\"date\">April 12, 2018 06:50</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"notifi__item\">\n                                            <div class=\"bg-c3 img-cir img-40\">\n                                                <i class=\"zmdi zmdi-file-text\"></i>\n                                            </div>\n                                            <div class=\"content\">\n                                                <p>You got a new file</p>\n                                                <span class=\"date\">April 12, 2018 06:50</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"notifi__footer\">\n                                            <a href=\"#\">All notifications</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"account-wrap\">\n                                <div class=\"account-item clearfix js-item-menu\">\n                                    <div class=\"image\">\n                                        <img src=\"images/icon/avatar-01.jpg\" alt=\"John Doe\" />\n                                    </div>\n                                    <div class=\"content\">\n                                        <a class=\"js-acc-btn\" href=\"#\">john doe</a>\n                                    </div>\n                                    <div class=\"account-dropdown js-dropdown\">\n                                        <div class=\"info clearfix\">\n                                            <div class=\"image\">\n                                                <a href=\"#\">\n                                                    <img src=\"images/icon/avatar-01.jpg\" alt=\"John Doe\" />\n                                                </a>\n                                            </div>\n                                            <div class=\"content\">\n                                                <h5 class=\"name\">\n                                                    <a href=\"#\">john doe</a>\n                                                </h5>\n                                                <span class=\"email\">johndoe@example.com</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"account-dropdown__body\">\n                                            <div class=\"account-dropdown__item\">\n                                                <a href=\"#\">\n                                                    <i class=\"zmdi zmdi-account\"></i>Account</a>\n                                            </div>\n                                            <div class=\"account-dropdown__item\">\n                                                <a href=\"#\">\n                                                    <i class=\"zmdi zmdi-settings\"></i>Setting</a>\n                                            </div>\n                                            <div class=\"account-dropdown__item\">\n                                                <a href=\"#\">\n                                                    <i class=\"zmdi zmdi-money-box\"></i>Billing</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"account-dropdown__footer\">\n                                            <a href=\"#\">\n                                                <i class=\"zmdi zmdi-power\"></i>Logout</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </header>\n        <!-- HEADER DESKTOP-->\n\n        <!-- MAIN CONTENT-->\n        <div class=\"main-content\">\n            <div class=\"section__content section__content--p30\">\n                <div class=\"container-fluid\">\n                    <router-outlet (activate)=\"onRouteChange()\"></router-outlet>\n                </div>\n            </div>\n        </div>\n        <!-- END MAIN CONTENT-->\n        <!-- END PAGE CONTAINER-->\n    </div>\n\n</div>\n</body>"

/***/ }),

/***/ "./src/app/admin/admin-index/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onRouteChange = function () {
        this.installScripts();
    };
    AdminComponent.prototype.installScripts = function () {
        var jquery = document.createElement('script');
        jquery.src = "assets/scripts/jquery-3.2.1.min.js";
        document.body.appendChild(jquery);
        var popper = document.createElement('script');
        popper.src = "assets/scripts/popper.min.js";
        document.body.appendChild(popper);
        var bootstrap = document.createElement('script');
        bootstrap.src = "assets/scripts/bootstrap.min.js";
        document.body.appendChild(bootstrap);
        var slick = document.createElement('script');
        slick.src = "assets/scripts/slick.min.js";
        document.body.appendChild(slick);
        var wow = document.createElement('script');
        wow.src = "assets/scripts/wow.min.js";
        document.body.appendChild(wow);
        var animsition = document.createElement('script');
        animsition.src = "assets/scripts/animsition.min.js";
        document.body.appendChild(animsition);
        var bootstrapprogressbar = document.createElement('script');
        bootstrapprogressbar.src = "assets/scripts/bootstrap-progressbar.min.js";
        document.body.appendChild(bootstrapprogressbar);
        var jquerywaypoints = document.createElement('script');
        jquerywaypoints.src = "assets/scripts/jquery.waypoints.min.js";
        document.body.appendChild(jquerywaypoints);
        var jquerycounterup = document.createElement('script');
        jquerycounterup.src = "assets/scripts/jquery.counterup.min.js";
        document.body.appendChild(jquerycounterup);
        var circleprogress = document.createElement('script');
        circleprogress.src = "assets/scripts/circle-progress.min.js";
        document.body.appendChild(circleprogress);
        var perfectscrollbar = document.createElement('script');
        perfectscrollbar.src = "assets/scripts/perfect-scrollbar.js";
        document.body.appendChild(perfectscrollbar);
        var Chart = document.createElement('script');
        Chart.src = "assets/scripts/Chart.bundle.min.js";
        document.body.appendChild(Chart);
        var select2 = document.createElement('script');
        select2.src = "assets/scripts/select2.min.js";
        document.body.appendChild(select2);
        var main = document.createElement('script');
        main.src = "assets/scripts/main.js";
        document.body.appendChild(main);
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin-index/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin-index/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-index/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-index/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"overview-wrap\">\n            <h2 class=\"title-1\">overview</h2>\n            <button class=\"au-btn au-btn-icon au-btn--blue\">\n                <i class=\"zmdi zmdi-plus\"></i>add item</button>\n        </div>\n    </div>\n</div>\n<div class=\"row m-t-25\">\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"overview-item overview-item--c1\">\n            <div class=\"overview__inner\">\n                <div class=\"overview-box clearfix\">\n                    <div class=\"icon\">\n                        <i class=\"zmdi zmdi-account-o\"></i>\n                    </div>\n                    <div class=\"text\">\n                        <h2>10368</h2>\n                        <span>members online</span>\n                    </div>\n                </div>\n                <div class=\"overview-chart\">\n                    <canvas id=\"widgetChart1\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"overview-item overview-item--c2\">\n            <div class=\"overview__inner\">\n                <div class=\"overview-box clearfix\">\n                    <div class=\"icon\">\n                        <i class=\"zmdi zmdi-shopping-cart\"></i>\n                    </div>\n                    <div class=\"text\">\n                        <h2>388,688</h2>\n                        <span>items solid</span>\n                    </div>\n                </div>\n                <div class=\"overview-chart\">\n                    <canvas id=\"widgetChart2\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"overview-item overview-item--c3\">\n            <div class=\"overview__inner\">\n                <div class=\"overview-box clearfix\">\n                    <div class=\"icon\">\n                        <i class=\"zmdi zmdi-calendar-note\"></i>\n                    </div>\n                    <div class=\"text\">\n                        <h2>1,086</h2>\n                        <span>this week</span>\n                    </div>\n                </div>\n                <div class=\"overview-chart\">\n                    <canvas id=\"widgetChart3\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"overview-item overview-item--c4\">\n            <div class=\"overview__inner\">\n                <div class=\"overview-box clearfix\">\n                    <div class=\"icon\">\n                        <i class=\"zmdi zmdi-money\"></i>\n                    </div>\n                    <div class=\"text\">\n                        <h2>$1,060,386</h2>\n                        <span>total earnings</span>\n                    </div>\n                </div>\n                <div class=\"overview-chart\">\n                    <canvas id=\"widgetChart4\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"au-card recent-report\">\n            <div class=\"au-card-inner\">\n                <h3 class=\"title-2\">recent reports</h3>\n                <div class=\"chart-info\">\n                    <div class=\"chart-info__left\">\n                        <div class=\"chart-note\">\n                            <span class=\"dot dot--blue\"></span>\n                            <span>products</span>\n                        </div>\n                        <div class=\"chart-note mr-0\">\n                            <span class=\"dot dot--green\"></span>\n                            <span>services</span>\n                        </div>\n                    </div>\n                    <div class=\"chart-info__right\">\n                        <div class=\"chart-statis\">\n                            <span class=\"index incre\">\n                                <i class=\"zmdi zmdi-long-arrow-up\"></i>25%</span>\n                            <span class=\"label\">products</span>\n                        </div>\n                        <div class=\"chart-statis mr-0\">\n                            <span class=\"index decre\">\n                                <i class=\"zmdi zmdi-long-arrow-down\"></i>10%</span>\n                            <span class=\"label\">services</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"recent-report__chart\">\n                    <canvas id=\"recent-rep-chart\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"au-card chart-percent-card\">\n            <div class=\"au-card-inner\">\n                <h3 class=\"title-2 tm-b-5\">char by %</h3>\n                <div class=\"row no-gutters\">\n                    <div class=\"col-xl-6\">\n                        <div class=\"chart-note-wrap\">\n                            <div class=\"chart-note mr-0 d-block\">\n                                <span class=\"dot dot--blue\"></span>\n                                <span>products</span>\n                            </div>\n                            <div class=\"chart-note mr-0 d-block\">\n                                <span class=\"dot dot--red\"></span>\n                                <span>services</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-6\">\n                        <div class=\"percent-chart\">\n                            <canvas id=\"percent-chart\"></canvas>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-9\">\n        <h2 class=\"title-1 m-b-25\">Earnings By Items</h2>\n        <div class=\"table-responsive table--no-card m-b-40\">\n            <table class=\"table table-borderless table-striped table-earning\">\n                <thead>\n                    <tr>\n                        <th>date</th>\n                        <th>order ID</th>\n                        <th>name</th>\n                        <th class=\"text-right\">price</th>\n                        <th class=\"text-right\">quantity</th>\n                        <th class=\"text-right\">total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>2018-09-29 05:57</td>\n                        <td>100398</td>\n                        <td>iPhone X 64Gb Grey</td>\n                        <td class=\"text-right\">$999.00</td>\n                        <td class=\"text-right\">1</td>\n                        <td class=\"text-right\">$999.00</td>\n                    </tr>\n                    <tr>\n                        <td>2018-09-28 01:22</td>\n                        <td>100397</td>\n                        <td>Samsung S8 Black</td>\n                        <td class=\"text-right\">$756.00</td>\n                        <td class=\"text-right\">1</td>\n                        <td class=\"text-right\">$756.00</td>\n                    </tr>\n                    <tr>\n                        <td>2018-09-27 02:12</td>\n                        <td>100396</td>\n                        <td>Game Console Controller</td>\n                        <td class=\"text-right\">$22.00</td>\n                        <td class=\"text-right\">2</td>\n                        <td class=\"text-right\">$44.00</td>\n                    </tr>\n                    <tr>\n                        <td>2018-09-26 23:06</td>\n                        <td>100395</td>\n                        <td>iPhone X 256Gb Black</td>\n                        <td class=\"text-right\">$1199.00</td>\n                        <td class=\"text-right\">1</td>\n                        <td class=\"text-right\">$1199.00</td>\n                    </tr>\n                    <tr>\n                        <td>2018-09-25 19:03</td>\n                        <td>100393</td>\n                        <td>USB 3.0 Cable</td>\n                        <td class=\"text-right\">$10.00</td>\n                        <td class=\"text-right\">3</td>\n                        <td class=\"text-right\">$30.00</td>\n                    </tr>\n                    <tr>\n                        <td>2018-09-29 05:57</td>\n                        <td>100392</td>\n                        <td>Smartwatch 4.0 LTE Wifi</td>\n                        <td class=\"text-right\">$199.00</td>\n                        <td class=\"text-right\">6</td>\n                        <td class=\"text-right\">$1494.00</td>\n                    </tr>\n                    <tr>\n                        <td>2018-09-24 19:10</td>\n                        <td>100391</td>\n                        <td>Camera C430W 4k</td>\n                        <td class=\"text-right\">$699.00</td>\n                        <td class=\"text-right\">1</td>\n                        <td class=\"text-right\">$699.00</td>\n                    </tr>\n                    <tr>\n                        <td>2018-09-22 00:43</td>\n                        <td>100393</td>\n                        <td>USB 3.0 Cable</td>\n                        <td class=\"text-right\">$10.00</td>\n                        <td class=\"text-right\">3</td>\n                        <td class=\"text-right\">$30.00</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-lg-3\">\n        <h2 class=\"title-1 m-b-25\">Top countries</h2>\n        <div class=\"au-card au-card--bg-blue au-card-top-countries m-b-40\">\n            <div class=\"au-card-inner\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-top-countries\">\n                        <tbody>\n                            <tr>\n                                <td>United States</td>\n                                <td class=\"text-right\">$119,366.96</td>\n                            </tr>\n                            <tr>\n                                <td>Australia</td>\n                                <td class=\"text-right\">$70,261.65</td>\n                            </tr>\n                            <tr>\n                                <td>United Kingdom</td>\n                                <td class=\"text-right\">$46,399.22</td>\n                            </tr>\n                            <tr>\n                                <td>Turkey</td>\n                                <td class=\"text-right\">$35,364.90</td>\n                            </tr>\n                            <tr>\n                                <td>Germany</td>\n                                <td class=\"text-right\">$20,366.96</td>\n                            </tr>\n                            <tr>\n                                <td>France</td>\n                                <td class=\"text-right\">$10,366.96</td>\n                            </tr>\n                            <tr>\n                                <td>Australia</td>\n                                <td class=\"text-right\">$5,366.96</td>\n                            </tr>\n                            <tr>\n                                <td>Italy</td>\n                                <td class=\"text-right\">$1639.32</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"au-card au-card--no-shadow au-card--no-pad m-b-40\">\n            <div class=\"au-card-title\" style=\"background-image:url('images/bg-title-01.jpg');\">\n                <div class=\"bg-overlay bg-overlay--blue\"></div>\n                <h3>\n                    <i class=\"zmdi zmdi-account-calendar\"></i>26 April, 2018</h3>\n                <button class=\"au-btn-plus\">\n                    <i class=\"zmdi zmdi-plus\"></i>\n                </button>\n            </div>\n            <div class=\"au-task js-list-load\">\n                <div class=\"au-task__title\">\n                    <p>Tasks for John Doe</p>\n                </div>\n                <div class=\"au-task-list js-scrollbar3\">\n                    <div class=\"au-task__item au-task__item--danger\">\n                        <div class=\"au-task__item-inner\">\n                            <h5 class=\"task\">\n                                <a href=\"#\">Meeting about plan for Admin Template 2018</a>\n                            </h5>\n                            <span class=\"time\">10:00 AM</span>\n                        </div>\n                    </div>\n                    <div class=\"au-task__item au-task__item--warning\">\n                        <div class=\"au-task__item-inner\">\n                            <h5 class=\"task\">\n                                <a href=\"#\">Create new task for Dashboard</a>\n                            </h5>\n                            <span class=\"time\">11:00 AM</span>\n                        </div>\n                    </div>\n                    <div class=\"au-task__item au-task__item--primary\">\n                        <div class=\"au-task__item-inner\">\n                            <h5 class=\"task\">\n                                <a href=\"#\">Meeting about plan for Admin Template 2018</a>\n                            </h5>\n                            <span class=\"time\">02:00 PM</span>\n                        </div>\n                    </div>\n                    <div class=\"au-task__item au-task__item--success\">\n                        <div class=\"au-task__item-inner\">\n                            <h5 class=\"task\">\n                                <a href=\"#\">Create new task for Dashboard</a>\n                            </h5>\n                            <span class=\"time\">03:30 PM</span>\n                        </div>\n                    </div>\n                    <div class=\"au-task__item au-task__item--danger js-load-item\">\n                        <div class=\"au-task__item-inner\">\n                            <h5 class=\"task\">\n                                <a href=\"#\">Meeting about plan for Admin Template 2018</a>\n                            </h5>\n                            <span class=\"time\">10:00 AM</span>\n                        </div>\n                    </div>\n                    <div class=\"au-task__item au-task__item--warning js-load-item\">\n                        <div class=\"au-task__item-inner\">\n                            <h5 class=\"task\">\n                                <a href=\"#\">Create new task for Dashboard</a>\n                            </h5>\n                            <span class=\"time\">11:00 AM</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"au-task__footer\">\n                    <button class=\"au-btn au-btn-load js-load-btn\">load more</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"au-card au-card--no-shadow au-card--no-pad m-b-40\">\n            <div class=\"au-card-title\" style=\"background-image:url('images/bg-title-02.jpg');\">\n                <div class=\"bg-overlay bg-overlay--blue\"></div>\n                <h3>\n                    <i class=\"zmdi zmdi-comment-text\"></i>New Messages</h3>\n                <button class=\"au-btn-plus\">\n                    <i class=\"zmdi zmdi-plus\"></i>\n                </button>\n            </div>\n            <div class=\"au-inbox-wrap js-inbox-wrap\">\n                <div class=\"au-message js-list-load\">\n                    <div class=\"au-message__noti\">\n                        <p>You Have\n                            <span>2</span>\n\n                            new messages\n                        </p>\n                    </div>\n                    <div class=\"au-message-list\">\n                        <div class=\"au-message__item unread\">\n                            <div class=\"au-message__item-inner\">\n                                <div class=\"au-message__item-text\">\n                                    <div class=\"avatar-wrap\">\n                                        <div class=\"avatar\">\n                                            <img src=\"images/icon/avatar-02.jpg\" alt=\"John Smith\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text\">\n                                        <h5 class=\"name\">John Smith</h5>\n                                        <p>Have sent a photo</p>\n                                    </div>\n                                </div>\n                                <div class=\"au-message__item-time\">\n                                    <span>12 Min ago</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"au-message__item unread\">\n                            <div class=\"au-message__item-inner\">\n                                <div class=\"au-message__item-text\">\n                                    <div class=\"avatar-wrap online\">\n                                        <div class=\"avatar\">\n                                            <img src=\"images/icon/avatar-03.jpg\" alt=\"Nicholas Martinez\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text\">\n                                        <h5 class=\"name\">Nicholas Martinez</h5>\n                                        <p>You are now connected on message</p>\n                                    </div>\n                                </div>\n                                <div class=\"au-message__item-time\">\n                                    <span>11:00 PM</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"au-message__item\">\n                            <div class=\"au-message__item-inner\">\n                                <div class=\"au-message__item-text\">\n                                    <div class=\"avatar-wrap online\">\n                                        <div class=\"avatar\">\n                                            <img src=\"images/icon/avatar-04.jpg\" alt=\"Michelle Sims\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text\">\n                                        <h5 class=\"name\">Michelle Sims</h5>\n                                        <p>Lorem ipsum dolor sit amet</p>\n                                    </div>\n                                </div>\n                                <div class=\"au-message__item-time\">\n                                    <span>Yesterday</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"au-message__item\">\n                            <div class=\"au-message__item-inner\">\n                                <div class=\"au-message__item-text\">\n                                    <div class=\"avatar-wrap\">\n                                        <div class=\"avatar\">\n                                            <img src=\"images/icon/avatar-05.jpg\" alt=\"Michelle Sims\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text\">\n                                        <h5 class=\"name\">Michelle Sims</h5>\n                                        <p>Purus feugiat finibus</p>\n                                    </div>\n                                </div>\n                                <div class=\"au-message__item-time\">\n                                    <span>Sunday</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"au-message__item js-load-item\">\n                            <div class=\"au-message__item-inner\">\n                                <div class=\"au-message__item-text\">\n                                    <div class=\"avatar-wrap online\">\n                                        <div class=\"avatar\">\n                                            <img src=\"images/icon/avatar-04.jpg\" alt=\"Michelle Sims\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text\">\n                                        <h5 class=\"name\">Michelle Sims</h5>\n                                        <p>Lorem ipsum dolor sit amet</p>\n                                    </div>\n                                </div>\n                                <div class=\"au-message__item-time\">\n                                    <span>Yesterday</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"au-message__item js-load-item\">\n                            <div class=\"au-message__item-inner\">\n                                <div class=\"au-message__item-text\">\n                                    <div class=\"avatar-wrap\">\n                                        <div class=\"avatar\">\n                                            <img src=\"images/icon/avatar-05.jpg\" alt=\"Michelle Sims\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text\">\n                                        <h5 class=\"name\">Michelle Sims</h5>\n                                        <p>Purus feugiat finibus</p>\n                                    </div>\n                                </div>\n                                <div class=\"au-message__item-time\">\n                                    <span>Sunday</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"au-message__footer\">\n                        <button class=\"au-btn au-btn-load js-load-btn\">load more</button>\n                    </div>\n                </div>\n                <div class=\"au-chat\">\n                    <div class=\"au-chat__title\">\n                        <div class=\"au-chat-info\">\n                            <div class=\"avatar-wrap online\">\n                                <div class=\"avatar avatar--small\">\n                                    <img src=\"images/icon/avatar-02.jpg\" alt=\"John Smith\">\n                                </div>\n                            </div>\n                            <span class=\"nick\">\n                                <a href=\"#\">John Smith</a>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"au-chat__content\">\n                        <div class=\"recei-mess-wrap\">\n                            <span class=\"mess-time\">12 Min ago</span>\n                            <div class=\"recei-mess__inner\">\n                                <div class=\"avatar avatar--tiny\">\n                                    <img src=\"images/icon/avatar-02.jpg\" alt=\"John Smith\">\n                                </div>\n                                <div class=\"recei-mess-list\">\n                                    <div class=\"recei-mess\">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>\n                                    <div class=\"recei-mess\">Donec tempor, sapien ac viverra</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"send-mess-wrap\">\n                            <span class=\"mess-time\">30 Sec ago</span>\n                            <div class=\"send-mess__inner\">\n                                <div class=\"send-mess-list\">\n                                    <div class=\"send-mess\">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"au-chat-textfield\">\n                        <form class=\"au-form-icon\">\n                            <input class=\"au-input au-input--full au-input--h65\" type=\"text\" placeholder=\"Type a message\">\n                            <button class=\"au-input-icon\">\n                                <i class=\"zmdi zmdi-camera\"></i>\n                            </button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"copyright\">\n            <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href=\"https://colorlib.com\">Colorlib</a>.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-index/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/admin/admin-index/index/index.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin-index/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_index_admin_component__ = __webpack_require__("./src/app/admin/admin-index/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_index_admin_projects_index_admin_projects_index_component__ = __webpack_require__("./src/app/admin/admin-index/admin-projects-index/admin-projects-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_index_index_index_component__ = __webpack_require__("./src/app/admin/admin-index/index/index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_index_admin_component__["a" /* AdminComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_index_index_index_component__["a" /* IndexComponent */]
            },
            {
                path: 'projects',
                component: __WEBPACK_IMPORTED_MODULE_4__admin_admin_index_admin_projects_index_admin_projects_index_component__["a" /* AdminProjectsIndexComponent */]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"onRouteChange()\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.onRouteChange = function () {
        this.installScripts();
        this.installScripts2();
    };
    AppComponent.prototype.installScripts = function () {
        // let jquery = document.createElement('script');
        // jquery.src = "assets/scripts/jquery-3.2.1.min.js";
        // document.body.appendChild(jquery);
        var popper = document.createElement('script');
        popper.src = "assets/scripts/popper.min.js";
        document.body.appendChild(popper);
        var bootstrap = document.createElement('script');
        bootstrap.src = "assets/scripts/bootstrap.min.js";
        document.body.appendChild(bootstrap);
        var slick = document.createElement('script');
        slick.src = "assets/scripts/slick.min.js";
        document.body.appendChild(slick);
        var wow = document.createElement('script');
        wow.src = "assets/scripts/wow.min.js";
        document.body.appendChild(wow);
        var animsition = document.createElement('script');
        animsition.src = "assets/scripts/animsition.min.js";
        document.body.appendChild(animsition);
        var bootstrapprogressbar = document.createElement('script');
        bootstrapprogressbar.src = "assets/scripts/bootstrap-progressbar.min.js";
        document.body.appendChild(bootstrapprogressbar);
        var jquerywaypoints = document.createElement('script');
        jquerywaypoints.src = "assets/scripts/jquery.waypoints.min.js";
        document.body.appendChild(jquerywaypoints);
        var jquerycounterup = document.createElement('script');
        jquerycounterup.src = "assets/scripts/jquery.counterup.min.js";
        document.body.appendChild(jquerycounterup);
        var circleprogress = document.createElement('script');
        circleprogress.src = "assets/scripts/circle-progress.min.js";
        document.body.appendChild(circleprogress);
        var perfectscrollbar = document.createElement('script');
        perfectscrollbar.src = "assets/scripts/perfect-scrollbar.js";
        document.body.appendChild(perfectscrollbar);
        var Chart = document.createElement('script');
        Chart.src = "assets/scripts/Chart.bundle.min.js";
        document.body.appendChild(Chart);
        var select2 = document.createElement('script');
        select2.src = "assets/scripts/select2.min.js";
        document.body.appendChild(select2);
        var main = document.createElement('script');
        main.src = "assets/scripts/main.js";
        document.body.appendChild(main);
    };
    AppComponent.prototype.installScripts2 = function () {
        var jquery = document.createElement('script');
        jquery.src = "assets/scripts/ui/jquery.min.js";
        document.body.appendChild(jquery);
        var popper = document.createElement('script');
        popper.src = "assets/scripts/ui/bootstrap.min.js";
        document.body.appendChild(popper);
        var bootstrap = document.createElement('script');
        bootstrap.src = "assets/scripts/ui/smoothscroll.js";
        document.body.appendChild(bootstrap);
        var slick = document.createElement('script');
        slick.src = "assets/scripts/ui/jquery.validate.min.js";
        document.body.appendChild(slick);
        var wow = document.createElement('script');
        wow.src = "assets/scripts/ui/wow.min.js";
        document.body.appendChild(wow);
        var animsition = document.createElement('script');
        animsition.src = "assets/scripts/ui/jquery.stellar.min.js";
        document.body.appendChild(animsition);
        var bootstrapprogressbar = document.createElement('script');
        bootstrapprogressbar.src = "assets/scripts/ui/jquery.magnific-popup.js";
        document.body.appendChild(bootstrapprogressbar);
        var jquerywaypoints = document.createElement('script');
        jquerywaypoints.src = "assets/scripts/ui/owl.carousel.min.js";
        document.body.appendChild(jquerywaypoints);
        var jquerycounterup = document.createElement('script');
        jquerycounterup.src = "assets/scripts/ui/rev-slider/jquery.themepunch.tools.min.js";
        document.body.appendChild(jquerycounterup);
        var circleprogress = document.createElement('script');
        circleprogress.src = "assets/scripts/ui/rev-slider/jquery.themepunch.revolution.min.js";
        document.body.appendChild(circleprogress);
        var rev = document.createElement('script');
        rev.src = "assets/scripts/ui/rev-slider/revolution.extension.actions.min.js";
        document.body.appendChild(rev);
        var carousel = document.createElement('script');
        carousel.src = "assets/scripts/ui/rev-slider/revolution.extension.carousel.min.js";
        document.body.appendChild(carousel);
        var kenburn = document.createElement('script');
        kenburn.src = "assets/scripts/ui/rev-slider/revolution.extension.kenburn.min.js";
        document.body.appendChild(kenburn);
        var layeranimation = document.createElement('script');
        layeranimation.src = "assets/scripts/ui/rev-slider/revolution.extension.layeranimation.min.js";
        document.body.appendChild(layeranimation);
        var migration = document.createElement('script');
        migration.src = "assets/scripts/ui/rev-slider/revolution.extension.migration.min.js";
        document.body.appendChild(migration);
        var navigation = document.createElement('script');
        navigation.src = "assets/scripts/ui/rev-slider/revolution.extension.navigation.min.js";
        document.body.appendChild(navigation);
        var parallax = document.createElement('script');
        parallax.src = "assets/scripts/ui/rev-slider/revolution.extension.parallax.min.js";
        document.body.appendChild(parallax);
        var slideanims = document.createElement('script');
        slideanims.src = "assets/scripts/ui/rev-slider/revolution.extension.slideanims.min.js";
        document.body.appendChild(slideanims);
        var video = document.createElement('script');
        video.src = "assets/scripts/ui/rev-slider/revolution.extension.video.min.js";
        document.body.appendChild(video);
        var interf = document.createElement('script');
        interf.src = "assets/scripts/ui/interface.js";
        document.body.appendChild(interf);
    };
    AppComponent.prototype.installStyles = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_index_admin_component__ = __webpack_require__("./src/app/admin/admin-index/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_index_admin_projects_index_admin_projects_index_component__ = __webpack_require__("./src/app/admin/admin-index/admin-projects-index/admin-projects-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_index_index_index_component__ = __webpack_require__("./src/app/admin/admin-index/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_project_service__ = __webpack_require__("./src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_cookie_service__ = __webpack_require__("./src/app/services/cookie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__admin_admin_index_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_6__admin_admin_index_admin_projects_index_admin_projects_index_component__["a" /* AdminProjectsIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_7__admin_admin_index_index_index_component__["a" /* IndexComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_10__services_cookie_service__["a" /* CookieService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".text-primary{\r\n  color: #c5a47e !important\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n  <div class=\"loader\">\r\n    <div class=\"page-lines\">\r\n      <div class=\"container\">\r\n        <div class=\"col-line col-xs-4\">\r\n          <div class=\"line\"></div>\r\n        </div>\r\n        <div class=\"col-line col-xs-4\">\r\n          <div class=\"line\"></div>\r\n        </div>\r\n        <div class=\"col-line col-xs-4\">\r\n          <div class=\"line\"></div>\r\n          <div class=\"line\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"loader-brand\">\r\n      <div class=\"sk-folding-cube\">\r\n        <div class=\"sk-cube1 sk-cube\"></div>\r\n        <div class=\"sk-cube2 sk-cube\"></div>\r\n        <div class=\"sk-cube4 sk-cube\"></div>\r\n        <div class=\"sk-cube3 sk-cube\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <header id=\"top\" class=\"header-home\">\r\n    <div class=\"brand-panel\">\r\n      <a href=\"#top\" class=\"brand js-target-scroll\">\r\n        go\r\n        <span class=\"text-primary\">.</span>arch\r\n      </a>\r\n      <div class=\"brand-name\">Go.arch</div>\r\n      <div class=\"slide-number\">\r\n        <span class=\"current-number text-primary\">0\r\n          <span class=\"count\">1</span>\r\n        </span>\r\n        <sup>\r\n          <span class=\"delimiter\">/</span> 0\r\n          <span class=\"total-count\"></span>\r\n        </sup>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-phone\">+7 (212) 674-25-10</div>\r\n    <div class=\"vertical-panel\"></div>\r\n    <div class=\"vertical-panel-content\">\r\n      <div class=\"vertical-panel-info\">\r\n        <div class=\"vertical-panel-title\">Architecture buro</div>\r\n        <div class=\"line\"></div>\r\n      </div>\r\n      <ul class=\"social-list\">\r\n        <li>\r\n          <a href=\"#\" class=\"fa fa-instagram\"></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"fa fa-twitter\"></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"fa fa-facebook\"></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <nav class=\"navbar-desctop visible-md visible-lg\">\r\n      <div class=\"container\">\r\n        <a href=\"#top\" class=\"brand js-target-scroll\">\r\n          go\r\n          <span class=\"text-primary\">.</span>arch\r\n        </a>\r\n        <ul class=\"navbar-desctop-menu\">\r\n          <li class=\"active\">\r\n            <a href=\"index.html\">Home</a>\r\n            <ul>\r\n              <li>\r\n                <a href=\"http://paul-themes.com/html/go-arch/demo/light/index.html\">Home - Light</a>\r\n              </li>\r\n              <li class=\"active\">\r\n                <a href=\"index.html\">Home - Dark</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"about.html\">About us</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"projects.html\">Projects</a>\r\n            <ul>\r\n              <li>\r\n                <a href=\"projects.html\">Projects - List</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"project.html\">Project - details</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"blog.html\">Blog</a>\r\n            <ul>\r\n              <li>\r\n                <a href=\"blog.html\">Blog - List</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"blog-details.html\">Blog - Post</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"contacts.html\">Contacts</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n    <nav class=\"navbar-mobile\">\r\n      <a href=\"#top\" class=\"brand js-target-scroll\">\r\n        go\r\n        <span class=\"text-primary\">.</span>arch\r\n      </a>\r\n\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-mobile\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-mobile\">\r\n        <ul class=\"navbar-nav-mobile\">\r\n          <li class=\"active\">\r\n            <a href=\"#\">Home\r\n              <i class=\"fa fa-angle-down\"></i>\r\n            </a>\r\n            <ul>\r\n              <li>\r\n                <a href=\"http://paul-themes.com/html/go-arch/demo/light/index.html\">Home - Light</a>\r\n              </li>\r\n              <li class=\"active\">\r\n                <a href=\"index.html\">— Home - Dark</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"about.html\">About us</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Projects\r\n              <i class=\"fa fa-angle-down\"></i>\r\n            </a>\r\n            <ul>\r\n              <li>\r\n                <a href=\"projects.html\">Projects - List</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"project.html\">Project - details</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Blog\r\n              <i class=\"fa fa-angle-down\"></i>\r\n            </a>\r\n            <ul>\r\n              <li>\r\n                <a href=\"blog.html\">Blog - List</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"blog-details.html\">Blog - Post</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"contacts.html\">Contacts</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n\r\n  <div class=\"layout\">\r\n\r\n    <main class=\"main\">\r\n      <div class=\"arrow-left\"></div>\r\n      <div class=\"arrow-right\"></div>\r\n\r\n      <div class=\"rev_slider_wrapper\">\r\n        <div id=\"rev_slider\" class=\"rev_slider fullscreenbanner\">\r\n          <ul>\r\n\r\n            <li data-transition=\"slotzoom-horizontal\" data-slotamount=\"7\" data-masterspeed=\"1000\" data-fsmasterspeed=\"1000\">\r\n\r\n              <img src=\"../../assets/style/img/slider/slide1.jpg\" alt=\"\" data-bgposition=\"center center\" data-bgfit=\"cover\" data-bgrepeat=\"no-repeat\" class=\"rev-slidebg\">\r\n\r\n              <div class=\"slide-title tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['-18','-18','-18','-18']\"\r\n                data-y=\"['middle','middle','middle','middle']\" data-voffset=\"['-35','-35', '-25']\" data-fontsize=\"['50','45', '35']\"\r\n                data-lineheight=\"['80','75', '65']\" data-width=\"['1100','700','450']\" data-height=\"none\" data-whitespace=\"normal\"\r\n                data-transform_idle=\"o:1;\" data-transform_in=\"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;\"\r\n                data-transform_out=\"y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;\" data-mask_in=\"x:50px;y:0px;s:inherit;e:inherit;\"\r\n                data-mask_out=\"x:inherit;y:inherit;s:inherit;e:inherit;\" data-start=\"500\" data-splitin=\"chars\" data-splitout=\"none\"\r\n                data-responsive_offset=\"on\" data-elementdelay=\"0.05\">Concert hall in new york\r\n              </div>\r\n\r\n              <div class=\"slide-subtitle tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['0']\" data-y=\"['middle','middle','middle','middle']\"\r\n                data-voffset=\"['75','105']\" data-fontsize=\"['18']\" data-whitespace=\"nowrap\" data-transform_idle=\"o:1;\" data-transform_in=\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;\"\r\n                data-transform_out=\"opacity:0;s:1000;s:1000;\" data-mask_in=\"x:0px;y:0px;s:inherit;e:inherit;\" data-start=\"1500\"\r\n                data-splitin=\"none\" data-splitout=\"none\">Concert Hall is the architecture of a new generation, a building\r\n                <br> that exists not only in the dimension of space,\r\n                <br> but also in the dimension of time and communication.\r\n              </div>\r\n\r\n              <div class=\"tp-caption\" data-x=\"['right','right','right','right']\" data-hoffset=\"['0','0','0','0']\" data-y=\"['middle','middle','middle','middle']\"\r\n                data-voffset=\"['195','215']\" data-width=\"none\" data-height=\"none\" data-whitespace=\"nowrap\" data-transform_idle=\"o:1;\"\r\n                data-transform_hover=\"o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;\" data-style_hover=\"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);\"\r\n                data-transform_in=\"y:50px;opacity:0;s:1500;e:Power4.easeInOut;\" data-transform_out=\"y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;\"\r\n                data-mask_out=\"x:inherit;y:inherit;\" data-start=\"1500\" data-splitin=\"none\" data-splitout=\"none\" data-responsive_offset=\"on\">\r\n                <a href=\"#about\" class=\"btn js-target-scroll\">Look more\r\n                  <i class=\"icon-next\"></i>\r\n                </a>\r\n              </div>\r\n            </li>\r\n\r\n            <li data-transition=\"slotzoom-horizontal\" data-slotamount=\"7\" data-easein=\"Power3.easeInOut\" data-easeout=\"Power3.easeInOut\"\r\n              data-masterspeed=\"1000\">\r\n\r\n              <img src=\"../../assets/style/img/slider/slide2.jpg\" alt=\"\" data-bgposition=\"center center\" data-bgfit=\"cover\" data-bgrepeat=\"no-repeat\" class=\"rev-slidebg\">\r\n\r\n              <div class=\"slide-title tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['-18','-18','-18','-18']\"\r\n                data-y=\"['middle','middle','middle','middle']\" data-voffset=\"['-35','-35', '-55']\" data-fontsize=\"['50','45', '35']\"\r\n                data-lineheight=\"['80','75','65']\" data-width=\"['1100','700','500']\" data-height=\"none\" data-whitespace=\"normal\"\r\n                data-transform_idle=\"o:1;\" data-transform_in=\"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;\"\r\n                data-transform_out=\"y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;\" data-mask_in=\"x:50px;y:0px;s:inherit;e:inherit;\"\r\n                data-mask_out=\"x:inherit;y:inherit;s:inherit;e:inherit;\" data-start=\"500\" data-splitin=\"chars\" data-splitout=\"none\"\r\n                data-responsive_offset=\"on\" data-elementdelay=\"0.05\">Exhibition center in boston\r\n              </div>\r\n\r\n              <div class=\"slide-subtitle tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['0']\" data-y=\"['middle','middle','middle','middle']\"\r\n                data-voffset=\"['75','105']\" data-fontsize=\"['18']\" data-whitespace=\"nowrap\" data-transform_idle=\"o:1;\" data-transform_in=\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;\"\r\n                data-transform_out=\"opacity:0;s:1000;s:1000;\" data-mask_in=\"x:0px;y:0px;s:inherit;e:inherit;\" data-start=\"1500\"\r\n                data-splitin=\"none\" data-splitout=\"none\">\r\n                Modern Hotel is the architecture of a new generation, a building\r\n                <br> that exists not only in the dimension of space,\r\n                <br> but also in the dimension of time and communication.\r\n              </div>\r\n\r\n              <div class=\"tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['0']\" data-y=\"['middle','middle','middle','middle']\"\r\n                data-voffset=\"['195','210']\" data-width=\"none\" data-height=\"none\" data-whitespace=\"nowrap\" data-transform_idle=\"o:1;\"\r\n                data-transform_hover=\"o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;\" data-style_hover=\"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);\"\r\n                data-transform_in=\"y:50px;opacity:0;s:1500;e:Power4.easeInOut;\" data-transform_out=\"y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;\"\r\n                data-mask_out=\"x:inherit;y:inherit;\" data-start=\"1500\" data-splitin=\"none\" data-splitout=\"none\" data-responsive_offset=\"on\"\r\n                style=\"z-index: 8;\">\r\n                <a href=\"#about\" class=\"btn js-target-scroll\">Look more\r\n                  <i class=\"icon-next\"></i>\r\n                </a>\r\n              </div>\r\n            </li>\r\n\r\n            <li data-transition=\"slotzoom-horizontal\" data-slotamount=\"7\" data-easein=\"Power3.easeInOut\" data-easeout=\"Power3.easeInOut\"\r\n              data-masterspeed=\"1000\">\r\n\r\n              <img src=\"../../assets/style/img/slider/slide3.jpg\" alt=\"\" data-bgposition=\"center center\" data-bgfit=\"cover\" data-bgrepeat=\"no-repeat\" class=\"rev-slidebg\">\r\n\r\n              <div class=\"slide-title tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['-18','-18','-18','-18']\"\r\n                data-y=\"['middle','middle','middle','middle']\" data-voffset=\"['-35','-35', '-25']\" data-fontsize=\"['50','45', '35']\"\r\n                data-lineheight=\"['80','75', '65']\" data-width=\"['1000','700','450']\" data-height=\"none\" data-whitespace=\"normal\"\r\n                data-transform_idle=\"o:1;\" data-transform_in=\"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;\"\r\n                data-transform_out=\"y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;\" data-mask_in=\"x:50px;y:0px;s:inherit;e:inherit;\"\r\n                data-mask_out=\"x:inherit;y:inherit;s:inherit;e:inherit;\" data-start=\"500\" data-splitin=\"chars\" data-splitout=\"none\"\r\n                data-responsive_offset=\"on\" data-elementdelay=\"0.05\">Modern hotel in london\r\n              </div>\r\n\r\n              <div class=\"slide-subtitle tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['0']\" data-y=\"['middle','middle','middle','middle']\"\r\n                data-voffset=\"['75','105']\" data-fontsize=\"['18']\" data-whitespace=\"nowrap\" data-transform_idle=\"o:1;\" data-transform_in=\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;\"\r\n                data-transform_out=\"opacity:0;s:1000;s:1000;\" data-mask_in=\"x:0px;y:0px;s:inherit;e:inherit;\" data-start=\"1500\"\r\n                data-splitin=\"none\" data-splitout=\"none\">Exhibition Center is the architecture of a new generation,\r\n                <br> a building that exists not only in the dimension of space,\r\n                <br> but also in the dimension of time and communication.\r\n              </div>\r\n\r\n              <div class=\"tp-caption tp-resizeme\" data-x=\"['right','right','right','right']\" data-hoffset=\"['0','0','0','0']\" data-y=\"['middle','middle','middle','middle']\"\r\n                data-voffset=\"['195','215']\" data-width=\"none\" data-height=\"none\" data-whitespace=\"nowrap\" data-transform_idle=\"o:1;\"\r\n                data-transform_hover=\"o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;\" data-style_hover=\"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);\"\r\n                data-transform_in=\"y:50px;opacity:0;s:1500;e:Power4.easeInOut;\" data-transform_out=\"y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;\"\r\n                data-mask_out=\"x:inherit;y:inherit;\" data-start=\"1500\" data-splitin=\"none\" data-splitout=\"none\" data-responsive_offset=\"on\"\r\n                style=\"z-index: 8;\">\r\n                <a href=\"#about\" class=\"btn js-target-scroll\">Look more\r\n                  <i class=\"icon-next\"></i>\r\n                </a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </main>\r\n    <div class=\"content\">\r\n\r\n      <section id=\"about\" class=\"about section\">\r\n        <div class=\"container\">\r\n          <header class=\"section-header\">\r\n            <h2 class=\"section-title\">About\r\n              <span class=\"text-primary\">go.arch</span>\r\n            </h2>\r\n            <strong class=\"fade-title-left\">About</strong>\r\n          </header>\r\n          <div class=\"section-content\">\r\n            <div class=\"row-base row\">\r\n              <div class=\"col-base col-sm-6 col-md-4\">\r\n                <h3 class=\"col-about-title\">we turn ideas into works of art\r\n                  <span class=\"text-primary\">.</span>\r\n                </h3>\r\n                <div class=\"col-about-info\">\r\n                  <p>For each project we establish relationships with partners who we know will help us create added value for\r\n                    your project. As well as bringing together the public and private sectors, we make sector-overarching\r\n                    links to gather knowledge and to learn from each other. The way we undertake projects is based on permanently\r\n                    applying values that reinforce each other: socio-cultural value, experiental value, building-technical\r\n                    value and economical value.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-base col-about-spec col-sm-6 col-md-4\">\r\n                <h3 class=\"col-about-title\">our\r\n                  <br> specialization\r\n                  <span class=\"text-primary\">:</span>\r\n                </h3>\r\n                <div class=\"service-item\">\r\n                  <img alt=\"\" width=\"46\" src=\"../../assets/style/img/img-icon/icon-architecture.png\">\r\n                  <h4>Architecture</h4>\r\n                </div>\r\n                <div class=\"service-item\">\r\n                  <img alt=\"\" width=\"58\" src=\"../../assets/style/img/img-icon/icon-interiors.png\">\r\n                  <h4>Interiors</h4>\r\n                </div>\r\n                <div class=\"service-item\">\r\n                  <img alt=\"\" width=\"58\" src=\"../../assets/style/img/img-icon/icon-planing.png\">\r\n                  <h4>Planing</h4>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix visible-sm\"></div>\r\n              <div class=\"col-base col-about-img col-sm-6 col-md-4\">\r\n                <img alt=\"\" class=\"img-responsive\" src=\"../../assets/style/img/380x370.jpg\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"projects section\">\r\n        <div class=\"container\">\r\n          <h2 class=\"section-title\">Our\r\n            <span class=\"text-primary\">projects</span>\r\n          </h2>\r\n        </div>\r\n        <div class=\"section-content\">\r\n          <div class=\"projects-carousel js-projects-carousel js-projects-gallery\">\r\n            <div class=\"project project-light\">\r\n              <a href=\"../../assets/style/img/projects/1-480x880.jpg\" title=\"project 1\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/1-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Residential care\r\n                      <br> project in Paris\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n            <div class=\"project project-light\">\r\n              <a href=\"../../assets/style/img/projects/2-480x880.jpg\" title=\"project 2\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/2-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Concert hall\r\n                      <br> in New york\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n            <div class=\"project\">\r\n              <a href=\"img/projects/3-480x880.jpg\" title=\"project 3\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/3-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Modern hotel\r\n                      <br>in London\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n            <div class=\"project\">\r\n              <a href=\"img/projects/4-480x880.jpg\" title=\"project 4\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/4-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Modern hotel\r\n                      <br>in London\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n            <div class=\"project\">\r\n              <a href=\"img/projects/5-480x880.jpg\" title=\"project 5\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/5-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Residential care\r\n                      <br> project in Paris\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n            <div class=\"project\">\r\n              <a href=\"img/projects/6-480x880.jpg\" title=\"project 6\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/6-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Residential care\r\n                      <br> project in Paris\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n            <div class=\"project\">\r\n              <a href=\"img/projects/7-480x880.jpg\" title=\"project 7\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/7-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Residential care\r\n                      <br> project in Paris\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n            <div class=\"project\">\r\n              <a href=\"img/projects/8-480x880.jpg\" title=\"project 8\">\r\n                <figure>\r\n                  <img alt=\"\" src=\"../../assets/style/img/projects/8-480x880.jpg\">\r\n                  <figcaption>\r\n                    <h3 class=\"project-title\">\r\n                      Residential care\r\n                      <br> project in Paris\r\n                    </h3>\r\n                    <h4 class=\"project-category\">\r\n                      Architecture\r\n                    </h4>\r\n                    <div class=\"project-zoom\"></div>\r\n                  </figcaption>\r\n                </figure>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"experience section\">\r\n        <div class=\"container\">\r\n          <div class=\"text-parallax\" data-stellar-background-ratio=\"0.85\" style=\"background-image: url('../../assets/style/img/bg/text-1.jpg');\">\r\n            <div class=\"text-parallax-content\">12</div>\r\n          </div>\r\n          <h4 class=\"experience-info wow fadeInRight\">\r\n            <span class=\"text-primary\">Years of successful work</span>\r\n            <br> in the market</h4>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"clients section\">\r\n        <div class=\"container\">\r\n          <header class=\"section-header\">\r\n            <h2 class=\"section-title\">Our\r\n              <span class=\"text-primary\">clients</span>\r\n            </h2>\r\n            <strong class=\"fade-title-left\">clients</strong>\r\n          </header>\r\n          <div class=\"section-content\">\r\n            <ul class=\"clients-list\">\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/1.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/2.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/3.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/4.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/5.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/6.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/7.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/8.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/9.png\">\r\n                </a>\r\n              </li>\r\n              <li class=\"client\">\r\n                <a href=\"#\">\r\n                  <img alt=\"\" src=\"../../assets/style/img/clients/10.png\">\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"section-content\">\r\n            <a href=\"#\" class=\"btn btn-shadow-2\">Work together\r\n              <i class=\"icon-next\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"contacts section\">\r\n        <div class=\"container\">\r\n          <header class=\"section-header\">\r\n            <h2 class=\"section-title\">Get\r\n              <span class=\"text-primary\">in touch</span>\r\n            </h2>\r\n            <strong class=\"fade-title-right\">contacts</strong>\r\n          </header>\r\n          <div class=\"section-content\">\r\n            <div class=\"row-base row\">\r\n              <div class=\"col-address col-base col-md-4\">\r\n                +7 (212) 654-33-35\r\n                <br> +7 (212) 287-85-22\r\n                <br>\r\n                <a href=\"http://paul-themes.com/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"472e2921280720282635242f6924282a\">[email&#160;protected]</a>\r\n                <br> USA, New York, 57 Quigley Bridge\r\n              </div>\r\n              <div class=\"col-base  col-md-8\">\r\n                <form class=\"js-ajax-form\">\r\n                  <div class=\"row-field row\">\r\n                    <div class=\"col-field col-sm-6 col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"name\" required placeholder=\"Name\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" name=\"email\" required placeholder=\"Email *\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-field col-sm-6 col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"tel\" class=\"form-control\" name=\"phone\" placeholder=\"Phone\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"company\" placeholder=\"Company\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-field col-sm-12 col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" name=\"message\" placeholder=\"Message\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-message col-field col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"success-message\">\r\n                          <i class=\"fa fa-check text-primary\"></i> Thank you!. Your message is successfully sent...</div>\r\n                        <div class=\"error-message\">We're sorry, but something went wrong</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-submit text-right\">\r\n                    <button type=\"submit\" class=\"btn btn-shadow-2 wow swing\">Send\r\n                      <i class=\"icon-next\"></i>\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <footer id=\"footer\" class=\"footer\">\r\n        <div class=\"container\">\r\n          <div class=\"row-base row\">\r\n            <div class=\"col-base text-left-md col-md-4\">\r\n              <a href=\"#\" class=\"brand\">\r\n                go\r\n                <span class=\"text-primary\">.</span>arch\r\n              </a>\r\n            </div>\r\n            <div class=\"text-center-md col-base col-md-4\">\r\n              <a href=\"https://themeforest.net/user/murren20\" class=\"author-link\">\r\n                by Murren20\r\n              </a>\r\n            </div>\r\n            <div class=\"text-right-md col-base col-md-4\">\r\n              © go.arch 2016. All Rights Reserved.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n\r\n      <div class=\"page-lines\">\r\n        <div class=\"container\">\r\n          <div class=\"col-line col-xs-4\">\r\n            <div class=\"line\"></div>\r\n          </div>\r\n          <div class=\"col-line col-xs-4\">\r\n            <div class=\"line\"></div>\r\n          </div>\r\n          <div class=\"col-line col-xs-4\">\r\n            <div class=\"line\"></div>\r\n            <div class=\"line\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <script data-cfasync=\"false\" src=\"../../../../cdn-cgi/scripts/f2bf09f8/cloudflare-static/email-decode.min.js\"></script>\r\n  <script src=\"js/jquery.min.js\"></script>\r\n  <script src=\"js/bootstrap.min.js\"></script>\r\n  <script src=\"js/smoothscroll.js\"></script>\r\n  <script src=\"js/jquery.validate.min.js\"></script>\r\n  <script src=\"js/wow.min.js\"></script>\r\n  <script src=\"js/jquery.stellar.min.js\"></script>\r\n  <script src=\"js/jquery.magnific-popup.js\"></script>\r\n  <script src=\"js/owl.carousel.min.js\"></script>\r\n\r\n  <script src=\"js/rev-slider/jquery.themepunch.tools.min.js\"></script>\r\n  <script src=\"js/rev-slider/jquery.themepunch.revolution.min.js\"></script>\r\n\r\n  <script src=\"js/rev-slider/revolution.extension.actions.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.carousel.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.kenburn.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.layeranimation.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.migration.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.navigation.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.parallax.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.slideanims.min.js\"></script>\r\n  <script src=\"js/rev-slider/revolution.extension.video.min.js\"></script>\r\n  <script src=\"js/interface.js\"></script>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.installScripts();
        this.installScripts2();
    };
    HomeComponent.prototype.installScripts = function () {
        var jquery = document.createElement('script');
        jquery.src = "assets/scripts/jquery-3.2.1.min.js";
        document.body.appendChild(jquery);
        var popper = document.createElement('script');
        popper.src = "assets/scripts/popper.min.js";
        document.body.appendChild(popper);
        var bootstrap = document.createElement('script');
        bootstrap.src = "assets/scripts/bootstrap.min.js";
        document.body.appendChild(bootstrap);
        var slick = document.createElement('script');
        slick.src = "assets/scripts/slick.min.js";
        document.body.appendChild(slick);
        var wow = document.createElement('script');
        wow.src = "assets/scripts/wow.min.js";
        document.body.appendChild(wow);
        var animsition = document.createElement('script');
        animsition.src = "assets/scripts/animsition.min.js";
        document.body.appendChild(animsition);
        var bootstrapprogressbar = document.createElement('script');
        bootstrapprogressbar.src = "assets/scripts/bootstrap-progressbar.min.js";
        document.body.appendChild(bootstrapprogressbar);
        var jquerywaypoints = document.createElement('script');
        jquerywaypoints.src = "assets/scripts/jquery.waypoints.min.js";
        document.body.appendChild(jquerywaypoints);
        var jquerycounterup = document.createElement('script');
        jquerycounterup.src = "assets/scripts/jquery.counterup.min.js";
        document.body.appendChild(jquerycounterup);
        var circleprogress = document.createElement('script');
        circleprogress.src = "assets/scripts/circle-progress.min.js";
        document.body.appendChild(circleprogress);
        var perfectscrollbar = document.createElement('script');
        perfectscrollbar.src = "assets/scripts/perfect-scrollbar.js";
        document.body.appendChild(perfectscrollbar);
        var Chart = document.createElement('script');
        Chart.src = "assets/scripts/Chart.bundle.min.js";
        document.body.appendChild(Chart);
        var select2 = document.createElement('script');
        select2.src = "assets/scripts/select2.min.js";
        document.body.appendChild(select2);
        var main = document.createElement('script');
        main.src = "assets/scripts/main.js";
        document.body.appendChild(main);
    };
    HomeComponent.prototype.installScripts2 = function () {
        var jquery = document.createElement('script');
        jquery.src = "assets/scripts/ui/jquery.min.js";
        document.body.appendChild(jquery);
        var popper = document.createElement('script');
        popper.src = "assets/scripts/ui/bootstrap.min.js";
        document.body.appendChild(popper);
        var bootstrap = document.createElement('script');
        bootstrap.src = "assets/scripts/ui/smoothscroll.js";
        document.body.appendChild(bootstrap);
        var slick = document.createElement('script');
        slick.src = "assets/scripts/ui/jquery.validate.min.js";
        document.body.appendChild(slick);
        var wow = document.createElement('script');
        wow.src = "assets/scripts/ui/wow.min.js";
        document.body.appendChild(wow);
        var animsition = document.createElement('script');
        animsition.src = "assets/scripts/ui/jquery.stellar.min.js";
        document.body.appendChild(animsition);
        var bootstrapprogressbar = document.createElement('script');
        bootstrapprogressbar.src = "assets/scripts/ui/jquery.magnific-popup.js";
        document.body.appendChild(bootstrapprogressbar);
        var jquerywaypoints = document.createElement('script');
        jquerywaypoints.src = "assets/scripts/ui/owl.carousel.min.js";
        document.body.appendChild(jquerywaypoints);
        var jquerycounterup = document.createElement('script');
        jquerycounterup.src = "assets/scripts/ui/rev-slider/jquery.themepunch.tools.min.js";
        document.body.appendChild(jquerycounterup);
        var circleprogress = document.createElement('script');
        circleprogress.src = "assets/scripts/ui/rev-slider/jquery.themepunch.revolution.min.js";
        document.body.appendChild(circleprogress);
        var rev = document.createElement('script');
        rev.src = "assets/scripts/ui/rev-slider/revolution.extension.actions.min.js";
        document.body.appendChild(rev);
        var carousel = document.createElement('script');
        carousel.src = "assets/scripts/ui/rev-slider/revolution.extension.carousel.min.js";
        document.body.appendChild(carousel);
        var kenburn = document.createElement('script');
        kenburn.src = "assets/scripts/ui/rev-slider/revolution.extension.kenburn.min.js";
        document.body.appendChild(kenburn);
        var layeranimation = document.createElement('script');
        layeranimation.src = "assets/scripts/ui/rev-slider/revolution.extension.layeranimation.min.js";
        document.body.appendChild(layeranimation);
        var migration = document.createElement('script');
        migration.src = "assets/scripts/ui/rev-slider/revolution.extension.migration.min.js";
        document.body.appendChild(migration);
        var navigation = document.createElement('script');
        navigation.src = "assets/scripts/ui/rev-slider/revolution.extension.navigation.min.js";
        document.body.appendChild(navigation);
        var parallax = document.createElement('script');
        parallax.src = "assets/scripts/ui/rev-slider/revolution.extension.parallax.min.js";
        document.body.appendChild(parallax);
        var slideanims = document.createElement('script');
        slideanims.src = "assets/scripts/ui/rev-slider/revolution.extension.slideanims.min.js";
        document.body.appendChild(slideanims);
        var video = document.createElement('script');
        video.src = "assets/scripts/ui/rev-slider/revolution.extension.video.min.js";
        document.body.appendChild(video);
        var interf = document.createElement('script');
        interf.src = "assets/scripts/ui/interface.js";
        document.body.appendChild(interf);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/cookie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.read = function (name) {
        var result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
        return result ? result[1] : null;
    };
    CookieService.prototype.write = function (name, value, days) {
        if (!days) {
            days = 365 * 20;
        }
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + value + expires + "; path=/";
        return value;
    };
    CookieService.prototype.remove = function (name) {
        this.write(name, "", -1);
    };
    CookieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cookie_service__ = __webpack_require__("./src/app/services/cookie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectService = /** @class */ (function () {
    function ProjectService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    ProjectService.prototype.getProjcets = function (page) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].url + "/projects?page=" + page)
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.create = function (data) {
        this.header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var token = this.cookie.read('token');
        this.header.append('api_token', token);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].url + "/projects", data, {
            headers: this.header
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.delete = function (id) {
        this.header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var token = this.cookie.read('token');
        this.header.append('api_token', token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].url + "/project/remove/" + id, {
            headers: this.header
        }).map(function (res) { return res.json(); });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__cookie_service__["a" /* CookieService */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    url: 'http://localhost:8000/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map