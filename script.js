function showContent(contentId) {
    var contents = document.querySelectorAll('.center-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    var content = document.getElementById(contentId);
    content.classList.add('active');
}
