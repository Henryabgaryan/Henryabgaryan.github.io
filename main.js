document.addEventListener('DOMContentLoaded', () => {
    // If there's a hash in the URL, remove it (avoid autoscroll jump)
    if (window.location.hash) {
      history.replaceState(null, '', ' ');
    }
    window.scrollTo(0, 0);
  
    // Intersection Observer for fade-in sections & updating active nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const options = { threshold: 0.6 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active class from all nav links
          navLinks.forEach((link) => link.classList.remove('active'));
          // Highlight the link that matches the current section
          const activeLink = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
  
          // Trigger the fade-in
          entry.target.classList.add('visible');
        }
      });
    }, options);
  
    sections.forEach((section) => observer.observe(section));
  
    // ================================================
    //      Hamburger menu icon toggle (mobile)
    // ================================================
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', () => {
      // Toggle "open" on the navbar (for showing/hiding the UL smoothly)
      navbar.classList.toggle('open');
      // Toggle the animation for the hamburger icon
      menuIcon.classList.toggle('change');
    });
  
    // ================================================
    //        Siri-Style Bubble with Drag Warp
    // ================================================
    const siriBubble = document.getElementById('siri-bubble');
    let isPulling = false;
    let centerX, centerY;
  
    function randomColor(alpha = 0.4) {
      const r = Math.floor(50 + Math.random() * 155);
      const g = Math.floor(50 + Math.random() * 155);
      const b = Math.floor(50 + Math.random() * 155);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  
    function updateBubbleGradient() {
      const color1 = randomColor();
      const color2 = randomColor();
      const color3 = randomColor();
      const color4 = randomColor();
      siriBubble.style.background = `
        radial-gradient(circle at 30% 30%, ${color1} 0%, transparent 60%),
        radial-gradient(circle at 70% 70%, ${color2} 0%, transparent 55%),
        radial-gradient(circle at 30% 70%, ${color3} 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, ${color4} 0%, transparent 65%)
      `;
    }
  
    // Gradually shift bubble colors every 8s
    setInterval(updateBubbleGradient, 8000);
    // Initialize once
    updateBubbleGradient();
  
    // Bubble pulling (mousedown / drag)
    siriBubble.addEventListener('mousedown', (e) => {
      isPulling = true;
      siriBubble.classList.add('dragging');
      const rect = siriBubble.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isPulling) return;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
  
      // Helper to clamp border radius
      function clamp(val) {
        return Math.max(25, Math.min(75, val));
      }
  
      let tl = 50 - (dx + dy) / 10;
      let tr = 50 + (dx - dy) / 10;
      let br = 50 + (dx + dy) / 10;
      let bl = 50 - (dx - dy) / 10;
  
      tl = clamp(tl);
      tr = clamp(tr);
      br = clamp(br);
      bl = clamp(bl);
  
      siriBubble.style.borderRadius = `${tl}% ${tr}% ${br}% ${bl}% / ${tl}% ${tr}% ${br}% ${bl}%`;
    });
  
    document.addEventListener('mouseup', () => {
      if (isPulling) {
        isPulling = false;
        siriBubble.classList.remove('dragging');
        siriBubble.style.borderRadius = '50%';
      }
    });
  
    // ================================================
    //                TYPED QUOTE ON HOME
    // ================================================
    const quoteEl = document.getElementById('quote');
    // Some quick motivational quotes:
    const quotes = [
      "Believe you can and you're halfway there.",
      "You are never too old to set another goal or to dream a new dream.",
      "Your limitation—it's only your imagination.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Keep your eyes on the stars and your feet on the ground.",
      "Dream big and dare to fail.",
      "Act as if what you do makes a difference. It does.",
      "If you want to lift yourself up, lift up someone else.",
    ];
    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Typewriter effect
    function typeWriter(text, index = 0, speed = 50) {
      if (index < text.length) {
        quoteEl.textContent += text.charAt(index);
        setTimeout(() => {
          typeWriter(text, index + 1, speed);
        }, speed);
      }
    }
  
    // Begin typing on load
    typeWriter(randomQuote);
  
    // ================================================
    //                AI NEWS FETCH
    // ================================================
    function fetchAINews() {
      // Using AllOrigins to bypass CORS
      const baseUrl = 'https://api.allorigins.win/raw?disableCache=true';
      // Searching Google News for AI articles
      const feedUrl = 'https://news.google.com/rss/search?q=artificial%20intelligence&hl=en-US&gl=US&ceid=US:en';
      const url = `${baseUrl}&url=${encodeURIComponent(feedUrl)}`;
  
      fetch(url, { cache: 'no-store' })
        .then((resp) => resp.text())
        .then((rawData) => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(rawData, 'application/xml');
          const items = xml.querySelectorAll('item');
          let newsListHTML = '';
  
          // Only show 3 items for brevity
          items.forEach((item, idx) => {
            if (idx < 3) {
              const title = item.querySelector('title')?.textContent || 'No Title';
              const link = item.querySelector('link')?.textContent || '#';
  
              // Attempt to find an image
              let imageUrl =
                item.querySelector('media\\:content')?.getAttribute('url') ||
                item.querySelector('media\\:thumbnail')?.getAttribute('url') ||
                null;
  
              // If still no image, check <content:encoded> or <description> for an <img> tag
              if (!imageUrl) {
                const contentEncoded = item.querySelector('content\\:encoded')?.textContent || '';
                const description = item.querySelector('description')?.textContent || '';
                const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
                let match = contentEncoded.match(imgRegex) || description.match(imgRegex);
                if (match && match[1]) {
                  imageUrl = match[1];
                }
              }
  
              let imageTag = '';
              if (imageUrl) {
                imageTag = `
                  <img
                    src="${imageUrl}"
                    alt="News Image"
                  />
                `;
              }
  
              newsListHTML += `
                <li style="display: flex; align-items: center; margin-bottom: 1rem;">
                  ${imageTag}
                  <a href="${link}" target="_blank" style="text-decoration: none;">${title}</a>
                </li>
              `;
            }
          });
  
          document.getElementById('ai-news-list').innerHTML = newsListHTML;
        })
        .catch((err) => console.error('Error fetching AI News:', err));
    }
  
    fetchAINews();
  });
  
