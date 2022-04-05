/* eslint-disable @typescript-eslint/no-explicit-any */
import colors, { Color } from 'colors';
import { isEmpty, startCase } from 'lodash';
import winston from 'winston';

type LogColor = keyof Pick<Color, 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white'>;
export default class Logger {
  private color?: LogColor;
  private logger: winston.Logger;

  public constructor(name: string, color?: LogColor) {
    this.color = color;
    this.logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(winston.format.label({ label: name }), this.format),
      transports: [new winston.transports.Console()],
    });
  }

  private colorize(input: string, color?: LogColor): string {
    const logColor = this.color || color;

    return logColor ? `${colors[`bright${startCase(logColor)}`](input)}` : input;
  }

  private stringifyData(...data: any[]): string {
    const [input] = data;
    const jsonString = JSON.stringify(input);
    const hasData = input.length ? input.every((i: any) => !isEmpty(i)) : false;

    return hasData ? ` ${jsonString}` : '';
  }

  private format = winston.format.printf(({ message, label }) => {
    return `[${this.colorize(label)}] ${message}`;
  });

  public log(message: string, ...data: any[]): void {
    this.logger.info(message + this.stringifyData(data));
  }

  public info(message: string, ...data: any[]): void {
    this.logger.info(this.colorize(message, 'blue') + this.stringifyData(data));
  }

  public success(message: string, ...data: any[]): void {
    this.logger.info(this.colorize(message, 'green') + this.stringifyData(data));
  }

  public warn(message: string, ...data: any[]): void {
    this.logger.warn(this.colorize(message, 'yellow') + this.stringifyData(data));
  }

  public debug(message: string, ...data: any[]): void {
    this.logger.debug(this.colorize(message, 'magenta') + this.stringifyData(data));
  }

  public error(message: string, ...data: any[]): void {
    this.logger.error(this.colorize(message, 'red') + this.stringifyData(data));
  }
}
