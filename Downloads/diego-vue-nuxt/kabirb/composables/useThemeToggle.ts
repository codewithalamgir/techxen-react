
export default function useThemeToggle() {

  const isActive = ref<boolean>(false);

  const toggleTheme = () => {
    const themeScheme = localStorage.getItem('tp_theme_scheme');
    const themeToggle = document.querySelector('.themepure-theme-toggle') as HTMLElement;

    if (themeScheme === 'tp-theme-dark') {
      tpSetScheme('tp-theme-light');
      themeToggle.classList.remove('dark-active');
      themeToggle.classList.add('light-active');
    } else {
      tpSetScheme('tp-theme-dark');
      themeToggle.classList.remove('light-active');
      themeToggle.classList.add('dark-active');
    }
  };

  const tpSetScheme = (tp_theme: string) => {
    localStorage.setItem('tp_theme_scheme', tp_theme);
    document.documentElement.setAttribute('tp-theme', tp_theme);

    // Toggle button class
    isActive.value = tp_theme === 'tp-theme-dark';
  };

  const tpInitTheme = () => {
    const themeToggle: any = document.querySelector('.themepure-theme-toggle');
    const themeInput: any = document.querySelector('.themepure-theme-toggle-input');

    if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-light') {
      tpSetScheme('tp-theme-light');
      themeToggle.classList.remove('dark-active');
      themeToggle.classList.add('light-active');
      themeInput.checked = false;
    } else {
      tpSetScheme('tp-theme-dark');
      themeInput.checked = true;
      themeToggle.classList.remove('light-active');
      themeToggle.classList.add('dark-active');
    }
  };

  return {
    isActive,
    toggleTheme,
    tpSetScheme,
    tpInitTheme,
  }
}