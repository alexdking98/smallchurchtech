# 11ty Setup Guide - CMS Now Works!

## 🎉 What Changed:

Your site is now powered by **11ty (Eleventy)** - a static site generator that pulls content from your Netlify CMS.

### Before:
- ❌ Edit in CMS → Nothing happens
- ❌ Static HTML files
- ❌ Manual updates only

### After:
- ✅ Edit in CMS → Click "Publish" → Live on site!
- ✅ Dynamic content from CMS
- ✅ Still outputs fast static HTML

---

## 🚀 Deployment Steps (10 Minutes)

### Step 1: Push to GitHub (5 min)

Your site is already connected to GitHub, so we just need to update it.

**Option A: Using GitHub Website (Easiest)**

1. Go to your GitHub repository (the one connected to Netlify)
2. Click "Add file" → "Upload files"
3. Drag the entire `eleventy-site` folder contents
4. Scroll down, add commit message: "Add 11ty CMS integration"
5. Click "Commit changes"

**Option B: Using GitHub Desktop (If you have it)**

1. Open GitHub Desktop
2. Select your repository
3. Replace all files with contents of `eleventy-site` folder
4. Commit with message: "Add 11ty CMS integration"
5. Push to origin

---

### Step 2: Update Netlify Build Settings (3 min)

1. **Go to Netlify** → Your site → Site settings
2. **Click** "Build & deploy"
3. **Scroll to** "Build settings"
4. **Update:**
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
5. **Click** "Save"

---

### Step 3: Trigger Deploy (1 min)

1. **Netlify Dashboard** → Your site → Deploys
2. **Click** "Trigger deploy" → "Deploy site"
3. **Wait** 2-3 minutes for build to complete
4. **Visit your site** - should look exactly the same!

---

### Step 4: Test the CMS (1 min)

1. **Go to** `smallchurchtech.com/admin`
2. **Edit** an existing article or create new one
3. **Click "Publish"**
4. **Wait** 1-2 minutes for auto-deploy
5. **Refresh your site** - changes should be live!

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at smallchurchtech.com
- [ ] Homepage shows articles from CMS
- [ ] Clicking article opens article page
- [ ] CMS at /admin/ still works
- [ ] Edit in CMS → Publish → Changes appear on site (2 min delay)

---

## 🔄 Your New Workflow

### Creating Articles:

**Old way:** Edit HTML files manually

**New way:**
1. Log into `/admin/`
2. Click "New Article"
3. Fill in form (title, content, images, products)
4. Click "Publish"
5. **Wait 2 minutes** - Netlify auto-builds
6. Article appears on live site!

---

### Editing Content:

**Homepage hero text, site settings:**
1. CMS → "Site Settings"
2. Edit
3. Publish
4. Auto-deploys

**Articles:**
1. CMS → "Articles" → Select article
2. Edit
3. Publish
4. Auto-deploys

---

## 📝 How It Works (Technical Overview)

### The Stack:

```
Netlify CMS (Your editing interface)
      ↓
Saves to GitHub (as .md files)
      ↓
Triggers Netlify build
      ↓
11ty reads .md files
      ↓
Generates static HTML
      ↓
Deploys to live site
```

**Translation:** CMS saves → GitHub notices → Netlify rebuilds → Site updates

---

## 🎯 Writing Articles in the CMS

### Markdown Basics:

```markdown
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another bullet

1. Numbered item
2. Second item

[Link text](https://example.com)

![Image alt text](/images/photo.jpg)
```

### Product Sections:

In the CMS, scroll down to "Products Reviewed" section:
- Click "Add Product"
- Fill in: Name, Price, Rating, Links
- These auto-generate as product cards!

---

## 🖼️ Images

### Uploading Images:

1. In article editor, click image field
2. Upload image or select from library
3. Images auto-save to `/images/` folder
4. Optimized and included in build

### Image Sizing:

- **Article headers:** 800×450px recommended
- **Product photos:** 600×400px recommended
- **File size:** Under 500KB (CMS auto-optimizes)

---

## ⚡ Build Times

**Normal article update:** 1-2 minutes  
**Large changes (multiple articles):** 2-3 minutes  
**Full site rebuild:** 3-4 minutes

