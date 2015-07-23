function toggleContent(id) {
  // Get the DOM reference
  var contentId = document.getElementById(id);
  // Toggle 
  contentId.style.display == "none" ? contentId.style.display = "block" : contentId.style.display = "none"; 
}