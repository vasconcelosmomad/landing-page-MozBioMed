
document.addEventListener('DOMContentLoaded', function() {
  // Inicialização dos ícones Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    console.error('Lucide não foi carregado corretamente');
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('main-header');
  const contentWrapper = document.getElementById('content-wrapper');
  const menuIcon = mobileMenuBtn?.querySelector('[data-lucide="align-right"]');
  const closeIcon = mobileMenuBtn?.querySelector('[data-lucide="x"]');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      // Alternar visibilidade dos ícones
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });

    // Fechar menu ao clicar nos links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        // Restaurar ícone de menu
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      });
    });
  }

  // Header scroll effect
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('shadow');
        header.classList.remove('py-4');
        header.classList.add('py-3');
      } else {
        header.classList.remove('shadow');
        header.classList.remove('py-3');
        header.classList.add('py-4');
      }
    });
  }

  // Adicionar efeito de hover nas cards
  const cards = document.querySelectorAll('.bg-white.p-6, .bg-white.p-8');
  if (cards.length > 0) {
    cards.forEach(card => {
      card.classList.add('hover-lift');
    });
  }

  // VR Stats Animation
  const vrStatsContainer = document.querySelector('.vr-stats-container');
  if (vrStatsContainer) {
    // 3D hover effect
    vrStatsContainer.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    vrStatsContainer.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
    
    // Create additional VR particles
    function createVRParticle() {
      const particle = document.createElement('div');
      const colors = ['bg-cyan-400', 'bg-purple-400', 'bg-blue-400'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.className = `absolute w-1 h-1 ${randomColor} rounded-full opacity-80 shadow-lg animate-bounce`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particle.style.filter = 'blur(0.5px)';
      
      vrStatsContainer.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 4000);
    }
    
    // Create particles periodically
    setInterval(createVRParticle, 3000);
  }

  // Team scroll functionality
  const teamScrollContainers = document.querySelectorAll('.team-scroll-container');
  
  teamScrollContainers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.style.cursor = 'grabbing';
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });
  });

  // Animação VR da História MozBioMed.AI - Efeitos interativos
  const storyContainer = document.querySelector('.mozbiomed-story-container');
  if (storyContainer) {
      // Efeito de hover 3D para realidade virtual
      storyContainer.addEventListener('mouseenter', function() {
          this.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(2deg) scale(1.02)';
          this.style.transition = 'transform 0.5s ease';
      });
      
      storyContainer.addEventListener('mouseleave', function() {
          this.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(5deg)';
          this.style.transition = 'transform 0.5s ease';
      });
      
      // Efeito de partículas VR flutuantes
      function createVRParticle() {
          const particle = document.createElement('div');
          const colors = ['bg-cyan-400', 'bg-blue-500', 'bg-purple-500'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          particle.className = `absolute w-1 h-1 ${randomColor} rounded-full opacity-80 shadow-lg`;
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.animation = 'float 5s ease-in-out infinite';
          particle.style.filter = 'blur(0.5px)';
          
          const container = storyContainer.querySelector('.vr-container');
          if (container) {
              container.appendChild(particle);
              
              // Remover partícula após animação
              setTimeout(() => {
                  if (particle.parentNode) {
                      particle.parentNode.removeChild(particle);
                  }
              }, 5000);
          }
      }
      
      // Criar partículas VR periodicamente
      setInterval(createVRParticle, 2000);
      
      // Efeito de rotação do DNA com VR
      const dnaElement = storyContainer.querySelector('.w-24.h-32');
      if (dnaElement) {
          let rotation = 0;
          setInterval(() => {
              rotation += 0.5;
              dnaElement.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
          }, 50);
      }
      
      // Efeito de profundidade VR
      const vrContainer = storyContainer.querySelector('.vr-container');
      if (vrContainer) {
          vrContainer.addEventListener('mousemove', function(e) {
              const rect = this.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              
              const rotateX = (y - centerY) / 20;
              const rotateY = (centerX - x) / 20;
              
              this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });
          
          vrContainer.addEventListener('mouseleave', function() {
              this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
          });
      }
  }

  // Adicionar animações ao scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  function checkVisibility() {
      animateElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;

          if (rect.top <= windowHeight * 0.8) {
              element.classList.add('active');
          }
      });
  }

  // Verificar visibilidade inicial e ao scroll
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();

  // Código para o botão de scroll
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  if (scrollTopBtn) {
    // Mostrar/ocultar botão baseado na posição de scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
      } else {
        scrollTopBtn.classList.add('hidden');
      }
    });

    // Ação de scroll ao topo
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // Função para scroll suave
  function scrollToSection(event, targetId) {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      history.replaceState(null, null, ' ');
    }
  }

  // Adiciona a função ao escopo global (window)
  window.scrollToSection = scrollToSection;

  // Scroll suave para todos os links internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  if (internalLinks.length > 0) {
    internalLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const id = href.slice(1);
          const target = document.getElementById(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth'
            });
            history.replaceState(null, null, ' ');
          }
        }
      });
    });
  }

  // VR Animations for Social Impact Section
  const socialImpactSection = document.getElementById('social-impact');
  if (socialImpactSection) {
    // Add tilt effect to VR cards
    const vrCards = socialImpactSection.querySelectorAll('.vr-card, .vr-project-card');
    vrCards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });
      
      card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      });
    });
    
    // Add particle generation on mouse move
    let particleCount = 0;
    
    socialImpactSection.addEventListener('mousemove', function(e) {
      if (particleCount < 3) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        socialImpactSection.appendChild(particle);
        particleCount++;
        
        setTimeout(() => {
          particle.remove();
          particleCount--;
        }, 3000);
      }
    });

    // Animate stats numbers on scroll
    const statItems = socialImpactSection.querySelectorAll('.stat-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const neonText = entry.target.querySelector('.neon-text');
          if (neonText) {
            neonText.style.animation = 'neonPulse 1s ease-in-out infinite alternate';
          }
        }
      });
    }, { threshold: 0.5 });

    statItems.forEach(item => observer.observe(item));
  }
});


