/**
 * Basalt — satellite Dripnex theme. CommonJS token layer.
 * Volcanic column dark, cool lichen gray-green.
 * Not obsidian (steel glass). Not ash. Not juniper (forest berry).
 * Not pine / matcha / celadon.
 */
const TOKENS = {
  '--bg-base': '#101214',
  '--bg-surface': '#171a1c',
  '--bg-elevated': '#22262a',
  '--bg-inset': '#0a0c0e',
  '--bg-hover': 'rgba(212, 216, 220, 0.06)',
  '--bg-active': 'rgba(212, 216, 220, 0.1)',
  '--text-primary': '#d4d8dc',
  '--text-secondary': 'rgba(212, 216, 220, 0.74)',
  '--text-muted': 'rgba(212, 216, 220, 0.52)',
  '--text-faint': 'rgba(212, 216, 220, 0.34)',
  '--border': 'rgba(212, 216, 220, 0.12)',
  '--border-subtle': 'rgba(212, 216, 220, 0.07)',
  '--border-strong': 'rgba(212, 216, 220, 0.18)',
  '--accent': '#7a9078',
  '--accent-hover': '#8ba389',
  '--accent-muted': 'rgba(122, 144, 120, 0.2)',
  '--accent-subtle': 'rgba(122, 144, 120, 0.1)',
  '--glass-bg': 'rgba(16, 18, 20, 0.92)',
  '--glass-border': 'rgba(212, 216, 220, 0.1)',
  '--glass-bg-menu': 'rgba(34, 38, 42, 0.96)',
  '--glass-border-menu': 'rgba(212, 216, 220, 0.1)',
  '--status-active': '#7a9078',
  '--status-on-hold': '#c4a04a',
  '--status-completed': '#7a9078',
  '--status-dropped': '#c46b6b',
};
module.exports = {
  id: 'theme-basalt',
  name: 'Basalt',
  version: '0.1.0',
  description: 'Volcanic column dark. Cool lichen gray-green.',
  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-basalt',
      name: 'Basalt',
      description: 'Volcanic column dark. Cool lichen gray-green.',
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });
    return { dispose() { remove(); } };
  },
};
