/* Responsive Navbar with Hamburger Menu — Day 21 */
(function () {
  'use strict';

  // ---- Configuration ----
  const MOBILE_QUERY = '(max-width: 768px)';
  const PANEL_TRANSITION_MS = 280;

  // ---- DOM references ----
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  // ---- State ----
  let isOpen = false;
  let isMobile = window.matchMedia(MOBILE_QUERY).matches;

  // ---- Helpers ----
  function setExpanded(expanded) {
    navToggle.setAttribute('aria-expanded', String(expanded));
    navToggle.setAttribute(
      'aria-label',
      expanded ? 'Close navigation menu' : 'Open navigation menu'
    );
  }

  function lockScroll(locked) {
    document.body.style.overflow = locked ? 'hidden' : '';
  }

  function openMenu() {
    if (isOpen || !isMobile) {
      return;
    }
    isOpen = true;
    navToggle.classList.add('is-open');
    primaryNav.classList.add('is-open');
    navBackdrop.classList.add('is-open');
    navBackdrop.hidden = false;
    primaryNav.removeAttribute('aria-hidden');
    primaryNav.removeAttribute('inert');
    setExpanded(true);
    lockScroll(true);

    // Move focus into the panel for keyboard users.
    window.setTimeout(function () {
      const firstLink = primaryNav.querySelector('.nav-link');
      if (firstLink) {
        firstLink.focus();
      }
    }, 50);
  }

  function closeMenu(returnFocus) {
    if (!isOpen) {
      return;
    }
    isOpen = false;
    navToggle.classList.remove('is-open');
    primaryNav.classList.remove('is-open');
    navBackdrop.classList.remove('is-open');
    setExpanded(false);
    lockScroll(false);

    if (isMobile) {
      primaryNav.setAttribute('aria-hidden', 'true');
      primaryNav.setAttribute('inert', '');
    }

    window.setTimeout(function () {
      if (!isOpen) {
        navBackdrop.hidden = true;
      }
    }, PANEL_TRANSITION_MS);

    if (returnFocus !== false) {
      window.setTimeout(function () {
        if (document.contains(navToggle)) {
          navToggle.focus();
        }
      }, PANEL_TRANSITION_MS);
    }
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function setActiveLink(link) {
    navLinks.forEach(function (item) {
      item.classList.remove('is-active');
      item.removeAttribute('aria-current');
    });
    if (link) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  }

  function closeOnResize() {
    const wasMobile = isMobile;
    isMobile = window.matchMedia(MOBILE_QUERY).matches;

    if (!isMobile) {
      // Desktop: ensure panel is visible and not trapped.
      closeMenu(false);
      primaryNav.classList.remove('is-open');
      navBackdrop.classList.remove('is-open');
      navBackdrop.hidden = true;
      primaryNav.removeAttribute('aria-hidden');
      primaryNav.removeAttribute('inert');
      navToggle.classList.remove('is-open');
      setExpanded(false);
      lockScroll(false);
    } else if (!wasMobile) {
      // Just became mobile: reset to closed state.
      primaryNav.classList.remove('is-open');
      navBackdrop.classList.remove('is-open');
      navBackdrop.hidden = true;
      primaryNav.setAttribute('aria-hidden', 'true');
      primaryNav.setAttribute('inert', '');
      navToggle.classList.remove('is-open');
      setExpanded(false);
      lockScroll(false);
      isOpen = false;
    }
  }

  // ---- Event listeners ----
  if (navToggle) {
    navToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMenu();
    });
  }

  // Close when a navigation link is selected.
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setActiveLink(link);
      if (isMobile && isOpen) {
        closeMenu(false);
      }
    });
  });

  // Close when clicking outside the panel (includes backdrop).
  document.addEventListener('click', function (event) {
    if (!isOpen) {
      return;
    }
    const target = event.target;
    if (primaryNav.contains(target) || (navToggle && navToggle.contains(target))) {
      return;
    }
    closeMenu();
  });

  // Close on Escape.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      closeMenu();
    }
  });

  // Focus trap inside the mobile panel.
  primaryNav.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab' || !isOpen || !isMobile) {
      return;
    }
    const focusable = Array.from(
      primaryNav.querySelectorAll('a[href], button:not([disabled])')
    );
    if (focusable.length === 0) {
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Keep state in sync across breakpoints.
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', closeOnResize);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(closeOnResize);
  }
  window.addEventListener('resize', closeOnResize);

  // Scroll spy for active link highlighting.
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const link = navLinks.find(function (item) {
              return item.getAttribute('href') === '#' + id;
            });
            if (link) {
              setActiveLink(link);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ---- Initial state ----
  if (isMobile) {
    primaryNav.setAttribute('aria-hidden', 'true');
    primaryNav.setAttribute('inert', '');
    navBackdrop.hidden = true;
  } else {
    primaryNav.removeAttribute('aria-hidden');
    primaryNav.removeAttribute('inert');
    navBackdrop.hidden = true;
  }
  setExpanded(false);
  closeOnResize();
})();