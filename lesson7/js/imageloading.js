// get imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// parameters for IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 80px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

// check to see if IntersectionObserver is supported
if("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    // loop each img and check status and load
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else { // load all images
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}