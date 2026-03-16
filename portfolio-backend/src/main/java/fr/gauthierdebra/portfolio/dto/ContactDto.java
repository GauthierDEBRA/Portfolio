package fr.gauthierdebra.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
public class ContactDto {

    @NotBlank(message = "Le nom est requis")
    @Size(max = 100, message = "Le nom ne peut pas dépasser 100 caractères")
    private String name;

    @NotBlank(message = "L'email est requis")
    @Email(message = "Format email invalide")
    private String email;

    @Size(max = 150, message = "Le nom d'entreprise ne peut pas dépasser 150 caractères")
    private String company;

    @NotBlank(message = "Le message est requis")
    @Size(min = 10, max = 2000, message = "Le message doit faire entre 10 et 2000 caractères")
    private String message;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
