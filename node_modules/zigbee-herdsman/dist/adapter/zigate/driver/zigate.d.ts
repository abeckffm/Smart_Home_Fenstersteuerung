/// <reference types="node" />
import SerialPort from 'serialport';
import { EventEmitter } from 'events';
import net from "net";
import { SerialPortOptions } from "../../tstype";
import { ZiGateCommandCode, ZiGateObjectPayload } from "./constants";
import ZiGateObject from "./ziGateObject";
import { ZiGateResponseMatcher } from "./commandType";
declare type WaitressMatcher = {
    ziGateObject: ZiGateObject;
    rules: ZiGateResponseMatcher;
    extraParameters?: object;
};
export default class ZiGate extends EventEmitter {
    private path;
    private baudRate;
    private rtscts;
    private initialized;
    private parser;
    private serialPort;
    private seqNumber;
    private portType;
    private socketPort;
    private queue;
    portWrite: SerialPort | net.Socket;
    private waitress;
    constructor(path: string, serialPortOptions: SerialPortOptions);
    sendCommand(code: ZiGateCommandCode, payload?: ZiGateObjectPayload, timeout?: number, extraParameters?: object, disableResponse?: boolean): Promise<ZiGateObject>;
    static isValidPath(path: string): Promise<boolean>;
    static autoDetectPath(): Promise<string>;
    open(): Promise<void>;
    close(): Promise<void>;
    waitFor(matcher: WaitressMatcher, timeout?: number): {
        start: () => {
            promise: Promise<ZiGateObject>;
            ID: number;
        };
        ID: number;
    };
    private openSerialPort;
    private openSocketPort;
    private onSerialError;
    private onPortClose;
    private onSerialData;
    private waitressTimeoutFormatter;
    private waitressValidator;
}
export {};
//# sourceMappingURL=zigate.d.ts.map