package com.ezpz.shabit.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {

        Info info = new Info()
                .version("v1.0.0")
                .title("๐๏ธโโ๏ธ๐๏ธโโ๏ธ Shabit API ๋ช์ธ์")
                .description("Shabit API ๋ช์ธ์");

        // SecuritySecheme๋ช
        String jwtSchemeName = "jwtAuth";
        // API ์์ฒญํค๋์ ์ธ์ฆ์ ๋ณด ํฌํจ
        SecurityRequirement securityRequirement = new SecurityRequirement().addList(jwtSchemeName);
        // SecuritySchemes ๋ฑ๋ก
        Components components = new Components()
                .addSecuritySchemes(jwtSchemeName, new SecurityScheme()
                        .name(jwtSchemeName)
                        .type(SecurityScheme.Type.HTTP) // HTTP ๋ฐฉ์
                        .scheme("bearer")
                        .bearerFormat("JWT")); // ํ ํฐ ํ์์ ์ง์ ํ๋ ์์์ ๋ฌธ์(Optional)

        return new OpenAPI()
                .info(info)
                .addSecurityItem(securityRequirement)
                .components(components);
    }

}
