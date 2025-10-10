---
order: 1
---

# User Access Management

User access across the federated EarthCODE ecosystem is managed through a centralized Single Sign-On (SSO) system. This ensures a seamless and secure experience, allowing users to authenticate once and gain access to the portal and all integrated platforms.

## The EarthCODE Portal's Role

The EarthCODE Portal is the central entry point for user authentication. It is the primary interface where scientists log in to discover resources and navigate to the suite of integrated platforms for development and analysis. The main integration point between the portal and all other platforms is the SSO system.

## Single Sign-On Flow

EarthCODE uses an OpenID Connect (OIDC) identity provider to deliver a federated login experience using an OAuth 2.0 Authorization Code flow. The system is configured to allow users to authenticate once with GitHub and subsequently gain access to multiple platforms without re-entering their credentials.

When a user clicks “Login with GitHub” on the EarthCODE portal, they are redirected to GitHub’s OAuth 2.0 endpoint. Upon authorisation, GitHub returns a code to EarthCODE, which EarthCODE's IdP exchanges for ID and access tokens. A session is established, mapping GitHub attributes to EarthCODE roles. Navigating to an integrated platform triggers a second authorisation request; EarthCODE's IdP recognises the active session and issues a token for the new client without prompting for credentials. The platform then validates the token and grants access.

### Platform Configuration

Each onboarded platform receives its own client configuration from the EarthCODE team, including specific redirect URIs and scope mappings. This shared configuration ensures consistent trust and secure token handling across the entire EarthCODE ecosystem.

