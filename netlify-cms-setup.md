# Netlify CMS Setup Guide - Small Church Tech

## 🎉 What You're Getting

A WordPress-like admin panel at: **smallchurchtech.com/admin**

### You Can Now:
- ✅ Write and edit articles in a visual editor (Markdown)
- ✅ Add new product reviews with a simple form
- ✅ Upload images directly
- ✅ Change homepage text
- ✅ Manage all content without touching code
- ✅ Preview before publishing

### I Can Still:
- ✅ Generate article templates for you
- ✅ Add new features
- ✅ Optimize SEO
- ✅ Fix technical issues

---

## 🚀 Setup Steps (10 Minutes)

### Step 1: Deploy Updated Site to Netlify (2 min)

1. **Download** the new ZIP file: `smallchurchtech-with-cms.zip`
2. **Extract** the folder
3. **Go to Netlify** → Your site → Deploys
4. **Drag and drop** the entire `seo-final` folder
5. **Wait** for deployment to complete

---

### Step 2: Enable Netlify Identity (3 min)

**This is what lets you log in to the CMS.**

1. **In Netlify Dashboard** → Your site
2. **Click** "Identity" tab (top menu)
3. **Click** "Enable Identity"
4. **Settings** → "Registration preferences"
5. **Select** "Invite only" (prevents random people signing up)
6. **Scroll down** → "External providers"
7. **Optional:** Enable Google/GitHub login for easier access
8. **Save**

---

### Step 3: Enable Git Gateway (1 min)

**This lets the CMS save your changes.**

1. **Still in Identity settings**
2. **Scroll to** "Services" → "Git Gateway"
3. **Click** "Enable Git Gateway"
4. **Done!**

---

### Step 4: Invite Yourself (2 min)

1. **Identity tab** → "Invite users"
2. **Enter your email**
3. **Click** "Send invite"
4. **Check your email**
5. **Click the invite link**
6. **Set your password**

---

### Step 5: Log Into CMS (1 min)

1. **Go to:** `https://smallchurchtech.com/admin`
2. **Enter** your email and password
3. **You're in!** 🎉

---

## 📝 Using the CMS

### Dashboard Overview:

**Left Sidebar:**
- **Articles** - All your blog posts/reviews
- **Site Settings** - Homepage text, site info

**Top Bar:**
- **New Article** - Create new post
- **Workflow** - Drafts (if enabled)
- **Media** - Image library

---

### Creating a New Article:

1. **Click** "Articles" in sidebar
2. **Click** "New Article" button
3. **Fill in the form:**
   - **Title:** Your article headline
   - **Meta Description:** For SEO (155 characters)
   - **Date:** Publication date
   - **Category:** Audio/Video/Lighting/Software
   - **Featured Image:** Upload or select
   - **Body:** Write in Markdown (easy formatting)
   - **Products Reviewed:** Add product details
   - **Tags:** Keywords for organization

4. **Click** "Publish" (or "Save Draft")

**That's it!** Article goes live immediately.

---

### Editing Existing Articles:

1. **Click** "Articles"
2. **Click** the article you want to edit
3. **Make changes**
4. **Click** "Publish" to update

**Changes go live instantly.**

---

### Uploading Images:

**Method 1: In Article**
- While editing, click "Insert Image" button
- Upload or select from library
- Image is automatically added to article

**Method 2: Media Library**
- Click "Media" in top bar
- Drag and drop images
- Use them in any article

**Images automatically go to `/images/` folder.**

---

### Editing Homepage Text:

1. **Click** "Site Settings" → "Homepage"
2. **Edit:**
   - Hero Title
   - Hero Subtitle
   - Site Description
3. **Click** "Publish"

**Note:** Full homepage redesign still needs code - tell me what you want changed.

---

### Editing Site Info:

1. **Site Settings** → "Site Info"
2. **Edit:**
   - Site Name
   - Your Name
   - Contact Email
   - Google Analytics ID
   - About Text
3. **Publish**

---

## 📚 Markdown Basics (For Articles)

The CMS uses Markdown - simple formatting:

```markdown
# Large Heading
## Medium Heading
### Small Heading

**Bold text**
*Italic text*

- Bullet point
- Another bullet

1. Numbered list
2. Second item

[Link text](https://example.com)

![Image alt text](/images/photo.jpg)
```

**Rich Text Editor Coming:** Netlify CMS also has a WYSIWYG mode you can enable.

---

## 🔄 Workflow: You + AI

### For New Articles:

**Option A: You Write in CMS**
1. Log into CMS
2. Click "New Article"
3. Write content
4. Publish

**Option B: I Generate, You Edit**
1. Tell me: "Create article about streaming cameras"
2. I generate Markdown content
3. You copy/paste into CMS
4. Edit with your expertise
5. Publish

**Option C: Hybrid**
1. I generate outline and structure
2. You write the details in CMS
3. Best of both worlds!

---

### For Quick Edits:

**You do it yourself in CMS:**
- Fixing typos
- Updating prices
- Adding new products
- Changing dates
- Uploading images

**Tell me for:**
- New features (contact forms, etc.)
- Design changes
- SEO optimization
- Technical issues

---

## 🎯 What You Can Edit vs What Needs Code

### ✅ You Can Edit in CMS:

**Content:**
- Article text
- Headlines
- Product info
- Images
- Meta descriptions
- Homepage hero text
- About text

**Structure:**
- Add new articles
- Delete articles
- Reorder (with workflow enabled)
- Categories/tags

---

### 🔧 Tell Me To Change:

**Design:**
- Colors
- Fonts
- Layout
- New sections

**Features:**
- Contact forms
- Email signup integration
- New page templates
- Custom functionality

