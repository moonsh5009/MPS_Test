/* tslint:disable */
/* eslint-disable */
/**
*/
export class App {
  free(): void;
/**
*/
  constructor();
/**
* @returns {Promise<void>}
*/
  Initalize(): Promise<void>;
/**
* @param {number} width
* @param {number} height
*/
  OnResize(width: number, height: number): void;
/**
* @returns {Promise<void>}
*/
  OnRedraw(): Promise<void>;
/**
* @param {string} key
*/
  OnKeyDownWasm(key: string): void;
/**
* @param {string} key
*/
  OnKeyUpWasm(key: string): void;
/**
* @param {number} dx
* @param {number} dy
*/
  OnMouseMotion(dx: number, dy: number): void;
/**
* @param {number} dx
* @param {number} dy
*/
  OnMouseWheel(dx: number, dy: number): void;
/**
* @param {number} button
*/
  OnMouseDown(button: number): void;
/**
* @param {number} button
*/
  OnMouseUp(button: number): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_app_free: (a: number) => void;
  readonly app_new: () => number;
  readonly app_Initalize: (a: number) => number;
  readonly app_OnResize: (a: number, b: number, c: number) => void;
  readonly app_OnRedraw: (a: number) => number;
  readonly app_OnKeyDownWasm: (a: number, b: number, c: number) => void;
  readonly app_OnKeyUpWasm: (a: number, b: number, c: number) => void;
  readonly app_OnMouseMotion: (a: number, b: number, c: number) => void;
  readonly app_OnMouseWheel: (a: number, b: number, c: number) => void;
  readonly app_OnMouseDown: (a: number, b: number) => void;
  readonly app_OnMouseUp: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h03d55d9835d82e6b: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7153553b8a5c0b0c: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0bfb8e4621c71fbe: (a: number, b: number, c: number, d: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h63897b450c72bdf8: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0a0adf06706b59e0: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5f06cbd9197ae509: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfccfeaeec4446e5e: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h7a8fae04cf855eea: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