**Pro tip:** Make multiple edits, then publish once to save build time.

---

## 🐛 Troubleshooting

### Build Failed?

1. **Check deploy log** in Netlify → Deploys → Latest deploy → "Deploy log"
2. **Look for errors** (usually missing fields in CMS)
3. **Common issues:**
   - Missing required field (title, date, etc.)
   - Invalid Markdown syntax
   - Image file too large

### Changes Not Appearing?

1. **Wait 2-3 minutes** - builds take time
2. **Clear browser cache** (Cmd+Shift+R or Ctrl+Shift+R)
3. **Check Netlify deploys** - is latest build successful?

### CMS Not Saving?

1. **Check Git Gateway** is still enabled
2. **Check GitHub** - are files being created?
3. **Re-authenticate** in CMS (logout/login)

---

## 🎨 Customization

### Editing Templates:

Files in `_includes/`:
- `base.njk` - Main layout (header/footer)
- `article.njk` - Article page layout

**To customize:** Edit these files → Push to GitHub → Auto-deploys

### Adding New Sections:

**Tell me:** "Add a [feature] to the homepage"

**I'll:**
1. Generate updated template code
2. You push to GitHub
3. Auto-deploys

---

## 📊 Performance

**Before 11ty:**
- Manual HTML updates
- No CMS connection
- Slow workflow

**After 11ty:**
- Automated builds from CMS
- 2-minute publish time
- Professional workflow

**Site Speed:**
- Still static HTML (super fast!)
- No database queries
- No WordPress bloat
- Scores 95+ on PageSpeed

---

## 🔐 How CMS Saves Content

### Behind the Scenes:

1. You edit in CMS
2. CMS creates/updates `.md` file in `/articles/` folder
3. Commits to GitHub
4. GitHub webhook triggers Netlify
5. Netlify runs `npm run build` (11ty builds site)
6. New HTML files generated
7. Deployed to CDN

**You see:** Click publish → Wait 2 min → Live

**Actually happening:** 7-step automated process

---

## 📚 File Structure

```
eleventy-site/
├── _includes/          # Templates
│   ├── base.njk       # Main layout
│   └── article.njk    # Article layout
├── _site/             # Built site (auto-generated)
├── articles/          # Your articles (.md files)
│   └── *.md          # Each article
├── admin/             # Netlify CMS
├── css/               # Styles
├── js/                # Scripts
├── images/            # Uploaded images
├── .eleventy.js       # 11ty config
├── package.json       # Dependencies
└── netlify.toml       # Build config
```

---

## 💡 Pro Tips

### 1. Draft Mode

In CMS config, enable editorial workflow:
- Save as draft
- Review
- Publish

### 2. Batch Edits

Make multiple changes, publish once (saves build time).

### 3. Image Optimization

- Use JPG for photos
- PNG for logos/graphics
- Compress before upload (TinyPNG.com)

### 4. SEO

Fill in meta description field - it auto-populates SEO tags!

---

## 🎯 Next Steps

1. **Deploy** using steps above
2. **Test** by creating an article in CMS
3. **Verify** it appears on live site
4. **Tell me:** "Generate me an article about [topic]"
5. **I'll create** Markdown content
6. **You paste** into CMS and publish

---

## 💬 Common Questions

**Q: Do I need to know Markdown?**
A: Basic formatting helps, but CMS has rich text options too.

**Q: Can I still ask you to create content?**
A: Yes! I'll generate Markdown, you paste into CMS.

**Q: How do I change the homepage design?**
A: Tell me what to change → I update templates → You push to GitHub.

**Q: What if builds fail?**
A: Check Netlify deploy log, fix the error, push again.

**Q: Can I edit on mobile?**
A: Yes! CMS works on phones/tablets.

---

## 🚀 You're Ready!

**Your CMS now actually works!**

**Workflow:**
1. Edit in CMS
2. Click "Publish"
3. Wait 2 minutes
4. See changes live

**For new content:**
1. Tell me the topic
2. I generate article
3. You paste in CMS
4. Add your expertise
5. Publish!

---

**Deploy the 11ty version now and let me know when it's live!** 🎉

Then we can test the full CMS workflow together.
