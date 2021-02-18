package com.vaadin.crm.data.entity;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Nullable;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import com.vaadin.crm.data.AbstractEntity;

@Entity
public class Company extends AbstractEntity {
  @NotBlank
  private String name;

  @OneToMany(mappedBy = "company")
  @Nullable
  private List<Contact> employees = new LinkedList<>();

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Contact> getEmployees() {
    return employees;
  }

  public void setEmployees(List<Contact> employees) {
    this.employees = employees;
  }
}
