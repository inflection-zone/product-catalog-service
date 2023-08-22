"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const typeorm_1 = require("typeorm");
const merchant_1 = require("./merchant");
const product_1 = require("./product");
let Inventory = exports.Inventory = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _batchNumber_decorators;
    let _batchNumber_initializers = [];
    let _totalStock_decorators;
    let _totalStock_initializers = [];
    let _currentStock_decorators;
    let _currentStock_initializers = [];
    let _units_decorators;
    let _units_initializers = [];
    let _unitsOfMeasure_decorators;
    let _unitsOfMeasure_initializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    let _merchantId_decorators;
    let _merchantId_initializers = [];
    var Inventory = _classThis = class {
        constructor() {
            this.batchNumber = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _batchNumber_initializers, void 0));
            this.totalStock = __runInitializers(this, _totalStock_initializers, void 0);
            this.currentStock = __runInitializers(this, _currentStock_initializers, void 0);
            this.units = __runInitializers(this, _units_initializers, void 0);
            this.unitsOfMeasure = __runInitializers(this, _unitsOfMeasure_initializers, void 0);
            this.productId = __runInitializers(this, _productId_initializers, void 0);
            this.merchantId = __runInitializers(this, _merchantId_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "Inventory");
    (() => {
        _batchNumber_decorators = [(0, typeorm_1.Column)()];
        _totalStock_decorators = [(0, typeorm_1.Column)()];
        _currentStock_decorators = [(0, typeorm_1.Column)()];
        _units_decorators = [(0, typeorm_1.Column)()];
        _unitsOfMeasure_decorators = [(0, typeorm_1.Column)()];
        _productId_decorators = [(0, typeorm_1.OneToOne)(() => (product_1.Product)), (0, typeorm_1.JoinColumn)()];
        _merchantId_decorators = [(0, typeorm_1.OneToOne)(() => merchant_1.Merchant), (0, typeorm_1.JoinColumn)()];
        __esDecorate(null, null, _batchNumber_decorators, { kind: "field", name: "batchNumber", static: false, private: false, access: { has: obj => "batchNumber" in obj, get: obj => obj.batchNumber, set: (obj, value) => { obj.batchNumber = value; } } }, _batchNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _totalStock_decorators, { kind: "field", name: "totalStock", static: false, private: false, access: { has: obj => "totalStock" in obj, get: obj => obj.totalStock, set: (obj, value) => { obj.totalStock = value; } } }, _totalStock_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currentStock_decorators, { kind: "field", name: "currentStock", static: false, private: false, access: { has: obj => "currentStock" in obj, get: obj => obj.currentStock, set: (obj, value) => { obj.currentStock = value; } } }, _currentStock_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _units_decorators, { kind: "field", name: "units", static: false, private: false, access: { has: obj => "units" in obj, get: obj => obj.units, set: (obj, value) => { obj.units = value; } } }, _units_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _unitsOfMeasure_decorators, { kind: "field", name: "unitsOfMeasure", static: false, private: false, access: { has: obj => "unitsOfMeasure" in obj, get: obj => obj.unitsOfMeasure, set: (obj, value) => { obj.unitsOfMeasure = value; } } }, _unitsOfMeasure_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } } }, _productId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _merchantId_decorators, { kind: "field", name: "merchantId", static: false, private: false, access: { has: obj => "merchantId" in obj, get: obj => obj.merchantId, set: (obj, value) => { obj.merchantId = value; } } }, _merchantId_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Inventory = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Inventory = _classThis;
})();
