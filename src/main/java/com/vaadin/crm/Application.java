package com.vaadin.crm;

import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.vaadin.artur.helpers.LaunchUtil;
import com.vaadin.flow.theme.Theme;

/**
 * The entry point of the Spring Boot application.
 *
 * Use the * and some desktop browsers.
 *
 */
@SpringBootApplication
@Theme(value = "vaadincrm")
@PWA(name = "Vaadin CRM", shortName = "Vaadin CRM", offlineResources = {"images/logo.png"})
public class Application extends SpringBootServletInitializer implements AppShellConfigurator {

    public static void main(String[] args) {
        LaunchUtil.launchBrowserInDevelopmentMode(SpringApplication.run(Application.class, args));
    }

}
