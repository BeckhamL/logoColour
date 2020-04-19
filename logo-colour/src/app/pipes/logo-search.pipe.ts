import { Pipe, PipeTransform } from "@angular/core";
import { LogoModel } from '../models/logo_model';

@Pipe({
  name: "logoFilter"
})
export class LogoFilterPipe implements PipeTransform {

  transform(items: LogoModel[], logo: string) {

    if (!items) {
        return [];
    }

    if (!logo) {
        return items;
    }

    logo.toLowerCase();


    return items.filter(item => {
        return item.name.toLowerCase().includes(logo);
    })
  }
}
