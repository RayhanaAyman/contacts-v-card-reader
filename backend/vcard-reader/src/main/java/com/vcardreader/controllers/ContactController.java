package com.vcardreader.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.vcardreader.model.Contact;
import com.vcardreader.service.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {

	@Autowired  
	ContactService contactService; 
	
	@GetMapping("/all")
	private List<Contact> getAllContacts()
	{
		
		return contactService.getAllContacts();
	}
	
	@GetMapping("/find/{id}")
	private Contact getContact(@PathVariable("id") int id)
	{
		
		return contactService.getContactById(id);
	}
	
	@PostMapping("/add")
	private Contact saveContact(@RequestBody Contact contact)
	{
		return contactService.saveContact(contact);
	}
	
	@DeleteMapping("/delete/{id}")
	private void deleteContact(@PathVariable("id") int id)
	{
		contactService.deleteContact(id);
	}
}
