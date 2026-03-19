# Church Tech Affiliate Site - Complete Deployment Guide

## 🚀 Quick Start (5 Minutes to Live Site)

### Option 1: Netlify Deploy (Recommended - Easiest)

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy Your Site**
   - Drag and drop the entire `church-tech-site` folder into Netlify
   - Your site goes live immediately at `yoursite.netlify.app`

3. **Add Custom Domain**
   - In Netlify: Site Settings → Domain Management
   - Add your domain (e.g., `churchtechinsider.com`)
   - Follow DNS instructions from your domain registrar

**That's it. Your site is live with SSL, CDN, and automatic deployments.**

---

### Option 2: Vercel Deploy (Also Easy)

1. Go to https://vercel.com
2. Import the project folder
3. Deploy (takes 30 seconds)
4. Add custom domain in settings

---

### Option 3: GitHub Pages (Free Hosting)

1. Create GitHub account at https://github.com
2. Create new repository: `your-church-tech-site`
3. Upload all files from `church-tech-site` folder
4. Enable GitHub Pages in Settings → Pages
5. Your site: `yourusername.github.io/your-church-tech-site`

---

### Option 4: Traditional Web Host (Bluehost, SiteGround, etc.)

1. Purchase hosting plan
2. Use File Manager or FTP (FileZilla)
3. Upload all files to `public_html` directory
4. Site automatically works at your domain

---

## 📁 Site Structure Explained

```
church-tech-site/
├── index.html              # Homepage (main landing page)
├── css/
│   ├── styles.css          # Main site styles
│   └── article.css         # Article page styles
├── js/
│   └── main.js            # Site functionality (modals, CTAs, tracking)
├── articles/
│   └── best-wireless-mic-systems-under-500.html  # First pillar article
├── images/
│   └── (add your product images here)
└── README.md              # This file
```

---

## 🖼️ Adding Images

**Critical for Affiliate Conversion:** Professional product images significantly increase click-through rates.

### Required Images:

1. **Homepage Images (800×450px):**
   - `wireless-mics-placeholder.jpg`
   - `streaming-placeholder.jpg`
   - `mixer-placeholder.jpg`

2. **Article Images (600×400px):**
   - `sennheiser-ew-d-placeholder.jpg`
   - `ew-d-detail-placeholder.jpg`

### Where to Get Images:

**Option A: Manufacturer Websites**
- Sennheiser, Shure, Audio-Technica all provide high-res product images
- Look for "Press Kit" or "Media Resources" pages
- Download and resize to dimensions above

**Option B: Affiliate Networks**
- Amazon Associates provides product images
- Use Amazon Product Advertising API for dynamic images

**Option C: Create Your Own**
- Use Canva.com (free) to create professional mockups
- Templates: Product Photography, Tech Reviews
- Export as JPG at required dimensions

### How to Add Images:

1. Place image files in `/images/` folder
2. Remove `-placeholder` from filenames
3. Images automatically display (paths already set in HTML)

---

## 🔗 Setting Up Affiliate Links

**IMPORTANT:** Replace placeholder links with your actual affiliate URLs.

### Step 1: Sign Up for Affiliate Programs

**Amazon Associates:**
1. Go to https://affiliate-program.amazon.com
2. Sign up (requires website URL - use Netlify URL initially)
3. Get approved (usually 1-3 days)
4. Generate product links using SiteStripe or Product Linking

**Sweetwater:**
1. Email affiliates@sweetwater.com
2. Request affiliate account
3. Get approval
4. Access affiliate dashboard for links

**B&H Photo Video:**
1. Go to https://www.bhphotovideo.com/find/affiliate.jsp
2. Apply for affiliate program
3. Get tracking code

### Step 2: Replace Placeholder Links

Open `/articles/best-wireless-mic-systems-under-500.html`

Find lines like:
```html
<a href="https://amazon.com/PLACEHOLDER" class="btn btn-primary affiliate-link">
```

Replace with your actual affiliate link:
```html
<a href="https://amazon.com/dp/B08XYZABC?tag=youraffid-20" class="btn btn-primary affiliate-link">
```

**Pro Tip:** Use a link management tool like ThirstyAffiliates or Pretty Links to:
- Shorten ugly affiliate URLs
- Track clicks
- Update links globally
- Add no-follow attributes automatically

---

## ✏️ Editing Content (Your Expertise)

### Priority Edits:

**1. Complete Product Reviews**
   - File: `/articles/best-wireless-mic-systems-under-500.html`
   - Search for `[YOU WOULD EDIT THIS SECTION]`
   - Add your hands-on testing experience
   - Include specific use cases from your church context

