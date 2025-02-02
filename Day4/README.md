# Nike Website

## Project Purpose
This project is a UI/UX design for a Nike website built with Next.js. The primary goal is to demonstrate the structure and styling of a modern e-commerce platform. While it focuses on visual and structural aspects, it does not include responsiveness.


## Key Components Implemented

1. **TopHeader**:  
   - Displays options like "Find a Store," "Help," "Join Us," and "Sign In."  
   - Includes a toggleable menu for mobile views (UI only, without responsiveness).  

2. **Header**:  
   - Features the Nike logo, primary navigation links, and a promotional image.  
   - Includes a non-responsive hamburger menu for smaller screens.  

3. **Footer**:  
   - Provides links to resources like "Order Status," "Delivery," and "Returns."  
   - Includes a legal notice section for terms and policies.  

4. **AirMax**:  
   - Highlights the "Best of Air Max" collection with product images, descriptions, and prices.  
   - Includes a grid layout for showcasing men's and women's Air Max shoes.  

5. **Don't Miss**:  
   - Features promotional content with a large image, headline, description, and a "Shop" button.  
   - Designed for showcasing limited-time offers or new releases.  

6. **Essential**:  
   - Highlights "The Essentials" with categories for men's, women's, and kids' products.  
   - Uses background images and styled buttons for visual appeal.  

7. **Featured**:  
   - Displays a large promotional image with a call-to-action button and supporting text.  
   - Designed to promote featured products or campaigns.  

8. **Gear Up**:  
   - Showcases a selection of gear for men and women with product images, details, and prices.  
   - Organized into sections for better visibility and categorization.  

9. **Icons**:  
   - Displays categorized product links like "Air Force 1," "All Shoes," "Hoodies & Pullovers," and "Kids' Shoes."  
   - A clean, list-style layout for easy navigation.  


## Navigation
To navigate between pages, you must manually type the desired page name in the address bar. The available pages are:  
- `/Cart`
- `/JoinUs`
- `/Login`
- `/Product`
- `/ProductDetail`
- `/CheckOut`
- `/ContactUs`

## Steps to Run the Project Locally
1. **Clone the Repository**:  
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**:  
   Ensure Node.js is installed, then run:  
   ```bash
   npm install
   ```

3. **Run the Development Server**:  
   Start the server with:  
   ```bash
   npm run dev
   ```
   The project will be available at [http://localhost:3000](http://localhost:3000).

4. **Access Pages**:  
   Open your browser and manually type the route (e.g., `/Cart`) after the base URL to navigate to specific pages.

5. **Build for Production**:  
   Generate an optimized build with:  
   ```bash
   npm run build
   ```