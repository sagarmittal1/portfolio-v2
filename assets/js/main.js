//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="cyan">
<div class="nav-wrapper">
    <a href="index.html" class="brand-logo"><img src="assets/images/logo.png"></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>

        <!-- <li><a class="white-text" href="experience.html">Experience</a></li> -->

        <li><a class="white-text" href="education.html">Education</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>

        <!-- <li><a class="white-text" href="research.html">Research</a></li> -->

        <li><a class="white-text" href="https://sagarmittal.hashnode.dev/" target="_blank">Blog</a></li>
        <li><a class="white-text" href="https://www.stopstalk.com/user/profile/SagarMittal" target="_blank">CP Profile</a></li>
        <li><a class="white-text" href="https://drive.google.com/file/d/16TGbvzkVomPA98jOW40MlpXQ4iMbDTsc/view?usp=sharing" target="_blank">My Resume</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a href="index.html">Home</a></li>

<!-- <li><a href="experience.html">Experience</a></li> -->

<li><a href="education.html">Education</a></li>
<li><a href="projects.html">Projects</a></li>

<!-- <li><a href="research.html">Research</a></li> -->

<li><a href="https://sagarmittal.hashnode.dev/" target="_blank">Blog</a></li>
<li><a href="https://www.stopstalk.com/user/profile/SagarMittal" target="_blank">CP Profile</a></li>
<li><a href="https://drive.google.com/file/d/16TGbvzkVomPA98jOW40MlpXQ4iMbDTsc/view?usp=sharing" target="_blank">My Resume</a></li>


<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot side-toggle'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="webintern-footer-inner">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-md-6 pt-3" >
      <div class="col-sm-6 col-md-7">
        <a class="webintern-footer-logo" href="#">
          <center><img src="assets/images/logo.png"style="width: 220px;"/></center>
        </a>
        <div class="simple-text text-center dark padding-sm">
          <p >
            "I’m a curious little CS sophomore looking to create impact with what I learn."
          </p>
        <div class="empty-space xs-25 sm-25"></div>
      </div>
    </div>
    <!-- Social media icons for footer -->

<div class="social-icons-footer">
  <a class="social-icon-footer twitter" href="https://twitter.com/sagar_mittal5" target="_blank" rel="author">
    <i class="fab fa-twitter"></i>
      </a>
  <a class="social-icon-footer github" href="https://github.com/sagarmittal1" target="_blank" rel="author">
    <i class="fab fa-github"></i>
      </a>
  <a class="social-icon-footer linkedin" href="https://linkedin.com/in/sagarmittal5" target="_blank" rel="author">
    <i class="fab fa-linkedin-in"></i>
      </a>
  <a class="social-icon-footer instagram" href="https://instagram.com/sagar_mittal5" target="_blank" rel="author">
    <i class="fab fa-instagram"></i>
      </a>
  <a class="social-icon-footer dev" href="https://dev.to/sagar_mittal" target="_blank" rel="author">
    <i class="fab fa-dev"></i>
      </a>

  <a class="social-icon-footer envelope" href="mailto:mittalsagar006@gmail.com" target="_blank" rel="author">
    <i class="far fa-envelope"></i>
      </a>


  <br>

</div>
    </div>

      <div class="col-sm-6 col-md-5 pt-3 footer-2">

        <!-- footer_title -->
        <h4 class="webintern_footer_title h5">
          <small>Get In Touch</small>
        </h4>
        <!-- TT-SUBSCRIBE -->

      <div class="contact-form">
          <form>
              <fieldset class="form-group text-center">
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Name">
              </fieldset>
              <fieldset class="form-group text-center">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
              </fieldset>
              <fieldset class="form-group text-center">
                  <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
              </fieldset>
              <fieldset class="form-group text-xs-right text-center">
                  <button type="button" class="send-btn btn btn-lg">Send</button>
              </fieldset>
          </form>
      </div>
        <div class="empty-space marg-lg-b30"></div>
      </div>
    </div>
  </div>
</div>
<div class="tt-copy">
  <div class="container col-sm-6">
    <!-- <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;" by Sagar Miital></i></center> -->
  </div>
</div>
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

var checkbox = document.querySelector('input[name=theme]');
if(checkbox)
 {
 checkbox.addEventListener('change', function(){
   if(this.checked)
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'dark')
   }
   else
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'light')
   }
 });

 let trans = () => {
   document.documentElement.classList.add('transition');
   window.setTimeout(() => {
     document.documentElement.classList.remove('transition')
   }, 1000)
 }}
