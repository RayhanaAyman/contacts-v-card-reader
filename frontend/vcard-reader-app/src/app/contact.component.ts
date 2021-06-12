import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './contact.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact:Contact={} as any;
  public url=environment.apiBaseUrl;
  
  constructor(private contactService: ContactService,private activatedRoute: ActivatedRoute,private location: Location){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const contactId = params.id;
      console.log(contactId);
      this.onViewContact(contactId );
    });
  }

  public onViewContact(contactId: number):void{
    
    this.contactService.getContactById(contactId).subscribe(
      (response: Contact) => {
        this.contact=response;
      },
      (error:HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  public updateContact(contact: Contact):void{
    this.contactService.addContact(contact).subscribe(
      (response: Contact) => {
        this.contact=response;
        console.log(response);
        this.onViewContact(contact.id);
      },
      (error:HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
