var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
let Dishes = class Dishes extends BaseEntity {
    id;
    name;
    description;
    price;
    review;
    created_at;
    updated_at;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Dishes.prototype, "id", void 0);
__decorate([
    Column({ length: 100 }),
    __metadata("design:type", String)
], Dishes.prototype, "name", void 0);
__decorate([
    Column('text'),
    __metadata("design:type", String)
], Dishes.prototype, "description", void 0);
__decorate([
    Column('double'),
    __metadata("design:type", Number)
], Dishes.prototype, "price", void 0);
__decorate([
    Column('double'),
    __metadata("design:type", Number)
], Dishes.prototype, "review", void 0);
__decorate([
    Column("timestampz"),
    CreateDateColumn(),
    __metadata("design:type", Date)
], Dishes.prototype, "created_at", void 0);
__decorate([
    Column("timestampz"),
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Dishes.prototype, "updated_at", void 0);
Dishes = __decorate([
    Entity('dishes')
], Dishes);
export { Dishes };
