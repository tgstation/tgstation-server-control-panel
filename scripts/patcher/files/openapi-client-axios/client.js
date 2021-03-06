"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPIClientAxios = void 0;
var axios_1 = __importDefault(require("axios"));
var bath_es5_1 = __importDefault(require("bath-es5"));
var json_schema_ref_parser_1 = require("@apidevtools/json-schema-ref-parser");
var json_schema_ref_parser_2 = __importDefault(require("@apidevtools/json-schema-ref-parser"));
var dereference_1 = __importDefault(require("@apidevtools/json-schema-ref-parser/lib/dereference"));
var options_1 = __importDefault(require("@apidevtools/json-schema-ref-parser/lib/options"));
var query_string_1 = __importDefault(require("query-string"));
var get_1 = __importDefault(require("lodash/get"));
var find_1 = __importDefault(require("lodash/find"));
var pick_1 = __importDefault(require("lodash/pick"));
var merge_1 = __importDefault(require("lodash/merge"));
var flatMap_1 = __importDefault(require("lodash/flatMap"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
var client_1 = require("./types/client");
/**
 * Main class and the default export of the 'openapi-client-axios' module
 *
 * @export
 * @class OpenAPIClientAxios
 */
var OpenAPIClientAxios = /** @class */ (function () {
    /**
     * Creates an instance of OpenAPIClientAxios.
     *
     * @param opts - constructor options
     * @param {Document | string} opts.definition - the OpenAPI definition, file path or Document object
     * @param {boolean} opts.quick - quick mode, skips validation and doesn't guarantee document is unchanged
     * @param {boolean} opts.axiosConfigDefaults - default axios config for the instance
     * @memberof OpenAPIClientAxios
     */
    function OpenAPIClientAxios(opts) {
        var _this = this;
        /**
         * Returns the instance of OpenAPIClient
         *
         * @returns
         * @memberof OpenAPIClientAxios
         */
        this.getClient = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.initalized) {
                    return [2 /*return*/, this.init()];
                }
                return [2 /*return*/, this.instance];
            });
        }); };
        /**
         * Initalizes OpenAPIClientAxios and creates a member axios client instance
         *
         * The init() method should be called right after creating a new instance of OpenAPIClientAxios
         *
         * @returns AxiosInstance
         * @memberof OpenAPIClientAxios
         */
        this.init = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.quick) return [3 /*break*/, 2];
                        // to save time, just dereference input document
                        _a = this;
                        return [4 /*yield*/, json_schema_ref_parser_1.dereference(this.inputDocument, this.swaggerParserOpts)];
                    case 1:
                        // to save time, just dereference input document
                        _a.definition = (_c.sent());
                        // in quick mode no guarantees document will be the original document
                        this.document = typeof this.inputDocument === 'object' ? this.inputDocument : this.definition;
                        return [3 /*break*/, 5];
                    case 2:
                    // load and parse the document
                    return [4 /*yield*/, this.loadDocument()];
                    case 3:
                        // load and parse the document
                        _c.sent();
                        // dereference the document into definition
                        _b = this;
                        return [4 /*yield*/, json_schema_ref_parser_1.dereference(cloneDeep_1.default(this.document), this.swaggerParserOpts)];
                    case 4:
                        // dereference the document into definition
                        _b.definition = (_c.sent());
                        _c.label = 5;
                    case 5:
                        // create axios instance
                        this.instance = this.createAxiosInstance();
                        // we are now initalized
                        this.initalized = true;
                        return [2 /*return*/, this.instance];
                }
            });
        }); };
        /**
         * Synchronous version of .init()
         *
         * Note: Only works when the input definition is a valid OpenAPI v3 object and doesn't contain remote $refs.
         *
         * @memberof OpenAPIClientAxios
         */
        this.initSync = function () {
            if (typeof _this.inputDocument !== 'object') {
                throw new Error(".initSync() can't be called with a non-object definition. Please use .init()");
            }
            // set document
            _this.document = _this.inputDocument;
            // dereference the document into definition
            _this.definition = cloneDeep_1.default(_this.document);
            var parser = new json_schema_ref_parser_2.default();
            parser.parse(_this.definition);
            parser.schema = _this.definition;
            dereference_1.default(parser, new options_1.default(_this.swaggerParserOpts)); // mutates this.definition (synchronous)
            // create axios instance
            _this.instance = _this.createAxiosInstance();
            // we are now initalized
            _this.initalized = true;
            return _this.instance;
        };
        /**
         * Creates a new axios instance, extends it and returns it
         *
         * @memberof OpenAPIClientAxios
         */
        this.createAxiosInstance = function () {
            // create axios instance
            var instance = axios_1.default.create(_this.axiosConfigDefaults);
            // set baseURL to the one found in the definition servers (if not set in axios defaults)
            var baseURL = _this.getBaseURL();
            if (baseURL && !_this.axiosConfigDefaults.baseURL) {
                instance.defaults.baseURL = baseURL;
            }
            // create methods for operationIds
            var operations = _this.getOperations();
            for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
                var operation = operations_1[_i];
                var operationId = operation.operationId;
                if (operationId) {
                    instance[_this.transformOperationName(operationId)] = _this.createOperationMethod(operation);
                }
            }
            // create paths dictionary
            // Example: api.paths['/pets/{id}'].get({ id: 1 });
            instance.paths = {};
            for (var path in _this.definition.paths) {
                if (_this.definition.paths[path]) {
                    if (!instance.paths[path]) {
                        instance.paths[path] = {};
                    }
                    var methods = _this.definition.paths[path];
                    for (var m in methods) {
                        if (methods[m] && Object.values(client_1.HttpMethod).includes(m)) {
                            var method = m;
                            var operation = find_1.default(_this.getOperations(), { path: path, method: method });
                            instance.paths[path][method] = _this.createOperationMethod(operation);
                        }
                    }
                }
            }
            // add reference to parent class instance
            instance.api = _this;
            return instance;
        };
        /**
         * Gets the API baseurl defined in the first OpenAPI specification servers property
         *
         * @returns string
         * @memberof OpenAPIClientAxios
         */
        this.getBaseURL = function (operation) {
            if (!_this.definition) {
                return undefined;
            }
            if (operation) {
                if (typeof operation === 'string') {
                    operation = _this.getOperation(operation);
                }
                if (operation.servers && operation.servers[0]) {
                    return operation.servers[0].url;
                }
            }
            // get the target server from this.defaultServer
            var targetServer;
            if (typeof _this.defaultServer === 'number') {
                if (_this.definition.servers && _this.definition.servers[_this.defaultServer]) {
                    targetServer = _this.definition.servers[_this.defaultServer];
                }
            }
            else if (typeof _this.defaultServer === 'string') {
                for (var _i = 0, _a = _this.definition.servers; _i < _a.length; _i++) {
                    var server = _a[_i];
                    if (server.description === _this.defaultServer) {
                        targetServer = server;
                        break;
                    }
                }
            }
            else if (_this.defaultServer.url) {
                targetServer = _this.defaultServer;
            }
            // if no targetServer is found, return undefined
            if (!targetServer) {
                return undefined;
            }
            var baseURL = targetServer.url;
            var baseURLVariableSet = targetServer.variables;
            // get baseURL var names
            var baseURLBuilder = bath_es5_1.default(baseURL);
            // if there are no variables to resolve: return baseURL as is
            if (!baseURLBuilder.names.length) {
                return baseURL;
            }
            // object to place variables resolved from this.baseURLVariables
            var baseURLVariablesResolved = {};
            // step through names and assign value from this.baseURLVariables or the default value
            // note: any variables defined in baseURLVariables but not actually variables in baseURL are ignored
            for (var _b = 0, _c = baseURLBuilder.names; _b < _c.length; _b++) {
                var name_1 = _c[_b];
                var varValue = _this.baseURLVariables[name_1];
                if (varValue !== undefined) {
                    // if varValue exists assign to baseURLVariablesResolved object
                    if (typeof varValue === 'number') {
                        // if number, get value from enum array
                        var enumVal = baseURLVariableSet[name_1].enum[varValue];
                        if (enumVal) {
                            baseURLVariablesResolved[name_1] = enumVal;
                        }
                        else {
                            // if supplied value out of range: throw error
                            throw new Error("index " + varValue + " out of range for enum of baseURL variable: " + name_1 + ";               enum max index is " + (baseURLVariableSet[name_1].enum.length - 1));
                        }
                    }
                    else if (typeof varValue === 'string') {
                        // if string, validate against enum array
                        if (baseURLVariableSet[name_1].enum.includes(varValue)) {
                            baseURLVariablesResolved[name_1] = varValue;
                        }
                        else {
                            // if supplied value doesn't exist on enum: throw error
                            throw new Error(varValue + " is not a valid entry for baseURL variable " + name_1 + ";                 variable must be of the following: " + baseURLVariableSet[name_1].enum.join(', '));
                        }
                    }
                }
                else {
                    // if varValue doesn't exist: get default
                    baseURLVariablesResolved[name_1] = baseURLVariableSet[name_1].default;
                }
            }
            // return resolved baseURL
            return baseURLBuilder.path(baseURLVariablesResolved);
        };
        /**
         * Creates an axios config object for operation + arguments
         * @memberof OpenAPIClientAxios
         */
        this.getAxiosConfigForOperation = function (operation, args) {
            if (typeof operation === 'string') {
                operation = _this.getOperation(operation);
            }
            var request = _this.getRequestConfigForOperation(operation, args);
            // construct axios request config
            var axiosConfig = {
                method: request.method,
                url: request.path,
                data: request.payload,
                params: request.query,
                headers: request.headers,
            };
            // allow overriding baseURL with operation / path specific servers
            var servers = operation.servers;
            if (servers && servers[0]) {
                axiosConfig.baseURL = servers[0].url;
            }
            // allow overriding any parameters in AxiosRequestConfig
            var config = args[2];
            return config ? merge_1.default(axiosConfig, config) : axiosConfig;
        };
        /**
         * Creates a generic request config object for operation + arguments.
         *
         * This function contains the logic that handles operation method parameters.
         *
         * @memberof OpenAPIClientAxios
         */
        this.getRequestConfigForOperation = function (operation, args) {
            if (typeof operation === 'string') {
                operation = _this.getOperation(operation);
            }
            var pathParams = {};
            var query = {};
            var headers = {};
            var cookies = {};
            var setRequestParam = function (name, value, type) {
                switch (type) {
                    case client_1.ParamType.Path:
                        pathParams[name] = value;
                        break;
                    case client_1.ParamType.Query:
                        query[name] = value;
                        break;
                    case client_1.ParamType.Header:
                        headers[name] = value;
                        break;
                    case client_1.ParamType.Cookie:
                        cookies[name] = value;
                        break;
                }
            };
            var getParamType = function (paramName) {
                var param = find_1.default(operation.parameters, { name: paramName });
                if (param) {
                    return param.in;
                }
                // default all params to query if operation doesn't specify param
                return client_1.ParamType.Query;
            };
            var getFirstOperationParam = function () {
                var firstRequiredParam = find_1.default(operation.parameters, {
                    required: true,
                });
                if (firstRequiredParam) {
                    return firstRequiredParam;
                }
                var firstParam = get_1.default(operation.parameters, '0');
                if (firstParam) {
                    return firstParam;
                }
            };
            var paramsArg = args[0], payload = args[1];
            if (isArray_1.default(paramsArg)) {
                // ParamsArray
                for (var _i = 0, paramsArg_1 = paramsArg; _i < paramsArg_1.length; _i++) {
                    var param = paramsArg_1[_i];
                    setRequestParam(param.name, param.value, param.in || getParamType(param.name));
                }
            }
            else if (typeof paramsArg === 'object') {
                // ParamsObject
                for (var name_2 in paramsArg) {
                    if (paramsArg[name_2] !== undefined) {
                        setRequestParam(name_2, paramsArg[name_2], getParamType(name_2));
                    }
                }
            }
            else if (!isNil_1.default(paramsArg)) {
                var firstParam = getFirstOperationParam();
                if (!firstParam) {
                    throw new Error("No parameters found for operation " + operation.operationId);
                }
                setRequestParam(firstParam.name, paramsArg, firstParam.in);
            }
            // path parameters
            var pathBuilder = bath_es5_1.default(operation.path);
            // make sure all path parameters are set
            for (var _a = 0, _b = pathBuilder.names; _a < _b.length; _a++) {
                var name_3 = _b[_a];
                var value = pathParams[name_3];
                pathParams[name_3] = "" + value;
            }
            var path = pathBuilder.path(pathParams);
            // query parameters
            var queryString = query_string_1.default.stringify(query, { arrayFormat: 'none' });
            // full url with query string
            var url = "" + _this.getBaseURL(operation) + path + (queryString ? "?" + queryString : '');
            // construct request config
            var config = {
                method: operation.method,
                url: url,
                path: path,
                pathParams: pathParams,
                query: query,
                queryString: queryString,
                headers: headers,
                cookies: cookies,
                payload: payload,
            };
            return config;
        };
        /**
         * Flattens operations into a simple array of Operation objects easy to work with
         *
         * @returns {Operation[]}
         * @memberof OpenAPIBackend
         */
        this.getOperations = function () {
            var _a;
            var paths = ((_a = _this.definition) === null || _a === void 0 ? void 0 : _a.paths) || {};
            return flatMap_1.default(Object.entries(paths), function (_a) {
                var path = _a[0], pathObject = _a[1];
                var methods = pick_1.default(pathObject, Object.values(client_1.HttpMethod));
                return Object.entries(methods).map(function (_a) {
                    var method = _a[0], operation = _a[1];
                    operation.operationId = operation.operationId.replace(
                        /[^0-9A-Za-z_$]+/g,
                        "_"
                    );
                    var op = __assign(__assign({}, operation), { path: path, method: method });
                    if (pathObject.parameters) {
                        op.parameters = __spreadArrays((op.parameters || []), pathObject.parameters);
                    }
                    if (pathObject.servers) {
                        op.servers = __spreadArrays((op.servers || []), pathObject.servers);
                    }
                    return op;
                });
            });
        };
        /**
         * Gets a single operation based on operationId
         *
         * @param {string} operationId
         * @returns {Operation}
         * @memberof OpenAPIBackend
         */
        this.getOperation = function (operationId) {
            return find_1.default(_this.getOperations(), { operationId: operationId });
        };
        /**
         * Creates an axios method for an operation
         * (...pathParams, data?, config?) => Promise<AxiosResponse>
         *
         * @param {Operation} operation
         * @memberof OpenAPIClientAxios
         */
        this.createOperationMethod = function (operation) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var axiosConfig;
                    return __generator(this, function (_a) {
                        axiosConfig = this.getAxiosConfigForOperation(operation, args);
                        // do the axios request
                        return [2 /*return*/, this.client.request(axiosConfig)];
                    });
                });
            };
        };
        var optsWithDefaults = __assign(__assign({ quick: false, withServer: 0, baseURLVariables: {}, swaggerParserOpts: {}, transformOperationName: function (operationId) { return operationId; } }, opts), { axiosConfigDefaults: __assign({ paramsSerializer: function (params) { return query_string_1.default.stringify(params, { arrayFormat: 'none' }); } }, (opts.axiosConfigDefaults || {})) });
        this.inputDocument = optsWithDefaults.definition;
        this.quick = optsWithDefaults.quick;
        this.axiosConfigDefaults = optsWithDefaults.axiosConfigDefaults;
        this.swaggerParserOpts = optsWithDefaults.swaggerParserOpts;
        this.defaultServer = optsWithDefaults.withServer;
        this.baseURLVariables = optsWithDefaults.baseURLVariables;
        this.transformOperationName = optsWithDefaults.transformOperationName;
    }
    Object.defineProperty(OpenAPIClientAxios.prototype, "client", {
        /**
         * Returns the instance of OpenAPIClient
         *
         * @readonly
         * @type {OpenAPIClient}
         * @memberof OpenAPIClientAxios
         */
        get: function () {
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    OpenAPIClientAxios.prototype.withServer = function (server, variables) {
        if (variables === void 0) { variables = {}; }
        this.defaultServer = server;
        this.baseURLVariables = variables;
    };
    /**
     * Loads the input document asynchronously and sets this.document
     *
     * @memberof OpenAPIClientAxios
     */
    OpenAPIClientAxios.prototype.loadDocument = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, json_schema_ref_parser_1.parse(this.inputDocument, this.swaggerParserOpts)];
                    case 1:
                        _a.document = (_b.sent());
                        return [2 /*return*/, this.document];
                }
            });
        });
    };
    return OpenAPIClientAxios;
}());
exports.OpenAPIClientAxios = OpenAPIClientAxios;
//# sourceMappingURL=client.js.map
