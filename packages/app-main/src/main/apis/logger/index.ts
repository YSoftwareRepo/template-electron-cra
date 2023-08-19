import type { LoggerMainAPI } from '@ter/app-common/apis/logger';
import { LoggerAPIChannel } from '@ter/app-common/apis/logger';
import type { IpcMain } from 'electron';
import type winston from 'winston';

export function registerLoggerHandlers(ipc: IpcMain, logger: winston.Logger) {
    const handlers: LoggerMainAPI = {
        handleLog: (_, level, message, ...meta) => void logger.log(level, message, ...meta),

        handleDebug: (_, message, ...meta) => void logger.debug(message, ...meta),
        handleError: (_, message, ...meta) => void logger.error(message, ...meta),
        handleInfo: (_, message, ...meta) => void logger.info(message, ...meta),
        handleWarn: (_, message, ...meta) => void logger.warn(message, ...meta),
        handleVerbose: (_, message, ...meta) => void logger.verbose(message, ...meta),
    };

    ipc.handle(LoggerAPIChannel.LOG, handlers.handleLog);
    ipc.handle(LoggerAPIChannel.DEBUG, handlers.handleDebug);
    ipc.handle(LoggerAPIChannel.ERROR, handlers.handleError);
    ipc.handle(LoggerAPIChannel.INFO, handlers.handleInfo);
    ipc.handle(LoggerAPIChannel.WARN, handlers.handleWarn);
    ipc.handle(LoggerAPIChannel.VERBOSE, handlers.handleVerbose);
}
