<meta name='viewport' content='width=device-width, initial-scale=1'/><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlogFusion - Where Ideas Meet Innovation</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="index.html">BlogFusion</a>
            </div>
            <nav class="navbar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Categories <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="category.html?cat=technology">Technology</a></li>
                            <li><a href="category.html?cat=travel">Travel</a></li>
                            <li><a href="category.html?cat=food">Food</a></li>
                            <li><a href="category.html?cat=lifestyle">Lifestyle</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="search-box">
                <input type="text" placeholder="Search...">
                <button><i class="fas fa-search"></i></button>
            </div>
            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- Hero Banner -->
    <section class="hero">
        <div class="container">
            <h1>Welcome to BlogFusion</h1>
            <p>Where Ideas Meet Innovation</p>
            <a href="#featured-posts" class="btn">Explore Articles</a>
        </div>
    </section>

    <!-- Featured Posts -->
    <section id="featured-posts" class="featured-posts">
        <div class="container">
            <h2 class="section-title">Featured Posts</h2>
            <div class="posts-grid">
                <!-- Post 1 -->
                <article class="post-card">
                    <div class="post-image">
                        <img src="images/post1.jpg" alt="The Future of AI">
                        <span class="category-tag technology">Technology</span>
                    </div>
                    <div class="post-content">
                        <h3><a href="posts/post1.html">The Future of AI: What to Expect in 2024</a></h3>
                        <p class="post-excerpt">Exploring the upcoming trends in artificial intelligence and how they'll impact our daily lives...</p>
                        <div class="post-meta">
                            <span><i class="far fa-user"></i> John Doe</span>
                            <span><i class="far fa-calendar"></i> June 15, 2023</span>
                            <span><i class="far fa-comment"></i> 12 Comments</span>
                        </div>
                    </div>
                </article>

                <!-- Post 2 -->
                <article class="post-card">
                    <div class="post-image">
                        <img src="images/post2.jpg" alt="Hidden Gems in Bali">
                        <span class="category-tag travel">Travel</span>
                    </div>
                    <div class="post-content">
                        <h3><a href="posts/post2.html">Hidden Gems in Bali: Off-the-Beaten-Path Adventures</a></h3>
                        <p class="post-excerpt">Discover the less touristy but equally breathtaking spots in Bali that most visitors miss...</p>
                        <div class="post-meta">
                            <span><i class="far fa-user"></i> Jane Smith</span>
                            <span><i class="far fa-calendar"></i> May 28, 2023</span>
                            <span><i class="far fa-comment"></i> 8 Comments</span>
                        </div>
                    </div>
                </article>

                <!-- Post 3 -->
                <article class="post-card">
                    <div class="post-image">
                        <img src="images/post3.jpg" alt="Vegan Recipes">
                        <span class="category-tag food">Food</span>
                    </div>
                    <div class="post-content">
                        <h3><a href="posts/post3.html">5 Easy Vegan Recipes Even Meat-Lovers Will Enjoy</a></h3>
                        <p class="post-excerpt">These plant-based dishes are so delicious they'll make you forget about meat entirely...</p>
                        <div class="post-meta">
                            <span><i class="far fa-user"></i> Mike Johnson</span>
                            <span><i class="far fa-calendar"></i> April 10, 2023</span>
                            <span><i class="far fa-comment"></i> 15 Comments</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter">
        <div class="container">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest posts delivered right to your inbox</p>
            <form id="newsletter-form">
                <input type="email" placeholder="Your email address" required>
                <button type="submit" class="btn">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <div class="container">
            <h2 class="section-title">Browse Categories</h2>
            <div class="categories-grid">
                <a href="category.html?cat=technology" class="category-card technology">
                    <i class="fas fa-microchip"></i>
                    <h3>Technology</h3>
                    <p>12 Articles</p>
                </a>
                <a href="category.html?cat=travel" class="category-card travel">
                    <i class="fas fa-plane"></i>
                    <h3>Travel</h3>
                    <p>8 Articles</p>
                </a>
                <a href="category.html?cat=food" class="category-card food">
                    <i class="fas fa-utensils"></i>
                    <h3>Food</h3>
                    <p>15 Articles</p>
                </a>
                <a href="category.html?cat=lifestyle" class="category-card lifestyle">
                    <i class="fas fa-heart"></i>
                    <h3>Lifestyle</h3>
                    <p>10 Articles</p>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <h3>About BlogFusion</h3>
                    <p>BlogFusion is a premier blogging platform where ideas meet innovation. We cover technology, travel, food, and lifestyle topics.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="footer-categories">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="category.html?cat=technology">Technology</a></li>
                        <li><a href="category.html?cat=travel">Travel</a></li>
                        <li><a href="category.html?cat=food">Food</a></li>
                        <li><a href="category.html?cat=lifestyle">Lifestyle</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-envelope"></i> info@blogfusion.com</p>
                    <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Blog Street, Content City</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 BlogFusion. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html><style>/* Global Styles */
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
    --danger-color: #e74c3c;
    --success-color: #2ecc71;
    --warning-color: #f39c12;
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-primary);
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
}

