chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('theclock.html', {
    'outerBounds': {
      'width': 100%,
      'height': 100%
    }
  });
});