**2. Add Author Info**
   - Find "Alex Daniels" in article header
   - Replace with your name
   - Update author avatar initials (line with `<div class="author-avatar">AT</div>`)

**3. Personalize Voice**
   - The template uses a "practical peer" tone
   - Edit intro paragraphs to match your authentic voice
   - Add specific anecdotes from your church experience

### What to Edit:

```html
<!-- EXAMPLE: Generic template text -->
<p>During testing, we had one dropout over four weeks...</p>

<!-- YOUR VERSION: Specific, authentic -->
<p>I used this system for 6 consecutive Sunday services at Grace Community. 
The only dropout happened when Pastor Mike wandered into the fellowship hall—
about 150 feet beyond the rated range—during a particularly animated sermon 
about Jonah. Otherwise, flawless.</p>
```

**This specificity builds trust and converts better.**

---

## 📧 Email Capture Setup

The site includes email capture modals. Connect to your email service:

### Option 1: Mailchimp (Most Popular)

1. Create Mailchimp account
2. Get form embed code
3. Replace form in `index.html` and article pages
4. Code location: Search for `<form id="emailForm">`

### Option 2: ConvertKit (Creator-Focused)

1. Sign up at convertkit.com
2. Create a form
3. Get JavaScript embed code
4. Replace existing form code

### Option 3: Custom Solution

The current JavaScript (in `/js/main.js`) stores emails in `localStorage`. 

To send to your own server:
```javascript
// In main.js, line ~45, replace console.log with:
fetch('https://your-domain.com/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
});
```

---

## 🎨 Customization

### Change Colors:

Edit `/css/styles.css`, lines 10-20:

```css
:root {
    --primary: #D97706;        /* Change this to your brand color */
    --secondary: #1E40AF;      /* Secondary accent */
    --text-dark: #1F2937;      /* Main text */
}
```

### Change Fonts:

Edit `<link>` in `index.html` header, replace Google Fonts URL:

Current:
```html
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

Then update CSS variables:
```css
--font-display: 'YourDisplayFont', serif;
--font-body: 'YourBodyFont', sans-serif;
```

### Change Site Name:

Find and replace "Small Church Tech" throughout all files with your brand name.

---

## 📊 Analytics Setup

### Google Analytics 4:

1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (looks like `G-XXXXXXXXXX`)
3. Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track Affiliate Clicks:

The JavaScript is already set up to track affiliate links (see `/js/main.js` line ~115).

Once GA4 is connected, you'll see:
- Event Category: "Affiliate Link"
- Event Label: Destination URL
- Track which products get clicked most

---

## 🚀 Creating New Articles

### Quick Process:

1. **Duplicate** `best-wireless-mic-systems-under-500.html`
2. **Rename** to match new topic (e.g., `best-church-mixers.html`)
3. **Edit content** with your expertise
4. **Update** homepage `index.html` to link to new article

### Article Template Structure:

```
1. Header with breadcrumbs
2. Table of Contents (auto-linked)
3. Quick Summary Box (top pick)
4. Quick Picks Grid (3-4 options)
5. Introduction (your voice)
6. Comparison Table
7. Testing Methodology
8. Detailed Reviews (3-8 products)
   - What Makes It Great
   - Pros/Cons
   - Best For
   - Affiliate Links
