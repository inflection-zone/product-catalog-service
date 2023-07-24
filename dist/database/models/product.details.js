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
exports.ProductDetails = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("./product");
let ProductDetails = exports.ProductDetails = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    let _information_decorators;
    let _information_initializers = [];
    let _additionalInformation_decorators;
    let _additionalInformation_initializers = [];
    let _technicalDetails_decorators;
    let _technicalDetails_initializers = [];
    let _partNumber_decorators;
    let _partNumber_initializers = [];
    let _modelNumber_decorators;
    let _modelNumber_initializers = [];
    let _countryOfOrigin_decorators;
    let _countryOfOrigin_initializers = [];
    let _itemWeight_decorators;
    let _itemWeight_initializers = [];
    let _itemDimensions_decorators;
    let _itemDimensions_initializers = [];
    let _packItemCount_decorators;
    let _packItemCount_initializers = [];
    var ProductDetails = _classThis = class {
        constructor() {
            this.productId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _productId_initializers, void 0));
            this.information = __runInitializers(this, _information_initializers, void 0);
            this.additionalInformation = __runInitializers(this, _additionalInformation_initializers, void 0);
            this.technicalDetails = __runInitializers(this, _technicalDetails_initializers, void 0);
            this.partNumber = __runInitializers(this, _partNumber_initializers, void 0);
            this.modelNumber = __runInitializers(this, _modelNumber_initializers, void 0);
            this.countryOfOrigin = __runInitializers(this, _countryOfOrigin_initializers, void 0);
            this.itemWeight = __runInitializers(this, _itemWeight_initializers, void 0);
            this.itemDimensions = __runInitializers(this, _itemDimensions_initializers, void 0);
            this.packItemCount = __runInitializers(this, _packItemCount_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "ProductDetails");
    (() => {
        _productId_decorators = [(0, typeorm_1.OneToOne)(() => product_1.Product)];
        _information_decorators = [(0, typeorm_1.Column)()];
        _additionalInformation_decorators = [(0, typeorm_1.Column)()];
        _technicalDetails_decorators = [(0, typeorm_1.Column)()];
        _partNumber_decorators = [(0, typeorm_1.Column)()];
        _modelNumber_decorators = [(0, typeorm_1.Column)()];
        _countryOfOrigin_decorators = [(0, typeorm_1.Column)()];
        _itemWeight_decorators = [(0, typeorm_1.Column)()];
        _itemDimensions_decorators = [(0, typeorm_1.Column)()];
        _packItemCount_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } } }, _productId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _information_decorators, { kind: "field", name: "information", static: false, private: false, access: { has: obj => "information" in obj, get: obj => obj.information, set: (obj, value) => { obj.information = value; } } }, _information_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _additionalInformation_decorators, { kind: "field", name: "additionalInformation", static: false, private: false, access: { has: obj => "additionalInformation" in obj, get: obj => obj.additionalInformation, set: (obj, value) => { obj.additionalInformation = value; } } }, _additionalInformation_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _technicalDetails_decorators, { kind: "field", name: "technicalDetails", static: false, private: false, access: { has: obj => "technicalDetails" in obj, get: obj => obj.technicalDetails, set: (obj, value) => { obj.technicalDetails = value; } } }, _technicalDetails_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _partNumber_decorators, { kind: "field", name: "partNumber", static: false, private: false, access: { has: obj => "partNumber" in obj, get: obj => obj.partNumber, set: (obj, value) => { obj.partNumber = value; } } }, _partNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _modelNumber_decorators, { kind: "field", name: "modelNumber", static: false, private: false, access: { has: obj => "modelNumber" in obj, get: obj => obj.modelNumber, set: (obj, value) => { obj.modelNumber = value; } } }, _modelNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _countryOfOrigin_decorators, { kind: "field", name: "countryOfOrigin", static: false, private: false, access: { has: obj => "countryOfOrigin" in obj, get: obj => obj.countryOfOrigin, set: (obj, value) => { obj.countryOfOrigin = value; } } }, _countryOfOrigin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemWeight_decorators, { kind: "field", name: "itemWeight", static: false, private: false, access: { has: obj => "itemWeight" in obj, get: obj => obj.itemWeight, set: (obj, value) => { obj.itemWeight = value; } } }, _itemWeight_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemDimensions_decorators, { kind: "field", name: "itemDimensions", static: false, private: false, access: { has: obj => "itemDimensions" in obj, get: obj => obj.itemDimensions, set: (obj, value) => { obj.itemDimensions = value; } } }, _itemDimensions_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _packItemCount_decorators, { kind: "field", name: "packItemCount", static: false, private: false, access: { has: obj => "packItemCount" in obj, get: obj => obj.packItemCount, set: (obj, value) => { obj.packItemCount = value; } } }, _packItemCount_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ProductDetails = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductDetails = _classThis;
})();
