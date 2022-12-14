const currentData = document.querySelector(".current-data"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons i");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    };
    for (let i = 1; i < lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : ""; 
        liTag += `<li class="${isToday}">${i}</li>`;
    };
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    };
    currentData.innerText = `${month[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};
renderCalendar();
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { // adding click event on both icons
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});