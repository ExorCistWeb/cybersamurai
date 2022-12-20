function scrollChanger() {
    document.body.classList.toggle("no-scroll");
    document.documentElement.classList.toggle("no-scroll");
}

function menu() {
    var screenWidth = window.innerWidth;
    const status = document.querySelector(".js-menu-status"),
        header = document.querySelector("header");

    header.addEventListener("click", (e) => {
        console.log(123)
        if (e.target.closest("li")) {
            status.checked = !status.checked;
            if (screenWidth <= 992) scrollChanger();
        }
        if (e.target.closest(".js-close-menu")) {
            status.checked = false;
            if (screenWidth <= 992) scrollChanger();
        }
        if (e.target.closest("header")) {
            header.classList.add("header--transparent");
        }
    });

    document.querySelector(".js-menu-status").onclick = () => {
        if (screenWidth <= 992) scrollChanger();
    };

    window.addEventListener("resize", () => {
        screenWidth = window.innerWidth;
        status.checked = false;
        document.body.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
    });
}

menu();


// const smoothLinks = document.querySelectorAll('.menu_flex a[href^="#"]');
// if(smoothLinks) {
// 	smoothLinks.forEach(link => {
// 		link.addEventListener('click', function(e) {

// 			const target = e.target;
// 			smoothLinks.forEach(i => i.classList.remove('active'));
// 			target.classList.add('active')
// 			e.preventDefault();

// 			let href = this.getAttribute('href').substring(1).trim();

// 			const scrollTarget = document.getElementById(href);

// 			const topOffset = document.querySelector('.headerHider').offsetHeight;
// 			// const topOffset = 0; // если не нужен отступ сверху 
// 			const elementPosition = scrollTarget.getBoundingClientRect().top;
// 			const offsetPosition = elementPosition - topOffset;

// 			window.scrollBy({
// 				top: offsetPosition,
// 				behavior: 'smooth'
// 			});
// 		})
// 	})

// }
// const smoothLinks = document.querySelectorAll('.page_link a[href^="#"]');
// if (smoothLinks) {
//     smoothLinks.forEach(link => {
//         link.addEventListener('click', function(e) {

//             const target = e.target;
//             smoothLinks.forEach(i => i.classList.remove('active'));
//             target.classList.add('active')
//             e.preventDefault();

//             let href = this.getAttribute('href').substring(1).trim();

//             const scrollTarget = document.getElementById(href);

//             const topOffset = document.querySelector('.headerHider').offsetHeight;
//             // const topOffset = 0; // если не нужен отступ сверху 
//             const elementPosition = scrollTarget.getBoundingClientRect().top;
//             const offsetPosition = elementPosition - topOffset;

//             window.scrollBy({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             });
//         })
//     })

// }
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});