9. Buying Guide (educational)
10. FAQ
11. Final Recommendation
12. Related Articles
```

**Pro Tip:** Use the existing article as a template. The structure is conversion-optimized based on analysis of top affiliate sites.

---

## 💰 Monetization Strategy

### Phase 1: Foundation (Months 1-2)
- Launch with 3 pillar articles
- Set up affiliate accounts
- Configure email capture
- Install analytics

### Phase 2: Content Growth (Months 3-6)
- Add 2-3 articles per month
- Focus on long-tail keywords (specific product comparisons)
- Build email list to 500+ subscribers

### Phase 3: Revenue Optimization (Months 6-12)
- Add affiliate promotions to email newsletter
- Create buying guides for seasonal needs (Easter, Christmas productions)
- Add display ads (Ezoic, Mediavine) once you hit 10K monthly visitors

### Phase 4: Expansion (Year 2+)
- Launch info products (courses, ebooks)
- Offer consulting services
- Create comparison tools (interactive buyers guides)

---

## 🔍 SEO Checklist

The site is pre-optimized, but verify:

✅ **Technical SEO:**
- [ ] Site loads fast (use PageSpeed Insights)
- [ ] Mobile-responsive (test on phone)
- [ ] SSL certificate (automatic with Netlify/Vercel)
- [ ] XML sitemap (generate at xml-sitemaps.com)

✅ **On-Page SEO:**
- [ ] Unique title tags (already done)
- [ ] Meta descriptions (already done)
- [ ] H1, H2, H3 hierarchy (already done)
- [ ] Image alt text (add when you replace images)

✅ **Content SEO:**
- [ ] Target keyword in first paragraph
- [ ] Internal linking between articles
- [ ] External links to manufacturer sites
- [ ] Comprehensive, in-depth content (2000+ words per article)

✅ **Submit to Search Engines:**
- [ ] Google Search Console (verify ownership)
- [ ] Bing Webmaster Tools
- [ ] Submit sitemap to both

---

## 📱 Mobile Optimization

Site is fully responsive, but test:

1. View on actual smartphone
2. Check images load properly
3. Verify affiliate buttons are easy to tap
4. Test modal popup on mobile
5. Ensure table scrolls horizontally on small screens

---

## 🛠️ Maintenance

### Weekly:
- Check affiliate links (make sure they work)
- Review analytics (which articles get traffic?)
- Respond to any emails from subscribers

### Monthly:
- Update pricing if products go on sale
- Add new articles (2-3 per month ideal)
- Check for broken links (use broken-link-checker.com)

### Quarterly:
- Refresh top articles with new info
- Update "Updated [Date]" badges
- Review and optimize low-performing content

---

## ⚖️ Legal Requirements

### Affiliate Disclosure:
✅ Already included in footer: "As an Amazon Associate and affiliate partner, we earn from qualifying purchases."

### Additional Disclosures Needed:

1. **Create `/privacy-policy.html`**
   - Use privacy policy generator (termsfeed.com)
   - Disclose email collection practices
   - Explain cookie usage
   - GDPR compliance if targeting EU visitors

2. **Create `/affiliate-disclosure.html`**
   - Explain affiliate relationships
   - List all affiliate programs you participate in
   - State you may earn commissions

3. **Update Footer Links:**
   - Link to both policies from footer (already in template)

**IMPORTANT:** Consult with a lawyer if you're serious about this business. These are templates, not legal advice.

---

## 🎯 Next Steps (Your Action Items)

### Week 1: Get Live
- [ ] Choose hosting (Netlify recommended)
- [ ] Upload site
- [ ] Buy domain name
- [ ] Connect domain to hosting

### Week 2: Content
- [ ] Add product images
- [ ] Complete wireless mic article with your expertise
- [ ] Replace placeholder affiliate links
- [ ] Set up email capture

### Week 3: Promote
- [ ] Submit to search engines
- [ ] Share on social media
- [ ] Email church tech director groups
- [ ] Post in relevant forums (church tech subreddits)

### Week 4+: Growth
- [ ] Write second pillar article
- [ ] Build email list
- [ ] Monitor analytics
- [ ] Optimize top-performing content

---

## 🆘 Troubleshooting

**Q: Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `/images/` folder
- Verify image file extensions (.jpg not .jpeg)

**Q: Affiliate links not working?**
- Verify you're approved for affiliate programs
- Check link format (must include your affiliate ID)
- Test in incognito mode

**Q: Email form not submitting?**
- Open browser console (F12)
- Check for JavaScript errors
- Verify you've connected to email service

**Q: Site looks broken on mobile?**
- Clear browser cache
- Check if CSS files uploaded correctly
- Verify viewport meta tag exists in HTML

---

## 📚 Resources

**Affiliate Marketing:**
- Income School (YouTube channel - fantastic free training)
- /r/juststart (Reddit community for affiliate site builders)
- Authority Hacker (advanced affiliate strategies)

**Church Tech Communities:**
- Church Production Magazine forums
- ChurchTechArts.com
- /r/churchtech (Reddit)

**SEO Tools:**
- Google Search Console (free, essential)
- Ubersuggest (keyword research)
- AnswerThePublic (content ideas)

**Design Resources:**
- Canva.com (create images, mockups)
- Unsplash.com (free stock photos)
- Coolors.co (color palette generator)

---

## ✉️ Support

This is a fully functional, conversion-optimized affiliate site built specifically for your church tech expertise.

**Remember:**
- Your hands-on testing and experience are what make this valuable
- Authentic, specific reviews convert better than generic content
- Build trust first, revenue follows
- Focus on helping church tech directors solve real problems

Now go make this your own and start building that passive income stream!

---

**Version:** 1.0  
**Last Updated:** March 2024  
**Built for:** Church Tech Directors entering affiliate marketing
