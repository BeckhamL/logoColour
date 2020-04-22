export class LogoCategoryModel {
  name: LogoCategoryEnum;
  selected: boolean;
}

export enum LogoCategoryEnum {
  technology = "Technology",
  foodBeverage = "Food/Beverage",
  clothing = "Clothing",
  gaming = "Gaming",
  retail = "Retail"
}
