var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
})


// get date-starting
let blogDate = document.getElementById("month")
document.getElementById("day").innerHTML = new Date().getDay();
document.getElementById("year").innerHTML = new Date().getFullYear();
switch (new Date().getDay()) {
  case 0:
    blogDate.innerHTML = "January";
    break;
  case 1:
    blogDate.innerHTML = "February";
    break;
  case 2:
    blogDate.innerHTML = "March";
    break;
  case 3:
    blogDate.innerHTML = "April";
    break;
  case 4:
    blogDate.innerHTML = "May";
    break;
  case 5:
    blogDate.innerHTML = "June";
    break;
  case 6:
    blogDate.innerHTML = "July";
    break
  case 7:
    blogDate.innerHTML = "August";
    break
  case 8:
    blogDate.innerHTML = "September";
    break
  case 9:
    blogDate.innerHTML = "October";
    break
  case 10:
    blogDate.innerHTML = "November";
    break
  case 11:
    blogDate.innerHTML = "December";
}
// get date-ending 


