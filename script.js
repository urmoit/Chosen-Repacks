document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.getElementById('yes-btn');
  const featuredGame = document.getElementById('game-section');

  yesBtn.addEventListener('click', function() {
    featuredGame.classList.add('unblur');
  });
}); 