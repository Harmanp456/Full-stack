const THEME_KEY = 'admin:theme';

function applyTheme(theme){
  if(theme === 'light') document.documentElement.setAttribute('data-theme','light');
  else document.documentElement.removeAttribute('data-theme');
}

function updateButtonLabel(){
  const btn = document.getElementById('themeBtn');
  if(!btn) return;
  const theme = localStorage.getItem(THEME_KEY) || 'dark';
  if(theme === 'dark') btn.innerHTML = ' Light Mode';
  else btn.innerHTML = ' Dark Mode';
}

function toggleTheme(){
  const current = localStorage.getItem(THEME_KEY) || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  updateButtonLabel();
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved);
  const btn = document.getElementById('themeBtn');
  if(btn) btn.addEventListener('click', toggleTheme);
  updateButtonLabel();
});
