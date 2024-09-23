// service tab state
let currentTab = 1;
const totalTabs = 9;
let autoSwitch = true;

function updateTabs() {
  // Reset all tabs and their content
  for (let i = 1; i <= totalTabs; i++) {
    document.getElementById(`vertical-tab-with-border-${i}`).classList.add('hidden');
    document.getElementById(`vertical-tab-with-border-item-${i}`).classList.remove('hs-tab-active:border-lotion_white', 'hs-tab-active:text-lotion_white');
    document.getElementById(`vertical-tab-with-border-item-${i}`).setAttribute('aria-selected', 'false');
  }

  // Show the current tab and its content
  document.getElementById(`vertical-tab-with-border-${currentTab}`).classList.remove('hidden');
  document.getElementById(`vertical-tab-with-border-item-${currentTab}`).classList.add('hs-tab-active:border-lotion_white', 'hs-tab-active:text-lotion_white');
  document.getElementById(`vertical-tab-with-border-item-${currentTab}`).setAttribute('aria-selected', 'true');
}

// Automatically switch tabs every 3 seconds if autoSwitch is true
setInterval(function () {
  if (autoSwitch) {
    currentTab = currentTab === totalTabs ? 1 : currentTab + 1;
    updateTabs();
  }
}, 6000);

// Handle "Next" button click on small screens
document.getElementById('next-tab').addEventListener('click', function () {
  autoSwitch = false;  // Stop auto-switching when manually switching
  currentTab = currentTab === totalTabs ? 1 : currentTab + 1;
  updateTabs();
});

// Handle "Previous" button click on small screens
document.getElementById('prev-tab').addEventListener('click', function () {
  autoSwitch = false;  // Stop auto-switching when manually switching
  currentTab = currentTab === 1 ? totalTabs : currentTab - 1;
  updateTabs();
});

// Handle large screen tab clicks
document.querySelectorAll('[role="tab"]').forEach(tab => {
  tab.addEventListener('click', function() {
    const selectedTabId = this.getAttribute('data-hs-tab').replace('#vertical-tab-with-border-', '');
    currentTab = parseInt(selectedTabId);
  //   autoSwitch = false; 
    updateTabs();
  });
});

// Initial call to show the first tab on page load
updateTabs();// service tab state
