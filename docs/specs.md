# **Project Requirement Document: Freelance Web Development Portfolio**

## **1\. Project Overview**

Goal: To establish a professional online presence for a freelance web developer targeting the Greater Montreal area, Quebec, and Canada.  
Primary Objective: To convert small business owners by showcasing technical reliability and business automation skills.  
Core Identity: "The Capable Specialist" — Bridging the gap between fast marketing websites and complex web applications.

## **2\. Target Audience & Strategy**

* **Primary Audience:** Small to medium business owners (service-based, local retail) who have outdated or non-existent web presences.  
* **Secondary Audience:** National clients looking for bilingual (EN/FR) development capabilities.  
* **Key Selling Propositions:**  
  1. **Bilingual Native:** Seamless French/English support (vital for Quebec market).  
  2. **Automation Focus:** Moving manual business processes (calls/texts) to digital tools (forms/portals).  
  3. **Technical Depth:** Able to build complex logic (Laravel experience) unlike generic template builders.

## **3\. Content Architecture (Single Page Application Structure)**

### **A. Navigation**

* **Logo/Brand Name**  
* **Language Switcher:** Toggle between EN / FR (Critical feature).  
* **Links:** Services, Work, About, Contact.

### **B. Hero Section**

* **Headline Strategy:** Location-aware \+ Benefit-driven.  
  * *Concept:* "Bilingual Web Development from Montreal."  
* **Sub-headline:** Focus on the specific value provided to the cleaning client (Lead Capture).  
  * *Concept:* "I build fast, custom websites that automate your processes and capture leads."  
* **Call to Action (CTA):** Low friction (e.g., "Discuss your project").

### **C. Services (The "Hybrid" Offer)**

Do not list languages (PHP, JS); list outcomes.

1. **Marketing Websites:** High-performance, SEO-ready sites for local visibility (Astro).  
2. **Business Automation:** Custom quote forms, booking systems, and lead capture (The "Hierronix" Model).  
3. **Web Applications:** Custom portals, user accounts, and database management (The "Delight/Laravel" Model).

### **D. Featured Work (Depth over Breadth)**

*Display these as detailed "Case Studies" rather than simple gallery images.*

**Project 1: Hierronix Care (Business Case)**

* **Tagline:** Converting manual calls into digital leads.  
* **The Problem:** Client was overwhelmed by text/phone quote requests.  
* **The Solution:** A bilingual site with a streamlined "Get a Quote" workflow.  
* **The Result:** 24/7 automated quote intake directly to email.

**Project 2: Delight App (Technical Case)**

* **Tagline:** Scalable Web Application Engineering.  
* **The Context:** A personal Laravel project with 50+ active users.  
* **The "Flex":** Demonstrates ability to handle databases, authentication, and complex user logic.  
* **The Client Benefit:** "Proof that I can build robust, crash-proof systems."

### **E. About & Trust**

* **Location:** Clearly state "Based in Greater Montreal / Valleyfield."  
* **Language:** Explicitly mention capability to serve Francophone and Anglophone markets.  
* **Background:** Brief mention of full-stack capabilities (Laravel/Vue) to build trust in technical competence.

### **F. Footer**

* Quick Links.  
* Social Proof (LinkedIn / GitHub).  
* Copyright & Legal.

## **4\. Technical Specifications**

### **Core Stack**

* **Framework:** Astro (Static Site Generation).  
* **Styling:** Tailwind CSS.  
* **Interactivity:** Alpine.js (Lightweight handling for mobile menu & UI toggles).  
* **Deployment:** Netlify or Vercel.

### **Functional Requirements**

1. **Internationalization (i18n):**  
   * Must use Astro's native routing (/en and /fr sub-paths).  
   * Content must be fully mirrored in both languages.  
   * Auto-detection of browser language preference (optional but recommended).  
2. **Performance Budget:**  
   * Target: 95+ Mobile score on Google PageSpeed Insights.  
   * Images: Use Astro \<Image /\> component for automatic WebP conversion and lazy loading.  
3. **Contact/Lead Form:**  
   * Implementation: Netlify Forms or Formspree (Keep it static, no backend required).  
   * Fields: Name, Email, Service Type, Language Preference.  
4. **SEO & Schema:**  
   * Implementation of LocalBusiness or ProfessionalService JSON-LD schema.  
   * Explicit hreflang tags for SEO to understand the EN/FR relationship.

### **Design Aesthetic**

* **Visual Style:** Clean, minimalist, and "fast-looking."  
* **Typography:** High legibility sans-serif.  
* **Palette:** Professional, trustworthy colors (Navy, Slate, Clean White) with a distinct accent color for CTAs.

## **5\. Implementation Roadmap**

1. **Setup:** Initialize Astro project with Tailwind and Alpine integrations.  
2. **Routing:** Configure src/pages/\[lang\]/ folder structure for i18n.  
3. **Content:** Create content collections for "Projects" to keep data separate from UI.  
4. **Development:** Build components (Nav, Hero, ProjectCard, Form).  
5. **Deployment:** Push to Netlify/Vercel and configure DNS.