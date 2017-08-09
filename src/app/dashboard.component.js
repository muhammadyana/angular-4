"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.clickMessage = '';
        this.values = '';
        // onKey(event: KeyboardEvent) { // with type info
        //   this.values += (<HTMLInputElement>event.target).value + ' | ';
        // }
        this.value = '';
        this.books = ['Angular', 'Node', 'Vue', 'React'];
    }
    DashboardComponent.prototype.onClickMe = function () {
        this.clickMessage = 'You are my hero!';
    };
    DashboardComponent.prototype.onKey = function (event) {
        this.values += event.target.value + '-';
    };
    DashboardComponent.prototype.onEnter = function (value) { this.value = value; };
    DashboardComponent.prototype.addHero = function (newBook) {
        if (newBook) {
            this.books.push(newBook);
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
console.log("hallo ✋🏻");
//# sourceMappingURL=dashboard.component.js.map