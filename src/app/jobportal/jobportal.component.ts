import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailorPhoneReqired } from '../shared/customerror.directive';

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})
export class JobportalComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  jobForm=this.fb.group({
    firstName:['',[Validators.required]],
    lastName:[''],
    // Nested form group
    contacts: this.fb.group({
      contactType:['-1',[emailorPhoneReqired()]],
      email:[''],
      phone:['']
    }),
    skills: this.fb.array([])
  });
  // jobForm= new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  preview: string ='';

  ngOnInit(): void {}

  save(){
    this.preview= JSON.stringify(this.jobForm.value)
  }

  get contactType(){
    return this.jobForm.get('contacts.contactType')
  }
  get firstName(){
    return this.jobForm.get('firstName')
  }
  
  getProgramLanguage(index: number){
    return this.skillForms.at(index).get('programLanguage');
  }

  get skillForms(){
    return this.jobForm.get('skills') as FormArray;
  }

  addSkillFormGroup(){
    this.skillForms.push(
      this.fb.group({
        programLanguage:['',[Validators.required]],
        experience:[0]
      })
    );
  }

  removeSkillFormGroup(index: number){
    this.skillForms.removeAt(index);
  }
// Full update
  sampleSetValue(){
    this.jobForm.setValue({
      firstName:'Moran',
      lastName:'Dahan',
      contacts:{
        contactType: 'email',
        email: 'MoranD@gmail.com',
        phone: '0587848575'
      },
      skills: []
    });
  }

//Part update
  samplePatchValue(){
    this.jobForm.patchValue({
      firstName:'Yuval',
      contacts:{
        email: 'Yuval@gmail.com'
      }
    });
  }

}
