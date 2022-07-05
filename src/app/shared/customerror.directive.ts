import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailorPhoneReqired():ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null =>{
    return control.value =='-1'
    ?{emailorPhoneReqired:{value: control.value}}
    :null;
  }
}
