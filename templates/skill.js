export const getTemplate = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00bc9b" />
      <stop offset="100%" stop-color="#5eaefd" />
    </linearGradient>
  </defs>
  <circle r="45" cx="50" cy="50" />
  <path
    class="meter"
    stroke="url(#gradient)"
    d="M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0"
    stroke-dashoffset="282.78302001953125"
    stroke-dasharray="282.78302001953125"
  />
  <text x="50" y="50" text-anchor="middle" dominant-baseline="central"></text>
</svg>`;
