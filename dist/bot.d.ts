/// <reference types="node" />
import { EventEmitter } from 'events';
import { Options } from './interfaces';
declare class Bot extends EventEmitter {
    client: any;
    private options;
    private username;
    private password;
    private chatQueue;
    private currentChatMode;
    private chatDelay;
    private messageLastSentTime;
    constructor(options: Options);
    init(): Promise<void>;
    connectCityBuild(destination: string): Promise<void>;
    sendChat(text: string, sendNext?: boolean): Promise<void>;
    sendCommand(command: string, sendNext?: boolean): Promise<void>;
    sendMsg(re: string, text: string, sendNext?: boolean): Promise<void>;
    pay(re: string, amount: number, sendNext?: boolean): Promise<void>;
    navigateTo(position: any): Promise<void>;
    end(reason?: string): void;
    private loadConnectorOptions;
    private installPlugins;
    private registerEvents;
    private getTimeSinceLastMessage;
    private processChatQueue;
    private send;
    private addToQueue;
    private sendNext;
    private clean;
}
declare function createBot(options: Options): Bot;
export { createBot, Bot, };
