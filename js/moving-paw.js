// Moving Paw Button Script
document.addEventListener('DOMContentLoaded', function() {
  const pawButton = document.getElementById('pawButton');
  const mouthButton = document.getElementById('mouthButton');
  const surpriseMessage = document.getElementById('surpriseMessage');
  const closeButton = document.getElementById('closeButton');
  
  // Define viewport width
  const viewportWidth = window.innerWidth;
  const pawWidth = 100; // Width of the paw image
  
  // Initial position (off-screen to the left)
  let currentPosition = -pawWidth;
  let targetPosition = 50; // Initial target (move to 50px from left)
  let isMovingRight = true;
  let hasMouthButton = false;
  let animationInProgress = false;
  
  // Update paw position
  function updatePawPosition() {
    pawButton.style.left = currentPosition + 'px';
  }
  
  // Animate paw movement
  function animatePaw() {
    if (animationInProgress) return;
    animationInProgress = true;
    
    // Determine the target position
    if (isMovingRight) {
      // Moving right (to the edge of screen)
      targetPosition = viewportWidth;
      
      // Animate movement
      const animation = pawButton.animate([
        { left: currentPosition + 'px' },
        { left: targetPosition + 'px' }
      ], {
        duration: 3000,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
      
      animation.onfinish = function() {
        currentPosition = targetPosition;
        isMovingRight = false;
        
        // Add button to paw's mouth when it reaches the edge
        if (!hasMouthButton) {
          setTimeout(() => {
            mouthButton.style.opacity = '1';
            hasMouthButton = true;
          }, 500);
          
          // Return back after a delay
          setTimeout(() => {
            animationInProgress = false;
            animatePaw();
          }, 2000);
        }
      };
    } else {
      // Moving left (back to start position)
      targetPosition = 50; // Stay visible on screen
      
      // Animate movement
      const animation = pawButton.animate([
        { left: currentPosition + 'px' },
        { left: targetPosition + 'px' }
      ], {
        duration: 3000,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
      
      animation.onfinish = function() {
        currentPosition = targetPosition;
        isMovingRight = true;
        animationInProgress = false;
      };
    }
  }
  
  // Initial position
  updatePawPosition();
  
  // Click event for paw button
  pawButton.addEventListener('click', function() {
    if (!animationInProgress) {
      animatePaw();
    }
  });
  
  // Click event for mouth button
  mouthButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent triggering the paw click event
    surpriseMessage.style.display = 'block';
  });
  
  // Close button for surprise message
  closeButton.addEventListener('click', function() {
    surpriseMessage.style.display = 'none';
  });
  
  // Start animation automatically after 2 seconds
  setTimeout(() => {
    animatePaw();
  }, 2000);
});