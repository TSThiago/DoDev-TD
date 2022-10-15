var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tower_Name, _Tower_Power, _Tower_Range, _Tower_Level, _Tower_Price, _Enemy_Name, _Enemy_HealthPoints;
var Tower = /** @class */ (function () {
    function Tower(name, power, range, level, price) {
        _Tower_Name.set(this, void 0);
        _Tower_Power.set(this, void 0);
        _Tower_Range.set(this, void 0);
        _Tower_Level.set(this, void 0);
        _Tower_Price.set(this, void 0);
        __classPrivateFieldSet(this, _Tower_Name, name, "f");
        __classPrivateFieldSet(this, _Tower_Power, power, "f");
        __classPrivateFieldSet(this, _Tower_Range, range, "f");
        __classPrivateFieldSet(this, _Tower_Level, level, "f");
        __classPrivateFieldSet(this, _Tower_Price, price, "f");
    }
    Tower.prototype.setName = function (name) {
        __classPrivateFieldSet(this, _Tower_Name, name, "f");
    };
    Tower.prototype.getName = function () {
        return __classPrivateFieldGet(this, _Tower_Name, "f");
    };
    Tower.prototype.setPower = function (power) {
        __classPrivateFieldSet(this, _Tower_Power, power, "f");
    };
    Tower.prototype.getPower = function () {
        return __classPrivateFieldGet(this, _Tower_Power, "f");
    };
    Tower.prototype.setRange = function (range) {
        __classPrivateFieldSet(this, _Tower_Range, range, "f");
    };
    Tower.prototype.getRange = function () {
        return __classPrivateFieldGet(this, _Tower_Range, "f");
    };
    Tower.prototype.setLevel = function (level) {
        __classPrivateFieldSet(this, _Tower_Level, level, "f");
    };
    Tower.prototype.getLevel = function () {
        return __classPrivateFieldGet(this, _Tower_Level, "f");
    };
    Tower.prototype.setPrice = function (price) {
        __classPrivateFieldSet(this, _Tower_Price, price, "f");
    };
    Tower.prototype.getPrice = function () {
        return __classPrivateFieldGet(this, _Tower_Price, "f");
    };
    Tower.prototype.Attack = function () {
        return __classPrivateFieldGet(this, _Tower_Power, "f");
    };
    return Tower;
}());
_Tower_Name = new WeakMap(), _Tower_Power = new WeakMap(), _Tower_Range = new WeakMap(), _Tower_Level = new WeakMap(), _Tower_Price = new WeakMap();
var Enemy = /** @class */ (function () {
    function Enemy(name, HP) {
        _Enemy_Name.set(this, void 0);
        _Enemy_HealthPoints.set(this, void 0);
        __classPrivateFieldSet(this, _Enemy_Name, name, "f");
        __classPrivateFieldSet(this, _Enemy_HealthPoints, HP, "f");
    }
    Enemy.prototype.setName = function (name) {
        __classPrivateFieldSet(this, _Enemy_Name, name, "f");
    };
    Enemy.prototype.getName = function () {
        return __classPrivateFieldGet(this, _Enemy_Name, "f");
    };
    Enemy.prototype.setHealthPoints = function (HP) {
        __classPrivateFieldSet(this, _Enemy_HealthPoints, HP, "f");
    };
    Enemy.prototype.getHealthPoints = function () {
        return __classPrivateFieldGet(this, _Enemy_HealthPoints, "f");
    };
    Enemy.prototype.TakeDamage = function (damage) {
        this.setHealthPoints(this.getHealthPoints() - damage);
        return;
    };
    return Enemy;
}());
_Enemy_Name = new WeakMap(), _Enemy_HealthPoints = new WeakMap();
