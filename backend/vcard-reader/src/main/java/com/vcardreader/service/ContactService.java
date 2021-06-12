package com.vcardreader.service;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;
import com.vcardreader.repository.ContactRepository;
import com.vcardreader.exceptions.UserNotFoundException;
import com.vcardreader.model.Contact;

@Service
public class ContactService {
	@Autowired  
	ContactRepository contactRepository;  

	public List<Contact> getAllContacts()   
	{  
		List<Contact> contacts = new ArrayList<Contact>();  
		contactRepository.findAll().forEach(contact -> contacts.add(contact));  
		return contacts;  
	}  

	public Contact getContactById(long id)
	{  
		return contactRepository.findById(id).orElseThrow(() -> new UserNotFoundException ("Contact not found"));  
	}
	
	public Contact saveContact(Contact contact)   
	{  
		return contactRepository.save(contact);  
	}  

	public void deleteContact(long id)   
	{  
		contactRepository.deleteById(id);  
	}
}
