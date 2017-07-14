import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'titleFilter',
  pure: false
})
export class TitleFilterPipe implements PipeTransform {

  transform(input: Member[], desiredTitleFilter) {
    var output: Member[] = [];
    if(desiredTitleFilter === "GM"){
      for(var i=0; i<input.length; i++){
        if(input[i].title === "Grand Manager"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredTitleFilter === "BM"){
      for(var i=0; i<input.length; i++){
        if(input[i].title === "Baby Manager"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredTitleFilter === "MM"){
      for(var i=0; i<input.length; i++){
        if(input[i].title === "Micro Manager"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredTitleFilter === "WE"){
      for(var i=0; i<input.length; i++){
        if(input[i].title === "Wise Elder"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredTitleFilter === "FM"){
      for(var i=0; i<input.length; i++){
        if(input[i].title === "Fresh Meat"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }

}
