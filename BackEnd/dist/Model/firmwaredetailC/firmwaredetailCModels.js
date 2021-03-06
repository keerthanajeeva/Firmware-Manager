"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailC = void 0;
var dbqueries = require('../../config/dbqueries');
var mysqlwrapper = require('../../config/mysqlwrapper');
var DetailC = /** @class */ (function (_super) {
    __extends(DetailC, _super);
    function DetailC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailC, "TABLE_NAME", {
        //  Overrides TABLE_NAME with this class' backing table at MySQL
        get: function () {
            return 'firmwaredetailc';
        },
        enumerable: false,
        configurable: true
    });
    // Returns a device by its ID
    DetailC.getByID = function (_, _a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * Returns a list of device  matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    DetailC.findMatching = function (_, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Returns early with all device if no criteria was passed
                if (Object.keys(fields).length === 0)
                    return [2 /*return*/, this.findAll()
                        // Find matching device
                    ];
                // Find matching device
                return [2 /*return*/, this.findByFields({
                        fields: fields
                    })];
            });
        });
    };
    // Creates a new device mutations for update 
    DetailC.createEntry = function (_, _a) {
        var type = _a.type, price = _a.price;
        return __awaiter(this, void 0, void 0, function () {
            var connection, _result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, mysqlwrapper.getConnectionFromPool()];
                    case 1:
                        connection = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, this.insert(connection, {
                                data: {
                                    type: type,
                                    price: price
                                }
                            })];
                    case 3:
                        _result = _b.sent();
                        return [2 /*return*/, this.getByID(_, { id: _result.insertId })];
                    case 4:
                        // Releases the connection
                        if (connection != null)
                            connection.release();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates a device
     */
    DetailC.updateEntry = function (_, _a) {
        var id = _a.id, type = _a.type, price = _a.price;
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, mysqlwrapper.getConnectionFromPool()];
                    case 1:
                        connection = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, this.update(connection, {
                                id: id,
                                data: {
                                    type: type,
                                    price: price
                                }
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, this.getByID(_, { id: id })];
                    case 4:
                        // Releases the connection
                        if (connection != null)
                            connection.release();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return DetailC;
}(dbqueries));
exports.DetailC = DetailC;
module.exports = DetailC;
