const AI_TOOLS= [
    {
      "name": "Blog Title",
      "icon": "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
      "description": "An AI tool that generates blog title depends on your blog information",
      "category": "blog",
      "slug": "blog-title",
      "aiPrompt": "Generate a 5 blog title based on the provided blog information \n Blog Information: {blogInfo}",
      "form": [
        {
          "label": "Enter Blog Information",
          "field": "input",
          "name": "blogInfo",
          "required": true
        }
      ]
    },
    {
      "name": "Blog Content",
      "icon": "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
      "description": "An AI tool that generates catchy and viral-worthy blog content in your chosen language.",
      "category": "blog",
      "slug": "blog-content",
      "aiPrompt": "Generate blog content based on the below title and keywords \n BLOG title: {blogTitle} \n Keywords: {keywords}",
      "form": [
        {
          "label": "Enter Blog Title",
          "field": "input",
          "name": "blogTitle",
          "required": true
        },
        {
          "label": "Enter Keywords",
          "field": "input",
          "name": "keywords",
          "required": true
        }
      ]
    },
    {
      "name": "Blog Topic Ideas",
      "icon": "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
      "description": "An AI tool that generates catchy and viral-worthy blog topic ideas in your chosen language.",
      "category": "blog",
      "slug": "blog-topic-ideas",
      "aiPrompt": "Generate blog topic ideas based on the provided keywords \n Keywords: {keywords}",
      "form": [
        {
          "label": "Enter Keywords",
          "field": "input",
          "name": "keywords",
          "required": true
        }
      ]
    },
    {
      "name": "Youtube SEO Title",
      "icon": "https://cdn-icons-png.flaticon.com/128/402/402075.png",
      "description": "An AI tool that generates catchy and viral-worthy YouTube SEO titles in your chosen language.",
      "category": "youtube",
      "slug": "youtube-seo-title",
      "aiPrompt": "Generate a YouTube SEO title based on the provided keywords \n Keywords: {keywords}",
      "form": [
        {
          "label": "Enter Keywords",
          "field": "input",
          "name": "keywords",
          "required": true
        }
      ]
    },
    {
      "name": "Youtube Description",
      "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
      "description": "An AI tool that generates YouTube video descriptions in your chosen language.",
      "category": "youtube",
      "slug": "youtube-description",
      "aiPrompt": "Generate a YouTube video description based on the provided video title and keywords \n Video Title: {videoTitle} \n Keywords: {keywords}",
      "form": [
        {
          "label": "Enter Video Title",
          "field": "input",
          "name": "videoTitle",
          "required": true
        },
        {
          "label": "Enter Keywords",
          "field": "input",
          "name": "keywords",
          "required": true
        }
      ]
    },
    {
      "name": "Youtube Tags",
      "icon": "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
      "description": "An AI tool that generates YouTube tags based on the provided keywords.",
      "category": "youtube",
      "slug": "youtube-tags",
      "aiPrompt": "Generate comma separated YouTube tags based on the below youtube title \n Keywords: {title}",
      "form": [
        {
          "label": "Enter youtube title",
          "field": "input",
          "name": "title",
          "required": true
        }
      ]
    },
    {
      "name": "Rewrite Article (Plagiarism Free)",
      "icon": "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
      "description": "Use this tool to rewrite existing articles or blog posts to bypass AI detectors and make them plagiarism-free.",
      "category": "writing",
      "slug": "rewrite-article-plagiarism-free",
      "aiPrompt": "Rewrite the provided article to make it plagiarism-free, make sure it human written text not AI generated \n Article Text: {articleText}",
      "form": [
        {
          "label": "Enter Article Text",
          "field": "textarea",
          "name": "articleText",
          "required": true
        }
      ]
    },
    {
      "name": "Text Improver",
      "icon": "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
      "description": "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
      "category": "writing",
      "slug": "text-improver",
      "aiPrompt": "Improve the provided text by refining it and eliminating errors and redundancies \n Text: {text}",
      "form": [
        {
          "label": "Enter Text",
          "field": "textarea",
          "name": "text",
          "required": true
        }
      ]
    },
    {
      "name": "Add Emojis to Text",
      "icon": "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
      "description": "An AI tool that adds emojis to your text to make it more engaging.",
      "category": "social-media",
      "slug": "add-emojis-to-text",
      "aiPrompt": "Add appropriate emojis to the provided text \n Text: {text}",
      "form": [
        {
          "label": "Enter Text",
          "field": "textarea",
          "name": "text",
          "required": true
        }
      ]
    },
    {
      "name": "Instagram Post Generator",
      "icon": "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
      "description": "An AI tool that generates catchy Instagram posts in your chosen language.",
      "category": "social-media",
      "slug": "instagram-post-generator",
      "aiPrompt": "Generate an Instagram post based on the provided topic and keywords \n Post Topic: {postTopic} \n Keywords: {keywords}",
      "form": [
        {
          "label": "Enter Post Topic",
          "field": "input",
          "name": "postTopic",
          "required": true
        },
        {
          "label": "Enter Keywords",
          "field": "input",
          "name": "keywords",
          "required": true
        }
      ]
    },
    {
      "name": "Instagram Hash Tag Generator",
      "icon": "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
      "description": "An AI tool that generates Instagram hashtags based on a given keyword",
      "category": "social-media",
      "slug": "instagram-hash-tag-generator",
      "aiPrompt": "Generate 15 Instagram hashtags based on the provided keywords \n Keywords: {keywords}",
      "form": [
        {
          "label": "Enter Keywords for your Instagram hashtag",
          "field": "input",
          "name": "keywords",
          "required": true
        }
      ]
    },
    {
      "name": "Instagram Post/Reel Idea",
      "icon": "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
      "description": "An AI tool that generates new and trending Instagram post or reel ideas based on your niche",
      "category": "social-media",
      "slug": "instagram-post-reel-idea",
      "aiPrompt": "Generate Instagram post or reel ideas based on the provided niche and keywords \n Niche: {niche} \n Keywords: {keywords}",
      "form": [
        {
          "label": "Enter Niche",
          "field": "input",
          "name": "niche",
          "required": true
        },
        {
          "label": "Enter Keywords",
          "field": "input",
          "name": "keywords",
          "required": true
        }
      ]
    },
    {
      "name": "English Grammar Check",
      "icon": "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
      "description": "AI Model to correct your English grammar by providing the text",
      "category": "writing",
      "slug": "english-grammar-check",
      "aiPrompt": "Correct the grammar of the provided English text \n Text: {text}",
      "form": [
        {
          "label": "Enter Text",
          "field": "textarea",
          "name": "text",
          "required": true
        }
      ]
    },
    {
      "name": "Write Code",
      "icon": "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
      "description": "AI Model to generate programming code in any language",
      "category": "coding",
      "slug": "write-code",
      "aiPrompt": "Generate programming code based on the provided description should produce response as markdowm \n Code Description: {codeDescription}",
      "form": [
        {
          "label": "Enter Code Description",
          "field": "textarea",
          "name": "codeDescription",
          "required": true
        }
      ]
    },
    {
      "name": "Explain Code",
      "icon": "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
      "description": "AI Model to explain programming code in any language",
      "category": "coding",
      "slug": "explain-code",
      "aiPrompt": "Explain the provided programming code \n Code: {code}",
      "form": [
        {
          "label": "Enter Code",
          "field": "textarea",
          "name": "code",
          "required": true
        }
      ]
    },
    {
      "name": "Code Bug Detector",
      "icon": "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
      "description": "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
      "category": "coding",
      "slug": "code-bug-detector",
      "aiPrompt": "Detect and fix bugs in the provided code snippet \n Code: {code}",
      "form": [
        {
          "label": "Enter Code",
          "field": "textarea",
          "name": "code",
          "required": true
        }
      ]
    },
    {
      "name": "Tagline Generator",
      "icon": "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
      "description": "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
      "category": "marketing",
      "slug": "tagline-generator",
      "aiPrompt": "Generate a tagline based on the provided brand information \n Brand Information: {brandInfo}",
      "form": [
        {
          "label": "Enter Brand Information",
          "field": "textarea",
          "name": "brandInfo",
          "required": true
        }
      ]
    },
    {
      "name": "Product Description",
      "icon": "https://cdn-icons-png.flaticon.com/128/679/679922.png",
      "description": "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
      "category": "e-commerce",
      "slug": "product-description",
      "aiPrompt": "Generate a product description based on the provided product information \n Product name: {productName} \n Product Features: {productFeatures}",
      "form": [
        {
          "label": "Enter Product Name",
          "field": "input",
          "name": "productName",
          "required": true
        },
        {
          "label": "Enter Product Features",
          "field": "textarea",
          "name": "productFeatures",
          "required": true
        }
      ]
    }
  ]



  export default AI_TOOLS;