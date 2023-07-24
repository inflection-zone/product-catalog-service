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
exports.ProductMerchant = void 0;
const typeorm_1 = require("typeorm");
const merchant_1 = require("./merchant");
const product_1 = require("./product");
let ProductMerchant = exports.ProductMerchant = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _merchantPrice_decorators;
    let _merchantPrice_initializers = [];
    let _taxes_decorators;
    let _taxes_initializers = [];
    let _includeShipping_decorators;
    let _includeShipping_initializers = [];
    let _shippingCharges_decorators;
    let _shippingCharges_initializers = [];
    let _merchantId_decorators;
    let _merchantId_initializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    var ProductMerchant = _classThis = class {
        constructor() {
            this.merchantPrice = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _merchantPrice_initializers, void 0));
            this.taxes = __runInitializers(this, _taxes_initializers, void 0);
            this.includeShipping = __runInitializers(this, _includeShipping_initializers, void 0);
            this.shippingCharges = __runInitializers(this, _shippingCharges_initializers, void 0);
            this.merchantId = __runInitializers(this, _merchantId_initializers, void 0);
            this.productId = __runInitializers(this, _productId_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "ProductMerchant");
    (() => {
        _merchantPrice_decorators = [(0, typeorm_1.Column)()];
        _taxes_decorators = [(0, typeorm_1.Column)()];
        _includeShipping_decorators = [(0, typeorm_1.Column)()];
        _shippingCharges_decorators = [(0, typeorm_1.Column)()];
        _merchantId_decorators = [(0, typeorm_1.OneToMany)(() => (merchant_1.Merchant), (product) => product.merchantId)];
        _productId_decorators = [(0, typeorm_1.OneToOne)(() => (product_1.Product))];
        __esDecorate(null, null, _merchantPrice_decorators, { kind: "field", name: "merchantPrice", static: false, private: false, access: { has: obj => "merchantPrice" in obj, get: obj => obj.merchantPrice, set: (obj, value) => { obj.merchantPrice = value; } } }, _merchantPrice_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _taxes_decorators, { kind: "field", name: "taxes", static: false, private: false, access: { has: obj => "taxes" in obj, get: obj => obj.taxes, set: (obj, value) => { obj.taxes = value; } } }, _taxes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _includeShipping_decorators, { kind: "field", name: "includeShipping", static: false, private: false, access: { has: obj => "includeShipping" in obj, get: obj => obj.includeShipping, set: (obj, value) => { obj.includeShipping = value; } } }, _includeShipping_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _shippingCharges_decorators, { kind: "field", name: "shippingCharges", static: false, private: false, access: { has: obj => "shippingCharges" in obj, get: obj => obj.shippingCharges, set: (obj, value) => { obj.shippingCharges = value; } } }, _shippingCharges_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _merchantId_decorators, { kind: "field", name: "merchantId", static: false, private: false, access: { has: obj => "merchantId" in obj, get: obj => obj.merchantId, set: (obj, value) => { obj.merchantId = value; } } }, _merchantId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } } }, _productId_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ProductMerchant = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductMerchant = _classThis;
})();
