import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent implements OnInit {

  public contacts: Contact[] = [];
  public url=environment.apiBaseUrl;
  constructor(private contactService: ContactService){}
  
  ngOnInit(){
    this.getContacts();
  }

  public getContacts(): void {
    this.contactService.getContacts().subscribe(
      (response: Contact[]) => {
        this.contacts=response;
      },
      (error:HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  public onAddContact(addForm: NgForm): void {
    const addform=document.getElementById("add-contact-form");
    addform?.click();
    this.contactService.addContact(addForm.value).subscribe(
      (response: Contact) => {
        this.getContacts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        addForm.reset();
      }
    );
  }

  public onOpenModal(): void{
    const container=document.getElementById("main-container");
    const button=document.createElement('button');
    button.type='button';
    button.style.display="none";
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#addContactModal');
    container?.appendChild(button);
    button.click();
  }

}
