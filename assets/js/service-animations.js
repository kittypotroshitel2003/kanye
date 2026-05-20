(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.price-section, .price-row').forEach(function (el) {
      el.classList.add('revealed');
    });
    return;
  }

  function splitChars(el) {
    var text = el.textContent.trim();
    el.style.cssText += ';opacity:1!important;transform:none!important;transition:none!important;';
    var html = '';
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (c === ' ') {
        html += ' ';
      } else {
        html += '<span class="h-char"><span class="h-char__inner" style="transition-delay:' + (i * 42) + 'ms">' + c + '</span></span>';
      }
    }
    el.innerHTML = html;
  }

  // Page title — animate in immediately after load
  var pageTitle = document.querySelector('.page-title');
  if (pageTitle) {
    splitChars(pageTitle);
    requestAnimationFrame(function () {
      setTimeout(function () {
        pageTitle.querySelectorAll('.h-char__inner').forEach(function (ch) {
          ch.style.transform = 'translateY(0)';
        });
      }, 120);
    });
  }

  // Section titles — char split + reveal on scroll
  var titleObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.h-char__inner').forEach(function (ch) {
          ch.style.transform = 'translateY(0)';
        });
        titleObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.section-title, .sub-title').forEach(function (el) {
    splitChars(el);
    titleObs.observe(el);
  });

  // Price sections — fade + slide up, then stagger rows inside
  var sectionObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var section = entry.target;
        section.classList.add('revealed');
        section.querySelectorAll('.price-row').forEach(function (row, i) {
          row.style.setProperty('--row-delay', (i * 28) + 'ms');
          row.classList.add('revealed');
        });
        sectionObs.unobserve(section);
      }
    });
  }, { threshold: 0.04, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.price-section').forEach(function (section, i) {
    section.style.setProperty('--reveal-delay', (i === 0 ? '0ms' : '0ms'));
    sectionObs.observe(section);
  });
}());