a {
    text-decoration: none;
    color: var(--dark-color);
    transition: var(--transition);
}

a:hover {
    color: var(--primary-color);
}

img {
    width: 100%;
    display: block;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.btn {
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
}

.btn:hover {
    background: #2980b9;
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    color: var(--dark-color);
    position: relative;
    padding-bottom: 15px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--primary-color);
}

/* Header Styles */
.header {
    background: #fff;
    box-shadow: var(--box-shadow);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo a {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
}

.navbar ul {
    display: flex;
    list-style: none;
}

.navbar ul li {
    margin-left: 30px;
    position: relative;
}

.navbar ul li a {
    font-weight: 600;
    display: flex;
    align-items: center;
}

.navbar ul li a i {
    margin-left: 5px;
    font-size: 0.8rem;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    width: 200px;
    box-shadow: var(--box-shadow);
    border-radius: 5px;
    padding: 10px 0;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
}

.navbar ul li:hover .dropdown {
    opacity: 1;
    visibility: visible;
}

.dropdown li {
    margin: 0;
    padding: 8px 20px;
}

.dropdown li a {
    font-weight: 500;
}

.search-box {
    display: flex;
    align-items: center;
}

.search-box input {
    padding: 8px 15px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    outline: none;
    width: 200px;
}

.search-box button {
    background: var(--primary-color);
    color: #fff;
    border: none;
    padding: 8px 15px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

.mobile-menu {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/banner.jpg') no-repeat center center/cover;
    height: 500px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
    margin-top: 70px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

/* Featured Posts */
.featured-posts {
    padding: 80px 0;
    background: #fff;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.post-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.post-card:hover {
    transform: translateY(-10px);
}

.post-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.post-image img {
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.post-card:hover .post-image img {
    transform: scale(1.1);
}

.category-tag {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
}

.category-tag.technology {
    background: var(--primary-color);
}

.category-tag.travel {
    background: var(--success-color);
}

.category-tag.food {
    background: var(--warning-color);
}

.category-tag.lifestyle {
    background: #9b59b6;
}

.post-content {
    padding: 20px;
}

.post-content h3 {
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.post-excerpt {
    color: #666;
    margin-bottom: 15px;
}

.post-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #777;
}

.post-meta span {
    display: flex;
    align-items: center;
}

.post-meta i {
    margin-right: 5px;
}

/* Newsletter */
.newsletter {
    padding: 60px 0;
    background: var(--light-color);
    text-align: center;
}

.newsletter h2 {
    margin-bottom: 15px;
}

.newsletter p {
    margin-bottom: 30px;
    font-size: 1.1rem;
}

#newsletter-form {
    display: flex;
    max-width: 500px;
    margin: 0 auto;
}

#newsletter-form input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    outline: none;
}

#newsletter-form button {
    border-radius: 0 5px 5px 0;
}

/* Categories Section */
.categories {
    padding: 80px 0;
    background: #fff;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.category-card {
    padding: 30px 20px;
    border-radius: 8px;
    text-align: center;
    color: #fff;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
}

.category-card:hover {
    transform: translateY(-10px);
}

.category-card i {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.category-card h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
}

.category-card.technology {
    background: var(--primary-color);
}

.category-card.travel {
    background: var(--success-color);
}

.category-card.food {
    background: var(--warning-color);
}

.category-card.lifestyle {
    background: #9b59b6;
}

/* Footer */
.footer {
    background: var(--dark-color);
    color: #fff;
    padding: 60px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.footer h3 {
    margin-bottom: 20px;
    font-size: 1.3rem;
    position: relative;
    padding-bottom: 10px;
}

.footer h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--primary-color);
}

