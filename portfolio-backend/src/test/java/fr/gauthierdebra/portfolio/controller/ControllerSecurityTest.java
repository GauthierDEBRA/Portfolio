package fr.gauthierdebra.portfolio.controller;

import fr.gauthierdebra.portfolio.config.GlobalExceptionHandler;
import fr.gauthierdebra.portfolio.config.SecurityConfig;
import fr.gauthierdebra.portfolio.dto.ContactDto;
import fr.gauthierdebra.portfolio.model.Contact;
import fr.gauthierdebra.portfolio.service.ContactService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = {
    ContactController.class,
    AdminContactController.class,
    HealthController.class
})
@AutoConfigureMockMvc(addFilters = true)
@Import({
    SecurityConfig.class,
    GlobalExceptionHandler.class,
    ControllerSecurityTest.TestConfig.class
})
@TestPropertySource(properties = {
    "app.admin.username=admin",
    "app.admin.password=admin-password"
})
class ControllerSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldAllowPublicContactSubmission() throws Exception {
        mockMvc.perform(post("/api/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                      "name": "Gauthier",
                      "email": "gauthier@example.com",
                      "company": "Capgemini",
                      "message": "Bonjour, je souhaite echanger avec vous."
                    }
                    """))
            .andExpect(status().isOk());
    }

    @Test
    void shouldAllowHealthEndpointWithoutAuthentication() throws Exception {
        mockMvc.perform(get("/api/health"))
            .andExpect(status().isOk());
    }

    @Test
    void shouldProtectAdminEndpoints() throws Exception {
        mockMvc.perform(get("/api/admin/messages"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    void shouldAllowAdminEndpointsWithBasicAuth() throws Exception {
        mockMvc.perform(get("/api/admin/messages")
                .with(httpBasic("admin", "admin-password")))
            .andExpect(status().isOk());
    }

    @Test
    void shouldAllowMarkAsReadWithBasicAuth() throws Exception {
        mockMvc.perform(patch("/api/admin/messages/1/read")
                .with(httpBasic("admin", "admin-password")))
            .andExpect(status().isOk());
    }

    @TestConfiguration
    static class TestConfig {

        @Bean
        ContactService contactService() {
            return new ContactService(null, null) {
                @Override
                public Contact saveAndNotify(ContactDto dto) {
                    Contact contact = new Contact();
                    contact.setName(dto.getName());
                    contact.setEmail(dto.getEmail());
                    contact.setCompany(dto.getCompany());
                    contact.setMessage(dto.getMessage());
                    return contact;
                }

                @Override
                public List<Contact> getAllContacts() {
                    return List.of();
                }

                @Override
                public List<Contact> getUnreadContacts() {
                    return List.of();
                }

                @Override
                public Contact markAsRead(Long id) {
                    Contact contact = new Contact();
                    contact.setId(id);
                    contact.setRead(true);
                    return contact;
                }
            };
        }
    }
}
