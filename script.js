function openTab(tabName) {
    const tabContents = document.getElementsByClassName("tabContent");
    for (const content of tabContents) {
      content.style.display = "none";
    }
  
    document.getElementById(tabName + "Content").style.display = "block";
  }
  