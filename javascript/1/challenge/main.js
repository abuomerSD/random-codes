let pageTitle, desciption, date ;
pageTitle = "Elzero";
desciption = "Elzero Web School";
date = "25/10";

let card = `<div>
                <h3>Hello ${pageTitle}</h3>
                <p>${desciption}</p>
                <span>${date}</span>
            </div>`.repeat(4);

document.write(card);
// for (let i = 0; i <= 3; i++) {
//     document.write(card);
// }