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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
let Customer = exports.Customer = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _customerId_decorators;
    let _customerId_initializers = [];
    let _customerName_decorators;
    let _customerName_initializers = [];
    let _customerTaxNumber_decorators;
    let _customerTaxNumber_initializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _profileImage_decorators;
    let _profileImage_initializers = [];
    var Customer = _classThis = class {
        constructor() {
            this.customerId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _customerId_initializers, void 0));
            this.customerName = __runInitializers(this, _customerName_initializers, void 0);
            this.customerTaxNumber = __runInitializers(this, _customerTaxNumber_initializers, void 0);
            this.phone = __runInitializers(this, _phone_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.profileImage = __runInitializers(this, _profileImage_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "Customer");
    (() => {
        _customerId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _customerName_decorators = [(0, typeorm_1.Column)()];
        _customerTaxNumber_decorators = [(0, typeorm_1.Column)()];
        _phone_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)()];
        _profileImage_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _customerId_decorators, { kind: "field", name: "customerId", static: false, private: false, access: { has: obj => "customerId" in obj, get: obj => obj.customerId, set: (obj, value) => { obj.customerId = value; } } }, _customerId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _customerName_decorators, { kind: "field", name: "customerName", static: false, private: false, access: { has: obj => "customerName" in obj, get: obj => obj.customerName, set: (obj, value) => { obj.customerName = value; } } }, _customerName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _customerTaxNumber_decorators, { kind: "field", name: "customerTaxNumber", static: false, private: false, access: { has: obj => "customerTaxNumber" in obj, get: obj => obj.customerTaxNumber, set: (obj, value) => { obj.customerTaxNumber = value; } } }, _customerTaxNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } } }, _phone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profileImage_decorators, { kind: "field", name: "profileImage", static: false, private: false, access: { has: obj => "profileImage" in obj, get: obj => obj.profileImage, set: (obj, value) => { obj.profileImage = value; } } }, _profileImage_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Customer = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Customer = _classThis;
})();
