// ---------------------------------------------------------
// Reviews.jsx - Movie News & Articles
// Member 2: Mary Jain Joshy - News Content & UI
// ---------------------------------------------------------

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Reviews() {
  const [sortBy, setSortBy] = useState("date");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsArticles = [
    {
      id: 1,
      title: "Christopher Nolan's Next Project: A Return to Sci-Fi",
      category: "Industry News",
      date: "2024-12-05",
      author: "Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=250&fit=crop",
      excerpt: "The acclaimed director is reportedly developing a new science fiction epic that explores the boundaries of human consciousness and artificial intelligence.",
      content: "Following the massive success of Oppenheimer, Christopher Nolan is set to return to the genre that made him a household name. Sources close to the production reveal that the project will blend practical effects with cutting-edge technology to create immersive sci-fi experiences. The film is rumored to explore themes of consciousness transfer, artificial intelligence, and the nature of reality itself. Industry insiders suggest that Nolan has been working on the script for over two years, drawing inspiration from classic sci-fi literature and recent advances in neuroscience. The project is expected to feature Nolan's signature non-linear storytelling and mind-bending plot twists. Warner Bros. has reportedly allocated a substantial budget for the film, with production tentatively scheduled to begin in late 2025. The cast is being kept under wraps, though rumors suggest Nolan is reaching out to both familiar collaborators and fresh faces for this ambitious undertaking."
    },
    {
      id: 2,
      title: "Marvel Studios Announces Phase 6 Lineup",
      category: "Box Office",
      date: "2024-12-03",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=250&fit=crop",
      excerpt: "The MCU unveils its roadmap through 2027, including new Avengers films and surprising character debuts.",
      content: "Marvel Studios president Kevin Feige revealed an ambitious slate of films and Disney+ series that will build toward two new Avengers movies. The announcement includes the long-awaited Fantastic Four reboot and the introduction of the X-Men into the MCU. Phase 6 will culminate with Avengers: The Kang Dynasty and Avengers: Secret Wars, both massive crossover events featuring characters from across the multiverse. The Fantastic Four film will introduce Marvel's First Family to the MCU, with a 1960s period setting that pays homage to the team's origins. Additionally, Feige confirmed that mutants will begin appearing in MCU projects, with the X-Men slowly being integrated into the larger narrative. New Disney+ series will explore lesser-known characters and provide crucial setup for the theatrical releases. The phase also includes sequels to popular franchises like Shang-Chi, Eternals, and Blade, along with several surprise announcements that sent fans into a frenzy."
    },
    {
      id: 3,
      title: "Dune: Part Three Officially Greenlit by Warner Bros",
      category: "Production Update",
      date: "2024-12-01",
      author: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=250&fit=crop",
      excerpt: "Denis Villeneuve will complete his adaptation of Frank Herbert's epic trilogy with a third installment focusing on Dune Messiah.",
      content: "Warner Bros has officially greenlit Dune: Part Three, with Denis Villeneuve returning to direct. The film will adapt the second novel in Herbert's series, exploring the consequences of Paul Atreides' rise to power. Production is expected to begin in late 2025. Villeneuve has stated that Dune Messiah presents a more intimate and philosophical story compared to the epic scale of the first two films. The director plans to explore the darker themes of Paul's prescience and the burden of leadership, showing how absolute power corrupts even the most well-intentioned heroes. Timothée Chalamet and Zendaya are confirmed to reprise their roles, with the story picking up twelve years after the events of Dune: Part Two. The film will also introduce new characters crucial to the Messiah storyline. Villeneuve has emphasized his commitment to practical effects and real desert locations, continuing the visual authenticity that made the first two films so immersive."
    },
    {
      id: 4,
      title: "Streaming Wars Heat Up: New Players Enter the Market",
      category: "Streaming",
      date: "2024-11-28",
      author: "David Park",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=250&fit=crop",
      excerpt: "The streaming landscape continues to evolve as traditional studios launch competing platforms with exclusive content.",
      content: "The competition for subscribers has intensified as major studios invest billions in original content. Industry analysts predict a consolidation phase as smaller platforms struggle to compete with entertainment giants. Netflix, Disney+, HBO Max, Amazon Prime Video, and Apple TV+ continue to dominate the market, but newer entrants are finding it increasingly difficult to gain traction. Password-sharing crackdowns and price increases have led to subscriber churn, forcing platforms to focus on quality over quantity. The trend toward bundling services is growing, with companies offering package deals to retain customers. Original content remains the key differentiator, with streamers competing for top-tier talent and intellectual property. Some platforms are exploring ad-supported tiers to attract budget-conscious viewers, while others double down on premium experiences. Industry experts predict that by 2026, we'll see significant mergers and acquisitions as the market consolidates around 3-4 major players."
    },
    {
      id: 5,
      title: "AI in Filmmaking: Revolution or Threat?",
      category: "Technology",
      date: "2024-11-25",
      author: "Lisa Thompson",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop",
      excerpt: "Hollywood grapples with artificial intelligence as filmmakers explore its creative potential while unions raise concerns.",
      content: "The film industry faces a pivotal moment as AI technology advances. While some directors embrace AI for visual effects and scriptwriting assistance, actors and writers guilds negotiate protections against unauthorized use of their likenesses and work. The recent SAG-AFTRA and WGA strikes highlighted concerns about AI-generated performances and scripts. Studios argue that AI can reduce costs and enable creative possibilities previously impossible, such as de-aging actors or creating entirely synthetic performances. However, creatives fear job displacement and loss of artistic control. Some filmmakers are experimenting with AI as a collaborative tool, using it to generate concept art, plan complex camera movements, or create preliminary dialogue drafts that writers then refine. The technology has also enabled innovations in dubbing and language localization. Looking ahead, the industry must balance innovation with protection of human artistry, establishing clear guidelines for AI use that respect both creative rights and technological progress."
    },
    {
      id: 6,
      title: "Cannes Film Festival 2025: Early Predictions and Contenders",
      category: "Film Festivals",
      date: "2024-11-22",
      author: "Pierre Dubois",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=250&fit=crop",
      excerpt: "Awards season kicks off early with speculation about which films will compete for the prestigious Palme d'Or.",
      content: "Film critics and industry insiders are already buzzing about potential Cannes selections. Several high-profile directors are rumored to have films ready for the festival, including works from established auteurs and exciting new voices in cinema. Paul Thomas Anderson, Yorgos Lanthimos, and Hirokazu Kore-eda are all said to be finishing projects that could premiere at Cannes 2025. The festival has traditionally been a launching pad for Oscar campaigns and career-defining moments for filmmakers. This year's competition is expected to be particularly strong, with a mix of American, European, and Asian cinema. Cannes president Thierry Frémaux has hinted at several surprise entries that could shake up the awards race. The festival will also celebrate its 78th edition with special retrospectives and tributes to cinema legends. Industry experts are watching closely to see which films emerge as frontrunners for the Palme d'Or and other major prizes."
    },
    {
      id: 7,
      title: "The Resurgence of Horror: Why the Genre is Dominating",
      category: "Genre Analysis",
      date: "2024-11-20",
      author: "Amanda Foster",
      image: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=400&h=250&fit=crop",
      excerpt: "Horror films continue to break box office records and receive critical acclaim, marking a golden age for the genre.",
      content: "From A24's atmospheric thrillers to Blumhouse's crowd-pleasers, horror cinema is experiencing unprecedented success. Filmmakers are using the genre to explore social issues, resulting in both commercial hits and awards recognition. Films like Get Out, Hereditary, and Midsommar have elevated horror from B-movie status to prestige cinema. The success of franchises like The Conjuring Universe and Halloween proves that audiences still crave traditional scares, while innovative directors push boundaries with films that blur genre lines. Horror has become a vehicle for discussing racism, grief, trauma, and social anxiety in ways that resonate with modern audiences. The relatively low budgets required for horror films make them attractive to studios, allowing for creative risk-taking. Streaming platforms have also embraced horror content, producing original films and series that reach global audiences. As the genre continues to evolve, filmmakers are finding new ways to terrify and provoke thought simultaneously."
    },
    {
      id: 8,
      title: "IMAX Technology: The Future of Movie-Going Experience",
      category: "Technology",
      date: "2024-11-18",
      author: "Robert Kim",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop",
      excerpt: "IMAX unveils next-generation technology promising even more immersive theatrical experiences.",
      content: "IMAX Corporation announced breakthrough innovations in projection and sound systems. The new technology will debut in select theaters next year, offering enhanced image quality and three-dimensional audio that directors say transforms how stories are told. The upgraded IMAX GT Laser system delivers unprecedented brightness and contrast, with a color gamut that far exceeds standard digital projection. The new 12-channel sound system creates a truly immersive audio environment, allowing sound designers to place effects with pinpoint accuracy throughout the theater. IMAX has also developed new camera systems that are lighter and more versatile than previous generations, making it easier for filmmakers to shoot in the IMAX format. Directors like Christopher Nolan, Denis Villeneuve, and James Cameron have long championed IMAX as the ultimate theatrical experience. The company is also expanding globally, with hundreds of new screens planned for Asia, Europe, and Latin America. As streaming threatens traditional cinema, IMAX represents the premium experience that can't be replicated at home."
    },
    {
      id: 9,
      title: "Avatar: The Way of Water Surpasses $2 Billion Milestone",
      category: "Box Office",
      date: "2024-11-15",
      author: "Jessica Martinez",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop",
      excerpt: "James Cameron's sequel continues its historic run, cementing its place among the highest-grossing films of all time.",
      content: "Despite initial concerns about its lengthy runtime, Avatar: The Way of Water has proven audiences still crave epic theatrical experiences. The film's success has greenlit three more sequels, with Cameron planning to complete the series by 2031. The sequel's achievement is particularly impressive given the 13-year gap since the original film and the dramatically changed theatrical landscape. The Way of Water showcased groundbreaking underwater motion capture technology and stunning visual effects that pushed the boundaries of what's possible in cinema. Its success in China, where it became the highest-grossing foreign film ever, demonstrates the franchise's global appeal. Cameron's meticulous attention to detail and commitment to practical effects combined with cutting-edge CGI created a visual spectacle that justified the premium theater experience. Avatar 3 is already in post-production, with release scheduled for December 2025. The remaining sequels will explore new regions of Pandora and introduce additional Na'vi clans, expanding the rich mythology Cameron has created."
    },
    {
      id: 10,
      title: "Independent Cinema Renaissance: A24 and Neon Lead the Charge",
      category: "Industry News",
      date: "2024-11-12",
      author: "Thomas Anderson",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=250&fit=crop",
      excerpt: "Boutique distributors are changing the industry landscape by championing bold, original filmmaking.",
      content: "A24 and Neon continue to disrupt Hollywood with their curator approach to film distribution. By focusing on distinctive voices and artistic vision, these companies have built devoted audiences and achieved both critical and commercial success with modest budgets. A24's Everything Everywhere All at Once swept the Oscars, proving that independent films can compete with studio blockbusters. Their strategy of supporting auteur filmmakers and unconventional stories has resonated with audiences hungry for originality. Neon's success with Parasite, which became the first foreign-language film to win Best Picture, demonstrated the appetite for international cinema. These distributors have mastered the art of grassroots marketing, building buzz through film festivals, social media engagement, and strategic platform releases. They're also willing to take risks on challenging material that major studios might consider too niche. The success of independent cinema has forced major studios to reconsider their strategies, with some launching their own specialty divisions to compete for prestigious projects and awards recognition."
    }
  ];

  // Sort news articles based on selected option
  const sortedArticles = [...newsArticles].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date) - new Date(a.date);
      case "category":
        return a.category.localeCompare(b.category);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <motion.div
      className="reviews-page news-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <motion.div 
        className="news-hero-banner"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="news-hero-content">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="news-hero-title">
              <i className="fas fa-newspaper me-3"></i>
              Movie News & Articles
            </h1>
            <p className="news-hero-subtitle">
              Stay updated with the latest news, insights, and stories from the world of cinema
            </p>
          </motion.div>
          <motion.div 
            className="news-hero-image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=600&h=400&fit=crop" 
              alt="Cinema News"
            />
            <div className="hero-image-overlay">
              <span className="hero-badge">
                <i className="fas fa-fire me-2"></i>Latest Updates
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Sort Controls */}
      <div className="filters-section mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <label htmlFor="sort-select" className="form-label">
              <i className="fas fa-sort me-2"></i>Sort Articles By
            </label>
            <select
              id="sort-select"
              className="form-select filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort articles"
            >
              <option value="date">Newest First</option>
              <option value="category">By Category</option>
              <option value="title">By Title (A-Z)</option>
            </select>
          </div>
          <div className="col-md-6 text-end">
            <div className="article-count-badge">
              <i className="fas fa-file-alt me-2"></i>
              {newsArticles.length} Articles Available
            </div>
          </div>
        </div>
      </div>

      {/* News Articles Grid */}
      <div className="news-grid">
        {sortedArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className="news-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="news-image-container">
              <img 
                src={article.image} 
                alt={article.title}
                className="news-image"
              />
              <span className="news-category-badge">{article.category}</span>
            </div>
            
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              
              <div className="news-meta">
                <span className="news-author">
                  <i className="fas fa-user-circle me-2"></i>
                  {article.author}
                </span>
                <span className="news-date">
                  <i className="fas fa-calendar me-2"></i>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <p className="news-excerpt">{article.excerpt}</p>
              
              <button 
                className="btn-read-more"
                onClick={() => setSelectedArticle(article)}
              >
                Read Full Article
                <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="article-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="article-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="modal-image-container">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="modal-image"
                />
                <span className="modal-category-badge">{selectedArticle.category}</span>
              </div>

              <div className="modal-body">
                <h2 className="modal-title">{selectedArticle.title}</h2>
                
                <div className="modal-meta">
                  <span className="modal-author">
                    <i className="fas fa-user-circle me-2"></i>
                    {selectedArticle.author}
                  </span>
                  <span className="modal-date">
                    <i className="fas fa-calendar me-2"></i>
                    {new Date(selectedArticle.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <p className="modal-content-text">{selectedArticle.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Total Count */}
      <p className="text-center text-grey mt-5">
        Total Articles: {newsArticles.length}
      </p>
    </motion.div>
  );
}

export default Reviews;
