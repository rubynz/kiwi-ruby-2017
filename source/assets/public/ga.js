function DNT () {
  if ('msDoNotTrack' in navigator) return navigator.msDoNotTrack;
  if ('doNotTrack' in window)      return window.doNotTrack;
  if ('doNotTrack' in navigator)   return navigator.doNotTrack;
  return 0;
};

if (DNT() != 1) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-98197426-1', 'auto');
  ga('send', 'pageview');
}
