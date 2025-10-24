# Engineering College - Static Website

A professional, responsive multi-page website for Engineering College built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

The website consists of 6 main pages:

1. **Home (index.html)** - Hero section, statistics, features, and call-to-action
2. **Programs (programs.html)** - About section and filterable program listings
3. **Admissions (admissions.html)** - Application process, requirements, and tuition fees
4. **Student Life (student-life.html)** - Campus activities, clubs, events with tabs
5. **Contact (contact.html)** - Contact information and contact form
6. **Registration (registration.html)** - Advanced student application form

## ✨ Features Implemented

### Required Features
- ✅ Fixed top navigation bar across all pages
- ✅ Fully responsive design (mobile-first approach)
- ✅ Semantic HTML5 structure
- ✅ Bootstrap 5 components and utilities
- ✅ Accessibility features (ARIA labels, alt text, keyboard navigation)
- ✅ Two functional forms with validation

### Forms

#### 1. Registration Form (Advanced)
- Full name, email, phone fields
- Program selection dropdown
- Study mode radio buttons (Full-Time/Part-Time/Online)
- Intended intake date picker
- Password and confirm password with validation
- Scholarship interest (optional field)
- Terms & conditions checkbox
- Client-side validation with inline error messages
- Success confirmation display

#### 2. Contact Form (Basic)
- Name, email, subject, message fields
- Anti-spam math question (5 + 3 = ?)
- Form validation
- Success/error message display

### Interactive JavaScript Features

#### Feature 1: Program Filter
- Filter programs by category (All/Undergraduate/Graduate/Online)
- Smooth animations when filtering
- Active button state management

#### Feature 2: Tabbed Content (Student Life)
- Dynamic content switching between Upcoming Events, Campus News, and Achievements
- Keyboard accessible
- Bootstrap tab component integration

### UI/UX Quality
- Consistent color scheme (primary blue #0d6efd)
- Unified spacing system using CSS variables
- Typography hierarchy with proper heading structure
- Hover effects on cards and buttons
- Visual feedback for form validation
- Professional gradient hero section
- Shadow effects for depth
- Smooth transitions and animations

## 🎨 Design System

### Colors
- Primary: #0d6efd (Blue)
- Secondary: #6c757d (Gray)
- Dark: #212529
- Light: #f8f9fa
- Success: #198754
- Danger: #dc3545

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Line Height: 1.6
- Responsive font sizing using Bootstrap's display classes

### Spacing
- Base unit: 1rem (16px)
- Consistent padding and margins using Bootstrap's spacing utilities

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: ≥ 992px

## ♿ Accessibility Features
- Semantic HTML elements (nav, section, footer, etc.)
- ARIA labels for icon-only buttons
- Alt text for all non-decorative images
- Keyboard navigation support
- Focus states for all interactive elements
- Sufficient color contrast (WCAG AA compliant)
- Form labels properly associated with inputs

## 🚀 Deployment Instructions

### GitHub Pages Setup
1. Create a new repository named `engineering-college-website`
2. Upload all files maintaining folder structure:
   ```
   /
   ├── index.html
   ├── programs.html
   ├── admissions.html
   ├── student-life.html
   ├── contact.html
   ├── registration.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── main.js
   └── README.md
   ```
3. Go to Settings > Pages
4. Select "main" branch and root folder
5. Save and wait for deployment
* There is also a seperate folder to strore the images

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/engineering-college-website.git

# Navigate to folder
cd engineering-college-website

# Open in browser (use Live Server or similar)
# No build process required - pure HTML/CSS/JS
```

## 📦 Dependencies
- Bootstrap 5.3.2 (via CDN)
- Bootstrap Icons (SVG inline)
- No additional libraries required

## ⚠️ Known Limitations
- Forms submit client-side only (no backend integration)
- Image placeholders used instead of actual photos
- No CMS or dynamic content management
- Contact form emails not actually sent (demonstration only)
- No database storage for form submissions

## 🎯 Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Credits & Attribution

### Frameworks & Libraries
- Bootstrap 5.3.2 - https://getbootstrap.com/ (MIT License)

### Icons
- Bootstrap Icons (inline SVG) - https://icons.getbootstrap.com/ (MIT License)

### Design & Development
- Original design and development by [Your Name]
- Created as part of midterm project for Engineering College website

### Assets
- All text content is original
- Color scheme inspired by modern educational institutions
- Layout patterns based on best practices in educational web design

## 📧 Contact
For questions or feedback about this project:
- Email: info@engcollege.edu
- Phone: (555) 123-4567

## 📄 License
This project is created for educational purposes. By Adolat Gharibshoeva, CS 2028
