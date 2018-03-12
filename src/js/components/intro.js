import 'objectFitPolyfill';
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

function intro() {

// ScrollMagic controller for all animation sequences
const controller = new ScrollMagic.Controller();

//Image sequence classes
const images = [
  "intro__image--1",
  "intro__image--2",
  "intro__image--3",
  "intro__image--4",
  "intro__image--5",
  "intro__image--6",
  "intro__image--7",
  "intro__image--8",
  "intro__image--9",
  "intro__image--10",
  "intro__image--11",
  "intro__image--12",
  "intro__image--13",
  "intro__image--14",
  "intro__image--15",
  "intro__image--16",
  "intro__image--17",
  "intro__image--18",
  "intro__image--19",
  "intro__image--20",
  "intro__image--21",
  "intro__image--22",
  "intro__image--23",
  "intro__image--24"
];

const obj = {curImg: 0};

const tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,
    roundProps: "curImg",
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function () {
      var elements = document.querySelectorAll('.intro__image');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = 'hidden';
      }
      document.getElementById(images[obj.curImg]).style.visibility = 'visible';
    }
  }
);

const imagesScene = new ScrollMagic.Scene({triggerElement: ".intro__trigger", duration: "500%"})
.setTween(tween)
.addTo(controller);

//Pin the Intro Media Section after image sequence is completed
new ScrollMagic.Scene({triggerElement: ".intro__end"})
.setClassToggle(".intro__media", "active")
.addTo(controller);



}


export default intro;
