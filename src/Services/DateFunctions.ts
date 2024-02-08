import { MONTHS, DAYS_ABR } from "./Constants";
const { getDaysInMonth, startOfMonth, lastDayOfMonth } = require("date-fns");

export function getMonthName(date: Date){
    const monthDigit = new Date().getMonth();
    return MONTHS[monthDigit];
 }

 export function getWeekCount(month: number, year: number, startEmptyDays: number, endEmptyDays: number, fullDays: number ){
    let weekCount = 0;
    weekCount = (startEmptyDays + fullDays + endEmptyDays) / 7;
    return weekCount;
 }

 export function getTotalDaysCount(month: number, year: number, startEmptyDays: number, endEmptyDays: number, fullDays: number ){
    let totalDaysCount = 0;
    totalDaysCount = startEmptyDays + fullDays + endEmptyDays;
    return totalDaysCount;
 }

 export function getFirstDayOfMonth(month:number, year: number){
    const result = startOfMonth(new Date(year, month, 2, 11, 55, 0)).toString();;
    const firstDay = DAYS_ABR.indexOf(result.substring(0,3));
    return firstDay;
 }

 export function getLastDayOfMonth(month:number, year: number){
    const result = lastDayOfMonth(new Date(year, month, 2, 11, 55, 0)).toString();
    const lastDay = DAYS_ABR.indexOf(result.substring(0,3));
    return lastDay;
 }

 export function getDaysInMonthCount(month:number, year: number){
    const result = getDaysInMonth(new Date(year, month));
    return result;
 }

 export function getCurrentDate() {
   const currentDate = new Date();
   const year = currentDate.getFullYear();
   const month = currentDate.getMonth();
   const fullDays = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month
   return { year, month, fullDays };
 }
 
 export function getEmptyDays(year: number, month: number) {
   const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the day of the week for the first day of the month (0-6, where 0 is Sunday)
   const lastDayOfMonth = new Date(year, month + 1, 0).getDay(); // Get the day of the week for the last day of the month
 
   // Calculate the number of empty days at the start and end of the month
   const startEmptyDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust Sunday (0) to 6
   const endEmptyDays = lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth;
 
   return { start: startEmptyDays, end: endEmptyDays };
 }