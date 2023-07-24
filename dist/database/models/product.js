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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const category_1 = require("./category");
const brand_1 = require("./brand");
let Product = exports.Product = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _category_decorators;
    let _category_initializers = [];
    let _brandId_decorators;
    let _brandId_initializers = [];
    let _basePrice_decorators;
    let _basePrice_initializers = [];
    let _taxes_decorators;
    let _taxes_initializers = [];
    let _manufacturerName_decorators;
    let _manufacturerName_initializers = [];
    let _manufacturerPartNumber_decorators;
    let _manufacturerPartNumber_initializers = [];
    var Product = _classThis = class {
        constructor() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.category = __runInitializers(this, _category_initializers, void 0);
            this.brandId = __runInitializers(this, _brandId_initializers, void 0);
            this.basePrice = __runInitializers(this, _basePrice_initializers, void 0);
            this.taxes = __runInitializers(this, _taxes_initializers, void 0);
            this.manufacturerName = __runInitializers(this, _manufacturerName_initializers, void 0);
            this.manufacturerPartNumber = __runInitializers(this, _manufacturerPartNumber_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "Product");
    (() => {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)()];
        _category_decorators = [(0, typeorm_1.OneToMany)(() => (category_1.Category), (category) => category.id)];
        _brandId_decorators = [(0, typeorm_1.OneToOne)(() => (brand_1.Brand))];
        _basePrice_decorators = [(0, typeorm_1.Column)()];
        _taxes_decorators = [(0, typeorm_1.Column)()];
        _manufacturerName_decorators = [(0, typeorm_1.Column)()];
        _manufacturerPartNumber_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: obj => "category" in obj, get: obj => obj.category, set: (obj, value) => { obj.category = value; } } }, _category_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _brandId_decorators, { kind: "field", name: "brandId", static: false, private: false, access: { has: obj => "brandId" in obj, get: obj => obj.brandId, set: (obj, value) => { obj.brandId = value; } } }, _brandId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _basePrice_decorators, { kind: "field", name: "basePrice", static: false, private: false, access: { has: obj => "basePrice" in obj, get: obj => obj.basePrice, set: (obj, value) => { obj.basePrice = value; } } }, _basePrice_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _taxes_decorators, { kind: "field", name: "taxes", static: false, private: false, access: { has: obj => "taxes" in obj, get: obj => obj.taxes, set: (obj, value) => { obj.taxes = value; } } }, _taxes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _manufacturerName_decorators, { kind: "field", name: "manufacturerName", static: false, private: false, access: { has: obj => "manufacturerName" in obj, get: obj => obj.manufacturerName, set: (obj, value) => { obj.manufacturerName = value; } } }, _manufacturerName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _manufacturerPartNumber_decorators, { kind: "field", name: "manufacturerPartNumber", static: false, private: false, access: { has: obj => "manufacturerPartNumber" in obj, get: obj => obj.manufacturerPartNumber, set: (obj, value) => { obj.manufacturerPartNumber = value; } } }, _manufacturerPartNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Product = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Product = _classThis;
})();