**Technical:**
- SEO improvements
- Performance optimization
- Analytics setup
- Affiliate link management

---

## 🚨 Common Issues & Fixes

### Can't Log In?
- Check email for invite link
- Try password reset: `yourdomain.com/admin/#recovery`
- Make sure Identity is enabled in Netlify

### Changes Not Saving?
- Check that Git Gateway is enabled
- Make sure you're clicking "Publish" not just "Save"
- Check Netlify deploy log for errors

### Images Not Uploading?
- Check file size (max 5MB)
- Use JPG or PNG format
- Make sure you have write permissions

### CMS Not Loading?
- Clear browser cache
- Try incognito mode
- Check that `/admin/` files deployed correctly

---

## 📊 Article Template (Copy This)

When creating new articles in CMS, use this structure:

```markdown
## Quick Summary

[Brief overview of what you're reviewing]

## What We Tested

[List products tested]

## Our Top Pick

**Product Name** - Brief reason why

## Comparison Table

| Product | Price | Rating | Best For |
|---------|-------|--------|----------|
| Product 1 | $XXX | 4.5/5 | Budget |
| Product 2 | $XXX | 5/5 | Premium |

## Detailed Reviews

### Product 1 Name

**Pros:**
- Benefit 1
- Benefit 2

**Cons:**
- Drawback 1
- Drawback 2

[Your detailed testing experience]

## Buying Guide

[Key factors to consider]

## FAQ

**Q: Common question?**
A: Answer

## Final Recommendation

[Summary and specific recommendations]
```

---

## 🎨 Content Best Practices

### For SEO:
- Use target keyword in title
- Include keyword in first paragraph
- Add meta description
- Use descriptive image alt text
- Internal link to other articles

### For Readers:
- Start with TL;DR or Quick Summary
- Use headers to break up text
- Include comparison tables
- Add real-world examples
- End with clear recommendations

### For Conversions:
- Add affiliate links in multiple places
- Use "Our Top Pick" callouts
- Include product comparison tables
- Add urgency ("Updated Mar 2024")
- Make it easy to buy (clear CTAs)

---

## 🔐 Security

**Your CMS is secure:**
- ✅ Password protected
- ✅ Invite-only (you control who has access)
- ✅ All changes tracked in Git
- ✅ Can revert any change
- ✅ Hosted by Netlify (enterprise security)

**Best practices:**
- Use strong password
- Don't share login credentials
- Enable 2FA if available
- Only invite trusted team members

---

## 📱 Mobile Editing

**Good news:** Netlify CMS works on mobile!

- Works on phone/tablet browsers
- Can write articles on the go
- Upload photos from phone
- Approve/publish remotely

**Not ideal for:**
- Complex formatting
- Image editing
- Layout changes

**Best for:**
- Quick text edits
- Publishing pre-written content
- Approving drafts

---

## 🆙 Advanced Features (Optional)

### Editorial Workflow (Drafts)

**Enable in `/admin/config.yml`:**
```yaml
publish_mode: editorial_workflow
```

**You get:**
- Draft → In Review → Ready → Published
- Great for multi-author sites
- Can schedule posts

### Rich Text Editor

**Switch from Markdown to WYSIWYG:**

In CMS settings, change:
```yaml
widget: "markdown"
```
to:
```yaml
widget: "richtext"
```

### Custom Widgets

Want star ratings? Progress bars? Custom fields?

**Tell me what you need** → I'll add custom widgets to the CMS

---

## 🎓 Learning Resources

**Netlify CMS Docs:**
https://www.netlifycms.org/docs/

**Markdown Guide:**
https://www.markdownguide.org/basic-syntax/

**Video Tutorial:**
Search YouTube: "Netlify CMS tutorial"

---

## ✅ Setup Checklist

Before you start using the CMS:

- [ ] Deployed updated site to Netlify
- [ ] Enabled Netlify Identity
- [ ] Enabled Git Gateway
- [ ] Invited yourself (check email)
- [ ] Set password
- [ ] Logged into `/admin/` successfully
- [ ] Created test article
- [ ] Uploaded test image
- [ ] Verified article appears on site

**Once all checked, you're ready to go!**

---

## 💬 Quick Reference

**CMS Login:** `https://smallchurchtech.com/admin`

**Create Article:** Articles → New Article → Fill form → Publish

**Edit Homepage:** Site Settings → Homepage → Edit → Publish

**Upload Image:** Click image field → Upload → Insert

**Save Draft:** Click "Save" (top right)

**Publish Live:** Click "Publish" → Confirm

---

## 🚀 Your New Workflow

### Daily Content Tasks (You in CMS):
1. Log into `/admin/`
2. Edit articles
3. Add product reviews
4. Upload images
5. Publish updates

### Weekly Strategy (You + Me):
1. You: Write/edit in CMS
2. Me: Generate new article templates
3. You: Add expertise and publish
4. Me: Optimize SEO and features

### Monthly Growth (Me):
1. Analyze performance
2. Add new features
3. Optimize conversions
4. Scale automation

---

## 🎯 Next Steps

1. **Deploy the CMS** (follow setup steps above)
2. **Create your first article** in the visual editor
3. **Tell me:** "I'm in the CMS - create me an article template for [topic]"
4. **I'll generate** the content in Markdown format
5. **You paste and edit** in the CMS
6. **Publish!**

---

**You're now independent for content management while I handle the technical stuff!** 🎉

Questions? Just ask:
- "How do I add a product comparison table in CMS?"
- "Generate me an article about streaming cameras for the CMS"
- "I want to change the homepage design" (I'll code it, you edit text in CMS)
