document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      swingBat();
    }
  });

  document.addEventListener('click', function () {
    swingBat();
  });

  function swingBat() {
    const bat = document.querySelector('#bat');
  
    // Remove old animations (if any) before re-adding
    bat.removeAttribute('animation__swing_rot');
    bat.removeAttribute('animation__swing_pos');
    bat.removeAttribute('animation__return_rot');
    bat.removeAttribute('animation__return_pos');
  
    // Animate bat rotation like a swing
    bat.setAttribute('animation__swing_rot', {
      property: 'rotation',
      to: '90 0 20',
      dur: 100,
      easing: 'easeOutQuad',
      loop: false
    });
    
    bat.setAttribute('animation__swing_pos', {
      property: 'position',
      to: '-0.2 0.86000000000000003 -1.5',
      dur: 100,
      easing: 'easeOutQuad',
      loop: false
    });
    
  
    // Swing back after short delay
    setTimeout(() => {
      bat.setAttribute('animation__return_rot', {
        property: 'rotation',
        to: '30 -120 10',
        dur: 150,
        easing: 'easeInQuad',
        loop: false
      });
    
      bat.setAttribute('animation__return_pos', {
        property: 'position',
        to: '-0.8 0.86000000000000003 -1.2',
        dur: 150,
        easing: 'easeInQuad',
        loop: false
      });
    }, 120);
  }    
  