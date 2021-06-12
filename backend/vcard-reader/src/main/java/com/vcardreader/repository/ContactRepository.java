package com.vcardreader.repository;
import org.springframework.data.repository.CrudRepository;
import com.vcardreader.model.Contact;  

public interface ContactRepository extends CrudRepository<Contact, Long>{

}
