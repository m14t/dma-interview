import {Pipe, PipeTransform} from 'angular2/core';

const SECS_IN_HOUR = 60 * 60;
const SECS_IN_MIN = 60;

/**
 * Takes a number of seconds, and converts it to a string like
 * "1hrs 2min" (or "14secs" if the time is less than 1 minute).
 */
@Pipe({name: 'timeFormat'})
export class TimeFormatPipe implements PipeTransform {
    transform(seconds: number): string {
        let output: string[] = [];

        let hours = Math.floor(seconds / SECS_IN_HOUR);
        if (0 !== hours) {
            output.push(`${hours}hrs`);
        }

        let minutes = Math.floor((seconds % SECS_IN_HOUR) / SECS_IN_MIN);
        if (0 !== minutes) {
            output.push(`${minutes}mins`);
        }

        if (0 === output.length) {
            output.push(`${seconds}secs`);
        }

        return output.join(' ');
    }
}
