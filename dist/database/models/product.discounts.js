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
exports.ProductDiscounts = void 0;
const typeorm_1 = require("typeorm");
const merchant_1 = require("./merchant");
const product_1 = require("./product");
let ProductDiscounts = exports.ProductDiscounts = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    let _merchantId_decorators;
    let _merchantId_initializers = [];
    let _discountType_decorators;
    let _discountType_initializers = [];
    let _discount_decorators;
    let _discount_initializers = [];
    let _discountForVolume_decorators;
    let _discountForVolume_initializers = [];
    var ProductDiscounts = _classThis = class {
        constructor() {
            this.productId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _productId_initializers, void 0));
            this.merchantId = __runInitializers(this, _merchantId_initializers, void 0);
            this.discountType = __runInitializers(this, _discountType_initializers, void 0);
            this.discount = __runInitializers(this, _discount_initializers, void 0);
            this.discountForVolume = __runInitializers(this, _discountForVolume_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "ProductDiscounts");
    (() => {
        _productId_decorators = [(0, typeorm_1.OneToOne)(() => product_1.Product)];
        _merchantId_decorators = [(0, typeorm_1.OneToOne)(() => merchant_1.Merchant)];
        _discountType_decorators = [(0, typeorm_1.Column)()];
        _discount_decorators = [(0, typeorm_1.Column)()];
        _discountForVolume_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } } }, _productId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _merchantId_decorators, { kind: "field", name: "merchantId", static: false, private: false, access: { has: obj => "merchantId" in obj, get: obj => obj.merchantId, set: (obj, value) => { obj.merchantId = value; } } }, _merchantId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _discountType_decorators, { kind: "field", name: "discountType", static: false, private: false, access: { has: obj => "discountType" in obj, get: obj => obj.discountType, set: (obj, value) => { obj.discountType = value; } } }, _discountType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _discount_decorators, { kind: "field", name: "discount", static: false, private: false, access: { has: obj => "discount" in obj, get: obj => obj.discount, set: (obj, value) => { obj.discount = value; } } }, _discount_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _discountForVolume_decorators, { kind: "field", name: "discountForVolume", static: false, private: false, access: { has: obj => "discountForVolume" in obj, get: obj => obj.discountForVolume, set: (obj, value) => { obj.discountForVolume = value; } } }, _discountForVolume_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ProductDiscounts = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductDiscounts = _classThis;
})();
