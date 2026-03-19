# DEPLOY INSTRUCTIONS - Read This First!

## ✅ This Build is Complete and Ready

All files are included and tested. No hidden files, no missing dependencies.

---

## 🚀 How to Deploy (5 Minutes)

### Step 1: Create New Branch in GitHub (2 min)

1. **Go to your GitHub repository**
2. **Click** the branch dropdown (says "main")
3. **Type:** `eleventy-cms`
4. **Click** "Create branch: eleventy-cms"
5. **Make sure you're on the new branch** (dropdown should say "eleventy-cms")

---

### Step 2: Delete All Files in This Branch (1 min)

Since you're in the `eleventy-cms` branch (not main), you can safely delete everything:

1. **Select all files** (checkbox at top)
2. **Click** trash icon
3. **Commit** deletion

---

### Step 3: Upload All Files from eleventy-final (2 min)

1. **Still in `eleventy-cms` branch**
2. **Click** "Add file" → "Upload files"
3. **Drag ALL contents** from the `eleventy-final` folder
   - ✅ Make sure you see: package.json, netlify.toml, eleventy.config.js
   - ✅ Plus all folders: _includes, articles, admin, css, js, images
4. **Commit message:** "Deploy 11ty CMS"
5. **Click** "Commit changes"

---

### Step 4: Point Netlify to New Branch (1 min)

1. **Go to Netlify** → Your site → Site settings
2. **Build & deploy** → Continuous deployment
3. **Edit settings** → **Branch:** Change from `main` to `eleventy-cms`
4. **Save**

---

### Step 5: Trigger Deploy

1. **Deploys tab** → "Trigger deploy" → "Deploy site"
2. **Wait 2-3 minutes** for build
3. **Build should succeed!** ✅

---

## ✅ What's Included:

- ✅ package.json (no hidden dot)
- ✅ netlify.toml (fixed, no plugin)
- ✅ eleventy.config.js (no hidden dot)
- ✅ All templates (_includes/base.njk, article.njk)
- ✅ Homepage (index.njk)
- ✅ Sample article (articles/wireless-mic-systems.md)
- ✅ CMS configuration (admin/ folder)
- ✅ All CSS, JS, images
- ✅ robots.txt

**No hidden files. No missing dependencies. Everything needed to build.**

---

## 🎯 After Successful Deploy:

### Test the CMS:

1. **Go to:** `smallchurchtech.com/admin`
2. **Log in** with your Netlify Identity
3. **Click** "Articles"
4. **Edit** the wireless mic article
5. **Click** "Publish"
6. **Wait 2 minutes** - Netlify rebuilds automatically
7. **Refresh homepage** - changes appear!

**Your CMS now works!** 🎉

---

## 📝 Your Workflow Going Forward:

### Creating Content:

**Option 1: Write in CMS**
- Log into /admin/
- Create new article
- Fill in form
- Publish
- Auto-deploys in 2 minutes

**Option 2: I Generate, You Edit**
- Tell me: "Generate article about streaming cameras"
- I create Markdown content
- You paste into CMS
- Add your expertise
- Publish

---

## 🐛 If Build Fails:

1. **Check deploy log** in Netlify
2. **Common issues:**
   - Missing file (check all files uploaded)
   - Wrong branch (should be `eleventy-cms`)
   - Build settings wrong (command: `npm run build`, publish: `_site`)

---

## 💬 Once Live, Tell Me:

> "CMS is working! Generate me an article about [topic]"

I'll create the content, you paste it in CMS, add your expertise, and publish!

---

## 🎓 File Structure:

```
eleventy-final/
├── package.json           ← npm dependencies
├── netlify.toml          ← build configuration
├── eleventy.config.js    ← 11ty settings
├── index.njk             ← homepage template
├── robots.txt            ← SEO file
├── _includes/            ← page templates
│   ├── base.njk         ← main layout
│   └── article.njk      ← article layout
├── articles/             ← your content (Markdown)
│   ├── articles.json    ← article config
│   └── *.md            ← each article
├── admin/                ← Netlify CMS
│   ├── config.yml      ← CMS config
│   └── index.html      ← CMS interface
├── css/                  ← styles
├── js/                   ← scripts
└── images/               ← uploaded images
```

---

## ✅ Checklist Before Deploy:

- [ ] Created `eleventy-cms` branch in GitHub
- [ ] Deleted all files in that branch
- [ ] Uploaded ALL contents from `eleventy-final`
- [ ] Verified package.json is visible in GitHub
- [ ] Pointed Netlify to `eleventy-cms` branch
- [ ] Triggered deploy
- [ ] Build succeeded
- [ ] Site loads correctly
- [ ] CMS works at /admin/
- [ ] Test publish → changes appear

---

**Everything is ready. Just follow the 5 steps above and you'll be live!** 🚀