.footer-about p {
    margin-bottom: 20px;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #fff;
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
}

.footer-links ul, .footer-categories ul {
    list-style: none;
}

.footer-links li, .footer-categories li {
    margin-bottom: 10px;
}

.footer-links a, .footer-categories a {
    color: #ddd;
    transition: var(--transition);
}

.footer-links a:hover, .footer-categories a:hover {
    color: var(--primary-color);
    padding-left: 5px;
}

.footer-contact p {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.footer-contact i {
    margin-right: 10px;
    color: var(--primary-color);
    width: 20px;
}

.copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Post Page Styles */
.post-header {
    padding: 100px 0 50px;
    background: #f5f7fa;
    text-align: center;
}

.post-header h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.post-meta-large {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.post-meta-large span {
    display: flex;
    align-items: center;
    color: #666;
}

.post-meta-large i {
    margin-right: 5px;
}

.post-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 20px;
}

.post-content p {
    margin-bottom: 20px;
    font-size: 1.1rem;
    line-height: 1.8;
}

.post-content h2, .post-content h3 {
    margin: 30px 0 20px;
}

.post-content img {
    max-width: 100%;
    height: auto;
    margin: 30px 0;
    border-radius: 8px;
}

/* Category Page */
.category-header {
    padding: 100px 0 50px;
    text-align: center;
    background: var(--light-color);
}

.category-header h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.category-header p {
    max-width: 700px;
    margin: 0 auto;
    color: #666;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .navbar {
        display: none;
    }
    
    .mobile-menu {
        display: block;
    }
    
    .header .container {
        padding: 15px;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .hero {
        height: 400px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .posts-grid {
        grid-template-columns: 1fr;
    }
    
    .newsletter input {
        width: 100%;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
}

@media (max-width: 576px) {
    .hero {
        height: 350px;
        margin-top: 60px;
    }
    
    .search-box {
        display: none;
    }
    
    #newsletter-form {
        flex-direction: column;
    }
    
    #newsletter-form input {
        border-radius: 5px;
        margin-bottom: 10px;
    }
    
    #newsletter-form button {
        border-radius: 5px;
        width: 100%;
    }
}</style><script>document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navbar.style.display = 'none';
            }
        });
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            // Here you would typically send the email to your server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
            this.reset();
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Category Page Logic
    if (window.location.pathname.includes('category.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('cat');
        
        if (category) {
            // Update page title and header
            document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} | BlogFusion`;
            const categoryHeader = document.querySelector('.category-header h1');
            if (categoryHeader) {
                categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            }
            
            // Highlight active category in dropdown
            const categoryLinks = document.querySelectorAll('.dropdown li a');
            categoryLinks.forEach(link => {
                if (link.textContent.toLowerCase() === category.toLowerCase()) {
                    link.style.color = 'var(--primary-color)';
                    link.style.fontWeight = '600';
                }
            });
            
            // Filter posts (in a real app, this would be server-side)
            const posts = document.querySelectorAll('.post-card');
            if (posts.length > 0) {
                posts.forEach(post => {
                    const postCategory = post.querySelector('.category-tag').textContent.toLowerCase();
                    if (postCategory !== category.toLowerCase()) {
                        post.style.display = 'none';
                    }
                });
            }
        }
    }
    
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'var(--box-shadow)';
        }
    });
});</script>