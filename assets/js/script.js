// FadeToggle jQuery sections - collapsible section turn into FAQs into CSS accordion
$(document).ready(function () {

  // FAQ sections toggles
  $("#lifeButton").click(function () {
    $("#lifeFAQ").fadeToggle(750);
  });

  $("#carButton").click(function () {
    $("#carFAQ").fadeToggle(750);
  });

  $("#homeButton").click(function () {
    $("#homeFAQ").fadeToggle(750);
  });

});
// END jQuery---------------------------

// FAQs Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
		event.preventDefault();
      let contactForm = document.getElementById("contact-form");
      let successMessage = document.getElementById("successMessage");

      contactForm.classList.add("d-none");
      successMessage.classList.remove("d-none");
      successMessage.classList.add("d-block");



	});




