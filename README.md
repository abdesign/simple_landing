# Simple Example of a Landing Page Using Bootstrap/jQuery/Pug

---

## Original Project Scope

Design and code a Four of July landing page for Iowa80.com Promotion is 20% off lights Customer does not like fireworks 

Requirements: 
Must use CSS in someway 
Include an interactive element 

---

# Project Synopsis Based Off of Provided Details

Create a single landing page consisting of interactive elements promoting a 20% Off July 4th Special. 

### Project Outline

* Create a Single Landing Page focusing only on the Sale of Lighting Products using the July 4th Promotion
* Users should be first introduced to the promotion, and remined of it through out the page
* The only action we want a user to take is to buy products, all other links (internal/external omitted)
* The first group of products shown should be featured products which would contain the best sellers and/or most profitable
* The second group of products will consist of a prouct catalog that the users can browse
* Do not allow users to deviate from the sale funnel develped by this landing page
* Page must be responsive and usable across multiple devices
* Create supporting assets for the seasonal promition including vector/raster images
* Ulilize a modern technology stack that allows for **rapid development** since most landing pages have a fast turnaround

### Technology Stack

* #### Development Tools
  * Bootstrap/jQuery was chosen for rapid javascript development and popularity
  * Gulp is used for Task Automation (See gulpfile.js for plugins/modules used)
  * SASS is used for the CSS Preprocessor
  * PUG is used for HTML Templating
  * All coding was done from scratch using Sublime Text 3
  
* #### Design Tools
  * Adobe Photoshop
  * Adobe Illustrator
  * Axure RP

* #### Directory Structure
  * /dist - contains the deployable build of the landing page
  * /src - contains the development files 
  
*Note: most sub directories are self explainitory. /src/views contain the pug files for the template. Files in the /src/scss and /src/js should be used for evaluating CSS and Javascript respectively.*

---

# Conclusion

Since the scope of this project was to showcase my design/development skills, I only created the landing page itself while omitting addional pages and/or modal dialogs since I belive the landing page alone would be ample. Continued development could include:

* Individual Product Pages / Modals that contain the product details when clicked
* Product catalog block updates with pagination or redirects to seperate Product Catalog pages
* Add to cart button could provide a modal window with product info, "continue shopping" CTA, and a product upsell
* Though not specified, a phone number could be added to the page to allow for customers who wish to order by phone

---

# Taking it Further

Depending on client requirements, a landing page such as this could be developed into a template/app that could be used specifically for promotions (seasonal or otherwise) utilizing more in-depth technologies and features. Standardized graphics and assets created using atomic design priciples could be easily switched out for each promotion. For instance, VUE or React could be used to create a single page app that would allow customer to browse the catalog easier while adding search functions for larger product sub-sets. 
