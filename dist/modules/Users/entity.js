var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Restaurants } from '../Restaurants/entity.js';
import { Dishes } from '../Dishes/entity.js';
let Users = class Users extends BaseEntity {
    id;
    name;
    restaurants;
    dishes;
    created_at;
    updated_at;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    Column({ length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    OneToMany(() => Restaurants, (restaurant) => restaurant.user),
    __metadata("design:type", Array)
], Users.prototype, "restaurants", void 0);
__decorate([
    ManyToMany(() => Dishes),
    JoinTable(),
    __metadata("design:type", Array)
], Users.prototype, "dishes", void 0);
__decorate([
    Column("timestampz"),
    CreateDateColumn(),
    __metadata("design:type", Date)
], Users.prototype, "created_at", void 0);
__decorate([
    Column("timestampz"),
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Users.prototype, "updated_at", void 0);
Users = __decorate([
    Entity('users')
], Users);
export { Users };
