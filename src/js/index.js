import lozad from 'lozad'
import '../scss/style.scss';

const buildImageScrollers = () => {
    console.log('building scrollers');
    const page = document.getElementById('page');
    const firstSection = page.querySelector('.page-section');

    const scrollers = document.createElement('div');
    scrollers.className = 'scrollers';

    const scrollerOne = document.createElement('div');
    scrollerOne.className = 'scroller';
    scrollerOne.id = 'scroller-one';

    const scrollerTwo = document.createElement('div');
    scrollerTwo.className = 'scroller';
    scrollerTwo.id = 'scroller-two';

    scrollers.appendChild(scrollerOne);
    scrollers.appendChild(scrollerTwo);
    firstSection.appendChild(scrollers);

    const footer = document.querySelector('footer');
    const images = footer.querySelectorAll('img');

    [...images].forEach((image, idx) => {
        const imgSrc = image.getAttribute("data-src");

        const newImg = document.createElement('img');
        newImg.className = 'lozad';
        newImg.src = imgSrc;

        idx % 2 ? 
            scrollerOne.appendChild(newImg) :
            scrollerTwo.appendChild(newImg);
    });
}

buildImageScrollers();

// const init = () => {
//     switch (document.readyState) {
//         case 'complete':
//         case 'interactive':
//             buildImageScrollers();
//             break;
//         default:
//             document.onreadystatechange = () => {
//                 if ( document.readyState === 'complete' || 
//                     document.readyState === 'interactive' ) {
//                     buildImageScrollers();
//                 }
//             }
//             break;
//     }
// }

// init();