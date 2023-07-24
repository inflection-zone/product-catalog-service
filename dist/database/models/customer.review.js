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
exports.CustomerReview = void 0;
const typeorm_1 = require("typeorm");
const customer_1 = require("./customer");
const product_1 = require("./product");
let CustomerReview = exports.CustomerReview = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    let _customerId_decorators;
    let _customerId_initializers = [];
    let _verifiedPurchase_decorators;
    let _verifiedPurchase_initializers = [];
    let _rating_decorators;
    let _rating_initializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _foundUsefulCount_decorators;
    let _foundUsefulCount_initializers = [];
    var CustomerReview = _classThis = class {
        constructor() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.productId = __runInitializers(this, _productId_initializers, void 0);
            this.customerId = __runInitializers(this, _customerId_initializers, void 0);
            this.verifiedPurchase = __runInitializers(this, _verifiedPurchase_initializers, void 0);
            this.rating = __runInitializers(this, _rating_initializers, void 0);
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.foundUsefulCount = __runInitializers(this, _foundUsefulCount_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "CustomerReview");
    (() => {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _productId_decorators = [(0, typeorm_1.OneToOne)(() => product_1.Product)];
        _customerId_decorators = [(0, typeorm_1.OneToOne)(() => customer_1.Customer)];
        _verifiedPurchase_decorators = [(0, typeorm_1.Column)()];
        _rating_decorators = [(0, typeorm_1.Column)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)()];
        _foundUsefulCount_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } } }, _productId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _customerId_decorators, { kind: "field", name: "customerId", static: false, private: false, access: { has: obj => "customerId" in obj, get: obj => obj.customerId, set: (obj, value) => { obj.customerId = value; } } }, _customerId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _verifiedPurchase_decorators, { kind: "field", name: "verifiedPurchase", static: false, private: false, access: { has: obj => "verifiedPurchase" in obj, get: obj => obj.verifiedPurchase, set: (obj, value) => { obj.verifiedPurchase = value; } } }, _verifiedPurchase_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rating_decorators, { kind: "field", name: "rating", static: false, private: false, access: { has: obj => "rating" in obj, get: obj => obj.rating, set: (obj, value) => { obj.rating = value; } } }, _rating_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _foundUsefulCount_decorators, { kind: "field", name: "foundUsefulCount", static: false, private: false, access: { has: obj => "foundUsefulCount" in obj, get: obj => obj.foundUsefulCount, set: (obj, value) => { obj.foundUsefulCount = value; } } }, _foundUsefulCount_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        CustomerReview = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CustomerReview = _classThis;
})();
